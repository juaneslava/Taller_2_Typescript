import { Serie } from './serie.js';

import { dataSeries } from './dataSeries.js';

let seriesTbody: HTMLElement = document.getElementById('series')!;
const SeasonsAverageElm: HTMLElement = document.getElementById("seasons-average")!;

renderSeriesInTable(dataSeries);

SeasonsAverageElm.innerHTML = `Seasons average: ${getAverageSeasons(dataSeries)}`;

function renderSeriesInTable(series: Serie[]): void {
  console.log('Desplegando cursos');
  series.forEach((serie) => {
    let trElement = document.createElement("tr");
    trElement.innerHTML = `<td>${serie.id}</td>
                           <td>${serie.name}</td>
                           <td>${serie.channel}</td>
                           <td>${serie.seasons}</td>`;
    seriesTbody.appendChild(trElement);
  });
}

function getAverageSeasons(series: Serie[]) {
    let seasonsAv: number = 0;
    series.forEach((serie) => seasonsAv = seasonsAv + serie.seasons);
    return seasonsAv / series.length;
}

