import { graphql } from 'gatsby';
import { PrismicDocumentBase, PrismicKeyText } from '../prismic';
import { HeadingAndTextSlice } from '../slices/HeadingAndText';
import { HeroSlice } from '../slices/Hero';
import { IframeSlice } from '../slices/Iframe';

export type PageSlice = HeadingAndTextSlice | HeroSlice | IframeSlice;

export interface PageDocument extends PrismicDocumentBase {
  title: PrismicKeyText;
  body: PageSlice[];
}

export const PageFragment = graphql`
  fragment PageFragment on PRISMIC_Page {
    _linkType
    __typename
    _meta {
      tags
      type
      uid
    }
    title
    body {
      __typename
      ... on PRISMIC_PageBodyHeading_and_text {
        type
        primary {
          heading
          text
        }
      }
      ... on PRISMIC_PageBodyHero {
        type
        primary {
          hero_title
          hero_title_style
          hero_image
        }
      }
      ... on PRISMIC_PageBodyIframe {
        type
        primary {
          iframe_title
          iframe_link {
            ... on PRISMIC__ExternalLink {
              url
              _linkType
              __typename
            }
          }
        }
      }
    }
  }
`;
