$(function(){	
	$('#root .content dl dt').click(function(){
		var dt = $(this);
		var dl = dt.parent();
		var dd = dt.next();
		var dds = dl.find('dd').not(dd);
		
		dds.slideUp();

		if(dd.height() > 0 && dd.css('display') != 'none'){
			dd.slideUp();
		}else{			
			dd.slideDown(function(){
				var scroller = dl.data('scroll')
					scroller.refresh();
			});
		}
	});
	
	$('#root .wrapper .content img.txt, #root .wrapper .content dl').each(function(){
		$(this).data('scroll', new iScroll(this));
	});
});