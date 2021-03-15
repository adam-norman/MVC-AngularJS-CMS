using AngularjsMvc.DataAcces;
using AngularjsMvc.DataAccess.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace AngularjsMvc.Controllers
{
    public class CourseController : Controller
    {
        private ApplicationDbContext db = null;
        public CourseController()
        {
            db = new ApplicationDbContext();
            //connection.Open();
        }
        public JsonResult Index()
        {
            var Courses = db.Courses.Select(c=> new { c.Id,c.CourseName}).ToList();
            return Json(Courses, JsonRequestBehavior.AllowGet);
        }

        public JsonResult Details(int id)
        {
            var Course = db.Courses.Select(c => new { c.Id, c.CourseName }).FirstOrDefault(c=>c.Id==id);
            return Json(Course, JsonRequestBehavior.AllowGet);
        }

        [HttpPost]
        public JsonResult Create(Course Course)
        {
            db.Courses.Add(Course);
            db.SaveChanges();
            return Json(null);
        }

        [HttpPost]
        public JsonResult Edit(Course Course)
        {
            db.Entry(Course).State = System.Data.Entity.EntityState.Modified;
            db.SaveChanges();
            return Json(null);
        }

        [HttpPost]
        public JsonResult Delete(int id)
        {
            var Course = db.Courses.Find(id);
            db.Courses.Remove(Course);
            db.SaveChanges();
            return Json(null);
        }
    }
}