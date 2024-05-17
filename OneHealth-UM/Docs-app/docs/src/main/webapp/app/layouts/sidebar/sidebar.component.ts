import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { SERVER_API_URL } from 'app/app.constants';
import { LocalStorageService } from 'ngx-webstorage';
import Scrollbar from 'smooth-scrollbar';

@Component({
  selector: 'jhi-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  resourceUrl = SERVER_API_URL;
  searchMenuItemValue = '';
  selectedId!: any;
  entity: any;
  requestUrl = '/api/topic/all';
  listEntity!: any[];
  // private reloadSubscription!: Subscription;

  constructor(protected http: HttpClient, private localStorage: LocalStorageService) {}

  ngOnInit(): void {
    this.entity = {
      id: 0,
      name: ''
    };
    // this.reloadSubscription = this.reloadService.getReloadFlag().subscribe((flag: any) => {
    //   if (flag) {
    //     this.loadDetails(); // Thực hiện hành động cần thiết để reload component
    //     this.reloadService.setReloadFlag(false); // Đặt lại cờ
    //   }
    // });
    this.loadDetails();
    this.sideBarLoad();
  }

  searchMenuItem(): void {}

  script(): void {}

  selected(id: any): void {
    this.selectedId = id;
  }

  sideBarLoad(): void {
    $(window).resize(function(): void {
      $('#inner-scrollbar .scroll-content').height($(window).height()! - 50);
    });
    $(window).trigger('resize');
    Scrollbar.initAll();
    $('#barToggle').click(function(): void {
      $('#wrapper').toggleClass('extend');
    });
  }

  loadDetails(): void {
    const accesstoken = this.localStorage.retrieve('authenticationtoken');
    const headers = new HttpHeaders({
      Authorization: 'Bearer ' + accesstoken
    });

    // Thêm header vào yêu cầu POST
    this.http
      .get<any>(this.resourceUrl + this.requestUrl, { headers, observe: 'response' })
      .subscribe(
        (res: HttpResponse<any>) => {
          if (res.body) {
            if (res.body.CODE === '00') {
              this.listEntity = res.body.RESULT;
              console.log(this.listEntity);
            } else {
              console.log('That Bai');
            }
          }
        },
        () => {}
      );
  }
}
