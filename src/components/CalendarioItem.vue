<template>
    <div>
        <h4><router-link class="my-link" to="/tasks">Proximos Ingresos </router-link></h4>
        <div class="calendar">
            <FullCalendar :options="calendarOptions" />
        </div>
    </div>
</template>

<script>
import FullCalendar from "@fullcalendar/vue3";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import esLocale from "@fullcalendar/core/locales/es";
import moment from "moment";

export default {
    name: "CalendarioItem",
    components: {
        FullCalendar,
    },
    props: {
        cabana: {
            type: Object,
            default: null,
        },
    },
    data() {
        return {
            calendarOptions: {
                plugins: [dayGridPlugin, interactionPlugin],
                initialView: "dayGridMonth",
                locale: esLocale,
                slotDuration: "24:00:00",
                events: [],
            },
        };
    },
    methods: {
        updateCalendar() {
            const fechaIngreso = moment(this.cabana.fecha_ingreso);
            const fechaSalida = moment(this.cabana.fecha_salida);
            const eventos = [
                {
                    title: "Ingreso",
                    start: fechaIngreso.format("YYYY-MM-DD"),
                    allDay: true,
                },
                {
                    title: "Salida",
                    start: fechaSalida.format("YYYY-MM-DD"),
                    allDay: true,
                },
            ];
            this.calendarOptions.events = eventos;
        },

        redirectTask() {
            this.$router.push("/tasks")
        }
    },
    watch: {
        cabana(newCabana) {
            this.updateCalendar();
        },
    },

};
</script>

<style>
.calendar {
    width: 70%;
    height: 70%;
    color: white;
}

.my-link,
h4 {
    color: white;
    text-decoration: none;
    display: flex;
    justify-content: center;
    margin-top: 10px;
}
</style>





