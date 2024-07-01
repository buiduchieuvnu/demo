import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { LoginService } from 'app/core/login/login.service';
import { DanhMucService } from 'app/entities/danhmuc/danhmuc.service';
import { ReloadService } from 'app/services/reload.service';
import { UserModalComponent } from 'app/shared/popup-modal/user-modal/user-modal.component';
import { LocalStorageService } from 'ngx-webstorage';
import { Subscription } from 'rxjs';

@Component({
  selector: 'jhi-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  userId!: any;
  username!: string;
  fullName!: string;
  modalRef!: NgbModalRef;
  REQUEST_URL = '/api/user';
  private reloadSubscription!: Subscription;
  userrole!: any;

  CheckRole!: any;

  constructor(
    private localStorage: LocalStorageService,
    private loginService: LoginService,
    private modalService: NgbModal,
    private dmService: DanhMucService,
    private reloadService: ReloadService
  ) {}

  ngOnInit(): void {
    this.reloadSubscription = this.reloadService.getReloadFlag().subscribe((flag: any) => {
      if (flag) {
        this.updateUserData(); // Thực hiện hành động cần thiết để reload component
        this.reloadService.setReloadFlag(false); // Đặt lại cờ
      }
    });
    this.updateUserData();
  }
  updateUserData(): void {
    setTimeout(() => {
      const user = this.localStorage.retrieve('user');
      if (user) {
        this.username = user.username ?? '';
        this.fullName = user.name ?? '';
        this.userrole = user.role ?? '';
      }

      this.userId = user.id;

      console.log(user);
      console.log('FullName: ' + this.fullName);
      console.log('Role: ' + this.userrole);

      this.CheckRole = this.userrole === '0';
      console.log('CheckUserRole: ' + this.CheckRole);
    }, 500);
  }
  logout(): void {
    this.loginService.logout();
  }

  script(): void {
    $('#sidebar').toggleClass('block');
    $('#wrapper').toggleClass('extend');
  }
  openModal(): void {
    this.modalRef = this.modalService.open(UserModalComponent, {
      windowClass: 'hsbaModalClass-sm',
      keyboard: true,
      backdrop: 'static'
    });
    this.modalRef.componentInstance.inputId = this.userId;
    this.modalRef.result.then(
      () => {
        // on modal success
        console.log('modal success!');
      },
      () => {
        // on modal dismiss
        console.log('modal dismiss');
      }
    );
  }
}
