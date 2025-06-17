
export default function CRM() {
  return (
    <div className="space-y-8 animate-fade-in">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">CRM</h1>
          <p className="text-muted-foreground">
            Customer Relationship Management system
          </p>
        </div>
      </div>
      
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-lg border bg-card p-6">
          <h3 className="text-lg font-semibold mb-4">Leads</h3>
          <div className="space-y-2">
            <div className="flex items-center justify-between p-3 hover:bg-muted rounded">
              <div>
                <div className="font-medium">John Smith</div>
                <div className="text-sm text-muted-foreground">john@example.com</div>
              </div>
              <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">Hot</span>
            </div>
            <div className="flex items-center justify-between p-3 hover:bg-muted rounded">
              <div>
                <div className="font-medium">Sarah Johnson</div>
                <div className="text-sm text-muted-foreground">sarah@example.com</div>
              </div>
              <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs">Warm</span>
            </div>
          </div>
        </div>
        
        <div className="rounded-lg border bg-card p-6">
          <h3 className="text-lg font-semibold mb-4">Pipeline</h3>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm">Prospecting</span>
                <span className="text-sm">$25,000</span>
              </div>
              <div className="w-full bg-muted rounded-full h-2">
                <div className="bg-blue-600 h-2 rounded-full" style={{ width: '30%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm">Negotiation</span>
                <span className="text-sm">$45,000</span>
              </div>
              <div className="w-full bg-muted rounded-full h-2">
                <div className="bg-orange-600 h-2 rounded-full" style={{ width: '60%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm">Closing</span>
                <span className="text-sm">$15,000</span>
              </div>
              <div className="w-full bg-muted rounded-full h-2">
                <div className="bg-green-600 h-2 rounded-full" style={{ width: '90%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
