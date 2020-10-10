module.exports = {
  title: 'Documentation',
  tagline: 'Tech Documentation and Writing',
  url: 'https://gregschullo.github.io',
  baseUrl: '/tech-documentation/',
  favicon: 'img/book.png',
  organizationName: 'gregschullo', // Usually your GitHub org/user name.
  projectName: 'tech-documentation', // Usually your repo name.
  plugins: [require.resolve('docusaurus-lunr-search')],
  onbrokenlinks: 'ignore',
  themeConfig: {
    // announcementBar: {
    //   id: 'announcement', // Any value that will identify this message.
    //   content:
    //     'Sample Announcement Message',
    //   backgroundColor: '#fafbfc', // Defaults to `#fff`.
    //   textColor: '#091E42', // Defaults to `#000`.
    //   isCloseable: true, // Defaults to `true`.
    // },
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
    navbar: {
      title: '',
      logo: {
        alt: 'Book',
        src: 'img/book.png',
      },
      items: [
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
          to: 'docs/infrastructure/infrastructure-overview', 
          activeBasePath: 'docs',
          label: 'Infrastructure',
          position: 'left',
          items:
          [
            {
              label: 'Networking',
              to: 'docs/infrastructure/networking/networking-overview'
            },
            {
              label: 'Containerization',
              to: 'docs/infrastructure/containerization/kubernetes/kubernetes-index'
            },
          ],
        },
        {
          to: 'docs/monitor-alert/monitoring-alerting', 
          activeBasePath: 'docs',
          label: 'Monitor and Alert',
          position: 'left',
          items:
          [
            {
              label: 'Monitoring',
              to: 'docs/monitor-alert/monitor/monitoring-pattern',
            },
            {
              label: 'Alerting',
              to: 'docs/monitor-alert/alert/alerting-strategy',
            },
          ],
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
          to: 'docs/os/os-overview',
          activeBasePath: 'docs',
          label: 'OS',
          position: 'left',
          items:
          [
            {
              label: 'Linux',
              to: 'docs/os/linux/linux-overview'
            },
            {
              label: 'MacOS',
              to: 'docs/os/macos/macos-overview'
            }
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
        {
          label: 'Résumé', 
          to: 'docs/greg-schullo-resume',
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
};
