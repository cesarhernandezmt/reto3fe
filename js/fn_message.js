function traerInformacion(){

    $.ajax({
        url:"http://129.151.121.62:8080/api/Message/all",
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
    /*myTable+="<th>"+"ID"+"</th>";*/
    myTable+="<th>"+"TEXTO DEL MENSAJE"+"</th>";
    /*myTable+="<th>"+"MEDICO"+"</th>";*/
    /*myTable+="<th>"+"CLIENTE"+"</th>";*/
    myTable+="<tr>";

    for(i=0;i<respuesta.length;i++){
        myTable+="<tr>";
        /*myTable+="<td>"+respuesta[i].idMessage+"</td>";*/
        myTable+="<td>"+respuesta[i].messageText+"</td>";
        /*myTable+="<td>"+respuesta[i].doctor+"</td>";*/
        /*myTable+="<td>"+respuesta[i].client+"</td>";*/
        /*myTable+="<td> <button onclick='borrarElemento("+respuesta[i].id+")'>Borrar</button>";*/
        myTable+="</tr>"
    }

    myTable+="</table>";
    $("#resultado").html(myTable);

}


function guardarInformacion(){

    let myData={
        messageText:$("#messageText").val(),
        /*doctor:$("#doctor").val(),*/
        /*client:$("#client").val(),*/
    };

    console.log(myData);
    let dataToSend=JSON.stringify(myData);

    $.ajax({
        url:"http://129.151.121.62:8080/api/Message/save",
        type:"POST",
        data:dataToSend,
        datatype:"JSON",
        contentType: "application/json",
        success:function(respuesta){
            $("#resultado").empty();
            $("#messagetext").val("");
            /*$("#doctor").val("");*/
            /*$("#client").val("");*/
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
        idMessage:$("#idMessage").val(),
        messagetext:$("#messagetext").val(),
        doctor:$("#doctor").val(),
        client:$("#client").val(),
    };

    console.log(myData);
    let dataToSend=JSON.stringify(myData);

    $.ajax({
        url:"http://129.151.121.62:8080/api/Message/update",
        type:"PUT",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            $("#resultado").empty();
            $("#idMessage").val("");
            $("#messagetext").val("");
            $("#doctor").val("");
            $("#client").val("");
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
        url:"http://129.151.121.62:8080/api/Message/{i}",
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
