import { graphql } from 'gatsby';
import React from 'react';
import { oc } from 'ts-optchain';
import Layout from '../components/Layout';
import { PrismicDocumentBase, PrismicDocumentByUid, PrismicKeyText, PrismicImage } from '../prismic';
import theme from '../theme';
import { QueryComponent } from '../common';
import Hero from '../components/Hero';
import SliceZone from '../components/SliceZone';
import { HeadingAndTextSlice } from '../slices/HeadingAndText';
import { IframeSlice } from '../slices/Iframe';

export const query = graphql`
  query PageQuery($uid: String!) {
    prismic {
      page(uid: $uid, lang: "en-gb") {
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
              iframe_full_width
              iframe_height
            }
          }
        }
      }
    }
  }
`;

type PageSlice = HeadingAndTextSlice | IframeSlice;

interface PageDocument extends PrismicDocumentBase {
  title: PrismicKeyText;
  title_style: 'Light' | 'Dark';
  description?: PrismicKeyText;
  image?: PrismicImage;
  body: PageSlice[];
}

interface PageProps {
  data: PrismicDocumentByUid<{ page: PageDocument }>
}

const Page: QueryComponent<PageProps> = props => {
  const page = oc(props).data.prismic.page();
  const title = oc(page).title();
  const titleStyle = oc(page).title_style();
  const description = oc(page).description();
  const image = oc(page).image();
  const slices = oc(page).body();

  const data = { title, description, image };

  return (
    <Layout {...data}>
      <Hero theme={theme} titleStyle={titleStyle} {...data} />
      <SliceZone slices={slices} />
    </Layout>
  );
};

Page.query = query;

export default Page;
