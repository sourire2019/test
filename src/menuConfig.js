// 菜单配置
// headerMenuConfig：头部导航配置
// asideMenuConfig：侧边导航配置

const asideMenuConfig = [
  {
    name: '文件',
    path: '/',
    icon: 'home',
    children: [
      {
        name: '新建',
        path: '/',
      },
      {
        name: '打开',
        path: '/system/surgery2',
      },
      {
        name: '保存',
        path: '/system/doctor3',
      },
    ],
  },
  {
    name: '编辑',
    path: '/system',
    icon: 'home',
    children: [
      {
        name: '撤销',
        path: '/system/business4',
      },
      {
        name: '重做',
        path: '/system/surgery5',
      },
      {
        name: '查找',
        path: '/system/doctor6',
      },
      {
        name: '替换',
        path: '/system/doctor7',
      },
      {
        name: '格式化',
        path: '/system/doctor8',
      },
    ],
    closable: false,
  },
  {
    name: 'Nav4',
    path: '/page4',
    icon: 'home',
  },
];

const headerMenuConfig = asideMenuConfig;

export default headerMenuConfig;
