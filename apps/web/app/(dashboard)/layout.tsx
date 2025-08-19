import { Dashboardlayout } from "@/modules/dashboard/ui/layouts/dashboard-layout";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return <Dashboardlayout>{children}</Dashboardlayout>;
};

export default Layout;
