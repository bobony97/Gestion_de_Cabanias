<template>
    <div>
        <h2><router-link to="/">Volver al Inicio <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                    fill="currentColor" class="bi bi-house-fill" viewBox="0 0 16 16">
                    <path
                        d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L8 2.207l6.646 6.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5Z" />
                    <path d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6Z" />
                </svg></router-link></h2>
        <h1>Editando Ingreso</h1>
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
                    <input type="date" id="fecha_ingreso" v-model="data.fecha_ingreso" class="form-control">
                </div>
                <div class="mb-3">
                    <label for="fecha_salida" class="form-label text-light">Fecha De Salida</label>
                    <input type="date" id="fecha_salida" v-model="data.fecha_salida" class="form-control">
                </div>

                <div class="buttons add-button">
                    <button class="btn btn-primary" v-on:click.prevent.default="editTask()">Completar Edicion <svg
                            xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                            class="bi bi-pencil" viewBox="0 0 16 16">
                            <path
                                d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
                        </svg></button>
                    <button class="btn btn-danger" @click="redirectTasks">Cancelar Edicion <svg
                            xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                            class="bi bi-x-circle-fill" viewBox="0 0 16 16">
                            <path
                                d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z" />
                        </svg></button>
                </div>
            </form>
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
            }
        }
    },

    methods: {
        editTask() {
            axios.put("http://localhost:3000/editTask/" + this.$route.params.id, this.data)
            this.redirectTasks()
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
    margin-right: 50px;
}

.router {
    color: white;
    text-decoration: none;
}
</style>