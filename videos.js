$(document).ready(function(){$('.video iframe').each(function(){var scale=$(this).parents('.video').width()/500;$(this).attr({width:Math.floor($(this).attr('width')*scale)});});});
