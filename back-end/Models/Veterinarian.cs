using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace justAnApi.Models
{
    public class Veterinarian
    {
        public int Id { get; set; }

        [Required]
        public int Dni { get; set; }
        public string Name { get; set; }
        public string LastName { get; set; }
        public string BornDate { get; set; }
        public string Street { get; set; }
        public int StreetNumber { get; set; }
        public Decimal Salary { get; set; }
        public Boolean State { get; set; }

        [ForeignKey("SpecialtyId")]
        public int SpecialtyId { get; set; }

        public Specialty especialidad { get; set; }

    }
}
