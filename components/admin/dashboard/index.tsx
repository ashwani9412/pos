import React from "react";
import { DashboardCard } from "./card";
import DashboardLineChart from "@/components/admin/dashboard/line-chart";

export const Dashboard = () => {
  return (
    <>
      <DashboardCard />
      <br />
      <DashboardLineChart />
    </>
  );
};
