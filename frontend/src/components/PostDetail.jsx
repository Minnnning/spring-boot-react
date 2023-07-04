import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './../App.css'; // CSS 파일 임포트

function PostDetail() {
  const { postId } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);

  const handleHome = () => {
    navigate("/post");
  };

  const handleEdit = () => {
    // 수정 페이지로 이동
    navigate(`/edit/${postId}`);
  };

  const handleDelete = () => {
    fetch(`/post/${postId}`, {
      method: 'DELETE',
    })
      .then(response => {
        if (response.ok) {
          // 삭제 후 글 리스트 페이지로 이동
          navigate('/post');
        } else {
          // 실패 시 에러 처리
          console.error('글 삭제 실패');
        }
      })
      .catch(error => {
        console.error('글 삭제 중 오류 발생:', error);
      });
  };

  useEffect(() => {
    fetch(`/post/${postId}`)
      .then(response => response.json())
      .then(data => setPost(data))
      .catch(error => console.error(error));
  }, [postId]);

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <div className="App-header">
      <h1 >게시글 상세페이지</h1>
      <div className="card">
        <h2 className="title">{post.title}</h2>
        <p >{post.content}</p>
        <p className="writer">작성자: {post.writer}</p>
      </div>
      <div className='button-container'>
        <p className='button' onClick={handleEdit}>수정</p>
        <p className='button' onClick={handleDelete}>삭제</p>
        <p className='button' onClick={handleHome}>돌아가기</p>
      </div>
    </div>
  );
}

export default PostDetail;
