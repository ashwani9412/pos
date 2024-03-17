"use client";
import React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Icon } from "@iconify/react";
import { Button } from "@/components/ui/button";
import DataTable from "./data-table";

const Parties = () => {
  return (
    <>
      <div className="columns-2">
        <div className="font-bold text-lg">Parties</div>
        <div className="flex ml-64">
          <div className="flex-none">
            <Select>
              <SelectTrigger className="w-[200px] text-blue-500">
                <Icon icon="lucide:file-bar-chart" width="20" height="20" />
                <SelectValue placeholder="Reports" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Fruits</SelectLabel>
                  <SelectItem value="apple">Apple</SelectItem>
                  <SelectItem value="banana">Banana</SelectItem>
                  <SelectItem value="grapes">Grapes</SelectItem>
                  <SelectItem value="blueberry">Blueberry</SelectItem>
                  <SelectItem value="pineapple">Pineapple</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div className="mx-4 bg-white rounded-md w-10 border-2">
            <p className="py-2 mx-2">
              <Icon icon="lucide:settings" width="20" height="20" />
            </p>
          </div>
          <div className="bg-white rounded-md w-10 border-2">
            <p className="py-2 mx-2">
              <Icon icon="lucide:brick-wall" width="20" height="20" />
            </p>
          </div>
        </div>
      </div>

      <div className="bg-blue-100 border-2 grid grid-cols-2 mt-3 rounded-md h-20 w-[100%]">
        <div className="flex">
          <div className="w-[40px] mt-4 text-white rounded-xl h-10 mx-2 bg-blue-500">
            <p className="p-2">
              <Icon icon="lucide:gift" width="25" height="25" />
            </p>
          </div>
          <div className="mt-4 mx-2">
            <p className="font-bold">Earn 500/- for each referral</p>
            <p className="text-xs">
              You will gain 501/- per referral, while they enjoy 15% off any
              premium plan purchase
            </p>
          </div>
        </div>
        <div className="mt-4 relative">
          <Button className="absolute w-[140px] inset-y-0 right-16 bg-white text-black hover:bg-blue-500">
            Refer Now
          </Button>
          <button>
            <span className="absolute inset-y-0 right-4 mt-1">
              <svg
                className="h-8 w-8 text-gray-600"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                {" "}
                <line x1="18" y1="6" x2="6" y2="18" />{" "}
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </span>
          </button>
        </div>
      </div>

      <div className="flex mt-3 flex-row">
        <div className="box-border hover:border-violet-300 hover:bg-violet-100 mr-2 h-24 w-24 p-4 border-2 rounded-xl basis-[33%]">
          <div className="flex text-violet-500">
            <Icon icon="lucide:users-round" width="24" height="24" />
            <p className="ml-3 text-lg">ALL Parties</p>
          </div>
          <p className="mt-1 text-xl font-medium">400</p>
        </div>

        <div className="box-border hover:border-green-200 hover:bg-green-50 mx-2 h-24 w-24 p-4 border-2 rounded-xl basis-[33%]">
          <div className="inline-flex text-green-500">
            <Icon icon="lucide:badge-indian-rupee" width="26" height="26" />
            <p className="ml-3 text-lg">To Collect</p>
          </div>
          <p className="mt-1 text-xl font-medium">₹ 23,000</p>
        </div>

        <div className="box-border hover:border-red-200 hover:bg-red-50 ml-2 h-24 w-24 p-4 border-2 rounded-xl basis-[33%]">
          <div className="inline-flex text-red-500">
            <Icon icon="lucide:badge-indian-rupee" width="26" height="26" />
            <p className="ml-3 text-lg">To Pay</p>
          </div>
          <p className="mt-1 text-xl font-medium">₹ 0</p>
        </div>
      </div>

      <div className="columns-2 mt-3">
        <div className="flex justify-start ...">
        <div className="mr-3 bg-white rounded-md w-10 border-2">
            <p className="py-2 mx-2">
              <Icon icon="lucide:settings" width="20" height="20" />
            </p>
        </div>
        <div className="">
            <Select>
              <SelectTrigger className="w-[220px]">
                <SelectValue placeholder="Select Categories" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Fruits</SelectLabel>
                  <SelectItem value="apple">Apple</SelectItem>
                  <SelectItem value="banana">Banana</SelectItem>
                  <SelectItem value="grapes">Grapes</SelectItem>
                  <SelectItem value="blueberry">Blueberry</SelectItem>
                  <SelectItem value="pineapple">Pineapple</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="flex justify-end ...">
        <div className="">
            <Select>
              <SelectTrigger className="w-[150px]">
                <Icon icon="lucide:package" width="20" height="20" />
                <SelectValue placeholder="Bulk Action" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Fruits</SelectLabel>
                  <SelectItem value="apple">Apple</SelectItem>
                  <SelectItem value="banana">Banana</SelectItem>
                  <SelectItem value="grapes">Grapes</SelectItem>
                  <SelectItem value="blueberry">Blueberry</SelectItem>
                  <SelectItem value="pineapple">Pineapple</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div className="ml-3">
          <Button className="w-[140px] inset-y-0 right-16 bg-blue-600 text-white hover:bg-blue-500">
            Create Party
          </Button>
          </div>
        </div>
      </div>
      <div className="">
      <DataTable/>
      </div>
    </>
  );
};
export default Parties;
