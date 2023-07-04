import "./../App.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function PostList() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("/post")
      .then((response) => response.json())
      .then((data) => setPosts(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="App-header">
      <h1>게시판 글 리스트</h1>
      {posts.map((post) => (
        <div key={post.id} className="card">
          <Link to={`/post/${post.id}`}>
            <div className="title">{post.title}</div>
          </Link>
          <p className="writer">작성자: {post.writer}</p>
        </div>
      ))}
      <Link className="button" to="/write">글 작성</Link>
      
    </div>
  );
}

export default PostList;