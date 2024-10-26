import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import authService from "./appwrite/auth";
import { login, logout } from "./store/authSlice";
import { Footer, Header, AuthLayout } from "./components";
import Login from "./pages/LoginPage";
import Signup from "./pages/SignupPage";
import AddPost from "./pages/AddPost";
import EditPost from "./pages/EditPost";
import Post from "./pages/Post";
import AllPosts from "./pages/AllPosts";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService
      .getCurrentUser()
      .then((user) => {
        if (user) {
          dispatch(login({ userData: user }));
        } else {
          dispatch(logout());
        }
      })
      .finally(() => {
        setLoading(false);
      });
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen flex flex-wrap content-between bg-gray-400">
      <div className="w-full block">
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/login"
              element={
                <AuthLayout authentication={false}>
                  <Login />
                </AuthLayout>
              }
            />
            <Route
              path="/signup"
              element={
                <AuthLayout authentication={false}>
                  <Signup />
                </AuthLayout>
              }
            />
            <Route
              path="/add-post"
              element={
                <AuthLayout authentication={true}>
                  <AddPost />
                </AuthLayout>
              }
            />
            <Route
              path="/all-posts"
              element={
                <AuthLayout authentication={true}>
                  <AllPosts />
                </AuthLayout>
              }
            />
            <Route
              path="/edit-post/:slug"
              element={
                <AuthLayout authentication={true}>
                  <EditPost />
                </AuthLayout>
              }
            />
            <Route
              path="/post/:slug"
              element={
                <AuthLayout authentication={true}>
                  <Post />
                </AuthLayout>
              }
            />
          </Routes>
          <Footer />
        </Router>
      </div>
    </div>
  );
}

export default App;
