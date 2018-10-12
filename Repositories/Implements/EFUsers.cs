using System.Collections.Generic;
using System.Linq;
using WebApi.Entities;
using WebApi.Entities.Table;
using WebApi.Models;
using WebApi.Repositories.Interfaces;

namespace WebApi.Repositories.Implements
{
    public class EFUsers : IUsers
    {
        private ConnectDB db = new ConnectDB();

        public Users CreateUsers(ModelUsers input)
        {
            var create = db.Users.Add(new Users
            {
                Firstname = input.Firstname,
                Lastname = input.Lastname,
                Username = input.Username,
                Password = input.Password
            });
            int save = db.SaveChanges();
            if (save > 0)
            {
                return create.Entity;
            }
            throw new System.Exception("Save to database is failed");
        }

        public bool DeleteUsers(int id)
        {
            var delete = db.Users.FirstOrDefault(c => c.Id == id);
            db.Remove(delete);
            int save = db.SaveChanges();
            if (save > 0)
            {
                return true;
            }
            throw new System.Exception($"Delete failed for Id = {id}");
        }

        public IEnumerable<Users> GetUsers()
        {
            return db.Users.ToList();
        }

        public Users GetUsers(int id)
        {
            return db.Users.FirstOrDefault(c => c.Id == id);
        }

        public Users UpdateUsers(ModelUsers input, int id)
        {
            var update = db.Users.FirstOrDefault(c => c.Id == id);
            update.Firstname = input.Firstname;
            update.Lastname = input.Lastname;
            update.Username = input.Username;
            update.Password = input.Password;
            int save = db.SaveChanges();
            if (save > 0)
            {
                return update;
            }
            throw new System.Exception("Save to database is failed");
        }
    }
}