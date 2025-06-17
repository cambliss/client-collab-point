
export default function FileTransfer() {
  return (
    <div className="space-y-8 animate-fade-in">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">File Transfer</h1>
          <p className="text-muted-foreground">
            Secure file sharing and document management
          </p>
        </div>
      </div>
      
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-lg border bg-card p-6">
          <h3 className="text-lg font-semibold mb-4">Upload Files</h3>
          <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-8 text-center">
            <p className="text-muted-foreground">Drag and drop files here or click to browse</p>
          </div>
        </div>
        
        <div className="rounded-lg border bg-card p-6">
          <h3 className="text-lg font-semibold mb-4">Recent Files</h3>
          <div className="space-y-2">
            <div className="flex items-center justify-between p-2 hover:bg-muted rounded">
              <span>project-brief.pdf</span>
              <span className="text-sm text-muted-foreground">2 hours ago</span>
            </div>
            <div className="flex items-center justify-between p-2 hover:bg-muted rounded">
              <span>wireframes.fig</span>
              <span className="text-sm text-muted-foreground">1 day ago</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
