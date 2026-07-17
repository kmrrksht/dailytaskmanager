import { cn } from "@/lib/utils";
import { isDueToday, type TaskGroup as TaskGroupType } from "@/lib/date";
import { MobileTaskCard } from "./mobile-task-card";

export function MobileTaskGroup({ group }: { group: TaskGroupType }) {
  const isToday = isDueToday(group.dueOn);

  return (
    <div>
      <div
        className={cn(
          "px-4 py-2 text-xs font-semibold tracking-wide uppercase",
          isToday
            ? "bg-blue-50 text-blue-700 dark:bg-blue-400/10 dark:text-blue-300"
            : "bg-muted/40 text-muted-foreground"
        )}
      >
        {group.label}
        <span
          className={cn(
            "ml-2 font-normal normal-case",
            isToday ? "text-blue-700/70 dark:text-blue-300/70" : "text-muted-foreground/70"
          )}
        >
          {group.tasks.length} {group.tasks.length === 1 ? "task" : "tasks"}
        </span>
      </div>
      <div className="divide-y divide-border">
        {group.tasks.map((task) => (
          <MobileTaskCard key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
}
