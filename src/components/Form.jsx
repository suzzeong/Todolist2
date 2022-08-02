import React, { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { addTodo } from '../redux/modules/todos';

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

  const nextId = useRef(0);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (title === '' || content === '') return;

    dispatch(
      addTodo({
        id: (nextId.current += 1),
        title,
        content,
        isDone: false,
      })
    );
    setTitle('');
    setContent('');
  };

  return (
    <StFormContainer onSubmit={onSubmitHandler}>
      <StFormlabel>제목</StFormlabel>
      <StInput type='text' value={title} onChange={handleInputTitle}></StInput>
      <StFormlabel>내용</StFormlabel>
      <StInput
        type='text'
        value={content}
        onChange={handleInputContent}
      ></StInput>
      <StButton>추가하기</StButton>
    </StFormContainer>
  );
};

const StFormContainer = styled.form`
  display: flex;
  padding: 30px;
  background-color: #eee;
  border-radius: 10px;
`;

const StFormlabel = styled.label`
  font-weight: bold;
`;

const StInput = styled.input`
  border: 1px solid #b0e0e6;
  margin-right: 100px;
  margin-left: 20px;
  height: auto;
  width: 300px;
  border-radius: 8px;
  outline: none;
`;

const StButton = styled.button`
  padding: 5px 10px;
  background-color: #fff;
  font-weight: bold;
  height: auto;
  width: 120px;
  cursor: pointer;
  border-radius: 8px;
  border: 1px solid #b0e0e6;
  &:hover {
    background-color: #b0e0e6;
  }
`;

export default Form;
