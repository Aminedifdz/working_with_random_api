<template>
    <v-col>
        <v-spacer></v-spacer>
    </v-col>
    <transition
        appear
        @before-enter="beforeEnterSearchField"
        @enter="enterSearchField"
        :css="false"
    >
        <v-container
            class="grey spacing-playground mb-25 pa-6"
            >
            <v-row>
                <v-col
                    cols="12"
                    sm="6"
                    >
                    <div v-if="isFetching">
                        <v-progress-circular
                            indeterminate
                            color="black"
                        ></v-progress-circular>
                    </div>
                    <div v-else>
                        <h1 >{{ usersContacts.length }} Contact(s)</h1>
                    </div>
                </v-col>
                
                <v-col
                    cols="12"
                    sm="6"
                    >
                    <v-text-field
                        prepend-inner-icon="mdi-magnify"
                        v-model="search"
                        label="search"
                        variant="outlined"
                        clearable
                    ></v-text-field>
                </v-col>
            </v-row>
        </v-container>
    </transition>
    <transition 
            appear
            @before-enter="beforeEnter"
            @enter="enter"
    >
        <v-container
            
            class="grey spacing-playground mb-6 pa-6 app__flex"
        >
        
            <div
                class="app__flex" 
            >
                <div
                    v-for="(contact, index) in usersContacts"
                    :key="contact.userId"
                    class="display-flex__child"
                >
                    <v-hover
                        v-slot="{ isHovering, props }"
                        open-delay="200"
                    >
                        <Card :elevation="isHovering ? 12 : 2" v-bind="props" class="app__card" :contact="contact" :to="{name: 'Contact.details', params: { id: contact.id } }"  />   
                    </v-hover>                   
                </div>
            </div>                        
        </v-container>
    </transition> 
</template>

<script lang="ts" >
  
  import { watch } from 'vue'
  import { useContacts } from "../composables/useContacts"
  import { Card } from '../components'
  import { useRouter, useRoute } from 'vue-router'
  import gsap from 'gsap'

  export default {
    name: 'Home',
    props:
        [
            
        ],
    methods: {
    },
    components: {
        Card,
    },

   setup () {

    const { isFetching, error, contacts, search, filtered } = useContacts()

    const router = useRouter()


    watch(search, () => {
        //console.log("filtered : ", filtered.value)
        //console.log("contacts : ", contacts.value)
    })

    const beforeEnterSearchField = (el:any) => {
      el.style.transform = 'translateY(-60px)'
      el.style.opacity = 0
    }
    const enterSearchField = (el:any, done:any) => {
      gsap.to(el, {
        duration: 1.5,
        y: 0,
        opacity: 1,
        ease: 'bounce.out',
        onComplete: done
      })
    }

    const beforeEnter = (el:any) => {
      el.style.opacity = 0
      el.style.transform = 'translateY(100px)'
    }

    const enter = (el:any, done:any) => {
      gsap.to(el, {
        opacity: 1,
        y: 0,
        duration: 1,
        onComplete: done,
        delay: el.dataset.index * 0.2
      })
    }

    return {
      isFetching,
      error,
      contacts,
      search,
      usersContacts: filtered,
      beforeEnter,
      enter,
      beforeEnterSearchField,
      enterSearchField,
    }
  }
}
</script>
  
<style>

.app__flex {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
}

.display-flex__child {
    flex: 1 0 21%; 
    padding: 10px;
    margin-bottom: 30px;;
}

.app__card {
    width: 250px;
} 

</style>
  