import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { addTodo } from '../redux/modules/todos';

// id 값 오류 해결
let nextId = 2;

const Form = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const dispatch = useDispatch();

  const handleInputTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleInputContent = (e) => {
    setContent(e.target.value);
  };

  // const nextId = useRef(0);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (title.trim() === '' && content.trim() === '') {
      alert(`제목과 내용을 모두 입력하세요.`);
    } else if (title.trim() === '') {
      alert(`제목을 입력하세요.`);
    } else if (content.trim() === '') {
      alert(`내용을 입력하세요.`);
    } else if (title.trim() !== '' && content.trim() !== '') {
      dispatch(
        addTodo({
          id: nextId += 1,
          title: title,
          content: content,
          isDone: false,
        })
      );
      setTitle('');
      setContent('');
    }
  };

  return (
    <StFormContainer onSubmit={onSubmitHandler}>
      <StFormlabel>제목</StFormlabel>
      <StInput
        type='text'
        value={title}
        name='title'
        onChange={handleInputTitle}
      />
      <StFormlabel>내용</StFormlabel>
      <StInput
        type='text'
        value={content}
        name='content'
        onChange={handleInputContent}
      />
      <StButton>추가하기</StButton>
    </StFormContainer>
  );
};

const StFormContainer = styled.form`
  display: flex;
  justify-content: center;
  padding: 30px;
  background-color: #eee;
  border-radius: 10px;
  gap: 24px;
`;

const StFormlabel = styled.label`
  font-size: 18px;
  font-weight: bold;
`;

const StInput = styled.input`
  border: 1px solid #42a5f5;
  padding: 0 10px;
  height: auto;
  width: 300px;
  border-radius: 8px;
  outline: none;
`;

const StButton = styled.button`
  padding: 5px 40px;
  background-color: #fff;
  font-weight: bold;
  font-size: 16px;
  height: auto;
  cursor: pointer;
  border-radius: 8px;
  border: none;
  background-color: #90caf9;
  &:hover {
    background-color: #64b5f6;
  }
`;

export default Form;
