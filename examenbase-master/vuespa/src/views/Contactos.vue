<template>
  <div class="home container">
    <h3>Contactos</h3>
    <table class="table">
      <thead><tr><th>Id</th>
      <th>Nombre</th><th>Correo</th><th>Edad</th>
      <th></th>
      </tr></thead>
      <tbody>
        <tr v-for="t in contactos" v-bind:key="t.id" >
          <td>{{t.id}}</td>
          <td>{{t.nombre}}</td>
          <td>{{t.correo}}</td>
          <td>{{t.edad}}</td>

          <td><button class="btn btn-success" v-on:click="editar(t)">Editar</button>|
          <button class="btn btn-success" v-on:click="borrar(t)">Borrar</button>
          </td>
        </tr>
      </tbody>
    </table>
    
    <div><button class="btn btn-success" v-on:click="mostrarNueva()" >Nueva</button></div>
    <div>&nbsp;</div>
    <editar-contacto v-if="contactoSeleccionada" ></editar-contacto>
    <crear-contacto v-else></crear-contacto>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapGetters, mapActions } from "vuex";
import CrearContacto from "../components/CrearContacto";
import EditarContacto from "../components/EditarContacto";

export default {
  name: "Contactos",
  components: {
    CrearContacto, EditarContacto
  },
  
  methods: {
    editar(contacto){
         this.seleccionarContacto(contacto);
    },
    borrar(contacto){
      this.borrarContacto(contacto);
    },
    mostrarNueva(){
      this.seleccionarContacto(null);
    },
    ...mapActions(["leerContactos", "borrarContacto", "seleccionarContacto"])
  },
  computed: {
    ...mapGetters(["contactos", "contactoSeleccionada"])
  },
  created() {
    this.leerContactos();
  }
};
</script>
