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
    trElement.addEventListener('click', () => {
      // Actualiza el contenido del detalle de la serie con los datos de la serie seleccionada
      document.getElementById('serie-title')!.textContent = serie.name;
      document.getElementById('serie-description')!.textContent = serie.description;
      document.getElementById('serie-image')!.setAttribute('src', serie.image);
      const serieUrl = document.getElementById('serie-url') as HTMLAnchorElement;
            serieUrl.href = serie.url;
    });
  });
}

function getAverageSeasons(series: Serie[]) {
    let seasonsAv: number = 0;
    series.forEach((serie) => seasonsAv = seasonsAv + serie.seasons);
    return seasonsAv / series.length;
}

