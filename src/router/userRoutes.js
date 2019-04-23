import Main from '@/views/Main'

let userRoutes = [{
  path: '/',
  name: 'Main',
  title: "",
  meta: {
    role: 'user'
  },
  component: Main,
  children: [{
    path: '/log',
    name: ' Log',
    title: "日志",
    component: () => import('@/views/common/log/Log.vue')
  }]
}, {
  path: '/',
  name: 'Main',
  title: "项目",
  meta: {
    role: 'user'
  },
  component: Main,
  children: [{
    path: '/project_admin',
    name: ' ProjectAdmin',
    title: "项目管理",
    component: () => import('@/views/common/project/ProjectAdmin.vue')
  }, {
    path: '/project_upgrade',
    name: ' ProjectUpgrade',
    title: "项目升级",
    component: () => import('@/views/common/project/ProjectUpgrade.vue')
  }]
}, {
  path: '/',
  name: 'Main',
  title: "文件",
  meta: {
    role: 'user'
  },
  component: Main,
  children: [{
    path: '/file_admin',
    name: ' FileAdmin',
    title: "文件",
    component: () => import('@/views/common/file/FileAdmin.vue')
  }]
}]

export default userRoutes
