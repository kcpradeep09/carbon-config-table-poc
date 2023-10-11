import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  Renderer2,
  inject,
} from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Step } from 'carbon-components-angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
  theme: string = 'white';

  private document = inject(DOCUMENT);
  private renderer = inject(Renderer2);
  currentStep = 0;

  items = [
    {
      id: 'step1',
      label: 'First step',
      secondaryLabel: 'secondary label',
      description: 'This is displayed when step icon is hovered',
    },
    {
      id: 'step2',
      label: 'Second Step',
      description: 'This is displayed when the second step icon is hovered',
    },
    { id: 'step3', label: 'Third Step' },
    { id: 'step4', label: 'Fourth Step' },
    { id: 'step5', label: 'Fifth Step' },
    { id: 'step6', label: 'Sixth Step' },
  ];

  ngOnInit() {
    // Apply default class to body
    this.renderer.addClass(this.document.body, this.theme);
  }

  onChange(event: any) {
    // Remove current assigned class then add updated class
    this.renderer.removeClass(this.document.body, this.theme);
    this.theme = event.value;
    this.renderer.addClass(this.document.body, this.theme);
  }

  stepSelected($event: { step: Step; index: number }) {
    console.log($event);
    this.currentStep = $event.index;

  }
}
