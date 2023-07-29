<template>
    <div v-if="menssageResponse == ``" class="d-flex justify-content-center align-self-center align-content-center mt-5">
        <form class="col-4 ">
            <div class="mb-3">
                <label for="nombre_inquilino" class="form-label text-light">Nombre Inquilino</label>
                <input type="text" class="form-control" id="nombre_inquilino" v-model="newUser.nombre_inquilino">
            </div>
            <div class="mb-3">
                <label for="nombre_inquilino" class="form-label text-light">Fecha de Ingreso</label>
                <input type="date" class="form-control" id="fecha_ingreso" v-model="newUser.fecha_ingreso">
            </div>
            <div class="mb-3">
                <label for="nombre_inquilino" class="form-label text-light">Fecha de Salida</label>
                <input type="date" class="form-control" id="fecha_salida" v-model="newUser.fecha_salida">
            </div>
            <div class="d-flex justify-content-around">
                <button type="submit" class="btn btn-success " v-on:click.prevent.default="edit">Guardar
                    Cambios <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
                        class="bi bi-pencil" viewBox="0 0 16 16">
                        <path
                            d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
                    </svg></button>
                <button class="btn btn-primary " @click="comeBack"> <svg xmlns="http://www.w3.org/2000/svg" width="23"
                        height="23" fill="currentColor" class="bi bi-arrow-bar-left" viewBox="0 0 16 16">
                        <path fill-rule="evenodd"
                            d="M12.5 15a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 1 0v13a.5.5 0 0 1-.5.5ZM10 8a.5.5 0 0 1-.5.5H3.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L3.707 7.5H9.5a.5.5 0 0 1 .5.5Z" />
                    </svg>Volver</button>
            </div>
        </form>
    </div>


    <div class="container" v-if="menssageResponse != ''">
        <div v-if="spinner" class="spinner-border text-success" style="width: 5rem; height: 5rem;" role="status">
            <span class="visually-hidden">Loading...</span>
        </div>
        <div v-if="cambioExitoso" class="alert alert-success d-flex align-items-center" role="alert" id="pi">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#29AF25  " class="bi bi-check-circle-fill"
                viewBox="0 0 16 16">
                <path
                    d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
            </svg>
            <div>
                CAMBIO EXITOSO!
            </div>
        </div>
    </div>

    <div class="container" v-if="mensajeError">
        <div class="alert alert-success d-flex align-items-center" role="alert" id="card-alert">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#E73216"
                class="bi bi-check-circle-fill m-1" viewBox="0 0 16 16">
                <path
                    d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
            </svg>
            <div>
                {{ mensajeError }}
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios"

export default {
    name: 'EditItem',
    props: {
        cabana: {
            type: Object,
            default: null,
        },
    },

    data: function () {
        return {
            newUser: {
                nombre_inquilino: "",
                fecha_ingreso: null,
                fecha_salida: null
            },
            menssageResponse: "",
            spinner: false,
            cambioExitoso: false,
            mensajeError: ""
        }
    },

    methods: {
        comeBack() {
            this.$router.push("/")
        },

        edit() {
            axios.put("http://localhost:3000/edit/" + this.$route.params.id, this.newUser)
                .then((response) => {
                    this.menssageResponse = response
                    this.spinner = true
                    setTimeout(() => {
                        this.spinner = false
                    }, 1000);

                    setTimeout(() => {
                        this.cambioExitoso = true
                    }, 2000);

                    setTimeout(() => {
                        this.$router.push("/")
                    }, 3000);
                })
                .catch((error) => {
                    this.error = true
                    this.mensajeError = error.message
                })
        }
    },
}
</script>




<style scoped>
.container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}

#card-alert {
    background-color: rgb(113, 235, 113);
}
</style>