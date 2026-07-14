# 🛋️ FurniHome - MERN Furniture Store

A full-stack Furniture Store web application built using the MERN Stack (MongoDB, Express.js, React.js, Node.js). The application allows users to browse furniture, search and filter products, manage their cart and wishlist, place orders, download invoices, and contact the store.

---

## 🚀 Features

### 👤 User
- User Registration & Login (JWT Authentication)
- User Profile Management

### 🛍️ Products
- Browse Furniture Products
- Product Details Page
- Search Products
- Category Filter
- Price Filter
- Sort by Price & Rating

### ❤️ Wishlist
- Add to Wishlist
- Remove from Wishlist

### 🛒 Cart
- Add to Cart
- Update Quantity
- Remove Product
- Clear Cart

### 📦 Orders
- Checkout
- Cash on Delivery
- My Orders
- Order History
- Download PDF Invoice

### 📩 Contact
- Contact Form
- Messages stored in MongoDB

### 🎨 UI
- Responsive Design
- Loading Spinner
- Toast Notifications
- 404 Not Found Page

---

## 🛠️ Tech Stack

### Frontend
- React.js
- React Router
- Context API
- Axios
- React Hot Toast
- Lucide React
- CSS

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- bcrypt

---

## 📂 Project Structure

```
FurniHome-MERN
│
├── server
│   ├── controllers
│   ├── middleware
│   ├── models
│   ├── routes
│   └── index.js
│
├── src
│   ├── api
│   ├── components
│   ├── context
│   ├── pages
│   ├── utils
│   └── App.jsx
│
└── package.json
```

---

## ⚙️ Installation

### Clone the repository

```bash
git clone https://github.com/Asmita5145/FurniHome-MERN.git
```

### Install dependencies

Frontend

```bash
npm install
```

Backend

```bash
cd server
npm install
```

### Configure Environment Variables

Create a `.env` file inside the `server` folder and add:

```
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
PORT=5000
```

### Run Backend

```bash
cd server
npm start
```

### Run Frontend

```bash
npm run dev
```

---

## 👩‍💻 Author

**Asmita**

Computer Science & Engineering Student

---

⭐ If you like this project, feel free to star this repository.