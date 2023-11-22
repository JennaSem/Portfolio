import { useState, useEffect, useMemo } from "react";

const TypingAnimation = () => {
  const words = useMemo(
    () => [
      "Evgeniia Semenova",
      "Web Developer",
      "React Enthusiast",
      "Team Player",
    ],
    []
  );
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const currentWord = words[index];
      setText((prevText) =>
        prevText.length === currentWord.length
          ? prevText
          : currentWord.slice(0, prevText.length + 1)
      );
    }, 200);

    return () => clearInterval(interval);
  }, [index, words]);

  useEffect(() => {
    const initialTimeout = setTimeout(() => {
      setIndex(0);
    }, 1000);

    return () => clearTimeout(initialTimeout);
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (index === words.length - 1) {
        setIndex(0);
      } else {
        setIndex((prevIndex) => prevIndex + 1);
      }
    }, 1000);

    return () => clearTimeout(timeout);
  }, [text, index, words]);

  return (
    <div className="prompt">
      <h1>{text}</h1>
    </div>
  );
};

export default TypingAnimation;
