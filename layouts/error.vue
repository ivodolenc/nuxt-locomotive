<template>
  <div>
    <h1 v-if="error.statusCode === 404">Page not found</h1>
    <h1 v-else>An error occurred</h1>
    <NuxtLink to="/">BACK TO HOME</NuxtLink>
  </div>
</template>

<script>
export default {
  layout: 'errorLayout',

  props: {
    error: {
      type: Object,
      required: true
    }
  },

  head() {
    return {
      title: 'Error' + this.$config.app.titleSeparator + '404 Not Found'
    }
  }
}
</script>
