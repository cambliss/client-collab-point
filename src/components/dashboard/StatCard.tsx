
import { ReactNode } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { ArrowDown, ArrowUp } from "lucide-react";
import { cn } from "@/lib/utils";

const statCardVariants = cva(
  "rounded-lg border bg-card p-4 shadow-subtle transition-all hover:shadow-elevated",
  {
    variants: {
      variant: {
        default: "border-border",
        outline: "border-2",
        ghost: "border-transparent bg-transparent shadow-none hover:bg-muted/50 hover:shadow-none",
        glass: "glass-card backdrop-blur-sm bg-white/80",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface StatCardProps extends VariantProps<typeof statCardVariants> {
  title: string;
  value: string | number;
  icon?: ReactNode;
  change?: number;
  trend?: "up" | "down" | "neutral";
  subtitle?: string;
  className?: string;
  valueClassName?: string;
}

export function StatCard({
  title,
  value,
  icon,
  change,
  trend,
  subtitle,
  variant,
  className,
  valueClassName,
}: StatCardProps) {
  return (
    <div className={cn(statCardVariants({ variant }), className)}>
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm font-medium text-muted-foreground">{title}</p>
          <h3 className={cn("mt-2 text-2xl font-bold", valueClassName)}>
            {value}
          </h3>
          {subtitle && (
            <p className="mt-1 text-xs text-muted-foreground">{subtitle}</p>
          )}
          {typeof change === "number" && (
            <div
              className={cn(
                "mt-2 flex items-center text-xs font-medium",
                trend === "up"
                  ? "text-emerald-500"
                  : trend === "down"
                  ? "text-destructive"
                  : "text-muted-foreground"
              )}
            >
              {trend === "up" ? (
                <ArrowUp className="mr-1 h-3 w-3" />
              ) : trend === "down" ? (
                <ArrowDown className="mr-1 h-3 w-3" />
              ) : null}
              {change > 0 && "+"}
              {change}%{" "}
              <span className="ml-1 text-muted-foreground">vs last month</span>
            </div>
          )}
        </div>
        {icon && (
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-primary">
            {icon}
          </div>
        )}
      </div>
    </div>
  );
}
