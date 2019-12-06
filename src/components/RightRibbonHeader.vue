<template>
  <p class="ribbon">
  <span class="text"><strong class="bold">Special Offer:</strong> Recieve bonus rewards points for signing up</span>
  </p>
</template>

<style>
.ribbon{
  font-size:20px;
  position:relative;
  display:inline-block;
  margin:5em;
  text-align:center;
}
.text{
  display:inline-block;
  padding:0.5em 1em;
  min-width:20em;
  line-height:1.2em;
  background: #FFD72A;
  position:relative;
}
.ribbon:after,.ribbon:before,
.text:before,.text:after,
.bold:before{
  content:'';
  position:absolute;
  border-style:solid;
}
.ribbon:before{
  top:0.3em; left:0.2em;
  width:100%; height:100%;
  border:none;
  background:#EBECED;
  z-index:-2;
}
.text:before{
  bottom:100%; left:0;
  border-width: .5em .7em 0 0;
  border-color: transparent #FC9544 transparent transparent;
}
.text:after{
  top:100%; right:0;
  border-width: .5em 2em 0 0;
  border-color: #FC9544 transparent transparent transparent;
}
.ribbon:after, .bold:before{
  top:0.5em;right:-2em;
  border-width: 1.1em 1em 1.1em 3em;
  border-color: #FECC30 transparent #FECC30 #FECC30;
  z-index:-1;
}
.bold:before{
  border-color: #EBECED transparent #EBECED #EBECED;
  top:0.7em;
  right:-2.3em;
}

</style>