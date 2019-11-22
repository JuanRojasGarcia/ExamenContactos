using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace src.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TareasController : ControllerBase
    {
        private static List<Tarea> db;
        static TareasController()
        {
            db = new List<Tarea>(){
                new Tarea() { Id = 1, Titulo = "something", Descripcion= "some desc"},
                new Tarea() { Id = 2, Titulo = "something 2", Descripcion= "some desc 2"},
            };
        }
        // GET: api/Tareas
        [HttpGet]
        public ActionResult<IEnumerable<Tarea>> Get()
        {
            return db;
        }

        // GET: api/Tareas/5
        [HttpGet("{id}", Name = "Get")]
        public ActionResult<Tarea> Get(int id)
        {
            var t = db.FirstOrDefault(ta => ta.Id == id);
            if (t == null)
            {
                return NotFound();
            }

            return t;
        }

        // POST: api/Tareas
        [HttpPost]
        public void Post(Tarea model)
        {
            var newId = 0;
            if (db.Count > 0)
            {
                newId = db.Max(a => a.Id) + 1;
            }
            model.Id = newId;

            db.Add(model);
        }

        // PUT: api/Tareas/5
        [HttpPut("{id}")]
        public ActionResult Put(Tarea update)
        {
            var t = db.FirstOrDefault(ta => ta.Id == update.Id);
            if (t == null)
            {
                return NotFound();
            }

            t.Descripcion = update.Descripcion;
            t.Titulo = update.Titulo;
            return Ok();
        }

        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        public ActionResult Delete(int id)
        {
            var t = db.FirstOrDefault(ta => ta.Id == id);
            if (t == null)
            {
                return NotFound();
            }
            db.Remove(t);
            return Ok();
        }
    }
}
