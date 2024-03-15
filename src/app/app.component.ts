import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';
import { movie_list } from './interface';
import { VariableBinding } from '@angular/compiler';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private service: AppService) {}
  title = 'gerson-mamani';
  public genero: string[] = [];
  public name: string = '';
  public descripcion: string = '';
  public filtros: any = { genre: [], title: '', description: '' };
  public generos_list: string[] = [];
  public movies: movie_list[] = [];
  public movies_list: movie_list[] = [];

  ngOnInit(): void {
    this.listar();
    this.listar_generos();
  }

  listar(): void {
    this.service
      .consumirJSONLocal()
      .then((data) => {
        this.movies = data.movies;
        this.movies_list = this.movies; // aea por la weba esta ese
      })
      .catch((error) => {
        console.error('Error al consumir el archivo JSON:', error);
      });
  }

  listar_generos(): void {
    this.service
      .consumirJSONLocal()
      .then((data) => {
        this.generos_list = data.genres;
      })
      .catch((error) => {
        console.error('Error al consumir el archivo JSON:', error);
      });
  }

  filter() {
    let movies = this.movies;
    let filtros: any = {};
    for (let key in this.filtros) {
      let value = this.filtros[key];
      if (value === '' || value.length === 0) {
      } else {
        filtros[key] = value;
      }
    }

    let keys = Object.keys(filtros);

    if (keys.length === 0) {
      this.movies_list = movies;
      return;
    }

    const filterRules: { [key: string]: (movie: any) => boolean } = {
      genre: (movie) => this.filtros.genre.includes(movie.genre),
      title: (movie) =>
        movie.title
          .toLowerCase()

          .includes(this.filtros.title.toLowerCase()),
      description: (movie) =>
        movie.description
          .toLowerCase()
          .includes(this.filtros.description.toLowerCase()),
    };

    this.movies_list = movies.filter((movie) => {
      return !keys.some((key) => !filterRules[key](movie));
    });
  }
}
