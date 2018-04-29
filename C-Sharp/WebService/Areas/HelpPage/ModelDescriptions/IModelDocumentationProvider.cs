using System;
using System.Reflection;

namespace WebService.Areas.HelpPage.ModelDescriptions
{
    /// <summary>
    /// IModelDocumentationProvider
    /// </summary>
    public interface IModelDocumentationProvider
    {
        /// <summary>
        /// Gets the documentation.
        /// </summary>
        /// <param name="member">The member.</param>
        /// <returns></returns>
        string GetDocumentation(MemberInfo member);

        /// <summary>
        /// Gets the documentation.
        /// </summary>
        /// <param name="type">The type.</param>
        /// <returns></returns>
        string GetDocumentation(Type type);
    }
}