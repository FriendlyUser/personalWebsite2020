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
    <h3 class="subtitle"> About this website </h3>
    I could be convinced to open source this website, but probably not at the moment.
      <!-- <iframe class="dialogflow" width="350" height="430" allow="microphone;" src="https://console.dialogflow.com/api-client/demo/embedded/c39aa5e3-2bab-49a5-a4de-b4bf580289f4"></iframe> -->
  </div>
  <br />
  <Timeline />
  <ContactMe />
</Layout>
</template>

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
    Header
  },
  created: function() {
  },
}
</script>

<style>
.other-skills-icons:before {
  font-size: 6rem !important;
}
.dialogflow {
  height: 400px;
  width: 450px;
}
</style>>
