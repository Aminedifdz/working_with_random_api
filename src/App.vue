<template>
  <v-app>
    <v-main>
      <Appbar :name="app_name" />
      <v-col>
            <v-spacer></v-spacer>
      </v-col>
      <div class="app__body">
        <router-view v-slot="{ Component }">
          <transition name="route" mode="out-in">
            <component :is="Component"></component>
          </transition>
        </router-view>
      </div> 
    </v-main>
  </v-app>
</template>

<script setup lang="ts" >

import Appbar from './components/Appbar.vue'

const app_name = "My Contacts List"

</script>

<style>

.app__body {
  top: 10%;
}

/* route transitions */
.route-enter-from {
  opacity: 0;
  transform: translateX(100px);
}
.route-enter-active {
  transition: all 1s ease-out; 
}
.route-leave-to {
  opacity: 0;
  transform: translateX(-100px);
}
.route-leave-active {
  transition: all 1s ease-in; 
}

</style>
