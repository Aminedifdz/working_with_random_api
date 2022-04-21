<template>
  <v-app>
    <v-main>
      <Appbar :name="app_name" />
      <v-col>
            <v-spacer></v-spacer>
      </v-col>
      <div class="app__body" style="top: 25%;padding-top: 40px;">
          <router-view v-slot="{ Component }"  :key="$route.path"  >
            <transition name="route" mode="out-in">
              <component :is="Component" ></component>
            </transition>
          </router-view>
        <!-- <router-view :key="$route.path" /> -->
      </div> 
    </v-main>
  </v-app>
</template>

<script lang="ts" >

import { watch } from 'vue'
import { useRoute } from 'vue-router'
import Appbar from './components/Appbar.vue'

const app_name = "My Contacts List"

export default {

  components: {
    Appbar,
  },

  setup(props:any) {

    const app_name = "My Contacts List"

    const route = useRoute()

    watch(route, (to:any) => {
      console.log('Route Path', route.path)
    }, {flush: 'pre', immediate: true, deep: true})

    return {
      app_name,
    }
    
  }
}

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
