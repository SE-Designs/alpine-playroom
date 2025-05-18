export interface Post {
  id: number;
  title: string;
  description: string;
  likes_count: number;
  created_at: string;
  author_name: string;
}

export interface BlogApp {
  posts: Post[];
  searchQuery: string;
  newPost: {
    title: string;
    description: string;
    author_name: string;
  };
  errors: {
    title?: string;
    description?: string;
    author_name?: string;
  };

  init(): void;
  filteredPosts: Post[];
  validateForm(): boolean;
  addPost(): void;
  likePost(post: Post): void;
  deletePost(id: number): void;
  formatDate(dateStr: string): string;
}
