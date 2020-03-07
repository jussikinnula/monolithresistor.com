import styled from 'styled-components';
import { down, only, up } from 'styled-breakpoints';
import theme, { Theme } from '../theme';

const Wrapper = styled.div<{ theme: Theme }>`
  width: 100%;
  max-width: ${props => props.theme.maxWidth};
  margin: 0 auto;

  ${down('md')} {
    padding: 10px;
  }

  ${only('md')} {
    padding: 14px;
  }

  ${only('lg')} {
    padding: 18px;
  }

  ${up('lg')} {
    padding: 25px;
  }
`;

export default Wrapper;
