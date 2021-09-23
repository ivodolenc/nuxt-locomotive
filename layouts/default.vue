<template>
  <div id="__default">
    <Nuxt />
  </div>
</template>

<script>
import { canonical, facebook, twitter, appLdJson } from '~/utils/getHeadData'

export default {
  head() {
    const { path } = this.$route

    return {
      meta: [...facebook(path), ...twitter()],

      link: [...canonical(path)],

      script: [...appLdJson(path)]
    }
  }
}
</script>
