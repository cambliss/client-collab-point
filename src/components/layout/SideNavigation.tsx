
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from "@/lib/utils";
import {
  BarChart3,
  FolderClosed,
  Home,
  LayoutDashboard,
  LogOut,
  MessageSquare,
  Plus,
  Settings,
  UserPlus,
  Users2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

type NavItem = {
  title: string;
  href: string;
  icon: React.ElementType;
  badge?: number;
};

const mainNav: NavItem[] = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Clients",
    href: "/clients",
    icon: Users2,
    badge: 5,
  },
  {
    title: "Projects",
    href: "/projects",
    icon: FolderClosed,
  },
  {
    title: "Tasks",
    href: "/tasks",
    icon: BarChart3,
    badge: 2,
  },
  {
    title: "Messages",
    href: "/messages",
    icon: MessageSquare,
    badge: 3,
  },
  {
    title: "Team",
    href: "/team",
    icon: Users2,
  },
];

const secondaryNav: NavItem[] = [
  {
    title: "Settings",
    href: "/settings",
    icon: Settings,
  },
];

interface SideNavigationProps {
  collapsed?: boolean;
  setCollapsed?: (collapsed: boolean) => void;
}

export function SideNavigation({ collapsed = false, setCollapsed }: SideNavigationProps) {
  const location = useLocation();
  const [isHovering, setIsHovering] = useState(false);

  // Helper to determine if a path is active
  const isActivePath = (path: string) => {
    if (path === '/dashboard' && location.pathname === '/') {
      return true;
    }
    return location.pathname.startsWith(path);
  };

  return (
    <div
      className={cn(
        "group fixed inset-y-0 z-30 flex h-full flex-col border-r bg-background transition-all duration-300 ease-in-out",
        collapsed && !isHovering ? "w-[70px]" : "w-[240px]"
      )}
      onMouseEnter={() => collapsed && setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div className="flex h-14 items-center border-b px-4">
        <Link
          to="/"
          className={cn(
            "flex items-center gap-2 font-medium transition-all",
            collapsed && !isHovering ? "justify-center" : "justify-start"
          )}
        >
          <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary text-primary-foreground">
            CM
          </div>
          <span
            className={cn(
              "text-lg font-semibold transition-opacity",
              collapsed && !isHovering ? "opacity-0 w-0 hidden" : "opacity-100"
            )}
          >
            ClientMaster
          </span>
        </Link>
        <Button
          onClick={() => setCollapsed?.(!collapsed)}
          variant="ghost"
          size="icon"
          className={cn(
            "ml-auto h-8 w-8",
            collapsed && !isHovering ? "opacity-0" : "opacity-100"
          )}
        >
          <span className="sr-only">Toggle navigation</span>
          {collapsed ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                clipRule="evenodd"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z"
                clipRule="evenodd"
              />
            </svg>
          )}
        </Button>
      </div>
      <ScrollArea
        className={cn(
          "flex-1 pb-4 pt-4",
          collapsed && !isHovering ? "overflow-hidden" : ""
        )}
      >
        <nav className="grid gap-2 px-2">
          <div className="grid gap-1 px-2">
            <div
              className={cn(
                "flex items-center gap-2 py-1",
                collapsed && !isHovering ? "justify-center" : "justify-start"
              )}
            >
              <div
                className={cn(
                  "text-xs font-medium text-muted-foreground transition-opacity",
                  collapsed && !isHovering ? "opacity-0 w-0 hidden" : "opacity-100"
                )}
              >
                MAIN
              </div>
            </div>
            {mainNav.map((item) => (
              <NavItem
                key={item.href}
                item={item}
                collapsed={collapsed && !isHovering}
                active={isActivePath(item.href)}
              />
            ))}
          </div>
        </nav>
        <Separator className="my-4" />
        <nav className="grid gap-2 px-2">
          <div className="grid gap-1 px-2">
            <div
              className={cn(
                "flex items-center gap-2 py-1",
                collapsed && !isHovering ? "justify-center" : "justify-start"
              )}
            >
              <div
                className={cn(
                  "text-xs font-medium text-muted-foreground transition-opacity",
                  collapsed && !isHovering ? "opacity-0 w-0 hidden" : "opacity-100"
                )}
              >
                SYSTEM
              </div>
            </div>
            {secondaryNav.map((item) => (
              <NavItem
                key={item.href}
                item={item}
                collapsed={collapsed && !isHovering}
                active={isActivePath(item.href)}
              />
            ))}
          </div>
        </nav>
        <Separator className="my-4" />
        <div className="px-4">
          <Button
            asChild
            size={collapsed && !isHovering ? "icon" : "default"}
            className={cn(
              "w-full justify-start gap-2 bg-primary/10 text-primary hover:bg-primary/20",
              collapsed && !isHovering ? "px-0" : ""
            )}
          >
            <Link to="/clients/new">
              <Plus className="h-4 w-4" />
              <span className={collapsed && !isHovering ? "sr-only" : ""}>
                New Client
              </span>
            </Link>
          </Button>
        </div>
      </ScrollArea>
      <div className="mt-auto border-t p-4">
        <Button
          asChild
          variant="ghost"
          size={collapsed && !isHovering ? "icon" : "default"}
          className={cn(
            "w-full justify-start gap-2",
            collapsed && !isHovering ? "px-0" : ""
          )}
        >
          <Link to="/logout">
            <LogOut className="h-4 w-4" />
            <span className={collapsed && !isHovering ? "sr-only" : ""}>
              Logout
            </span>
          </Link>
        </Button>
      </div>
    </div>
  );
}

interface NavItemProps {
  item: NavItem;
  collapsed: boolean;
  active: boolean;
}

function NavItem({ item, collapsed, active }: NavItemProps) {
  const link = (
    <Link
      to={item.href}
      className={cn(
        "group flex h-9 items-center rounded-md px-3 text-sm font-medium transition-colors hover:bg-accent",
        active
          ? "bg-accent text-accent-foreground"
          : "transparent text-muted-foreground hover:text-foreground",
        collapsed ? "justify-center px-0" : "justify-start"
      )}
    >
      {item.icon && (
        <item.icon className={cn("h-4 w-4", collapsed ? "mr-0" : "mr-2")} />
      )}
      {!collapsed && <span>{item.title}</span>}
      {!collapsed && item.badge && (
        <span className="ml-auto flex h-5 w-5 items-center justify-center rounded-full bg-primary/10 text-xs font-medium text-primary">
          {item.badge}
        </span>
      )}
    </Link>
  );

  if (collapsed) {
    return (
      <Tooltip>
        <TooltipTrigger asChild>{link}</TooltipTrigger>
        <TooltipContent side="right" className="flex items-center gap-2">
          {item.title}
          {item.badge && (
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary/10 text-xs font-medium text-primary">
              {item.badge}
            </span>
          )}
        </TooltipContent>
      </Tooltip>
    );
  }

  return link;
}
