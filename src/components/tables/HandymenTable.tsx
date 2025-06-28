import { useTranslation } from "react-i18next";
import {
    Table,
    TableBody,
    TableCell,
    TableHeader,
    TableRow,
  } from "../ui/table";
  
  import Badge from "../ui/badge/Badge";
  
  interface Order {
    id: number;
    client: {
      image: string;
      name: string;
      birthDate: string;
    };
    info: {
      email: string;
      phone: string;
      address: string;
    };
    status: string;
  }
  
  // Define the table data using the interface
  const tableData: Order[] = [
    {
      id: 1,
      client: {
        image: "/images/user/user-17.jpg",
          name: "Hkmt Ali",
          birthDate: "05/10/1996"
      },
      info: {
        email: "a7akoom96@gmail.com",
        phone: "+9647517065163",
        address: "Erbil - 100m st",
      },
      status: "Active",
    },
    {
      id: 2,
      client: {
        image: "/images/user/user-21.jpg",
        name: "Linda George",
        birthDate: "05/10/1992"
      },
      info: {
        email: "linda92@gmail.com",
        phone: "+9648518065163",
        address: "Erbil - 60m st",
      },
      status: "Blocked",
    },
  ];
  
export default function HandymenTable() {
    const { t } = useTranslation();
    return (
      <div className="overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-white/[0.05] dark:bg-white/[0.03]">
        <div className="max-w-full overflow-x-auto">
          <Table>
            {/* Table Header */}
            <TableHeader className="border-b border-gray-100 dark:border-white/[0.05]">
              <TableRow>
                <TableCell
                  isHeader
                  className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                >
                  {t('Table.Client')}
                </TableCell>
                <TableCell
                  isHeader
                  className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                >
                  {t('Table.Info')}
                </TableCell>
                <TableCell
                  isHeader
                  className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                >
                  {t('Table.Address')}
                </TableCell>
                <TableCell
                  isHeader
                  className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                >
                  {t('Table.Status')}
                </TableCell>
                <TableCell
                  isHeader
                  className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                >
                  {t('Table.Actions')}
                </TableCell>
              </TableRow>
            </TableHeader>
  
            {/* Table Body */}
            <TableBody className="divide-y divide-gray-100 dark:divide-white/[0.05]">
              {tableData.map((order) => (
                <TableRow key={order.id}>
                    <TableCell className="px-5 py-4 sm:px-6 text-start">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 overflow-hidden rounded-full">
                        <img
                            width={40}
                            height={40}
                            src={order.client.image}
                            alt={order.client.name}
                        />
                        </div>
                        <div>
                        <span className="block font-medium text-gray-800 text-theme-sm dark:text-white/90">
                            {order.client.name}
                        </span>
                        <span className="block text-gray-500 text-theme-xs dark:text-gray-400">
                            {order.client.birthDate}
                        </span>
                        </div>
                    </div>
                    </TableCell>
                  <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                        <span className="block text-gray-500 text-theme-xs dark:text-gray-400">
                            {order.info.phone}
                        </span>
                        {order.info.email}
                    </TableCell>
                    <TableCell className="px-4 py-3 text-gray-500 text-theme-sm dark:text-gray-400">
                        {order.info.address}
                    </TableCell>
                    <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                        <Badge
                        size="sm"
                        color={
                            order.status === "Active"
                            ? "success"
                            : order.status === "Blocked"
                            ? "warning"
                            : "error"
                        }
                        >
                        {order.status}
                        </Badge>
                  </TableCell>
                  <TableCell className="px-4 py-3 text-start">
                    <button
                      className="mr-4 text-blue-500 hover:underline"
                      onClick={() => {
                        alert(`Edit client ${order.client.name}`);
                      }}
                    >
                      {t('Table.Edit') || 'Delete'}
                    </button>
                    <button
                      className="mr-4 text-red-500 hover:underline"
                      onClick={() => {
                        alert(`Delete client ${order.client.name}`);
                      }}
                    >
                      {t('Table.Delete') || 'Delete'}
                    </button>
                    {order.status === "Active" ? (
                      <button
                        className="mr-4 text-red-500 hover:underline"
                        onClick={() => {
                          alert(`Block client ${order.client.name}`);
                        }}
                      >
                        {t('Table.Block') || 'Block'}
                      </button>
                    ) : (
                      <button
                        className="mr-4 text-green-500 hover:underline"
                        onClick={() => {
                          alert(`Activate client ${order.client.name}`);
                        }}
                      >
                        {t('Table.Activate') || 'Activate'}
                      </button>
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    );
  }
  