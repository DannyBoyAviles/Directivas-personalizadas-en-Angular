import { Directive, ElementRef, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[error-msg]'
})
export class ErrorMsgDirective implements OnInit, OnChanges{

  htmlElement : ElementRef<HTMLElement>;

  @Input() color: string = 'red'
  @Input() mensaje: string = 'Este campo es requirido'

  constructor( private el : ElementRef<HTMLElement>) {
    console.log('constructor directive');
    console.log(el);

    this.htmlElement = el;
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    if (changes.mensaje) {      
      const mensaje = changes.mensaje.currentValue;
      this.htmlElement.nativeElement.innerHTML = mensaje;
    }

    if (changes.color) {
      const color = changes.color.currentValue;
      this.htmlElement.nativeElement.style.color = color;      
    }

  }

  ngOnInit(): void {
    console.log('OnInit directive');    
    this.setColor();
    this.setMensaje();
  }

  setColor():void{
    this.htmlElement.nativeElement.style.color = this.color;
    this.htmlElement.nativeElement.classList.add('form-text');
  }

  setMensaje():void{
    this.htmlElement.nativeElement.innerHTML = this.mensaje;
  }

}
