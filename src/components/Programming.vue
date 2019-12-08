<template>
<div class="container skills-bg">
  <Header headerName="Technical Skills" linkValue="skills" subHeader="List Not Comprehensive" />
  <div class="columns is-multiline is-centered" id='skills-cards'>
    <div class="column is-narrow is-flex-desktop" v-for="skill in skills" v-bind:key="skill.name" data-aos="flip-down" data-aos-duration="1500">
      <div class="card skill-card">
        <header class="card-header">
          <p class="card-header-title">
            <b-taglist attached class="is-large shift-to-right">
              <b-tag> <b-icon v-bind:icon="skill.icon"  v-bind:pack="skills.pack ? skills.pack : 'mdi'" size="is-medium" v-bind:type="skill.iconType || 'is-success'"/> </b-tag>
              <b-tag v-bind:type="skill.tagType || 'is-success'">{{ skill.name }}</b-tag>
            </b-taglist>
          </p>
        </header>
        <div class="card-content" data-aos="flip-up">
          <div class="content">
             <b>Skill: </b>
             <b-icon v-for="index in 5" :key="index"
              v-bind:icon="starsClass(skill.stars, index)"
              size="is-small">
            </b-icon>
            <p>{{skill.description}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import skills from '@/data/skills.yaml'
import Header from '~/components/Header.vue'
export default {
  components: {
    Header
  },
  data() {
    // eventually get it parsing local json and yaml files
    return {
      skills
    }
  },
  methods: {
    starsClass: function(numStars, index) {
        return index <= numStars ? 'star' : 'star-outline';
    }
  },
  computed: {
   
  }
}
</script>

<style>
.skills-bg {
  background-image: linear-gradient(141deg, 
    rgba(	159, 184, 173, 0.4) 0%,
      rgba(31, 200, 219, 0.45) 51%,
      rgba(	44, 181, 232, 0.5) 75%);
}

.skill-card {
  width: 250px;
  height: 225px;
  margin: auto;
}


/* Position tags fancy */
div#skills-cards > div:nth-child(4n + 1) > div.skill-card > header > p > div.shift-to-right {
  position: absolute;
  left: -40px;
  top: 2px;
}

div#skills-cards > div:nth-child(4n) > div.skill-card > header > p > div.shift-to-right,
div#skills-cards > div:last-child > div.skill-card > header > p > div.shift-to-right {
  position: absolute;
  right: -60px;
  top: 2px;
}

div#skills-cards > div:nth-child(4n+2) > div.skill-card > header > p {
  justify-content: center;
}

div#skills-cards > div:nth-child(4n+3) > div.skill-card > header > p {
  justify-content: center;
}


@media only screen and (max-width: 768px) {
  div#skills-cards > div > div.skill-card > header > p > div.shift-to-right { 
    position: absolute;
    left: -40px;
    top: 2px; 
  }
}

/* 3 columns */
@media only screen and (min-width: 768px) and (max-width: 1024px) {
  div#skills-cards > div:nth-child(3n+1) > div.skill-card > header > p > div.shift-to-right {
    position: absolute;
    left: -40px;
    top: 2px;
  }
  div#skills-cards > div:nth-child(3n+2) > div.skill-card > header > p > div.shift-to-right {
    position: relative;
    margin: auto;
    left: 0;
    right: 0;
    display: grid;
  }
  div#skills-cards > div:nth-child(3n+3) > div.skill-card > header > p > div.shift-to-right {
    position: absolute;
    right: -50px;
    left: inherit;
  }
}

</style>