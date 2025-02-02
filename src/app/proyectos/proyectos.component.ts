import { Component, OnInit } from '@angular/core';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { GalleriaModule } from 'primeng/galleria';
import { ButtonModule } from 'primeng/button';
import { SonLlatzer } from '../../service/sonLlatzer';
import { SixSenses } from '../../service/sixSenses';
import { OceanDrive } from '../../service/oceanDrive';
import { SesEstaques } from '../../service/sesEstaques';
import { JuanedaMuro } from '../../service/juanedaMuro';
import { oficinasEnergema } from '../../service/OficinasEnergema';
import { odGroup } from '../../service/odGroup';
import { oficinaOracle } from '../../service/oficinaOracle';
import { villas } from '../../service/villas';
import { sonVida } from '../../service/sonVida';
import { oficinasMascaro } from '../../service/oficinasMascaro';
import { oficinasSampol } from '../../service/oficinasSampol';
import { Meta, Title } from '@angular/platform-browser'

@Component({
  selector: 'app-proyectos',
  standalone: true,
  imports: [NgbCarouselModule, GalleriaModule, ButtonModule],
  providers: [JuanedaMuro, oficinasEnergema, SonLlatzer, SixSenses, OceanDrive, SesEstaques, odGroup, oficinaOracle, villas, sonVida, oficinasSampol, oficinasMascaro],
  templateUrl: './proyectos.component.html',
  styleUrl: './proyectos.component.scss'
})
export class ProyectosComponent implements OnInit {
  showSonLlatzer:boolean = false;
  showSixSenses:boolean = false;
  showOceanDrive:boolean = false;
  showSesEstaques:boolean = false;
  showJuanedaMuro:boolean = false;
  showOficinaEnergema:boolean = false;
  showOdGroup:boolean = false;
  showOficinaOracle:boolean = false;
  showVillas:boolean = false;
  showSonvida:boolean = false;
  showOficinaSampol:boolean = false;
  showOficinaMascaro:boolean = false;

  imagesSonLlatzer: any[] | undefined;
  imagesSixSenses: any[] | undefined;
  imagesOceanDrive: any[] | undefined;
  imagesSesEstaques: any[] | undefined;
  imagesJuanedaMuro: any[] | undefined;
  imagesOficinaEnergema: any[] | undefined;
  imagesOdGroup: any[] | undefined;
  imagesOficinaOracle: any[] | undefined;
  imagesVillas: any[] | undefined;
  imagesSonvida: any[] | undefined;
  imagesOficinaSampol: any[] | undefined;
  imagesOficinaMascaro: any[] | undefined;

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
    private oficinasEnergema: oficinasEnergema,
    private oficinaOracle: oficinaOracle,
    private Villas: villas,
    private SonVida: sonVida,
    private oficinaSampol: oficinasSampol,
    private oficinaMascaro: oficinasMascaro,
    private odGroup: odGroup,
    
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
    this.oficinasEnergema.getImages().then((images) => (this.imagesOficinaEnergema = images));
    this.oficinaOracle.getImages().then((images) => (this.imagesOficinaOracle = images));
    this.Villas.getImages().then((images) => (this.imagesVillas = images));
    this.SonVida.getImages().then((images) => (this.imagesSonvida = images));
    this.oficinaSampol.getImages().then((images) => (this.imagesOficinaSampol = images));
    this.oficinaMascaro.getImages().then((images) => (this.imagesOficinaMascaro = images));
    this.odGroup.getImages().then((images) => (this.imagesOdGroup = images));

  }

}
