using AngularjsMvc.DataAcces;
using AngularjsMvc.DataAccess.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace AngularjsMvc.Controllers
{
    public class SubjectController : Controller
    {
        private ApplicationDbContext db = null;
        public SubjectController()
        {
            db = new ApplicationDbContext();
            //connection.Open();
        }
        public JsonResult Index()
        {

            var Subject = (from s in db.Subjects
                          join t in db.Teachers on s.TeacherId equals t.Id
                          join c in db.Courses on s.CourseId equals c.Id
                          select new { Id= s.SubjectId, s.SubjectName,  TeacherName = t.Name ,c.CourseName}).ToList();
            return Json(Subject, JsonRequestBehavior.AllowGet);
        }

        public JsonResult Details(int id)
        {
            var Subject = db.Subjects.Select(c => new { c.SubjectId, c.SubjectName,c.TeacherId,c.CourseId }).FirstOrDefault(c => c.SubjectId == id);
            return Json(Subject, JsonRequestBehavior.AllowGet);
        }

        [HttpPost]
        public JsonResult Create(Subject Subject)
        {
            db.Subjects.Add(Subject);
            db.SaveChanges();
            return Json(null);
        }

        [HttpPost]
        public JsonResult Edit(Subject Subject)
        {
            db.Entry(Subject).State = System.Data.Entity.EntityState.Modified;
            db.SaveChanges();
            return Json(null);
        }

        [HttpPost]
        public JsonResult Delete(int id)
        {
            var Subject = db.Subjects.Find(id);
            db.Subjects.Remove(Subject);
            db.SaveChanges();
            return Json(null);
        }
    }
}