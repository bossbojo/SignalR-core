using System;
using System.Collections.Generic;

namespace WebApi.Entities.Table
{
    public partial class Users
    {
        public int Id { get; set; }
        public string Firstname { get; set; }
        public string Lastname { get; set; }
        public string Username { get; set; }
        public string Password { get; set; }
    }
}
