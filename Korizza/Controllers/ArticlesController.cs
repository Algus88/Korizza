using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Korizza.Models;
using Korizza.Models.Article;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Korizza.Controllers
{
    [Authorize]
    public class ArticlesController : Controller
    {
        private ApplicationDbContext db;
        public ArticlesController(ApplicationDbContext context)
        {
            db = context;
        }
        [AllowAnonymous]
        public async Task<IActionResult> Articles(string searchRequest)
        {
            var articles = db.Articles.Select(a=>a);
            if (!String.IsNullOrEmpty(searchRequest))
            {
                articles = articles.Where(a => a.Title.Contains(searchRequest));
            }
                return View(await articles.ToListAsync());
        }
        
        public async Task<IActionResult> ArticlesList(string searchRequest)
        {
            var articles = db.Articles.Select(a => a);
            if (!String.IsNullOrEmpty(searchRequest))
            {
                articles = articles.Where(a => a.Title.Contains(searchRequest));
            }
            return View(await articles.ToListAsync());
        }
        public IActionResult Create()
        {
            return View();
        }
        [HttpPost]
        public async Task<IActionResult> Create(ArticleModel article)
        {
            db.Articles.Add(article);
            await db.SaveChangesAsync();
            ViewBag.Message = "Article has created";
            return RedirectToAction("Create");
        }
        // action should take articles id
        public IActionResult Edit(int? id)
        {
            if (id != null)
            {
                ArticleModel editalbleArticle = db.Articles.FirstOrDefault(x => x.Id == id);
                if (editalbleArticle != null)
                {
                    return View(editalbleArticle);
                }
            }
            return NotFound();
        }
        [HttpPost]
        public async Task<IActionResult> Edit(ArticleModel article)
        {
            db.Articles.Update(article);
            await db.SaveChangesAsync();
            ViewBag.Message = "Saving success";
            return RedirectToAction("Edit");
        }
       // action should take articles id
        [HttpPost]
        public async Task<IActionResult> Delete(int? id)
        {
            if(id != null)
            {
                ArticleModel removalbleArticle = await db.Articles.FirstOrDefaultAsync(x => x.Id == id);
                if(removalbleArticle != null)
                {
                    db.Articles.Remove(removalbleArticle);
                    await db.SaveChangesAsync();
                    return RedirectToAction("ArticleList");
                }
            }
            return NotFound();
        }

        [AllowAnonymous]
        // action should take article id parameter 
        public IActionResult ArticleDetails(int id)
        {
            var article = db.Articles.Where(x => x.Id == id).FirstOrDefault(); 
            return View(article);
        }

    }

}
