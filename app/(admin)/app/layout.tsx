import MainContainer from "@/components/admin/common/container";
import PageWrapper from "@/components/admin/common/container/page-wrapper";
import Header from "@/components/admin/layout/header";
import SideBarNav from "@/components/admin/layout/sidebar";
import { Footer } from "@/components/super-admin/layouts/footer";
import { NavBar } from "@/components/super-admin/layouts/header";
import { Inter } from "next/font/google";

import React from "react";

export const metadata = {
  title: "App Layout",
  discription: "App Layout",
};
const inter = Inter({ subsets: ["latin"] });
export default function AdminRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`bg-white${inter.className}`}>
        <div className="flex">
          <SideBarNav />
          <main className="flex-1">
            <MainContainer>
              <Header />
              {/* <HeaderMobile /> */}
              <PageWrapper>{children}</PageWrapper>
            </MainContainer>
          </main>
        </div>
      </body>
    </html>
  );
}
