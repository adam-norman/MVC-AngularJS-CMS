using AngularjsMvc.DataAcces;
using AngularjsMvc.DataAccess.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
 

namespace AngularjsMvc.Controllers
{
    public class TeacherController : Controller
    {
        private ApplicationDbContext db = null;
        public TeacherController()
        {
            db = new ApplicationDbContext();
            //connection.Open();
        }
        public JsonResult Index()
        {
            var teachers = db.Teachers.ToList();
            return Json(teachers, JsonRequestBehavior.AllowGet);
        }

        public JsonResult Details(int id)
        {
            var teacher = db.Teachers.Find(id);
            return Json(teacher, JsonRequestBehavior.AllowGet);
        }

        [HttpPost]
        public JsonResult Create(Teacher teacher)
        {
            db.Teachers.Add(teacher);
            db.SaveChanges();
            return Json(null);
        }

        [HttpPost]
        public JsonResult Edit(Teacher teacher)
        {
            db.Entry(teacher).State = System.Data.Entity.EntityState.Modified;
            db.SaveChanges();
            return Json(null);
        }

        [HttpPost]
        public JsonResult Delete(int id)
        {
            var teacher = db.Teachers.Find(id);
            db.Teachers.Remove(teacher);
            db.SaveChanges();
            return Json(null);
        }
    }
}