import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'AI Builders Digest',
  tagline: '每日 AI 开发者动态精选',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://shadowfish07.github.io',
  baseUrl: '/ai-builders-digest/',

  organizationName: 'shadowfish07',
  projectName: 'ai-builders-digest',

  onBrokenLinks: 'warn',

  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: '/',
          editUrl: undefined,
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      defaultMode: 'dark',
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'AI Builders Digest',
      logo: {
        alt: 'AI Builders Digest',
        src: 'img/logo.svg',
      },
      items: [
        {
          href: 'https://github.com/shadowfish07/ai-builders-digest',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      copyright: `© ${new Date().getFullYear()} AI Builders Digest · Powered by Hermes Agent`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
