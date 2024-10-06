import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser'

@Component({
  selector: 'app-antivandalica',
  standalone: true,
  imports: [],
  templateUrl: './antivandalica.component.html',
  styleUrl: './antivandalica.component.scss'
})
export class AntivandalicaComponent implements OnInit {

  constructor(
    private titleService: Title,
    private metaService: Meta
  ) {}

  ngOnInit() {
    this.titleService.setTitle('Laminas Antivandalicas - ISP Control Solar - Laminas solares mallorca');
    this.metaService.updateTag({ name: 'description', content: 'Consulta nuestros proyectos mas recientes' });
  }

}
