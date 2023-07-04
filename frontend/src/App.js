import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PostList from "./components/PostList";
import PostDetail from "./components/PostDetail";
import PostCreate from "./components/PostCreate";
import PostEdit from "./components/PostEdit";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/post" element={<PostList />} />
        <Route path="/post/:postId" element={<PostDetail />} />
        <Route path="/write" element={<PostCreate />} />
        <Route path="/edit/:postId" element={<PostEdit />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
