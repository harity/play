using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(gameplay.Startup))]
namespace gameplay
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
