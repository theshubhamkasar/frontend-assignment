import React, { useState } from "react";
import { motion } from "framer-motion";
import data from "../Data/data";
import logo from "../assets/logo.png";
import group1 from "../assets/Group1.png";
import group2 from "../assets/Group2.png";
import group3 from "../assets/Group3.png";
import group4 from "../assets/Group4.png";

export const Categories = () => {
  const [selectedCategory, setSelectedCategory] = useState(data[0]);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="categories-section">
      <div className="container">
        <span className="categories-span">Categories</span>
        <div className="categories-main-content">
          <div className="row">
            <div className="col-md-8">
              <span className="category-title">{selectedCategory.title}</span>
              <br />
              <br />
              <span className="category-description mt-4">
                {selectedCategory.desc}
              </span>
              <br />
              <br />
              <button type="button" className="btn px-3 getstarted-btn">
                Get Started
              </button>
              <br />
              <br />

              {data.map((item) => (
                <button
                  key={item.title}
                  type="button"
                  className={`btn px-3 categories-btns ${
                    selectedCategory.title === item.title
                      ? "categories-btns-active"
                      : ""
                  }`}
                  onClick={() => handleCategoryClick(item)}
                >
                  <img
                    src={logo}
                    width={38.88}
                    height={40.3}
                    alt={item.title}
                  />
                  {item.title}
                </button>
              ))}
            </div>
            <div className="col-md-4">
              <div className="image-wrapper">
                <img
                  src={selectedCategory.img}
                  alt={selectedCategory.title}
                  className="category-image"
                />
                <motion.div
                  className="image-circle"
                  style={{ backgroundColor: selectedCategory.color }}
                  initial={{ x: "100vw" }}
                  animate={{ x: 0 }}
                  transition={{ type: "spring", stiffness: 100 }}
                ></motion.div>
              </div>
            </div>
          </div>
          <img src={group1} className="cat-group1" alt="" />
          <img src={group2} className="cat-group2" alt="" />
          <img src={group3} className="cat-group3" alt="" />
          <img src={group4} className="cat-group4" alt="" />
        </div>
      </div>
    </div>
  );
};

