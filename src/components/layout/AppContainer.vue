<template>
  <div class="container">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.container {
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 $container-padding;
}
</style>
