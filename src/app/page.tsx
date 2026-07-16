import { getIncompleteTasks } from "@/lib/tasks";
import { AddTaskDialog } from "@/components/add-task-dialog";
import { DashboardTasks } from "@/components/dashboard-tasks";

export default async function DashboardPage() {
  const tasks = await getIncompleteTasks();

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight text-foreground">
            Dashboard
          </h1>
          <p className="mt-1 text-sm text-muted-foreground">
            {tasks.length === 0
              ? "Nothing on your plate right now."
              : `${tasks.length} open ${tasks.length === 1 ? "task" : "tasks"}.`}
          </p>
        </div>
        <AddTaskDialog />
      </div>

      <DashboardTasks tasks={tasks} />
    </div>
  );
}
