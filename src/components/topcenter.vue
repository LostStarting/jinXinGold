<template>
  <header>发现</header>
</template>

<script>
export default {
  name: 'navs',
  data () {
    return {
      title: '2018年1月运'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  body, div, img, input, ul, li, section, nav, p, h1, h2, h3, h4, h5, h6 {
    margin: 0;
    padding: 0; }

  ul, ol {
    list-style: none; }

  html {
    height: 100%;
    width: 100%;
    font-size: 100px; }

  body {
    font-family: "微软雅黑",Arial;
    height: 100%; }

  a {
    text-decoration: none; }

  img {
    display: block; }
  header {
    height: 0.48rem;
    background: #fd5353;
    font-size: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white; }
  header a {
    display: block;
    margin: 0 16px;
    color: white; }

</style>
