import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './layout.component.html'
})
export class LayoutComponent {
  public sidebarMinimized = false;

  toggleMinimize(e) {
    this.sidebarMinimized = e;
  }
}
