//Arreglo de Objetos
var provincias = [];

function imprimir(){
    let tbProvincias = document.getElementById('tblProvincias');
    tbProvincias.innerHTML = "";   
    provincias.forEach((x)=>{
        let tr = document.createElement('tr');
        let tdNum = document.createElement('td');
        let tdNom = document.createElement('td');
        let tdConf = document.createElement('td');
        let tdFall = document.createElement('td');
        let tdPro = document.createElement('td');
        let tdPor = document.createElement('td');

        //Asignar los valores alas columnas 
        tdNum.innerText = provincias.indexOf(x) + 1;
        tdNom.innerText = x.nombre;
        tdConf.innerText = x.confirmados;
        tdFall.innerText = x.fallecidos;
        tdPro.innerText = x.probables;
        tdPor.innerText = x.porcentaje;     
        
        //Agrega las columnas a la fila
        tr.append(tdNum);
        tr.append(tdNom);
        tr.append(tdConf);
        tr.append(tdFall);
        tr.append(tdPro);
        tr.append(tdPor);
        tbProvincias.append(tr);
    });
    sumarConfirmados();
    sumarFallecidos();
    sumarProbables();
}
//Metodo agregar
function agregar(){
    //Lectura de valores de los inputs
    let conf = document.getElementById('txtConfirmados').value;
    let fall = document.getElementById('txtFallecidos').value;
    let fallPro = document.getElementById('txtFallecidosProbables').value;
    let nomPro = document.getElementById('slProvincias').value;
    let por = document.getElementById('txtPorcentaje').value;
    //Crear objeto con los valores    
    let nuevaProvincia={
        "nombre" : nomPro,
        "confirmados" : parseInt(conf),
        "fallecidos": parseInt(fall),
        "probables": parseInt(fallPro),
        "porcentaje": parseFloat(por)
    }

    provincias.push(nuevaProvincia);
    imprimir();
    borrar();
}

function borrar(){
    document.getElementById('txtConfirmados').value = 0;
    document.getElementById('txtFallecidos').value = 0;
    document.getElementById('txtFallecidosProbables').value = 0;
    document.getElementById('slProvincias').value = 0;
    document.getElementById('txtPorcentaje').value = 0;
}

function sumarConfirmados(){
    let totalConfirmados = 0;
    provincias.forEach((x)=>{
       totalConfirmados += x.confirmados; 
    });
    document.getElementById('totalConfirmados').innerText = totalConfirmados;
}

function sumarFallecidos(){
    let totalFallecidos = 0;
    provincias.forEach((x)=>{
        totalFallecidos += x.fallecidos; 
    });
    document.getElementById('totalFallecidos').innerText = totalFallecidos;
}

function sumarProbables(){
    let totalProbables = 0;
    provincias.forEach((x)=>{
        totalProbables += x.probables; 
    });
    document.getElementById('totalProbables').innerText = totalProbables;
}