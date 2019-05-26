<template>
  <div>
    <h3>Todos</h3>
    <div class="legend">
      <span>Double-click to mark as complete</span>
      <span><span class="incomplete-box"></span> = Incomplete</span>
      <span><span class="complete-box"></span> = Complete</span>
    </div>
    <div class="todos">
      <div
        class="todo"
        v-bind:class="{ 'is-complete': todo.completed }"
        v-for="todo in allTodos"
        :key="todo.id"
        @dblclick="onDblClick(todo)"
      >
        {{ todo.title }}
        <i class="fas fa-trash-alt" @click="deleteTodo(todo.id)"></i>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'Todos',
  methods: {
    ...mapActions(['fetchTodos', 'deleteTodo', 'updateTodo']),
    onDblClick(todo) {
      const updatedTodo = {
        id: todo.id,
        title: todo.title,
        completed: !todo.completed
      }
      this.updateTodo(updatedTodo)
    }
  },
  computed: mapGetters(['allTodos']),
  created() {
    this.fetchTodos()
  }
}
</script>

<style scoped lang="less">
.legend {
  margin-bottom: 20px;

  .complete-box {
    display: inline-block;
    width: 10px;
    height: 10px;
    background: #35495e;
    margin-left: 20px;
  }

  .incomplete-box {
    display: inline-block;
    width: 10px;
    height: 10px;
    background: #41b883;
    margin-left: 20px;
  }
}

.todos {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
  @media screen and (max-width: 500px) {
    grid-template-columns: 1fr;
  }

  .todo {
    background: #41b883;
    padding: 1rem;
    border-radius: 5px;
    text-align: center;
    position: relative;
    cursor: pointer;
    &.is-complete {
      background: #35495e;
      color: #fff;
    }
  }

  i {
    position: absolute;
    bottom: 10px;
    right: 10px;
    color: #fff;
    cursor: pointer;
  }

  .legend {
    display: flex;
    justify-content: space-around;
    margin-bottom: 1rem;
  }
}
</style>
