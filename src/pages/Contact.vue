<template>
    <v-container
            class="grey spacing-playground mb-6 pa-12"
        >
        <v-col
            align="center"
        >
                <v-btn 
                white
                left
                to="/"
                variant="text"
                class="ma-2"
                >
                <v-row
                        align="left"
                        >
                        <v-icon
                            dark
                            left
                        >
                        mdi-arrow-left
                        </v-icon>
                        GO BACK TO CONTACT LIST  
                 </v-row>
                </v-btn>
            
            <v-col>
                <v-spacer></v-spacer>
            </v-col>
            <ContactDetails :contact="contact" /> 
        </v-col>
            
    </v-container>
</template>
  
<script lang="ts" >
  
  import {computed } from 'vue'
  import { useRoute } from 'vue-router'
  import { useContactById } from "../composables/useContacts"
  import { ContactDetails} from '../components'

  export default {
    name: 'Contact',
    props:
        [
            'id',
        ],
    methods: {
    },
    components: {
        ContactDetails,
    },

    setup (props:any) {

      const route = useRoute()

      const id = computed(() =>route.params.id)

      const { isFetching, error, contact } = useContactById(Number(id.value))

      return {
         isFetching,
         error,
         contact,
      }
  }
}
</script>
  