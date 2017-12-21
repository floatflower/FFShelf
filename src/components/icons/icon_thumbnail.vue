<template>
  <div>
      <img v-bind:src="url"/>
  </div>
</template>

<script>
    export default {
        props: ["url"]
    }
</script>