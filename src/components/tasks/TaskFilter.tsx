import React from 'react';
import { Button } from '@/components/ui/button';
import { TaskFilter as TaskFilterType } from '@/types/Task';

interface TaskFilterProps {
  currentFilter: TaskFilterType;
  onFilterChange: (filter: TaskFilterType) => void;
  taskCounts: {
    all: number;
    active: number;
    completed: number;
  };
}

export const TaskFilter: React.FC<TaskFilterProps> = ({ 
  currentFilter, 
  onFilterChange, 
  taskCounts 
}) => {
  const filters: { key: TaskFilterType; label: string; count: number }[] = [
    { key: 'all', label: 'All Tasks', count: taskCounts.all },
    { key: 'active', label: 'Active', count: taskCounts.active },
    { key: 'completed', label: 'Completed', count: taskCounts.completed },
  ];

  return (
    <div className="flex flex-wrap gap-2 p-4 bg-muted/50 rounded-lg">
      {filters.map(({ key, label, count }) => (
        <Button
          key={key}
          variant={currentFilter === key ? 'default' : 'outline'}
          size="sm"
          onClick={() => onFilterChange(key)}
          className="flex items-center gap-2"
        >
          <span>{label}</span>
          <span className={`text-xs px-2 py-0.5 rounded-full ${
            currentFilter === key 
              ? 'bg-primary-foreground/20 text-primary-foreground' 
              : 'bg-muted text-muted-foreground'
          }`}>
            {count}
          </span>
        </Button>
      ))}
    </div>
  );
};