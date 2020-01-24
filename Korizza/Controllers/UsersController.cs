using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Korizza.Models;
using Korizza.Models.Users;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

namespace Korizza.Controllers
{
    
    public class UsersController : Controller
    {
         private readonly UserManager<User> _userManager;
         public UsersController(UserManager<User> userMan)
        {
            _userManager = userMan;
        }
        
        public IActionResult UserCard()
        {
            return View(_userManager.Users.ToList());
        }

        public IActionResult Create()
        {
            return View();
        }
        [HttpPost]
        public async Task<IActionResult> Create(CreateUserViewModel model)
        {
            if (ModelState.IsValid)
            {
                User user = new User { Email = model.Email };
                var exist =  _userManager.UserValidators;
                var result = await _userManager.CreateAsync(user, model.Password);
                if(result.Succeeded)
                {
                    return View("Index");
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
        public async Task<IActionResult> EditAsync(string userName)
        {
            //HttpContext.Response.Cookies.Append("name", userName);
            User user = await _userManager.FindByNameAsync(userName);
            EditUserViewModel model = new EditUserViewModel { Id = user.Id, Email = user.Email};
            return View(model);
        }
        [HttpPost]
        public async Task<IActionResult> EditAsync(EditUserViewModel model)
        {
            if (ModelState.IsValid)
            {
                var user = await _userManager.FindByIdAsync(model.Id);
                user.Email = model.Email;
                // modify password hashing
                user.Password = model.Password;
                var result = await _userManager.UpdateAsync(user);
                if (result.Succeeded)
                {
                    return View("UserCard");
                }
                else
                {
                    foreach (var error in result.Errors)
                    {
                        ModelState.AddModelError(string.Empty, error.Description);
                    }
                }
            }
                return View("UserCard");
        }

    }
}