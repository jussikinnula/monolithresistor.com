import React from 'react';
import { down, only, up } from 'styled-breakpoints';
import styled from 'styled-components';
import Wrapper from '../components/Wrapper';
import useWindowDimensions from '../hooks/useWindowDimensions';
import { PrismicSlice, PrismicKeyText, PrismicWebLink } from '../prismic';
import { Theme } from '../theme';

const Title = styled.h3<{ theme: Theme }>`
  margin: 0;
  color: ${props => props.theme.colors.background};
  background-color: ${props => props.theme.colors.accentDark};
  padding: 5px 10px;
`;

const TitleContent = styled.div<{ theme: Theme }>`
  width: 100%;
  max-width: ${props => props.theme.maxWidth};
  margin: 0 auto;

  ${down('xs')} {
    padding: 0 ${props => props.theme.padding.xs}px;
  }

  ${only('sm')} {
    padding: 0 ${props => props.theme.padding.sm}px;
  }

  ${only('md')} {
    padding: 0 ${props => props.theme.padding.md}px;
  }

  ${only('lg')} {
    padding: 0 ${props => props.theme.padding.lg}px;
  }

  ${up('lg')} {
    padding: 0 ${props => props.theme.padding.xl}px;
  }
`;

const SixteenToNineBox = styled.div`
  position: relative;
  height: 0;
  padding-bottom: 56.25%;
  overflow: hidden;
`;

const StyledIframe = styled.iframe<{ height?: number, fullWidth?: boolean }>`
  width: 100%;
  height: ${props => props.height ? `${props.height}px` : '100%'};
  border: 0;
  ${props => props.fullWidth && `
    position: absolute;
    top: 0;
    bottom: 0;
  `}
`;

interface IframeNonRepeatable {
  iframe_title: PrismicKeyText;
  iframe_link: PrismicWebLink;
  iframe_full_width: boolean;
  iframe_height?: number;
}

export type IframeSlice = PrismicSlice<IframeNonRepeatable, null, 'iframe'>;

const Iframe: React.FunctionComponent<IframeNonRepeatable> = (props) => {
  const { height, width } = useWindowDimensions();
  const {
    iframe_title: title,
    iframe_link: link,
    iframe_full_width: fullWidth,
    iframe_height: iframeHeight = 250,
  } = props;

  if (!link) {
    throw new Error('No link');
  }

  if (fullWidth) {
    if (height / width < 0.5625) {
      return (
        <>
          <Title>
            <TitleContent>{title}</TitleContent>
          </Title>
          <StyledIframe src={link.url} title={title} height={height} />
        </>
      );
    } else {
      return (
        <>
          <Title>
            <TitleContent>{title}</TitleContent>
          </Title>
          <SixteenToNineBox>
            <StyledIframe src={link.url} title={title} fullWidth={true} />
          </SixteenToNineBox>
        </>
      );
    }
  }

  return (
    <Wrapper>
      <Title>{title}</Title>
      <StyledIframe src={link.url} title={title} height={iframeHeight} />
    </Wrapper>
  )
};

export default Iframe;
