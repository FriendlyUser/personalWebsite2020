<template>
<div>
  <Navbar />
  <transition name="fade" appear>
    <main> <!-- a wrapper for slot is needed -->
      <slot /> <!-- the content -->
    </main>
  </transition>
  <Footer />
</div>
</template>

<script>
import Navbar from '~/components/Navbar'
import Footer from '~/components/Footer'
export default {
  components: {
    Navbar,
    Footer
  },
  data: function () {
    return {
      loaded: false
    }
  }
}
</script>

<style>
.fade-enter-active {
  transition: opacity .5s;
}

.fade-enter {
  opacity: 0;
}

</style>