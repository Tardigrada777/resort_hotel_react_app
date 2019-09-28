import styled from 'styled-components';

const StyledHero = styled.header`
  min-height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: url(${props => props.img}) center/cover no-repeat;
`;

export default StyledHero;
