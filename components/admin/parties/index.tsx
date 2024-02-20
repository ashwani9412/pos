'use client'
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

const Parties = () => {
  return (
    <>
      <div className="columns-2">
        <div className="font-bold text-lg">Parties</div>
        <div className="flex ml-60">
          <div className="flex-none">
            <Select>
              <SelectTrigger className="w-[200px] text-blue-500">
                <Icon icon="lucide:file-bar-chart" width="20" height="20" />
                <SelectValue placeholder="Reports"/>
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
            <p className="py-2 mx-2"><Icon icon="lucide:settings" width="20" height="20"/></p>
          </div>
          <div className="bg-white rounded-md w-10 border-2">
            <p className="py-2 mx-2"><Icon icon="lucide:brick-wall" width="20" height="20"/></p>
          </div>
        </div>
      </div>

      <div>
        
      </div>
    </>
  );
};
export default Parties;
