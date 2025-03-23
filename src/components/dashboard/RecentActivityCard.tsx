
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Activity data simulation
const activities = [
  {
    id: 1,
    type: "client",
    title: "New client onboarded",
    description: "Acme Inc. has been successfully onboarded.",
    timestamp: "2 hours ago",
    user: {
      name: "Alex Brown",
      avatar: "https://api.dicebear.com/6.x/notionists/svg?seed=Alex",
      initials: "AB",
    },
  },
  {
    id: 2,
    type: "task",
    title: "Task completed",
    description: "Website redesign project has been completed.",
    timestamp: "5 hours ago",
    user: {
      name: "Sarah Lee",
      avatar: "https://api.dicebear.com/6.x/notionists/svg?seed=Sarah",
      initials: "SL",
    },
  },
  {
    id: 3,
    type: "file",
    title: "New file uploaded",
    description: "Final design mockups have been uploaded.",
    timestamp: "Yesterday",
    user: {
      name: "Tom Davis",
      avatar: "https://api.dicebear.com/6.x/notionists/svg?seed=Tom",
      initials: "TD",
    },
  },
  {
    id: 4,
    type: "message",
    title: "New message",
    description: "John from Tech Support responded to your ticket.",
    timestamp: "Yesterday",
    user: {
      name: "John Doe",
      avatar: "https://api.dicebear.com/6.x/notionists/svg?seed=John",
      initials: "JD",
    },
  },
  {
    id: 5,
    type: "client",
    title: "Client meeting scheduled",
    description: "Meeting with Global Corp is set for tomorrow at 2 PM.",
    timestamp: "2 days ago",
    user: {
      name: "Emma Wilson",
      avatar: "https://api.dicebear.com/6.x/notionists/svg?seed=Emma",
      initials: "EW",
    },
  },
];

export function RecentActivityCard() {
  const [activeTab, setActiveTab] = useState<string>("all");
  
  const filteredActivities = activeTab === "all" 
    ? activities 
    : activities.filter(activity => activity.type === activeTab);

  return (
    <Card className="w-full shadow-subtle">
      <CardHeader className="pb-3">
        <CardTitle className="text-xl">Recent Activity</CardTitle>
        <CardDescription>
          Latest updates from your team and clients
        </CardDescription>
      </CardHeader>
      <Tabs 
        defaultValue="all" 
        value={activeTab} 
        onValueChange={setActiveTab}
        className="w-full"
      >
        <div className="px-6">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="client">Clients</TabsTrigger>
            <TabsTrigger value="task">Tasks</TabsTrigger>
            <TabsTrigger value="file">Files</TabsTrigger>
            <TabsTrigger value="message">Messages</TabsTrigger>
          </TabsList>
        </div>
        <TabsContent value={activeTab} className="mt-0 pt-3">
          <CardContent className="px-6">
            <div className="space-y-4">
              {filteredActivities.length > 0 ? (
                filteredActivities.map((activity) => (
                  <div 
                    key={activity.id} 
                    className="flex items-start gap-4 rounded-lg p-3 transition-colors hover:bg-muted/50"
                  >
                    <Avatar className="h-9 w-9">
                      <AvatarImage 
                        src={activity.user.avatar} 
                        alt={activity.user.name}
                      />
                      <AvatarFallback>{activity.user.initials}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1 space-y-1">
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-medium leading-none">
                          {activity.title}
                        </p>
                        <Badge 
                          variant="outline" 
                          className="text-[10px] font-normal"
                        >
                          {activity.timestamp}
                        </Badge>
                      </div>
                      <p className="text-xs text-muted-foreground">
                        {activity.description}
                      </p>
                      <div className="pt-1 text-xs">
                        <span className="font-medium">{activity.user.name}</span>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="flex h-32 flex-col items-center justify-center space-y-2 rounded-lg border border-dashed p-8 text-center">
                  <div className="text-sm font-medium">No activities found</div>
                  <div className="text-xs text-muted-foreground">
                    There are no recent activities in this category
                  </div>
                </div>
              )}
            </div>
          </CardContent>
        </TabsContent>
      </Tabs>
      <CardFooter className="border-t bg-muted/50 px-6 py-3">
        <Button asChild variant="ghost" size="sm" className="ml-auto">
          <Link to="/activities">View all activity</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
