using Domain;
using System.Web.Http;

namespace WebService.Controllers
{
    /// <summary>
    /// UserController
    /// </summary>
    /// <seealso cref="System.Web.Http.ApiController" />
    public class UserController : ApiController
    {
        /// <summary>
        /// Indexes this instance.
        /// </summary>
        /// <returns></returns>
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Performance", "CA1822:MarkMembersAsStatic")]
        [HttpGet]
        public User Index()
        {
            User domain = new User();
            return domain;
        }
    }
}