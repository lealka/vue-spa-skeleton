<template>
    <v-container grid-list-lg>
        <v-layout row wrap>
            <!--<RecycleScroller
                class="scroller"
                :items="recipes"
                :item-size="1"
                key-field="idx"
                v-slot="{ item }"
            >-->
                <v-flex xs12 sm6 md6 lg4 v-for="(item, idx) in recipes" :key="idx">
                    <v-card>
                        <v-responsive>
                            <v-img :src="item.recipe.image"></v-img>
                        </v-responsive>

                        <v-card-text>
                            <div class="title my-5">{{ item.recipe.label }}</div>

                            <div class="subheading">Ingredients</div>
                            <ul>
                                <li
                                    v-for="(ingredient, i) in item.recipe.ingredientLines"
                                    :key="i"
                                    v-html="ingredient"
                                ></li>
                            </ul>
                        </v-card-text>

                        <v-card-actions>
                            <v-btn color="green" dark>Order</v-btn>
                        </v-card-actions>
                    </v-card>
                </v-flex>
            <!--</RecycleScroller>-->
        </v-layout>
    </v-container>
</template>

<script>
// import { RecycleScroller } from 'vue-virtual-scroller';

export default {
    name: 'MealRecipes',
    /*components: {
        RecycleScroller: RecycleScroller
    },*/
    computed: {
        recipes() {
            return this.$store.state.recipe.recipes;
        }
    }
};
</script>

<style lang="css" scoped>
/*@import '~vue-virtual-scroller/dist/vue-virtual-scroller.css'*/
</style>
