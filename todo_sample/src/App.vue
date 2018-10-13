<template>
  <div id="app">
    <div>
      <h2>タスク一覧</h2>
      <li v-for="task in tasks" v-bind:key="task.id">
        <input type="checkbox" v-bind:checked="task.done" v-on:change="toggleTaskStatus(task)">
        {{ task.name }}
      </li>
      <form v-on:submit.prevent="addTask">
        <input type="text" v-model="newTaskName" placeholder="新しいタスクを入力してください。">
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      // 入力中の新しいタスク名を一時的に保持
      // また、この部分はnewTaskNameの初期値でもある。
      newTaskName: ''
    }
  },
  methods: {
    // タスクを追加
    addTask () {
      // `addTask`ミューテーションをコミット つまり、storeのaddTaskミューテーションを実行
      this.$store.commit('addTask', {
        name: this.newTaskName
      })
      // storeすると、初期値に戻す。
      this.newTaskName = ''
    },
    // taskの完了状態の更新
    toggleTaskStatus (task) {
      // `toggleTaskStatus`ミューテーションをコミット
      this.$store.commit('toggleTaskStatus', {
        // storeの`toggleTaskStatus`の第二引数は{id}なので、この形で指定する。
        id: task.id
      })
    }
  },
  computed: {
    tasks () {
      return this.$store.state.tasks // ストアを読む
    }
  }
}
</script>
