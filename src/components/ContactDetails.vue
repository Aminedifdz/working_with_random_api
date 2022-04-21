<template>
    <v-card
     class="mx-auto pa-2" 
     max-width="500px"
    >
        <v-row class="app__v-row">
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
            <v-col
                class="mx-0"
            >
                <v-card-title>{{ contact.first_name }} {{ contact.last_name }}</v-card-title>
                <v-list >
                    <v-list-item
                        prepend-icon="mdi-phone"
                        title="phone"
                        :subtitle="contact.phone_number"
                        align="left"
                    >
                    </v-list-item>  
                    <v-list-item
                        prepend-icon="mdi-cake"
                        title="Birth Day"
                        :subtitle="contact.date_of_birth"
                        align="left"
                    >
                    </v-list-item>
                    <v-list-item
                        v-if="contact.employment"
                        prepend-icon="mdi-card-account-details"
                        title="Social Number"
                        :subtitle="contact.social_insurance_number"
                        align="left"
                    >
                    </v-list-item> 
                    <v-list-item
                        v-if="contact.employment"
                        prepend-icon="mdi-briefcase"
                        title="phone"
                        :subtitle="contact.employment.title"
                        align="left"
                    >
                    </v-list-item>   
                </v-list>
                
            </v-col>
        </v-row>
    </v-card>
</template>

<script lang="ts" >

import { Contact } from "../composables"


  export default {
    name: 'Contact Details',
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

    return {
    }
  }
}
</script>

<style>

.app__v-row {
    display: flex;
    flex-wrap: wrap;

}

@media screen and (max-width: 700px) {
    .app__v-row {
        flex-direction: column;
    }
    .app__img {
        width: 250px;
        height: 250px;
    }
}

</style>