// src/components/BackToTop.js
import React, { useEffect } from "react";

const BackToTop = () => {
  useEffect(() => {
    const backToTopButton = document.getElementById("backToTop");
    
    window.onscroll = () => {
      if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        backToTopButton.style.display = "block";
      } else {
        backToTopButton.style.display = "none";
      }
    };
  }, []);

  return (
    <button
      id="backToTop"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      ↑
    </button>
  );
};

export default BackToTop;