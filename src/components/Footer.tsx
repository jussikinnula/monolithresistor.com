import React from 'react';
import styled from 'styled-components';
import { Theme } from '../theme';
import Balls from './Balls';
import Wrapper from '../components/Wrapper';

const Copyright = styled.div`
	margin-bottom: 25px;
`;

interface FooterProps {
  theme: Theme;
}

const Footer: React.FunctionComponent<FooterProps> = props => (
  <>
    <Balls color={props.theme.colors.main} />
    <Wrapper>
      <Copyright>&copy; Monolith Resistor</Copyright>
    </Wrapper>
  </>
);

export default Footer;
