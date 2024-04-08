import { Routes } from '@angular/router';
import { ContentComponent } from './component/page/content/content.component';
import { UserRequestComponent } from './component/user-request/user-request.component';
import { NavbarComponent } from './component/navbar/nav/navbar.component';
import { ContactComponent } from './contact/contact.component';
import { NotFoundPageComponent } from './component/not-found-page/not-found-page.component';
import { CardsComponent } from './component/cards/cards.component';

export const routes: Routes = [
    {path: 'home','title' : 'Home', component: ContentComponent},
    {path: 'about','title' : 'Home', component: CardsComponent},
    {path: 'userRequest','title' : 'Service', component: UserRequestComponent},
    {path: 'contact','title' : 'Contact', component: ContactComponent},
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: '**','title' : 'Page Not Found', component: NotFoundPageComponent}
];
