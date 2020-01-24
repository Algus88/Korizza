using Korizza.Models.Article;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;


namespace Korizza.Models
{
    public class ApplicationDbContext : IdentityDbContext<User>
    {
        public DbSet<ArticleModel> Articles { get; set; }
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options)
        {
            Database.EnsureCreated();
        }
    }
}
