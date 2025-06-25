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
    document.documentElement.lang = dir === 'rtl' ? 'ar' : 'en';
  };

  useEffect(() => {
    const newDirection = i18n.dir() as Direction;
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