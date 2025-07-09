import { useTranslation } from "react-i18next";
import PageBreadcrumb from "../../components/common/PageBreadCrumb";
import ComponentCard from "../../components/common/ComponentCard";
import PageMeta from "../../components/common/PageMeta";
import DynamicTable from "../../components/tables/DynamicTable";
import Badge from "../../components/ui/badge/Badge";
import {CloseLineIcon, TrashBinIcon, CheckLineIcon} from "../../icons";
import AddButton from "../UiElements/AddButton";

interface Client {
  id: number;
  client: {
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
  bookings: number;
}

export default function ClientsIndex() {
  const { t } = useTranslation();

  const tableData: Client[] = [
    {
      id: 1,
      client: {
        image: "/images/user/user-17.jpg",
        name: "Robert Wills",
        birthDate: "05/10/1996"
      },
      info: {
        email: "robertoto984@gmail.com",
        phone: "9647517065163+",
        join_date: "05/10/2024"
      },
      address: {
        country: "Iraq",
        city: "Erbil",
        street: "120m st",
      },
      status: "Active",
      bookings: 5
    },
    {
      id: 2,
      client: {
        image: "/images/user/user-21.jpg",
        name: "Emma Sina",
        birthDate: "05/10/1992"
      },
      info: {
        email: "emmasena8800@gmail.com",
        phone: "9648518065163+",
        join_date: "05/01/2025"
      },
      address: {
        country: "Iraq",
        city: "Sulimany",
        street: "60m st",
      },
      status: "Blocked",
      bookings: 1
    },
    {
      id: 3,
      client: {
        image: "/images/user/user-05.jpg",
        name: "Hokar Hamo",
        birthDate: "05/10/1992"
      },
      info: {
        email: "hokar95@gmail.com",
        phone: "9648518065163+",
        join_date: "05/01/2025"
      },
      address: {
        country: "Syria",
        city: "Qamishlo",
        street: "60m st",
      },
      status: "Blocked",
      bookings: 0
    },
  ];

  const columns = [
    {
      header: t('Table.Client'),
      accessor: "client",
      render: (client: Client) => (
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 overflow-hidden rounded-full">
            <img
              width={40}
              height={40}
              src={client.client.image}
              alt={client.client.name}
            />
          </div>
          <div>
            <span className="block font-medium text-gray-800 text-theme-sm dark:text-white/90">
              {client.client.name}
            </span>
            <span className="block text-gray-500 text-theme-xs dark:text-gray-400">
              {client.client.birthDate}
            </span>
          </div>
        </div>
      ),
    },
    {
      header: t('Table.Info'),
      accessor: "info",
      render: (client: Client) => (
        <>
          <span className="block text-gray-500 text-theme-xs dark:text-gray-400">
            {client.info.phone}
          </span>
          <span className="block text-gray-500 text-theme-xs dark:text-gray-400">
            {client.info.email}
          </span>
          <span className="block text-gray-500 text-theme-xs dark:text-gray-400">
            <span className="font-bold">{t('Table.JoinDate')}:</span> {client.info.join_date}
          </span>
        </>
      ),
    },
    {
      header: t('Table.Address'),
      accessor: "address",
      render: (client: Client) => 
        <>
          <span className="block text-gray-500 text-theme-xs dark:text-gray-400">
              {client.address.country} - {client.address.city}
          </span>
          <span className="block text-gray-500 text-theme-xs dark:text-gray-400">
            {client.address.street}
          </span>
        </>
    },
    {
      header: t('Table.BookingsCount'),
      accessor: "client",
      render: (client: Client) => 
        <>
          <span className="block text-gray-500 text-theme-xs dark:text-gray-400">
              {client.bookings}
          </span>
        </>
    },
    {
      header: t('Table.Status'),
      accessor: "status",
      render: (client: Client) => (
        <Badge
          size="sm"
          color={
            client.status === "Active"
              ? "success"
              : client.status === "Blocked"
              ? "warning"
              : "error"
          }
        >
          {t(`Table.Statuses.${client.status}`)}
        </Badge>
      ),
    },
    {
      header: t('Table.Actions'),
      accessor: "actions",
      render: (client: Client) => (
        <>
          <button
            className="mr-4 text-red-500 hover:underline"
            onClick={() => {
              alert(`Delete client ${client.client.name}`);
            }}
          >
            <TrashBinIcon />
          </button>
          {client.status === "Active" ? (
            <button
              className="mr-4 text-red-500 hover:underline"
              title={t('Table.Block')}
              onClick={() => {
                alert(`Block client ${client.client.name}`);
              }}
            >
              < CloseLineIcon />
            </button>
          ) : (
            <button
                className="mr-4 text-green-500 hover:underline"
                title={t('Table.Activate')}
              onClick={() => {
                alert(`Activate client ${client.client.name}`);
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
      <PageBreadcrumb pageTitle={t('Breadcrumb.ClientsPageTitle')} />
      <div className="flex justify-end mb-4 mx-5">
        <AddButton to="#" />
      </div>
      <div className="space-y-6">
        <ComponentCard title={t('Card.ClientsCardTitle')}>
          <DynamicTable columns={columns} data={tableData} />
        </ComponentCard>
      </div>
    </>
  );
}