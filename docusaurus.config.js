module.exports = {
  title: 'Documentation',
  tagline: 'Tech Documentation and Writing',
  //url: 'https://gregschullo.github.io',
  url: 'https://docs.gregschullo.io',
  //baseUrl: '/tech-documentation/',
  baseUrl: '/',
  favicon: 'img/book.png',
  organizationName: 'gregschullo', // GitHub org/user name.
  projectName: 'tech-documentation', // Repository Name.
  plugins: [require.resolve('docusaurus-lunr-search')],
  onBrokenLinks: 'ignore',
  themeConfig: {
    sidebarCollapsible: true,
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
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: '',
      logo: {
        alt: 'Book',
        src: 'img/book.png',
      },
      style: 'primary',
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
            {
              label: 'JavaScript',
              to: 'docs/dev/javascript/javascript-overview',
            },
            {
              label: 'Ruby',
              to: 'docs/dev/ruby/ruby-overview',
            },
            {
              label: 'Java',
              to: 'docs/dev/java/java-overview',
            },
            {
              label: 'Swift',
              to: 'docs/dev/swift/swift-overview',
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
              to: 'docs/infrastructure/containerization/containerization-overview'
            },
            {
              label: 'Cloud',
              to: 'docs/infrastructure/cloud/gcp/gcp-overview'
            },
            {
              label: 'Automation',
              to: 'docs/infrastructure/automation/terraform/terraform-overview'
            },
            {
              label: 'Configuration',
              to: 'docs/infrastructure/configuration/ansible/ansible-overview'
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
              label: 'Monitoring',
              to: 'docs/sre/monitoring/monitoring-pattern',
            },
            {
              label: 'Alerting',
              to: 'docs/sre/alerting/alerting-strategy',
            },
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
              to: 'docs/sre/incident-response/incident-command-system',
            },
          ],
        },
        {
          to: 'docs/qa/quality-assurance',
          activeBasePath: 'docs',
          label: 'QA',
          position: 'left',
          items:
          [
            {
              label: 'Cypress',
              to: 'docs/qa/cypress/cypress-overview',
            },
            {
              label: 'onX',
              to: 'docs/qa/onx/onx-notes',
            },
          ]
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
            {
              label: 'Economics & Finance',
              to: 'docs/books/economics-finance-books/the-simple-path-to-wealth',
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
          to: 'docs/resume-greg-schullo',
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
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
