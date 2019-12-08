 <template>
    <b-carousel>
        <b-carousel-item v-for="(carousel, i) in carousels" :key="i">
            <section :class="`hero is-medium is-${carousel.color}`">
                <div class="hero-body has-text-centered">
                  <b-icon
                    v-bind:style="{width: '100%'}"
                    v-bind:icon="carousel.icon"
                    custom-class="other-skills-icons"
                    size="is-large">
                  </b-icon>
                  <h1 class="title">{{carousel.text}}</h1>
                </div>
            </section>
        </b-carousel-item>           
    </b-carousel>
</template>

<script>
export default {
    data(){
        return {
            carousels: [
                { icon: 'cogs', color: 'primary', text: 'Skilled at solving technical issues and finding the root causes.' },
                { icon: 'book', color: 'info', text: 'Committed to being a lifelong learner and having an entrepreneuring spirit.' },
                { icon: 'desktop-classic', color: 'success', text: 'Passionate about software development and learning about more programming languages.' },
                { icon: 'view-dashboard', color: 'warning', text: 'Skilled at front end development and obsessed with making things load fast.' },
                { icon: 'vuejs', color: 'danger', text: 'This Gridsome Site was coded in vue' }
            ]
        }
    }
}
</script>

<style scoped>
.other-skills-icons:before {
  font-size: 6rem !important;
}
</style>
