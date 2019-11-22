<template>
<form class="form-inline">
<div class="form-group">
   <label>Nombre:</label>&nbsp;<input class="form-control" type="text" v-model="nombre" />
   <label>Correo:</label>&nbsp;<input class="form-control" type="text" v-model="correo" />
    <label>Edad:</label>&nbsp;<input class="form-control" type="text" v-model="edad" />

   &nbsp;<input class="btn btn-info " type="button" v-on:click="guardarClick" value="crear" />
</div>
</form>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "CrearContacto",
  data: function() {
    return {
      nombre: "",
      correo: "",
      edad: null
    };
  },
  methods: {
    async guardarClick() {
      await this.agregarContacto({
        nombre: this.nombre,
        correo: this.correo,
        edad: this.edad

      });
    },

    ...mapActions(["agregarContacto"])
  }
};
</script>