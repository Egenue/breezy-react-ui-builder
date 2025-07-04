import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Post, User } from '@/types/Post';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';

interface PostCardProps {
  post: Post;
  author?: User;
}

export const PostCard: React.FC<PostCardProps> = ({ post, author }) => {
  return (
    <Card className="hover-lift">
      <CardHeader>
        <div className="flex items-start gap-3">
          <Avatar className="h-10 w-10">
            <AvatarFallback className="bg-primary text-primary-foreground">
              {author?.name?.charAt(0) || 'U'}
            </AvatarFallback>
          </Avatar>
          <div className="flex-1 min-w-0">
            <CardTitle className="text-lg line-clamp-2 mb-1">
              {post.title}
            </CardTitle>
            {author && (
              <p className="text-sm text-muted-foreground">
                by {author.name} (@{author.username})
              </p>
            )}
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground leading-relaxed">
          {post.body}
        </p>
        <div className="mt-4 flex items-center gap-2 text-xs text-muted-foreground">
          <span>Post #{post.id}</span>
          <span>•</span>
          <span>User ID: {post.userId}</span>
        </div>
      </CardContent>
    </Card>
  );
};