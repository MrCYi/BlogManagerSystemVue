<template>
  <a-card class="search_card">
    <p>查询条件</p>
  </a-card>
  <a-card>
    <a-table
      bordered
      rowKey="id"
      :dataSource="dataSource"
      :columns="columns"
      :row-selection="{
        selectedRowKeys: selectedRowKeys,
        onChange: onSelectChange
      }"
    >
      <template #bodyCell="{ column, record }">
        <template v-if="column.dataIndex === 'avatar'">
          <a-image
            :width="100"
            src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
          />
        </template>
        <template v-else-if="column.dataIndex === 'status'">
          <a-badge
            v-if="record.status === '正常'"
            status="success"
            text="正常"
          />
          <a-badge
            v-else-if="record.status === '冻结'"
            status="error"
            text="冻结"
          />
        </template>
        <template v-else-if="column.dataIndex === 'action'">
          <span>
            <a>查看</a>
            <a-divider type="vertical" />
            <a>修改</a>
            <a-divider type="vertical" />
            <a> 删除 </a>
          </span>
        </template>
      </template>
    </a-table>
  </a-card>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const dataSource = ref([
  {
    id: '100',
    nickName: '胡彦斌',
    avatar: 'https://joeschmoe.io/api/v1/random',
    role: '管理员',
    status: '正常',
    createTime: '2022年11月23日 17:30:00',
    lastTime: '2022年11月23日 17:31:00'
  },
  {
    id: '2',
    nickName: '胡彦斌',
    avatar: 'https://joeschmoe.io/api/v1/random',
    role: '管理员',
    status: '冻结',
    createTime: '2022年11月23日 17:30:00',
    lastTime: '2022年11月23日 17:31:00'
  },
  {
    id: '3',
    nickName: '胡彦斌',
    avatar: 'https://joeschmoe.io/api/v1/random',
    role: '管理员',
    status: '正常',
    createTime: '2022年11月23日 17:30:00',
    lastTime: '2022年11月23日 17:31:00'
  },
  {
    id: '4',
    nickName: '胡彦斌',
    avatar: 'https://joeschmoe.io/api/v1/random',
    role: '管理员',
    status: '正常',
    createTime: '2022年11月23日 17:30:00',
    lastTime: '2022年11月23日 17:31:00'
  },
  {
    id: '5',
    nickName: '胡彦斌',
    avatar: 'https://joeschmoe.io/api/v1/random',
    role: '管理员',
    status: '正常',
    createTime: '2022年11月23日 17:30:00',
    lastTime: '2022年11月23日 17:31:00'
  },
  {
    id: '6',
    nickName: '胡彦斌',
    avatar: 'https://joeschmoe.io/api/v1/random',
    role: '管理员',
    status: '冻结',
    createTime: '2022年11月23日 17:30:00',
    lastTime: '2022年11月23日 17:31:00'
  },
  {
    id: '7',
    nickName: '胡彦斌',
    avatar: 'https://joeschmoe.io/api/v1/random',
    role: '管理员',
    status: '冻结',
    createTime: '2022年11月23日 17:30:00',
    lastTime: '2022年11月23日 17:31:00'
  },
  {
    id: '8',
    nickName: '胡彦斌',
    avatar: 'https://joeschmoe.io/api/v1/random',
    role: '管理员',
    status: '正常',
    createTime: '2022年11月23日 17:30:00',
    lastTime: '2022年11月23日 17:31:00'
  },
  {
    id: '9',
    nickName: '胡彦斌',
    avatar: 'https://joeschmoe.io/api/v1/random',
    role: '管理员',
    status: '正常',
    createTime: '2022年11月23日 17:30:00',
    lastTime: '2022年11月23日 17:31:00'
  },
  {
    id: '10',
    nickName: '胡彦斌',
    avatar: 'https://joeschmoe.io/api/v1/random',
    role: '管理员',
    status: '正常',
    createTime: '2022年11月23日 17:30:00',
    lastTime: '2022年11月23日 17:31:00'
  },
  {
    id: '11',
    nickName: '胡彦斌',
    avatar: 'https://joeschmoe.io/api/v1/random',
    role: '管理员',
    status: '正常',
    createTime: '2022年11月23日 17:30:00',
    lastTime: '2022年11月23日 17:31:00'
  },
  {
    id: '12',
    nickName: '胡彦斌',
    avatar: 'https://joeschmoe.io/api/v1/random',
    role: '管理员',
    status: '正常',
    createTime: '2022年11月23日 17:30:00',
    lastTime: '2022年11月23日 17:31:00'
  }
])

const columns = ref([
  {
    title: 'ID',
    dataIndex: 'id'
  },
  {
    title: '昵称',
    dataIndex: 'nickName'
  },
  {
    title: '头像',
    dataIndex: 'avatar'
  },
  {
    title: '角色',
    dataIndex: 'role'
  },
  {
    title: '状态',
    dataIndex: 'status'
  },
  {
    title: '创建时间',
    dataIndex: 'createTime'
  },
  {
    title: '最后登录时间',
    dataIndex: 'lastTime'
  },
  {
    title: '操作',
    dataIndex: 'action'
  }
])
const selectedRowKeys = ref<Array<string>>([])

const onSelectChange = (keys: string[]) => {
  console.log('selectedRowKeys changed: ', keys)
  selectedRowKeys.value = keys
}
</script>

<style scoped lang="less">
.search_card {
  margin-bottom: 20px;
}
</style>
