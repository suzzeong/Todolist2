import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { deleteTodo, doneTodo } from '../redux/modules/todos';

const Todo = ({ todo }) => {
  const dispatch = useDispatch();

  // console.log(todo);
  return (
    <StTodoContainer>
      <Link to={`/detail/${todo.id}`}>상세보기</Link>

      <StTodoTitle>{todo.title}</StTodoTitle>
      <StTodoContent>{todo.content}</StTodoContent>

      <StTodobuttons>
        <StTodobutton
          onClick={() => {
            dispatch(deleteTodo(todo.id));
          }}
        >
          삭제
        </StTodobutton>
        <StTodobutton
          onClick={() => {
            dispatch(doneTodo(todo.id));
          }}
        >
          {todo.isDone === true ? '취소' : '완료'}
        </StTodobutton>
      </StTodobuttons>
    </StTodoContainer>
  );
};

const StTodoContainer = styled.div`
  gap: 12px;
  margin-top: 5px;
  width: 250px;
  min-height: 150px;
  padding: 30px;
  border: 1px solid #b0e0e6;
  border-radius: 8px;
  background-color: #fff;
`;

const StTodoTitle = styled.div`
  font-weight: bold;
  font-size: 20px;
`;
const StTodoContent = styled.div`
  font-weight: 18px;
`;

const StTodobuttons = styled.div`
  display: flex;
  justify-content: space-between;
`;

const StTodobutton = styled.div`
  cursor: pointer;
  border: 1px solid #b0e0e6;
  border-radius: 8px;
  padding: 5px 40px;
  margin-top: 20px;
  &:hover {
    background-color: #b0e0e6;
  }
`;

export default Todo;
