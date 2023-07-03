var COLDIGO = new Object();

$(document).ready(function() {
	
	COLDIGO.PATH = "/Coldigo/rest/"

	$("header").load("/Coldigo/pages/admin/general/header.html");
	$("footer").load("/Coldigo/pages/admin/general/footer.html");


	COLDIGO.carregaPagina = function(pagename) {
		// Remove o conteúdo criado na abertura de uma janela modal pelo jQueryUI
		if($(".ui-dialog")) {
			$(".ui-dialog").remove();
		}
				
		// Limpa a  tag section, excluindo todo o conteúdo dentro dela
		$("section").empty();

		// Carrega a página solicitada dentro da tag section
		$("section").load(pagename + "/", function(response, status, info) {
			if (status == "error") {
				var msg = "Houve um erro ao encontrar a página: " + info.status + " - " + info.statusText;
				$("section").html(msg);
			}
		})
	}

	// Define as configurações base de uma modal de aviso
	COLDIGO.exibirAviso = function(aviso) {
		var modal = {
			title: "Mensagem",
			height: 250,
			width: 400,
			modal: true,
			buttons: {
				"OK": function() {
					$(this).dialog("close");
				}
			}
		}

		$("#modalAviso").html(aviso);
		$("#modalAviso").dialog(modal);
	};

	COLDIGO.formatarDinheiro = (valor) => {
		return valor.toFixed(2).replace(".", ",").replace(/(\d)(?=(\d{3})+\,)/g, "$1.");
	}
});