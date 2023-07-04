import React, { useState, useEffect } from 'react';
import {useNavigate, useParams } from 'react-router-dom';
import './edit.css';

const PostEdit = () => {
  const { postId } = useParams();
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [writer, setWriter] = useState('');
  const [originalPost, setOriginalPost] = useState({});

  useEffect(() => {
    // 기존 글 데이터를 불러오는 비동기 함수 호출
    fetch(`/post/${postId}`)
      .then(response => response.json())
      .then(data => {
        setOriginalPost(data);
        setTitle(data.title);
        setContent(data.content);
        setWriter(data.writer);
      })
      .catch(error => {
        console.error('글 데이터 불러오기 실패:', error);
      });
  }, [postId]);

  const handleTitleChange = e => {
    setTitle(e.target.value);
  };

  const handleContentChange = e => {
    setContent(e.target.value);
  };

  const handleWriterChange = e => {
    setWriter(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    // 수정된 데이터를 서버에 보내는 비동기 함수 호출
    fetch(`/post/${postId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title,
        content,
        writer,
      }),
    })
      .then(response => {
        if (response.ok) {
          // 수정 완료 후 글 상세 페이지로 이동
          navigate(`/post/${postId}`);
        } else {
          // 실패 시 에러 처리
          console.error('글 수정 실패');
        }
      })
      .catch(error => {
        console.error('글 수정 중 오류 발생:', error);
      });
  };

  const handleCancel = () => {
    // 수정 취소 후 글 상세 페이지로 이동
    navigate(`/post/${postId}`);
  };

  return (
    <div className="App-header">
      <h2>Edit Post</h2>
      <form onSubmit={handleSubmit} className="card">
        <div className="form-group">
          <label>Title</label>
          <input
            type="text"
            value={title}
            onChange={handleTitleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Content</label>
          <textarea
            value={content}
            onChange={handleContentChange}
            required
          ></textarea>
        </div>
        <div className="form-group">
          <label>Writer</label>
          <input
            type="text"
            value={writer}
            onChange={handleWriterChange}
            required
          />
        </div>
        <div>
        <div className="button-container">
          <button type="submit">수정 완료</button>
          <button type="button" onClick={handleCancel}>
            돌아가기
          </button>
        </div>
        </div>
      </form>
    </div>
  );
};

export default PostEdit;
