<script setup>

</script>
<template>
    
    <nav class="menu">
        <NavLeft/>
        <NavCenter/>
        <NavRigth/>
    </nav>
    <div class="page">
        <main class="main">
            <SectionsMain/>
        </main>
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

    .page-container {
        display: flex;
        max-width: 95.625em;
        height: 141.688em;
        margin: auto;
        justify-content: space-evenly;
        margin-top: 1.25em;
        padding: 0 1.25rem;
    }
    
</style>