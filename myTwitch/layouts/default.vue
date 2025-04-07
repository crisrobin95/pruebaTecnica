
<script setup lang="ts">

</script>
<template>
    
    <nav class="menu">
        <NavLeft/>
        <NavCenter/>
        <NavRigth/>
        
    </nav>
    <div class="page">
        <aside class="page__box">
            <RecomendedStreams/>
        </aside>
        <section>
            <MainStreams/>
        </section>
       
    </div>

</template>

<style lang="scss" scoped>
   .menu {
        @include responsive;
        display: flex;
        color: white;
        background-color:  var(--c-blackNavy);
        height: 2.5em;
        justify-content: space-between;
        align-items: center; 
        padding: 0 1.25em; 
        width: 100%;       
    }

    .page {
        display: flex;
        background-color: black;
    }
    
</style>
