<template>
    <div class="container">
        <h1 class="text-center my-3"> Vista de aerolineas </h1>

        <table class="table table-striped">
            <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Nombre</th>
                    <th scope="col">Telefono</th>
                    <th scope="col">Email</th>
                    <th scope="col">Direccion</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, index) in airlines" :key="index">
                    <th>{{ item.id }}</th>
                    <td>{{ item.nombre }}</td>
                    <td>{{ item.telefono }}</td>
                    <td>{{ item.email }}</td>
                    <td>{{ item.direccion }}</td>
                </tr>
                
            </tbody>
        </table>
    </div>
</template>

<script>

import { mapState } from "vuex";
export default {
    name: "Aerolinea",
    computed: mapState(['airlines']),
    created() {
        this.$store.dispatch('loadAirlines');
    }
};
</script>

<style scoped lang="scss">
</style>