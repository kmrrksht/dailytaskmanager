import { getCompletedTasks } from "@/lib/tasks";
import { CompletedTable } from "@/components/completed-table";
import { EmptyState } from "@/components/empty-state";
import { Card, CardContent } from "@/components/ui/card";

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

      {tasks.length === 0 ? (
        <EmptyState message="No completed tasks in the last 30 days." />
      ) : (
        <Card className="gap-0 overflow-hidden p-0">
          <CardContent className="p-0">
            <CompletedTable tasks={tasks} />
          </CardContent>
        </Card>
      )}
    </div>
  );
}
