<template>
<div class="container">
  <h1 class="title"><a id="work">Work Experience and Education</a></h1>
  <h2 class="subtitle">Notable Work History</h2>
  <div class="columns" v-for="job in experience" v-bind:key="job.name" data-aos="fade">
    <div class="column is-two-thirds">
      <h4 class='title is-4' data-aos="flip-left"> {{ job.company }} </h4>
      <h5 class='subtitle is-5' data-aos="flip-right"> {{ job.title }} </h5>
      <p>
        {{ job.description }}
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