
import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronRight, ExternalLink, Users, BarChart3, FilePlus, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Index() {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur-sm">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary text-primary-foreground">
              CM
            </div>
            <span className="text-lg font-semibold">ClientMaster</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link to="/#features" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Features
            </Link>
            <Link to="/#pricing" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Pricing
            </Link>
            <Link to="/#testimonials" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Testimonials
            </Link>
            <Link to="/#faq" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              FAQ
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link to="/sign-in" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Sign in
            </Link>
            <Button asChild size="sm">
              <Link to="/sign-up">Get Started</Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden py-20 md:py-32 bg-gradient-to-b from-muted/50 to-background">
        <div className="container relative z-10">
          <div className="mx-auto max-w-[800px] text-center">
            <div className="mb-4 inline-flex items-center rounded-full border px-3 py-1 text-sm">
              <span className="mr-2 rounded-full bg-primary px-1.5 py-0.5 text-xs text-primary-foreground">
                New
              </span>
              <span className="text-muted-foreground">
                Announcing our new Client Analytics feature
              </span>
              <ChevronRight className="ml-1 h-3.5 w-3.5" />
            </div>
            <h1 className="text-3xl sm:text-5xl font-bold leading-tight tracking-tighter md:text-6xl">
              Manage your client relationships <br className="hidden sm:inline" />
              <span className="text-primary">with precision</span>
            </h1>
            <p className="mt-4 text-xl text-muted-foreground max-w-[600px] mx-auto">
              A seamless platform for managing clients, tracking projects, and
              delivering exceptional service.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link to="/sign-up">
                <div 
                  className="relative z-0 overflow-hidden rounded-lg transition-all duration-300 ease-out"
                  onMouseEnter={() => setIsHovering(true)}
                  onMouseLeave={() => setIsHovering(false)}
                >
                  <div className={`
                    absolute inset-0 rounded-lg bg-gradient-to-r from-primary to-blue-400
                    transition-all duration-500 ease-out
                    ${isHovering ? 'opacity-90 scale-[1.03]' : 'opacity-100 scale-100'}
                  `}></div>
                  <Button 
                    size="lg" 
                    className={`relative z-10 border-0 shadow-none bg-transparent hover:bg-transparent ${isHovering ? 'translate-y-[-2px]' : ''} transition-all duration-300`}
                  >
                    Get Started
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </Button>
                </div>
              </Link>
              <Button
                variant="outline"
                size="lg"
                asChild
                className="bg-background"
              >
                <Link to="/sign-in">
                  Live Demo
                  <ExternalLink className="ml-1.5 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
          <div className="mt-16 flex justify-center">
            <div className="relative w-full max-w-[1200px] rounded-2xl border bg-card/50 shadow-xl backdrop-blur-sm overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-transparent"></div>
              <img
                src="https://cdn.pixabay.com/photo/2020/02/19/07/48/dashboard-4861688_1280.png"
                alt="Dashboard preview"
                className="w-full rounded-2xl p-1 transition-all duration-300"
              />
            </div>
          </div>
        </div>
        
        {/* Background elements */}
        <div className="absolute left-1/2 top-1/2 -z-10 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-3xl"></div>
      </section>

      {/* Features */}
      <section id="features" className="py-20 bg-gradient-to-b from-background to-muted/30">
        <div className="container">
          <div className="mx-auto max-w-[800px] text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Everything you need to manage clients
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Our platform provides all the tools necessary for successful client
              management and service delivery.
            </p>
          </div>
          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Client Onboarding",
                description:
                  "Streamline the client onboarding process with automated workflows and customizable forms.",
                icon: (
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Users className="h-6 w-6" />
                  </div>
                ),
              },
              {
                title: "Task Management",
                description:
                  "Track progress with intuitive kanban boards and task management tools.",
                icon: (
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <BarChart3 className="h-6 w-6" />
                  </div>
                ),
              },
              {
                title: "File Sharing",
                description:
                  "Securely share files and documents with clients and team members.",
                icon: (
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <FilePlus className="h-6 w-6" />
                  </div>
                ),
              },
              {
                title: "Team Collaboration",
                description:
                  "Collaborate with your team on projects and tasks in real-time.",
                icon: (
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Users className="h-6 w-6" />
                  </div>
                ),
              },
              {
                title: "Communication Hub",
                description:
                  "Keep all client communications in one place for easy reference.",
                icon: (
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <MessageSquare className="h-6 w-6" />
                  </div>
                ),
              },
              {
                title: "Payment Integration",
                description:
                  "Seamlessly integrate with popular payment gateways for invoicing and subscriptions.",
                icon: (
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6"
                    >
                      <rect width="20" height="14" x="2" y="5" rx="2" />
                      <line x1="2" x2="22" y1="10" y2="10" />
                    </svg>
                  </div>
                ),
              },
            ].map((feature, i) => (
              <div
                key={i}
                className="group rounded-xl border bg-card p-6 shadow-subtle transition-all hover:shadow-xl"
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="mb-2 text-xl font-bold">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container">
          <div className="rounded-2xl bg-primary p-8 md:p-12">
            <div className="mx-auto max-w-[800px] text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground">
                Ready to transform your client management?
              </h2>
              <p className="mt-4 text-lg text-primary-foreground/80">
                Join thousands of businesses that use ClientMaster to deliver
                exceptional client experiences.
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <Button
                  size="lg"
                  className="bg-white text-primary hover:bg-white/90"
                  asChild
                >
                  <Link to="/sign-up">Start your free trial</Link>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-white hover:text-primary"
                  asChild
                >
                  <Link to="/#pricing">View pricing</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-12 md:py-16">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="mb-8 md:mb-0">
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary text-primary-foreground">
                  CM
                </div>
                <span className="text-lg font-semibold">ClientMaster</span>
              </div>
              <p className="mt-2 text-sm text-muted-foreground max-w-[300px]">
                The complete solution for client management and service delivery.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
              <div className="space-y-3">
                <h4 className="text-sm font-medium">Product</h4>
                <ul className="space-y-2">
                  <li>
                    <a href="/#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                      Features
                    </a>
                  </li>
                  <li>
                    <a href="/#pricing" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                      Pricing
                    </a>
                  </li>
                  <li>
                    <a href="/#roadmap" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                      Roadmap
                    </a>
                  </li>
                </ul>
              </div>
              <div className="space-y-3">
                <h4 className="text-sm font-medium">Company</h4>
                <ul className="space-y-2">
                  <li>
                    <a href="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                      About
                    </a>
                  </li>
                  <li>
                    <a href="/blog" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                      Blog
                    </a>
                  </li>
                  <li>
                    <a href="/careers" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                      Careers
                    </a>
                  </li>
                </ul>
              </div>
              <div className="space-y-3">
                <h4 className="text-sm font-medium">Legal</h4>
                <ul className="space-y-2">
                  <li>
                    <a href="/privacy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                      Privacy
                    </a>
                  </li>
                  <li>
                    <a href="/terms" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                      Terms
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-12 border-t pt-6 text-center">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} ClientMaster. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
