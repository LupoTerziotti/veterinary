using justAnApi.Models;
using Microsoft.EntityFrameworkCore;

namespace justAnApi.Controllers
{
    public class ApiContext : DbContext
    {
        public ApiContext(DbContextOptions<ApiContext> options)
            : base(options)
        {
            this.Database.EnsureCreated();
        }

        public DbSet<Veterinarian> Veterinarians { get; set; }
        public DbSet<Specialty> Specialties { get; set; }
    }
}
