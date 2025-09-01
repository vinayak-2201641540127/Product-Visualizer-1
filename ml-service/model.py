import torch
import torchvision.models as models
import torchvision.transforms as transforms
from PIL import Image
import requests
from io import BytesIO

# Load pretrained ResNet18
model = models.resnet18(pretrained=True)
model = torch.nn.Sequential(*list(model.children())[:-1])  
model.eval()

# Transform image for model
transform = transforms.Compose([
    transforms.Resize((224, 224)),
    transforms.ToTensor(),
    transforms.Normalize(mean=[0.485, 0.456, 0.406],
                         std=[0.229, 0.224, 0.225])
])

def get_embedding_from_pil(image: Image.Image):
    img_tensor = transform(image).unsqueeze(0) 
    with torch.no_grad():
        embedding = model(img_tensor).squeeze().numpy()
    return embedding.tolist()

def get_embedding_from_url(url: str):
    response = requests.get(url)
    img = Image.open(BytesIO(response.content)).convert("RGB")
    return get_embedding_from_pil(img)
