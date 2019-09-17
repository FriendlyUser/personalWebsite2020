<template>
<Layout title="David Li Portfolio">
  <br />
  <br />
  <Skills />
  <br />
  <div class="container">
    <h1 class="title">Projects</h1>
    <h2 class="subtitle">Notable Github Projects</h2>
  </div>
  <hr />
  <GithubList />
  <br />
  <div class="container">
    <h3 class="subtitle"> About this website </h3>
    I could be convinced to open source this website, but probably not at the moment.
    asdassd
  </div>
  <br />
  <Timeline />
</Layout>
</template>

<script>
import GithubList from '~/components/GithubList'
import Skills from '~/components/Skills'
import Timeline from '~/components/Timeline'
import Layout from '~/layouts/Default.vue'
export default {
  components: {
    Layout,
    GithubList,
    Skills,
    Timeline
  }
}
</script>

<style>
</style>