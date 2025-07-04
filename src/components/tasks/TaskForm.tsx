import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Plus } from 'lucide-react';

interface TaskFormProps {
  onSubmit: (title: string, description?: string) => void;
}

export const TaskForm: React.FC<TaskFormProps> = ({ onSubmit }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [isExpanded, setIsExpanded] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim()) {
      onSubmit(title.trim(), description.trim() || undefined);
      setTitle('');
      setDescription('');
      setIsExpanded(false);
    }
  };

  return (
    <Card className="hover-lift">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Plus className="h-5 w-5 text-primary" />
          Add New Task
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Input
              type="text"
              placeholder="Task title..."
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              onFocus={() => setIsExpanded(true)}
              className="transition-all duration-200"
              required
            />
            
            {isExpanded && (
              <div className="fade-in">
                <Textarea
                  placeholder="Task description (optional)..."
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="min-h-[80px] resize-none"
                />
              </div>
            )}
          </div>

          <div className="flex gap-2 justify-end">
            {isExpanded && (
              <Button 
                type="button" 
                variant="outline" 
                onClick={() => {
                  setIsExpanded(false);
                  setDescription('');
                }}
              >
                Cancel
              </Button>
            )}
            <Button type="submit" variant="gradient" disabled={!title.trim()}>
              <Plus className="h-4 w-4" />
              Add Task
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};