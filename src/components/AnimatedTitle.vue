<template>
<div class="hero-body">
  <div class="container has-text-centered">
    <h1 class="title">
        <p>D</p>
        <p>a</p>
        <p>v</p>
        <p>i</p>
        <p>d&nbsp;</p>
        <p>L</p>
        <p>i</p>
    </h1>
    <h2 class="subtitle bounce-2">
      Software Engineer <br />
    </h2>
  </div>
</div>
</template>

<style scoped>
@import 'https://fonts.googleapis.com/css?family=Open+Sans:400,700';

.title p {
  display: inline-block;
  position: relative;
  opacity: 0.0;
  font-size: 3rem;
  animation: port 3s 1 forwards;
  -webkit-animation: port 3s 1 forwards;
}


/** Don't reset animation */
.title:hover p {
  /** animation: reset 1s 1; */
  /** -webkit-animation: reset 1s 1 ; */
}



/** Original Sass decompiled using Sass meister https://www.sassmeister.com/
@for $i from 1 through 10 {
  .title p:nth-of-type(#{$i}){
    animation-delay: ($i*0.1)s;
    -webkit-animation-delay: ($i*0.1)s;
  }
}
*/

.title p:nth-of-type(1) {
  animation-delay: 0.1 s;
  -webkit-animation-delay: 0.1 s;
}

.title p:nth-of-type(2) {
  animation-delay: 0.2 s;
  -webkit-animation-delay: 0.2 s;
}

.title p:nth-of-type(3) {
  animation-delay: 0.3 s;
  -webkit-animation-delay: 0.3 s;
}

.title p:nth-of-type(4) {
  animation-delay: 0.4 s;
  -webkit-animation-delay: 0.4 s;
}

.title p:nth-of-type(5) {
  animation-delay: 0.5 s;
  -webkit-animation-delay: 0.5 s;
}

.title p:nth-of-type(6) {
  animation-delay: 0.6 s;
  -webkit-animation-delay: 0.6 s;
}

.title p:nth-of-type(7) {
  animation-delay: 0.7 s;
  -webkit-animation-delay: 0.7 s;
}

.title p:nth-of-type(8) {
  animation-delay: 0.8 s;
  -webkit-animation-delay: 0.8 s;
}

@keyframes port {
  0%{
    transform: rotateY(90deg) translateY(25%);
    opacity: 0.0;
  }
  100%{
    transform: rotateY(0deg) translateY(0%);
    opacity: 1.0;
  }
}

@-webkit-keyframes port {
  0%{
   -webkit-transform: rotateY(90deg) translateY(25%);
    opacity: 0.0;
  }
  100%{
    -webkit-transform: rotateY(0deg) translateY(0%);
    opacity: 1.0;
  }
}

@keyframes reset {
  0%{}
  100%{}
}

@-webkit-keyframes reset {
  0%{}
  100%{}
}

.subtitle {
  animation-duration: 1.2s;
}
/** Box Animations */
.bounce-2 {
  animation-name: bounce-2;
  animation-timing-function: ease;
}
@keyframes bounce-2 {
  0%   { transform: translateY(0); }
  50%  { transform: translateY(-100px); }
  100% { transform: translateY(0); }
}
</style>