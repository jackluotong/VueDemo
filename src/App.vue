<template>
  <div id="app">
    <h1>Welcome to my page.</h1>
    <hr />
    <a-button type="primary"
              @click="click">
      Primary
    </a-button>
    <hr />
    <router-link to='/HelloWorld'>欢迎</router-link>
    <router-link to='/Tableone'>表格1</router-link>
    <router-link to='/Tabletwo'>表格2</router-link>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
  methods: {
    click () {
      alert(12)
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
