import type { BlogApp, Post } from "./interface";

import { formatDate } from "./date";

export default function blogApp(): BlogApp {
  return {
    posts: [],
    searchQuery: "",
    newPost: {
      title: "",
      description: "",
      author_name: "",
    },
    errors: {},

    init() {
      this.posts = [
        {
          id: 1,
          title: "Alpine playroom",
          description: "Some description will be here...",
          likes_count: 0,
          created_at: formatDate(new Date()),
          author_name: "mixturegg",
        },
      ];

      console.log("created_at =", formatDate(new Date()));
    },

    get filteredPosts() {
      const query = this.searchQuery.toLowerCase();
      return this.posts.filter((post) =>
        post.title.toLowerCase().includes(query)
      );
    },

    validateForm() {
      this.errors = {};
      if (!this.newPost.title || this.newPost.title.length < 5) {
        this.errors.title = "Название должно содержать минимум 5 символов";
      }
      if (!this.newPost.description) {
        this.errors.description = "Описание обязательно";
      }
      if (!this.newPost.author_name) {
        this.errors.author_name = "Автор обязателен";
      }
      return Object.keys(this.errors).length === 0;
    },

    addPost() {
      if (!this.validateForm()) return;

      this.posts.push({
        id: Date.now(),
        title: this.newPost.title,
        description: this.newPost.description,
        author_name: this.newPost.author_name,
        likes_count: 0,
        created_at: formatDate(new Date()),
      });

      this.newPost = { title: "", description: "", author_name: "" };
    },

    likePost(post: Post) {
      post.likes_count++;
    },

    deletePost(id: number) {
      this.posts = this.posts.filter((post) => post.id !== id);
    },

    formatDate(dateStr: string) {
      const date = new Date(dateStr);
      return (
        date.toLocaleDateString() + " " + date.toLocaleTimeString().slice(0, 5)
      );
    },
  };
}
