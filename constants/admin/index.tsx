import { SideNavItem } from "@/types/sidebar";
import { Icon } from "@iconify/react";
const basePath = "/app";

export const SIDENAV_ITEMS: SideNavItem[] = [
  {
    title: "Dashboard",
    path: `${basePath}/dashboard`,
    icon: <Icon icon="lucide:home" width="24" height="24" />,
  },
  {
    title: "Parties",
    path: `${basePath}/parties`,
    icon: <Icon icon="lucide:users" width="24" height="24" />,
  },
  {
    title: "Products",
    path: `${basePath}/products`,
    icon: <Icon icon="lucide:shopping-bag" width="24" height="24" />,
    submenu: true,
    subMenuItems: [
      { title: "Add Product", path: `${basePath}/products/add-product`},
      { title: "Product List", path: `${basePath}/products/list`},
      { title: "Category", path: `${basePath}/products/category`},
    ],
  },

  {
    title: "Sales",
    icon: <Icon icon="lucide:indian-rupee" width="24" height="24" />,
    path: `${basePath}/sales`,
    submenu: true,
    subMenuItems: [
      {
        title: "Sale/Bill Invoice",
        path: `${basePath}/sales/invoice`,
      },
      {
        title: "Sale list",
        path: `${basePath}/sales/list`,
      },
      {
        title: "POS",
        path: `${basePath}/sales/pos`,
      },
    ],
  },
  {
    title: "Expenses",
    path: `${basePath}/expense`,
    icon: <Icon icon="lucide:calculator" width="24" height="24" />,
  },
  {
    title: "Quotation",
    path: `${basePath}/quotation`,
    icon: <Icon icon="lucide:text-quote" width="24" height="24" />,
  },
  {
    title: "My Online Store",
    path: `${basePath}/store`,
    icon: <Icon icon="lucide:store" width="24" height="24" />,
  },
  {
    title: "Cash/Bank",
    path: `${basePath}/cash-bank`,
    icon: <Icon icon="lucide:badge-indian-rupee" width="24" height="24" />,
  },
  {
    title: "HRM",
    path: `${basePath}/hrm-portal`,
    icon: <Icon icon="lucide:handshake" width="24" height="24" />,
  },
  {
    title: "Reports",
    path: `${basePath}/reports`,
    icon: <Icon icon="lucide:file-bar-chart" width="24" height="24" />,
  },
  {
    title: "Settings",
    path: "/settings",
    icon: <Icon icon="lucide:settings" width="24" height="24" />,
    submenu: true,
    subMenuItems: [
      { title: "Account", path: "/settings/account" },
      { title: "Privacy", path: "/settings/privacy" },
    ],
  },
  {
    title: "Help",
    path: "/help",
    icon: <Icon icon="lucide:help-circle" width="24" height="24" />,
  },
];

// export const ADMIN_SIDEBAR = [
//   {
//     id: 1,
//     label: "General",
//     general: [
//       {
//         id: 1,
//         label: "Dashboard",
//         icon: LayoutDashboard,
//         href: "/dashboard",
//
//         subCategories: []
//       },
//       {
//         id: 2,
//         label: "Parties",
//         icon: Users,
//         href: "/parties",
//         color: "text-sky-500",
//         subCategories: []
//       },
//       {
//         id: 3,
//         label: "Products",
//         icon: Sparkles,
//         href: "/parties",
//         color: "text-sky-500",
//         subCategories: [{
//           id: 1,
//           label: "Add Product",
//           icon: Sparkles,
//           href: "/parties",
//           color: "text-sky-500",
//         },
//         {
//           id: 2,
//           label: "Product list",
//           icon: Sparkles,
//           href: "/parties",
//           color: "text-sky-500",
//         },
//         {
//           id: 3,
//           label: "Category",
//           icon: Sparkles,
//           href: "/parties",
//           color: "text-sky-500",
//         },
//         ]
//       },

//       {
//         id: 4,
//         label: "Sales",
//         icon: Percent,
//         href: "/dashboard",
//         color: "text-sky-500",
//         subCategories: [{
//           sid: 1,
//           label: "Add Sale",
//           icon: Sparkles,
//           href: "/parties",
//           color: "text-sky-500",
//         },
//         {
//           id: 2,
//           label: "Sale list",
//           icon: Sparkles,
//           href: "/parties",
//           color: "text-sky-500",
//         },
//         {
//           id: 3,
//           label: "POS",
//           icon: Sparkles,
//           href: "/parties",
//           color: "text-sky-500",
//         },
//         ]

//       },

//     ],
//   },
// ];
