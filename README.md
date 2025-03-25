# E-commerce Website

A full-featured e-commerce website built with Node.js and Express, featuring user authentication, product management, shopping cart functionality, and order processing.

## Features

- User Authentication (Register/Login)
- Product Browsing and Search
- Shopping Cart Management
- Secure Checkout Process
- Order History and Tracking
- Product Categories
- Responsive Design

## Project Structure

```
├── ecommerce/
│   ├── assets/
│   │   ├── css/
│   │   ├── images/
│   │   └── js/
│   └── links/
│       ├── about.html
│       ├── cart.html
│       ├── category.html
│       ├── checkout.html
│       ├── contact.html
│       ├── index.html
│       ├── order_confirmation.html
│       ├── product.html
│       ├── product_detail.html
│       └── search.html
├── middleware/
│   └── auth.js
├── models/
│   ├── Order.js
│   ├── Product.js
│   └── User.js
├── routes/
│   ├── auth.js
│   ├── orders.js
│   └── products.js
└── server.js
```

## Prerequisites

- Node.js (v14 or higher)
- npm (Node Package Manager)

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd ecommerce
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and add your environment variables:
   ```env
   PORT=3000
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   ```

4. Start the server:
   ```bash
   npm start
   ```

## Technologies Used

- **Backend:**
  - Node.js
  - Express.js
  - MongoDB (with Mongoose)
  - JSON Web Tokens (JWT) for authentication

- **Frontend:**
  - HTML5
  - CSS3
  - JavaScript
  - Bootstrap (for responsive design)

## API Endpoints

### Authentication
- POST `/api/auth/register` - Register a new user
- POST `/api/auth/login` - Login user

### Products
- GET `/api/products` - Get all products
- GET `/api/products/:id` - Get product by ID
- POST `/api/products` - Create new product (Admin only)
- PUT `/api/products/:id` - Update product (Admin only)
- DELETE `/api/products/:id` - Delete product (Admin only)

### Orders
- GET `/api/orders` - Get user's orders
- POST `/api/orders` - Create new order
- GET `/api/orders/:id` - Get order by ID

## Security

- Password hashing
- JWT authentication
- Protected routes
- Input validation
- XSS protection

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.