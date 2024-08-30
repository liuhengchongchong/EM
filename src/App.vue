<template>
  <div id="app">
    <Toolbar />
    <div class="main-layout">
      <Sidebar />
      <div class="content-layout">
        <Content />
      </div>
    </div>
    <Pagination />
  </div>
</template>

<script>
import Toolbar from './components/Toolbar.vue';
import Sidebar from './components/Sidebar.vue';
import Content from './components/Content.vue';
import Pagination from './components/Pagination.vue';

export default {
  name: 'App',
  components: {
    Toolbar,
    Sidebar,
    Content,
    Pagination,
  }
}
</script>

<style>
#app {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.main-layout {
  display: flex;
  flex: 1;
}

.content-layout {
  flex: 1;
  overflow-y: auto;
  padding: 20px;
}
</style>