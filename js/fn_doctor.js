function traerInformacion(){

    $.ajax({
        url:"http://localhost:8080/api/Doctor/all",
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
    myTable+="<th>"+"NOMBRE DEL MEDICO"+"</th>";
    myTable+="<th>"+"DEPARTAMENTO"+"</th>";
    myTable+="<th>"+"AÑO"+"</th>";
    myTable+="<th>"+"DESCRIPCION"+"</th>";
    /*myTable+="<th>"+"ESPECIALIDAD"+"</th>";*/
    myTable+="<tr>";

    for(i=0;i<respuesta.length;i++){
        myTable+="<tr>";
        /*myTable+="<td>"+respuesta[i].id+"</td>";*/
        myTable+="<td>"+respuesta[i].name+"</td>";
        myTable+="<td>"+respuesta[i].department+"</td>";
        myTable+="<td>"+respuesta[i].year+"</td>";
        myTable+="<td>"+respuesta[i].description+"</td>";
        /*myTable+="<td>"+respuesta[i].specialty+"</td>";*/
        /*myTable+="<td> <button onclick='borrarElemento("+respuesta[i].id+")'>Borrar</button>";*/
        myTable+="</tr>"
    }

    myTable+="</table>";
    $("#resultado").html(myTable);

}


function guardarInformacion(){

    let myData={
        name:$("#name").val(),
        department:$("#department").val(),
        year:$("#year").val(),
        description:$("#description").val(),
        /*specialty:$("#specialty").val(),*/
    };

    console.log(myData);
    let dataToSend=JSON.stringify(myData);

    $.ajax({
        url:"http://localhost:8080/api/Doctor/save",
        type:"POST",
        data:dataToSend,
        datatype:"JSON",
        contentType: "application/json",
        success:function(respuesta){
            $("#resultado").empty();
            $("#name").val("");
            $("#department").val("");
            $("#year").val("");
            $("#description").val("");
            //$("#specialty").val("");
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
        department:$("#department").val(),
        year:$("#year").val(),
        description:$("#description").val(),
    };

    console.log(myData);
    let dataToSend=JSON.stringify(myData);

    $.ajax({
        url:"http://localhost:8080/api/Doctor/update",
        type:"PUT",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            $("#resultado").empty();
            $("#id").val("");
            $("#name").val("");
            $("#department").val("");
            $("#year").val("");
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
        url:"http://localhost:8080/api/Doctor/{i}",
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
