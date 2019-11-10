<template>
  <div class="container">
    <br />
    <h1 class="title"><a id="contact">Contact Me</a></h1>
    <form name="contact" method="POST" action="https://formspree.io/davidli012345@gmail.com">
      <b-field label="Name">
          <b-input name="name" value="Kevin Garvey"></b-input>
      </b-field>

      <b-field label="Email"
          type="is-danger"
          message="This email is invalid">
          <b-input 
              name="email"
              type="email"
              value=""
              maxlength="30">
          </b-input>
      </b-field>

      <b-field>
        <b-input 
            name="message"
            type="textarea"
            minlength="10"
            maxlength="1000"
            placeholder="Maxlength automatically counts characters">
        </b-input>
      </b-field>

       <button class="button is-primary">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'ContactMe',
  data() {
    return {}
  },
  methods: {
  }
}
</script>

<style scoped>
</style>