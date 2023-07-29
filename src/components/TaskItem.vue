<template>
    <div>
        <h1>Proximos Ingresos</h1>
        <div class="container">
            <div class="card" v-for="(task, index) in tasks" :key="index">
                <div class="card-body">
                    <h3>{{ task.cabania }}</h3>
                    <p>Inquilino: {{ task.nombre_inquilino }}</p>
                    <p>Fecha De Ingreso: {{ new Date(task.fecha_ingreso).toLocaleDateString() }}</p>
                    <p>Fecha De Salida: {{ new Date(task.fecha_salida).toLocaleDateString() }}</p>
                    <div class="buttons-card">
                        <button class="btn btn-primary edit-button" @click="editTask(task.id)">Editar <svg
                                xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                class="bi bi-pencil-square" viewBox="0 0 16 16">
                                <path
                                    d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                                <path fill-rule="evenodd"
                                    d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
                            </svg></button>
                        <button class="btn btn-danger" @click="deleteTask(task.id)">Eliminar <svg
                                xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                class="bi bi-trash3" viewBox="0 0 16 16">
                                <path
                                    d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z" />
                            </svg></button>
                    </div>
                </div>
            </div>
        </div>
        <div class="buttons">
            <button class="btn btn-primary add-task" @click="redirectAddTask">Agregar Ingreso
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
                    class="bi bi-plus-circle-fill" viewBox="0 0 16 16">
                    <path
                        d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z" />
                </svg></button>
            <button class="btn btn-primary" @click="redirectHome"> <svg xmlns="http://www.w3.org/2000/svg" width="21"
                    height="21" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16">
                    <path fill-rule="evenodd"
                        d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z" />
                </svg> Volver</button>
        </div>
    </div>
</template>

<script>
import axios from "axios"
export default {
    data() {
        return {
            tasks: [],
        }
    },

    methods: {
        startTasks() {
            axios.get("http://localhost:3000/tasks").then((res) => {
                this.tasks = res.data
            })
        },

        redirectAddTask() {
            this.$router.push("/addTask")
        },

        redirectHome() {
            this.$router.push("/")
        },

        deleteTask(id) {
            axios.delete("http://localhost:3000/tasks/" + id)
            this.startTasks()
        },

        editTask(id) {
            this.$router.push("/editTask/" + id)
        }
    },

    created() {
        this.startTasks()
    },

}
</script>

<style  scoped>
.my-link {
    color: white;
    text-decoration: none;
    margin-left: 5px;
}

h1 {

    text-align: center;
    color: white;
}

h3 {
    color: white;
}

p {
    color: white;
}

.container {
    display: flex;
    align-items: center;
    justify-content: center;
    display: block;
    border: 1px solid white;
    margin-top: 30px;
    width: 500px;
    height: 550px;
    overflow-y: scroll;
    overflow-x: hidden;
    direction: rtl;
}


.card {
    margin-top: 15px;
    margin-bottom: 15px;
    width: 450px;
    height: 220px;
    background-color: #2f3136;
}

.card-body {
    display: flex;
    align-items: left;
    justify-content: left;
    text-align: left;
    display: block;
}

.card:hover {
    color: black;
    cursor: pointer;
    transform: scale(1.01);
    transition: 400ms;
}


.edit-button {
    margin-left: 15px;
}

.buttons {
    display: flex;
    justify-content: center;
    margin-top: 20px;
}

.add-task {
    margin-right: 40px;
}

.router {
    color: white;
    text-decoration: none;
}
</style>