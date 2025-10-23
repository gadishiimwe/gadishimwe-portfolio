import { useState, useEffect } from 'react';

interface TextTypeProps {
  text: string[];
  typingSpeed?: number;
  pauseDuration?: number;
  showCursor?: boolean;
  cursorCharacter?: string;
}

const TextType: React.FC<TextTypeProps> = ({
  text,
  typingSpeed = 100,
  pauseDuration = 2000,
  showCursor = true,
  cursorCharacter = '|',
}) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [isDeleting, setIsDeleting] = useState(false);
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    const currentText = text[currentTextIndex];
    let timeout: NodeJS.Timeout;

    if (isTyping && !isDeleting) {
      if (currentCharIndex < currentText.length) {
        timeout = setTimeout(() => {
          setDisplayText(currentText.slice(0, currentCharIndex + 1));
          setCurrentCharIndex(currentCharIndex + 1);
        }, typingSpeed);
      } else {
        // finished typing, pause
        timeout = setTimeout(() => {
          setIsDeleting(true);
        }, pauseDuration);
      }
    } else if (isDeleting) {
      if (currentCharIndex > 0) {
        timeout = setTimeout(() => {
          setDisplayText(currentText.slice(0, currentCharIndex - 1));
          setCurrentCharIndex(currentCharIndex - 1);
        }, typingSpeed / 2);
      } else {
        // finished deleting, next text
        setIsDeleting(false);
        setCurrentTextIndex((prev) => (prev + 1) % text.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [currentCharIndex, currentTextIndex, isTyping, isDeleting, text, typingSpeed, pauseDuration]);

  return (
    <span>
      {displayText}
      {showCursor && <span className="animate-pulse">{cursorCharacter}</span>}
    </span>
  );
};

export default TextType;
