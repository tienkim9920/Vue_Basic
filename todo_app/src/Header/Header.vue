<template lang="">
  <img alt="Vue logo" src="../assets/logo.png">
  
  <div>
    <router-link exact to="/">Home</router-link>
    &nbsp;
    <router-link to="/about">About</router-link>
  </div>
  <router-view />

</template>
<script>
export default {
    name: 'Header'
}
</script>
<style lang="">
    
</style>