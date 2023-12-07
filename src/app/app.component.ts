import { FormGroup, FormControl } from '@angular/forms';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pagina: number | undefined;
  title = 'Ex';
  inscricao: Subscription | undefined; 
  constructor(    private route: ActivatedRoute, private router: Router){

  }
  ngOnInit(){
    this.inscricao = this.route.queryParams.subscribe(
      (queryParams: any) => {
        this.pagina = queryParams['pagina'] || 0;
      }
    );
  }
  ngOnDestroy(){ 
    if (this.inscricao) {
      this.inscricao.unsubscribe();
    }
  }
  proximapagina(){
    if (this.pagina !== undefined) {
      // this.pagina++;
      this.router.navigate(['/list'],{ queryParams: {'pagina': ++this.pagina}})
    }
  } 
}
