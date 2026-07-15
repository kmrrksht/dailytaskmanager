import type { Task } from "@/lib/types";
import { formatDueDate, formatCompletedOn } from "@/lib/date";
import { PriorityBadge } from "./priority-badge";
import { RestoreButton } from "./restore-button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export function CompletedTable({ tasks }: { tasks: Task[] }) {
  return (
    <Table>
      <TableHeader>
        <TableRow className="hover:bg-transparent">
          <TableHead>Task Name</TableHead>
          <TableHead className="w-[120px]">Priority</TableHead>
          <TableHead className="w-[160px]">Due On</TableHead>
          <TableHead className="w-[160px]">Completed On</TableHead>
          <TableHead className="w-[140px]" />
        </TableRow>
      </TableHeader>
      <TableBody>
        {tasks.map((task) => (
          <TableRow key={task.id}>
            <TableCell className="text-sm font-medium text-foreground">
              {task.task_name}
            </TableCell>
            <TableCell>
              <PriorityBadge priority={task.priority} />
            </TableCell>
            <TableCell className="text-sm text-muted-foreground">
              {formatDueDate(task.due_on)}
            </TableCell>
            <TableCell className="text-sm text-muted-foreground">
              {task.completed_at ? formatCompletedOn(task.completed_at) : "—"}
            </TableCell>
            <TableCell className="text-right">
              <RestoreButton taskId={task.id} />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
