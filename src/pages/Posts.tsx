import React from 'react';
import { PostList } from '@/components/posts/PostList';

const Posts = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8 fade-in">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
            Community Posts
          </h1>
          <p className="text-xl text-muted-foreground">
            Explore posts from our community powered by JSONPlaceholder API
          </p>
        </div>
        
        <div className="slide-up">
          <PostList />
        </div>
      </div>
    </div>
  );
};

export default Posts;