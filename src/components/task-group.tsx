import { cn } from "@/lib/utils";
import { TableCell, TableRow } from "@/components/ui/table";
import { isDueToday, type TaskGroup as TaskGroupType } from "@/lib/date";
import { TaskRow } from "./task-row";

export function TaskGroup({ group }: { group: TaskGroupType }) {
  const isToday = isDueToday(group.dueOn);

  return (
    <>
      <TableRow className="border-none hover:bg-transparent">
        <TableCell
          colSpan={5}
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
        </TableCell>
      </TableRow>
      {group.tasks.map((task) => (
        <TaskRow key={task.id} task={task} />
      ))}
    </>
  );
}
