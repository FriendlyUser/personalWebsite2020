<template>
<div class="container">
  <br />
  <br />
  <div>
    <header class='skills-header'>
      <div class="header__bg" data-aos="zoom-in-down" data-aos-easing="linear"
      data-aos-duration="1500">
      </div>
      <h1>Technical Skills</h1>
      <hr />
      <a id="skills"><h3>Incomplete List</h3></a>
      <br />
    </header>
  </div>
  <br />
  <br />
  <br />

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
export default {
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
.skill-card {
  width: 250px;
  height: 225px;
  margin: auto;
}
header.skills-header {
  position: relative;
  transform: rotate(-5deg);
}

header.skills-header > hr {
  position: relative;
  width: 50%;
}

header.skills_header div.header__bg, .header__bg {
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  margin-left: -50%;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(#ff9d2f, #ff6126);
  transform-origin: top left;
  box-shadow: 60px -16px rgba(0, 128, 128, 0.8);
}

header.skills-header > h1 {
  font-size: 3rem;
  position: relative;
  margin: 0;
  padding: 0;
  width: 50%;
  padding-left: 10px;
}

header.skills-header > a#skills > h3 {
  position: relative;
  font-size: 2rem;
  margin: 0;
  color: white;
  width: 50%;
  padding-right: 5%;
  text-align: right;
}
header.skills-header > a#skills {
  position: relative;
  margin: 0;
  color: white;
}

header h1 {
  position: relative;
  color: white;
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