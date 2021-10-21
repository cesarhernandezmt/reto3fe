function traerInformacion(){

    $.ajax({
        url:"http://129.151.121.62:8080/api/Score/all",
        type:"GET",
        datatype:"JSON",
        contentType: "application/json",
        success:function(respuesta){
            console.log(respuesta);
            mostrarRespuesta(respuesta)
        },
        error: function(jqXHR, textStatus, errorThrown) {
            
        }
    });

}


function mostrarRespuesta(respuesta){

    let myTable = "<table>";

    myTable+="<tr>";
    myTable+="<th>"+"ID"+"</th>";
    myTable+="<th>"+"CALIFICACION"+"</th>";
    myTable+="<tr>";
    
    for(i=0;i<respuesta.length;i++){
        myTable+="<tr>";
        myTable+="<td>"+respuesta[i].idScore+"</td>";
        myTable+="<td>"+respuesta[i].score+"</td>";
        /*myTable+="<td> <button onclick='borrarElemento("+respuesta[i].id+")'>Borrar</button>";*/
        myTable+="</tr>"
    }

    myTable+="</table>";
    $("#resultado").html(myTable);

}


function guardarInformacion(){

    let myData={
        score:$("#score").val(),
    };

    console.log(myData);
    let dataToSend=JSON.stringify(myData);

    $.ajax({
        url:"http://129.151.121.62:8080/api/Score/save",
        type:"POST",
        data:dataToSend,
        datatype:"JSON",
        contentType: "application/json",
        success:function(respuesta){
            console.log(respuesta);
            $("#resultado").empty();
            $("#score").val("");
            traerInformacion();
            console.log("Se ha añadido el registro");
            alert("Se ha añadido el registro")
        },
        error: function(jqXHR, textStatus, errorThrown) {
            
        }
    });

}

/*
function editarInformacion(){

    let myData={
        idScore:$("#idScore").val(),
        score:$("#score").val(),
    };

    console.log(myData);
    let dataToSend=JSON.stringify(myData);

    $.ajax({
        url:"http://129.151.121.62:8080/api/Score/update",
        type:"PUT",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            $("#resultado").empty();
            $("#idScore").val("");
            $("#score").val("");
            traerInformacion();
            console.log("Se ha actualizado el registro");
            alert("Se ha actualizado el registro")
        },
        error: function(jqXHR, textStatus, errorThrown) {
            
        }
    });

}


function borrarElemento(idElemento){

    let myData={
        id:idElemento
    };

    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"http://129.151.121.62:8080/api/Score/{i}",
        type:"DELETE",
        data:dataToSend,
        datatype:"JSON",
        contentType:"application/JSON",
        success:function(respuesta){
            console.log(respuesta);
            $("#resultado").empty();
            traerInformacion();
            console.log("Se ha eliminado el registro");
            alert("Se ha eliminado el registro")
        },
        error: function(jqXHR, textStatus, errorThrown) {
            
        }
    });

}
*/
