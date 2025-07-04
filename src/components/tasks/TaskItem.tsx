import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Task } from '@/types/Task';
import { Check, X } from 'lucide-react';
import { cn } from '@/lib/utils';

interface TaskItemProps {
  task: Task;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

export const TaskItem: React.FC<TaskItemProps> = ({ task, onToggle, onDelete }) => {
  return (
    <Card className={cn(
      "hover-lift transition-all duration-200",
      task.completed && "opacity-75 bg-muted/50"
    )}>
      <CardContent className="p-4">
        <div className="flex items-start gap-3">
          <Checkbox
            checked={task.completed}
            onCheckedChange={() => onToggle(task.id)}
            className="mt-1"
          />
          
          <div className="flex-1 min-w-0">
            <h3 className={cn(
              "font-medium transition-all duration-200",
              task.completed && "line-through text-muted-foreground"
            )}>
              {task.title}
            </h3>
            
            {task.description && (
              <p className={cn(
                "text-sm mt-1 transition-all duration-200",
                task.completed ? "text-muted-foreground" : "text-muted-foreground"
              )}>
                {task.description}
              </p>
            )}
            
            <div className="flex items-center gap-2 mt-2 text-xs text-muted-foreground">
              <span>Created {task.createdAt.toLocaleDateString()}</span>
              {task.completed && (
                <>
                  <span>•</span>
                  <span className="flex items-center gap-1 text-success">
                    <Check className="h-3 w-3" />
                    Completed
                  </span>
                </>
              )}
            </div>
          </div>

          <Button
            variant="ghost"
            size="icon"
            onClick={() => onDelete(task.id)}
            className="text-muted-foreground hover:text-destructive transition-colors shrink-0"
          >
            <X className="h-4 w-4" />
            <span className="sr-only">Delete task</span>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};