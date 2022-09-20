import { Component, AfterViewInit } from '@angular/core';

import * as jQuery from 'jquery';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {

  constructor() { }

  ngAfterViewInit(){

    (function($) {
      "use strict"; // Start of use strict
    
      // Toggle the side navigation
      $("#sidebarToggle, #sidebarToggleTop").on('click', function(e) {
        $("body").toggleClass("sidebar-toggled");
        $(".sidebar").toggleClass("toggled");
        if ($(".sidebar").hasClass("toggled")) {
          $('.sidebar .collapse');
        };
      });
    
    })(jQuery); // End of use strict
  }


}
