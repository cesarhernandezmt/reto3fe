function traerInformacion(){

    $.ajax({
        url:"http://129.151.121.62:8080/api/Specialty/all",
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
    myTable+="<th>"+"NOMBRE"+"</th>";
    myTable+="<th>"+"DESCRIPCION"+"</th>";
    myTable+="<tr>";

    for(i=0;i<respuesta.length;i++){
        myTable+="<tr>";
        /*myTable+="<td>"+respuesta[i].id+"</td>";*/
        myTable+="<td>"+respuesta[i].name+"</td>";
        myTable+="<td>"+respuesta[i].description+"</td>";
        /*myTable+="<td> <button onclick='borrarElemento("+respuesta[i].id+")'>Borrar</button>";*/
        myTable+="</tr>"
    }

    myTable+="</table>";
    $("#resultado").html(myTable);

}


function guardarInformacion(){

    let myData={
        name:$("#name").val(),
        description:$("#description").val(),
    };

    console.log(myData);
    let dataToSend=JSON.stringify(myData);

    $.ajax({
        url:"http://129.151.121.62:8080/api/Specialty/save",
        type:"POST",
        data:dataToSend,
        datatype:"JSON",
        contentType: "application/json",
        success:function(respuesta){
            console.log(respuesta);
            $("#resultado").empty();
            $("#name").val("");
            $("#description").val("");
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
        id:$("#id").val(),
        name:$("#name").val(),
        description:$("#description").val(),
    };

    console.log(myData);
    let dataToSend=JSON.stringify(myData);

    $.ajax({
        url:"http://129.151.121.62:8080/api/Specialty/update",
        type:"PUT",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            $("#resultado").empty();
            $("#id").val("");
            $("#name").val("");
            $("#description").val("");
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
        url:"http://129.151.121.62:8080/api/Specialty/{i}",
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
