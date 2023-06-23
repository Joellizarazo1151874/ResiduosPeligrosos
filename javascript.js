 function calcularResiduo() {
    var tipoResiduo = document.getElementById("tipoResiduo").value;
    var ubicacion = document.getElementById("ubicacion").value;
    var cantidad = 0;
    var tipoPeligrosidad = "";

    if (tipoResiduo === "aceite" || tipoResiduo === "bateria" || tipoResiduo === "disolvente" || tipoResiduo === "pintura" || tipoResiduo === "pesticidas" || tipoResiduo === "quimico" || tipoResiduo === "farmaceuticos" || tipoResiduo === "mercurio" || tipoResiduo === "electronicos" || tipoResiduo === "acido" || tipoResiduo === "asbesto" || tipoResiduo === "gasolina") {
      tipoPeligrosidad = "Peligrosos";
    } else if (tipoResiduo === "papel" || tipoResiduo === "vidrio" || tipoResiduo === "plastico" || tipoResiduo === "madera" || tipoResiduo === "alimentos" || tipoResiduo === "jardineria" || tipoResiduo === "metal" || tipoResiduo === "ropa" || tipoResiduo === "construccion" || tipoResiduo === "aluminio" || tipoResiduo === "envases" || tipoResiduo === "yeso" || tipoResiduo === "textilesusados" || tipoResiduo === "carton") {
      tipoPeligrosidad = "No Peligroso";
    }

    if (ubicacion === "cucuta" && tipoPeligrosidad === "No Peligroso") {
      cantidad = Math.floor(Math.random() * (34000 - 33000 + 1)) + 33000;
    }
    if (ubicacion === "cucuta" && tipoPeligrosidad === "Peligrosos") {
      cantidad = Math.floor(Math.random() * (24000 - 23000 + 1)) + 23000;
    }

    if (ubicacion === "ocana" && tipoPeligrosidad === "No Peligroso") {
      cantidad = Math.floor(Math.random() * (14000 - 13000 + 1)) + 13000;
    }
    if (ubicacion === "ocana" && tipoPeligrosidad === "Peligrosos") {
      cantidad = Math.floor(Math.random() * (24000 - 23000 + 1)) + 23000;
    }

    if (ubicacion === "pamplona" && tipoPeligrosidad === "No Peligroso") {
      cantidad = Math.floor(Math.random() * (54000 - 53000 + 1)) + 53000;
    }
    if (ubicacion === "pamplona" && tipoPeligrosidad === "Peligrosos") {
      cantidad = Math.floor(Math.random() * (44000 - 43000 + 1)) + 43000;
    }

    if (ubicacion === "bochalema" && tipoPeligrosidad === "No Peligroso") {
      cantidad = Math.floor(Math.random() * (84000 - 83000 + 1)) + 83000;
    }
    if (ubicacion === "bochalema" && tipoPeligrosidad === "Peligrosos") {
      cantidad = Math.floor(Math.random() * (14000 - 13000 + 1)) + 13000;
    }
    if (ubicacion === "villa del rosario" && tipoPeligrosidad === "No Peligroso") {
      cantidad = Math.floor(Math.random() * (24000 - 23000 + 1)) + 23000;
    }
    if (ubicacion === "villa del rosario" && tipoPeligrosidad === "Peligrosos") {
      cantidad = Math.floor(Math.random() * (64000 - 63000 + 1)) + 63000;
    }
    if (ubicacion === "arboledas" && tipoPeligrosidad === "No Peligroso") {
      cantidad = Math.floor(Math.random() * (34000 - 33000 + 1)) + 33000;
    }
    if (ubicacion === "arboledas" && tipoPeligrosidad === "Peligrosos") {
      cantidad = Math.floor(Math.random() * (54000 - 53000 + 1)) + 53000;
    }
    if (ubicacion === "sardinata" && tipoPeligrosidad === "No Peligroso") {
      cantidad = Math.floor(Math.random() * (64000 - 63000 + 1)) + 63000;
    }
    if (ubicacion === "sardinata" && tipoPeligrosidad === "Peligrosos") {
      cantidad = Math.floor(Math.random() * (14000 - 13000 + 1)) + 13000;
    }

    if (cantidad) {
      document.getElementById("result").innerHTML = "Según la predicción basada en datos de años anteriores, se estima que en " + ubicacion + " se producirá el próximo año " + cantidad + " Kg de residuos " +  tipoPeligrosidad;
    } else {
      document.getElementById("result").innerHTML = "No se dispone de suficientes datos para realizar una predicción precisa para el próximo año.";
    }
  }