import { useState, useEffect } from 'react';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    document.addEventListener('mousemove', updateMousePosition);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mousemove', updateMousePosition);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed top-0 left-0 pointer-events-none z-50 mix-blend-difference">
      {/* Main cursor */}
      <div
        className="absolute w-6 h-6 bg-gradient-to-br from-primary to-primary-glow rounded-full shadow-glow transition-transform duration-100 ease-out"
        style={{
          left: mousePosition.x - 12,
          top: mousePosition.y - 12,
        }}
      />
      
      {/* Trailing cursor */}
      <div
        className="absolute w-4 h-4 bg-primary/50 rounded-full transition-all duration-300 ease-out"
        style={{
          left: mousePosition.x - 8,
          top: mousePosition.y - 8,
        }}
      />
      
      {/* Balloon 1 */}
      <div
        className="absolute w-3 h-4 bg-gradient-to-b from-red-400 to-red-500 rounded-full transition-all duration-500 ease-out shadow-sm"
        style={{
          left: mousePosition.x - 20,
          top: mousePosition.y - 25,
          transform: 'rotate(-10deg)',
        }}
      >
        <div className="absolute top-4 left-1/2 w-px h-6 bg-gray-600 transform -translate-x-1/2" />
      </div>
      
      {/* Balloon 2 */}
      <div
        className="absolute w-3 h-4 bg-gradient-to-b from-blue-400 to-blue-500 rounded-full transition-all duration-700 ease-out shadow-sm"
        style={{
          left: mousePosition.x + 15,
          top: mousePosition.y - 30,
          transform: 'rotate(15deg)',
        }}
      >
        <div className="absolute top-4 left-1/2 w-px h-8 bg-gray-600 transform -translate-x-1/2" />
      </div>
      
      {/* Balloon 3 */}
      <div
        className="absolute w-2.5 h-3.5 bg-gradient-to-b from-yellow-400 to-yellow-500 rounded-full transition-all duration-600 ease-out shadow-sm"
        style={{
          left: mousePosition.x - 5,
          top: mousePosition.y - 40,
          transform: 'rotate(5deg)',
        }}
      >
        <div className="absolute top-3.5 left-1/2 w-px h-7 bg-gray-600 transform -translate-x-1/2" />
      </div>
      
      {/* Floating particles */}
      <div
        className="absolute w-1 h-1 bg-primary rounded-full transition-all duration-800 ease-out opacity-60"
        style={{
          left: mousePosition.x + 25,
          top: mousePosition.y - 15,
        }}
      />
      <div
        className="absolute w-1.5 h-1.5 bg-primary-glow rounded-full transition-all duration-900 ease-out opacity-40"
        style={{
          left: mousePosition.x - 30,
          top: mousePosition.y + 10,
        }}
      />
      <div
        className="absolute w-1 h-1 bg-accent rounded-full transition-all duration-1000 ease-out opacity-50"
        style={{
          left: mousePosition.x + 35,
          top: mousePosition.y + 20,
        }}
      />
      
      {/* Sparkle effect */}
      <div
        className="absolute text-primary opacity-70 transition-all duration-400 ease-out"
        style={{
          left: mousePosition.x + 20,
          top: mousePosition.y - 20,
          fontSize: '8px',
        }}
      >
        ✨
      </div>
    </div>
  );
};

export default CustomCursor;