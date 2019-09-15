<template>
<section class="hero is-primary is-medium">
  <!-- Hero head: will stick at the top -->
  <div class="hero-head">
    <nav class="navbar">
      <div class="container">
        <div class="navbar-brand">
          <a class="navbar-item">
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
            <a class="navbar-item is-active" href="/">
              Home
            </a>
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
      <h1 class="title">
        David Li 
      </h1>
      <h2 class="subtitle">
        Software Engineer <br />
      </h2>
    </div>
  </div>

  <!-- Hero footer: will stick at the bottom -->
  <div class="hero-foot">
    <nav class="tabs">
      <div class="container">
        <ul>
          <li class="is-active"><a>Projects</a></li>
          <li><a>Skills</a></li>
          <li><a>History</a></li>
          <li><a>Content</a></li>
          <li><a>About</a></li>
          <li><a>Footer</a></li>
        </ul>
      </div>
    </nav>
  </div>
</section>
</template>