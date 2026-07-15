import type { TaskGroup as TaskGroupType } from "@/lib/date";
import { MobileTaskCard } from "./mobile-task-card";

export function MobileTaskGroup({ group }: { group: TaskGroupType }) {
  return (
    <div>
      <div className="bg-muted/40 px-4 py-2 text-xs font-semibold tracking-wide text-muted-foreground uppercase">
        {group.label}
        <span className="ml-2 font-normal normal-case text-muted-foreground/70">
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
