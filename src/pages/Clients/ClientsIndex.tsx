import { useTranslation } from "react-i18next";
import PageBreadcrumb from "../../components/common/PageBreadCrumb";
import ComponentCard from "../../components/common/ComponentCard";
import PageMeta from "../../components/common/PageMeta";
import ClientsTable from "../../components/tables/ClientsTable";

export default function ClientsIndex() {
  const { t } = useTranslation();
  return (
    <>
      <PageMeta
        title="Hosta Dashboard"
        description="Hosta services dashboard"
      />
      <PageBreadcrumb pageTitle={t('Breadcrumb.ClientsPageTitle')} />
      <div className="space-y-6">
        <ComponentCard title={t('Card.ClientsCardTitle')}>
          <ClientsTable />
        </ComponentCard>
      </div>
    </>
  );
}
