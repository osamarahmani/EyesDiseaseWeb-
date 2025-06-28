Absolutely, Arman! Here's a complete **README.md** for your **Retinal Disease Detection Project** that:

* Describes the project
* Includes setup steps for local development
* Details deployment (Render + Vercel)
* Documents the issues you faced (with fixes)
* Contains all terminal commands you ran

---

### ✅ Copy-Paste this into `README.md`

```markdown
# 👁️ Retinal Disease Detection using Roboflow + FastAPI + React

A web-based application to predict retinal diseases like Cataract, Diabetic Retinopathy, Glaucoma, or Normal eyes by uploading retinal images. The backend is powered by FastAPI and Roboflow API, and the frontend is built with React.

---

## 📁 Project Structure

```

.
├── backend/
│   ├── main.py
│   ├── requirements.txt
│   └── runtime.txt
└── frontend/
└── \[React app files]

````

---

## 🚀 Features

- Upload retinal images to detect diseases
- Integrated with Roboflow Inference API
- React frontend with beautiful card-based design
- FastAPI backend deployed on Render
- Frontend hosted on Vercel

---

## ⚙️ Backend Setup (Local)

### 🔹 1. Clone the repo

```bash
git clone https://github.com/osamarahmani/Retinal-Disease-CheckerBackend.git
cd Retinal-Disease-CheckerBackend
````

### 🔹 2. Create and activate virtual environment

```bash
python -m venv venv
# On Windows:
venv\Scripts\activate
```

### 🔹 3. Install dependencies

```bash
pip install -r requirements.txt
```

### 🔹 4. Run the server

```bash
uvicorn main:app --reload
```

---

## 🌐 Backend Deployment on Render

### ✅ Add these 2 files before deploying:

* **requirements.txt** – All your Python packages
* **runtime.txt** – Specify Python version

```
runtime.txt
-------------
python-3.11.9
```

### 🔹 Common Errors & Fixes

#### ❌ Error: `inference-sdk==0.51.1 not found`

✅ **Fix:** Downgrade Python in `runtime.txt` to a supported version like `python-3.11.9`

---

## 💻 Frontend Deployment on Vercel

### 🔹 Setup

1. Create a Vercel account
2. Push your frontend code (e.g., `frontend/`) to GitHub
3. Import repo in Vercel dashboard
4. Deploy and set Environment Variables if needed

### ❗ Common Issue

#### ❌ Problem: Visitors are asked to "Log in to Vercel"

✅ **Fix:** You are sharing a **Preview URL**.

* Use: `https://your-project-name.vercel.app`
* Do **not** share preview URLs like:

  ```
  https://retinal-disease-checker-58jodkbin-osamarahmanis-projects.vercel.app/
  ```

---

## 🔌 API Endpoint

| Method | Endpoint   | Description                |
| ------ | ---------- | -------------------------- |
| GET    | `/`        | Welcome Route              |
| POST   | `/predict` | Upload image for detection |

---

## 🧠 Inference SDK (Roboflow)

Your backend uses Roboflow’s `InferenceHTTPClient`:

```python
client = InferenceHTTPClient(
    api_url="https://serverless.roboflow.com",
    api_key="YOUR_API_KEY"
)

result = client.infer("image.jpg", model_id="entrmalfinal/2")
```

---

## 🔐 CORS Configuration (FastAPI)

```python
from fastapi.middleware.cors import CORSMiddleware

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Or only your Vercel frontend
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
```

---

## 🛠️ Commands Used During Setup

```bash
# Clone project
git clone <repo-url>

# Create virtual environment
python -m venv venv
venv\Scripts\activate

# Install packages
pip install -r requirements.txt

# Run locally
uvicorn main:app --reload

# Set up git repo
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/<username>/<repo-name>.git
git push -u origin main

# Set python version for Render
echo "python-3.11.9" > runtime.txt
git add runtime.txt
git commit -m "Specify Python version"
git push
```

---

## 🐛 Issues Faced

| Issue                         | Fix                                           |
| ----------------------------- | --------------------------------------------- |
| `inference-sdk` not found     | Downgrade to Python 3.11                      |
| Render ignoring `runtime.txt` | Forgot to commit and push `runtime.txt`       |
| Git changes not showing       | Used `git add` before `git commit`            |
| Vercel asking login           | Was using a Preview URL instead of Production |

---

## 📌 Final Working Deployment

**Frontend (Vercel):** [https://retinal-disease-checker.vercel.app](https://retinal-disease-checker.vercel.app)
**Backend (Render):** [https://your-api-url.onrender.com](https://your-api-url.onrender.com)

---

## 💡 Credits

* 👨‍💻 Built by Arman Malik
* 🤖 Powered by Roboflow
* ⚡ FastAPI + React

---


