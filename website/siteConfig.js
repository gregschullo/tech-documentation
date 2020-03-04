/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// See https://docusaurus.io/docs/site-config for all the possible
// site configuration options.

// List of projects/orgs using your project for the users page.
const users = [
  {
    caption: 'User1',
    // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/image.jpg'.
    image: '/img/undraw_open_source.svg',
    infoLink: 'https://www.facebook.com',
    pinned: true,
  },
];

const siteConfig = {
  title: 'Documentation', // Title for your website.
  tagline: 'Tech Documentation and Writing',
  url: 'https://gregschullo.github.io', // Your website URL
  baseUrl: '/documentation/', // Base URL for your project */
  // For github.io type URLs, you would set the url and baseUrl like:
  //   url: 'https://<organization>.github.io',
  //   baseUrl: '/<repository name>/',

  // Used for publishing and more
  projectName: 'documentation',
  organizationName: 'gregschullo',
  // For top-level user or org sites, the organization is still the same.
  // e.g., for the https://JoelMarcey.github.io site, it would be set like...
  //   organizationName: 'JoelMarcey'

  // For no header links in the top nav bar -> headerLinks: [],
  headerLinks: [
    {doc: 'development/development-index', label: 'Development'}, 
    {doc: 'networking/osi-model', label: 'Networking'},
    {doc: 'dashboarding/grafana-index', label: 'Dashboarding'}, 
    {doc: 'monitoring/prometheus-index', label: 'Monitoring'},
    {doc: 'container-platforms/kubernetes-index', label: 'Containerization Platforms'},   
    {doc: 'sre/meaningful-availability', label: 'SRE'},
    {doc: 'books/phoenix-project', label: 'Books'},
    {blog: true, label: 'Blog'},
    {page: 'help', label: 'Help'},
  ],

  // If you have users set above, you add it here:
  users,

  /* path to images for header/footer */
  headerIcon: 'img/book.png',
  footerIcon: 'img/favicon.ico',
  favicon: 'img/book.png',

  /* Colors for website */
  colors: {
    primaryColor: '#616664',
    secondaryColor: '#90948C',
  },

  /* Custom fonts for website */
  /*
  fonts: {
    myFont: [
      "Times New Roman",
      "Serif"
    ],
    myOtherFont: [
      "-apple-system",
      "system-ui"
    ]
  },
  */

  // This copyright info is used in /core/Footer.js and blog RSS/Atom feeds.
  copyright: `Copyright © ${new Date().getFullYear()} Greg Schullo`,

  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks.
    theme: 'default',
  },

  // Add custom scripts here that would be placed in <script> tags.
  scripts: ['https://buttons.github.io/buttons.js'],

  // On page navigation for the current documentation page.
  onPageNav: 'separate',

  // Open Graph and Twitter card images.
  ogImage: 'img/undraw_online.svg',
  twitterImage: 'img/undraw_tweetstorm.svg',

  // For sites with a sizable amount of content, set collapsible to true.
  // Expand/collapse the links and subcategories under categories.
  // docsSideNavCollapsible: true,

  // Show documentation's last contributor's name.
  // enableUpdateBy: true,

  // Show documentation's last update time.
  // enableUpdateTime: true,

  // You may provide arbitrary config keys to be used as needed by your
  // template. For example, if you need your repo's URL...
  //   repoUrl: 'https://github.com/facebook/test-site',
};

module.exports = siteConfig;

// sample Config for converting to Docusaurus 2
// docusaurus.config.js
// module.exports = {
  
//   themeConfig: {
//     navbar: {
//       title: 'Documentation',
//       logo: {
//         alt: 'Docusaurus Logo',
//         src: 'img/docusaurus.svg',
//       },
//       links: [
//         {
//           to: 'development/development-index', 
//           label: 'Development', 
//           position: 'left'
//         },
//         {to: 'help', label: 'Help', position: 'left'},
//         {
//           href: 'https://github.com/',
//           label: 'GitHub',
//           position: 'right',
//         },
//         {to: 'blog', label: 'Blog', position: 'left'},
//       ],
//     },
//   },
  
//   themes: [
//     '@docusaurus/theme-classic', 
//     '@docusaurus/theme-live-codeblock'
//   ],

//   presets: [
//     [
//       '@docusaurus/preset-classic',
//       {
//         docs: {
//           // Equivalent to `customDocsPath`.
//           // path: 'docs',
          
//           // Equivalent to `editUrl` but should point to `website` dir instead of `website/docs`
//           editUrl: 'https://github.com/gregschullo/documentation/edit/master/website',
          
//           // Equivalent to `docsUrl`.
//           routeBasePath: 'docs',
          
//           // Remark and Rehype plugins passed to MDX. Replaces `markdownOptions` and `markdownPlugins`.
//           remarkPlugins: [],
//           rehypePlugins: [],
          
//           // Equivalent to `enableUpdateBy`.
//           showLastUpdateAuthor: true,
          
//           // Equivalent to `enableUpdateTime`.
//           showLastUpdateTime: true,
          
//           // docs folder path relative to website dir.
//           path: '../docs',
          
//           // sidebars file relative to website dir.
//           sidebarPath: require.resolve('./sidebars.json'),
//         },
//       },
//     ],
//   ],
// };