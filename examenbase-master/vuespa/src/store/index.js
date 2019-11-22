import Vue from 'vue'
import Vuex from 'vuex'

import Axios from 'axios';

Vue.use(Vuex)

const apiURLTareas = 'api/Tareas';
const apiURLContactos = 'api/Contactos';


export default new Vuex.Store({
  state: {
    tareas: [],
    tareaSeleccionada: null,
    contactos: [],
    contactoSeleccionada: null,
    otracosa: []
  },
  getters: {
    tareas: state => state.tareas,
    tareaSeleccionada : state => state.tareaSeleccionada,
    contactos: state => state.contactos,
    contactoSeleccionada : state => state.contactoSeleccionada
  },
  mutations: {
    setTareas(state, data) {
      state.tareas = data;
    },
    setSeleccionarTarea(state, tarea){
      state.tareaSeleccionada = tarea;
    },
    setContactos(state, data) {
      state.contactos = data;
    },
    setSeleccionarContacto(state, contacto){
      state.contactoSeleccionada = contacto;
    }
  },
  actions: {
    seleccionarTarea(context, tarea){
      context.commit("setSeleccionarTarea", tarea);
    },
    async leerTareas(context) {
      console.log("leyendo tareas");
      let tareasData = (await Axios.get(apiURLTareas)).data;
      console.log("se leyeron tareas", tareasData);
      context.commit("setTareas", tareasData);
    },
    async agregarTarea(context, nuevaTarea) {
      let grabar = (await Axios.post(apiURLTareas, nuevaTarea));
      await context.dispatch('leerTareas');
      
    },
    async actualizarTarea(context, tareaEditar){
      let grabar = (await Axios.put(apiURLTareas+"/"+tareaEditar.id, tareaEditar));
      await context.dispatch('leerTareas');
    },
    async borrarTarea(context, tareaABorrar){
      let grabar = (await Axios.delete(apiURLTareas+"/"+tareaABorrar.id));
      await context.dispatch('leerTareas');
    },


    seleccionarContacto(context, contacto){
      context.commit("setSeleccionarContacto", contacto);
    },
    async leerContactos(context) {
      console.log("leyendo contactos");
      let contactosData = (await Axios.get(apiURLContactos)).data;
      console.log("se leyeron contactos", contactosData);
      context.commit("setContactos", contactosData);
    },
    async agregarContacto(context, nuevaContacto) {
      let grabar = (await Axios.post(apiURLContactos, nuevaContacto));
      await context.dispatch('leerContactos');
      
    },
    async actualizarContacto(context, contactoEditar){
      let grabar = (await Axios.put(apiURLContactos+"/"+contactoEditar.id, contactoEditar));
      await context.dispatch('leerContactos');
    },
    async borrarContacto(context, contactoABorrar){
      let grabar = (await Axios.delete(apiURLContactos+"/"+contactoABorrar.id));
      await context.dispatch('leerContactos');
    }
  },
  modules: {
  }
})
