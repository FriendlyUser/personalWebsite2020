 <template>
  <div class='section'>
    <div class="columns is-centered">
      <div class="column" />
      <div class="column is-one-quarter">
        <b-icon
          v-bind:style="{width: '100%'}"
          icon="cogs"
          custom-class="other-skills-icons"
          size="is-large">
        </b-icon>
        <h3 v-bind:style="{fontSize: '1.2rem', textAlign: 'center', width: '100%'}"> Troubleshooting </h3>
        <p>
          Skilled at solving technical issues and finding the root causes.
        </p>
      </div>
      <div class="column is-one-quarter">
        <b-icon 
          icon="book"
          v-bind:style="{width: '100%'}"
          custom-class="other-skills-icons"
          size="is-large">
        </b-icon>
        <h3 v-bind:style="{fontSize: '1.2rem', textAlign: 'center', width: '100%'}"> Learning </h3>
        <p>
          Committed to being a lifelong learner and having an entrepreneuring spirit.
        </p>
      </div>
      <div class="column is-one-quarter">
        <b-icon 
          icon="desktop-classic"
          v-bind:style="{width: '100%'}"
          custom-class="other-skills-icons"
          size="is-large">
        </b-icon>
        <h3 v-bind:style="{textAlign: 'center', width: '100%'}"> Coding </h3>
        <p>Passionate about software development and learning about more programming languages.</p>
      </div>
      <div class="column" />
    </div>
  </div>
</template>