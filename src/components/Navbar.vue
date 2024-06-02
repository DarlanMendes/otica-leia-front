<template>
 <Menubar :model="routes" v-if="showNavbar">
    <template #item="{ item }">
      <router-link :to="item.path">
        <h1 class="p-4">{{ item.label }}</h1>
      </router-link>
    </template>
    <template #end>
      
        <Button label="Login" @click="goToLogin()" class="bg-yellow-600 px-4 py-2" />

    </template>
  </Menubar>
</template>
<script lang="ts">
export default{
    data() {
    return {
      routes: [{ label: 'Home', path: '/' }]
    }
  },
  computed:{
    
    showNavbar(){
        return this.$route.name === 'signup'||this.$route.name === 'login'?false:true
    }
  },
  methods:{
    goToLogin(){
      this.$router.push('/login')
    }
  }
}
</script>