

<template>
    <div class=" entry-container mb-3 pointer p-2"
    @click="$router.push({name: 'entry', params: { id: 10}})">
        <div class="entry-tittle d-flex">
            <span class="text-success fs-5 fw-bold">15</span>
            <span class="mx-1 fs-5">Julio</span>
            <span class="mx-2 fw-light">2021, Jueves</span>
        </div>

        <div class="entry-description">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste nisi magni placeat illum quam id! Nesciunt perspiciatis accusamus, cumque molestiae eos similique. Hic, deleniti est vero fugit nisi explicabo aliquid?
        </div>

    </div>
</template>

<script>

    export default {

    
    }
</script>

<style lang="scss" scoped>
.entry-container {

    border-bottom: 1px solid #2c3e50;
    transition: 0.2s all ease-in;

    &:hover{
        background-color: lighten($color:grey, $amount: 45);
    }
}


</style>