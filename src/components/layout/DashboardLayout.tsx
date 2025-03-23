
import { useState } from "react";
import { Outlet } from "react-router-dom";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";
import { Header } from "./Header";
import { SideNavigation } from "./SideNavigation";

export function DashboardLayout() {
  const [collapsed, setCollapsed] = useState(false);
  const isMobile = useIsMobile();

  return (
    <div className="flex min-h-screen flex-col">
      <Header collapsed={collapsed} setCollapsed={setCollapsed} />
      <div className="flex flex-1">
        {!isMobile && (
          <SideNavigation
            collapsed={collapsed}
            setCollapsed={setCollapsed}
          />
        )}
        <main
          className={cn(
            "flex-1 transition-[margin] duration-300 ease-in-out",
            !isMobile && (collapsed ? "ml-[70px]" : "ml-[240px]")
          )}
        >
          <div className="container mx-auto p-4 sm:p-6 md:p-8">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}
