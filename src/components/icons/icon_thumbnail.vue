<template>
  <div>
      <img v-bind:src="thumbnail"/>
  </div>
</template>

<script>
    export default {
        props: ["thumbnail"]
    }
</script>