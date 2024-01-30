import { defineConfig } from 'vitepress'
import { set_sidebar } from "./utils/auto-gen-sidebar.mjs"   // 改成自己的路径
// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/docs-demo",
  head: [["link",{rel: "icon", href: "/docs-demo/logo.svg"}]],
  title: "Allan Diao的文档站",
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
    outline: [1,6],
    logo:'/logo.png',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Python',
        items: [
          
          {text: "基础",link: '/Python/基础/基础'},
          
        ] 
     },
      { text: '基本面',
        items: [

          {text: "医药板块",link: '/基本面/医药股分析'},

        ]
      },
      { text: '4+1',
        items: [
          {text: "股票作手回忆录",link: '/股票作手回忆录/作手术录'},
          {text: "专业投机原理",link: '/专业投机原理/砖头'},
          
        ] 
     },

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
