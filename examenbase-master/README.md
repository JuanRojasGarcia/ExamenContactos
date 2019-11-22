# Proyecto base de vuejs con net core 

## Examen instrucciones:
* Descarga el templete del examen en formato zip, no lo clones ya que esto dificultara subir tus cambios al repositorio.
* El examen se puede revisar la funcionalidad en clase, o bien subir al `gitlab.itculiacan.edu.mx`  (el maestro ***NO*** contestara ninguna pregunta referente a este proceso). Para hacer esto crear un proyecto personal llamado ExamenParcial1, sube todos tus cambios a este proyecto si deseas crédito parcial o no logras revisar durante el examen. 
* Una vez descargado el archivo asegúrate de inicializarlo correctamente ve a la carpeta principal y utiliza los comandos de dotnet restore y dotnet run para ejecutarlo.
* De manera paralela utiliza también npm para ejecutar el spa, para esto deberás abrir desde la terminal la carpeta vuespa y ejecutar `npm install` seguido de `npm run watch` . 
* Utiliza Chrome para revisar tu aplicación, debe de verse en la siguiente dirección:  http://localhost:5000/index.html# 
* Asegúrate de que esto este funcionando antes de empezar a codificar debes de ver una ruta con tareas, listar, seleccionar 1, editar y borrar. 
* Trata de seguir el orden de las cosas:
  * En Vue crea una nueva vista con el nombre del modelo pluralizado. En el cual mostraras un listado de elementos del tipo modelo.
  *	Modificar el router/index.js para que incluya un acceso a la nueva ruta.
  *	Modifica App.vue para que incluya un acceso a tu nueva vista en la navegación. 
  *	Modifica el vuestore para que tenga las operaciones básicas del crud, puedes agregar un modulo nuevo o bien simplemente extender el ya existente (recomendado si no sabes bien vuex). 
  *	En el objeto state agrega adecuadamente el nuevo modelo. 
  *	Crearas un getter con todos los modelos,
  *	Crearas un getter con el modelo seleccionado. 
  *	Crearas 2 mutaciones una para actualizar el estado de tu nuevo modelo y otro para seleccionar uno en memoria. 
  *	En acciones crearas las siguientes seleccionar, leer (todas), agregar, actualizar y borrar
  *	Puedes por el momento hacer esto en la propia memoria de vue.
  *	Regresa a la vista donde están todos, conecta el vuex y el resto de los componentes. Asegúrate de cargar los datos al momento de cargar la vista. 
  *	Crea un componente para agregar un nuevo elemento a la colección
  *	Crea un componente para editar un elemento de la conexión.
  *	Una vez que termines en la aplicación de netcore crea un nuevo controlador para el modelo nuevo e implementa las 5 funciones CRUD, esto en memoria usando un diccionario. 
  *	Conecta tu implementación de vuex con esta nueva api.

## Modelo:

```
 Libros {
     id int, 
     titulo string,
     genero string,
     precio decimal

 }

```

## Modelo 2:

```

Contactos {
    id int,
    nombre string,
    correo string,
    edad int
}


```



## Instrucciones ejecucion:

* en una terminal lanza dotnetcore 
```
dotnet run 
```
* en otra terminal ve a la carpeta de vuespa y lanza npm con el script de watch

```
cd vuespa
npm install
npm run watch
```

* Para ver la aplicacion navega a index.html dentro de tu explorador http://localhost:5000/index.html#/
* Los cambios en vue se deben de reflejar automaticamente en el explorador
* Cambios en la api requieren que se recompile, no es nescesario recargar la app.