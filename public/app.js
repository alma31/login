(function(){
	"use strict";
	var app = {

		init:function(){	
			$('form').on('submit',  app.recupinfo);

		},

		recupinfo: function(){
			// event.preventDefault();
			var nom = $('#pseudo').val();
			var mdp = $('#mdp').val();
			console.log(nom,mdp);
		},
	};


	$(document).ready(function(){
		app.init();
	});
})();