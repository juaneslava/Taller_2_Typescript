import { dataSeries } from './dataSeries.js';
var seriesTbody = document.getElementById('series');
var SeasonsAverageElm = document.getElementById("seasons-average");
renderSeriesInTable(dataSeries);
SeasonsAverageElm.innerHTML = "Seasons average: ".concat(getAverageSeasons(dataSeries));
function renderSeriesInTable(series) {
    console.log('Desplegando cursos');
    series.forEach(function (serie) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td>".concat(serie.id, "</td>\n                           <td>").concat(serie.name, "</td>\n                           <td>").concat(serie.channel, "</td>\n                           <td>").concat(serie.seasons, "</td>");
        seriesTbody.appendChild(trElement);
        trElement.addEventListener('click', function () {
            // Actualiza el contenido del detalle de la serie con los datos de la serie seleccionada
            document.getElementById('serie-title').textContent = serie.name;
            document.getElementById('serie-description').textContent = serie.description;
            document.getElementById('serie-image').setAttribute('src', serie.image);
            var serieUrl = document.getElementById('serie-url');
            serieUrl.href = serie.url;
        });
    });
}
function getAverageSeasons(series) {
    var seasonsAv = 0;
    series.forEach(function (serie) { return seasonsAv = seasonsAv + serie.seasons; });
    return seasonsAv / series.length;
}
