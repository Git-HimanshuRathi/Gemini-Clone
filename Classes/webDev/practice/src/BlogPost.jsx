// BlogPost.jsx
import { useParams } from "react-router-dom";

function BlogPost() {
  const { postId } = useParams();

  // Fetch post by ID from dummy data
  return <div>Display blog post for ID: {postId}</div>;
}

export default BlogPost;