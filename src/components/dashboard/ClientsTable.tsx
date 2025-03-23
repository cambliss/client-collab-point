
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

// Status badge styles
const statusStyles = {
  active: "bg-emerald-100 text-emerald-600 hover:bg-emerald-100",
  pending: "bg-amber-100 text-amber-600 hover:bg-amber-100",
  inactive: "bg-slate-100 text-slate-600 hover:bg-slate-100",
};

// Sample client data
const clients = [
  {
    id: 1,
    name: "Acme Corporation",
    contact: "John Smith",
    email: "john@acme.com",
    phone: "(123) 456-7890",
    status: "active",
    projects: 5,
    avatar: "https://api.dicebear.com/6.x/identicon/svg?seed=Acme",
    initials: "AC",
  },
  {
    id: 2,
    name: "Global Tech",
    contact: "Sarah Johnson",
    email: "sarah@globaltech.com",
    phone: "(234) 567-8901",
    status: "active",
    projects: 3,
    avatar: "https://api.dicebear.com/6.x/identicon/svg?seed=Global",
    initials: "GT",
  },
  {
    id: 3,
    name: "Bright Solutions",
    contact: "Mike Chen",
    email: "mike@brightsolutions.com",
    phone: "(345) 678-9012",
    status: "pending",
    projects: 1,
    avatar: "https://api.dicebear.com/6.x/identicon/svg?seed=Bright",
    initials: "BS",
  },
  {
    id: 4,
    name: "Sunset Media",
    contact: "Emma Wilson",
    email: "emma@sunsetmedia.com",
    phone: "(456) 789-0123",
    status: "inactive",
    projects: 0,
    avatar: "https://api.dicebear.com/6.x/identicon/svg?seed=Sunset",
    initials: "SM",
  },
  {
    id: 5,
    name: "Blue Ocean Inc",
    contact: "David Lee",
    email: "david@blueocean.com",
    phone: "(567) 890-1234",
    status: "active",
    projects: 2,
    avatar: "https://api.dicebear.com/6.x/identicon/svg?seed=Blue",
    initials: "BO",
  },
];

export function ClientsTable() {
  return (
    <Card className="shadow-subtle">
      <CardHeader className="pb-3">
        <CardTitle className="text-xl">Recent Clients</CardTitle>
        <CardDescription>
          Manage your client relationships
        </CardDescription>
      </CardHeader>
      <CardContent className="px-0">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Client</TableHead>
              <TableHead>Contact</TableHead>
              <TableHead className="hidden md:table-cell">Email</TableHead>
              <TableHead className="hidden lg:table-cell">Phone</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Projects</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {clients.map((client) => (
              <TableRow key={client.id}>
                <TableCell className="font-medium">
                  <div className="flex items-center gap-2">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src={client.avatar} alt={client.name} />
                      <AvatarFallback>{client.initials}</AvatarFallback>
                    </Avatar>
                    <span className="hidden sm:inline">{client.name}</span>
                  </div>
                </TableCell>
                <TableCell>{client.contact}</TableCell>
                <TableCell className="hidden md:table-cell">
                  {client.email}
                </TableCell>
                <TableCell className="hidden lg:table-cell">
                  {client.phone}
                </TableCell>
                <TableCell>
                  <Badge
                    variant="outline"
                    className={
                      statusStyles[client.status as keyof typeof statusStyles]
                    }
                  >
                    {client.status}
                  </Badge>
                </TableCell>
                <TableCell className="text-right">{client.projects}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
      <CardFooter className="border-t bg-muted/50 px-6 py-3">
        <Button asChild variant="ghost" size="sm" className="ml-auto">
          <Link to="/clients">View all clients</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
