function traerInformacion(){

    $.ajax({
        url:"http://129.151.121.62:8080/api/Reservation/all",
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
    myTable+="<th>"+"FECHA DE INICIO"+"</th>";
    myTable+="<th>"+"FECHA DE DEVOLUCION"+"</th>";
    myTable+="<th>"+"ESTADO"+"</th>";
    /*myTable+="<th>"+"MEDICO"+"</th>";*/
    /*myTable+="<th>"+"CLIENTE"+"</th>";*/
    /*myTable+="<th>"+"CALIFICACION DE RESERVA"+"</th>";*/
    myTable+="<tr>";

    for(i=0;i<respuesta.length;i++){
        myTable+="<tr>";
        myTable+="<td>"+respuesta[i].idReservation+"</td>";
        myTable+="<td>"+respuesta[i].startDate+"</td>";
        myTable+="<td>"+respuesta[i].devolutionDate+"</td>";
        myTable+="<td>"+respuesta[i].status+"</td>";
        /*myTable+="<td>"+respuesta[i].doctor+"</td>";*/
        /*myTable+="<td>"+respuesta[i].client+"</td>";*/
        /*myTable+="<td>"+respuesta[i].score+"</td>";*/
        /*myTable+="<td> <button onclick='borrarElemento("+respuesta[i].id+")'>Borrar</button>";*/
        myTable+="</tr>"
    }

    myTable+="</table>";
    $("#resultado").html(myTable);

}


function guardarInformacion(){

    let myData={
        startDate:$("#startDate").val(),
        devolutionDate:$("#devolutionDate").val(),
        status:$("#status").val(),
        /*doctor:$("#doctor").val(),*/
        /*client:$("#client").val(),*/
        /*score:$("#score").val(),*/
    };

    let dataToSend=JSON.stringify(myData);

    $.ajax({
        url:"http://129.151.121.62:8080/api/Reservation/save",
        type:"POST",
        data:dataToSend,
        datatype:"JSON",
        contentType: "application/json",
        success:function(respuesta){
            console.log(respuesta);
            $("#resultado").empty();
            $("#startDate").val("");
            $("#devolutionDate").val("");
            $("#status").val("");
            /*$("#doctor").val("");*/
            /*$("#client").val("");*/
            /*$("#score").val("");*/
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
        idReservation:$("#idReservation").val(),
        startDate:$("#startDate").val(),
        devolutionDate:$("#devolutionDate").val(),
        status:$("#status").val(),
        doctor:$("#doctor").val(),
        client:$("#client").val(),
        score:$("#score").val(),
    };

    console.log(myData);
    let dataToSend=JSON.stringify(myData);

    $.ajax({
        url:"http://129.151.121.62:8080/api/Reservation/update",
        type:"PUT",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado").empty();
            $("#idReservation").val("");
            $("#startDate").val("");
            $("#devolutionDate").val("");
            $("#status").val("");
            $("#doctor").val("");
            $("#client").val("");
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
        url:"http://129.151.121.62:8080/api/Reservation/{i}",
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
