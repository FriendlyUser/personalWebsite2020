<template lang="pug">
layout
  v-img(alt="Example image" :src="imgUrl" width="135")
  h1 Hello, world!
  p Lorem ipsum dolor sit amet, consectetur adipisicing elit.

  .title.mb-3 Total posts: {{ totalCount }}

  v-list(two-line)
    v-list-tile(
      v-for="(post, index) in posts"
      :key="index"
      @click="onClick(post)"
    )
      v-list-tile-content
        v-list-tile-title {{ post.node.title }}
        v-list-tile-sub-title {{ post.node.title }}
</template>


<page-query>
query {
  allPost {
    totalCount
    edges {
      node {
        id
        title
        slug
        path
      }
    }
  }
}
</page-query>


<script>
export default {
  data () {
    return {
      imgUrl: require('@/favicon.png')
    }
  },
  computed: {
    posts () {
      return this.$page.allPost.edges
    },
    totalCount () {
      return this.$page.allPost.totalCount
    }
  },
  methods: {
    onClick (post) {
      this.$router.push({ path: post.node.path })
    }
  }
}
</script>