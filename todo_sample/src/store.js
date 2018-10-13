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
        labelIds: [1, 3],
        done: false
      },
      {
        id: 2,
        name: 'Vue.jsの本を買う。',
        labelIds: [1, 2],
        done: false
      },
      {
        id: 3,
        name: 'Vueを勉強する。',
        labelIds: [2, 3],
        done: false
      }
    ],
    labels: [
      {
        id: 1,
        text: '買い物'
      },
      {
        id: 2,
        text: '宿題'
      },
      {
        id: 3,
        text: '家事'
      }
    ],
    nextTaskId: 4,
    nextLabelId: 4
  },

  // mutation
  mutations: {
    // タスクの追加
    addTask (state, { name, labelIds }) {
      state.tasks.push({
        id: state.nextTaskId,
        labelIds,
        name,
        done: false
      })
      // 次に追加するタスクに付与するIDを更新する
      state.nextTaskId++
    },

    // ラベルの追加
    addLabel (state, { text }) {
      state.labels.push({
        id: state.nextLabelId,
        text
      })
      // 次に追加するラベルに付与するIDを更新する
      state.nextLabelId++
    },

    // 完了->未完了, 未完了->完了にするメソッド
    toggleTaskStatus (state, { id }) {
      // filterメソッド: コールバック関数で指定された条件を満たす配列の要素を返します。
      // つまり、stateのtasksのidを引っ張ってきて、それが、taskのidと一致しているかどうかを考える。
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
