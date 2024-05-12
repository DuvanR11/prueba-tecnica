import { Component, Input, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

interface Route {
  active: boolean;
  icon: string;
  label: string;
  href: string;
}

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  @Input() songs: any[] = [];
  routes: Route[] = [];

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.initializeRoutes();

    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.updateActiveRoute();
    });
  }

  initializeRoutes(): void {
    this.routes = [
      {
        icon: 'home.svg', label: 'Inicio', href: '/home', active: false
      },
      {
        icon: 'search.svg', label: 'Buscar', href: '/home/search?title=', active: false
      }
    ];
    this.updateActiveRoute();
  }

  navigateTo(route: Route): void {
    this.router.navigateByUrl(route.href);
  }

  updateActiveRoute(): void {
    const currentUrl = this.router.url.split('?')[0]; 
    this.routes.forEach(route => {
      route.active = route.href === currentUrl;
    });
  }
}
