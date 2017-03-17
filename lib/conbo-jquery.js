/*
 * jQuery integration for ConboJS
 */

(function(window, factory, undefined)
{
	/* Universal Module Definition (UMD) */

    // AMD (recommended)
    if (typeof define == 'function' && define.amd) 
	{
		define('conbo-jquery', ['conbo', 'jquery'], function(conbo, $)
		{
			factory(conbo, $);
		});
	}
	// Common.js & Node.js
	else if (typeof module != 'undefined' && module.exports)
	{
   		factory(require('conbo'), require('jquery'));
    }
	// Global
	else
	{
		factory(window.conbo, window.jQuery);
	}
	
})(this, function(conbo, $, undefined)
{
	'use strict';
	
	/* Globals */
	
	/**
	 * Local jQuery instance for use by your applications
	 * @namespace	conbo.$
	 */
	conbo.$ = $;
	
	/* View */
	
	conbo.defineValues(conbo.View.prototype,
	/** @lends conbo.View.prototype */
	{
		/**
		 * jQuery delegate for finding elements within the current View, but not
		 * within child Views 
		 * 
		 * @deprecated
		 * @see					#querySelectorAll
		 * @param	{string}	selector - The jQuery selector to use
		 * @param	{boolean}	deep - Whether or not to include nested views in the search (default: false)
		 */
		$: function(selector, deep)
		{
			if (deep)
			{
				return this.$el.find(selector);
			}
			
			var $nestedViews = this.$el.find('.cb-app, [cb-app], .cb-view, [cb-view]');
			
			return this.$el.find(selector).filter(function()
			{
				if (!!$nestedViews.find(this).length || !!$nestedViews.filter(this).length) 
				{
					return false;
				}
				
				return true;
			});
		},
		
		/**
		 * This View's element wrapped as a jQuery object
		 * @deprecated
		 */
		get $el()
		{
			if (this.el)
			{
				return $(this.el);
			}
		},
		
		/**
		 * A jQuery wrapped version of the `content` element
		 * 
		 * @deprecated
		 * @see	#content
		 */
		get $content()
		{
			var content = this.content;
			if (content) return $(content); 
		},
		
		/**
		 * A jQuery wrapped version of the body element
		 * @see		body
		 */
		get $body()
		{
			return this.$content || this.$el;
		},
	});
	
});
