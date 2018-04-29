// <copyright file="UserController.cs" company="MKS">
// Copyright (c) 2018 All Rights Reserved
// </copyright>
// <date>2018-4-30</date>

namespace WebService.Controllers
{
    using System.Web.Http;
    using Domain;

    /// <summary>
    /// User Controller
    /// </summary>
    /// <seealso cref="System.Web.Http.ApiController" />
    public class UserController : ApiController
    {
        /// <summary>
        /// Indexes this instance.
        /// </summary>
        /// <returns>returns User</returns>
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Performance", "CA1822:MarkMembersAsStatic", Justification = "MVC Application")]
        [HttpGet]
        public User Index()
        {
            User domain = new User();
            domain.Name = "Murali";
            return domain;
        }
    }
}