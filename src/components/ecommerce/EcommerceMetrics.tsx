import {
  BookingIcon,
  ClientIcon,
  GroupIcon,
  HandymenIcon,
  CategoryIcon,
  ServiceIcon
} from "../../icons";
import { useTranslation } from "react-i18next";

export default function EcommerceMetrics() {
  const { t } = useTranslation();
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">

      <div className="flex flex-col items-center justify-center rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] md:p-6 h-48">
        <div className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-xl dark:bg-gray-800">
          <BookingIcon className="text-gray-800 size-6 dark:text-white/90" />
        </div>
        <div className="mt-4 text-center">
          <span className="text-sm text-gray-500 dark:text-gray-400">
            {t(`nav.Bookings`)}
          </span>
          <h4 className="mt-2 font-bold text-gray-800 text-title-sm dark:text-white/90">
            37
          </h4>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] md:p-6 h-48">
        <div className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-xl dark:bg-gray-800">
          <CategoryIcon className="text-gray-800 size-6 dark:text-white/90" />
        </div>
        <div className="mt-4 text-center">
          <span className="text-sm text-gray-500 dark:text-gray-400">
            {t(`nav.Categories`)}
          </span>
          <h4 className="mt-2 font-bold text-gray-800 text-title-sm dark:text-white/90">
            3
          </h4>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] md:p-6 h-48">
        <div className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-xl dark:bg-gray-800">
          <ServiceIcon className="text-gray-800 size-6 dark:text-white/90" />
        </div>
        <div className="mt-4 text-center">
          <span className="text-sm text-gray-500 dark:text-gray-400">
            {t(`nav.Services`)}
          </span>
          <h4 className="mt-2 font-bold text-gray-800 text-title-sm dark:text-white/90">
            6
          </h4>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] md:p-6 h-48">
        <div className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-xl dark:bg-gray-800">
          <ClientIcon className="text-gray-800 size-6 dark:text-white/90" />
        </div>
        <div className="mt-4 text-center">
          <span className="text-sm text-gray-500 dark:text-gray-400">
            {t(`nav.Users`)}
          </span>
          <h4 className="mt-2 font-bold text-gray-800 text-title-sm dark:text-white/90">
            3
          </h4>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] md:p-6 h-48">
        <div className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-xl dark:bg-gray-800">
          <HandymenIcon className="text-gray-800 size-6 dark:text-white/90" />
        </div>
        <div className="mt-4 text-center">
          <span className="text-sm text-gray-500 dark:text-gray-400">
            {t(`nav.Handymen`)}
          </span>
          <h4 className="mt-2 font-bold text-gray-800 text-title-sm dark:text-white/90">
            2
          </h4>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] md:p-6 h-48">
        <div className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-xl dark:bg-gray-800">
          <GroupIcon className="text-gray-800 size-6 dark:text-white/90" />
        </div>
        <div className="mt-4 text-center">
          <span className="text-sm text-gray-500 dark:text-gray-400">
            {t(`nav.Admins`)}
          </span>
          <h4 className="mt-2 font-bold text-gray-800 text-title-sm dark:text-white/90">
            3
          </h4>
        </div>
      </div>

    </div>
  );
}