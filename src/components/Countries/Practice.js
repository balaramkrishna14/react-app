/*global render*/
import styled from '@emotion/styled';

const H1 = styled.h1(
  {
    fontSize: 20
  },
  props => ({ color: props.color })
);

render(<H1 color="lightgreen">This is lightgreen.</H1>);


