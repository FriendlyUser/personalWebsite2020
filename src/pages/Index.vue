<template>
<Layout title="David Li Portfolio">
  <br />
  <br />
  <div class="container">
    <h1 class="title">Skills</h1>
    <h2 class="subtitle">List is not comprehensive</h2>
    <div class="columns is-multiline">
      <div class="column is-narrow">
        <div class="card">
            <header class="card-header">
              <p class="card-header-title">
            <b-taglist attached class="is-large">
                <b-tag> <b-icon
                icon="vuejs"
                size="is-medium"
            >
            </b-icon></b-tag>
                <b-tag type="is-success">Vue</b-tag>
            </b-taglist>
            </p>
            </header>
            <div class="card-content">
              <div class="content">
                  <b-icon
                    icon="star"
                    size="is-medium"
                  >
                  </b-icon>
                  <b-icon
                    icon="star"
                    size="is-medium"
                  >
                  </b-icon>
                  <b-icon
                    icon="star-outline"
                    size="is-medium"
                  >
                  </b-icon>
                  <b-icon
                    icon="star-outline"
                    size="is-medium"
                  >
                  </b-icon>
                  <b-icon
                    icon="star-outline"
                    size="is-medium"
                  >
                  </b-icon>
                  <p>Stuff</p>
              </div>
            </div>
        
        </div>
      </div>
      <div class="column is-narrow">
        <div class="card">
          <b-icon
              icon="account"
              size="is-medium">
          </b-icon>
        </div>
      </div>
      <div class="column is-narrow">
        <div class="card">
          <b-icon
              icon="account"
              size="is-medium">
          </b-icon>
        </div>
      </div>
    </div>
  </div>
  <br />
  <div class="container">
    <h1 class="title">Projects</h1>
    <h2 class="subtitle">Notable Github Projects</h2>
  </div>
  <hr />
  <GithubList />
</Layout>
</template>

<script>
import GithubList from '~/components/GithubList'
import Layout from '~/layouts/Default.vue'
export default {
  components: {
    Layout,
    GithubList
  }
}
</script>

<style>

.gamer { 
  font-size: 128px !important; 
  color: #08c;
  text-align: center;
  justify-content: center;
  justify-self: center;
}
.gamer, .gamer:before {
    font-size: 128px !important;
}
</style>