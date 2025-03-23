
import { BarChart3, FilePlus, MessageSquare, Plus, Users } from "lucide-react";
import { StatCard } from "@/components/dashboard/StatCard";
import { RecentActivityCard } from "@/components/dashboard/RecentActivityCard";
import { TasksBoard } from "@/components/dashboard/TasksBoard";
import { ClientsTable } from "@/components/dashboard/ClientsTable";
import { Button } from "@/components/ui/button";

export default function Dashboard() {
  return (
    <div className="space-y-8 animate-fade-in">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-muted-foreground">
            Welcome back, here's an overview of your business
          </p>
        </div>
        <Button className="sm:w-auto gap-2 w-full">
          <Plus className="h-4 w-4" /> New Project
        </Button>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
        <StatCard
          title="Total Clients"
          value="42"
          icon={<Users className="h-4 w-4" />}
          change={12}
          trend="up"
          className="animate-slide-up"
          style={{ animationDelay: "0ms" }}
        />
        <StatCard
          title="Active Projects"
          value="18"
          icon={<FilePlus className="h-4 w-4" />}
          change={8}
          trend="up"
          className="animate-slide-up"
          style={{ animationDelay: "50ms" }}
        />
        <StatCard
          title="Tasks Completed"
          value="324"
          icon={<BarChart3 className="h-4 w-4" />}
          change={-3}
          trend="down"
          className="animate-slide-up"
          style={{ animationDelay: "100ms" }}
        />
        <StatCard
          title="New Messages"
          value="15"
          icon={<MessageSquare className="h-4 w-4" />}
          change={5}
          trend="up"
          className="animate-slide-up"
          style={{ animationDelay: "150ms" }}
        />
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <TasksBoard />
        </div>
        <div className="lg:col-span-1">
          <RecentActivityCard />
        </div>
      </div>

      <div>
        <ClientsTable />
      </div>
    </div>
  );
}
