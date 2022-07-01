<template>
    <div>
        <nav class="navbar navbar-expand-lg bg-light">
            <div class="container-fluid">
                <router-link class="navbar-brand" to="/">Travel agency</router-link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ml-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <router-link class="nav-link active" aria-current="page" to="/">Home</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" to="/ciudades">Ciudades</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" to="/aerolineas">Aerolineas</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" to="/vuelos">Vuelos</router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
</template>
<script>
export default {
    name: 'Navbar',
}
</script>
<style>
</style>