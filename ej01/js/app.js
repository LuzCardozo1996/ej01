$("#btnCalcular").click(function(){
	Calcular();
});

function Calcular(){

let opcion = $("#divisas option:selected").html();
let divisas= $("#divisas option:selected").val();
let montoIn=$("#montoIng").val();
let cambio;
cambio = parseInt(divisas)*parseInt(montoIn);
if(opcion == "Dolar"){
  	
  	 $("#cotizacion").html(divisas+" Gs.");
     $("#montoI").html(montoIn+ " USD.");
     $("#cambio").html(cambio + " Gs.");

  }
  if (opcion == "Real") {
    $("#cotizacion").html(divisas + " Gs.");
    $("#montoI").html(montoIn + " BRL.");
    $("#cambio").html(cambio + " Gs.");
  }
  if (opcion == "Peso Ar") {
    $("#cotizacion").html(divisas + " Gs.");
    $("#montoI").html(montoIn + " ARS.");
    $("#cambio").html(cambio + " Gs.");
  }

function mostrarResul(result){
	$("#cambio").text(result);
}

}