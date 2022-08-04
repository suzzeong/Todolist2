import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import Header from './Header';

const Detail = () => {
  const todos = useSelector((state) => state.todos);
  const params = useParams();
  const todo = todos.find((val) => Number(val.id) === Number(params.id));

  // console.log(todos);

  const navigate = useNavigate();

  return (
    <>
      <Header />
      <StDetail>
        <StTodoDetailContainer>
          <StDetailTop>
            <StTodoId>ID: {todo.id}</StTodoId>
            <StButton onClick={() => navigate(-1)}>이전으로</StButton>
          </StDetailTop>
          <StTitle>{todo.title}</StTitle>
          <StContent>{todo.content}</StContent>
        </StTodoDetailContainer>
      </StDetail>
    </>
  );
};

export default Detail;

const StDetail = styled.div`
  display: flex;
  height: 90vh;
  justify-content: center;
  align-items: center;
`;

const StTodoDetailContainer = styled.div`
  background-color: #eee;
  border-radius: 12px;
  width: 400px;
  margin: 15% auto;
  display: flex;
  flex-direction: column;
  padding: 30px;
  word-wrap: break-word;
`;

const StDetailTop = styled.div`
  display: flex;
  justify-content: space-between;
`;

const StTodoId = styled.div``;

const StButton = styled.div`
  background-color: #90caf9;
  cursor: pointer;
  border: none;
  border-radius: 8px;
  padding: 5px 10px;
  &:hover {
    background-color: #64b5f6;
  }
`;

const StTitle = styled.h2``;

const StContent = styled.p`
  margin-bottom: 100px;
`;
