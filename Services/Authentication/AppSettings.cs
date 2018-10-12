namespace WebApi.Services.Authentication
{
    public class AppSettings
    {
        public string Secret { get; set; }
    }
    public class Authen
    {
        public string Username { get; set; }
        public string Firstname { get; set; }
        public string Lastname { get; set; }
        public string Token { get; set; }
    }
    public class ModelAuthen
    {
        public string Username { get; set; }
        public string Password { get; set; }
    }
}