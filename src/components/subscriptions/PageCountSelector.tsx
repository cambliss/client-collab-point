
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Minus, Plus } from "lucide-react";

interface PageCountSelectorProps {
  selectedPageCount: number;
  onPageCountChange: (count: number) => void;
}

export function PageCountSelector({ selectedPageCount, onPageCountChange }: PageCountSelectorProps) {
  const incrementCount = () => {
    onPageCountChange(selectedPageCount + 1);
  };

  const decrementCount = () => {
    if (selectedPageCount > 1) {
      onPageCountChange(selectedPageCount - 1);
    }
  };

  const presetCounts = [1, 5, 10, 15, 20];

  return (
    <Card>
      <CardHeader>
        <CardTitle>How Many Pages Do You Need?</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {/* Counter */}
          <div className="flex items-center justify-center gap-4">
            <Button 
              variant="outline" 
              size="icon" 
              onClick={decrementCount}
              disabled={selectedPageCount <= 1}
            >
              <Minus className="h-4 w-4" />
            </Button>
            <div className="text-2xl font-bold min-w-[80px] text-center">
              {selectedPageCount}
            </div>
            <Button variant="outline" size="icon" onClick={incrementCount}>
              <Plus className="h-4 w-4" />
            </Button>
          </div>

          {/* Preset Options */}
          <div className="flex flex-wrap gap-2 justify-center">
            {presetCounts.map((count) => (
              <Button
                key={count}
                variant={selectedPageCount === count ? "default" : "outline"}
                size="sm"
                onClick={() => onPageCountChange(count)}
              >
                {count} page{count !== 1 ? 's' : ''}
              </Button>
            ))}
          </div>

          <div className="text-center text-sm text-muted-foreground">
            Each additional page may affect pricing based on your selected plan
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
