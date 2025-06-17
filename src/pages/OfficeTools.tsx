
export default function OfficeTools() {
  return (
    <div className="space-y-8 animate-fade-in">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Office Tools</h1>
          <p className="text-muted-foreground">
            Productivity tools and office suite integration
          </p>
        </div>
      </div>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <div className="rounded-lg border bg-card p-6">
          <h3 className="text-lg font-semibold mb-2">Document Editor</h3>
          <p className="text-muted-foreground mb-4">Create and edit documents collaboratively</p>
        </div>
        
        <div className="rounded-lg border bg-card p-6">
          <h3 className="text-lg font-semibold mb-2">Spreadsheet</h3>
          <p className="text-muted-foreground mb-4">Advanced spreadsheet functionality</p>
        </div>
        
        <div className="rounded-lg border bg-card p-6">
          <h3 className="text-lg font-semibold mb-2">Presentation</h3>
          <p className="text-muted-foreground mb-4">Create stunning presentations</p>
        </div>
        
        <div className="rounded-lg border bg-card p-6">
          <h3 className="text-lg font-semibold mb-2">Calendar</h3>
          <p className="text-muted-foreground mb-4">Schedule and manage appointments</p>
        </div>
        
        <div className="rounded-lg border bg-card p-6">
          <h3 className="text-lg font-semibold mb-2">Email</h3>
          <p className="text-muted-foreground mb-4">Integrated email management</p>
        </div>
        
        <div className="rounded-lg border bg-card p-6">
          <h3 className="text-lg font-semibold mb-2">Notes</h3>
          <p className="text-muted-foreground mb-4">Quick notes and reminders</p>
        </div>
      </div>
    </div>
  );
}
