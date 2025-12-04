import { useEffect, useState } from 'react';
import TextType from './TextType';

const LoadingScreen = ({ onLoadingComplete }: { onLoadingComplete: () => void }) => {
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => setShowText(true), 500);
    const timer2 = setTimeout(onLoadingComplete, 4000); // 4 seconds total

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, [onLoadingComplete]);

  return (
    <div className="fixed inset-0 bg-background flex items-center justify-center z-50">
      <div className="text-center space-y-8">
        <div className="space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold gradient-hero text-glow">
            GAD ISHIMWE
          </h1>
          {showText && (
            <div className="text-xl md:text-2xl text-muted-foreground font-light min-h-[3rem]">
              <TextType
                text={["Loading...", "Welcome!", "Let's Build Something Amazing"]}
                typingSpeed={100}
                pauseDuration={1000}
                showCursor={true}
                cursorCharacter="|"
              />
            </div>
          )}
        </div>
        <div className="flex justify-center">
          <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
