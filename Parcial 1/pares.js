$(document).ready(function (){
    var par1="";
    var par=false;
    var par2="";
    var total_pares=0;
    $('img').click(function(e){
        var estado= $(this).attr('data-estado')
        var nombre_imagen= $(this).attr('data-id')



        if(estado=="0"){
            if(par1!= ""&& par2!=""){
                console.log("las cartas son diferente")
                if(par1.attr('data-id')!=par1.attr('data-id')){
                    console.log("tapa cartas diferentes")
                    par1.attr('src', 'imagenes/tap.jpg')
                    par2.attr('src', 'imagenes/tap.jpg')
                }else{
                    console.log("las cartas son pares")
                    par1.attr('data-estado', '1')
                    par2.attr('data-estado', '1')
                    par=false
                }
                par1=""
                par2=""
          }
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
        if(total_pares == 8){
            $('img').each(function (){
                $(this).attr('src', 'imagenes/tapadas.jpg')
                $(this).attr('data-estado', '0')
            });
            total_pares=0
            par=false
            parl=""
            par2=""
            return;
        }
        
    });
});