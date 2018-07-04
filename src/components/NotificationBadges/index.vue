<template>
  <div>
    <svg-icon class="message"></svg-icon>
    <a href="#">Notifications<span class="badge">16</span></a>
  </div>
</template>
<script>
    export default {
      name: 'notification-badges'
    }
</script>
<style scoped>
  .badge {
    display: block;
    position: absolute;
    top: -12px;
    right: 3px;
    line-height: 16px;
    height: 16px;
    padding: 0 5px;
    font-family: Arial, sans-serif;
    color: white;
    text-shadow: 0 1px rgba(0, 0, 0, 0.25);
    border: 1px solid;
    border-radius: 10px;
    -webkit-box-shadow: inset 0 1px rgba(255, 255, 255, 0.3), 0 1px 1px rgba(0, 0, 0, 0.08);
    box-shadow: inset 0 1px rgba(255, 255, 255, 0.3), 0 1px 1px rgba(0, 0, 0, 0.08);
  }

  .badge {
    background: #fa623f;
    border-color: #fa5a35;
    background-image: -webkit-linear-gradient(top, #fc9f8a, #fa623f);
    background-image: -moz-linear-gradient(top, #fc9f8a, #fa623f);
    background-image: -o-linear-gradient(top, #fc9f8a, #fa623f);
    background-image: linear-gradient(to bottom, #fc9f8a, #fa623f);
  }
</style>
