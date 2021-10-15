import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule, HttpHeaderResponse, HttpHeaders } from '@angular/common/http';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {
  }

  getQuery(query: string) {

    const URL = `https://api.spotify.com/v1/${query}`;
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQCT3xbWeY7_OAFY1tB2f5Lf4BXF9zutLn2-uxlLhARcdscIPBJ0Kw5OxB1awhzny2V9qySFpMV59s3qVuc'
    });

    return this.http.get(URL, { headers });
  }

  getNewReleases() {

    //Con el operador map se va a adjuntar a la peticion y la va a filtrar, new releases solo trabaja con observables, pipe transformacion de datos
    return this.getQuery('browse/new-releases').pipe(map((data: any) => data['albums'].items

    /*this.http.get('https://api.spotify.com/v1/browse/new-releases', { headers })
      .pipe(map((data: any) => {
        return data['albums'].items;*/
      )); //error porque albumns no es una propiedad por defecto en la respuesta, para cambiar el any en data podemos poner [""] a la propiedad albumns y así es de la data busca una propiedad llamada albums

  }

  getArtistas(termino: string) {

    return this.getQuery(`search?q=${termino}&type=artist&limit=15`).pipe(map((data: any) => data['artists'].items));

  }

  
  getArtista(id: string) {

    return this.getQuery(`artists/${id}`);

  }


  getTopTracks(id: string) {

    return this.getQuery(`artists/${id}/top-tracks?country=us`).pipe(map((data: any) => data['tracks']));
  }
  
}

