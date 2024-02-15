import React from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const DashboardCard = () => {
  return (
    <div className="flex">
      <Card className="w-[220px] p-2 m-2 bg-green-100">
        <CardHeader>
          <CardTitle>₹ 5000</CardTitle>
          {/* <CardDescription>Card Description</CardDescription> */}
        </CardHeader>
        <CardContent>
          <p>Total Sales</p>
        </CardContent>
        <CardFooter className="-mx-5">
          {/* <button className="bg-blue-600 my-2 py-3 rounded-md font-bold">
            <p className="">↑ 500</p><p>This Month</p>
          </button> */}
          <div className="bg-green-50 w-80 border-r-0 flex items-center justify-center rounded-md h-12">
            <span className="text-green-500 mx-3">₹600</span>  <span className="mx-4">This Month</span>
          </div>
        </CardFooter>
      </Card>

      <Card className="w-[220px] p-2 m-2 bg-purple-200">
        <CardHeader>
          <CardTitle>₹ 5000</CardTitle>
          {/* <CardDescription>Card Description</CardDescription> */}
        </CardHeader>
        <CardContent>
          <p>Sale Amount</p>
        </CardContent>
        <CardFooter className="-mx-5">
          {/* <button className="bg-blue-600 my-2 py-3 rounded-md font-bold">
            <p className="">↑ 500</p><p>This Month</p>
          </button> */}
          <div className="bg-purple-100 w-80 border-r-0 flex items-center justify-center rounded-md h-12">
            <span className="text-green-500 mx-3">₹600</span>  <span className="mx-4">This Month</span>
          </div>
        </CardFooter>
      </Card>

      <Card className="w-[220px] p-2 m-2 bg-blue-200">
        <CardHeader>
          <CardTitle>₹ 5000</CardTitle>
          {/* <CardDescription>Card Description</CardDescription> */}
        </CardHeader>
        <CardContent>
          <p>Profit</p>
        </CardContent>
        <CardFooter className="-mx-5">
          <div className="bg-blue-100 w-80 border-r-0 flex items-center justify-center rounded-md h-12">
            <span className="text-green-500 mx-3">₹600</span>  <span className="mx-4">This Month</span>
          </div>
        </CardFooter>
      </Card>

      <Card className="w-[220px] p-2 m-2 bg-orange-200">
        <CardHeader>
          <CardTitle>₹ 5000</CardTitle>
          {/* <CardDescription>Card Description</CardDescription> */}
        </CardHeader>
        <CardContent>
          <p>Total Sales</p>
        </CardContent>
        <CardFooter className="-mx-5">
          <div className="bg-orange-100 w-80 border-r-0 flex items-center justify-center rounded-md h-12">
            <span className="text-green-500 mx-3">₹600</span>  <span className="mx-4">This Month</span>
          </div>
        </CardFooter>
      </Card>

      <Card className="w-[220px] p-2 m-2 bg-green-300">
        <CardHeader>
          <CardTitle>₹ 5000</CardTitle>
          {/* <CardDescription>Card Description</CardDescription> */}
        </CardHeader>
        <CardContent>
          <p>Income</p>
        </CardContent>
        <CardFooter className="-mx-5">
          <div className="bg-green-100 w-80 border-r-0 flex items-center justify-center rounded-md h-12">
            <span className="text-green-500 mx-3">₹600</span>  <span className="mx-4">This Month</span>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};
