import { BlogCard } from './BlogCard';

export function BlogGrid({ posts = [], className = "" }) {
  return (
    <div className={`grid sm:grid-cols-1 lg:grid-cols-2 gap-4 w-full ${className}`}>
      {posts.map((post) => (
        <BlogCard 
          key={post.id}
          image={post.image}
          category={post.category}
          title={post.title}
          description={post.description}
          author={post.author}
          date={post.date}
        />
      ))}
    </div>
  );
}
