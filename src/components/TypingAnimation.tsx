import { useState, useEffect } from 'react';

interface TypingAnimationProps {
  words: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  delayBetweenWords?: number;
}

export default function TypingAnimation({
  words,
  typingSpeed = 100,
  deletingSpeed = 50,
  delayBetweenWords = 2000,
}: TypingAnimationProps) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    const currentFullWord = words[currentWordIndex];

    if (!isDeleting) {
      // Typing mode
      if (currentText.length < currentFullWord.length) {
        timer = setTimeout(() => {
          setCurrentText(currentFullWord.substring(0, currentText.length + 1));
        }, typingSpeed);
      } else {
        // Pause at full word before deleting
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, delayBetweenWords);
      }
    } else {
      // Deleting mode
      if (currentText.length > 0) {
        timer = setTimeout(() => {
          setCurrentText(currentFullWord.substring(0, currentText.length - 1));
        }, deletingSpeed);
      } else {
        setIsDeleting(false);
        // Move to next word index
        setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
      }
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentWordIndex, words, typingSpeed, deletingSpeed, delayBetweenWords]);

  return (
    <span className="inline-block relative">
      <span className="bg-clip-text text-transparent bg-gradient-to-r from-accentBlue to-accentPurple font-semibold">
        {currentText}
      </span>
      <span className="absolute -right-1 bottom-1 w-[3px] h-[80%] bg-accentPurple animate-pulse" />
    </span>
  );
}
