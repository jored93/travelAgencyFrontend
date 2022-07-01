<template>
    <div class="container">
        <h1 class="text-center my-3"> Vista de ciudades </h1>
        <div class="row">
            <div class="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4" style="padding:0.5em;" v-for="(item, index) in cities" :key="index">
                <div class="card">
                    <img :src="item.image_url" class="card-img-top" :alt="item.nombre" />
                    <div class="card-body">
                        <h5 class="card-title">{{ item.nombre }}</h5>
                        <p class="card-text">
                            {{ item.descripcion }}
                        </p>
                        <a href="#" class="btn btn-primary">Ver</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import { mapState } from "vuex";
export default {
    name: "Ciudad",
    computed: mapState(['cities']),
    created() {
        this.$store.dispatch('loadCities');
    }
};
</script>

<style scoped lang="scss">
</style>