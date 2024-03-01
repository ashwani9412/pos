import React from "react";
import { AddEditProduct } from "../components/forms/add-edit";
import BreadCrumbs from "@/components/admin/common/breadcrums";

export const metadata = {
  title: "Add product",
};

export default function AddProductPage() {
  return (
    <div>
      <BreadCrumbs />
      <AddEditProduct />
    </div>
  );
}
