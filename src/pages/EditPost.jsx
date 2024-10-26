import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import appwriteService from "../appwrite/config";
import { Container, PostForm } from "../components";

function EditPost() {
  const navigate = useNavigate();
  const [post, setPost] = useState(null);

  const { slug } = useParams();

  useEffect(() => {
    if (slug) {
      appwriteService.getPost((post) => {
        if (post) {
          setPost(post);
        } else {
          navigate("/");
        }
      });
    }
  }, [navigate, slug]);
  return post ? (
    <div className="py-8">
      <Container>
        <PostForm post={post} />
      </Container>
    </div>
  ) : null;
}

export default EditPost;
