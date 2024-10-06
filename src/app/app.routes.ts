import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ClaraboyasComponent } from './claraboyas/claraboyas.component';
import { ProteccionuvComponent } from './proteccionuv/proteccionuv.component';
import { AntivandalicaComponent } from './antivandalica/antivandalica.component';
import { AutomocionComponent } from './automocion/automocion.component';
import { NauticaComponent } from './nautica/nautica.component';
import { PulidoComponent } from './pulido/pulido.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { ContactoComponent } from './contacto/contacto.component';
import { ProteccionsolarComponent } from './proteccionsolar/proteccionsolar.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'edificios/proteccionSolar', component: ProteccionsolarComponent },
    { path: 'edificios/claraboyas', component: ClaraboyasComponent },
    { path: 'edificios/proteccionUV', component: ProteccionuvComponent },
    { path: 'edificios/antivandalica', component: AntivandalicaComponent },
    { path: 'automocion', component: AutomocionComponent },
    { path: 'nautica', component: NauticaComponent },
    { path: 'pulido', component: PulidoComponent },
    { path: 'proyectos', component: ProyectosComponent },
    { path: 'contacto', component: ContactoComponent },
];
