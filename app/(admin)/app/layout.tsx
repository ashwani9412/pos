import { SideBar } from "@/components/admin/layout/sidebar";
import { Footer } from "@/components/super-admin/layouts/footer";
import { NavBar } from "@/components/super-admin/layouts/header";

import React from "react";

export const metadata = {
  title: "App Layout",
  discription: "App Layout",
};

export default function layout() {
  return (
    <html lang="en">
      <body>
        <div className="h-full relative">
          <div className="hidden h-full md:flex md:w-72 md:flex-col md:fixed md:inset-y-0 z-[80] bg-gray-900">
            <SideBar />
          </div>
          <main className="md:pl-72">
            Webapp main area
            {/* <NavBar /> */}
            {/* {JSON.stringify(session)} */}
            {/* {children} */}
          </main>
          {/* <Footer /> */}
        </div>
      </body>
    </html>
  );
}
