import React, { useState } from "react";
import './Dashboard.css'

const FoodSection = () => {
  const [foodItems, setFoodItems] = useState([]);
  const [foodImages, setFoodImages] = useState([]);

  const handleUploadFood = () => {
    const newFood = prompt("Enter food name:");
    if (newFood) {
      setFoodItems([...foodItems, newFood]);
    }
  };

  const handleUploadImage = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setFoodImages([...foodImages, imageUrl]);
    }
  };

  return (
    <div className="food-section">
      <h3>Food Items</h3>
      <ul>
        {foodItems.length === 0 ? (
          <p>No food items uploaded yet.</p>
        ) : (
          foodItems.map((food, index) => <li key={index}>{food}</li>)
        )}
      </ul>

      <h4>Food Gallery</h4>
      <div className="gallery">
        {foodImages.length === 0 ? (
          <p>No images uploaded yet.</p>
        ) : (
          foodImages.map((image, index) => (
            <img key={index} src={image} alt={`Food ${index + 1}`} />
          ))
        )}
      </div>

      <button onClick={handleUploadFood}>Upload Food</button>
      <input type="file" accept="image/*" onChange={handleUploadImage} />
    </div>
  );
};

export default FoodSection;
