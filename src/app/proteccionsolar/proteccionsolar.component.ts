import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-proteccionsolar',
  standalone: true,
  imports: [],
  templateUrl: './proteccionsolar.component.html',
  styleUrl: './proteccionsolar.component.scss'
})
export class ProteccionsolarComponent implements OnInit {

  constructor(
    private titleService: Title,
    private metaService: Meta
  ) {}

  ngOnInit() {
    this.titleService.setTitle('Laminas Proteccion Solar - ISP Control Solar - Laminas solares mallorca');
    this.metaService.updateTag({ name: 'description', content: 'Consulta nuestros proyectos mas recientes' });
  }
}
