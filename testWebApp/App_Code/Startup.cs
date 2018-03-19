using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(testWebApp.Startup))]
namespace testWebApp
{
    public partial class Startup {
        public void Configuration(IAppBuilder app) {
            ConfigureAuth(app);
        }
    }
}
