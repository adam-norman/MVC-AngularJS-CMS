using AutoMapper;
using CafeMarketAnalyzer.Mappers;

namespace TicketBooking.MVC5.Mapping
{
    public static class AutoMapperWebConfiguration
    {
        public static MapperConfiguration InitializeAutoMapper()
        {
            MapperConfiguration config = new MapperConfiguration(cfg =>
            {
                cfg.AddProfile(new MapperDtoProfiles());  
            });
            return config;
        }
    }
}