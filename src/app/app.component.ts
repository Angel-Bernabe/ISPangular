import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { HomeComponent } from "./home/home.component";
import { IconsModule } from './icons/icons.module';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, HeaderComponent, FooterComponent, HomeComponent, IconsModule, NgbCarouselModule, NgbAccordionModule, NgbCollapseModule]
})
export class AppComponent {
  title = 'Angular-bootstrap';
  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
}
