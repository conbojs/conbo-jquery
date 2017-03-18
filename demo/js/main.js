define(['conbo-jquery'], function(conbo)
{
	conbo('jqtest', function() 
	{
		var ns = this;
		
		class MainApp extends conbo.Application 
		{
			declarations() 
			{
				this.namespace = ns;
			}
			
			initialize() 
			{
				// Let's try something that requires jQuery... 
				this.$content.html('Loaded :-)');
			}
		}
		
		return {MainApp:MainApp};
	});
	
});
