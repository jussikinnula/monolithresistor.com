import { graphql } from 'gatsby';
import { PrismicDocumentBase, PrismicKeyText, PrismicImage } from '../prismic';
import { HeadingAndTextSlice } from '../slices/HeadingAndText';
import { IframeSlice } from '../slices/Iframe';

export type PageSlice = HeadingAndTextSlice | IframeSlice;

export interface PageDocument extends PrismicDocumentBase {
  title: PrismicKeyText;
  title_style: 'Light' | 'Dark';
  description?: PrismicKeyText;
  image?: PrismicImage;
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
    title_style
    description
    image
    body {
      __typename
      ... on PRISMIC_PageBodyHeading_and_text {
        type
        primary {
          heading
          text
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
