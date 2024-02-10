import { CreditCard, GanttChartIcon, LayoutDashboard, PackageSearch, Percent, PictureInPicture2, Settings, ShoppingBag, Sparkles, User, Users } from "lucide-react";

export const CATEGORIES = [{

}]

export const ADMIN_SIDEBAR = [
  {
    id: 1,
    label: "General",
    general: [
      {
        id: 1,
        label: "Dashboard",
        icon: LayoutDashboard,
        href: "/dashboard",
        color: "text-sky-500",
        subCategories: []
      },
      {
        id: 2,
        label: "Parties",
        icon: Users,
        href: "/parties",
        color: "text-sky-500",
        subCategories: []
      },
      {
        id: 3,
        label: "Products",
        icon: Sparkles,
        href: "/parties",
        color: "text-sky-500",
        subCategories: [{
          id: 1,
          label: "Add Product",
          icon: Sparkles,
          href: "/parties",
          color: "text-sky-500",
        },
        {
          id: 2,
          label: "Product list",
          icon: Sparkles,
          href: "/parties",
          color: "text-sky-500",
        },
        {
          id: 3,
          label: "Category",
          icon: Sparkles,
          href: "/parties",
          color: "text-sky-500",
        },
        ]
      },

      {
        id: 4,
        label: "Sales",
        icon: Percent,
        href: "/dashboard",
        color: "text-sky-500",
        subCategories: [{
          sid: 1,
          label: "Add Sale",
          icon: Sparkles,
          href: "/parties",
          color: "text-sky-500",
        },
        {
          id: 2,
          label: "Sale list",
          icon: Sparkles,
          href: "/parties",
          color: "text-sky-500",
        },
        {
          id: 3,
          label: "POS",
          icon: Sparkles,
          href: "/parties",
          color: "text-sky-500",
        },
        ]

      },

    ],
  },
];
