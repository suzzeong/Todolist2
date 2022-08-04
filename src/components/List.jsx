import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import Todo from './Todo';

const List = () => {
  const todos = useSelector((state) => state.todos);

  return (
    <StListContainer>
      <StTitle>Working.. 🔥</StTitle>
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
      <StTitle>Done..! 🎉</StTitle>
      <StListCard>
        {todos.map((todohi) =>
          todohi.isDone === true ? (
            <Todo
              // 불필요한 리렌더링을 방지하기 위해서는 각 자식 컴포넌트마다 독립적인 key값을 넣어줘야 한다.
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
