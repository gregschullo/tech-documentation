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
      title: '',
      logo: {
        alt: 'Book',
        src: 'img/book.png',
      },
      links: [
        {
          to: 'docs/dev/development',
          activeBasePath: 'docs',
          label: 'Dev',
          position: 'left',
          items: 
          [
            {
            label: 'Python',
            to: 'docs/dev/python/python-overview',
            },
          ],
        }, 
        {
          to: 'docs/networking/networking-overview', 
          activeBasePath: 'docs',
          label: 'Networking',
          position: 'left',
        },
        {
          to: 'docs/monitoring-alerting/monitoring-alerting', 
          activeBasePath: 'docs',
          label: 'Monitoring and Alerting',
          position: 'left',
          items:
          [
            {
              label: 'Monitoring',
              to: 'docs/monitoring-alerting/monitoring/monitoring-pattern',
            },
            {
              label: 'Alerting',
              to: 'docs/monitoring-alerting/alerting/alerting-strategy',
            },
          ],
        },
        {
          to: 'docs/containerization/kubernetes/kubernetes-index',
          activeBasePath: 'docs',
          label: 'Containerization',
          position: 'left',
        },   
        {
          to: 'docs/sre/sre', 
          activeBasePath: 'docs',
          label: 'SRE',
          position: 'left',
          items: 
          [
            {
            label: 'Availability',
            to: 'docs/sre/availability/meaningful-availability',
            },
            {
              label: 'Reliability',
              to: 'docs/sre/reliability/reliability-roadmap',
            },
            {
              label: 'Incident Response',
              to: 'docs/sre/incidents/incident-response',
            },
          ],
        },
        {
          to: 'docs/books/tech-books/phoenix-project', 
          activeBasePath: 'docs',
          label: 'Books',
          position: 'left',
          items: 
          [
            {
              label: 'Tech',
              to: 'docs/books/tech-books/google-site-reliability-engineering',
            },
            {
              label: 'Healthcare',
              to: 'docs/books/healthcare-books/an-american-sickness',
            },
            {
              label: 'Business',
              to: 'docs/books/business-books/the-checklist-manifesto',
            },
          ],
        },
        {
          blog: true, 
          label: 'Blog', 
          to: 'blog',
          position: 'right'
        },
      ],
    },
    footer: {
    logo: {
      alt: 'GitHub',
      src: 'img/github.png',
      href: 'https://github.com/gregschullo',
    },
      //style: 'dark',
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
      },
    ],
  ],
  plugins: [
    'docusaurus-lunr-search'
  ],
};
