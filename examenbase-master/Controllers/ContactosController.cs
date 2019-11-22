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
    public class ContactosController : ControllerBase
    {
        private static List<Contacto> db;
        static ContactosController()
        {
            db = new List<Contacto>(){
                new Contacto() { Id = 1, Nombre = "a", Correo= "a a", Edad = 10},
                new Contacto() { Id = 2, Nombre = "a 2", Correo= "a a 2", Edad = 20},
            };
        }
        // GET: api/Tareas
        [HttpGet]
        public ActionResult<IEnumerable<Contacto>> Get()
        {
            return db;
        }

        // GET: api/Tareas/5
        [HttpGet("{id}", Name = "Geta")]
        public ActionResult<Contacto> Get(int id)
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
        public void Post(Contacto model)
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
        public ActionResult Put(Contacto update)
        {
            var t = db.FirstOrDefault(ta => ta.Id == update.Id);
            if (t == null)
            {
                return NotFound();
            }

            t.Nombre = update.Nombre;
            t.Correo = update.Correo;
            t.Edad = update.Edad;
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
