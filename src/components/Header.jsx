import styled from 'styled-components';
import { useNavigate } from 'react-router-dom'
import HomeIcon from '@mui/icons-material/Home';
import { blue } from '@mui/material/colors';

const Header = () => {
  const navigate = useNavigate();
  return (
    <StHeaderContainer>
      <StHeaderName onClick={() => navigate('/')}>
        <HomeIcon sx={{ fontSize: 30, color: blue[400] }}/>
        <StHeaderp>My Todo List</StHeaderp>
      </StHeaderName>
      <StHeaderp>Made by Suz</StHeaderp>
    </StHeaderContainer>
  );
};

export default Header;

const StHeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
`;

const StHeaderName = styled.div`
  display: flex;
  align-items: center;
`

const StHeaderp = styled.span`
  font-size: 25px;
  font-weight: bold;
  align-items: center;
  margin-left: 10px;
  cursor: pointer;
`;
