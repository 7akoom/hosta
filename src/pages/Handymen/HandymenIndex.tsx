import { useTranslation } from "react-i18next";
import PageBreadcrumb from "../../components/common/PageBreadCrumb";
import ComponentCard from "../../components/common/ComponentCard";
import PageMeta from "../../components/common/PageMeta";
import DynamicTable from "../../components/tables/DynamicTable";
import Badge from "../../components/ui/badge/Badge";
import Stars from "../../components/Stars";
import { useDirection } from "../../context/DirectionContext";
import {CloseLineIcon, TrashBinIcon, PencilIcon,EyeIcon, CheckLineIcon} from "../../icons";
import AddButton from "../UiElements/AddButton";

interface Handyman {
  id: number;
  handyman: {
    image: string;
    name: string;
    birthDate: string;
  };
  info: {
    email: string;
    phone: string;
    join_date: string;
  };
  address: {
    country: string;
    city: string;
    street: string;
  };
  status: string;
  rating: number;
  bookings: number;
  services: number;
}

export default function HandymenIndex() {
  const { t } = useTranslation();
  const { direction } = useDirection();
  const tableData: Handyman[] = [
    {
      id: 1,
      handyman: {
        image: "/images/user/user-17.jpg",
        name: "Hkmt Ali",
        birthDate: "05/10/1996"
      },
      info: {
        email: "a7akoom96@gmail.com",
        phone: "9647517065163+",
         join_date: "05/10/2024"
      },
      address: {
        country: "Iraq",
        city: "Erbil",
        street: "120m st",
      },
      status: "Active",
      rating: 4.5,
      bookings: 45,
      services: 7
    },
    {
      id: 2,
      handyman: {
        image: "/images/user/user-21.jpg",
        name: "Linda George",
        birthDate: "05/10/1992"
      },
      info: {
        email: "linda92@gmail.com",
        phone: "9648518065163+",
         join_date: "05/10/2024"
      },
      address: {
        country: "Syria",
        city: "Qamishlo",
        street: "60m st",
      },
      status: "Blocked",
      rating: 3,
      bookings: 30,
      services: 4
    },
  ];

  const columns = [
    {
      header: t('Table.Handyman'),
      accessor: "handyman",
      render: (handyman: Handyman) => (
        <div className="flex items-start gap-1">
          <div className="w-10 h-10 overflow-hidden rounded-full">
            <img
              width={40}
              height={40}
              src={handyman.handyman.image}
              alt={handyman.handyman.name}
            />
          </div>
          <div>
            <span className="block font-medium text-gray-800 text-theme-sm dark:text-white/90">
              {handyman.handyman.name}
            </span>
            <span className="block text-gray-500 text-theme-xs dark:text-gray-400">
              {handyman.handyman.birthDate}
            </span>
            <span className="block mt-1 flex items-center">
              <Stars rating={handyman.rating} direction={direction} />
              <span className="text-gray-500 text-theme-xs dark:text-gray-400">
                ({handyman.rating})
              </span>
            </span>
          </div>
        </div>
      ),
    },
    {
      header: t('Table.Info'),
      accessor: "info",
      render: (handyman: Handyman) => (
        <>
          <span className="block text-gray-500 text-theme-xs dark:text-gray-400">
          {handyman.info.phone}
          </span>
          <span className="block text-gray-500 text-theme-xs dark:text-gray-400">
          {handyman.info.email}
          </span>
          <span className="block text-gray-500 text-theme-xs dark:text-gray-400">
          {t('Table.JoinDate')}: {handyman.info.join_date}
          </span>
        </>
      ),
    },
    {
      header: t('Table.Address'),
      accessor: "address",
      render: (handyman: Handyman) =>
        <>
          <span className="block text-gray-500 text-theme-xs dark:text-gray-400">
            {handyman.address.country} - {handyman.address.city}
          </span>
          <span className="block text-gray-500 text-theme-xs dark:text-gray-400">
            {handyman.address.street}
          </span>
        </>
    },
    {
      header: t('Table.BookingsCount'),
      accessor: "handyman",
      render: (handyman: Handyman) =>
        <>
          <span className="block text-gray-500 text-theme-xs dark:text-gray-400">
            {handyman.bookings}
          </span>
        </>
    },
    {
      header: t('Table.ServicesCount'),
      accessor: "handyman",
      render: (handyman: Handyman) =>
        <>
          <span className="block text-gray-500 text-theme-xs dark:text-gray-400">
            {handyman.services}
          </span>
        </>
    },
    {
      header: t('Table.Status'),
      accessor: "status",
      render: (handyman: Handyman) => (
        <Badge
          size="sm"
          color={
            handyman.status === "Active"
              ? "success"
              : handyman.status === "Blocked"
              ? "warning"
              : "error"
          }
        >
          {t(`Table.Statuses.${handyman.status}`)}
        </Badge>
      ),
    },
    {
      header: t('Table.Actions'),
      accessor: "actions",
      render: (handyman: Handyman) => (
        <>
          <button
            className="mr-2 text-blue-500 hover:underline"
            title={t('Table.Show')}
            // onClick={() => {
            //   alert(`Edit handyman ${handyman.handyman.name}`);
            // }}
          >
            <EyeIcon className="fill-gray-500 dark:fill-gray-400"/>
          </button>
          <button
            className="mr-2 text-blue-500 hover:underline"
            title={t('Table.Edit')}
            onClick={() => {
              alert(`Edit handyman ${handyman.handyman.name}`);
            }}
          >
            <PencilIcon />
          </button>
          <button
            className="mr-2 text-red-500 hover:underline"
            title={t('Table.Delete')}
            onClick={() => {
              alert(`Delete handyman ${handyman.handyman.name}`);
            }}
          >
            <TrashBinIcon />
          </button>
          {handyman.status === "Active" ? (
            <button
              className="mr-2 text-red-500 hover:underline"
              title={t('Table.Block')}
              onClick={() => {
                alert(`Block handyman ${handyman.handyman.name}`);
              }}
            >
              <CloseLineIcon />
            </button>
          ) : (
            <button
                className="mr-2 text-green-500 hover:underline"
                title={t('Table.Activate')}
              onClick={() => {
                alert(`Activate handyman ${handyman.handyman.name}`);
              }}
              >
                <CheckLineIcon />
            </button>
          )}
        </>
      ),
    },
  ];

  return (
    <>
      <PageMeta
        title="Hosta Dashboard"
        description="Hosta services dashboard"
      />
      <PageBreadcrumb pageTitle={t('Breadcrumb.HandymenPageTitle')} />
      <div className="flex justify-end mb-4 mx-5">
        <AddButton to="#" />
      </div>
      <div className="space-y-6">
        <ComponentCard title={t('Card.HandymenCardTitle')}>
          <DynamicTable columns={columns} data={tableData} />
        </ComponentCard>
      </div>
    </>
  );
}