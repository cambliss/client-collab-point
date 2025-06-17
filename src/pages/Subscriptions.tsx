
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Star, Zap, Rocket } from "lucide-react";
import { TechnologySelector } from "@/components/subscriptions/TechnologySelector";
import { PageCountSelector } from "@/components/subscriptions/PageCountSelector";

const plans = [
  {
    name: "Starter",
    price: 29,
    icon: <Zap className="h-5 w-5" />,
    description: "Perfect for small projects",
    features: [
      "Up to 5 pages",
      "Basic templates",
      "Email support",
      "1 revision round",
      "Basic dashboard access"
    ],
    popular: false
  },
  {
    name: "Professional",
    price: 79,
    icon: <Star className="h-5 w-5" />,
    description: "Ideal for growing businesses",
    features: [
      "Up to 15 pages",
      "Premium templates",
      "Priority support",
      "3 revision rounds",
      "Full dashboard access",
      "Team collaboration"
    ],
    popular: true
  },
  {
    name: "Enterprise",
    price: 149,
    icon: <Rocket className="h-5 w-5" />,
    description: "For large-scale projects",
    features: [
      "Unlimited pages",
      "Custom templates",
      "24/7 dedicated support",
      "Unlimited revisions",
      "Full dashboard access",
      "Advanced team management",
      "API access"
    ],
    popular: false
  }
];

export default function Subscriptions() {
  const [selectedTechnology, setSelectedTechnology] = useState("");
  const [selectedPageCount, setSelectedPageCount] = useState(1);
  const [selectedPlan, setSelectedPlan] = useState("");

  const handleSubscribe = (planName: string) => {
    if (!selectedTechnology) {
      alert("Please select a technology first");
      return;
    }
    
    setSelectedPlan(planName);
    // Here you would integrate with Stripe or payment processor
    console.log("Subscribe to:", { planName, selectedTechnology, selectedPageCount });
    alert(`Subscribing to ${planName} plan with ${selectedTechnology} for ${selectedPageCount} page(s)`);
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Subscriptions</h1>
        <p className="text-muted-foreground">
          Choose your technology stack and page count, then select a plan
        </p>
      </div>

      {/* Technology Selection */}
      <TechnologySelector 
        selectedTechnology={selectedTechnology}
        onTechnologyChange={setSelectedTechnology}
      />

      {/* Page Count Selection */}
      <PageCountSelector 
        selectedPageCount={selectedPageCount}
        onPageCountChange={setSelectedPageCount}
      />

      {/* Pricing Plans */}
      <div className="grid md:grid-cols-3 gap-6">
        {plans.map((plan, index) => (
          <Card key={plan.name} className={`relative ${plan.popular ? 'border-primary shadow-lg' : ''}`}>
            {plan.popular && (
              <Badge className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-primary">
                Most Popular
              </Badge>
            )}
            <CardHeader className="text-center pb-4">
              <div className="flex justify-center mb-2">
                {plan.icon}
              </div>
              <CardTitle className="text-xl">{plan.name}</CardTitle>
              <CardDescription>{plan.description}</CardDescription>
              <div className="text-3xl font-bold">
                ${plan.price}
                <span className="text-sm font-normal text-muted-foreground">/project</span>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 mb-6">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-500" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button 
                className="w-full" 
                variant={plan.popular ? "default" : "outline"}
                onClick={() => handleSubscribe(plan.name)}
              >
                Get Started
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Selected Configuration Summary */}
      {selectedTechnology && (
        <Card>
          <CardHeader>
            <CardTitle>Your Configuration</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <p className="font-medium">Selected Technology:</p>
                <p className="text-muted-foreground">{selectedTechnology}</p>
              </div>
              <div>
                <p className="font-medium">Page Count:</p>
                <p className="text-muted-foreground">{selectedPageCount} page(s)</p>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
