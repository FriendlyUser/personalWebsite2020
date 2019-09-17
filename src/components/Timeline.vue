<template>
<div class="container">
  <h1 class="title">Work Experience and Education</h1>
  <h2 class="subtitle">Notable Work History</h2>
  <div class="columns" v-for="job in experience" v-bind:key="job.name">
    <div class="column is-two-thirds">
      <h4 class='title is-4'> {{ job.company }} </h4>
      <h5 class='subtitle is-5'> {{ job.title }} </h5>
      <p>
        {{ job.description }}
        asdasd
      </p>
    </div>
    <div class="column is-one-thirds">
      <span class="text-primary">{{ job.date }}</span>  
    </div>
  </div>
</div>
</template>

<script>
import experience from '@/data/experience.yaml'
export default {
  data() {
    // eventually get it parsing local json and yaml files
    return {
      experience
    }
  }
}
</script>