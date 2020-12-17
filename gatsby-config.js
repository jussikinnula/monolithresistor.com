require('source-map-support').install();
require('ts-node').register();

const { PRISMIC_REPOSITORY_NAME, PRISMIC_DEFAULT_LANG, PRISMIC_ACCESS_TOKEN, PRISMIC_REF } = process.env;

if (!PRISMIC_REPOSITORY_NAME) {
  console.error('Error! PRISMIC_REPOSITORY_NAME environment variable is undefined');
  process.exit();
}

if (!PRISMIC_ACCESS_TOKEN) {
  console.error('Error! PRISMIC_ACCESS_TOKEN environment variable is undefined');
  process.exit();
}

const siteMetadata = {
  title: 'Monolith Resistor',
  description: 'Acid/Electro House Music from Helsinki, Finland',
  url: 'https://monolithresistor.com'
};

const commonPlugins = [
  'gatsby-plugin-react-helmet',
  'gatsby-plugin-typescript',
  'gatsby-plugin-typescript-checker',
  {
    resolve:'gatsby-plugin-tslint',
    options: {
      stages: ['develop']
    }
  },
  'gatsby-plugin-styled-components',
  {
    resolve: '@prismicio/gatsby-source-prismic-graphql',
    options: {
      repositoryName: PRISMIC_REPOSITORY_NAME,
      defaultLang: PRISMIC_DEFAULT_LANG || 'en-gb',
      accessToken: PRISMIC_ACCESS_TOKEN,
      path: '/preview',
      previews: false
    }
  },
  {
    resolve: 'gatsby-plugin-react-svg',
    options: {
      rule: {
        include: /assets/
      }
    }
  }
];

const productionPlugins = [
  {
    resolve: `gatsby-plugin-favicon`,
    options: {
      logo: "./src/favicon.png",
      appName: null, // Inferred with your package.json
      appDescription: null,
      developerName: null,
      developerURL: null,
      dir: 'auto',
      lang: 'en-US',
      background: '#3b28cc',
      theme_color: '#3b28cc',
      display: 'standalone',
      orientation: 'any',
      start_url: '/',
      version: '1.0',
      icons: {
        android: true,
        appleIcon: true,
        appleStartup: true,
        coast: false,
        favicons: true,
        firefox: true,
        yandex: false,
        windows: true
      }
    }
  }
];

const developmentPlugins = [];

const plugins = process.env.NODE_ENV === 'production'
  ? [...commonPlugins, ...productionPlugins]
  : [...commonPlugins, ...developmentPlugins];

module.exports = { siteMetadata, plugins };
