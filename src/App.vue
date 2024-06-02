<script lang="ts">
export default {

}
</script>

<template>
  <Navbar />
  <router-view v-slot="{ Component }">
    <keep-alive>
      <div class="">
        <component :is="Component" class="w-screen min-h-[95vh]"/>
      </div>
    </keep-alive>
  </router-view>
</template>
