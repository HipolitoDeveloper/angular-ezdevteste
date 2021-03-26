import { Component} from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  title = 'EzDevTeste';
  menuItems: any = [];

  constructor(
    private route: ActivatedRoute,
  ) {
    this.menuItems = [
        {label: 'Página Principal', navigateTo: 'home',  active: false},
        {label: 'Listagem', navigateTo: 'listagem',  active: false},
        {label: 'Criador', navigateTo: 'criador',  active: false},
      ];
  }

  identifyActiveRoute(navigateTo: any) {
    this.menuItems.forEach((item: { navigateTo: any; active: boolean; }) => {
        item.active = (item.navigateTo == navigateTo);
    })
  }
}
