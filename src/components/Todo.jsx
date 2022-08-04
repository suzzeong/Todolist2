import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { deleteTodo, doneTodo } from '../redux/modules/todos';

const Todo = ({ todo }) => {
  const dispatch = useDispatch();
  // const navigate = useNavigate();

  // console.log(todo);
  return (
    <StTodoContainer>
      <StLink>
        <Link to={`/detail/${todo.id}`}>상세보기</Link>
        {/* <p onClick={() => navigate(`/detail/${todo.id}`)}>상세보기</p> */}
      </StLink>
      <StTodoTitle>{todo.title}</StTodoTitle>
      <StTodoContent>{todo.content}</StTodoContent>

      <StTodobuttons>
        <StTodobutton
          onClick={() => {
            if(window.confirm('정말 삭제하겠습니까?')) {
              dispatch(deleteTodo(todo.id));
            }
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
  margin-top: 5px;
  width: 300px;
  min-height: 150px;
  padding: 30px;
  border-radius: 8px;
  background-color: #eee;
  word-wrap: break-word;
`;

const StLink = styled.div`
  border-style: none;
  margin-bottom: 15px;
`

const StTodoTitle = styled.div`
  font-weight: bold;
  font-size: 20px;
  margin-bottom: 5px;
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
  background-color: #90caf9;
  border-radius: 8px;
  padding: 5px 55px;
  margin-top: 20px;
  &:hover {
    background-color: #64b5f6;
  }
`;

export default Todo;
