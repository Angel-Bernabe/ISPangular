import { Component, OnInit } from '@angular/core';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { GalleriaModule } from 'primeng/galleria';
import { ButtonModule } from 'primeng/button';
import { SonLlatzer } from '../../service/sonLlatzer';
import { SixSenses } from '../../service/sixSenses';
import { OceanDrive } from '../../service/oceanDrive';
import { SesEstaques } from '../../service/sesEstaques';
import { JuanedaMuro } from '../../service/juanedaMuro';
import { JuanedaCorporativo } from '../../service/juanedaCorporativo';
import { Meta, Title } from '@angular/platform-browser'

@Component({
  selector: 'app-proyectos',
  standalone: true,
  imports: [NgbCarouselModule, GalleriaModule, ButtonModule],
  providers: [JuanedaMuro, JuanedaCorporativo, SonLlatzer, SixSenses, OceanDrive, SesEstaques],
  templateUrl: './proyectos.component.html',
  styleUrl: './proyectos.component.scss'
})
export class ProyectosComponent implements OnInit {
  showSonLlatzer:boolean = false;
  showSixSenses:boolean = false;
  showOceanDrive:boolean = false;
  showSesEstaques:boolean = false;
  showJuanedaMuro:boolean = false;
  showJuanedaCorporativo:boolean = false;

  imagesSonLlatzer: any[] | undefined;
  imagesSixSenses: any[] | undefined;
  imagesOceanDrive: any[] | undefined;
  imagesSesEstaques: any[] | undefined;
  imagesJuanedaMuro: any[] | undefined;
  imagesJuanedaCorporativo: any[] | undefined;

  responsiveOptions: any[] = [
      {
          breakpoint: '1500px',
          numVisible: 5
      },
      {
          breakpoint: '1024px',
          numVisible: 3
      },
      {
          breakpoint: '768px',
          numVisible: 2
      },
      {
          breakpoint: '560px',
          numVisible: 1
      }
  ];

  constructor(
    private sonLlatzer: SonLlatzer,
    private sixSenses: SixSenses,
    private oceanDrive: OceanDrive,
    private sesEstaques: SesEstaques,
    private juanedaMuro: JuanedaMuro,
    private juanedaCorporativo: JuanedaCorporativo,
    
    private titleService: Title, 
    private metaService: Meta
    ) {}

  ngOnInit() {

    this.titleService.setTitle('Proyectos realizados - ISP Control Solar - Laminas solares mallorca');
    this.metaService.updateTag({ name: 'description', content: 'Consulta nuestros proyectos mas recientes' });

    this.sonLlatzer.getImages().then((images) => (this.imagesSonLlatzer = images));
    this.sixSenses.getImages().then((images) => (this.imagesSixSenses = images));
    this.oceanDrive.getImages().then((images) => (this.imagesOceanDrive = images));
    this.sesEstaques.getImages().then((images) => (this.imagesSesEstaques = images));
    this.juanedaMuro.getImages().then((images) => (this.imagesJuanedaMuro = images));
    this.juanedaCorporativo.getImages().then((images) => (this.imagesJuanedaCorporativo = images));
  }

}
