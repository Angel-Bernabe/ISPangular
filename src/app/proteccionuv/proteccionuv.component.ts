import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-proteccionuv',
  standalone: true,
  imports: [],
  templateUrl: './proteccionuv.component.html',
  styleUrl: './proteccionuv.component.scss'
})
export class ProteccionuvComponent implements OnInit {

  constructor(
    private titleService: Title,
    private metaService: Meta
  ) {}

  ngOnInit() {
    this.titleService.setTitle('Laminas Proteccion UV - ISP Control Solar - Laminas solares mallorca');
    this.metaService.updateTag({ name: 'description', content: 'Consulta nuestros proyectos mas recientes' });
  }
  
}
