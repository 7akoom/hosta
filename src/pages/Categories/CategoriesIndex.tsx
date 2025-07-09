import { useTranslation } from "react-i18next";
import PageBreadcrumb from "../../components/common/PageBreadCrumb";
import ComponentCard from "../../components/common/ComponentCard";
import PageMeta from "../../components/common/PageMeta";
import DynamicTable from "../../components/tables/DynamicTable";
import Badge from "../../components/ui/badge/Badge";
import {CloseLineIcon, TrashBinIcon, CheckLineIcon} from "../../icons";
import { Link } from "react-router";
import AddButton from "../UiElements/AddButton";

interface Category {
    id: number;
    icon: string;
    name: string;
    status: string;
    services: number;
}

export default function CategoriesIndex() {
  const { t } = useTranslation();

  const tableData: Category[] = [
    {
      id: 1,
      icon: "images/icons/cleaning.svg",
      name: "Cleaning",
      status: "Active",
      services: 2
    },
    {
        id: 2,
        icon: "images/icons/gardining.svg",
        name: "Gardening",
        status: "Blocked",
        services: 2
    },
    {
        id: 3,
        icon: "images/icons/painting.svg",
        name: "Painting",
        status: "Active",
        services: 2
    },
  ];

  const columns = [
    {
      header: t('Table.Category'),
      accessor: "client",
      render: (category: Category) => (
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 overflow-hidden rounded-full">
            <img
              width={40}
              height={40}
              src={category.icon}
              alt={category.name}
            />
          </div>
          <div>
            <span className="block font-medium text-gray-800 text-theme-sm dark:text-white/90">
              {category.name}
            </span>
          </div>
        </div>
      ),
    },
    {
      header: t('Table.ServicesCount'),
      accessor: "client",
      render: (category: Category) => (
          <div>
            <span className="block font-medium text-gray-800 text-theme-sm dark:text-white/90">
              {category.services}
            </span>
          </div>
      ),
    },
    {
      header: t('Table.Status'),
      accessor: "status",
      render: (category: Category) => (
        <Badge
          size="sm"
          color={
            category.status === "Active"
              ? "success"
              : category.status === "Blocked"
              ? "warning"
              : "error"
          }
        >
          {t(`Table.Statuses.${category.status}`)}
        </Badge>
      ),
    },
    {
      header: t('Table.Actions'),
      accessor: "actions",
      render: (category: Category) => (
        <>
          <button
            className="mr-4 text-red-500 hover:underline"
            onClick={() => {
              alert(`Delete client ${category.name}`);
            }}
          >
            <TrashBinIcon />
          </button>
          {category.status === "Active" ? (
            <button
              className="mr-4 text-red-500 hover:underline"
              title={t('Table.Block')}
              onClick={() => {
                alert(`Block client ${category.name}`);
              }}
            >
              < CloseLineIcon />
            </button>
          ) : (
            <button
                className="mr-4 text-green-500 hover:underline"
                title={t('Table.Activate')}
              onClick={() => {
                alert(`Activate client ${category.name}`);
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