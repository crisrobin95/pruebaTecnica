
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
            <section class="page__streams">
                <MainStreams/>
            </section>
        
        </div>

    </template>

    <style lang="scss" scoped>
    .menu {
        @include responsive;
        display: flex;
        background-color:  var(--c-blackNavy);
        height: 2.5em;
        justify-content: space-between;
        align-items: center; 
        padding: 0 1.25em;     
    }

    .page {
        @include responsive;  
        display: flex;
        background-color: black;
        max-height: auto;
    }
        
    </style>
