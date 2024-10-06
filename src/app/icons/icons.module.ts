import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BootstrapIconsModule } from 'ng-bootstrap-icons';
import { Instagram, Whatsapp, Envelope } from 'ng-bootstrap-icons/icons';

const icons = {
  Instagram,
  Whatsapp,
  Envelope
};

@NgModule({
  imports: [
    BootstrapIconsModule.pick(icons)
  ],
  exports: [
    BootstrapIconsModule
  ]
})
export class IconsModule { }

