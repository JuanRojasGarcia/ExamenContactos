<template>
<form class="form-inline">
<div class="form-group">
   <label>Titulo:</label>&nbsp;<input class="form-control" type="text" v-model="titulo" />
   <label>Descripcion:</label>&nbsp;<input class="form-control" type="text" v-model="descripcion" />
   &nbsp;<input class="btn btn-info " type="button" v-on:click="guardarClick" value="crear" />
</div>
</form>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "CrearTarea",
  data: function() {
    return {
      titulo: "",
      descripcion: ""
    };
  },
  methods: {
    async guardarClick() {
      await this.agregarTarea({
        descripcion: this.descripcion,
        titulo: this.titulo
      });
    },

    ...mapActions(["agregarTarea"])
  }
};
</script>