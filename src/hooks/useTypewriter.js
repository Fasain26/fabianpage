import { useState, useEffect } from 'react';

export function useTypewriter(texts, typingSpeed = 100, erasingSpeed = 50, pauseTime = 2000) {
  const [textIndex, setTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isErasing, setIsErasing] = useState(false);

  useEffect(() => {
    const currentFullText = texts[textIndex];
    let timeout;

    if (!isErasing && displayText.length < currentFullText.length) {
      timeout = setTimeout(() => {
        setDisplayText(currentFullText.slice(0, displayText.length + 1));
      }, typingSpeed);
    } else if (!isErasing && displayText.length === currentFullText.length) {
      timeout = setTimeout(() => setIsErasing(true), pauseTime);
    } else if (isErasing && displayText.length > 0) {
      timeout = setTimeout(() => {
        setDisplayText(currentFullText.slice(0, displayText.length - 1));
      }, erasingSpeed);
    } else if (isErasing && displayText.length === 0) {
      setIsErasing(false);
      setTextIndex((prev) => (prev + 1) % texts.length);
    }

    return () => clearTimeout(timeout);
  }, [displayText, isErasing, textIndex, texts, typingSpeed, erasingSpeed, pauseTime]);

  return displayText;
}