<template>
<form class="form">
<div class="form-group">
    <label>Id: </label>&nbsp; <input class="form-control" type="text" v-model="tareaSeleccionada.id" disabled=disabled />
   <label>Titulo:</label>&nbsp;<input class="form-control" type="text" v-model="tareaSeleccionada.titulo" />
   <label>Descripcion:</label>&nbsp;<input class="form-control" type="text" v-model="tareaSeleccionada.descripcion" />
   &nbsp;<input class="btn btn-info " type="button" v-on:click="actualizarClick" value="Actualizar" />
</div>
</form>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "EditarTarea",
  //props: ["id","titulo", "descripcion"],
  data: function() {
    return {
      id: 0,
      titulo: "",
      descripcion: ""
    };
  },
   computed: {
    ...mapGetters([ "tareaSeleccionada"])
  },
  methods: {
    async actualizarClick() {
      await this.actualizarTarea({
        id : this.tareaSeleccionada.id,
        descripcion: this.tareaSeleccionada.descripcion,
        titulo: this.tareaSeleccionada.titulo
      });
    },

    ...mapActions(["actualizarTarea"])
  }
};
</script>