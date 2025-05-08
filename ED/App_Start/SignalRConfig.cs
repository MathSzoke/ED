using Microsoft.Owin;
using Owin;

[assembly: OwinStartup(typeof(ED.App_Start.SignalRConfig))]
namespace ED.App_Start
{
    public class SignalRConfig
    {
        public void Configuration(IAppBuilder app)
        {
            app.MapSignalR();
        }
    }
}