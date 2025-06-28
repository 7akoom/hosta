import { createContext, useContext, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

type Direction = 'ltr' | 'rtl';

interface DirectionContextType {
  direction: Direction;
  isRTL: boolean;
  setDirection: (dir: Direction) => void;
}

const DirectionContext = createContext<DirectionContextType | undefined>(undefined);

export const DirectionProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { i18n } = useTranslation();
  const [direction, setDirectionState] = useState<Direction>('ltr');

  const setDirection = (dir: Direction) => {
    setDirectionState(dir);
    document.documentElement.dir = dir;
  };

  useEffect(() => {
    // Manually detect RTL languages
    const currentLang = i18n.language;
    const rtlLanguages = ['ar', 'ku']; // Add Kurdish to RTL languages
    const newDirection = rtlLanguages.includes(currentLang) ? 'rtl' : 'ltr';
    setDirection(newDirection);
  }, [i18n.language]);

  const isRTL = direction === 'rtl';

  return (
    <DirectionContext.Provider value={{ direction, isRTL, setDirection }}>
      <div className={`${direction} ${isRTL ? 'rtl' : 'ltr'}`}>
        {children}
      </div>
    </DirectionContext.Provider>
  );
};

export const useDirection = () => {
  const context = useContext(DirectionContext);
  if (context === undefined) {
    throw new Error('useDirection must be used within a DirectionProvider');
  }
  return context;
};