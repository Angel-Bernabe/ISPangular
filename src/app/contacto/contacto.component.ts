import { Component, OnInit } from '@angular/core';
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';
import { Meta, Title } from '@angular/platform-browser'

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [],
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.scss'
})

export class ContactoComponent implements OnInit {
  public sendEmail(e: Event) {
    e.preventDefault();

    emailjs
      .sendForm('service_y8rz4li', 'template_oys5rzj', e.target as HTMLFormElement, {
        publicKey: 'ZeGho05Q5qV_3q8zs',
      })
      .then(
        () => {
          console.log('Enviado!');
          document.getElementById('eventoex')!.style.display = 'block';
          setTimeout(function(){
            window.location.reload();
         }, 5000);
        },
        (error) => {
          console.log('Ha habido un error...', (error as EmailJSResponseStatus).text);
          document.getElementById('eventoer')!.style.display = 'block';
          setTimeout(function(){
            window.location.reload();
         }, 5000);
        },
      );
  }

  constructor(
    private titleService: Title,
    private metaService: Meta
  ) {}

  ngOnInit() {
    this.titleService.setTitle('Contacto - ISP Control Solar - Laminas solares mallorca');
    this.metaService.updateTag({ name: 'description', content: 'Consulta nuestros proyectos mas recientes' });
  }

}


