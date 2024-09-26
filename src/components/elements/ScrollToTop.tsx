"use client";
import React, { useState, useEffect } from "react";
import { ArrowUpCircle } from "lucide-react";
import { Button } from "../ui/button";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isAboveFooter, setIsAboveFooter] = useState(true);

  // Show button when page is scrolled down
  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }

    const footer = document.querySelector("footer");
    if (footer) {
      const footerTop = footer.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      // Check if scroll-to-top is above the footer
      if (footerTop <= windowHeight) {
        setIsAboveFooter(false); // hide button when it's within the footer
      } else {
        setIsAboveFooter(true); // show button above the footer
      }
    }
  };

  // Scroll the page to the top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <div
      className={`fixed right-4 bottom-20 md:bottom-8 md:right-8 z-50 ${
        !isAboveFooter ? "hidden" : ""
      }`}
    >
      {isVisible && (
        <Button
          variant={"ghost"}
          onClick={scrollToTop}
          className="p-3 rounded-full flex justify-center items-center transition-all bg-white dark:bg-black border-dashed border-gray-500 duration-300 md:hover:scale-110"
        >
          <ArrowUpCircle className="w-5 h-5" /> <span className="font-bold pl-1 hidden md:block">Back to Top</span>
        </Button>
      )}
    </div>
  );
};

export default ScrollToTop;
