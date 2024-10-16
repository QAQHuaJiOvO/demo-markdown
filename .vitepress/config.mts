import { defineConfig } from 'vitepress'

base: "/demo-markdown/"
// https://vitepress.dev/reference/site-config
export default defineConfig({
  head: [["link", { rel: "icon", base: "/demo-markdown/", href: "/Vue.png" }]],
  title: "Vue.js",
  description: "A VitePress Site",
  themeConfig: {
    outlineTitle:"目录",
    outline:[2,6],
    logo:'/Vue.png',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '文档', 
        items:[
          {text:'深度指南', link:'https://cn.vuejs.org/guide/introduction.html'},
          {text:'互动教程',link:'https://cn.vuejs.org/tutorial/#step-1'},
          {text:'实例',link:'https://cn.vuejs.org/examples/#hello-world'},
          {text:'快速上手',link:'https://cn.vuejs.org/guide/quick-start.html'},
          {text:'术语表',link:'https://cn.vuejs.org/glossary/'},
          {text:'空白文档',link:'/测试/测试.md'}
        ] },
      { text: '开始', link: '/api-examples.md' },
      { text: '空白文档', link: '/测试/测试.md' }
    ],

    sidebar: [
      {
        text: '开始',
        items: [
          { text: '简介', link: 'https://cn.vuejs.org/guide/introduction.html' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      },
      {
        text: '空白文档',
        items: [
          { text: '测试', link: '/测试/测试.md' },
          { text: '测试2', link: '/测试/测试2.md' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],
    footer:{
      copyright:"Copyright@ 2024 Vue"
    },

       // 设置搜索框的样式
       search: {
        provider: "local",
        options: {
          translations: {
            button: {
              buttonText: "搜索文档",
              buttonAriaLabel: "搜索文档",
            },
            modal: {
              noResultsText: "无法找到相关结果",
              resetButtonTitle: "清除查询条件",
              footer: {
                selectText: "选择",
                navigateText: "切换",
              },
            },
          },
        },
      },
  }
})
