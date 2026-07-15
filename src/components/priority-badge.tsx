import { cn } from "@/lib/utils";
import type { Priority } from "@/lib/types";

const PRIORITY_CLASSES: Record<Priority, string> = {
  Low: "bg-slate-50 text-slate-600 ring-slate-500/15 dark:bg-slate-400/10 dark:text-slate-300",
  Medium: "bg-blue-50 text-blue-700 ring-blue-600/20 dark:bg-blue-400/10 dark:text-blue-300",
  High: "bg-red-50 text-red-700 ring-red-600/20 dark:bg-red-400/10 dark:text-red-300",
};

const PRIORITY_DOT: Record<Priority, string> = {
  Low: "bg-slate-400",
  Medium: "bg-blue-500",
  High: "bg-red-500",
};

export function PriorityBadge({ priority }: { priority: Priority }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-2 py-0.5 text-xs font-medium ring-1 ring-inset",
        PRIORITY_CLASSES[priority]
      )}
    >
      <span className={cn("size-1.5 rounded-full", PRIORITY_DOT[priority])} />
      {priority}
    </span>
  );
}
