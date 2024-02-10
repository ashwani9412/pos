"use client";
import { cn } from "@/utils/tailwind-utils";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import { ADMIN_SIDEBAR } from "@/constant/admin";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const SideBar = () => {
  const pathname = usePathname();
  return (
    <>
      <div className="space-y-4 py-4 flex flex-col h-full bg-[#111827] text-white">
        <div className="px-3 py-2 flex-1">
          <Link href="#" className="flex items-center pl-3 mb-14">
            <div className="relative w-8 h-8 mr-4">{/* <AppLogo /> */}</div>
            <h1 className={cn("text-2xl font-bold")}>Super Admin</h1>
          </Link>
          <div className="space-y-1">
            {ADMIN_SIDEBAR.map((groups: any, i) => (
              <>
                <p>{groups.label}</p>
                {groups.general?.map((subCats: any) => (
                  <span
                    // href={subCats.href}
                    key={subCats.href}
                    className={cn(
                      "text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-white hover:bg-white/10 rounded-lg transition",
                      pathname === subCats.href
                        ? "text-white bg-white/10"
                        : "text-zinc-400"
                    )}
                  >
                    <div className="flex items-center flex-1">
                      <subCats.icon
                        className={cn("h-5 w-5 mr-3", subCats.color)}
                      />

                      <Accordion type="single" collapsible>
                        <AccordionItem value="item-1">
                          <AccordionTrigger> {subCats.label}</AccordionTrigger>
                          {subCats.subCategories.map((item: any, i: number) => (
                            <AccordionContent key={i}>
                              {item.label}
                            </AccordionContent>
                          ))}
                        </AccordionItem>
                      </Accordion>
                    </div>
                  </span>
                ))}
              </>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
