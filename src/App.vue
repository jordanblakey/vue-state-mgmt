<template>
  <div id="app">
    <div class="container">
      <AddTodo />
      <Todos />
    </div>
  </div>
</template>

<script>
import Todos from './components/Todos'
import AddTodo from './components/AddTodo'

export default {
  name: 'app',
  components: {
    Todos,
    AddTodo
  }
}
</script>

<style lang="less">
body {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: #e8f7f0;
  line-height: 1.4;
  color: #2c3e50;
}

form,
input {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  font-size: 1rem;
}

.container {
  max-width: 960px;
  margin: auto;
  overflow: auto;
  padding: 0 2rem;
}
</style>
