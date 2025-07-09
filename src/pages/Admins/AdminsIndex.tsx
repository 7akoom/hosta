import { useTranslation } from "react-i18next";
import PageBreadcrumb from "../../components/common/PageBreadCrumb";
import ComponentCard from "../../components/common/ComponentCard";
import PageMeta from "../../components/common/PageMeta";
import DynamicTable from "../../components/tables/DynamicTable";
import Badge from "../../components/ui/badge/Badge";
import {CloseLineIcon, TrashBinIcon, CheckLineIcon} from "../../icons";
import { Link } from "react-router";
import AddButton from "../UiElements/AddButton";

interface Admin {
    id: number;
    name: string;
    image: string;
    role: string;
    birthDate: string;
    status: string;
    address: {
        country: string;
        city: string;
        street: string;
    };
    info: {
        email: string;
        phone: string;
        join_date: string;
    };
}

export default function CategoriesIndex() {
  const { t } = useTranslation();

  const tableData: Admin[] = [
    {
        id: 1,
        name: "Ahmet Eid",
        image: "/images/user/user-05.jpg",
        role: "Super admin",
        birthDate: "05/10/1996",
          status: "Active",
        address: {
            country: "Iraq",
            city: "Sulimany",
            street: "60m st",
        },
        info: {
            email: "robertoto984@gmail.com",
            phone: "9647517065163+",
            join_date: "05/10/2024"
        },
    },
    {
        id: 2,
        name: "Hkmt Ali",
        image: "/images/user/user-29.jpg",
        role: "admin",
        birthDate: "05/10/1996",
        status: "Blocked",
        address: {
            country: "Iraq",
            city: "Sulimany",
            street: "60m st",
        },
        info: {
            email: "7akoom96@gmail.com",
            phone: "9647517065163+",
            join_date: "05/10/2024"
        },
    },
    {
        id: 3,
        name: "Helen Hawez",
        image: "/images/user/user-04.jpg",
        role: "admin",
        birthDate: "05/10/1996",
        status: "Active",
        address: {
            country: "Iraq",
            city: "Sulimany",
            street: "60m st",
        },
        info: {
            email: "helemhbarham@gmail.com",
            phone: "9647517065163+",
            join_date: "05/10/2024"
        },
    },
  ];

  const columns = [
    {
      header: t('Table.Admin'),
      accessor: "client",
      render: (admin: Admin) => (
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 overflow-hidden rounded-full">
            <img
              width={40}
              height={40}
              src={admin.image}
              alt={admin.name}
            />
          </div>
          <div>
            <span className="block font-medium text-gray-800 text-theme-sm dark:text-white/90">
              {admin.name}
            </span>
            <span className="block font-medium text-gray-800 text-theme-sm dark:text-white/90">
              {admin.birthDate}
            </span>
          </div>
        </div>
      ),
    },
    {
    header: t('Table.Info'),
    accessor: "info",
    render: (admin: Admin) => (
        <>
        <span className="block text-gray-500 text-theme-xs dark:text-gray-400">
            {admin.info.phone}
        </span>
        <span className="block text-gray-500 text-theme-xs dark:text-gray-400">
            {admin.info.email}
        </span>
        <span className="block text-gray-500 text-theme-xs dark:text-gray-400">
            <span className="font-bold">{t('Table.JoinDate')}:</span> {admin.info.join_date}
        </span>
        </>
    ),
    },
    {
    header: t('Table.Address'),
    accessor: "address",
    render: (admin: Admin) => 
        <>
        <span className="block text-gray-500 text-theme-xs dark:text-gray-400">
            {admin.address.country} - {admin.address.city}
        </span>
        <span className="block text-gray-500 text-theme-xs dark:text-gray-400">
            {admin.address.street}
        </span>
        </>
    },
    {
    header: t('Table.Role'),
    accessor: "role",
    render: (admin: Admin) => (
        <span className="block text-gray-500 text-theme-xs dark:text-gray-400">
            {admin.role}
        </span>
    ),
    },
    {
      header: t('Table.Status'),
      accessor: "status",
      render: (admin: Admin) => (
        <Badge
          size="sm"
          color={
            admin.status === "Active"
              ? "success"
              : admin.status === "Blocked"
              ? "warning"
              : "error"
          }
        >
          {t(`Table.Statuses.${admin.status}`)}
        </Badge>
      ),
    },
    {
      header: t('Table.Actions'),
      accessor: "actions",
      render: (admin: Admin) => (
        <>
          <button
            className="mr-4 text-red-500 hover:underline"
            onClick={() => {
              alert(`Delete client ${admin.name}`);
            }}
          >
            <TrashBinIcon />
          </button>
          {admin.status === "Active" ? (
            <button
              className="mr-4 text-red-500 hover:underline"
              title={t('Table.Block')}
              onClick={() => {
                alert(`Block client ${admin.name}`);
              }}
            >
              < CloseLineIcon />
            </button>
          ) : (
            <button
                className="mr-4 text-green-500 hover:underline"
                title={t('Table.Activate')}
              onClick={() => {
                alert(`Activate client ${admin.name}`);
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
      <PageBreadcrumb pageTitle={t('Breadcrumb.CategoriesPageTitle')} />
      <div className="flex justify-end mb-4 mx-5">
        <AddButton to="#" />
      </div>
      <div className="space-y-6">
        <ComponentCard title={t('Card.CategoriesCardTitle')}>
          <DynamicTable columns={columns} data={tableData} />
        </ComponentCard>
      </div>
    </>
  );
}