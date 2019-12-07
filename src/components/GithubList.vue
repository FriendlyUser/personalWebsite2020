<template>
<div>
  <div class="container">
    <div class="columns is-multiline">
      <div v-for="(item) in $static.allGithubProject.edges" v-bind:key="item.id">
        <div class="column is-quarter">
          <div class="card"  data-aos="flip-down" data-aos-duration="1500">
            <header class="card-header">
              <p class="card-header-title">
                {{ item.node.title}}
              </p>
              <!--Change link url and icon, point to project page-->
              <a v-bind:href="item.node.path" class="card-header-icon" aria-label="more options">
                <b-icon
                  icon="github-face"
                  size="is-small">
                </b-icon>
              </a>
            </header>
            <div class="card-content">
              <div class="content">
                <strong>Created:</strong><time datetime="2019-03-04"> {{ item.node.created_at }} </time> 
                <br />
                <strong>Updated:</strong><time datetime="2019-03-04"> {{ item.node.updated_at }} </time>
                <br />
                <strong>Language:</strong><time datetime="2019-03-04"> {{ item.node.language }} </time> 
              </div>
            </div>
            <footer class="card-footer">
              <span href="#" class="card-footer-item">Forks: {{item.node.forks}} </span>
              <span href="#" class="card-footer-item">Stars: {{item.node.stargazers_count}} </span>
              <a v-bind:href="item.node.html_url" class="card-footer-item" target="_blank">Github</a>
            </footer>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>
<static-query>
query {
  metadata {
    siteName
  }
  allGithubProject {
    pageInfo {
      totalPages
      currentPage
    }
    edges {
      node {
        id
        path
        title
        forks
        created_at
        updated_at
        stargazers_count
        html_url
        language
        description
      }
    }
  }
}
</static-query>

<script>
export default {
  name: 'GithubList',
  data() {
    return {}
  },
  methods: {
  }
}
</script>

<style scoped>
</style>