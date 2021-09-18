<template>
  <div>
    <el-container>
      <el-aside>
        <el-input v-model="filterText" placeholder="输入关键字进行过滤" />
        <el-tree
          ref="tree"
          class="filter-tree"
          :data="data"
          :props="defaultProps"
          default-expand-all
          :filter-node-method="filterNode"
        />
      </el-aside>
      <el-main>
        <el-button class="button" type="info" icon="el-icon-edit">编辑</el-button>
        <el-button class="button" type="primary" icon="el-icon-plus">添加</el-button>
        <el-button class="button" type="danger" icon="el-icon-delete">删除</el-button>
        <el-button class="button" type="primary" icon="el-icon-document-copy">复制</el-button>
        <el-button class="button" type="primary" icon="el-icon-upload2">导出</el-button>
        <el-button class="button" type="primary" icon="el-icon-download">导入</el-button>
        <el-button class="button" type="primary" icon="el-icon-document">保存</el-button>
        <el-button class="button" type="danger" icon="el-icon-refresh-left">取消</el-button>
        <el-button class="button" type="primary" icon="el-icon-s-order">操作日志</el-button>
        <el-button class="button" type="primary" icon="el-icon-news">验证BOM</el-button>

        <el-table :data="tableData" style="width: 100%" border>
          <el-table-column type="index" width="50" />
          <el-table-column prop="id" label="BOMID" width="150" />
          <el-table-column prop="type" label="产品型号" width="120" />
          <el-table-column prop="levelIndex" label="层级序号" width="120" />
          <el-table-column prop="levelType" label="层级类型" width="120" />
          <el-table-column prop="componentCode" label="部件编码" width="300" />
          <el-table-column prop="componentName" label="部件名称" width="120" />
          <el-table-column prop="componentType" label="部件类型" width="120" />
          <el-table-column prop="componentTexture" label="部件花色" width="120" />
          <el-table-column prop="edgeSymbol" label="封边符号" width="120" />
          <el-table-column prop="componentDepth" label="部件厚度" width="120" />
          <el-table-column prop="componentWidth" label="部件宽度" width="120" />
          <el-table-column prop="componentHeight" label="部件高度" width="120" />
          <el-table-column prop="number" label="数量" width="120" />
          <el-table-column prop="unit" label="单位" width="120" />
        </el-table>
        <Pagination :total="total" :page.sync="listQuery.currentPage" :limit.sync="listQuery.pageSize" @pagination="fetchData" />
      </el-main>
    </el-container>

    <el-container>
      <el-aside>
        <el-input v-model="filterText" placeholder="输入关键字进行过滤" />
        <el-tree
          ref="tree"
          class="filter-tree"
          :data="data"
          :props="defaultProps"
          default-expand-all
          :filter-node-method="filterNode"
        />
      </el-aside>
      <el-main>
        <el-tabs v-model="activeName" type="card">
          <el-tab-pane label="花色配置" name="first">
            <el-table :data="tableData" style="width: 100%" border>
              <el-table-column type="index" width="50" />
              <el-table-column prop="id" label="BOMID" width="150" />
              <el-table-column prop="type" label="产品型号" width="120" />
              <el-table-column prop="levelIndex" label="层级序号" width="120" />
              <el-table-column prop="levelType" label="层级类型" width="120" />
              <el-table-column prop="componentCode" label="部件编码" width="300" />
              <el-table-column prop="componentName" label="部件名称" width="120" />
              <el-table-column prop="componentType" label="部件类型" width="120" />
              <el-table-column prop="componentTexture" label="部件花色" width="120" />
              <el-table-column prop="edgeSymbol" label="封边符号" width="120" />
              <el-table-column prop="componentDepth" label="部件厚度" width="120" />
              <el-table-column prop="componentWidth" label="部件宽度" width="120" />
              <el-table-column prop="componentHeight" label="部件高度" width="120" />
              <el-table-column prop="number" label="数量" width="120" />
              <el-table-column prop="unit" label="单位" width="120" />
            </el-table>
          </el-tab-pane>
          <el-tab-pane label="机加参数" name="second">
            测试。。。。。。。。
          </el-tab-pane>
        </el-tabs>
      </el-main>
    </el-container>
  </div>
</template>

<script>

import Pagination from '../../components/Pagination'

export default {
  name: 'Form',
  components: { Pagination },
  data() {
    return {
      filterText: '',
      data: [{
        id: 1,
        label: '一级 1',
        children: [{
          id: 4,
          label: '二级 1-1',
          children: [{
            id: 9,
            label: '三级 1-1-1'
          }, {
            id: 10,
            label: '三级 1-1-2'
          }]
        }]
      }, {
        id: 2,
        label: '一级 2',
        children: [{
          id: 5,
          label: '二级 2-1'
        }, {
          id: 6,
          label: '二级 2-2'
        }]
      }, {
        id: 3,
        label: '一级 3',
        children: [{
          id: 7,
          label: '二级 3-1'
        }, {
          id: 8,
          label: '二级 3-2'
        }]
      }],
      defaultProps: {
        children: 'children',
        label: 'label'
      },
      tableData: [{
        id: '1',
        type: '2',
        levelIndex: '2',
        levelType: '类型',
        componentCode: 'NDDD',
        componentName: '上海市',
        componentType: '普陀',
        componentTexture: '花色',
        edgeSymbol: 'ttt',
        componentDepth: '100',
        componentWidth: '100',
        componentHeight: '100',
        number: '100',
        unit: '1'
      }],
      total: 10,
      listQuery: {
        currentPage: 1,
        pageSize: 10
      },
      activeName: 'first'
    }
  },

  watch: {
    filterText(val) {
      this.$refs.tree.filter(val)
    }
  },

  methods: {
    filterNode(value, data) {
      if (!value) return true
      return data.label.indexOf(value) !== -1
    },

    fetchData() {

    }
  }
}
</script>

<style lang="less">
.el-container {
  height: 500px;
  width: 100%;
  border: 1px solid #eee
}

.el-main {
  border: 1px solid #eee
}

.el-aside {
  border: 1px solid #eee
}

.button {
  margin-left: 2px;
  margin-bottom: 8px;
}
</style>
