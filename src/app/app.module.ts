import { NgModule } from '@angular/core'
import { RouterModule } from "@angular/router";
import { rootRouterConfig } from "./app.routes";
import { AppComponent } from "./app.component";
import { GithubService } from "./github/shared/github.service";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { HttpModule } from "@angular/http";
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { RepoBrowserComponent } from './github/repo-browser/repo-browser.component';
import { RepoListComponent } from './github/repo-list/repo-list.component';
import { RepoDetailComponent } from './github/repo-detail/repo-detail.component';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
// ng2-bootstrap
import { DatepickerModule, TimepickerModule, ButtonsModule, RatingModule } from 'ng2-bootstrap/ng2-bootstrap';
// primeng
import { GrowlModule, DataTableModule } from 'primeng/primeng';

@NgModule({
  declarations: [AppComponent, AboutComponent, RepoBrowserComponent, RepoListComponent, RepoDetailComponent, HomeComponent],
  imports: [
    DatepickerModule, TimepickerModule, ButtonsModule, RatingModule,
    GrowlModule, DataTableModule,
    BrowserModule, FormsModule, HttpModule, RouterModule.forRoot(rootRouterConfig)],
  providers: [GithubService, { provide: LocationStrategy, useClass: HashLocationStrategy }],
  bootstrap: [AppComponent]
})
export class AppModule {

}
