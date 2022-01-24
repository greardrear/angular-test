import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})


export class PostGuard implements CanActivate {

  constructor(private router: Router) {}


  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    let id: any = route.url[1] 
      
  
  
  if (id <=10) {
    return true;

  } else 
  alert('Id greater then 10, cannot access')
  return false;
  
    }
  
}
