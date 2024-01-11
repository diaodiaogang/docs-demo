import { defineConfig } from 'vitepress'
import { set_sidebar } from "./utils/auto-gen-sidebar.mjs"   // 改成自己的路径
// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "我很牛逼",
  description: "A VitePress Site",
  themeConfig: {
    //设置搜索框的样式
    search: {
      provider: "local",
      options: {
        translations: {
          buttonText: "搜索文档",
          buttonAriaLabel: "搜索文档",
        },
        modal: {
          noResultsText: "无法找到相关结果",
          resetButtonTitle: "清除查询条件",
          footer: {
            selectText: "选择",
            NavigateText: "切换",
          }
        }
      }
    },
    outlineTitle: "文章目录",
    outline: [2,6],
    logo:'/logo.png',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '奇衡体系',
        items: [
          {text: "作手术录",link: '/'},
          {text: "砖头",link: '/'},
          {text: "基本面",link: '/'}
        ] 
     },
      { text: 'markdown实例', link: '/markdown-examples' },
      { text: '一路骗到底',link: '/一路骗到底/第一课'},
    ],

    // sidebar: [
    //   {
    //     text: 'Examples',
    //     items: [
    //       { text: 'Markdown Examples', link: '/markdown-examples' },
    //       { text: 'Runtime API Examples', link: '/api-examples' }
    //     ]
    //   }
    // ],
    // sidebar: {
    //     "/front/backend": set_sidebar("/front/backend"),
    // },
    sidebar: false, // 关闭侧边栏
    aside: "left", // 设置右侧侧边栏在左侧显示
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],
    footer:{
      copyright:"Copyright @ 2023-present My Name"
    }
  }
})
