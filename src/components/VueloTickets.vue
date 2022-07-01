<template>
    <div class="container">
        <h1 class="text-center my-3"> Vista de vuelos desde {{ $route.params.cp }} hasta la ciudad {{ $route.params.cd }}
        </h1>
        <div class="row">
            <div class="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4" style="padding:0.5em;"
                v-for="(item, index) in vuelos_disponibles" :key="index">
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
                        <a href="https://github.com/jored93" target="_blank" class="btn btn-primary">PAY</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import { mapState } from "vuex";
export default {
    name: "VueloTickets",
    data() {
        return {
            vuelos_disponibles: [],
        }
    },
    computed: mapState(['flights']),
    created() {
        this.$store.dispatch('loadFlights');
    },
    mounted() {
        this.vuelos_disponibles = this.flights.filter(function(vuelo){
            return vuelo.ciudad_origen_id === parseInt(this.$route.params.cp) && vuelo.ciudad_destino_id === parseInt(this.$route.params.cd);
        }.bind(this));
    },
};
</script>

<style scoped lang="scss">
</style>