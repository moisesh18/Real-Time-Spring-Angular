import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SocketComponent } from './components/socket/socket.component';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';
import { AuthGaurdService } from './services/auth-gaurd.service';


const routes: Routes = [
  { path: '', component: SocketComponent, pathMatch: 'full', canActivate: [AuthGaurdService] }
  , { path: 'login', component: LoginComponent }
  , { path: 'logout', component: LogoutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
