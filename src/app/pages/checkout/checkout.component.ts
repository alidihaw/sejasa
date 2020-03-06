import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { faChevronLeft, faUser, faPhone, faInbox, faAddressCard, faCalendar } from '@fortawesome/free-solid-svg-icons';

import { CookieService } from 'ngx-cookie-service';

import * as moment from 'moment';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  icon: any = {
    left: faChevronLeft,
    user: faUser,
    phone: faPhone,
    email: faInbox,
    address: faAddressCard,
    calendar: faCalendar,
  }

  state: any;

  constructor(
    private router: Router,
    private cookieService: CookieService
  ) {

  }

  ngOnInit() {
    let payload = this.cookieService.get('payload');

    try {
      this.state = JSON.parse(payload)
    } catch (e) {}

    console.log(this.state);
  }

  
  back() {
    window.history.go(-1);
  }

  goToHome() {
    this.router.navigateByUrl('/');
  }
}
