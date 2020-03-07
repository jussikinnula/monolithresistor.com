import styled from 'styled-components';
import { down, only, up } from 'styled-breakpoints';

const Balls = styled.div<{ color: string }>`
  border-style: dashed;
  border-color: ${props => props.color};

  ${down('sm')} {
    border-width: 4px;
  }

  ${only('sm')} {
    border-width: 6px;
  }

  ${only('md')} {
    border-width: 6px;
  }

  ${only('lg')} {
    border-width: 8px;
  }

  ${up('lg')} {
    border-width: 10px;
  }
`;

export default Balls;
