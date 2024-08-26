import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-introduction-page',
  templateUrl: './introduction-page.component.html',
  styleUrls: ['./introduction-page.component.css']
})
export class IntroductionPageComponent {
  InputValue: string | undefined;
  showValidation: boolean = false;
  constructor(
    private router: Router,
  ) {}

  routeTo(){
    if(!this.InputValue){
      this.showValidation = true;
    }else{
      this.router.navigate(["menu"]);
      this.showValidation = false;
    }

  }

}
