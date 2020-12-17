import React from 'react';
import { Helmet } from 'react-helmet';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import styledNormalize from 'styled-normalize';
import { only, up } from 'styled-breakpoints';
import theme from '../theme';
import { PrismicKeyText, PrismicImage } from '../prismic';
import Footer from '../components/Footer';
import Header from '../components/Header';
import SEO from '../components/SEO';

const GlobalStyle = createGlobalStyle`
  ${styledNormalize}

  html {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    x-ms-format-detection: none;
    font-family: ${theme.fontFamilies.text};
    font-size: 12px;

    ${only('sm')} {
      font-size: 15px;
    }

    ${only('md')} {
      font-size: 18px;
    }

    ${only('lg')} {
      font-size: 22px;
    }

    ${up('lg')} {
      font-size: 24px;
    }
  }

  body {
    padding: 0;
    margin: 0;
    color: ${theme.colors.text};
    background-color: ${theme.colors.background};
  }

  code, pre {
    font-family: ${theme.fontFamilies.code};
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${theme.fontFamilies.heading};
    color: ${theme.colors.accentDark};
  }

  a {
    color: ${theme.colors.accentDark};
    opacity: 1;
    transition: opacity .25s ease-in-out;

    &:hover {
      opacity: 0.75;
    }
  }

  div {
    box-sizing: border-box;
  }
`;

interface LayoutProps {
  title?: PrismicKeyText;
  description?: PrismicKeyText;
  image?: PrismicImage;
}

const Layout: React.FunctionComponent<LayoutProps> = ({ title, description, image, children }) => (
  <>
    <Helmet>
      <link href="https://fonts.googleapis.com/css?family=Francois+One|Ubuntu+Condensed|Ubuntu+Mono&amp;display=swap" rel="stylesheet" />
    </Helmet>
    <SEO title={title} description={description} image={image} />
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header theme={theme} />
      {children}
      <Footer theme={theme} />
    </ThemeProvider>
  </>
);

export default Layout;
