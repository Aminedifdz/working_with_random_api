<template>
    <v-card
        class="mx-auto my-12"
        max-width="374"
    >
        <v-col>
            <v-img
                :src="contact.avatar"
                aspect-ratio="1"
                class="grey lighten-2 app__img"
            >
                <template v-slot:placeholder>
                <v-row
                    class="fill-height ma-0"
                    align="center"
                    justify="center"
                >
                    <v-progress-circular
                    indeterminate
                    color="grey lighten-5"
                    ></v-progress-circular>
                </v-row>
                </template>
            </v-img>  
        </v-col>
    
        <v-card-title>{{ contact.username }}</v-card-title>
    
        <v-card-text>
        <v-row
            align="center"
            class="mx-0"
        >
            <div>
                <v-icon
                    large
                    color="gray"
                >
                    mdi-email
                </v-icon>
                {{ contact.email }}
            </div>
        </v-row>
    
        
        </v-card-text>
    
        <v-divider class="mx-4"></v-divider>
    </v-card>
</template>

<script lang="ts" >

import { Contact } from '../composables'


  export default {
    name: 'Card',
    props: {
        contact: {
            type: Object as Contact,
            required: true
        }
    },
    methods: {
    },
    components: {
    },

    setup () {
    }
}
</script>