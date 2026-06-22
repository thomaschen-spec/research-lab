// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Thomas Research Lab',
  tagline: '每日 AI 應用實驗研究日誌',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  url: 'https://research-lab.vercel.app',
  baseUrl: '/',

  organizationName: 'thomas-chen',
  projectName: 'research-lab',

  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          editUrl: 'https://github.com/thomas-chen/research-lab/tree/main/',
        },
        blog: {
          showReadingTime: true,
          blogTitle: '研究日誌',
          blogDescription: 'Thomas 每日 AI 應用實驗紀錄',
          postsPerPage: 10,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          editUrl: 'https://github.com/thomas-chen/research-lab/tree/main/',
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'Thomas Research Lab',
        logo: {
          alt: 'Research Lab Logo',
          src: 'img/logo.svg',
        },
        items: [
          {to: '/blog', label: '研究日誌', position: 'left'},
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: '文件',
          },
          {
            href: 'https://github.com/thomas-chen/research-lab',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: '研究日誌',
            items: [
              {
                label: '所有日誌',
                to: '/blog',
              },
            ],
          },
          {
            title: '關於',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/thomas-chen/research-lab',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Thomas Chen. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
