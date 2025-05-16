import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'OGCraft',
  tagline: '',
  favicon: 'img/OGCraft.svg',

  url: 'https://Wiki.ogcraft.org',
  baseUrl: '/',

  organizationName: 'OGCraft',
  projectName: 'ogcraft-site',

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
      locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl:
          'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    colorMode: {
      defaultMode: 'dark',
        disableSwitch: true,
        respectPrefersColorScheme: true,
    },
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'OGCraft',
      logo: {
        alt: 'My Site Logo',
        src: 'img/OGCraft.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Wiki',
        },
        {
          href: 'https://store.ogcraft.org',
          label: 'Store',
          position: 'left',          // same side as “Wiki”
          className: 'navbarDiscord',// an optional hook for CSS
        },
        {
          href: '/Discord',
          label: 'Discord',
          position: 'left',          // same side as “Wiki”
          className: 'navbarDiscord',// an optional hook for CSS
        },
        {
          href: '/docs/Info/Voting',
          label: 'Voting',
          position: 'left',          // same side as “Wiki”
          className: 'navbarDiscord',// an optional hook for CSS
        },
        {
          href: 'https://github.com/Roman-Emperor-42/ogcraft-site',
          label: 'GitHub',
          position: 'right',
        },
      ],

    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Community',
          items: [
            {
              label: 'Discord',
              href: '/Info/Discord',
            },
            {
              label: 'Status',
              href: 'https://status.ogcraft.org/',
            },
            {
              label: 'TOS',
              href: 'docs/Legal/TOS-PrivacyPolicy',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} OGCraft, All rights reserved.<br/>
      Not affiliated with Mojang or Microsoft.
      `,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
