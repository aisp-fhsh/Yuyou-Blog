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
      { text: 'CTF WriteUp', link: 'CTF-WriteUp' },
      { text: '程式筆記', link: 'TQC-python' },
    ],

    sidebar: [
      {
        text: '側邊欄',
        items: [
          { text: 'CTF WriteUp', link: '/CTF-WriteUp' },
          { text: 'Python NOTE', link: '/TQC-python' }
        ]
      }
    ], 

    socialLinks: [
      { icon: 'github', link: 'https://github.com/zyyuyou' }
    ]
  }
})
