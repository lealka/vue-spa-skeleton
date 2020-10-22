<template>
    <span>
        <v-navigation-drawer
            app
            v-model="drawer"
            class="brown lighten-2"
            dark
            disable-resize-watcher
        >
            <v-list>
                <template v-for="(item, index) in items">
                    <v-list-item :key="index">
                        <v-list-item-content>
                            {{ item.title }}
                        </v-list-item-content>
                    </v-list-item>
                    <v-divider :key="`divider-${index}`"></v-divider>
                </template>
            </v-list>
        </v-navigation-drawer>
        <v-app-bar app color="brown darken-4" dark>
            <v-app-bar-nav-icon
                class="hidden-md-and-up"
                @click="drawer = !drawer"
            ></v-app-bar-nav-icon>
            <v-spacer class="hidden-md-and-up"></v-spacer>
            <router-link to="/">
                <v-toolbar-title to="/">{{ appTitle }}</v-toolbar-title>
            </router-link>
            <v-btn text class="hidden-sm-and-down" to="/menu">Menu</v-btn>
            <v-spacer class="hidden-sm-and-down"></v-spacer>
            <div v-if="!isAuthenticated" class="hidden-sm-and-down">
                <v-btn text to="/sign-in">SIGN IN</v-btn>
                <v-btn color="brown lighten-3" to="/join">JOIN</v-btn>
            </div>
            <v-btn v-else outlined color="white" @click="logout">Logout</v-btn>
        </v-app-bar>
    </span>
</template>

<script>
// import i18n from '@/plugins/i18n';
import { mapGetters } from 'vuex'; //mapState, , mapActions, mapMutations

export default {
    name: 'AppNavigation',
    data() {
        return {
            appTitle: 'Meal Prep',
            drawer: false,
            items: [
                { title: 'Menu' },
                { title: 'Profile' },
                { title: 'Sign In' },
                { title: 'Join' }
            ]
        };
    },
    computed: {
        ...mapGetters('user', ['isAuthenticated'])
    },
    methods: {
        logout() {
            this.$store.dispatch('user/userSignOut');
        } //,
        // changeLocale(locale = 'en') {
        //     i18n.locale = locale;
        // }
    }
};
</script>

<style lang="stylus" scoped></style>
