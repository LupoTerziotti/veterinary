using System.Linq;
using justAnApi.Models;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;

namespace justAnApi.Controllers
{
    [EnableCors("CorsPolicy")]
    [ApiController]
    [Route("api/[controller]/[action]")]
    public class VeterinariansController : Controller
    {
        private readonly ApiContext _context;

        public VeterinariansController(ApiContext context)
        {
            _context = context;
        }

        // GET api/veterinarians
        
        [HttpGet]
        public IActionResult Get()
        {
            var model = _context.Veterinarians.ToList();

            getSpecialtiesFromVeterinary(model);

            return Ok(new { Veterinarians = model });

        }

        // GET api/veterinarians/byId/id
        [HttpGet("{id}")]
        public IActionResult GetVeterinarianById(int id)
        {
            
            var model = _context.Veterinarians.Where(x => x.Id ==id).ToList();

            getSpecialtiesFromVeterinary(model);

            if (model == null)
            {
                return NotFound();
            }

            return Ok(new { Veterinarians = model });
        }

        [HttpGet("{name}")]
        public IActionResult GetVeterinarianByName(string name)
        {

            var model = _context.Veterinarians.Where(x => x.Name.Contains(name)).ToList();

            getSpecialtiesFromVeterinary(model);

            if (model == null)
            {
                return NotFound();
            }

            return Ok(new { Veterinarians = model });
        }

        [HttpGet("{id}")]
        public IActionResult GetVeterinarianBySpecialty(int id)
        {

            var model = _context.Veterinarians.Where(x => x.SpecialtyId == id).ToList();

            getSpecialtiesFromVeterinary(model);

            if (model == null)
            {
                return NotFound();
            }

            return Ok(new { Veterinarians = model });
        }

        [HttpGet("{state}")]
        public IActionResult GetVeterinariansByState(bool state)
        {

            var model = _context.Veterinarians.Where(x => x.State==state).ToList();

            getSpecialtiesFromVeterinary(model);

            if (model == null)
            {
                return NotFound();
            }

            return Ok(new { Veterinarians = model });
        }

        [HttpPost]
        public IActionResult Create([FromBody]Veterinarian model)
        {
            var specialties = _context.Specialties.Find(model.SpecialtyId);

            if (specialties == null)
            {
                return NotFound();
            }

            model.especialidad=specialties;

            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            _context.Veterinarians.Add(model);
            _context.SaveChanges();

            return Ok(model);
            
        }
        [HttpPut("{id}")]
        public IActionResult Update(int id, [FromBody]Veterinarian model)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);
                
            var veterinarian = _context.Veterinarians.Find(id);
            

            if (veterinarian == null )
            {
                return NotFound();
            }

            veterinarian.Dni=model.Dni;
            veterinarian.Name=model.Name;
            veterinarian.LastName=model.LastName;
            veterinarian.BornDate=model.BornDate;
            veterinarian.Salary=model.Salary;
            veterinarian.StreetNumber=model.StreetNumber;
            veterinarian.Street=model.Street;
            veterinarian.State = model.State;
            veterinarian.SpecialtyId = model.SpecialtyId;
                
            _context.SaveChanges();

            return Ok(veterinarian);
        }
        [HttpPut("{id}")]
        public IActionResult ChangeState(int id)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            var veterinarian = _context.Veterinarians.Find(id);

            if (veterinarian == null)
            {
                return NotFound();
            }

            veterinarian.State = false;

            _context.SaveChanges();

            return Ok(veterinarian);
        }
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            var veterinarian = _context.Veterinarians.Find(id);

            if (veterinarian == null)
            {
                return NotFound();
            }

            _context.Remove(veterinarian);
            _context.SaveChanges();

            return Ok(veterinarian);
        }

        private void getSpecialtiesFromVeterinary(System.Collections.Generic.List<Veterinarian> model)
        {
            foreach (var item in model)
            {
                var specialties = _context.Specialties.Find(item.SpecialtyId);
                item.especialidad = specialties;
            }
        }
    }
}
