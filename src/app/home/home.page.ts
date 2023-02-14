import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, Animation, AnimationController } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {

  // https://devdactic.com/animations-ionic-app
  // https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API
  // https://dev.to/aashudubey/list-animation-in-ionic-angular-3aob

    @ViewChild('logo', { static: false }) logo!: ElementRef;
    @ViewChild('page', { static: false }) page!: ElementRef;
    @ViewChild('login', { static: false }) login!: ElementRef;

  constructor(private animationCtrl: AnimationController, public navCtrl: NavController) {    
  }

  ionViewDidEnter() {

    const anim1 = this.animationCtrl.create()
      .addElement(this.logo.nativeElement)
      .duration(1200)   
      .keyframes([
        { offset: 0, transform: 'translateX(0px) translateY(0px) scale(1)' },
        { offset: 0.5, transform: 'translateX(0px) translateY(0px) scale(1)' },
        { offset: 1, transform: 'translateX(-' + (this.logo.nativeElement.offsetLeft+10) + 'px) translateY(-' + (this.logo.nativeElement.offsetTop) + 'px) scale(0.5)' }
      ]);      
      
      anim1.play();      

      const anim2 = this.animationCtrl.create()
      .addElement(this.page.nativeElement)
      .duration(600)   
      .fromTo('opacity', '0', '1');
      
      anim2.play();                   
  }

  gotoStories() {  

    this.navCtrl.navigateForward('/stories');
  }

  gotoLogin() {

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
        enterTransition.fromTo('transform', 'scale(2)', 'scale(1)');
        exitTransition.fromTo('transform', 'scale(1)', 'scale(2)');
      } else {
        enterTransition.fromTo('transform', 'scale(1)', 'scale(2)');
        exitTransition.fromTo('transform', 'scale(2)', 'scale(1)');        
      }
    
      rootTransition.addAnimation([enterTransition, exitTransition]);
      return rootTransition;
    }    

    this.navCtrl.navigateForward('/login', { animation: customAnimation });
    
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

    this.navCtrl.navigateForward('/credit', { animation: customAnimation });
  }

}

