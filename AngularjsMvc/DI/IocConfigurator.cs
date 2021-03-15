using AngularjsMvc;
using Autofac;
using Autofac.Integration.Mvc;
using System.Web.Mvc;
using TicketBooking.MVC5.Mapping;

namespace TicketBooking.MVC.DI
{
    public class IocConfigurator
    {
        public static void ConfigureDependencyInjection()
        {
            var builder = new ContainerBuilder();
            builder.RegisterControllers(typeof(MvcApplication).Assembly);
            var mapper = AutoMapperWebConfiguration.InitializeAutoMapper().CreateMapper();
            builder.RegisterInstance(mapper);
            //builder.RegisterType<LookupJsService>().As<ILookupJsService>();
            IContainer container = builder.Build();
            DependencyResolver.SetResolver(new AutofacDependencyResolver(container));
        }
    }
}