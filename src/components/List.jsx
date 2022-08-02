import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import Todo from './Todo';

const List = ({ handleDelete, handleDone }) => {
  const todos = useSelector((state) => state.todos);

  return (
    <StListContainer>
      <StTitle>Working.. 🔥</StTitle>
      <StListCard>
        {todos.map((todo) =>
          todo.isDone === false ? (
            <Todo
              key={todo.id}
              todo={todo}
              handleDelete={handleDelete}
              handleDone={handleDone}
            />
          ) : null
        )}
      </StListCard>
      <StTitle>Done..! 🎉</StTitle>
      <StListCard>
        {todos.map((todo) =>
          todo.isDone === true ? (
            <Todo
              key={todo.id}
              todo={todo}
              handleDelete={handleDelete}
              handleDone={handleDone}
            />
          ) : null
        )}
      </StListCard>
    </StListContainer>
  );
};

const StListContainer = styled.div`
  height: 100%;
  padding: 0 24px;
  border-radius: 12px;
`;

const StTitle = styled.div`
  font-weight: bold;
  margin: 20px;
  font-size: 25px;
`;

const StListCard = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  min-height: 150px;
`;

export default List;
