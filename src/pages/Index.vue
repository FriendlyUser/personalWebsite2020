<template>
<Layout title="David Li Portfolio">
  <Programming />
  <br />
  <br />
  <br />
  <div class="container" style='min-height: 50rem;'>
    <h2 class="subtitle">Other Skills</h2>
    <Header headerName="Personality" linkValue="personal" subHeader="Key Attributes" right/>
    <OtherSkills />
  </div>
  <div class="container">
    <h1 class="title"><a id="projects">Projects</a></h1>
    <h2 class="subtitle">Notable Github Projects</h2>
  </div>
  <hr />
  <GithubList />
  <br />
  <div class="container">
    <h1 class="title"> Blog </h1>
    <h3 class="subtitle"> About this website </h3>
    I could be convinced to open source this website, but probably not at the moment.
    <div class="section">
      <div class="columns">
        <PostList v-for="edge in $page.allPost.edges" :key="edge.node.id" :post="edge.node" />
      </div>
    </div>
  </div>
  <br />
  <Timeline />
  <ContactMe />
</Layout>
</template>

<page-query>
query {
  allPost(sortBy: "date", order: DESC) {
    edges {
      node {
        id
        title
        timeToRead
        path
        description
      }
    }
  }
}
</page-query>

<script>
import GithubList from '~/components/GithubList'
import Programming from '~/components/Programming'
import Timeline from '~/components/Timeline'
import Layout from '~/layouts/Default.vue'
import ContactMe from '~/components/ContactMe'
import AnimatedTitle from '~/components/AnimatedTitle'
import RightRibbonHeader from '~/components/RightRibbonHeader'
import Header from '~/components/Header'
import OtherSkills from '~/components/OtherSkills'
import PostList from '~/components/PostList'
export default {
  components: {
    Layout,
    GithubList,
    Programming,
    OtherSkills,
    Timeline,
    ContactMe,
    AnimatedTitle,
    RightRibbonHeader,
    Header,
    PostList
  },
  created: function() {
  },
}
</script>

<style>
.dialogflow {
  height: 400px;
  width: 450px;
}
</style>>
