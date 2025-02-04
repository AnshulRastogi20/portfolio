import { useParams, Navigate } from 'react-router-dom';
import { useBlog } from '@/contexts/BlogContext';
import BlogDetail from '@/components/BlogDetail';

const BlogDetailWrapper = () => {
  const { postId } = useParams();
  const { blogPosts } = useBlog();

  const post = blogPosts.find(p => p.id === postId);

  if (!post) {
    return <Navigate to="/404" replace />;
  }

  return <BlogDetail post={post} />;
};

export default BlogDetailWrapper;