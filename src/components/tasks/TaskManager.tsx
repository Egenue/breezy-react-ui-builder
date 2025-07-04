import React, { useMemo } from 'react';
import { Task, TaskFilter as TaskFilterType } from '@/types/Task';
import { TaskForm } from './TaskForm';
import { TaskItem } from './TaskItem';
import { TaskFilter } from './TaskFilter';
import { useLocalStorage } from '@/hooks/useLocalStorage';

export const TaskManager: React.FC = () => {
  const [tasks, setTasks] = useLocalStorage<Task[]>('tasks', []);
  const [filter, setFilter] = useLocalStorage<TaskFilterType>('taskFilter', 'all');

  const addTask = (title: string, description?: string) => {
    const newTask: Task = {
      id: crypto.randomUUID(),
      title,
      description,
      completed: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    setTasks(prev => [newTask, ...prev]);
  };

  const toggleTask = (id: string) => {
    setTasks(prev => prev.map(task => 
      task.id === id 
        ? { ...task, completed: !task.completed, updatedAt: new Date() }
        : task
    ));
  };

  const deleteTask = (id: string) => {
    setTasks(prev => prev.filter(task => task.id !== id));
  };

  const filteredTasks = useMemo(() => {
    switch (filter) {
      case 'active':
        return tasks.filter(task => !task.completed);
      case 'completed':
        return tasks.filter(task => task.completed);
      default:
        return tasks;
    }
  }, [tasks, filter]);

  const taskCounts = useMemo(() => ({
    all: tasks.length,
    active: tasks.filter(task => !task.completed).length,
    completed: tasks.filter(task => task.completed).length,
  }), [tasks]);

  return (
    <div className="space-y-6">
      <TaskForm onSubmit={addTask} />
      
      <TaskFilter 
        currentFilter={filter}
        onFilterChange={setFilter}
        taskCounts={taskCounts}
      />

      <div className="space-y-3">
        {filteredTasks.length === 0 ? (
          <div className="text-center py-12">
            <div className="text-muted-foreground">
              {filter === 'completed' && taskCounts.completed === 0 && (
                <p>No completed tasks yet. Keep working!</p>
              )}
              {filter === 'active' && taskCounts.active === 0 && taskCounts.all > 0 && (
                <p>All tasks completed! 🎉</p>
              )}
              {filter === 'all' && taskCounts.all === 0 && (
                <p>No tasks yet. Add your first task above!</p>
              )}
              {filter === 'active' && taskCounts.all === 0 && (
                <p>No tasks yet. Add your first task above!</p>
              )}
            </div>
          </div>
        ) : (
          filteredTasks.map(task => (
            <div key={task.id} className="fade-in">
              <TaskItem
                task={task}
                onToggle={toggleTask}
                onDelete={deleteTask}
              />
            </div>
          ))
        )}
      </div>
    </div>
  );
};