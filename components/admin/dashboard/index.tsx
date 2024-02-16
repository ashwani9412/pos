import React from "react";
import { DashboardCard } from "./card";
import DashboardLineChart from "./line-chart";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const Dashboard = () => {
  return (
    <>
      <DashboardCard />
      <br />
      <div className="flex">
        <Card className="w-[60%] p-2 m-2 bg-white">
          <CardContent>
            <div className="flex">
              <span>Statics</span>
              <select className="ml-[80%]">
                <option value="year">Year</option>
                <option value="month">month</option>
              </select>
            </div>
            <hr className="w-[100%] border-2 mt-2" />
            <div className="">
              <DashboardLineChart />
            </div>
          </CardContent>
        </Card>
        <Card className="w-[40%] p-2 m-2 bg-white">
          <div className="border-2 rounded-lg h-15">
          <CardHeader>
            <CardTitle>
              <div className="flex row-auto">
                <span className="text-blue-500 col-auto">Stock Value</span>
                <span className="ml-[50%] col-auto text-blue-500">1400</span>
              </div>
            </CardTitle>
          </CardHeader>
          </div>
          <span className="m-4 p-2 text-gray-500">Low Stock</span>
          <div className="border-2 rounded-lg mt-2 w-[90%] p-2 m-6 h-[70%]">
            <CardContent>
                <p>Stock is more than no limit</p>
            </CardContent>
          </div>
        </Card>
      </div>
      <div className="flex row-auto">
        <div className="w-[40%] col-auto">
        <Card className="p-2 m-2 bg-white">
          <div className="border-2 rounded-lg h-15">
          <CardHeader>
            <CardTitle>
              <div className="flex row-auto">
                <span className="text-blue-500 col-auto">Stock Value</span>
                <span className="ml-[50%] col-auto text-blue-500">1400</span>
              </div>
            </CardTitle>
          </CardHeader>
          </div>
          <span className="m-4 p-2 text-gray-500">Low Stock</span>
          <div className="border-2 rounded-lg mt-2 w-[90%] p-2 m-6 h-[70%]">
            <CardContent>
                <p>Stock is more than no limit</p>
            </CardContent>
          </div>
        </Card>
        </div>
        <div className="w-[40%] col-auto">
        <Card className="p-2 m-2 bg-white">
          <div className="border-2 rounded-lg h-15">
          <CardHeader>
            <CardTitle>
              <div className="flex row-auto">
                <span className="text-blue-500 col-auto">Stock Value</span>
                <span className="ml-[50%] col-auto text-blue-500">1400</span>
              </div>
            </CardTitle>
          </CardHeader>
          </div>
          <span className="m-4 p-2 text-gray-500">Low Stock</span>
          <div className="border-2 rounded-lg mt-2 w-[90%] p-2 m-6 h-[70%]">
            <CardContent>
                <p>Stock is more than no limit</p>
            </CardContent>
          </div>
        </Card>
        </div>
        <div className="w-[40%] col-auto">
        <Card className="p-2 m-2 bg-white">
          <div className="border-2 rounded-lg h-15">
          <CardHeader>
            <CardTitle>
              <div className="flex row-auto">
                <span className="text-blue-500 col-auto">Stock Value</span>
                <span className="ml-[50%] col-auto text-blue-500">1400</span>
              </div>
            </CardTitle>
          </CardHeader>
          </div>
          <span className="m-4 p-2 text-gray-500">Low Stock</span>
          <div className="border-2 rounded-lg mt-2 w-[90%] p-2 m-6 h-[70%]">
            <CardContent>
                <p>Stock is more than no limit</p>
            </CardContent>
          </div>
        </Card>
        </div>
      </div>
    </>
  );
};
