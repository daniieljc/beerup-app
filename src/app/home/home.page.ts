import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JugadoresService } from '../servicios/jugadores.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  nombre: string;
  public list: any;

  constructor(private router: Router, private jugadores: JugadoresService) {
    this.list = [];jugadores
  }

  ngOnInit() {
    this.jugadores.$getListSource.subscribe((data) => {
      this.list = data;
    });
  }

  addPlayer() {
    if (this.nombre != '') {
      this.list.push(this.nombre);
      this.list.sort();
      this.nombre = '';
    }
  }

  modo() {
    this.jugadores.sendListSource(this.list);
    this.router.navigate(['/modo']);
  }

  deletePlayer(id: any) {
    this.list.splice(id, 1);
  }
}
