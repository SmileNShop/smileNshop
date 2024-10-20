// Sample data for demo purposes
const products = [
    { name: "Lipstick", category: "Cosmetics", price: "$19.99", stock: 50 },
    { name: "Shampoo", category: "Haircare", price: "$15.99", stock: 100 }
];

const orders = [
    { id: 1, customer: "Alice", product: "Lipstick", status: "Shipped" },
    { id: 2, customer: "Bob", product: "Shampoo", status: "Pending" }
];

const users = [
    { id: 1, name: "Alice", email: "alice@example.com", role: "Customer" },
    { id: 2, name: "Bob", email: "bob@example.com", role: "Admin" }
];

// Function to populate the product table
function populateProductTable() {
    const productTable = document.getElementById("productTable");
    products.forEach(product => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${product.name}</td>
            <td>${product.category}</td>
            <td>${product.price}</td>
            <td>${product.stock}</td>
            <td><button>Edit</button> <button>Delete</button></td>
        `;
        productTable.appendChild(row);
    });
}

// Function to populate the order table
function populateOrderTable() {
    const orderTable = document.getElementById("orderTable");
    orders.forEach(order => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${order.id}</td>
            <td>${order.customer}</td>
            <td>${order.product}</td>
            <td>${order.status}</td>
            <td><button>Update</button></td>
        `;
        orderTable.appendChild(row);
    });
}

// Function to populate the user table
function populateUserTable() {
    const userTable = document.getElementById("userTable");
    users.forEach(user => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${user.id}</td>
            <td>${user.name}</td>
            <td>${user.email}</td>
            <td>${user.role}</td>
            <td><button>Delete</button></td>
        `;
        userTable.appendChild(row);
    });
}

// Initialize tables on page load
document.addEventListener("DOMContentLoaded", () => {
    populateProductTable();
    populateOrderTable();
    populateUserTable();
});