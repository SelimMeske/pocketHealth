import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { SEOService } from './services/seo.service';
import { filter, map, mergeMap } from 'rxjs/operators';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit, OnDestroy {
  
  constructor(public router: Router, private seoService: SEOService, private activatedRoute: ActivatedRoute) {}
  
  ngOnInit(){

    this.router.events.subscribe(e => {
      if(e instanceof NavigationEnd){
        (<any>window).ga('set', 'page', e.urlAfterRedirects);
        (<any>window).ga('send', 'pageview');
        window.scroll(0, 0);
      }
    })

    this.router.events.pipe(
      filter(e => e instanceof NavigationEnd),
      map(() => this.activatedRoute),
      map((route) => {
        while (route.firstChild) route = route.firstChild;
        return route;
      }),
      filter((route) => route.outlet === 'primary'),
      mergeMap((route) => route.data)
    ).subscribe(e => {

      let title: string = e['title'];
      let description: string = e['description'];
      let ogUrl: string = e['ogUrl'];
      this.seoService.updateTitle(title);
      this.seoService.updateDescription(description);
      this.seoService.updateOgUrl(ogUrl);
    });
  }

  ngOnDestroy(){
    
  }

  title = 'pocketHealth';
}
