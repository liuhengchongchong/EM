<template>
  <div class="content">
    <!-- 搜索栏 -->
    <input type="text" class="search-bar" placeholder="输入查找的员工姓名..." v-model="searchQuery" />

    <!-- 员工名单表格 -->
    <div class="employee-table">
      <table>
        <thead>
          <tr>
            <th>序号</th>
            <th>工号</th>
            <th>姓名</th>
            <th>性别</th>
            <th>电话</th>
            <th>部门名称</th>
            <th>职称</th>
            <th>入职时间</th>
            <th>离休时间</th>
            <th>类别</th>
            <th>管理</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(employee, index) in filteredEmployees" :key="employee.id">
            <td>{{ index + 1 }}</td>
            <td>{{ employee.id }}</td>
            <td>{{ employee.name }}</td>
            <td>{{ employee.gender }}</td>
            <td>{{ employee.phone }}</td>
            <td>{{ employee.department }}</td>
            <td>{{ employee.title }}</td>
            <td>{{ employee.startDate }}</td>
            <td>{{ employee.retirementDate || '未离休' }}</td>
            <td>{{ employee.status }}</td>
            <td><button @click="viewEmployee(employee.id)">查看</button></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MyContent',
  data() {
    return {
      searchQuery: '',
      employees: [
        { id: '1001', name: 'admin', gender: '男', phone: '15678015439', department: '人事部总部', title: '副经理', startDate: '2022-07-07', retirementDate: null, status: '在职' },
        { id: '1002', name: '王秀英', gender: '女', phone: '15590678821', department: '行政部', title: '普通员工', startDate: '2022-07-07', retirementDate: '2022-07-07', status: '离职' },
        { id: '1003', name: '李强', gender: '男', phone: '18929778634', department: '财务部', title: '总经理', startDate: '2022-07-07', retirementDate: '2022-07-07', status: '退休' },
        { id: '1004', name: '刘洋', gender: '男', phone: '13807987324', department: '质量管理部', title: '副主任', startDate: '2009-12-23', retirementDate: '2022-07-07', status: '退休' },
        { id: '1005', name: '李敏', gender: '女', phone: '13791826142', department: '生产技术部', title: '普通员工', startDate: '2010-03-29', retirementDate: '2017-07-05', status: '退休' },
        { id: '1006', name: '王伟', gender: '女', phone: '13986207926', department: '营运部', title: '副主任', startDate: '2010-10-12', retirementDate: '2017-07-06', status: '离职' },
        { id: '1007', name: '李烨', gender: '女', phone: '18907327612', department: '人事部总部', title: '组长', startDate: '2017-01-10', retirementDate: null, status: '在职' },
        { id: '1008', name: '刘旭亮', gender: '男', phone: '13464238971', department: '物料部', title: '经理', startDate: '2017-06-28', retirementDate: null, status: '在职' },
        { id: '1009', name: '张彤', gender: '男', phone: '15810239904', department: '物料部', title: '组长', startDate: '2017-02-06', retirementDate: null, status: '在职' },
        { id: '1010', name: '杨杰', gender: '男', phone: '17871239756', department: '后勤部', title: '组长', startDate: '2017-05-12', retirementDate: null, status: '在职' },
      ]
    };
  },
  computed: {
    filteredEmployees() {
      return this.employees.filter((employee) => {
        return this.searchQuery ? employee.name.includes(this.searchQuery) : true;
      });
    }
  },
  methods: {
    viewEmployee(id) {
      console.log('查看员工:', id);
      // 这里可以添加路由跳转或其他逻辑
    }
  }
}
</script>

<style scoped>
.content {
  padding: 20px;
  background-color: #ecf0f1;
}

.search-bar {
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.employee-table table {
  width: 100%;
  border-collapse: collapse;
  display: block;
  overflow: auto;
  white-space: nowrap;
}

.employee-table th,
.employee-table td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
}

.employee-table th {
  background-color: #2c3e50;
  color: white;
}

.employee-table tr:nth-child(even) {
  background-color: #f2f2f2;
}

.employee-table button {
  padding: 5px 10px;
  background-color: #3498db;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.employee-table button:hover {
  background-color: #2980b9;
}
</style>