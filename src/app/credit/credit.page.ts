import { Component, OnInit } from '@angular/core';
import { NavController, Animation, AnimationController } from '@ionic/angular';

@Component({
  selector: 'app-credit',
  templateUrl: './credit.page.html',
  styleUrls: ['./credit.page.scss'],
})
export class CreditPage implements OnInit {

  constructor(private animationCtrl: AnimationController, public navCtrl: NavController) {    
  }

  ngOnInit() {
  }

  gotoLanding() {

    const customAnimation = (_: HTMLElement, opts: any): Animation => {
      // create root transition
      const rootTransition = this.animationCtrl
        .create()
        .duration(opts.duration || 333)
        .easing('cubic-bezier(0.7,0,0.3,1)');
    
      const enterTransition = this.animationCtrl.create().addElement(opts.enteringEl);
      const exitTransition = this.animationCtrl.create().addElement(opts.leavingEl);
    
      enterTransition.fromTo('opacity', '0', '1');
      exitTransition.fromTo('opacity', '1', '0');
    
      if (opts.direction === 'forward') {
        enterTransition.fromTo('transform', 'opacity(0)', 'opacity(1)');
        exitTransition.fromTo('transform', 'opacity(1)', 'opacity(0)');
      } else {
        enterTransition.fromTo('transform', 'opacity(1)', 'opacity(0)');
        exitTransition.fromTo('transform', 'opacity(0)', 'opacity(1)');
      }
    
      rootTransition.addAnimation([enterTransition, exitTransition]);
      return rootTransition;
    } 
  
    this.navCtrl.navigateForward('/landing', { animation: customAnimation });
  }  

}