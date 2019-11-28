using System;
using System.Linq;
using justAnApi.Models;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
namespace justAnApi.Controllers
{
    [EnableCors("CorsPolicy")]
    [ApiController]
    [Route("api/[controller]")]
    public class SpecialtyController : ControllerBase
    {
        private readonly ApiContext _context;

        public SpecialtyController(ApiContext context)
        {
            _context = context;
        }
        // GET api/specialty
        [HttpGet]
        public IActionResult Get()
        {
            var model = _context.Specialties.ToList();

            return Ok(new { Specialties = model });
        }

        // GET api/specialty/id
        [HttpGet("{id}")]
        public IActionResult GetSpecialtyById(int id)
        {

            var model = _context.Specialties.Find(id);

            if (model == null)
            {
                return NotFound();
            }

            return Ok(new { Specialties = model });
        }

        [HttpPost]
        public IActionResult Create([FromBody]Specialty model)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            _context.Specialties.Add(model);
            _context.SaveChanges();

            return Ok(model);

        }
        [HttpPut("{id}")]
        public IActionResult Update(int id, [FromBody]Specialty model)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            var specialty = _context.Specialties.Find(id);

            if (specialty == null)
            {
                return NotFound();
            }

            specialty.Id = model.Id;
            specialty.Description = model.Description;
            specialty.Name = model.Name;

            _context.SaveChanges();

            return Ok(specialty);
        }


        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            var specialty = _context.Specialties.Find(id);

            if (specialty == null)
            {
                return NotFound();
            }

            _context.Remove(specialty);
            _context.SaveChanges();

            return Ok(specialty);
        }
    }
}
