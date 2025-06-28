import { useTranslation } from "react-i18next";
import PageBreadcrumb from "../../components/common/PageBreadCrumb";
import ComponentCard from "../../components/common/ComponentCard";
import PageMeta from "../../components/common/PageMeta";
import HandymenTable from "../../components/tables/HandymenTable";

export default function HandymenIndex() {
  const { t } = useTranslation();
  return (
    <>
      <PageMeta
        title="Hosta Dashboard"
        description="Hosta services dashboard"
      />
      <PageBreadcrumb pageTitle={t('Breadcrumb.HandymenPageTitle')} />
      <div className="space-y-6">
        <ComponentCard title={t('Card.HandymenCardTitle')}>
          <HandymenTable />
        </ComponentCard>
      </div>
    </>
  );
}
