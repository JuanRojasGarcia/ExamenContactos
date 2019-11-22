<template>
<form class="form">
<div class="form-group">
    <label>Id: </label>&nbsp; <input class="form-control" type="text" v-model="contactoSeleccionada.id" disabled=disabled />
   <label>Nombre:</label>&nbsp;<input class="form-control" type="text" v-model="contactoSeleccionada.nombre" />
   <label>Correo:</label>&nbsp;<input class="form-control" type="text" v-model="contactoSeleccionada.correo" />
      <label>Edad:</label>&nbsp;<input class="form-control" type="text" v-model="contactoSeleccionada.edad" />

   &nbsp;<input class="btn btn-info " type="button" v-on:click="actualizarClick" value="Actualizar" />
</div>
</form>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "EditarContacto",
  //props: ["id","titulo", "descripcion"],
  data: function() {
    return {
      id: 0,
      nombre: "",
      correo: "",
      edad: null
    };
  },
   computed: {
    ...mapGetters([ "contactoSeleccionada"])
  },
  methods: {
    async actualizarClick() {
      await this.actualizarContacto({
        id : this.contactoSeleccionada.id,
        nombre: this.contactoSeleccionada.nombre,
        correo: this.contactoSeleccionada.correo,
        edad: this.contactoSeleccionada.edad
      });
    },

    ...mapActions(["actualizarContacto"])
  }
};
</script>