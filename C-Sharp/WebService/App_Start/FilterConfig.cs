// <copyright file="FilterConfig.cs" company="MKS">
// Copyright (c) 2018 All Rights Reserved
// </copyright>
// <date>2018-4-30</date>

namespace WebService
{
    using System.Web.Mvc;

    /// <summary>
    /// Filter Config
    /// </summary>
    [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Design", "CA1053:StaticHolderTypesShouldNotHaveConstructors", Justification = "MVC Application")]
    public class FilterConfig
    {
        /// <summary>
        /// Registers the global filters.
        /// </summary>
        /// <param name="filters">The filters.</param>
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Design", "CA1062:Validate arguments of public methods", MessageId = "0", Justification = "MVC Application")]
        public static void RegisterGlobalFilters(GlobalFilterCollection filters)
        {
            filters.Add(new HandleErrorAttribute());
        }
    }
}