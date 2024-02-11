import {
  CreditCard,
  GanttChartIcon,
  LayoutDashboard,
  PackageSearch,
  Percent,
  PictureInPicture2,
  Settings,
  ShoppingBag,
  Sparkles,
  User,
  Users,
} from "lucide-react";

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
    icon: <Icon icon="lucide:mail" width="24" height="24" />,
  },
  {
    title: "Products",
    path: `${basePath}/products`,
    icon: <Icon icon="lucide:folder" width="24" height="24" />,
    submenu: true,
    subMenuItems: [
      { title: "Add Product", path: "/projects" },
      { title: "Product List", path: "/projects/web-design" },
      { title: "Category", path: "/projects/graphic-design" },
    ],
  },

  {
    title: "Sales",
    icon: <Icon icon="lucide:indian-rupee" width="24" height="24" />,
    path: "/sales",
    submenu: true,
    subMenuItems: [
      {
        title: "Add Sale",
        path: "/parties",
      },
      {
        title: "Sale list",
        path: "/parties",
      },
      {
        title: "POS",
        path: "/parties",
      },
    ],
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
