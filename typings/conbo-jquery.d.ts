/**
 * Type declarations for JQuery integration for ConboJS
 * @author	Neil Rackett
 */
declare namespace conbo 
{
	/**
	 * @deprecated
	 */
	const $: JQueryStatic;

	interface View
	{
		/**
		 * jQuery delegate for finding elements within the current View, but not
		 * within child Views 
		 * 
		 * @deprecated
		 * @see		#querySelectorAll
		 * @param	selector - The jQuery selector to use
		 * @param	deep - Whether or not to include nested views in the search (default: false)
		 */
		$(selector:string | HTMLElement, deep?:boolean): JQuery<HTMLElement>;
		
		/**
		 * This View's element wrapped as a jQuery object
		 * @deprecated
		 */
		readonly $el: JQuery<HTMLElement>;
		
		/**
		 * A jQuery wrapped version of the `content` element
		 * 
		 * @deprecated
		 * @see	#content
		 */
		readonly $content: JQuery<HTMLElement>;
		
		/**
		 * A jQuery wrapped version of the body element
		 * @see		body
		 */
		readonly $body: JQuery<HTMLElement>;
	}
}
