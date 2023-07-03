package br.com.coldigogeladeiras.rest;

import javax.ws.rs.core.Response;
import javax.ws.rs.core.Response.ResponseBuilder;

import com.google.gson.Gson;

public class UtilRest {
	
	/*
	 * Abaixo o método responsável por enviar a resposta ao cliente sobre
	 * a transação realizada (inclusão, consulta, edução ou exclusão) caso
	 * ela seja realizada com sucesso
	 * Repare que o método em questão aguarda que seja repassado um
	 * conteúdo que será referenciado por um objeto chamado result.
	 */
	
	
	public Response buildResponse(Object result) {
		
		try {
			/*
			 * Retorna o objeto de resposta com status 200(ok), tendo 
			 * em seu corpo o objeto ValorResposta (que consiste no objeto
			 * result convertido para JSON)
			 */
			String valorResposta = new Gson().toJson(result);
			return Response.ok(valorResposta).build();
		}catch (Exception ex) {
			ex.printStackTrace();
			//Se algo der errado acima, cria Response erro
			return this.buildErrorResponse(ex.getMessage());
		}
	}
	
	
	public Response buildErrorResponse(String str) {
		/*
		 * Abaixo o objeto rb recebe o status do erro.
		 */
		ResponseBuilder rb = Response.status(Response.Status.INTERNAL_SERVER_ERROR);
		/*
		 * Define o tipo de retorno desta entidade(Objeto), no
		 * caso é definido como texto simples.
		 */
		rb = rb.entity(str);
		/*
		 * Define o tipo de retorno desta entidade(objeto), no
		 * caso é definido como texto simples.
		 */
		rb = rb.type("text/plain");
		/*
		 * Retorna o objeto de resposta com status 500(erro),
		 * junto com a String contetndo a mensagem de erro
		 */
		return rb.build();
	}
	
	
	
	
	
}