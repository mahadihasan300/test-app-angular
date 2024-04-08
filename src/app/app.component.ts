import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./component/navbar/nav/navbar.component";
import { ContentComponent } from "./component/page/content/content.component";
import { FooterComponent } from "./component/footer/footer.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, NavbarComponent, ContentComponent, FooterComponent]
})
export class AppComponent {
  title = 'test-app';
}
