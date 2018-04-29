////////////////////////////////////////////////////////////////////////////////////////////////////////
//FileName: WebApiConfig.cs
//Author : Kite
//Created On : 2018-3-24,
//Last Modified On : 2018-4-29
//Copy Rights : MKS
////////////////////////////////////////////////////////////////////////////////////////////////////////
using System.Web.Http;
using System.Web.Http.Cors;

namespace WebService
{
    /// <summary>
    /// WebApiConfig
    /// </summary>
    [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Naming", "CA1704:IdentifiersShouldBeSpelledCorrectly", MessageId = "Api")]
    public static class WebApiConfig
    {
        /// <summary>
        /// Registers the specified configuration.
        /// </summary>
        /// <param name="config">The configuration.</param>
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Design", "CA1062:Validate arguments of public methods", MessageId = "0")]
        public static void Register(HttpConfiguration config)
        {
            // Web API configuration and services

            // Web API routes
            config.MapHttpAttributeRoutes();

            config.Routes.MapHttpRoute(
                name: "DefaultApi",
                routeTemplate: "api/{controller}/{id}",
                defaults: new { id = RouteParameter.Optional }
            );

            EnableCorsAttribute cors = new EnableCorsAttribute("*", "*", "*");
            config.EnableCors(cors);
        }
    }
}