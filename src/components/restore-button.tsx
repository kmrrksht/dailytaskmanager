"use client";

import { useState, useTransition } from "react";
import { RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { restoreTask } from "@/lib/actions";

export function RestoreButton({ taskId }: { taskId: string }) {
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | null>(null);

  function handleClick() {
    setError(null);
    startTransition(async () => {
      const result = await restoreTask(taskId);
      if (!result.ok) {
        setError(result.error ?? "Failed to restore task.");
      }
    });
  }

  return (
    <div className="flex flex-col items-end gap-1">
      <Button
        variant="outline"
        size="sm"
        onClick={handleClick}
        disabled={isPending}
      >
        <RotateCcw />
        {isPending ? "Restoring…" : "Restore"}
      </Button>
      {error && <span className="text-xs text-destructive">{error}</span>}
    </div>
  );
}
