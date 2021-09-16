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
    path: '/form-table',
    name: 'FormTable',
    component: Layout,
    redirect: '/form-table/table-classic',
    meta: {
      title: '表格&表单',
      icon: 'vue-dsn-icon-biaoge'
    },
    children: [
      {
        path: 'table-classic',
        name: 'TableClassic',
        component: () => import('../views/form-table/TableClassic'),
        meta: {
          title: '综合表格'
        }
      },
      {
        path: 'form-list',
        name: 'FormList',
        component: () => import('../views/form-table/FormList'),
        meta: {
          title: '表单列表'
        }
      },
      {
        path: 'table-inline-edit',
        name: 'TableInlineEdit',
        component: () => import('../views/form-table/TableInlineEdit'),
        meta: {
          title: '行内编辑表格'
        }
      }
    ]
  },
  {
    path: '/tree',
    name: 'Tree',
    component: Layout,
    redirect: '/tree/org-tree',
    meta: {
      title: '树形结构',
      icon: 'vue-dsn-icon-shuxing'
    },
    children: [
      {
        path: 'org-tree',
        name: 'OrgTree',
        component: () => import('../views/tree/OrgTree'),
        meta: {
          title: '组织树'
        }
      },
      {
        path: 'ele-tree',
        name: 'EleTree',
        component: () => import('../views/tree/EleTree'),
        meta: {
          title: '控件树'
        }
      }
    ]
  },
  {
    path: '/excel',
    name: 'Excel',
    component: Layout,
    redirect: '/excel/export-excel',
    meta: {
      title: 'Excel',
      icon: 'vue-dsn-icon-excel'
    },
    children: [
      {
        path: 'export-excel',
        name: 'ExportExcel',
        component: () => import('../views/excel/ExportExcel'),
        meta: {
          title: '导出Excel'
        }
      },
      {
        path: 'import-excel',
        name: 'ImportExcel',
        component: () => import('../views/excel/ImportExcel'),
        meta: {
          title: '导入Excel'
        }
      }
    ]
  }
]
