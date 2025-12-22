# 📚 BookCourier – Library-to-Home Delivery System

🔗 **Live Site:** https://book-librariary-a-11.netlify.app/ 

🔗 **Server Repo:** https://github.com/Parvez-hasan/book-library-server 
🔗 **Client Repo:** https://github.com/Parvez-hasan/book-library-client 

---

## 📌 Project Purpose

**BookCourier** is a modern library-to-home delivery management system where users can browse books from nearby libraries, place delivery requests, track orders, and manage payments without physically visiting the library.

This project is built to demonstrate:
- Full-stack development skills
- Role-based access control
- Secure authentication & authorization
- Clean UI/UX design
- Scalable backend architecture

---

## 👥 User Roles

- 👤 **User**
- 📚 **Librarian**
- 👑 **Admin**

Each role has a dedicated dashboard with specific permissions and responsibilities.

---

## 🚀 Key Features

### 🔐 Authentication & Security
- Email & Password Authentication
- Google Social Login
- Firebase Authentication
- JWT Token verification for protected server routes
- Environment variables for Firebase & MongoDB credentials

---

### 🏠 Home Page
- Hero Banner with 3 animated sliders
- Latest Books section (last 4–6 added books)
- Delivery Coverage Map
- “Why Choose BookCourier” section
- At least 2 extra well-designed sections
- Framer Motion animations

---

### 📚 Books
- All Books page with card layout
- Search books by title
- Sort books by price
- Only **published** books are visible to users
- Book Details page with full information

---

### 🛒 Book Order System
- Order books via modal (Headless UI)
- Order status tracking:
  - `pending`
  - `shipped`
  - `delivered`
  - `cancelled`
- Payment status:
  - `unpaid`
  - `paid`

---

### ❤️ Wishlist (Challenge Feature)
- Add book to wishlist from Book Details page
- View wishlisted books in **User Dashboard → My Wishlist**

---

### ⭐ Review & Rating (Challenge Feature)
- Only users who ordered a book can review it
- Ratings & reviews visible on Book Details page

---

## 🧑‍💼 Dashboards

### 👤 User Dashboard
- My Orders (Cancel / Pay Now)
- My Profile (Update name & image)
- Invoices (Payment history)
- My Wishlist

---

### 📚 Librarian Dashboard
- Add Book
- My Books (Publish / Unpublish)
- Orders Management
  - Update order status:
    - pending → shipped → delivered

---

### 👑 Admin Dashboard
- All Users
  - Make Librarian
  - Make Admin
- Manage Books
  - Publish / Unpublish
  - Delete books (also deletes related orders)
- My Profile

---

## 🧱 Tech Stack

### 🖥️ Frontend
- React 
- React Router 
- Tailwind CSS 
- DaisyUI
- Framer Motion
- Firebase Authentication
- Axios 
- SweetAlert2
- React Hot Toast
- Lucide React Icons
- react-leaflet

---

### 🌐 Backend
- Node.js
- Express.js
- MongoDB Atlas
- JWT Authentication
- CORS
- dotenv
- stripe

---

## 🔐 Environment Variables

### Client Side
```env
VITE_FIREBASE_API_KEY=your_key
VITE_FIREBASE_AUTH_DOMAIN=your_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
