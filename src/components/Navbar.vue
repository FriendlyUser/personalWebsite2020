<template>
<div style='position: relative'>
  <div class='hero-image-wrapper'>
    <div class='dli-bg-image has-background-primary'>
    </div>
  </div>
  <div style='overflow-y: hidden;'>
  <div class='box-container'>
    <!-- Remove this later -->
    <div class='box-hero'>
      <div class='wave -one'></div>
      <div class='wave -two'></div>
      <div class='wave -three'></div>
    </div>
  </div>
  </div>
  <section class="hero is-primary is-medium">
    <!-- Hero head: will stick at the top -->
    <div class="hero-head">
      <nav class="navbar">
        <div class="container">
          <div class="navbar-brand">
            <a class="navbar-item" href="/">
              <!-- <img src="https://bulma.io/images/bulma-type-white.png" alt="Logo"> -->
              <img src="https://s.gravatar.com/avatar/d5a6e001f027e8cf3dbf048a926baa77?s=160" alt="Logo" />
            </a>
            <span class="navbar-burger burger" data-target="navbarMenuHeroA">
              <span></span>
              <span></span>
              <span></span>
            </span>
          </div>
          <div id="navbarMenuHeroA" class="navbar-menu">
            <div class="navbar-end">
              <!---TODO highlight only on home, conditionally styling--->
              <span class="navbar-item">
                <a class="button is-primary is-inverted" href="/">
                  Home
                </a>
              </span>
              <span class="navbar-item">
                <a class="button is-primary is-inverted" href="https://stackoverflow.com/users/10226731/grandfleet">
                  <span class="icon">
                    <b-icon
                      icon="stack-overflow"
                      type="is-primary">
                    </b-icon>
                  </span>
                  <span>Stack Overflow</span>
                </a>
              </span>
              <!-- move these icons into the footer, eventually  -->
              <span class="navbar-item">
                <a class="button is-primary is-inverted" href="https://FriendlyUser.github.io/">
                  <span class="icon">
                    <b-icon
                      icon="github-face"
                      type="is-primary">
                    </b-icon>
                  </span>
                  <span>Github</span>
                </a>
              </span>
            </div>
          </div>
        </div>
      </nav>
    </div>

    <!-- Hero content: will be in the middle -->
    <div class="hero-body">
      <div class="container has-text-centered">
        <AnimatedTitle />
      </div>
    </div>

    <!-- Hero footer: will stick at the bottom -->
    <div class="hero-foot">
      <nav class="tabs">
        <div class="container">
          <ul>
            <li class="is-active"><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#work">Work</a></li>
            <li><a href='#contact'>Contact</a></li>
          </ul>
        </div>
      </nav>
    </div>
  </section>
</div>
</template>

<style scoped>
.dli-bg-image{
  position: relative;
  width: 100%;
  height: 100%;
  background-image: url("/clouds-min.jpg") !important;
  background-color: #7957d5;
  background-position: center bottom;
  -webkit-animation:mymove 50s linear infinite;
  /* Safari and Chrome */
  animation: mymove 50s linear infinite;
  filter: brightness(0.5);
}

.hero-image-wrapper {
  position: absolute;
  width: 100%;
  height: 100%;
}

@-webkit-keyframes mymove {
    from {
        background-position: 0% 0%;
    }
    to {
        background-position: 0% 50%;
    }
}
@keyframes mymove {
    from {
        background-position: 0% 0%;
    }
    to {
        background-position: 0% 50%;
    }
}

</style>
<script>
import AnimatedTitle from '~/components/AnimatedTitle'
export default {
  name: 'Navbar',
  data() {
    return {}
  },
  components: {
    AnimatedTitle
  }
}
</script>