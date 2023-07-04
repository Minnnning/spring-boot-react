import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './create.css';

const PostCreate = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [writer, setWriter] = useState('');
  const navigate = useNavigate();

  const handleHome = () => {
    navigate("/post");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const postData = {
      title,
      content,
      writer
    };

    try {
      await axios.post('/post', postData);
      // 데이터 전송 후 원하는 작업 수행
      console.log('게시글이 성공적으로 생성되었습니다.');
      navigate('/post');
    } catch (error) {
      console.error('게시글 생성에 실패했습니다.', error);
    }

    // 입력 폼 초기화
    setTitle('');
    setContent('');
    setWriter('');
  };

  return (
    <div className="App-header">
      <h2>Create a New Post</h2>
      <form onSubmit={handleSubmit} className='card'>
        <div className="form-group">
          <label className="title">Title</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label className="content">Content</label>
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="writer">Writer</label>
          <input
            type="text"
            id="writer"
            value={writer}
            onChange={(e) => setWriter(e.target.value)}
            required
          />
          <button className='button' type="submit">완료</button>
        </div>
      </form>
      <p className='button' onClick={handleHome}>돌아가기</p>
    </div>
  );
};

export default PostCreate;
