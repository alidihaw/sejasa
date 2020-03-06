import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { faChevronLeft, faUser, faPhone, faInbox } from '@fortawesome/free-solid-svg-icons';

import { CookieService } from 'ngx-cookie-service';

import * as moment from 'moment';

@Component({
  selector: 'app-service-detail',
  templateUrl: './service-detail.component.html',
  styleUrls: ['./service-detail.component.scss']
})
export class ServiceDetailComponent implements OnInit {

  icon: any = {
    left: faChevronLeft,
    user: faUser,
    phone: faPhone,
    email: faInbox
  }

  state: any = {
    payload: null,
    note: '',
    email: false,
    customer: {
      displayName: 'Ali AbduL Wahid',
      email: 'aly.dihaw96@gmail.com',
      phoneNumber: '085280871948',
    },
    addressed: {
      provinsi: null,
      kota: null,
      kecamatan: null
    }
  }

  dataProvinsi: any = [];
  dataKota: any = [];
  dataKecamatan: any = [];

  constructor(
    private router: Router,
    private cookieService: CookieService
  ) {

  }

  ngOnInit() {
    let payload = this.cookieService.get('payload');

    try {
      let payloadData = JSON.parse(payload);

      if (payloadData.payload) {
        this.state = payloadData;
      } else {
        this.state.payload = payloadData;
      }
    } catch (e) {}

    console.log(this.state);

    this.dataProvinsi = this.dataProvinsiAll;
    this.state.addressed.provinsi = this.dataProvinsi[0].value;


    this.onChangeProvinsi(this.state.addressed.provinsi);
    this.onChangeKota(this.state.addressed.kota);
  }

  onChangeProvinsi(event) {
    this.dataKota = this.dataKotaAll.filter(item => item.provinsi === event);
    this.state.addressed.kota = this.dataKota[0].value;

    this.onChangeKota(this.state.addressed.kota);
  } 

  onChangeKota(event) {
    this.dataKecamatan = this.dataKecamatanAll.filter(item => item.kota === event);
    this.state.addressed.kecamatan = this.dataKecamatan[0].value;
  } 

  get dataProvinsiAll() {
    return [
      {
        label: 'Jawa Barat',
        value: 'Jawa Barat'
      },
      {
        label: 'Jawa Timur',
        value: 'Jawa Timur'
      },
      {
        label: 'Jawa Tengah',
        value: 'Jawa Tengah'
      },
      {
        label: 'Jakarta',
        value: 'Jakarta'
      },
    ]
  }

  get dataKotaAll() {
    return [
      {
        provinsi: 'Jawa Barat',
        label: 'Bandung',
        value: 'Bandung'
      },
      {
        provinsi: 'Jawa Barat',
        label: 'Kab Bandung',
        value: 'Kab Bandung'
      },
      {
        provinsi: 'Jawa Timur',
        label: 'Surabaya',
        value: 'Surabaya'
      },
      {
        provinsi: 'Jawa Tengah',
        label: 'Semarang',
        value: 'Semarang'
      },
      {
        provinsi: 'Jakarta',
        label: 'DKI Jakarta',
        value: 'DKI Jakarta'
      },
    ]
  }

  get dataKecamatanAll() {
    return [
      {
        kota: 'Bandung',
        label: 'Lembang',
        value: 'Lembang'
      },
      {
        kota: 'Kab Bandung',
        label: 'Cibiru',
        value: 'Cibiru'
      },
      {
        kota: 'Surabaya',
        label: 'Kecamatan Surabaya',
        value: 'Kecamatan Surabaya'
      },
      {
        kota: 'Semarang',
        label: 'Kecamatan Semarang',
        value: 'Kecamatan Semarang'
      },
      {
        kota: 'DKI Jakarta',
        label: 'Kecamatan Jakarta',
        value: 'Kecamatan Jakarta'
      },
    ]
  }

  back() {
    window.history.go(-1);
  }

  goToCheckout() {
    console.log(this.state);
    let state = JSON.stringify(this.state);
    this.cookieService.set('payload', state);

    this.router.navigateByUrl('/checkout');
  }

  checkDisabled() {
    console.log(this.state);
    if (!this.state.note || !this.state.customer.phoneNumber) return true;
    return false;
  }
}
