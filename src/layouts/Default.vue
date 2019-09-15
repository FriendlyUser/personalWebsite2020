<template>
<div>
<Navbar />

<br />

<GithubList />
</div>
</template>

<script>
import Navbar from '~/components/Navbar'
import GithubList from '~/components/GithubList'
export default {
  components: {
    Navbar,
    GithubList
  }
}
</script>

<style scoped>
</style>