import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Params, Router } from '@angular/router';
import { AuthService } from '../shared/services/auth.service';
import { Observable, Subscription } from 'rxjs';
import { User } from '../shared/interfaces';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit, OnDestroy {
  [x: string]: any;

  form: FormGroup
  aSub: Subscription
  constructor(private auth: AuthService,
              private router: Router) { 

              }
  

  ngOnInit() {
    this.form = new FormGroup( {
      email: new FormControl( null, [Validators.required, Validators.email] ),
      password: new FormControl( null, [Validators.required, Validators.minLength(6) ] ) 
    })

    this.route.queryParams.subscribe((params: Params) => {
      if(params['registered']) {

      } else if ( params['accessDenied']) {
        
      }
    })
  }


  ngOnDestroy() {
    if ( this.aSub){
      this.aSub.unsubscribe()
    }
  }



  onSubmit() {
       this.form.disable()
        this.aSub = this.auth.register(this.form.value).subscribe(
            () => {
              this.router.navigate(['/login'], {
                queryParams: {
                  registered: true
                }
              })
         },
           error => {
             console.warn(error)
             this.form.enable()
           }
       )
  }

}
