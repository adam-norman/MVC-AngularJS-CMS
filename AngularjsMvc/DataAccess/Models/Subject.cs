using Newtonsoft.Json;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace AngularjsMvc.DataAccess.Models
{
    public class Subject
    {
        
        [Key]
        public int SubjectId { get; set; }
        [MaxLength(100),Required]
        public string SubjectName { get; set; }
      
        [Required]
        public int TeacherId { get; set; }
        public Teacher Teacher { get; set; }
        public int CourseId { get; set; }
        [JsonIgnore]

        public virtual Course Course { get; set; }
        [JsonIgnore]

        public virtual ICollection<Registration> Registrations { get; set; }


    }
}