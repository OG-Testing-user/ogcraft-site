import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '5ff'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '5ba'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'a2b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'c3c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '156'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '88c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '000'),
    exact: true
  },
  {
    path: '/discord',
    component: ComponentCreator('/discord', '707'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '3d7'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', 'a7c'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', '968'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', '7ed'),
            routes: [
              {
                path: '/docs/Announcements/Map 4 Reset',
                component: ComponentCreator('/docs/Announcements/Map 4 Reset', 'b4b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Announcements/Map 5 Reset',
                component: ComponentCreator('/docs/Announcements/Map 5 Reset', 'b6d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Announcements/Map 6 Reset',
                component: ComponentCreator('/docs/Announcements/Map 6 Reset', 'f29'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Announcements/Map 7 Reset',
                component: ComponentCreator('/docs/Announcements/Map 7 Reset', '317'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Events/3rd Birthday Celebration',
                component: ComponentCreator('/docs/Events/3rd Birthday Celebration', '2a1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Events/Base Building Bonanza',
                component: ComponentCreator('/docs/Events/Base Building Bonanza', 'e26'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Events/May Cosplay Contest',
                component: ComponentCreator('/docs/Events/May Cosplay Contest', '74f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Info/FAQ',
                component: ComponentCreator('/docs/Info/FAQ', '7ea'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Info/Host A Server',
                component: ComponentCreator('/docs/Info/Host A Server', 'a39'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Info/Rules',
                component: ComponentCreator('/docs/Info/Rules', '9f7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Info/Staff Members',
                component: ComponentCreator('/docs/Info/Staff Members', '25a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Info/Voting',
                component: ComponentCreator('/docs/Info/Voting', 'ede'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Legal/TOS-PrivacyPolicy',
                component: ComponentCreator('/docs/Legal/TOS-PrivacyPolicy', '674'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Site Layout',
                component: ComponentCreator('/docs/Site Layout', 'ef0'),
                exact: true
              },
              {
                path: '/docs/Welcome',
                component: ComponentCreator('/docs/Welcome', 'cd9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Wiki/Chat Colors',
                component: ComponentCreator('/docs/Wiki/Chat Colors', '780'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Wiki/Commands',
                component: ComponentCreator('/docs/Wiki/Commands', '211'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Wiki/Custom Crafting Recipes',
                component: ComponentCreator('/docs/Wiki/Custom Crafting Recipes', 'bd7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Wiki/Duping Policy',
                component: ComponentCreator('/docs/Wiki/Duping Policy', 'fe2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Wiki/Mod Policy',
                component: ComponentCreator('/docs/Wiki/Mod Policy', 'ae3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Wiki/Player Warp Rules',
                component: ComponentCreator('/docs/Wiki/Player Warp Rules', 'fe2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Wiki/Ranks',
                component: ComponentCreator('/docs/Wiki/Ranks', '93c'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', 'e5f'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
