import { Component, OnInit } from '@angular/core';

import { faFilePdf, faWallet, faCaretUp, faCaretDown, faLaptop, faTools, faClock, faHome, faCheck, faCircle, faCircleNotch, faSync, faChevronLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  howWorks: any[] = [];
  services: any[] = [];
  whys: any[] = [];
  reviews: any[] = [];

  activeSlide: number = 0;

  icon: any = {
    up: faCaretUp,
    down: faCaretDown,
    check: faCheck,
    circle: faCircle,
    circleNotch: faCircleNotch,
    sync: faSync,
    left: faChevronLeft,
  }

  flag: any = {
    detailHowWork: false,
  }

  constructor() { }

  ngOnInit(): void {
    this.howWorks = this.setHowWork;
    this.services = this.setService;
    this.whys = this.setWhy;
    this.reviews = this.setReview;
  }

  get setHowWork() {
    return [
      {
        'no': 1,
        'title': 'Isi Kebutuhan',
        'desc': 'Isi Kebutuhan dan jadwalkan kunjungan survey',
        'icon': faFilePdf
      },
      {
        'no': 2,
        'title': 'Bayar estimasi dengan OVO',
        'desc': 'Penyedia Jasa akan segera menghubungi Anda untuk konfirmasi jadwal pengerjaan',
        'icon': faWallet
      },
      {
        'no': 3,
        'title': 'Pengerjaan',
        'desc': 'Jika harga akhir lebih kecil dari estimasi, saldo OVO akan dikembalikan. jika lebih besar, bayar sisanya dengan OVO atau tunai',
        'icon': faTools
      }
    ]
  }

  get setService() {
    return [
      {
        'no': 1,
        'title': 'Cuci AC',
        'icon': faLaptop
      },
      {
        'no': 2,
        'title': 'Perbaikan AC',
        'icon': faTools
      },
      {
        'no': 3,
        'title': 'Layanan Lainnya',
        'icon': faClock
      },
      {
        'no': 4,
        'title': 'Perbaikan Outdoor',
        'icon': faHome
      }
    ]
  }

  get setWhy() {
    return [
      {
        'no': 1,
        'title': 'Penyedia jasa terverifikasi',
      },
      {
        'no': 2,
        'title': 'Tenaga kerja profesional',
      },
      {
        'no': 3,
        'title': 'Harga terstandarisasi',
      }
    ]
  }

  get setReview() {
    return [
      {
        'no': 1,
        'rating': 5,
        'review': 'Pelayanan nya mantap, datang tepat waktu, memberikan pelayan yang sempurna, pokonya mantap',
        'displayName': 'Ali'
      },
      {
        'no': 2,
        'rating': 4,
        'review': 'Pelayanan nya mantap banget, datang tepat waktu, memberikan pelayan yang sempurna, pokonya mantap',
        'displayName': 'Abdul'
      },
      {
        'no': 3,
        'rating': 3,
        'review': 'Pelayanan nya mantap sangat, datang tepat waktu, memberikan pelayan yang sempurna, pokonya mantap',
        'displayName': 'Wahid'
      }
    ]
  }

  openHowWork() {
    this.flag.detailHowWork = true;
  }

  closeHowWork() {
    this.flag.detailHowWork = false;
  }

  dataLocation(event) {

  }

  switchSlide(event) {
    this.activeSlide = event;
  }

}
