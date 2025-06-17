
export default function AddOns() {
  return (
    <div className="space-y-8 animate-fade-in">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Add-ons</h1>
          <p className="text-muted-foreground">
            Enhance your subscription with additional features and services
          </p>
        </div>
      </div>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <div className="rounded-lg border bg-card p-6">
          <h3 className="text-lg font-semibold mb-2">Premium Support</h3>
          <p className="text-muted-foreground mb-4">24/7 priority support with dedicated account manager</p>
          <div className="text-2xl font-bold mb-4">$99/month</div>
        </div>
        
        <div className="rounded-lg border bg-card p-6">
          <h3 className="text-lg font-semibold mb-2">Advanced Analytics</h3>
          <p className="text-muted-foreground mb-4">Detailed insights and reporting dashboard</p>
          <div className="text-2xl font-bold mb-4">$49/month</div>
        </div>
        
        <div className="rounded-lg border bg-card p-6">
          <h3 className="text-lg font-semibold mb-2">API Access</h3>
          <p className="text-muted-foreground mb-4">Full API access for custom integrations</p>
          <div className="text-2xl font-bold mb-4">$29/month</div>
        </div>
      </div>
    </div>
  );
}
