import { defineAsyncComponent } from 'vue';
<template>
    <div class="entry-title d-flex justify-content-between p-2">
    <div>
        <span class="text-success fs-3 fw-bold">15</span>
        <span class="mx-1 fs-3">julio</span>
        <span class="mx-2 fs-4 fw-light">2024, Miercoles</span>
    </div>

    <div>
        <button class="btn btn-danger mx-2">
            Borrar <i class="fa fa-trash-alt"></i>
        </button>
        <button class="btn btn-primary">
            Subir Foto <i class="fa fa-upload"></i>
        </button>

    </div>

    </div>

    <hr/>
    <div class="d-flex flex-column px-3 h-75">
        <textarea placeholder="que paso hoy">
        
        </textarea>
    </div>

    <Fab />

    <img class="img-thumbnail" src="https://feedbackstore.com.mx/cdn/shop/products/D_801783-MLM40985289221_032020-B_d6568470-e629-46ce-9502-688d0ca45604_800x.jpg?v=1704230610" alt="entry-picture">
</template>

<script>
import { defineAsyncComponent } from 'vue';

    export default {
        components: {

            Fab: defineAsyncComponent( () => import('../components/Fab.vue'))
        }
    }
</script>

<style lang="scss" scoped>

textarea {
    font-size: 20px;
    border: none;
    height: 100;

    &:focus{
        outline: none;
    }

}
img {
    width: 200px;
    position:fixed;
    bottom: 150px;
    right: 20px;
    box-shadow: 0px 5px 10px rgba($color: black, $alpha: 0.2) ;
}
</style>