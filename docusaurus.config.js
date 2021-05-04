module.exports = {
  title: 'Charba',
  tagline: 'J2CL and GWT Charts library based on CHART.JS',
  url: 'https://www.pepstock.org',
  baseUrl: '/',
  //baseUrl: '/Charba-Wiki/',
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
	googleAnalytics: {
      trackingID: 'UA-46259978-1',
    },
	prism: {
	  additionalLanguages: ['java'],
      theme: require('prism-react-renderer/themes/github'),
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
          href: 'https://www.pepstock.org/Charba-Showcase/Charba_Showcase.html',
          label: 'GWT showcase',
          position: 'left',
        },
        {
          href: 'https://www.pepstock.org/Charba-Showcase-J2CL/Charba_Showcase_J2CL.html',
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
              label: '4.0 (unreleased)',
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
