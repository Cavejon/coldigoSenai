COLDIGO.produto = new Object();

$(document).ready(function() {

	//Carrega as marcas registradas no BD no select do formulário de inserir
	COLDIGO.produto.carregarMarcas = function() {
		$.ajax({
			type: "GET",
			url: "/Coldigo/rest/marca/buscar",
			success: function(marcas) {

				if (marcas != "") {
						
						
					$("#selMarca").html("");
					var option = document.createElement("option");
					option.setAttribute("value", "");
					option.innerHTML = ("Escolha");
					$("#selMarca").append(option);

					for (var i = 0; i < marcas.length; i++) {
						
						var option = document.createElement("option");
						option.setAttribute("value", marcas[i].id);
						option.innerHTML = (marcas[i].nome);
						$("#selMarca").append(option);
						
						
					}
				} else {

					$("#selMarca").html("");

					var option = document.createElement("option");
					option.setAttribute("value", "");
					option.innerHTML = ("Cadastre uma marca primeiro!");
					$("#selMarca").append(option);
					$("#selMarca").addClass("Aviso");
				}
			},
			error: function(info) {

				COLDIGO.exibirAviso("Erro ao buscar as marcas: " + info.status +
					"-" + info.StatusText);

				$("#selMarca").html("");
				var option = document.createElement("option");
				option.setAttribute("value", "");
				option.innerHTML = ("Erro ao carregar marcas!");
				$("#selMarca").append(option);
				$("#selMarca").addClass("Aviso");

			}
		});
	}

	COLDIGO.produto.carregarMarcas();
	
	//Cadastra no BD o produto informado
	COLDIGO.produto.cadastrar = function(){}
	
	var produto = new Object();
	produto.categroria = document.frmAddProduto.categoria.value;
	
	
});