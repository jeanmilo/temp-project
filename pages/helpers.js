import { useEffect, useState } from "react";

export default function useTypewriterEffect(textArray) {
    const [typedText, setTypedText] = useState(" ");
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
  
    useEffect(() => {
      let timeoutId;
  
      const handleTyping = () => {
        const currentText = " " + textArray[currentIndex];
  
        if (isDeleting) {
          setTypedText((prev) => prev.slice(0, -1));
          if (typedText === "") {
            setIsDeleting(false);
            setCurrentIndex((prevIndex) => (prevIndex + 1) % textArray.length);
          }
        } else if (typedText.length < currentText.length) {
          setTypedText((prev) => currentText.slice(0, prev.length + 1));
        } else {
          var pauseDuration = 1000;
          setTimeout(() => {
            setIsDeleting(true);
          }, pauseDuration);
        }
      };
  
      timeoutId = setTimeout(handleTyping, isDeleting ? 100 : 150);
  
      return () => clearTimeout(timeoutId);
    }, [typedText, isDeleting, currentIndex, textArray]);
  
    return typedText + "|";
  }
