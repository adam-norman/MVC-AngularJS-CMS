using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace AngularjsMvc.DataAccess.Models
{
   public class Course
    {
        [Key]
        public int Id { get; set; }
        [Required,MaxLength(80)]
        public string CourseName { get; set; }
        public ICollection<Subject> Subjects { get; set; }

    }
}
