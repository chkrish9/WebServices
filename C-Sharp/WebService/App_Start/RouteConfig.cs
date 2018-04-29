// <copyright file="RouteConfig.cs" company="MKS">
// Copyright (c) 2018 All Rights Reserved
// </copyright>
// <date>2018-4-30</date>

namespace WebService
{
    using System.Web.Mvc;
    using System.Web.Routing;

    /// <summary>
    /// Route Config
    /// </summary>
    [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Design", "CA1053:StaticHolderTypesShouldNotHaveConstructors", Justification = "MVC Application")]
    public class RouteConfig
    {
        /// <summary>
        /// Registers the routes.
        /// </summary>
        /// <param name="routes">The routes.</param>
        public static void RegisterRoutes(RouteCollection routes)
        {
            routes.IgnoreRoute("{resource}.axd/{*pathInfo}");

            routes.MapRoute(
                name: "Default",
                url: "{controller}/{action}/{id}",
                defaults: new { controller = "User", action = "Index", id = UrlParameter.Optional });
        }
    }
}