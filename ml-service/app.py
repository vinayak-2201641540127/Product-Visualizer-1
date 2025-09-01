from flask import Flask, request, jsonify
import torch
import torchvision.models as models
import torchvision.transforms as transforms
from PIL import Image
import requests
from io import BytesIO

app = Flask(__name__)

# Load ResNet18 once,
model = models.resnet18(weights=models.ResNet18_Weights.DEFAULT)
model.fc = torch.nn.Identity()   
model.eval()

transform = transforms.Compose([
    transforms.Resize((224, 224)),
    transforms.ToTensor()
])

@app.route("/embed", methods=["POST"])
def embed():
    try:
        if "file" in request.files:
            image = Image.open(request.files["file"].stream).convert("RGB")
        else:
            data = request.get_json()
            url = data.get("url")
            response = requests.get(url, timeout=5)
            image = Image.open(BytesIO(response.content)).convert("RGB")

        tensor = transform(image).unsqueeze(0)

        with torch.no_grad():
            embedding = model(tensor).squeeze().tolist()

        return jsonify({"embedding": embedding})

    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=8000, debug=True)
