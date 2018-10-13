<template>
  <div id="app">
    <div>
      <h2>タスク一覧</h2>
      <li v-for="task in tasks" v-bind:key="task.id">
        <input type="checkbox" v-bind:checked="task.done">
        {{ task.name }}
      </li>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    tasks () {
      return this.$store.state.tasks // ストアを読む
    }
  }
}
</script>
