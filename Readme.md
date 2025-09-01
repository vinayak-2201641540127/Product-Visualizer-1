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
# 🎯 Visual Product Search System

[![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Python](https://img.shields.io/badge/Python-3.11-blue.svg)](https://www.python.org/)
[![Node.js](https://img.shields.io/badge/Node.js-18-green.svg)](https://nodejs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-brightgreen.svg)](https://www.mongodb.com/)

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

## ⚡ Getting Started

### **1️⃣ Frontend**

* Open `index.html` in your browser.
* Ensure backend API URL is set correctly in JS.

### **2️⃣ Backend**

```bash
npm install
```

* Set environment variables:

```env
MONGO_URI=<your_mongodb_connection_string>
ML_API_URL=http://localhost:8000/embed
```

* Run server:

```bash
node index.js
```

### **3️⃣ ML-Service**

```bash
pip install flask torch torchvision pillow numpy requests
```

* Run service:

```bash
python ml_service.py
```

* Runs at `http://localhost:8000/embed`.

---

## 🚀 Usage

1. Open frontend in browser.
2. Upload an image or enter an image URL.
3. Select Range out out 5-10.
4. Click **Search**.
5. View top visually similar products.

---

## 🌐 Deployment

| Service    | Platform / Link                                                      |
| ---------- | -------------------------------------------------------------------- |
| Frontend   | Netlify / [Frontend Link](https://searchprodut.netlify.app/)    |
| Backend    | Render / [Backend Link](https://product-visualizer.onrender.com)      |
| ML-Service | Render / [ML-Service Link](https://product-visualizer-ml-service.onrender.com) |


---
Project Overview:
<img width="1907" height="828" alt="Screenshot 2025-09-01 063652" src="https://github.com/user-attachments/assets/012c1e69-53e2-423b-b5e1-5632de2fcf47" />

After Selecting Imagesa and Clicking "Search":
<img width="1920" height="1080" alt="Screenshot (118)" src="https://github.com/user-attachments/assets/d4aeab5a-05e4-4470-b180-8393d565efc8" />

By Default 8 Images will come:
<img width="1872" height="1042" alt="Screenshot 2025-09-01 063936" src="https://github.com/user-attachments/assets/5479951f-cc1a-473e-849e-9235b2641457" />

After changinf range from 8 to 5:
<img width="1894" height="843" alt="Screenshot 2025-09-01 064009" src="https://github.com/user-attachments/assets/57fdaac3-365e-4919-bb26-2da4153dd8af" />







