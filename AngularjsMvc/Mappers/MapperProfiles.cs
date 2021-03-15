using AngularjsMvc.DataAccess.Dtos;
using AngularjsMvc.DataAccess.Models;
using AutoMapper;

namespace CafeMarketAnalyzer.Mappers
{
    public class MapperDtoProfiles : Profile
    {
        public MapperDtoProfiles()
        {
        
            CreateMap<Registration, RegistrationDto>()
                .ForSourceMember(src => src.Subject, opt => opt.DoNotValidate())
                .ForSourceMember(src => src.Grade, opt => opt.DoNotValidate())
                .ForSourceMember(src => src.Student, opt => opt.DoNotValidate());
        }
    }
}