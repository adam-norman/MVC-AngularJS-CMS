using AngularjsMvc.DataAcces;
using AngularjsMvc.DataAccess.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace AngularjsMvc.Controllers
{
    public class StudentController : Controller
    {
        private ApplicationDbContext db = null;
        public StudentController()
        {
            db = new ApplicationDbContext();
            //connection.Open();
        }
        public JsonResult Index()
        {
            var Students = db.Students.Select(x=> new { x.StudentId,x.Name,x.Birthday}).ToList();
            return Json(Students, JsonRequestBehavior.AllowGet);
        }

        public JsonResult Details(int id)
        {
            var Student = db.Students.Find(id);
            return Json(Student, JsonRequestBehavior.AllowGet);
        }

        [HttpPost]
        public JsonResult Create(Student Student)
        {
            db.Students.Add(Student);
            db.SaveChanges();
            return Json(null);
        }

        [HttpPost]
        public JsonResult Edit(Student Student)
        {
            db.Entry(Student).State = System.Data.Entity.EntityState.Modified;
            db.SaveChanges();
            return Json(null);
        }

        [HttpPost]
        public JsonResult Delete(int id)
        {
            var Student = db.Students.Find(id);
            db.Students.Remove(Student);
            db.SaveChanges();
            return Json(null);
        }
    }
}