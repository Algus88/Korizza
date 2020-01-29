using Korizza.Models;
using Microsoft.AspNetCore.Identity;
using System.Linq;
using System.Threading.Tasks;

namespace Korizza.Data
{
    public class DbInicializer
    {
       static string password = "Qwerty12!";
        public static async Task InitializeAsync(UserManager<User> userManager, RoleManager<IdentityRole> roleManager)
        {
            UsersAndRoles users = new UsersAndRoles();
            foreach (var role in users.RoleList())
            {
                if (await roleManager.FindByNameAsync(role) == null)
                {
                    await roleManager.CreateAsync(new IdentityRole(role));
                }
            }
            foreach (var user in users.UsersList())
             {
                 if (userManager.FindByNameAsync(user.UserName).Result == null)
                 {
                    await userManager.CreateAsync(user, password);
                    if(user.UserName.Contains("admin"))
                    {
                        await userManager.AddToRoleAsync(user, users.RoleList()[0]);
                    }
                    if(user.UserName.Contains("editor"))
                    {
                        await userManager.AddToRoleAsync(user, users.RoleList()[1]);
                    }
                 }
             }
        }
    }
}
