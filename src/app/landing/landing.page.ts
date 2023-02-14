import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { AnimationController } from '@ionic/angular';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.page.html',
  styleUrls: ['./landing.page.scss'],
})
export class LandingPage implements OnInit {

  @ViewChild('transition', { static: false }) transition!: ElementRef;
  @ViewChild('sugestion', { static: false }) sugestion!: ElementRef;

  constructor(private animationCtrl: AnimationController) { }

  ngOnInit() {
  }

  ionViewDidEnter() {   

    // anima imagem de transicao
    const anim1 = this.animationCtrl.create()
      .addElement(this.transition.nativeElement)
      .duration(600)   
      .keyframes([
        { offset: 0, transform: 'translateX(0px) translateY(0px) scale(1)' },
        { offset: 0, opacity: '1'},
        { offset: 1, transform: 'translateX(-' + (this.transition.nativeElement.offsetLeft*8.8) + 'px) translateY(' + (this.sugestion.nativeElement.offsetTop/1.18) + 'px) scale(0.4)' },        
        { offset: 1, opacity: '0.65'}
      ]);      
      
      anim1.play();                     
  }

}
