import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { TopicsComponent } from "./pages/topics/topics.component";
import { TopicComponent } from "./pages/topic/topic.component";
import { NotFoundComponent } from "./pages/not-found/not-found.component";

const appRoutes: Routes = [
    {path: '', component: TopicsComponent, pathMatch: 'full'},
    {path: 'not-found', component: NotFoundComponent},
    {path: ':id', component: TopicComponent},
    {path: '**', redirectTo: 'not-found'}
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}