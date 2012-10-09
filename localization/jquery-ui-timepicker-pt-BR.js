/* Brazilian Portuguese translation for the jQuery Timepicker Addon */
/* Written by Diogo Damiani (diogodamiani@gmail.com) */
(function ($) {
	$.timepicker.regional['pt-BR'] = {
		timeOnlyTitle: 'Escolha a hor�rio',
		timeText: 'Hor�rio',
		hourText: 'Hora',
		minuteText: 'Minutos',
		secondText: 'Segundos',
		millisecText: 'Milissegundos',
		timezoneText: 'Fuso hor�rio',
		currentText: 'Agora',
		closeText: 'Fechar',
		timeFormat: 'hh:mm',
		amNames: ['a.m.', 'AM', 'A'],
		pmNames: ['p.m.', 'PM', 'P'],
		ampm: false,
		isRTL: false,
		dateFormat: 'dd/mm/yy',
	    dayNamesMin: ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'],
	    monthNames: ['Janeiro','Fevereiro','Mar�o','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'],
	    dayNamesShort: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'],
	    showOtherMonths: true,
	    selectOtherMonths: true
	};
	$.timepicker.setDefaults($.timepicker.regional['pt-BR']);
})(jQuery);
