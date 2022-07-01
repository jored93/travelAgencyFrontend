import axios from "axios"
import store from "../store"

export function conectData() {
    axios.get("http://127.0.0.1:8000/api/ciudades")
        .then(response => {
            console.log(response.data)
            store.dispatch('infoCiudades', response.data)
        })
        .catch(error => {
            console.log(error)
        })
}