<script setup lang="ts">

</script>
<template>
    <div class="search">
        <input type="text" class="search__text" placeholder="Buscar canal o juego">
        <button class="search__button">
            <SvgIconSearch class="search__button--icon"/>
         </button>
    </div>
</template>
    

<style lang="scss" scoped>
    .search{
        display: flex;
        @include responsive;

        &__text{
            border: solid 0.2em #67676b;
            background-color:  var(--c-blackNavy);
            color: white;
            margin-left: 1em;
        }

        &__button{
            background-color: #2F2F35;
            border-radius: 0.2em;
        }
        
        
    }
</style>