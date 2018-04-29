namespace WebService.Areas.HelpPage.ModelDescriptions
{
    /// <summary>
    /// CollectionModelDescription
    /// </summary>
    /// <seealso cref="WebService.Areas.HelpPage.ModelDescriptions.ModelDescription" />
    public class CollectionModelDescription : ModelDescription
    {
        /// <summary>
        /// Gets or sets the element description.
        /// </summary>
        /// <value>
        /// The element description.
        /// </value>
        public ModelDescription ElementDescription { get; set; }
    }
}