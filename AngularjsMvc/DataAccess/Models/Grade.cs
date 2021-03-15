using Newtonsoft.Json;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace AngularjsMvc.DataAccess.Models
{
    public class Grade
    {
        public int Id { get; set; }
        [Required]
        [MaxLength(10)]
        public string GradeName { get; set; }
      
        [JsonIgnore]

        public virtual ICollection<Registration> Registrations { get; set; }
    }
}