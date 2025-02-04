import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, NgbAccordionModule, NgbCollapseModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  constructor(
    private titleService: Title,
    private metaService: Meta
  ) {}

  ngOnInit() {
    this.titleService.setTitle('Inicio - ISP Control Solar - Laminas solares mallorca');
    this.metaService.updateTag({ name: 'description', content: 'Consulta nuestros proyectos mas recientes' });
  }

  isCollapsed = true;
  isCollapsed1 = true;
  isCollapsed2 = true;

}
