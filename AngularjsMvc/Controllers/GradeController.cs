using AngularjsMvc.DataAcces;
using AngularjsMvc.DataAccess.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace AngularjsMvc.Controllers
{
    public class GradeController : Controller
    {
        private ApplicationDbContext db = null;
        public GradeController()
        {
            db = new ApplicationDbContext();
            //connection.Open();
        }
        public JsonResult Index()
        {
            var Grades = db.Grades.Select(g => new {
                g.Id,
                g.GradeName,
 
            }).ToList();
            return Json(Grades, JsonRequestBehavior.AllowGet);
        }

        public JsonResult Details(int id)
        {
            var Grade = db.Grades.Select(g=> new { g.Id,g.GradeName }).FirstOrDefault(g=>g.Id==id);
            return Json(Grade, JsonRequestBehavior.AllowGet);
        }

        [HttpPost]
        public JsonResult Create(Grade Grade)
        {
            db.Grades.Add(Grade);
            db.SaveChanges();
            return Json(null);
        }

        [HttpPost]
        public JsonResult Edit(Grade Grade)
        {
            db.Entry(Grade).State = System.Data.Entity.EntityState.Modified;
            db.SaveChanges();
            return Json(null);
        }

        [HttpPost]
        public JsonResult Delete(int id)
        {
            var Grade = db.Grades.Find(id);
            db.Grades.Remove(Grade);
            db.SaveChanges();
            return Json(null);
        }
    }
}