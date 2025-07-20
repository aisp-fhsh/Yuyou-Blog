import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "A Newbie-friendly Vitepress Template Project",
  description: "It's a vitepress template project for newbie 👶.",
  base: "/Yuyou-Blog/",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首頁', link: '/' },
      { text: '專案網誌', link: '/first-post' },
      { text: 'DownUnderCTF-WriteUp', link: 'DownUnderCTF' }

    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/zyyuyou' }
    ]
  }
})
