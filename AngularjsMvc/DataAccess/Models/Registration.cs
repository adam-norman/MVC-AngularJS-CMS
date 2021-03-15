using Newtonsoft.Json;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace AngularjsMvc.DataAccess.Models
{
    public class Registration
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int RegistrationNumber { get; set; }
        public int StudentId { get; set; }
        [JsonIgnore]

        public virtual Student Student { get; set; }
        public int SubjectId { get; set; }
        [JsonIgnore]

        public virtual Subject Subject { get; set; }
        public int GradeId { get; set; }
        [JsonIgnore]

        public virtual Grade Grade { get; set; }
     
    }
}