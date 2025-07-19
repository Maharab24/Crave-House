## Restaurant Landing Page

A **beautiful and responsive restaurant landing page** built with **ReactJS**, **Tailwind CSS**, **Vite**, and a **Custom API**. This project showcases a modern and interactive web experience for users to explore delicious dishes, view ingredients, and manage their cart seamlessly.

##  Features

-  **Stunning and modern UI**
-  **Fully responsive** design across all devices
-  **Cart functionality** to add  food items
-  **View ingredients** of each dish
-  **Custom API integration** for dynamic food data
-  **Efficient data flow** between cart and sidebar

## 🔄 Data Flow Diagram

The app’s core logic uses a clean data flow to manage the cart state and keep the UI components in sync:

```mermaid
graph TD
A[Body] -->|cartItems| B(Carts)
A -->|cartItems| C(SideBar)
B -->|onAddToCart| D[Cart]
D -->|trigger| A[update cartItems]
