
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

// Task priority badges
const priorityStyles = {
  high: "bg-red-100 text-red-600 hover:bg-red-100",
  medium: "bg-amber-100 text-amber-600 hover:bg-amber-100",
  low: "bg-emerald-100 text-emerald-600 hover:bg-emerald-100",
};

interface Task {
  id: number;
  title: string;
  description: string;
  priority: "high" | "medium" | "low";
  dueDate: string;
  assignee: {
    name: string;
    avatar: string;
    initials: string;
  };
  status: "todo" | "in-progress" | "review" | "done";
}

// Sample tasks data
const tasks: Task[] = [
  {
    id: 1,
    title: "Design homepage mockup",
    description: "Create a responsive design for the client homepage",
    priority: "high",
    dueDate: "Tomorrow",
    assignee: {
      name: "Sarah Lee",
      avatar: "https://api.dicebear.com/6.x/notionists/svg?seed=Sarah",
      initials: "SL",
    },
    status: "todo",
  },
  {
    id: 2,
    title: "API integration",
    description: "Integrate payment gateway API for the checkout process",
    priority: "medium",
    dueDate: "3 days",
    assignee: {
      name: "Tom Davis",
      avatar: "https://api.dicebear.com/6.x/notionists/svg?seed=Tom",
      initials: "TD",
    },
    status: "todo",
  },
  {
    id: 3,
    title: "Client onboarding",
    description: "Set up client account and send welcome email",
    priority: "low",
    dueDate: "Today",
    assignee: {
      name: "John Doe",
      avatar: "https://api.dicebear.com/6.x/notionists/svg?seed=John",
      initials: "JD",
    },
    status: "in-progress",
  },
  {
    id: 4,
    title: "UI component library",
    description: "Build a set of reusable UI components for the client dashboard",
    priority: "medium",
    dueDate: "Next week",
    assignee: {
      name: "Emma Wilson",
      avatar: "https://api.dicebear.com/6.x/notionists/svg?seed=Emma",
      initials: "EW",
    },
    status: "in-progress",
  },
  {
    id: 5,
    title: "Documentation",
    description: "Write technical documentation for developer handoff",
    priority: "low",
    dueDate: "Next week",
    assignee: {
      name: "Alex Brown",
      avatar: "https://api.dicebear.com/6.x/notionists/svg?seed=Alex",
      initials: "AB",
    },
    status: "review",
  },
  {
    id: 6,
    title: "User testing",
    description: "Conduct user testing sessions and compile feedback",
    priority: "high",
    dueDate: "4 days",
    assignee: {
      name: "Sarah Lee",
      avatar: "https://api.dicebear.com/6.x/notionists/svg?seed=Sarah",
      initials: "SL",
    },
    status: "done",
  },
];

// Group tasks by status
const tasksByStatus = {
  todo: tasks.filter((task) => task.status === "todo"),
  "in-progress": tasks.filter((task) => task.status === "in-progress"),
  review: tasks.filter((task) => task.status === "review"),
  done: tasks.filter((task) => task.status === "done"),
};

// Status column configurations
const columns = [
  { id: "todo", name: "To Do" },
  { id: "in-progress", name: "In Progress" },
  { id: "review", name: "In Review" },
  { id: "done", name: "Done" },
];

export function TasksBoard() {
  return (
    <Card className="shadow-subtle">
      <CardHeader className="flex flex-row items-center space-y-0 pb-3">
        <div>
          <CardTitle className="text-xl">Tasks Board</CardTitle>
          <CardDescription>Manage your team's active tasks</CardDescription>
        </div>
        <Button size="sm" className="ml-auto gap-1">
          <Plus className="h-4 w-4" />
          Add Task
        </Button>
      </CardHeader>
      <CardContent className="overflow-auto pb-0">
        <div className="flex gap-4 pb-4">
          {columns.map((column) => (
            <div
              key={column.id}
              className="min-w-[280px] rounded-lg border bg-muted/40 p-3"
            >
              <div className="mb-3 flex items-center justify-between">
                <h3 className="text-sm font-medium">{column.name}</h3>
                <Badge variant="outline">
                  {tasksByStatus[column.id as keyof typeof tasksByStatus]?.length || 0}
                </Badge>
              </div>
              <div className="space-y-3">
                {tasksByStatus[column.id as keyof typeof tasksByStatus]?.map((task) => (
                  <div
                    key={task.id}
                    className="rounded-md border bg-card p-3 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow"
                  >
                    <div className="mb-2 space-y-1">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">
                          {task.title}
                        </span>
                        <Badge
                          variant="outline"
                          className={priorityStyles[task.priority]}
                        >
                          {task.priority}
                        </Badge>
                      </div>
                      <p className="text-xs text-muted-foreground">
                        {task.description}
                      </p>
                    </div>
                    <div className="flex items-center justify-between">
                      <Badge variant="outline" className="bg-card">
                        {task.dueDate}
                      </Badge>
                      <Avatar className="h-6 w-6">
                        <AvatarImage
                          src={task.assignee.avatar}
                          alt={task.assignee.name}
                        />
                        <AvatarFallback className="text-[10px]">
                          {task.assignee.initials}
                        </AvatarFallback>
                      </Avatar>
                    </div>
                  </div>
                ))}
                {tasksByStatus[column.id as keyof typeof tasksByStatus]?.length === 0 && (
                  <div className="flex h-24 flex-col items-center justify-center rounded-md border border-dashed p-2 text-center">
                    <p className="text-xs text-muted-foreground">
                      No tasks yet
                    </p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter className="border-t bg-muted/50 px-6 py-3">
        <Button asChild variant="ghost" size="sm" className="ml-auto">
          <a href="/tasks">View all tasks</a>
        </Button>
      </CardFooter>
    </Card>
  );
}
