<template>
    <div class="container">
        <h1 class="text-center my-3"> Vista de vuelos </h1>
        <div class="row">
            <div class="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4" style="padding:0.5em;" v-for="(item, index) in flights" :key="index">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">{{ item.codigo }}</h5>
                        <p class="card-text">
                            Precio: ${{ item.precio }}
                        </p>
                        <p class="card-text">
                            Duración vuelo: {{ item.duracion_minutos }}
                        </p>
                        <p class="card-text">
                            Escalas: {{ item.no_escalas }}
                        </p>
                        <p class="card-text">
                            Salida: {{ item.fecha_salida }}
                        </p>
                        <p class="card-text">
                            Llegada: {{ item.fecha_llegada }}
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
    name: "Vuelo",
    computed: mapState(['flights']),
    created() {
        this.$store.dispatch('loadFlights');
    }
};
</script>

<style scoped lang="scss">
</style>