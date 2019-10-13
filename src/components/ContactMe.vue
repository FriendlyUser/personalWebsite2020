<template>
  <div class="container">
    <h4 class="subtitle"> Contact Me </h4>
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

       <button class="button is-primary" :disabled="isDisabled">Submit</button>
    </form>
    <ul class="fa-ul" itemscope="">
      <li>
        <i class="fa-li fas fa-phone fa-2x" aria-hidden="true"></i>
        <span id="person-telephone" itemprop="telephone"><a href="tel:250-479%206036">250-479 6036</a></span>
      </li>
      <li>
        <i class="fa-li fas fa-map-marker fa-2x" aria-hidden="true"></i>
        <span id="person-address" itemprop="address">6105 Kingsway Ave, Vancouver, British Columbia, Canada</span>
      </li>
      <li>
        <i class="fa-li fas fa-clock fa-2x" aria-hidden="true"></i>
        <span>Monday 10:00 to 13:00<br>
                  Wednesday 09:00 to 10:00<br>
                  Otherwise email to book an appointment</span>
      </li>
    </ul>
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