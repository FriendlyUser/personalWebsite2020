<template>
  <div class='header-spacing'>
  <header class='skills-header' v-bind:class="{ 'is-clipped': right }">
    <div v-bind:class="{ 'negative-scaleX': right }">
      <div class="header__bg" data-aos="zoom-in-down" data-aos-easing="linear"
        data-aos-duration="1500" v-bind:class="{ 'header-invert-colors': right }" />
        <h1 v-bind:class="{ 'negative-scaleX': right }">{{headerName}}</h1>
        <hr v-bind:class="{ 'negative-scaleX': right }" />
        <a v-bind:id="linkValue"><h3 v-bind:class="{ 'negative-scaleX': right }">{{subHeader}}</h3></a>
    </div>
    <br />
  </header>
</div>
</template>

<script>
export default {
  name: 'Header',
  props: {
    headerName: {
      type: String,
      default: 'Technical Skills'
    },
    subHeader: {
      type: String,
      default: 'Incomplete List'
    },
    linkValue: {
      type: String,
      default: 'skills'
    },
    right: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped>
.header-spacing {
  margin-top: 3rem;
  margin-bottom: 4rem;
}

header.skills-header {
  position: relative;
  transform: rotate(-5deg);
}

@media only screen and (max-width: 768px) {
  .header-spacing > div.negative-scaleX {
    overflow: hidden;
  }
}

header.skills-header > div > hr {
  position: relative;
  width: 50%;
}

header.skills_header > div div.header__bg, .header__bg {
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
  margin-top: 15px;
}

header.skills-header div > h1 {
  font-size: 3rem;
  position: relative;
  margin: 0;
  padding: 0;
  width: 50%;
  padding-left: 10px;
}

header.skills-header > div > a > h3 {
  position: relative;
  font-size: 2rem;
  margin: 0;
  color: white;
  width: 50%;
  padding-right: 5%;
  text-align: right;
}
header.skills-header > div > a {
  position: relative;
  margin: 0;
  color: white;
}

header h1 {
  position: relative;
  color: white;
}

/* Flipped Version */
.negative-scaleX {
  transform: scaleX(-1);
}
.negative-scaleX h3 {
  text-align: right;
}
.header-invert-colors {
  background-image: linear-gradient(#00B0B2, #006566);
  box-shadow: 60px -16px rgba(255, 97, 38, 0.8);
}

</style>
