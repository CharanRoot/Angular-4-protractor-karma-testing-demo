import { TestBed, fakeAsync, inject, ComponentFixture, tick } from '@angular/core/testing';
import { Router } from '@angular/router';
import { Location, CommonModule } from '@angular/common';
import { routes } from './app-routing.module';
import { Component, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { DashboardComponent } from '../components/dashboard/dashboard.component';
import { HeroService } from '../services/hero.service';
import { MockBackend } from '@angular/http/testing';
import { BaseRequestOptions, Http } from '@angular/http';
import { HeroesComponent } from '../components/heroes/heroes.component';
import { HeroDetailComponent } from '../components/hero-detail/hero-detail.component';
import { FormsModule } from '@angular/forms';
import {MdDialog, MdDialogRef} from '@angular/material';
import { MaterialModule } from '@angular/material';

describe('app-routing module', () => {
  describe('passing guard', () => {
    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [ AppRoutingTestingModule,FormsModule  ],
        providers: [
          HeroService,
        ]
      });
    });
    it('allows access to dashboard', fakeAsync(inject([ Router, Location ], (router: Router, location: Location) => {
      const fixture = TestBed.createComponent(RootComponent);
      router.resetConfig(routes);
      router.navigate([ 'dashboard' ]);
      advance(fixture);
      expect(location.path()).toEqual('/dashboard');
    })));
    it('allows access to hero detail with ID', fakeAsync(inject([ Router, Location ], (router: Router, location: Location) => {
      const fixture = TestBed.createComponent(RootComponent);
      router.resetConfig(routes);
      router.navigate([ 'detail', '0' ]);
      advance(fixture);
      expect(location.path()).toEqual('/detail/0');
    })));
    it('allows access to  all heroes', fakeAsync(inject([ Router, Location ], (router: Router, location: Location) => {
      const fixture = TestBed.createComponent(RootComponent);
      router.resetConfig(routes);
      router.navigate([ 'heroes' ]);
      advance(fixture);
      expect(location.path()).toEqual('/heroes');
    })));
  });
});

@Component({selector: 'app-simple-cmp', template: `simple`})
class SimpleComponent {
}

@Component({selector: 'app-root-cmp', template: `<router-outlet></router-outlet>`})
class RootComponent {
}

function advance(fixture: ComponentFixture<any>): void {
  tick();
  fixture.detectChanges();
}

@NgModule({
  imports: [ RouterTestingModule, FormsModule ,CommonModule,MaterialModule, RouterTestingModule.withRoutes([ {
    path: 'simple',
    component: SimpleComponent
  } ]) ],
  entryComponents: [
    SimpleComponent,
    RootComponent,
    DashboardComponent,
    HeroDetailComponent,
    HeroesComponent,
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [
    MockBackend,
    BaseRequestOptions,
    {
      provide: Http,
      useFactory: (backend: MockBackend, options: BaseRequestOptions) => new Http(backend, options),
      deps: [ MockBackend, BaseRequestOptions ]
    }
  ],
  exports: [
    SimpleComponent,
    RootComponent
  ],
  declarations: [
     DashboardComponent, HeroesComponent, HeroDetailComponent,
    SimpleComponent,
    RootComponent
  ]
})
class AppRoutingTestingModule {
}
