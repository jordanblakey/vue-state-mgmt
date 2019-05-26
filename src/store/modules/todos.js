// Todos Vuex Module
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
    await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
    commit('deleteTodo', id)
  },

  async filterTodos({ commit }, event) {
    // Get selected number
    const limit = parseInt(
      event.target.options[event.target.options.selectedIndex].innerText
    )
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/todos/?_limit=${limit}`
    )
    commit('setTodos', response.data)
  },

  async updateTodo({ commit }, updatedTodo) {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/todos/${updatedTodo.id}`
    )
    commit('updateTodo', updatedTodo)
  }
}

const mutations = {
  // update state.todos array with fetched array of objects
  setTodos: (state, todos) => (state.todos = todos),
  addTodo: (state, todo) => state.todos.unshift(todo),
  deleteTodo: (state, id) => {
    state.todos = state.todos.filter(todo => todo.id !== id)
  },
  updateTodo: (state, updatedTodo) => {
    const index = state.todos.findIndex(todo => todo.id === updatedTodo.id)
    if (index !== -1) {
      state.todos.splice(index, 1, updatedTodo)
    }
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
