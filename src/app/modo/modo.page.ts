import { Component, OnInit } from '@angular/core';
import { Modo } from '../modelos/modo';
import { ModosService } from '../servicios/modos.service';
import { JugadoresService } from '../servicios/jugadores.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modo',
  templateUrl: './modo.page.html',
  styleUrls: ['./modo.page.scss'],
})
export class ModoPage implements OnInit {
  list: Modo[];
  modo: any;
  totalJugador: number;

  constructor(
    private router: Router,
    private modos: ModosService,
    private jugadores: JugadoresService
  ) {
    this.list = [];
    this.totalJugador = 0;
  }

  ngOnInit() {
    this.modos.test().then((data) => {
      this.modo = data;
    });

    this.jugadores.$getListSource.subscribe((data) => {
      this.list = data
      this.totalJugador = data.length;
    });
  }

  atras() {
    this.jugadores.sendListSource(this.list);
    this.router.navigate(['/home']);
  }
}
