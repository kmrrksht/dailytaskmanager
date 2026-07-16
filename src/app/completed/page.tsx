import { getCompletedTasks } from "@/lib/tasks";
import { CompletedTasksSection } from "@/components/completed-tasks-section";

export default async function CompletedPage() {
  const tasks = await getCompletedTasks();

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight text-foreground">
          Completed Tasks
        </h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Completed tasks are automatically removed after 30 days.
        </p>
      </div>

      <CompletedTasksSection tasks={tasks} />
    </div>
  );
}
