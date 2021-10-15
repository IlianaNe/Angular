import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: [
  ]
})
export class ArtistaComponent {

  artista: any = {};
  topTracks: any = {};
  constructor(private router: ActivatedRoute, private spotify: SpotifyService) {

    this.router.params.subscribe(params => {
      this.getArtista(params['id']);
      this.getTopTracks(params['id']);
    });
  }


  getArtista(id: string) {
    this.spotify.getArtista(id).subscribe(artista => {
      this.artista = artista;
    })
  }

  getTopTracks(id: string) {
    this.spotify.getTopTracks(id).subscribe(tracks => {
      this.topTracks = tracks;
    })
  }
}
