import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import Todo from './Todo';

const List = () => {
  const todos = useSelector((state) => state.todos);

  return (
    <StListContainer>
      <StTitle>Working.. π₯</StTitle>
      <StListCard>
        {todos.map((todohi) =>
          todohi.isDone === false ? (
            <Todo
              key={todohi.id}
              todo={todohi}
            />
          ) : null
        )}
      </StListCard>
      <StTitle>Done..! π</StTitle>
      <StListCard>
        {todos.map((todohi) =>
          todohi.isDone === true ? (
            <Todo
              // λΆνμν λ¦¬λ λλ§μ λ°©μ§νκΈ° μν΄μλ κ° μμ μ»΄ν¬λνΈλ§λ€ λλ¦½μ μΈ keyκ°μ λ£μ΄μ€μΌ νλ€.
              key={todohi.id}
              todo={todohi}
            />
          ) : null
        )}
      </StListCard>
    </StListContainer>
  );
};

const StListContainer = styled.div`
  gap: 12px;
  height: 100%;
  padding: 0 24px;
  border-radius: 12px;
`;

const StTitle = styled.div`
  font-weight: bold;
  margin: 20px 0;
  font-size: 25px;
`;

const StListCard = styled.div`
  justify-content: center;
  /* align-items: center; */
  /* flex-direction: column; */
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  min-height: 150px;
`;

export default List;
