import styled from 'styled-components';
import { down, only, up } from 'styled-breakpoints';
import { Theme } from '../theme';

const Wrapper = styled.div<{ theme: Theme }>`
  width: 100%;
  max-width: ${props => props.theme.maxWidth};
  margin: 0 auto;

  ${down('xs')} {
    padding: ${props => props.theme.padding.xs};
  }

  ${only('sm')} {
    padding: ${props => props.theme.padding.sm};
  }

  ${only('md')} {
    padding: ${props => props.theme.padding.md};
  }

  ${only('lg')} {
    padding: ${props => props.theme.padding.lg};
  }

  ${up('lg')} {
    padding: ${props => props.theme.padding.xl};
  }
`;

export default Wrapper;
