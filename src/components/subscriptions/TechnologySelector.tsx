
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface Technology {
  name: string;
  description: string;
  icon: string;
  popular?: boolean;
}

const technologies: Technology[] = [
  {
    name: "React + TypeScript",
    description: "Modern web development with type safety",
    icon: "⚛️",
    popular: true
  },
  {
    name: "Next.js",
    description: "Full-stack React framework with SSR",
    icon: "🔥"
  },
  {
    name: "Vue.js",
    description: "Progressive JavaScript framework",
    icon: "💚"
  },
  {
    name: "Angular",
    description: "Enterprise-grade TypeScript framework",
    icon: "🅰️"
  },
  {
    name: "Svelte",
    description: "Lightweight and fast web framework",
    icon: "🧡"
  },
  {
    name: "WordPress",
    description: "Content management system",
    icon: "📝"
  }
];

interface TechnologySelectorProps {
  selectedTechnology: string;
  onTechnologyChange: (technology: string) => void;
}

export function TechnologySelector({ selectedTechnology, onTechnologyChange }: TechnologySelectorProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Choose Your Technology Stack</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid md:grid-cols-3 gap-4">
          {technologies.map((tech) => (
            <div
              key={tech.name}
              className={`relative p-4 border rounded-lg cursor-pointer transition-all hover:shadow-md ${
                selectedTechnology === tech.name
                  ? 'border-primary bg-primary/5'
                  : 'border-border hover:border-primary/50'
              }`}
              onClick={() => onTechnologyChange(tech.name)}
            >
              {tech.popular && (
                <Badge className="absolute -top-2 -right-2 text-xs">
                  Popular
                </Badge>
              )}
              <div className="text-center">
                <div className="text-2xl mb-2">{tech.icon}</div>
                <h3 className="font-medium mb-1">{tech.name}</h3>
                <p className="text-sm text-muted-foreground">{tech.description}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
