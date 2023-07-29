<template>
    <div>
        <div v-if="!alert">
            <h2><router-link to="/">Volver al Inicio <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30"
                        fill="currentColor" class="bi bi-house-fill" viewBox="0 0 16 16">
                        <path
                            d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L8 2.207l6.646 6.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5Z" />
                        <path d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6Z" />
                    </svg></router-link></h2>
            <h1>Nuevo Ingreso</h1>
            <div class="d-flex justify-content-center align-self-center align-content-center mt-5">
                <form class="col-4 ">
                    <div class="mb-3">
                        <label for="cabania" class="form-label text-light">Seleccione Cabaña</label>
                        <select name="" required id="cabania" v-model="data.cabania" class="form-control">
                            <option value="Cabaña 1">Cabaña 1</option>
                            <option value="Cabaña 2">Cabaña 2</option>
                            <option value="Cabaña 3">Cabaña 3</option>
                            <option value="Cabaña 4">Cabaña 4</option>
                            <option value="Cabaña 5">Cabaña 5</option>
                            <option value="Cabaña 6">Cabaña 6</option>
                            <option value="Cabaña 7">Cabaña 7</option>
                            <option value="Cabaña 8">Cabaña 8</option>
                            <option value="Cabaña 9">Cabaña 9</option>
                            <option value="Cabaña 10">Cabaña 10</option>
                        </select>
                    </div>
                    <div class="mb-3">
                        <label for="nombre_inquilino" class="form-label text-light">Nombre Del Inquilino</label>
                        <input type="text" placeholder="Nombre" required class="form-control" id="nombre_inquilino"
                            v-model="data.nombre_inquilino">
                    </div>
                    <div class="mb-3">
                        <label for="fecha_ingreso" class="form-label text-light">Fecha De Ingreso</label>
                        <input type="date" id="fecha_ingreso" required v-model="data.fecha_ingreso" class="form-control">
                    </div>
                    <div class="mb-3">
                        <label for="fecha_salida" class="form-label text-light">Fecha De Salida</label>
                        <input type="date" id="fecha_salida" required v-model="data.fecha_salida" class="form-control">
                    </div>

                    <div class="buttons">
                        <button class="btn btn-primary add-button" v-on:click.prevent.default="addTask">Agregar Ingreso <svg
                                xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
                                class="bi bi-plus-circle-fill" viewBox="0 0 16 16">
                                <path
                                    d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z" />
                            </svg></button>
                        <button class="btn btn-primary back-button" @click="redirectTasks"><svg
                                xmlns="http://www.w3.org/2000/svg" width="21" height="21" fill="currentColor"
                                class="bi bi-arrow-left" viewBox="0 0 16 16">
                                <path fill-rule="evenodd"
                                    d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z" />
                            </svg> Volver</button>
                    </div>
                </form>
            </div>
        </div>

        <div v-if="alert" class="container">
            <div class="alert alert-success" role="alert">
                Nuevo Ingreso Guardado Con Exito! <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                    fill="currentColor" class="bi bi-check2-circle" viewBox="0 0 16 16">
                    <path
                        d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z" />
                    <path
                        d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z" />
                </svg>
            </div>
        </div>

    </div>
</template>

<script>
import axios from "axios"

export default {
    data() {
        return {
            data: {
                cabania: "",
                nombre_inquilino: "",
                fecha_ingreso: null,
                fecha_salida: null
            },
            alert: false
        }
    },

    methods: {
        addTask() {
            axios.post("http://localhost:3000/addTask", this.data).then((res) => {
                this.alert = true
                setTimeout(() => {
                    this.redirectTasks()
                }, 2000)
            })
        },

        redirectTasks() {
            this.$router.push("/tasks")
        }
    },

}
</script>

<style  scoped>
h1 {
    text-decoration: none;
    text-align: center;
    color: white;
}

.add-button {
    margin-left: 50px;
}

.back-button {
    margin-left: 280px;
    margin-top: -65px;
}

.container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}

.alert-success {
    color: green;
    display: flex;
    justify-content: center;
}

.bi-check2-circle {
    margin-left: 10px;
}
</style>