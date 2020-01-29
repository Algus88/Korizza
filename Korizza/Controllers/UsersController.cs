using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Korizza.Models;
using Korizza.Models.Users;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Korizza.Controllers
{
    [Authorize]
    public class UsersController : Controller
    {
         private readonly UserManager<User> _userManager;
         private readonly SignInManager<User> _signInManager;
        public UsersController(UserManager<User> userMan, SignInManager<User> signInManager)
        {
            _userManager = userMan;
            _signInManager = signInManager;
        }

        public async Task<IActionResult> UsersList(string searchRequest)
        {
            var usersList = _userManager.Users;

            if (!String.IsNullOrEmpty(searchRequest))
            {
                usersList = usersList.Where(s => s.UserName.Contains(searchRequest));
            }
            return View(await usersList.ToListAsync());
        }
        [Authorize(Roles = "admin")]
        public IActionResult Create()
        {
            return View();
        }
        [Authorize(Roles = "admin")]
        [HttpPost]
        public async Task<IActionResult> Create(CreateUserViewModel model)
        {
            if (ModelState.IsValid)
            {
                User user = new User { Email = model.Email, UserName = model.Name };
                var result = await _userManager.CreateAsync(user, model.Password);
                if (result.Succeeded)
                {
                    await _signInManager.SignInAsync(user, false);
                    return RedirectToAction("UsersList");
                }
                else
                {
                    foreach (var error in result.Errors)
                    {
                        ModelState.AddModelError(string.Empty, error.Description);
                    }
                }
            }
            return View(model);
        }

        [Authorize]
        public async Task<IActionResult> Edit(string userName)
        {
            //HttpContext.Response.Cookies.Append("name", userName);
            User user = await _userManager.FindByNameAsync(userName);
            EditUserViewModel model = new EditUserViewModel { Id = user.Id, Email = user.Email};
            return View(model);
        }

        [Authorize]
        [HttpPost]
        public async Task<IActionResult> Edit(EditUserViewModel model)
        {
            if (ModelState.IsValid)
            {
                var user = await _userManager.FindByIdAsync(model.Id);
                if (model.Email != null)
                {
                    user.Email = model.Email; 
                }
                var passwordHasher = HttpContext.RequestServices.GetService(typeof(IPasswordHasher<User>)) as IPasswordHasher<User>;
                if (model.Password != null)
                {
                    user.PasswordHash = passwordHasher.HashPassword(user, model.Password);
                }
                var result = await _userManager.UpdateAsync(user);
                if (result.Succeeded)
                {
                    ViewBag.Message = "Update complete";
                    //return RedirectToAction("UsersList");
                }
                else
                {
                    foreach (var error in result.Errors)
                    {
                        ModelState.AddModelError(string.Empty, error.Description);
                    }
                }
            }
                return View(model);
        }
        [Authorize]
        [HttpPost]
        public async Task<ActionResult> Delete(string id)
        {
            User user = await _userManager.FindByIdAsync(id);
            if (user != null)
            {
                IdentityResult result = await _userManager.DeleteAsync(user);
            }
            return RedirectToAction("UsersList");
        }
    }
}
