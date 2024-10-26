import { Container, PostCard } from "../components";
import { useEffect, useState } from "react";
import appwriteService from "../appwrite/config";

function AllPosts() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    appwriteService.getPosts().then((post) => setPosts(post.documents));
  }, []);
  return (
    <div className="w-full py-8">
      <Container>
        <div className="flex flex-wrap">
          {posts.map((post) => (
            <PostCard post={post} key={post.$id} />
          ))}
        </div>
      </Container>
    </div>
  );
}

export default AllPosts;
