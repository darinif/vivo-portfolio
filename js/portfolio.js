$(function(){
	//Página Inicial
	$('a.go-home').bind('click', function(e){
		e.preventDefault();
		$('div.page').hide();
		$('#home').show();
	});

	//Navigation Header
	$('div.page:first').show();
	$('a.infrastructure').bind('click', function(e){
		e.preventDefault;
		$('div.page').hide();
		$('#infrastructure').show();
	});
	$('a.service-desk').bind('click', function(e){
		e.preventDefault;
		$('div.page').hide();
		$('#service-desk').show();
	});
	$('a.information-security').bind('click', function(e){
		e.preventDefault;
		$('div.page').hide();
		$('#information-security').show();
	});
	$('a.sva').bind('click', function(e){
		e.preventDefault;
		$('div.page').hide();
		$('#sva').show();
	});



	//Infraestrutura
	$('a.hosting').bind('click', function(e){
		e.preventDefault;
		$('#infrastructure img').attr('src', 'img/infraestrutura-hosting.jpg');
	});
	$('a.remote-management').bind('click', function(e){
		e.preventDefault;
		$('#infrastructure img').attr('src', 'img/infraestrutura-gestao.jpg');
	});
	$('a.disaster-recovery').bind('click', function(e){
		e.preventDefault;
		$('#infrastructure img').attr('src', 'img/infraestrutura-disaster.jpg');
	});


	//Service-Desk
	$('a.management-lan').bind('click', function(e){
		e.preventDefault;
		$('#service-desk img').attr('src', 'img/service-desk-lan.jpg');
	});
	$('a.management-desktops').bind('click', function(e){
		e.preventDefault;
		$('#service-desk img').attr('src', 'img/service-desk-desktops.jpg');
	});
	$('a.management-support').bind('click', function(e){
		e.preventDefault;
		$('#service-desk img').attr('src', 'img/service-desk-suporte.jpg');
	});


	//Seguranca da Informacao
	$('a.management-security').bind('click', function(e){
		e.preventDefault;
		$('#information-security img').attr('src', 'img/seguranca-managed.jpg');
	});
	$('a.web-security').bind('click', function(e){
		e.preventDefault;
		$('#information-security img').attr('src', 'img/seguranca-web.jpg');
	});


	//SVA
	$('a.multimedia-solution').bind('click', function(e){
		e.preventDefault;
		$('#sva img').attr('src', 'img/sva-multimidia.jpg');
	});
	$('a.collaboration-solution').bind('click', function(e){
		e.preventDefault;
		$('#sva img').attr('src', 'img/sva-colaboracao.jpg');
	});
});