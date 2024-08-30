<template>
  <div class="sidebar">
    <div class="sidebar-item">个人</div>
    <button @click="navigateTo('home')">主页</button>
    <button @click="navigateTo('profile')">个人信息</button>

    <div class="sidebar-item">员工</div>
    <button @click="toggleEmployeeMenu" :class="{ 'active': employeeMenuVisible }">员工管理</button>
    <div v-if="employeeMenuVisible" class="submenu">
      <button @click="navigateTo('active-employees')">在职员工管理</button>
      <button @click="navigateTo('former-employees')">离职员工管理</button>
      <button @click="navigateTo('employee-archives')">员工档案管理</button>
      <button @click="navigateTo('employee-transfers')">员工调动记录</button>
    </div>
    <button @click="navigateTo('attendance-management')">考勤管理</button>
    <button @click="navigateTo('leave-management')">请假管理</button>

    <div class="sidebar-item">部门</div>
    <button @click="navigateTo('department-management')">部门管理</button>
  </div>
</template>

<script>
export default {
  name: 'MySidebar',
  data() {
    return {
      employeeMenuVisible: false,
    };
  },
  methods: {
    toggleEmployeeMenu() {
      this.employeeMenuVisible = !this.employeeMenuVisible;
    },
    navigateTo(routeName) {
      this.$router.push({ name: routeName });
    },
  },
};
</script>

<style scoped>
.sidebar {
  width: 200px;
  background-color: #1d2b36;
  color: white;
  padding: 10px;
  display: flex;
  flex-direction: column;
}

.sidebar-item {
  margin-top: 10px;
  font-weight: bold;
  color: #5c777b;
}

.sidebar button {
  margin: 5px 0;
  padding: 10px;
  background-color: #1d2b36;
  color: white;
  border: none;
  cursor: pointer;
  text-align: left;
  position: relative; /* Add this to position the pseudo-element */
}

.sidebar button:hover {
  background-color: #141e27;
}

.submenu {
  margin-left: 10px;
  display: flex;
  flex-direction: column;
}

.submenu button {
  background-color: #2c3e50;
  margin: 2px 0;
}

.submenu button:hover {
  background-color: #1a252f;
}

/* Add this class for the active state */
.active::after {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 3px;
  background-color: #42b983; /* Change this to your desired blue color */
}
</style>