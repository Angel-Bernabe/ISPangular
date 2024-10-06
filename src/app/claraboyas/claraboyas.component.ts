import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser'


@Component({
  selector: 'app-claraboyas',
  standalone: true,
  imports: [],
  templateUrl: './claraboyas.component.html',
  styleUrl: './claraboyas.component.scss'
})
export class ClaraboyasComponent implements OnInit {

  constructor(
    private titleService: Title,
    private metaService: Meta
  ) {}

  ngOnInit() {
    this.titleService.setTitle('Laminas claraboyas - ISP Control Solar - Laminas solares mallorca');
    this.metaService.updateTag({ name: 'description', content: 'Consulta nuestros proyectos mas recientes' });
  }
  
}
