using Microsoft.AspNetCore.Identity;

namespace Korizza.Models
{
    public class User : IdentityUser
    {
        public string Password { get; set; }
    }
}
