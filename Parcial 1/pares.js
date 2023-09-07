$(document).ready(function (){
    var par1="";
    var par=false;
    var par2="";
    var total_pares=0;
    $('img').click(function(e){
        var estado= $(this).attr('data-estado')
        var nombre_imagen= $(this).attr('data-id')
        if(estado=="0"){
            console.log("estado de la carta: " + estado)
            if(par1==""){
                par1=$(this);
                par1.attr('src', 'imagenes/' + nombre_imagen)
                console.log("se asigno par #1");
            }else{
                par1=$(this);
                par1.attr('src', 'imagenes/' + nombre_imagen)
                par1.attr('src', 'imagenes/' + nombre_imagen)
                console.log("se asigno par #2");
            }
        }

        if(par1!="" && par2 != ""){
            if(par1.attr('data-id')==par2.attr('data-id')){
                par = true
                total_pares++
                $("#total_pares").html(total_pares)
            }
        }

        
    });
});