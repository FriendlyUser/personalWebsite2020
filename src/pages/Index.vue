<template>
<Layout title="David Li Portfolio">
  <Skills />
  <br />
  <br />
  <br />
  <div class="container">
    <h2 class="subtitle">Other Skills</h2>
    <div class="columns is-centered">
      <div class="column" />
      <div class="column is-one-quarter">
        <b-icon
          v-bind:style="{width: '100%'}"
          icon="cogs"
          custom-class="other-skills-icons"
          size="is-large">
        </b-icon>
        <h3 v-bind:style="{fontSize: '1.2rem', textAlign: 'center', width: '100%'}"> Troubleshooting </h3>
        <p>
          Skilled at solving technical issues and finding the root causes.
        </p>
      </div>
      <div class="column is-one-quarter">
        <b-icon 
          icon="book"
          v-bind:style="{width: '100%'}"
          custom-class="other-skills-icons"
          size="is-large">
        </b-icon>
        <h3 v-bind:style="{fontSize: '1.2rem', textAlign: 'center', width: '100%'}"> Learning </h3>
        <p>
          Committed to being a lifelong learner and having an entrepreneuring spirit.
        </p>
      </div>
      <div class="column is-one-quarter">
        <b-icon 
          icon="desktop-classic"
          v-bind:style="{width: '100%'}"
          custom-class="other-skills-icons"
          size="is-large">
        </b-icon>
        <h3 v-bind:style="{textAlign: 'center', width: '100%'}"> Coding </h3>
        <p>Passionate about software development and learning about more programming languages.</p>
      </div>
      <div class="column" />
    </div>
  </div>
  <div class="container">
    <h1 class="title"><a id="projects">Projects</a></h1>
    <h2 class="subtitle">Notable Github Projects</h2>
  </div>
  <hr />
  <GithubList />
  <br />
  <div class="container">
    <h3 class="subtitle"> About this website </h3>
    I could be convinced to open source this website, but probably not at the moment.
  </div>
  <br />
  <Timeline />
  <ContactMe />
</Layout>
</template>

<script>
import GithubList from '~/components/GithubList'
import Skills from '~/components/Skills'
import Timeline from '~/components/Timeline'
import Layout from '~/layouts/Default.vue'
import ContactMe from '~/components/ContactMe'
import AnimatedTitle from '~/components/AnimatedTitle'
export default {
  components: {
    Layout,
    GithubList,
    Skills,
    Timeline,
    ContactMe,
    AnimatedTitle
  },
  created: function() {
    window.botpressWebChat.init({
      host: 'https://lit-beach-86646.herokuapp.com/',
      botId: 'smalltalk'
    })
  },
}
</script>

<style>
.other-skills-icons:before {
  font-size: 6rem !important;
}
</style>>
