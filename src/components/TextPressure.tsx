import { useEffect, useRef } from 'react';

interface TextPressureProps {
  text: string;
  flex?: boolean;
  alpha?: boolean;
  stroke?: boolean;
  width?: boolean;
  weight?: boolean;
  italic?: boolean;
  textColor?: string;
  strokeColor?: string;
  minFontSize?: number;
}

const TextPressure = ({
  text,
  flex = true,
  alpha = false,
  stroke = false,
  width = true,
  weight = true,
  italic = true,
  textColor = "#ffffff",
  strokeColor = "#ff0000",
  minFontSize = 36,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const textElement = textRef.current;
    if (!container || !textElement) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const distance = Math.sqrt((x - centerX) ** 2 + (y - centerY) ** 2);
      const maxDistance = Math.sqrt(centerX ** 2 + centerY ** 2);

      const intensity = Math.max(0, 1 - distance / maxDistance);

      let fontVariationSettings = '';

      if (width) fontVariationSettings += `'wdth' ${400 + intensity * 200}, `;
      if (weight) fontVariationSettings += `'wght' ${400 + intensity * 300}, `;
      if (italic) fontVariationSettings += `'ital' ${intensity}, `;
      if (alpha) fontVariationSettings += `'alpha' ${0.5 + intensity * 0.5}, `;

      fontVariationSettings = fontVariationSettings.slice(0, -2); // Remove trailing comma and space

      textElement.style.fontVariationSettings = fontVariationSettings;
      textElement.style.fontSize = `${minFontSize + intensity * 24}px`;

      if (stroke) {
        textElement.style.webkitTextStroke = `${intensity * 2}px ${strokeColor}`;
      }
    };

    const handleMouseLeave = () => {
      textElement.style.fontVariationSettings = width ? "'wdth' 400" : "";
      textElement.style.fontSize = `${minFontSize}px`;
      if (stroke) {
        textElement.style.webkitTextStroke = "0px";
      }
    };

    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [flex, alpha, stroke, width, weight, italic, textColor, strokeColor, minFontSize]);

  return (
    <div
      ref={containerRef}
      style={{
        position: 'relative',
        display: flex ? 'flex' : 'block',
        alignItems: flex ? 'center' : 'unset',
        justifyContent: flex ? 'center' : 'unset',
        height: '300px',
        cursor: 'pointer',
      }}
    >
      <span
        ref={textRef}
        style={{
          fontSize: `${minFontSize}px`,
          color: textColor,
          fontFamily: 'var(--font-variable)',
          fontVariationSettings: width ? "'wdth' 400" : "",
          transition: 'all 0.1s ease',
          userSelect: 'none',
        }}
      >
        {text}
      </span>
    </div>
  );
};

export default TextPressure;
