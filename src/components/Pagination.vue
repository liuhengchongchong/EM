<template>
  <div class="pagination">
    <button @click="prevPage">上一页</button>
    <span>{{ currentPage }} / {{ totalPages }}</span>
    <button @click="nextPage">下一页</button>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Pagination',
  data() {
    return {
      currentPage: 1,  // 当前页码
      totalPages: 10   // 总页数（可以根据实际情况动态设置）
    };
  },
  methods: {
    prevPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
        console.log(`当前页: ${this.currentPage}`);
      }
    },
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
        console.log(`当前页: ${this.currentPage}`);
      }
    }
  }
}
</script>

<style>
.pagination {
  height: 50px;
  background-color: #bdc3c7;
  display: flex;
  justify-content: center;
  align-items: center;
}

.pagination button {
  margin: 0 10px;
  padding: 10px 20px;
  background-color: #3498db;
  color: white;
  border: none;
  cursor: pointer;
}

.pagination button:hover {
  background-color: #2980b9;
}

.pagination span {
  margin: 0 10px;
  font-weight: bold;
}
</style>