module.exports = {
  title: 'Charba',
  tagline: 'J2CL and GWT Charts library based on CHART.JS',
  url: 'https://pepstock-org.github.io/',
  baseUrl: '/',
  // baseUrl: '/Charba-Wiki/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'pepstock-org',
  projectName: 'Charba',
  themeConfig: {
    hideableSidebar: true,
    colorMode: {
		disableSwitch: true,  
	},
    algolia: {
      apiKey: '0ead4ceb3ed5c9cdd0089be7ef8c8624',
      indexName: 'charba-wiki',
      contextualSearch: true,
    },
	googleAnalytics: {
      trackingID: 'UA-46259978-1',
    },
	prism: {
	  additionalLanguages: ['java'],
      theme: require('./src/prism-theme-github.js'),
    },
    navbar: {
      title: 'Charba',
      logo: {
        alt: 'Pepstock.org logo',
        src: 'img/logo.png',
        target: '_self',
      },
      items: [
        {
          href: 'https://pepstock-org.github.io/Charba-Showcase/',
          label: 'GWT showcase',
          position: 'left',
        },
        {
          href: 'https://pepstock-org.github.io/Charba-Showcase-J2CL/',
          label: 'J2CL showcase',
          position: 'left',
        },
        // right
        {
          type: 'docsVersionDropdown',
          position: 'right',
          dropdownActiveClassDisabled: false,
        },
        {
          href: 'https://sonarcloud.io/dashboard?id=pepstock-org_Charba',
          label: 'SonarCloud',
          position: 'right',
        },
        {
          href: 'https://github.com/pepstock-org/Charba',
          label: 'GitHub',
          position: 'right'
        },
      ],
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} Pepstock.org`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          disableVersioning: false,
          lastVersion: 'current',
          versions: {
            current: {
              label: '4.1 unreleased',
            },
          },
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
