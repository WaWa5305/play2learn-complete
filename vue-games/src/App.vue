<template>
  <div id="app">
    <TestComponent /> <!-- Render TestComponent here -->
    <router-view/> <!-- Vue Router view for route components -->
  </div>
</template>

<script>
import TestComponent from './components/TestComponent.vue'; // Import the new component

export default {
  name: 'App',
  components: {
    TestComponent // Register the new component
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
