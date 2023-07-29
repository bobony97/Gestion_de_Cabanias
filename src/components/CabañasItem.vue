<template>
    <div>
        <div id="left" class="container m-0 p-0">
            <div class="row w-100 mt-2 mb-2" v-for="(cabana, index) in cabañas" :key="index">
                <div class="d-flex d-inline-flex">
                    <div class="card w-100" @click="send_data(cabana)">
                        <div class="card-body me-0 mt-0 mb-0">
                            <h5 class="card-title">{{ cabana.cabania }}</h5>
                            <p class="card-text">Nombre Del Inquilino: {{ cabana.nombre_inquilino }}</p>
                            <p v-if="cabana.nombre_inquilino == ``">Disponible <svg xmlns="http://www.w3.org/2000/svg"
                                    width="16" height="16" fill="#3EB236" class="bi bi-circle-fill" viewBox="0 0 16 16">
                                    <circle cx="8" cy="8" r="8" />
                                </svg>
                            </p>
                            <p v-else>Ocupado <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#DF2E0F"
                                    class="bi bi-circle-fill" viewBox="0 0 16 16">
                                    <circle cx="8" cy="8" r="8" />
                                </svg>
                            </p>
                            <div class="d-flex  justify-content-end ">
                                <button class="btn btn-primary button-edit" @click="redirect(cabana.id)">Editar<svg
                                        xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                        class="bi bi-pencil-square" viewBox="0 0 16 16">
                                        <path
                                            d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                                        <path fill-rule="evenodd"
                                            d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
                                    </svg></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div id="right">
            <div class="calendar">
                <CalendarioComponent :cabana="selectedCabana" @new-event="update_events" />
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";
import CalendarioComponent from "./CalendarioItem.vue";
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
import esLocale from '@fullcalendar/core/locales/es';
import EditItem from "./EditItem.vue"

export default {
    name: "CabañasItem",
    components: {
        CalendarioComponent,
        EditItem
    },
    created() {
        this.inicio();
    },
    data: function () {
        return {
            cabañas: [],
            selectedCabana: null,
            calendarOptions: {
                plugins: [dayGridPlugin, interactionPlugin],
                initialView: "dayGridMonth",
                locale: esLocale,
                slotDuration: "24:00:00",
                events: [],
            },
            showEditItem: false,
            idCabaña: null,
        };
    },
    methods: {
        inicio() {
            axios.get("http://localhost:3000").then((res) => (this.cabañas = res.data));
        },

        send_data(cabana) {
            cabana.selected = true
            this.selectedCabana = cabana;
            const newCabana = {
                title: cabana.cabania,
                start: cabana.fecha_ingreso,
                end: cabana.fecha_salida,
                allDay: false,
            };
            this.$emit("new-event", newCabana);
        },

        update_events(newEvent) {
            this.calendarOptions.events.push(newEvent);
        },

        redirect(id) {
            this.$router.push("/edit/" + id)
        },

    },
};
</script>


<style>
.card {
    background-color: #2f3136;
}

.card:hover {
    color: black;
    cursor: pointer;
    transform: scale(1.01);
    transition: 400ms;
}

#left {
    background-color: #202227;
    top: 0;
    bottom: 0;
    left: 0;
    height: 100vh;
    width: 30%;
    overflow-y: scroll;
    float: left;
}

h5,
p {
    color: white;
}

h5 {
    font-size: 20px;
}

p {
    font-size: 15px;
}


.button-edit {
    margin-right: 15px;
}

#right {
    background-color: #202227;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 70%;
    margin: 0 auto;
    float: right;

}

.container {
    width: 100%;
}

.calendar {
    width: 90%;
    height: 90%;
    color: white;
    margin-left: 30px;
}
</style> 
