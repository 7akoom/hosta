import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useDirection } from "../context/DirectionContext";
import GoogleTranslateIcon from "./GoogleTranslateIcon";

interface Language {
  code: string;
  label: string;
  dir: 'ltr' | 'rtl';
}

const languages: Language[] = [
  { code: "en", label: "English", dir: "ltr" },
  { code: "ar", label: "العربية", dir: "rtl" },
  { code: "ku", label: "کوردی", dir: "rtl" },
];

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();
  const { setDirection } = useDirection();
  const [isOpen, setIsOpen] = useState(false);

  const handleChange = (lng: string) => {
    const selectedLang = languages.find(lang => lang.code === lng);
    if (selectedLang) {
      i18n.changeLanguage(lng);
      setDirection(selectedLang.dir);
    }
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        className="flex items-center justify-center text-gray-500 transition-colors bg-white border border-gray-200 rounded-full hover:text-gray-700 h-11 w-11 hover:bg-gray-100 dark:border-gray-800 dark:bg-gray-900 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-white"
        onClick={() => setIsOpen((open) => !open)}
        aria-label="Change language"
        type="button"
      >
        <GoogleTranslateIcon className="w-6 h-6" />
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-36 bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-gray-900 dark:border-gray-800 z-50 rtl:right-auto rtl:left-0">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => handleChange(lang.code)}
              className={`block w-full text-right px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-800 rtl:text-right ${
                i18n.language === lang.code
                  ? "font-bold text-blue-600 dark:text-blue-400"
                  : "text-gray-700 dark:text-gray-200"
              }`}
              type="button"
            >
              {lang.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;