import styled from 'styled-components';
import { down, only, up } from 'styled-breakpoints';
import { Theme } from '../theme';

const Wrapper = styled.div<{ theme: Theme }>`
  width: 100%;
  max-width: ${props => props.theme.maxWidth};
  margin: 0 auto;

  ${down('xs')} {
    padding: ${props => props.theme.padding.xs}px;
  }

  ${only('sm')} {
    padding: ${props => props.theme.padding.sm}px;
  }

  ${only('md')} {
    padding: ${props => props.theme.padding.md}px;
  }

  ${only('lg')} {
    padding: ${props => props.theme.padding.lg}px;
  }

  ${up('lg')} {
    padding: ${props => props.theme.padding.xl}px;
  }
`;

export default Wrapper;
