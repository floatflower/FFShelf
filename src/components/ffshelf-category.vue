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
        this.categories.push({name: "category1", id: "category_12372491123", icon: "fa fa-file-image-o"});
        this.categories.push({name: "category2", id: "category_12373391123", icon: "fa fa-paper-plane"});
        this.categories.push({name: "category3", id: "category_12371391123", icon: "fa fa fa-bell"});
        this.categories.push({name: "category4", id: "category_12371291123", icon: "fa fa fa-bug"});
        this.categories.push({name: "category5", id: "category_12372191123", icon: "fa fa-cog"});
        this.categories.push({name: "category6", id: "category_12372123423", icon: "fa fa-file-image-o"});
        this.categories.push({name: "category7", id: "category_12372442423", icon: "fa fa-file-image-o"});
        this.categories.push({name: "category8", id: "category_12372491413", icon: "fa fa-file-image-o"});
        this.categories.push({name: "category9", id: "category_12372411213", icon: "fa fa-file-image-o"});
        this.categories.push({name: "category10", id: "category_12372492123", icon: "fa fa-file-image-o"});
        this.categories.push({name: "category11", id: "category_12372121123", icon: "fa fa-file-image-o"});
        this.categories.push({name: "category12", id: "category_12334491123", icon: "fa fa-file-image-o"});
        this.categories.push({name: "category13", id: "category_12351491123", icon: "fa fa-file-image-o"});
        this.categories.push({name: "category14", id: "category_12124491123", icon: "fa fa-file-image-o"});
        this.categories.push({name: "category15", id: "category_12352491123", icon: "fa fa-file-image-o"});
        this.categories.push({name: "category16", id: "category_12352411123", icon: "fa fa-file-image-o"});
        this.categories.push({name: "category17", id: "category_12352721123", icon: "fa fa-file-image-o"});
        this.categories.push({name: "category18", id: "category_12312311123", icon: "fa fa-file-image-o"});
        this.categories.push({name: "category19", id: "category_12123411123", icon: "fa fa-file-image-o"});
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