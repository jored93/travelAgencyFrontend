<template>
  <div>
    <div class="container-fluid px-5 my-5">
      <div class="row justify-content-center">
        <div class="col-xl-10">
          <div class="card border-0 rounded-3 shadow-lg overflow-hidden">
            <div class="card-body p-0">
              <div class="row g-0">
                <div class="col-sm-6 d-none d-sm-block bg-image"></div>
                <div class="col-sm-6 p-4">
                  <div class="text-center">
                    <div class="h3 fw-light">Viajemos!</div>
                  </div>
                  
                  <form>
                    <div class="form-floating mb-3">
                      <select class="form-select" v-model="ciudad_partida">
                        <option v-for="item in cities" v-bind:value="item.id">
                          {{item.nombre}}
                        </option>
                      </select>
                      <div class="form-text">Ciudad de partida</div>
                    </div>

                    <div class="form-floating mb-3">
                      <select class="form-select" v-model="ciudad_destino">
                        <option v-for="item in cities" v-bind:value="item.id">
                          {{item.nombre}}
                        </option>
                      </select>
                      <div class="form-text">Ciudad de partida</div>
                    </div>

                    <div class="form-floating mb-3">
                      <input type="date" class="form-control" v-model="fecha_salida" >
                      <div class="form-text">Fecha de reserva ticket salida</div>
                    </div>

                    <div class="form-floating mb-3">
                      <input type="date" class="form-control" v-model="fecha_arrivo" >
                      <div class="form-text">Fecha de reserva ticket arrivo</div>
                    </div>

                    <div class="d-grid" v-if="ciudad_partida && (ciudad_destino !== ciudad_partida) ">
                      <button class="btn btn-outline-success btn-lg" v-on:click="buscaVuelo()">Consultar</button>
                    </div>

                    <div class="alert alert-primary" role="alert" v-else>
                      Debes escoger al menos una ciudad de partida y una ciuda de destino.
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
    name: "Home",
    data(){
      return {
        vuelos_disponibles: [],
        ciudad_partida: '',
        ciudad_destino: '',
        fecha_salida: '',
        fecha_arrivo: '',
      }
    },
    computed: {
      ...mapState(['cities']),
      ...mapState(['flights']),
    },
    mounted() {
        this.$store.dispatch('loadCities')
        this.$store.dispatch('loadFlights')
    },
    methods: {
        buscaVuelo() {
          event.preventDefault();
          /* console.log('cp', this.ciudad_partida, 'cd:', this.ciudad_destino);
          console.log(this.flights);

          for (let i = 0; i < this.flights.length; i++) {
            console.log('codigo', this.flights[i].codigo, 'ciudad_partida:', this.flights[i].ciudad_origen_id,'tipo: ', typeof(this.flights[i].ciudad_origen_id) ,'ciudad_destino', this.flights[i].ciudad_destino_id, 'tipo: ', typeof(this.flights[i].ciudad_destino_id));
          } */

          this.vuelos_disponibles = this.flights.filter(function(vuelo){
            return vuelo.ciudad_origen_id === parseInt(this.ciudad_partida) && vuelo.ciudad_destino_id === parseInt(this.ciudad_destino);
          }.bind(this));

          if (this.vuelos_disponibles && this.vuelos_disponibles.length > 0) {
            this.$router.push({ name: 'vuelotickets', params: { cp: this.ciudad_partida, cd: this.ciudad_destino} })

          } else {
            alert('No hay vuelos disponibles');
          }
        }
    }
};
</script>

<style scoped lang="scss">
.bg-image {
  background-image: url('https://realestatemarket.com.mx/images/2020/06-Junio/1406/_Apuestan_por_el_turismo_domestico_en_Ecuador.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
</style>
