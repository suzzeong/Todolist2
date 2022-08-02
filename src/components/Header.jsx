import styled from 'styled-components';

const Header = () => {
  return (
    <StHeaderContainer>
      <StHeaderp>My Todo List</StHeaderp>
      <StHeaderp>Made by Suz</StHeaderp>
    </StHeaderContainer>
  );
};

export default Header;

const StHeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 20px;
`;

const StHeaderp = styled.p`
  font-weight: bold;
`;
