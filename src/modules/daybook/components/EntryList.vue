<template>
   <div class="entry-list-container">
    <div class="px-2 pt-2">
        <input type="text" 
        class=" form-control"
        placeholder="Buscar Entrada"
        />
    </div>

    <div class="entry-scrollarea">
        <Entry
        v-for="item in 100"
        :key="item"
            Entry
        />
    </div>

   </div>
</template>

<script>
import { defineAsyncComponent } from 'vue'
export default {
    components:{
            Entry: defineAsyncComponent(() => import('./Entry.vue'))
        }
}
</script>

<style lang="scss" scoped>

.entry-list-container{
    border-right: 1px solid #2c3e50;
    height: calc( 150vh - 20px );
}
.entry-scrollarea{
    height: calc( 100vh - 90px);
    overflow: scroll;
}
</style>
