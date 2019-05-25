import axios from 'axios'

const state = {
  // The keys and values for this modules to update the store with
  todos: []
}

const getters = {
  // Accessed by the component with mapGetters
  allTodos: state => state.todos
}

const actions = {
  // make request
  async fetchTodos({ commit }) {
    // wait for response
    const response = await axios.get(
      'https://jsonplaceholder.typicode.com/todos'
    )
    // pass response payload to mutation setTodos
    commit('setTodos', response.data)
  },

  async addTodo({ commit }, title) {
    const response = await axios.post(
      'https://jsonplaceholder.typicode.com/todos',
      { title, completed: false }
    )
    commit('addTodo', response.data)
  },

  async deleteTodo({ commit }, id) {
    await axios.delete('https://jsonplaceholder.typicode.com/todos/' + id)
    commit('deleteTodo', id)
  }
}

const mutations = {
  // update state.todos array with fetched array of objects
  setTodos: (state, todos) => (state.todos = todos),
  addTodo: (state, todo) => state.todos.unshift(todo),
  deleteTodo: (state, id) => {
    state.todos = state.todos.filter(todo => todo.id !== id)
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
