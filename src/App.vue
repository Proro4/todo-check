<template>
  <div id="app">
    <transition name="slide">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>

export default {
  name: 'App',
}
</script>
<style src="./assets/style/style.scss" lang="scss"></style>
