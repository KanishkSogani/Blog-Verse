import { useState, useEffect } from "react";
import appwriteService from "../appwrite/config";
import { Container, PostCard } from "../components";
import { useNavigate } from "react-router-dom";
import { set } from "react-hook-form";

function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    appwriteService.getPosts().then((posts) => {
      if (posts) {
        setPosts(posts.documents);
      } else {
        setPosts([]);
      }
    });
    console.log(posts);
  }, []);

  if (!posts) {
    return (
      <div className="w-full py-8">
        <Container>
          <h1 className="text-3xl font-bold text-center">No posts available</h1>
        </Container>
      </div>
    );
  } else {
    return (
      <div className="w-full py-8">
        <Container>
          <div className="flex flex-wrap">
            {posts.map((post) => (
              <div key={post.$id} className="p-2 w-1/4">
                <PostCard {...post} />
              </div>
            ))}
          </div>
        </Container>
      </div>
    );
  }
}

export default Home;
