import { useTranslation } from "react-i18next";
import PageBreadcrumb from "../../components/common/PageBreadCrumb";
import ComponentCard from "../../components/common/ComponentCard";
import PageMeta from "../../components/common/PageMeta";
import DynamicTable from "../../components/tables/DynamicTable";
import Badge from "../../components/ui/badge/Badge";
import {CloseLineIcon, TrashBinIcon, CheckLineIcon} from "../../icons";
import AddButton from "../UiElements/AddButton";

interface Service {
    id: number;
    name: string;
    category: string;
    status: string;
}

export default function ServicesIndex() {
  const { t } = useTranslation();

  const tableData: Service[] = [
    {
      id: 1,
      name: "Home deep cleaning",
      category: "Cleaning",
      status: "Active"
    },
    {
        id: 2,
        name: "Lawn mowing",
        category: "Gardening",
        status: "Blocked"
    },
    {
        id: 3,
        name: "Interior and exterior painting",
        category: "Painting",
        status: "Active"
    },
    {
      id: 4,
      name: "Carpet and upholstery cleaning",
      category: "Cleaning",
      status: "Active"
    },
    {
        id: 5,
        name: "Fence installation",
        category: "Gardening",
        status: "Blocked"
    },
    {
        id: 6,
        name: "Wallpaper application/removal",
        category: "Painting",
        status: "Active"
    },
  ];

  const columns = [
    {
      header: t('Table.Service'),
      accessor: "client",
      render: (service: Service) => (
        <span className="block text-gray-500 text-theme-xs dark:text-gray-400">
          {service.name}
          </span>
      ),
    },
    {
      header: t('Table.Category'),
      accessor: "client",
      render: (service: Service) => (
        <span className="block text-gray-500 text-theme-xs dark:text-gray-400">
          {service.category}
          </span>
      ),
    },
    {
      header: t('Table.Status'),
      accessor: "status",
      render: (service: Service) => (
        <Badge
          size="sm"
          color={
            service.status === "Active"
              ? "success"
              : service.status === "Blocked"
              ? "warning"
              : "error"
          }
        >
          {t(`Table.Statuses.${service.status}`)}
        </Badge>
      ),
    },
    {
      header: t('Table.Actions'),
      accessor: "actions",
      render: (service: Service) => (
        <>
          <button
            className="mr-4 text-red-500 hover:underline"
            onClick={() => {
              alert(`Delete client ${service.name}`);
            }}
          >
            <TrashBinIcon />
          </button>
          {service.status === "Active" ? (
            <button
              className="mr-4 text-red-500 hover:underline"
              title={t('Table.Block')}
              onClick={() => {
                alert(`Block client ${service.name}`);
              }}
            >
              < CloseLineIcon />
            </button>
          ) : (
            <button
                className="mr-4 text-green-500 hover:underline"
                title={t('Table.Activate')}
              onClick={() => {
                alert(`Activate client ${service.name}`);
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
      <PageBreadcrumb pageTitle={t('Breadcrumb.ServicesPageTitle')} />
      <div className="flex justify-end mb-4 mx-5">
        <AddButton to="#" />
      </div>
      <div className="space-y-6">
        <ComponentCard title={t('Card.ServicesCardTitle')}>
          <DynamicTable columns={columns} data={tableData} />
        </ComponentCard>
      </div>
    </>
  );
}