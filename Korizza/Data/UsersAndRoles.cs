using Korizza.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Korizza.Data
{
    public class UsersAndRoles
    {
        public List<User> UsersList()
        {
             List<User> startUsers = new List<User> {
            new User{ UserName="admin"},
            new User{ UserName="editor1"},
            new User{ UserName="editor2"},
            new User{ UserName="editor3"}
          };
            return startUsers;
        }
        public List<string> RoleList()
            {
                return new List<string>{ "admin","editor" };
            }
    
    }
}
