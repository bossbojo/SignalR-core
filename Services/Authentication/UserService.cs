using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using WebApi.Entities.Table;
using WebApi.Repositories.Interfaces;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;

namespace WebApi.Services.Authentication
{
    public interface IUserService
    {
        Authen Authenticate(string username, string password);
    }
    public class UserService : IUserService
    {
        private readonly AppSettings _appSettings;
        private readonly IUsers _users;
        public UserService(IOptions<AppSettings> appSettings,IUsers users)
        {
            _appSettings = appSettings.Value;
            _users = users;
        }
        public Authen Authenticate(string username, string password)
        {
            var user = _users.GetUsers().FirstOrDefault(x => x.Username == username && x.Password == password);
            // return null if user not found
            if (user == null)
                return null;

            // authentication successful so generate jwt token
            var tokenHandler = new JwtSecurityTokenHandler();
            var key = Encoding.ASCII.GetBytes(_appSettings.Secret);
            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(new Claim[]
                {
                    new Claim(ClaimTypes.Name, user.Id.ToString()),
                    new Claim(ClaimTypes.Role,"Admin")
                }),
                Expires = DateTime.UtcNow.AddMinutes(1),
                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature)
            };
            var token = tokenHandler.CreateToken(tokenDescriptor);

            Authen auth = new Authen{
                Username = user.Username,
                Firstname = user.Firstname,
                Lastname = user.Lastname,
                Token = tokenHandler.WriteToken(token)
            };
            // remove password before returning
            user.Password = null;

            return auth;
        }

    }
}