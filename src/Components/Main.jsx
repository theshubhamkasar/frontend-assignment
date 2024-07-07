import React from "react";
import { motion } from "framer-motion";
import homepage1 from "../assets/homepage1.png";
import homepage2 from "../assets/homepage2.png";
import homepage3 from "../assets/homepage3.png";
import homepage4 from "../assets/homepage4.png";
import homepage5 from "../assets/homepage5.png";
import group1 from "../assets/Group1.png";
import group2 from "../assets/Group2.png";
import group3 from "../assets/Group3.png";
import group4 from "../assets/Group4.png";

export const Main = () => {
  return (
    <div className="main">
      <div className="row">
        <div className="col-md-5">
          <img src={group1} className="group1" alt="" /><br /><br />
          <img src={group2} className="group2" alt="" /><br />
          <span className="homepage-content">Taking care for your pets!</span><br /><br />
          <img src={group3} className="group3" alt="" /><br /><br />
          <img src={group4} className="group4" alt="" /><br />
        </div>
        <div className="col-md-7 imgDiv">
          <motion.img
            initial={{ x: 100, rotate: -20, zIndex: 5, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, opacity: { duration: 0.5 } }}
            className="image1"
            src={homepage1}
            alt=""
            width={261}
            height={400}
          />

          <motion.img
            initial={{ y: -50, rotate: -7, zIndex: 4, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, opacity: { duration: 0.5 } }}
            className="image2"
            src={homepage2}
            alt=""
            width={240}
            height={250}
          />
          <motion.img
            initial={{ y: 100, rotate: 20, zIndex: 2, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, opacity: { duration: 0.5 } }}
            className="image3"
            src={homepage3}
            alt=""
            width={200}
            height={300}
          />
          <motion.img
            initial={{ y: -50, rotate: -8, zIndex: 3, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, opacity: { duration: 0.5 } }}
            className="image4"
            src={homepage4}
            alt=""
            width={200}
            height={280}
          />
          <motion.img
            initial={{ y: 100, rotate: 7, zIndex: 1, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, opacity: { duration: 0.5 } }}
            className="image5"
            src={homepage5}
            alt=""
            width={261}
            height={250}
          />
        </div>
      </div>
    </div>
  );
};
