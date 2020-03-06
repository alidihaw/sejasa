import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { faChevronLeft, faPlusSquare, faMinusSquare, faChevronDown, faHome, faQuestion, faBuilding } from '@fortawesome/free-solid-svg-icons';

import { CookieService } from 'ngx-cookie-service';

import * as moment from 'moment';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss']
})
export class ServiceComponent implements OnInit {

  icon: any = {
    left: faChevronLeft,
    plus: faPlusSquare,
    minus: faMinusSquare,
    down: faChevronDown
  }

  state: any = {
    problem: null,
    service: null,
    property: null,
    stair: null,
    date: null,
    time: null,
    total: 0
  }

  problems: any;
  services: any;
  propertys: any;
  stairs: any;
  dates: any;
  times: any;

  constructor(
    private router: Router,
    private cookieService: CookieService
  ) {

  }

  ngOnInit() {
    this.problems = this.dataProblems;
    this.services = this.dataServices;
    this.propertys = this.dataPropertys;
    this.stairs = this.dataStairs;
    this.dates = this.dataDates;
    this.times = this.dataTimes;
  }

  get dataProblems() {
    return [
      {
        name: 'Service Rutin',
        checked: false
      },
      {
        name: 'AC Tidak Dingin',
        checked: false
      },
      {
        name: 'AC Berisik',
        checked: false
      },
      {
        name: 'AC Bocor',
        checked: false
      },
      {
        name: 'AC Rusak',
        checked: false
      },
      {
        name: 'Lainnya',
        checked: false
      }
    ]
  }

  get dataServices() {
    return [
      {
        name: 'Cuci AC 0.5 - 1 PK',
        desc: 'Jasa Pembersihan unit AC',
        value: 65000,
        count: 0,
        photo: 'assets/img/bg.jpg'
      },
      {
        name: 'Cuci AC 1.5 - 2 PK',
        desc: 'Jasa Pembersihan unit AC',
        value: 75000,
        count: 0,
        photo: 'assets/img/bg.jpg'
      },
      {
        name: 'Pengecekan Kerusakan',
        desc: 'Gratis bila perbaikan/service dilakukan (per unit AC). saldo akan dikembalikan setelah teknisi datang',
        value: 75000,
        count: 0,
        photo: 'assets/img/bg.jpg'
      },
      {
        name: 'Bongkar AC',
        desc: 'Jasa Pembongkar unit AC',
        value: 100000,
        count: 0,
        photo: 'assets/img/bg.jpg'
      },
      {
        name: 'Bongkar Pasang AC 0.5 - 1 PK',
        desc: 'Jasa pembongkaran dan pemasangan unit AC (Diluar biaya peralatan)',
        value: 350000,
        count: 0,
        photo: 'assets/img/bg.jpg'
      },
      {
        name: 'Bongkar Pasang 1.5 - 2 PK',
        desc: 'Jasa pembongkaran dan pemasangan unit AC (Diluar biaya peralatan)',
        value: 425000,
        count: 0,
        photo: 'assets/img/bg.jpg'
      },
    ]
  }

  get dataPropertys() {
    return [
      {
        name: 'Rumah',
        icon: faHome,
        selected: true
      },
      {
        name: 'Apartment',
        icon: faBuilding,
        selected: false
      },
      {
        name: 'Lainnya',
        icon: faQuestion,
        selected: false
      },
    ]
  }

  get dataStairs() {
    return [
      {
        name: 'Ya',
        selected: true
      },
      {
        name: 'Tidak',
        selected: false
      }
    ]
  }

  get dataDates() {
    return [
      {
        name: 'Hari Ini',
        value: moment(),
        selected: true
      },
      {
        name: 'Besok',
        value: moment().add(1, 'days'),
        selected: false
      },
      {
        name: 'Lusa',
        value: moment().add(2, 'days'),
        selected: false
      }
    ]
  }

  get dataTimes() {
    return [
      {
        name: '09:00 - 12:00',
        selected: true
      },
      {
        name: '12:00 - 15:00',
        selected: false
      },
      {
        name: '15:00 - 18:00',
        selected: false
      }
    ]
  }

  minusService(item) {
    if (item.count == 0) {
      return;
    }
    item.count--;
    this.state.total -= item.value;
  }

  plusService(item) {
    item.count++;
    this.state.total += item.value;
  }

  changeProperty(item) {
    this.propertys.map(itemLoop => {
      if (item.name == itemLoop.name) {
        itemLoop.selected = true;
      } else {
        itemLoop.selected = false;
      }
      return itemLoop;
    })
  }

  changeStairs(item) {
    this.stairs.map(itemLoop => {
      if (item.name == itemLoop.name) {
        itemLoop.selected = true;
      } else {
        itemLoop.selected = false;
      }
      return itemLoop;
    })
  }

  changeDates(item) {
    this.dates.map(itemLoop => {
      if (item.name == itemLoop.name) {
        itemLoop.selected = true;
      } else {
        itemLoop.selected = false;
      }
      return itemLoop;
    })
  }

  changeTimes(item) {
    this.times.map(itemLoop => {
      if (item.name == itemLoop.name) {
        itemLoop.selected = true;
      } else {
        itemLoop.selected = false;
      }
      return itemLoop;
    })
  }

  checkDisabled() {
    let service = this.services.filter(item => { 
      if (item.count > 0) {
        return item;
      }
    });
    let problem = this.problems.filter(item => item.checked);

    if (problem.length > 0 && service.length > 0) {
      return false;
    } 

    return true;
  }

  back() {
    window.history.go(-1);
  }

  goToServiceDetail() {
    let problem = this.problems.filter(item => item.checked);
    let service = this.services.filter(item => { 
      if (item.count > 0) {
        return item;
      }
    });
    let property = this.propertys.find(item => item.selected);
    let stair = this.stairs.find(item => item.selected);
    let date = this.dates.find(item => item.selected);
    let time = this.times.find(item => item.selected);

    if (this.state.total < 75000) {
      this.state.total = 75000;
    }
    
    this.state.problem = problem;
    this.state.service = service;
    this.state.property = property;
    this.state.date = date;
    this.state.stair = stair;
    this.state.time = time;

    let state = JSON.stringify(this.state);
    this.cookieService.set('payload', state);

    this.router.navigateByUrl('/service-detail');
  }
}
