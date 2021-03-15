using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace AngularjsMvc.DataAccess.Models
{
    public class Student
    {
        
        [Key]
        public int StudentId { get; set; }
        public string Name { get; set; }
        public DateTime Birthday { get; set; }
        [JsonIgnore]

        public virtual ICollection<Registration> Registrations { get; set; }

    }
}