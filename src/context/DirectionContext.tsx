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
    const currentLang = i18n.language;
    const rtlLanguages = ['ar', 'ku'];
    const newDirection = rtlLanguages.includes(currentLang) ? 'rtl' : 'ltr';
    setDirection(newDirection);
  }, [i18n.language]);

  const isRTL = direction === 'rtl';

  let fontClass = 'font-poppins';
  if (i18n.language === 'ar') fontClass = 'font-amiri';
  else if (i18n.language === 'ku') fontClass = 'font-amiri';

  const wrapperClass = [
    direction,
    isRTL ? 'rtl' : 'ltr',
    fontClass
  ].join(' ');

  return (
    <DirectionContext.Provider value={{ direction, isRTL, setDirection }}>
      <div className={wrapperClass}>
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