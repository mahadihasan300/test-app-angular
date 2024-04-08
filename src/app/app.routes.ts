import { Routes } from '@angular/router';
import { ContentComponent } from './component/page/content/content.component';
import { UserRequestComponent } from './component/user-request/user-request.component';
import { NavbarComponent } from './component/navbar/nav/navbar.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [
    {path: '', component: ContentComponent},
    {path: 'userRequest', component: UserRequestComponent},
    {path: 'contact', component: ContactComponent}
];
