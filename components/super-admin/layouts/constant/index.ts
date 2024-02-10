import { CreditCard, GanttChartIcon, LayoutDashboard, PackageSearch, Percent, PictureInPicture2, Settings, ShoppingBag, User, Users } from "lucide-react";

export const SIDEBAR = [
  {
    id: 1,
    label: "Dashboard",
    icon: LayoutDashboard,
    href: "/super-admin/dashboard",
    color: "text-sky-500",
  },
  {
    id: 2,
    label: "Venders",
    icon: ShoppingBag,
    href: "/super-admin/venders",
    color: "text-sky-500",
  },
  {
    id: 3,
    label: "Reports",
    icon: GanttChartIcon,
    href: "/reports",
    color: "text-sky-500",
  },
  {
    id: 4,
    label: "Subscription Plans",
    icon: CreditCard,
    href: "/subscription",
    color: "text-sky-500",
  },
  {
    id: 5,
    label: "Setting",
    icon: Settings,
    href: "/setting",
    color: "text-sky-500",
  },
  {
    id: 6,
    label: "Advertising",
    icon: PictureInPicture2,
    href: "/adds",
    color: "text-sky-500",
  },
  {
    id: 7,
    label: "User Roles",
    icon: User,
    href: "/user-roles",
    color: "text-sky-500",
  },
];

const SIDEBAR_test = [
  {
    General: [
      {
        id: 1,
        label: "Dashboard",
        icon: LayoutDashboard,
        href: "/dashboard",
        color: "text-sky-500",
      },
      {
        id: 2,
        label: "Parties",
        icon: Users,
        href: "/parties",
        color: "text-sky-500",
      },
      {
        id: 3,
        label: "Products",
        icon: PackageSearch,
        href: "/products",
        color: "text-sky-500",
      },
      {
        id: 4,
        label: "Sales",
        icon: Percent,
        href: "/dashboard",
        color: "text-sky-500",
      },
    ],
  },
];
