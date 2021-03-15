using AngularjsMvc.DataAccess.Dtos;
using AngularjsMvc.DataAccess.Models;
using AutoMapper;

namespace AngularjsMvc.DataAccess.Mappers
{
    public class DbModelsProfiles : Profile
    {
        public DbModelsProfiles()
        {
            CreateMap<Registration, RegistrationDto>();
        }
    }
}