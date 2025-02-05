import { useParams } from 'react-router-dom';
import { useBlog } from '@/contexts/BlogContext';
import BlogDetail from './BlogDetail';

const BlogDetailWrapper = () => {
  const { id } = useParams();
  const { blogPosts } = useBlog();

  if (!id) {
    return <div>Post ID not found</div>;
  }

  const post = blogPosts.find(p => p.id === id);

  if (!post) {
    return <div>Post not found</div>;
  }

  return <BlogDetail postId={id} />;
};

export default BlogDetailWrapper;