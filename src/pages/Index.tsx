import React from 'react';
import { TaskManager } from '@/components/tasks/TaskManager';

const Index = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8 fade-in">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
            Task Management
          </h1>
          <p className="text-xl text-muted-foreground">
            Organize your tasks efficiently with our modern task manager
          </p>
        </div>
        
        <div className="slide-up">
          <TaskManager />
        </div>
      </div>
    </div>
  );
};

export default Index;
