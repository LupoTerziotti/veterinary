using System;
using System.ComponentModel.DataAnnotations;

namespace justAnApi.Models
{
    public class Specialty
    {
        public int Id { get; set; }

        [Required]
        public string Name { get; set; }
        public string Description { get; set; }

    }
}
