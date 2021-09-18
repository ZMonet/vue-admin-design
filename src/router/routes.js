import Layout from '../layout'

/**
 * hidden: true                  如果设置为 true，该项菜单将不会显示在菜单栏中(默认为 false)
 * meta : {
    title: 'title'               菜单名
    icon: 'icon-name'            图标名
    fixed: true                  如果设置为 true，该项 tag 将一直存在 tag 栏中(默认为 false)
  }
 * */

export const asyncRoutes = [
  {
    path: '/user',
    name: 'User',
    component: Layout,
    redirect: '/user/role-manage',
    meta: {
      title: '用户角色管理',
      icon: 'vue-dsn-icon-bianjiqi'
    },
    children: [
      {
        path: 'role-manage',
        name: 'roleManage',
        component: () => import('../views/userManage/FormList'),
        meta: {
          title: '角色管理'
        }
      },
      {
        path: 'user-manage',
        name: 'userManage',
        component: () => import('../views/userManage/FormList'),
        meta: {
          title: '用户管理'
        }
      }
    ]
  },
  {
    path: '/task',
    name: 'Task',
    component: Layout,
    redirect: '/task/list',
    meta: {
      title: '任务查询',
      icon: 'vue-dsn-icon-biaoge'
    },
    children: [
      {
        path: 'list',
        name: 'TaskList',
        component: () => import('../views/taskList/FormList'),
        meta: {
          title: '任务队列'
        }
      },
      {
        path: 'order-bom',
        name: 'orderBom',
        component: () => import('../views/taskList/FormList'),
        meta: {
          title: '订单BOM'
        }
      }
    ]
  },
  {
    path: '/special-bom',
    name: 'specialBom',
    component: Layout,
    redirect: '/special-bom/door-leaf',
    meta: {
      title: '特殊BOM管理',
      icon: 'vue-dsn-icon-biaoge'
    },
    children: [
      {
        path: 'door-leaf',
        name: 'doorLeaf',
        component: () => import('../views/specialBomManage/SpecialDoorLeaf'),
        meta: {
          title: '特殊门扇BOM配置'
        }
      },
      {
        path: 'door-pocket',
        name: 'doorPocket',
        component: () => import('../views/specialBomManage/SpecialDoorLeaf'),
        meta: {
          title: '特殊门套BOM配置'
        }
      }
    ]
  }
]
