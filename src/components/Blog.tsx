import { Link } from 'react-router-dom';
import { useBlog } from '@/contexts/BlogContext';

const Blog = () => {
  const { blogPosts } = useBlog();

  return (
    <div>
      {blogPosts.map(post => (
        <Link key={post.id} to={`/blog/${post.id}`}>
          {/* Your blog post preview content */}
        </Link>
      ))}
    </div>
  );
}; 