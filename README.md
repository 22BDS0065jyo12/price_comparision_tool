# 🛍️ Online Shopping React Application

## 👩‍💻 Developed by:
**Name:** H. Jyothsna  

## 📌 Project Overview
This is a feature-rich **Online Shopping Web Application** built using **React.js**. The application simulates an e-commerce website that allows users to:

- Browse categorized products like Footwears, Watches, and Electronic items.
- View offers, price comparisons, and average ratings from different sources (Amazon, Flipkart, etc.).
- Add products to the cart.
- Access dynamic data visualization using **Recharts** and **Star Ratings**.

## 🚀 Features

### 🏠 Homepage
- Welcoming banner with descriptive content about online shopping.
- Product categories displayed with styled cards and hover effects.
- Best product suggestions based on average rating and lowest price.
- Bar chart comparing the best-rated and priced products across categories.

### 📦 Product Cards
- Displayed with:
  - Product image
  - Name
  - Price
  - Star rating (calculated average from multiple sources)
  - Discount offer tag
  - Logo of preferred source
  - Action buttons for:
    - Buy Now
    - Add to Cart
    - Price Comparison (with chart and savings info)

### 📊 Charts and Visuals
- **Bar Chart**: Renders average price and rating for best products in each category using `recharts`.
- **Line Chart**: Shows dynamic price comparison across multiple platforms.

### 📂 Price Comparison
- Graphical comparison between different e-commerce platforms.
- Shows potential savings for users.

### ⭐ Star Ratings
- Custom `StarRating.js` displays interactive star ratings.

### 🛒 Cart
- Modular cart component integrated into the main layout.

### 📄 Footer
- Informative footer with company info, support links, and social media icons.

## 🧱 Tech Stack

| Tech        | Description                          |
|-------------|--------------------------------------|
| React.js    | Frontend UI rendering                |
| CSS         | Custom styles and responsive layout  |
| Recharts    | Charting library for visual analysis |
| Font Awesome| Icons and star ratings               |

<pre> ## 🗂️ File Structure ``` src/ ├── App.js # Main entry with layout ├── Header.js # Top navigation and banner ├── Homepage.js # Core homepage with category logic ├── Category.js # Renders category sections ├── Product.js # Displays individual product info ├── Cart.js # Cart functionality ├── StarRating.js # Component for rendering stars ├── Footer.js # Page footer with links and branding ├── index.css # Global styles ├── Home.css # Custom styles for layout and visuals ``` </pre>

## 🧠 Key Concepts Used

- **Component-based Design:** Each logical section is encapsulated in reusable components.
- **Props & State Management:** State used for toggling price comparison charts and handling interactions.
- **Array Methods:** `map`, `reduce`, `forEach` used for data processing.
- **Conditional Rendering:** Shows best product info and savings dynamically.
- **Charts & Visualizations:** Use of `recharts` for both bar and line charts.

## 📸 Screenshots

### 🏠 Homepage UI
![Homepage](./Screenshot%202025-05-23%20091554.png)

### 🧾 Product Cards
![Product Card 1](./Screenshot%202025-05-23%20091617.png)
![Product Card 2](./Screenshot%202025-05-23%20091753.png)

### 📊 Price Comparison Chart
![Price Comparison](./Screenshot%202025-05-23%20091638.png)

### ⭐ Star Ratings
![Star Ratings](./Screenshot%202025-05-23%20091703.png)

### 🛒 Cart View
![Cart View 1](./Screenshot%202025-05-23%20091844.png)
![Cart View 2](./Screenshot%202025-05-23%20091850.png)





