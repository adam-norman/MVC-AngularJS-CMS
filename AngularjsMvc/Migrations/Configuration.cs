namespace AngularjsMvc.Migrations
{
    using AngularjsMvc.DataAcces;
    using AngularjsMvc.DataAccess.Models;
    using System;
    using System.Collections.Generic;
    using System.Data.Entity.Migrations;

    internal sealed class Configuration : DbMigrationsConfiguration<ApplicationDbContext>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = false;
        }

        protected override void Seed(ApplicationDbContext context)
        {
            // return;
            var students = new List<Student> {
            new Student { Name = "Buck Vasquez",
                    Birthday= DateTime.Parse("2002-09-01") },
                new Student { Name= "Ed Malone",
                    Birthday= DateTime.Parse("2002-09-01") },
                new Student { Name= "Aldrich Spraggins",
                    Birthday= DateTime.Parse("2002-09-01") },
                new Student { Name= "Magnus Shortle",
                    Birthday= DateTime.Parse("2002-09-01") },
                new Student { Name= "Haven Bates",
                    Birthday= DateTime.Parse("2002-09-01") },
                new Student { Name= "Jasmine Schmidt",
                    Birthday= DateTime.Parse("2002-09-01") },
                new Student { Name= "Laura Fowler",
                    Birthday= DateTime.Parse("2002-09-01") },
                new Student { Name= "Emily Jenning",
                    Birthday= DateTime.Parse("2002-08-11") }
            };

            students.ForEach(s => context.Students.AddOrUpdate(s));


            var grades = new List<Grade> {
                new Grade{  GradeName="A" },
                new Grade{  GradeName="B+" },
                new Grade{  GradeName="B"  },
                new Grade{  GradeName="B-" },
                new Grade{  GradeName="B"  },
                new Grade{  GradeName="C+" },
                new Grade{  GradeName="C" },
                new Grade{  GradeName="D" },
                new Grade{  GradeName="F" },
                new Grade{  GradeName="W" }
            };

            grades.ForEach(g => context.Grades.AddOrUpdate(g));


            var courses = new List<Course> {
                new Course{  CourseName ="Computer Sciences", Subjects=new List<Subject>{
                    new Subject { SubjectName = "Networks",      Teacher= new Teacher { Name = "Carson  Alexander",
                    Birthday= DateTime.Parse("1990-09-01"), Salary=5500 }, Registrations= new  List<Registration>{ new Registration {GradeId=1, StudentId=1,SubjectId=1 } }
                    },
                    new Subject { SubjectName = "Robotics",    Teacher=new Teacher { Name= "Meredith Alonso",
                    Birthday= DateTime.Parse("1992-09-01"), Salary=6000} },
                    new Subject { SubjectName = "Compilers",     Teacher= new Teacher { Name= "Arturo Anand",
                    Birthday= DateTime.Parse("1993-09-01") , Salary=5000}},
                    new Subject { SubjectName = "Logical Circuits",   Teacher= new Teacher { Name= "Gytis Barzdukas",
                    Birthday= DateTime.Parse("1985-09-01"), Salary=4100 }},
                } },
                new Course{  CourseName ="Information Technology", Subjects = new List<Subject>{
                    new Subject { SubjectName = "Databases",      Teacher= new Teacher { Name= "Yan Li",
                    Birthday= DateTime.Parse("1988-09-01"), Salary=3400 } },
                    new Subject { SubjectName = "Statistcs",     Teacher= new Teacher { Name= "Peggy Justice",
                    Birthday= DateTime.Parse("1987-09-01"), Salary=4300 } },
                    new Subject { SubjectName = "Information Theory",     Teacher= new Teacher { Name= "Laura Norman",
                    Birthday= DateTime.Parse("1986-09-01"), Salary=2800 } },
                    new Subject { SubjectName = "Literature",     Teacher = new Teacher { Name= "Nino Olivetto",
                    Birthday= DateTime.Parse("1992-08-11"), Salary=3500 }}} },
            };

            courses.ForEach(c => context.Courses.AddOrUpdate(c));



        }
    }
}