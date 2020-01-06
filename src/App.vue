<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>

    <GitLabProject name ="WarmBot"
                   description="A discord bot for managing reports."
                   repository="https://gitlab.com/Aberrantfox/WarmBot"/>

    <ProjectCard>

    </ProjectCard>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import GitLabProject from "./components/GitLabProject";
import ProjectCard from "@/components/ProjectCard";

export default {
  name: 'app',
  components: {
    ProjectCard,
    HelloWorld,
    GitLabProject
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
