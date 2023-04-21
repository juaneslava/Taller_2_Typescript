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
    });
}
function getAverageSeasons(series) {
    var seasonsAv = 0;
    series.forEach(function (serie) { return seasonsAv = seasonsAv + serie.seasons; });
    return seasonsAv / series.length;
}
