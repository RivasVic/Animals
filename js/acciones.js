//JavaScript
	
$(document).ready(function(e){	
$('#principal').height($('#page').height());//calcular el alto de la pantalla del dispositivo
	document.addEventListener("deviceready",function(){
	//precarga el sonido
	audio=window.plugins.LowLatencyAudio;
	audio.preloadFX('gua','audio/pavo.mp3',function(){},function(e){alert('Error '+e);});
	audio.preloadFX('caba','audio/cab.mp3',function(){},function(e){alert('Error '+e);});
	audio.preloadFX('chen','audio/chencho.mp3',function(){},function(e){alert('Error '+e);});
	audio.preloadFX('bor','audio/borr.mp3',function(){},function(e){alert('Error '+e);});
	audio.preloadFX('pollo','audio/pollito.mp3',function(){},function(e){alert('Error '+e);});
	audio.preloadFX('pato','audio/pato.mp3',function(){},function(e){alert('Error '+e);});
	audio.preloadFX('hip','audio/hipo.mp3',function(){},function(e){alert('Error '+e);});
	audio.preloadFX('jir','audio/jir.mp3',function(){},function(e){alert('Error '+e);});
	audio.preloadFX('leo','audio/SI.mp3',function(){},function(e){alert('Error '+e);});
	audio.preloadFX('mon','audio/mon.mp3',function(){},function(e){alert('Error '+e);});
	audio.preloadFX('tuc','audio/tuc.mp3',function(){},function(e){alert('Error '+e);});
	audio.preloadFX('zeb','audio/zebra.mp3',function(){},function(e){alert('Error '+e);});
	
	//reproducir las notas
	
	$('.capa').bind('touchstart', function(){$(this).addClass('tocada'); audio.play($(this).attr('id'));});
	$('.capa').bind('touchend',function(){$(this).removeClass('tocada');});
	
	
	},false); //deviceready
});//ready