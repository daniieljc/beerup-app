import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AdmobService} from '../servicios/admob.service';
import {FrasesService} from '../servicios/frases.service';
import {JugadoresService} from '../servicios/jugadores.service';
import {ScreenOrientation} from '@ionic-native/screen-orientation/ngx';
import {Modo} from "../modelos/modo";

@Component({
  selector: 'app-mostrar',
  templateUrl: './mostrar.page.html',
  styleUrls: ['./mostrar.page.scss'],
})
export class MostrarPage implements OnInit {
  lFrases: any;
  pos: number;
  jugador: any[];
  j1: number;
  j2: number;
  frase: string;
  list: Modo[];

  constructor(
    private frases: FrasesService,
    private route: ActivatedRoute,
    private jugadores: JugadoresService,
    private admobService: AdmobService,
    private screenOrientation: ScreenOrientation,
    private router: Router,
    private jugadoresCP: JugadoresService,

  ) {
    this.pos = 0;
    this.jugador = [];
    this.j1 = 0;
    this.j2 = 0;
  }

  async ngOnInit() {
    this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE);

    let categoriaId = this.route.snapshot.paramMap.get('id');

    this.lFrases = await this.frases.getFrases(categoriaId);

    this.jugadores.$getListSource.subscribe((data) => {
      this.jugador = data;
    });

    this.generatePJ();

    this.frase = this.lFrases[this.pos].body.replace(
      'X',
      this.jugador[this.j1]
    );

    this.frase = this.frase.replace('Y', this.jugador[this.j2]);
  }

  next() {
    if (this.pos < this.lFrases.length) {
      this.pos++;

      this.frase = this.lFrases[this.pos].body;

      this.generatePJ();

      this.frase = this.frase.replace('X', this.jugador[this.j1]);

      this.frase = this.frase.replace('Y', this.jugador[this.j2]);
    }

    console.log(`${this.j1}-${this.j2}`);
  }

  generatePJ() {
    if (this.jugador.length != 0) {
      this.j1 = Math.floor(Math.random() * (this.jugador.length - 0) + 0);
      this.j2 = Math.floor(Math.random() * (this.jugador.length - 0) + 0);

      while (this.j1 == this.j2) {
        this.j1 = Math.floor(Math.random() * (this.jugador.length - 0) + 0);
        this.j2 = Math.floor(Math.random() * (this.jugador.length - 0) + 0);
      }
    }
  }
}
