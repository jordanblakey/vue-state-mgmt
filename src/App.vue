<template>
  <div id="app">
    <div class="container">
      <Todos />
    </div>
  </div>
</template>

<script>
import Todos from './components/Todos.vue'

export default {
  name: 'app',
  components: {
    Todos
  }
}
</script>

<style>
body {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: #e8f7f0;
  line-height: 1.4;
  color: #2c3e50;
  margin-top: 60px;
}

.container {
  max-width: 960px;
  margin: auto;
  overflow: auto;
  padding: 0 2rem;
}
</style>
