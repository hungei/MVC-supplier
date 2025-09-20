# Supplier & Product Management System

A web application for managing **Suppliers** and **Products** using CRUD operations, built with the **MVC (Model-View-C## 🔒 Security Best Practicesntroll## 📝 Usage Examplesr)** architecture pattern.

## 🚀 Technologies Used

- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - MongoDB object modeling
- **EJS** - Template engine
- **Bootstrap 5** - Frontend framework
- **Body-parser** - Request parsing middleware
- **bcryptjs** - Password hashing
- **Express-session** - Session management
- **dotenv** - Environment variable management

## 📁 Project Structure

```
MVC-supplier/
├── app.js                 # Main application file
├── package.json          # Dependencies and scripts
├── controllers/          # Business logic
│   ├── ProductController.js
│   └── SupplierController.js
├── models/              # Data models
│   ├── product.js
│   └── supplier.js
├── routes/              # Route definitions
│   ├── productRoutes.js
│   └── supplierRoutes.js
├── views/               # EJS templates
│   ├── index.ejs
│   ├── partials/
│   ├── products/
│   └── suppliers/
└── public/              # Static assets
    ├── css/
    └── js/
```

## ✨ Features

### Supplier Management
- ➕ **Create** new suppliers
- 📋 **View** supplier list
- ✏️ **Update** supplier information
- 🗑️ **Delete** suppliers

### Product Management
- ➕ **Create** new products (linked to suppliers)
- 📋 **View** product list
- ✏️ **Update** product information
- 🗑️ **Delete** products

## 🛠️ Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (running locally or remote connection)
- npm or yarn package manager

### Installation Steps

1. **Clone the repository**
   ```bash
   git clone <your-repository-url>
   cd MVC-supplier
   ```

2. **Install dependencies**
   ```bash
   npm install
   npm install dotenv  # For environment variables
   ```

3. **Set up environment variables**
   Create a `.env` file in the root directory:
   ```env
   MONGODB_URI=mongodb://localhost:27017/your_database_name
   PORT=3000
   ```

4. **Start MongoDB**
   Make sure MongoDB is running on your system:
   ```bash
   mongod
   ```

5. **Run the application**
   ```bash
   node app.js
   ```

6. **Access the application**
   Open your browser and navigate to: `http://localhost:3000` (or your configured port)

## 🌐 API Endpoints

### Supplier Routes
- `GET /suppliers` - List all suppliers
- `GET /suppliers/new` - Show create supplier form
- `POST /suppliers` - Create new supplier
- `GET /suppliers/:id/edit` - Show edit supplier form
- `PUT /suppliers/:id` - Update supplier
- `DELETE /suppliers/:id` - Delete supplier

### Product Routes
- `GET /products` - List all products
- `GET /products/new` - Show create product form
- `POST /products` - Create new product
- `GET /products/:id/edit` - Show edit product form
- `PUT /products/:id` - Update product
- `DELETE /products/:id` - Delete product

## 🏗️ MVC Architecture

- **Models** (`/models`): Define data structure and database interactions
- **Views** (`/views`): EJS templates for rendering HTML pages
- **Controllers** (`/controllers`): Handle business logic and coordinate between models and views

## 🎨 Frontend

The application uses:
- **EJS** templating engine for server-side rendering
- **Bootstrap 5** for responsive design and styling
- **CSS** custom styles in `/public/css/style.css`



## � Security Best Practices

- **Environment Variables**: All sensitive configuration is stored in environment variables
- **Database Security**: Never hardcode database credentials in your code
- **Git Security**: Always add `.env` files to `.gitignore` to prevent accidental commits
- **Connection Security**: Use secure connection strings for production databases

## �📝 Usage Examples

### Creating a Supplier
1. Navigate to `/suppliers`
2. Click "Add New Supplier"
3. Fill in the supplier details
4. Submit the form

### Managing Products
1. Navigate to `/products`
2. Click "Add New Product"
3. Select a supplier from the dropdown
4. Fill in product details
5. Submit the form

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -am 'Add new feature'`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Create a Pull Request

## 📄 License

This project is licensed under the ISC License - see the package.json file for details.

## 👥 Author

- **Author** -(https://github.com/hungei)

## 🐛 Issues

If you encounter any issues, please report them in the Issues section of your repository.
