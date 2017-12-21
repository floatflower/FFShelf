<template>
    <div class="ffshelf-category">
        <item v-for="category in categories"
              v-on:click="onItemClick" v-bind:category="category">{{ category.name }}</item>
    </div>
</template>

<script>
import item from './ffshelf-category-item.vue';

export default {
    data: function() {
        return {
            categories: []
        }
    },
    components: {
        'item': item,
    },
    mounted: function() {
    },
    methods: {
        onItemClick: function(category) {
            console.log(category);
        }
    }
}
</script>

<style lang="scss" module>
.ffshelf-category {
    width: 240px;
    height: 640px - 57px;
    position: absolute;
    top: 0;
    left: 0;
    border-right: 1px solid darken(#fff, 10%);
    padding: 20px;
    overflow-x: hidden;
    overflow-y: auto;
    box-sizing: border-box;

    &::-webkit-scrollbar {
        width: 4px;
    }

    /* Track */
    &::-webkit-scrollbar-track {
        background-color: rgba(0,0,0,0);
    }

    /* Handle */
    &::-webkit-scrollbar-thumb {
        background: #CFD8DC;
        border-radius: 1px;
    }

    /* Handle on hover */
    &::-webkit-scrollbar-thumb:hover {
        background: darken(#CFD8DC, 20%);
    }

}
</style>