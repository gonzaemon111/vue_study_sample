import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// ストアの定義

const store = new Vuex.Store({
  // ここに実装を書いていく。

  // state
  state: {
    tasks: [
      {
        id: 1,
        name: '牛乳を買う',
        done: false
      },
      {
        id: 2,
        name: 'Vue.jsの本を買う。',
        done: false
      }
    ],
    nextTaskId: 3,
  },

  // mutation
  mutations: {
    addTask (state, { name }) {
      state.tasks.push({
        id: state.nextTaskId,
        name,
        done: false
      })

      // 次に追加するタスクに付与するIDを更新する
    },
    toggleTaskStatus (state, { id }) {
      // filterメソッド: コールバック関数で指定された条件を満たす配列の要素を返します。
      const filtered = state.tasks.filter(task => {
        return task.id === id
      })
      // forEachメソッド: 配列の各要素に対して、指定された処理を実行します。
      // 今回の場合、checkboxにチェックをした場合、task.doneのbooleanをtrueとfalseを入れ替える。
      filtered.forEach(task => {
        task.done = !task.done
      })
    }
  }
})

// storeをexportする。
export default store
