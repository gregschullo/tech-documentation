module.exports = {
  title: 'Documentation',
  tagline: 'Tech Documentation and Writing',
  url: 'https://gregschullo.github.io',
  baseUrl: '/tech-documentation/',
  favicon: 'img/book.png',
  organizationName: 'gregschullo', // Usually your GitHub org/user name.
  projectName: 'tech-documentation', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Tech Doc',
      logo: {
        alt: 'Book',
        src: 'img/book.png',
      },
      links: [
        {
          to: 'docs/development/development-index',
          activeBasePath: 'docs',
          label: 'Development',
          position: 'left',
        }, 
        {
          to: 'docs/networking/osi-model', 
          activeBasePath: 'docs',
          label: 'Networking',
          position: 'left',
        },
        {
          to: 'docs/visualization/grafana-index', 
          activeBasePath: 'docs',
          label: 'Visualization',
          position: 'left',
        },
        {
          to: 'docs/monitoring/prometheus-index', 
          activeBasePath: 'docs',
          label: 'Monitoring',
          position: 'left',
        },
        {
          to: 'docs/containerization/kubernetes/kubernetes-index',
          activeBasePath: 'docs',
          label: 'Containerization',
          position: 'left',
        },   
        {
          to: 'docs/sre/availability/meaningful-availability', 
          activeBasePath: 'docs',
          label: 'SRE',
          position: 'left',
        },
        {
          to: 'docs/books/phoenix-project', 
          activeBasePath: 'docs',
          label: 'Books',
          position: 'left',
        },
        {
          blog: true, 
          label: 'Blog', 
          position: 'right'
        },
        {
          href: 'https://github.com/gregschullo',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      // links: [
        // {
        //   title: 'Docs',
        //   items: [
        //     {
        //       label: 'Style Guide',
        //       to: 'docs/doc1',
        //     },
        //     {
        //       label: 'Second Doc',
        //       to: 'docs/doc2',
        //     },
        //   ],
        // },
        // {
        //   title: 'Community',
        //   items: [
        //     {
        //       label: 'Discord',
        //       href: 'https://discordapp.com/invite/docusaurus',
        //     },
        //   ],
        // },
        // {
        //   title: 'Social',
        //   items: [
        //     {
        //       label: 'Instagram',
        //       href: 'https://www.instagram.com/greg.schullo/',
        //     },
        //   ],
        // },
      // ],
      copyright: `Copyright © Greg Schullo ${new Date().getFullYear()}`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        // themeConfig: {
        //   algolia: {
        //     appId: 'app-id',
        //     apiKey: 'api-key',
        //     indexName: 'index-name',
        //     algoliaOptions: {}, // Optional, if provided by Algolia
        //   },
        // },
      },
    ],
  ],
  plugins: [
    'docusaurus-lunr-search'
  ],
};
