using AngularjsMvc.DataAcces;
using AngularjsMvc.DataAccess.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using AutoMapper;
using AngularjsMvc.DataAccess.Dtos;

namespace AngularjsMvc.Controllers
{
    public class RegistrationController : Controller
    {
        private ApplicationDbContext db = null;
        private IMapper _mapper;
        public RegistrationController(IMapper mapper)
        {
            db = new ApplicationDbContext();
              _mapper = mapper;
        }

        public JsonResult Index()
        {

            var Registration = (from r in db.Registrations
                           join st in db.Students on r.StudentId equals st.StudentId
                           join sb in db.Subjects on r.SubjectId equals sb.SubjectId
                           join g in db.Grades on r.GradeId equals g.Id
                                select new {Id= r.RegistrationNumber, StudentName= st.Name, sb.SubjectName,g.GradeName}).ToList();
            return Json(Registration, JsonRequestBehavior.AllowGet);
        }

        public JsonResult Details(int id)
        {
             var Registration = _mapper.Map<Registration,RegistrationDto>(db.Registrations.FirstOrDefault(r=> r.RegistrationNumber==id));
            return Json(Registration, JsonRequestBehavior.AllowGet);
        }

        [HttpPost]
        public JsonResult Create(Registration Registration)
        {
            db.Registrations.Add(Registration);
            db.SaveChanges();
            return Json(null);
        }

        [HttpPost]
        public JsonResult Edit(Registration Registration)
        {
            db.Entry(Registration).State = System.Data.Entity.EntityState.Modified;
            db.SaveChanges();
            return Json(null);
        }

        [HttpPost]
        public JsonResult Delete(int id)
        {
            var Registration = db.Registrations.Find(id);
            db.Registrations.Remove(Registration);
            db.SaveChanges();
            return Json(null);
        }
    }
}