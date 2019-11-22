<template>
  <div class="home container">
    <h3>Tareas</h3>
    <table class="table">
      <thead><tr><th>Id</th>
      <th>Titulo</th><th>Descripcion</th>
      <th></th>
      </tr></thead>
      <tbody>
        <tr v-for="t in tareas" v-bind:key="t.id" >
          <td>{{t.id}}</td>
          <td>{{t.titulo}}</td>
          <td>{{t.descripcion}}</td>
          <td><button class="btn btn-success" v-on:click="editar(t)">Editar</button>|
          <button class="btn btn-success" v-on:click="borrar(t)">Borrar</button>
          </td>
        </tr>
      </tbody>
    </table>
    
    <div><button class="btn btn-success" v-on:click="mostrarNueva()" >Nueva</button></div>
    <div>&nbsp;</div>
    <editar-tarea v-if="tareaSeleccionada" ></editar-tarea>
    <crear-tarea v-else></crear-tarea>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapGetters, mapActions } from "vuex";
import CrearTarea from "../components/CrearTarea";
import EditarTarea from "../components/EditarTarea";

export default {
  name: "Tareas",
  components: {
    CrearTarea, EditarTarea
  },
  
  methods: {
    editar(tarea){
         this.seleccionarTarea(tarea);
    },
    borrar(tarea){
      this.borrarTarea(tarea);
    },
    mostrarNueva(){
      this.seleccionarTarea(null);
    },
    ...mapActions(["leerTareas", "borrarTarea", "seleccionarTarea"])
  },
  computed: {
    ...mapGetters(["tareas", "tareaSeleccionada"])
  },
  created() {
    this.leerTareas();
  }
};
</script>
