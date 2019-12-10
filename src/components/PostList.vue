<template>
  <div class='column'>
    <div class="card">
      <div class="card-content">
        <div class="media">
          <div class="media-content">
            <p class="title is-4" v-html="post.title" />
            <time datetime="2016-1-1" class="subtitle is-6" v-html="post.date"></time>
          </div>
        </div>
        <div class="content" >
          <span v-html="post.description" />
          <br>
          <time datetime="2016-1-1"> {{post.timeToRead}} minutes</time> &nbsp; &nbsp; &nbsp;
          <g-link :to="post.path" class="read">Read More...</g-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["post"],
};
</script>