using AngularjsMvc.DataAccess.Models;
using System.Data.Entity;
using AngularjsMvc.Migrations;
namespace AngularjsMvc.DataAcces
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext() : base("name = CmsDBContext")
        {
            Database.SetInitializer(new MigrateDatabaseToLatestVersion<ApplicationDbContext,  Configuration>());
        }

        // setting EF convention
        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
        }

        public DbSet<Course> Courses { get; set; }
        public DbSet<Subject> Subjects { get; set; }
        public DbSet<Teacher> Teachers { get; set; }
        public DbSet<Student> Students { get; set; }
        public DbSet<Grade> Grades { get; set; }
        public DbSet<Registration> Registrations { get; set; }
    }
}