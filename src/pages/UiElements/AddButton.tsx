import React from "react";
import { Link } from "react-router";
import { useTranslation } from "react-i18next";

interface AddButtonProps {
  to: string;
  children?: React.ReactNode; // يمكنك تمرير نص أو أيقونة أو كلاهما
  className?: string; // لإضافة أي كلاس إضافي إذا أردت
}

const AddButton: React.FC<AddButtonProps> = ({ to, children, className }) => {
  const { t } = useTranslation();
  return (
    <Link
      to={to}
      className={`
        bg-brand-500 hover:bg-brand-600
        dark:bg-brand-400 dark:hover:bg-brand-500
        text-white font-medium px-4 py-2 rounded-full
        transition duration-150 shadow
        ${className || ""}
      `}
    >
      {children || t("Table.Add")}
    </Link>
  );
};

export default AddButton;