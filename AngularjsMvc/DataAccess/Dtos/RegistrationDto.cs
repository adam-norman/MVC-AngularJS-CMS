using Newtonsoft.Json;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace AngularjsMvc.DataAccess.Dtos
{
    public class RegistrationDto
    {
         
        public int RegistrationNumber { get; set; }
        public int StudentId { get; set; }
      
        public int SubjectId { get; set; }
         
        public int GradeId { get; set; }
      
    }
}