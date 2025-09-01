# 🎯 Visual Product Search System

A full-stack project that allows users to search for products **visually**. Upload an image or provide an image URL, and the system returns the most **visually similar products** from the database.

---

## 🌟 Features

* Upload an image or provide an image URL for search.
* Cosine similarity-based image matching.
* Top N results with deduplication.
* Stores product embeddings in **MongoDB**.
* Responsive and user-friendly **frontend**.

---

## 🏗️ Architecture

```text
Frontend (HTML/CSS/JS)
        |
        v
Backend (Node.js + Express + MongoDB)
        |
        v
ML-Service (Flask + PyTorch ResNet18)
```

* **Frontend** → Handles user input and displays results.
* **Backend** → Receives requests, fetches embeddings, performs similarity search.
* **ML-Service** → Generates embeddings using pretrained ResNet18.

---

## 🛠️ Tech Stack

| Service    | Tech Stack                                         |
| ---------- | -------------------------------------------------- |
| Frontend   | HTML5, CSS3, JavaScript                            |
| Backend    | Node.js, Express, MongoDB, Axios                   |
| ML-Service | Python, Flask, PyTorch, torchvision, Pillow, numpy |

---

## ⚡ Getting Started(How To Run)

### **1️⃣ Frontend**

* Open `index.html` in your browser.
* Ensure backend API URL is set correctly in JS.

### **2️⃣ Backend**

```bash
npm install
```

* Set environment variables(in backend):

```env
PORT=5000
MONGO_URI=mongodb+srv://vinayak:vinayak123@cluster0.gzflrxy.mongodb.net/
FLASK_API_URL=http://localhost:8000/embed
FRONTEND_URL=https://searchprodut.netlify.app/
```

* Run server:

```bash
node server.js
```

### **3️⃣ ML-Service**

```bash
pip install flask torch torchvision pillow numpy requests
or
pip install -r requirements.txt
```

* Run service:

```bash
python app.py
```

* Runs at `http://localhost:8000/embed`.

---

## 🚀 Usage

1. Open frontend in browser.
2. Upload an image or enter an image URL.
3. Click **Search**.
4. View top visually similar products.

---

## 🔮 Future Improvements

* Deploy services on cloud (Render / AWS / Heroku).
* Implement caching for faster repeated searches.
* Add FAISS or ANN indexing for scalable similarity search.
* Enhance frontend UI with responsive design and animations.

---

## 📂 Project Structure

```
project-root/
│
├── backend/
│   ├── node_modules/
│   ├── product_data/
│   ├── src/
│   │   ├── config/
│   │   ├── controllers/
│   │   ├── models/
│   │   ├── routes/
│   │   └── utils/
│   ├── .env
│   ├── generateProduct.js
│   ├── package-lock.json
│   ├── package.json
│   ├── seed.js
│   └── server.js
│
├── frontend/
│   ├── assets/
│   ├── index.html
│   ├── script.js
│   └── style.css
│
├── ml-service/
│   ├── embeddings/
│   ├── __pycache__/
│   ├── .env
│   ├── app.py
│   ├── model.py
│   ├── requirements.txt
│   
│
├── .gitignore
├── Readme.md

```

---

