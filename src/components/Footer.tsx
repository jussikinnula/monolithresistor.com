import React from 'react';
import styled from 'styled-components';
import { down, only, up } from 'styled-breakpoints';
import theme, { Theme } from '../theme';
import Logo from '../assets/logo.svg';
import Balls from './Balls';
import Wrapper from '../components/Wrapper';

const Copyright = styled.div``;

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
