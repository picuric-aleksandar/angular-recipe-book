import { Directive, ElementRef, HostBinding, HostListener, OnInit } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective implements OnInit{

  @HostBinding('class.open') isOpen: boolean = false;
  constructor(private elRef: ElementRef) { }

  ngOnInit(){

  }

  @HostListener('document:click', ['$event']) toggleDropdown(eventData: Event){
    // this.isOpen = !this.isOpen;
    console.log(this.elRef.nativeElement.contains(eventData.target));
    this.isOpen = this.elRef.nativeElement.contains(eventData.target) ? !this.isOpen : false;
  }
}
