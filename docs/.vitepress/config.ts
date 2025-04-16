import { defineConfig } from 'vitepress';
import footnote from 'markdown-it-footnote';
import {
  groupIconMdPlugin,
  groupIconVitePlugin
} from 'vitepress-plugin-group-icons'

// refer https://vitepress.dev/reference/site-config for details
export default defineConfig({
  appearance: 'dark',
  lang: 'zh-CN',
  title: '华玥组件库',
  description: '自定义移动端vue3组件',
  ignoreDeadLinks: true,
  locales: {
    root: {
      label: '中文',
      lang: 'zh-CN',
      title: '华玥组件库',
      description: '这是一个 VitePress 中文文档示例'
    },
    en: {
      label: 'English',
      lang: 'en-US',
      title: 'My Documentation',
      description: 'This is a VitePress documentation example'
    }
  },
  themeConfig: {
    logo: {
      light: "/images/hy_logo_light.png",
      dark: "/images/hy_logo_dark.png",
    },
    nav: [
      {
        text: '组件库',
        link: '/components/start',
        items: [
          { text: '空状态', link: '/start' },
          { text: '空状态', link: '/empty' },
        ],
      },
      {
        text: 'api',
        link: '/api/index'
      },
      {
        text: '下载软件',
        link: '/download/service'
      },

      // {
      //   text: 'Dropdown Menu',
      //   items: [
      //     { text: 'Item A', link: '/item-1' },
      //     { text: 'Item B', link: '/item-2' },
      //     { text: 'Item C', link: '/item-3' },
      //   ],
      // },

      // ...
    ],
    sidebar: {
      '/components/': [
        {
          text: '开发指南',
          items: [
            { text: '介绍', link: '/components/intro' },
            { text: '快速开始', link: '/components/start' },
            { text: '配置主题', link: '/components/theme' },
            { text: '内置样式', link: '/components/style' },
          ],
        },
        {
          text: '基础组件',
          items: [
            { text: 'Icon 图标', link: '/components/icon' },
            { text: 'Button 按钮', link: '/components/button' },
            { text: 'Cell 单元格', link: '/components/cell' },
            { text: 'Badge 徽标', link: '/components/badge' },
            { text: 'Tag 标签', link: '/components/tag' },
            { text: 'Swiper 轮播图', link: '/components/swiper' }
          ]
        },
        {
          text: '表单组件',
          items: [
            { text: 'Form 表单', link: '/components/form' },
            { text: 'Calendar 日历', link: '/components/calendar' },
            { text: 'Select 下拉框', link: '/components/select' },
            { text: 'Picker 选择器', link: '/components/picker' },
            { text: 'DatetimePicker 时间选择器', link: '/components/datetimePicker' },
            { text: 'AddressPicker 地址选择器', link: '/components/addressPicker' },
            { text: 'Search 搜索', link: '/components/search' },
            { text: 'rate 评分', link: '/components/rate' },
            { text: 'NumberBox 步进器', link: '/components/numberBox' },
            { text: 'Input 输入框', link: '/components/input' },
            { text: 'Textarea 文本域', link: '/components/textarea' },
            { text: 'CheckButton 复选框按钮', link: '/components/checkButton' },
            { text: 'Checkbox 复选框', link: '/components/checkbox' },
            { text: 'Radio 单选框', link: '/components/radio' },
            { text: 'Slider 滑块', link: '/components/slider' },
            { text: 'Switch 开关', link: '/components/switch' },
            { text: 'Upload 上传', link: '/components/upload' },
          ]
        },
        {
          text: "布局组件",
          items: [
            {text: 'List 虚拟列表', link: '/components/list'},
            {text: 'LineProgress 线形进度条', link: '/components/lineProgress'},
            {text: 'ScrollList 横向滚动列表', link: '/components/scrollList'},
            {text: 'Line 线条', link: '/components/line'},
            {text: 'Card 卡片', link: '/components/card'},
            {text: 'Overlay 遮罩层', link: '/components/overlay'},
            {text: 'Grid 宫格布局', link: '/components/grid'},
            {text: 'Waterfall 瀑布流', link: '/components/waterfall'},
            {text: 'Divider 分割线', link: '/components/divider'}
          ]
        },
        {
          text: "反馈组件",
          items: [
            { text: 'Tooltip 长按提示', link: '/components/tooltip' },
            { text: 'ActionSheet 操作菜单', link: '/components/actionSheet' },
            { text: 'Warn 警告提示', link: '/components/warn' },
            { text: 'NoticeBar 滚动通知', link: '/components/noticeBar' },
            { text: 'SwipeAction 滑动单元格', link: '/components/swipeAction' },
            { text: 'FoldingPanel 折叠面板', link: '/components/foldingPanel' },
            { text: 'Popup 弹出层', link: '/components/popup' },
            { text: 'Modal 模态框', link: '/components/modal' }
          ]
        },
        {
          text: "导航组件",
          items: [
            { text: 'Dropdown 下拉菜单', link: '/components/dropdown' },
            { text: 'TabBar 底部导航栏', link: '/components/tabBar' },
            { text: 'BackTop 返回顶部', link: '/components/backTop' },
            { text: 'Navbar 自定义导航栏', link: '/components/navbar' },
            { text: 'Tabs 标签', link: '/components/tabs' },
            { text: 'Subsection 分段器', link: '/components/subsection' },
            { text: 'Steps 步骤条', link: '/components/steps' },
            { text: 'Empty 空状态', link: '/components/empty' }
          ]
        },
        {
          text: "其他组件",
          items: [
            { text: 'Parse 富文本', link: '/components/parse' },
            { text: 'ReadMore 展开阅读更多', link: '/components/readMore' },
            { text: 'Avatar 头像', link: '/components/avatar' },
            { text: 'Transition 动画', link: '/components/transition' },
            { text: 'Qrcode 二维码', link: '/components/qrcode' }
          ]
        },
        {
          text: "业务组件",
          items: [
            { text: 'Login 登录', link: '/components/login' },
            { text: 'Price 金额', link: '/components/price' },
            { text: 'Avatar 头像', link: '/components/avatar' },
            { text: 'Transition 动画', link: '/components/transition' },
            { text: 'Qrcode 二维码', link: '/components/qrcode' }
          ]
        }
      ],
      '/api/': [
        {
          text: '开发指南',
          items: [
            {
              text: '介绍',
              link: '/api/index',
            },
            {
              text: '便捷工具',
              link: '/api/index',
            },
          ]
        },

        {
          text: '网络',
          items: [
            {
              text: 'http请求封装',
              link: '/api/http',
            },
          ]
        },
        {
          text: '工具库',
          items: [
            {
              text: '节流防抖',
              link: '/api/throttle'
            },
            {
              text: 'base64加密解密',
              link: '/api/encrypt'
            },
            {
              text: '递归',
              link: '/api/deepClone'
            },
            {
              text: '清空数据',
              link: '/api/clear'
            },
            {
              text: '字节转换大小',
              link: '/api/bytesToSize'
            },
            {
              text: '时间格式化',
              link: '/api/formatTime'
            },
            {
              text: '本地图片转换base64',
              link: '/api/imgToBase64'
            },
            {
              text: '对象参数转换地址栏参数',
              link: '/api/objectToParams'
            },
            {
              text: '数值转换px单位',
              link: '/api/addUnit'
            }
          ]
        }
      ],
      '/download': [
        {
          text: '免费下载软件',
          items: [
            {
              text: '前端下载软件',
              link: '/download/web',
            },
            {
              text: '服务器下载软件',
              link: '/download/service',
            },
            {
              text: '后端下载软件',
              link: '/download/java',
            }
          ]
        },
      ]
    },
    search: {
      provider: 'local',
      options:{
        translations: {
          button: {
            buttonText: '搜索',
            buttonAriaLabel: '搜索'
          },
          modal: {
            resetButtonTitle: '清除查询条件',
            noResultsText: '没有找到结果',
            footer: {
              selectText: '选择',
              closeText: '关闭',
              navigateText: '导航到结果'
            }
          }
        }
      }
    },
    docFooter: {
      prev: '上一页',
      next: '下一页'
    },
    // aside: false,
    lastUpdated: {
      text: '最后更新',
      formatOptions: {
        dateStyle: 'full',
        timeStyle: 'medium'
      }
    },
    socialLinks: [
      { icon: "github", link: 'https://github.com/gaoxianhua/' },
      { icon: "gitee", link: 'https://gitee.com/gao-xianhua' },
      { icon: "csdn", link: 'https://blog.csdn.net/weixin_68340504?type=blog' }
    ]
  },
  head: [
    ['link', { rel: 'icon', href: '/images/hy_logo_light.png' }]
  ],
  markdown: {
    config: (md) => {
      md.use(footnote);
      md.use(groupIconMdPlugin);
    },
  },
  vite: {
    plugins: [
      groupIconVitePlugin()
    ],
  }
});
