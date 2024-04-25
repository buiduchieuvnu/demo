import { HttpResponse } from '@angular/common/http';
import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ERROR_LABEL, ERROR_MESSAGE, SUCCESS_LABEL } from 'app/app.constants';
import { NotificationService } from 'app/core/notification/notification.service';
import { DanhMucService } from 'app/entities/danhmuc/danhmuc.service';
import { ReloadService } from 'app/services/reload.service';
import { log } from 'console';
import { LocalStorageService } from 'ngx-webstorage';

@Component({
  selector: 'jhi-user-modal',
  templateUrl: './user-modal.component.html',
  styleUrls: ['./user-modal.component.scss']
})
export class UserModalComponent implements OnInit, OnChanges {
  @Input() inputId!: any;
  editing = false;

  entity: any;
  outputSample: any;

  REQUEST_URL = '/api/user';
  listPosterminal: any[] = [];
  connectionStatus: number;

  constructor(
    public activeModal: NgbActiveModal,
    private dmService: DanhMucService,
    private notificationService: NotificationService,
    private localStorage: LocalStorageService,
    private reloadService: ReloadService
  ) {
    this.entity = {
      id: 0,
      username: '',
      name: '',
      password: '',
      unit: '',
      phone: '',
      email: '',
      note: '',
      dateOfBirth: new Date(),
      role: ''
    };
    this.connectionStatus = -1;
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

  ngOnInit(): void {
    if (this.inputId === 0) {
      this.editing = true;
      return;
    }
    this.loadDetails();
  }

  onEdit(): void {
    this.editing = true;
  }

  saveEntity(): void {
    if (this.inputId) {
      this.updateEntity();
    } else {
      this.createEntity();
    }
  }
  createEntity(): void {
    this.entity.dateOfBirth = this.convertDateToDouble(this.entity.dateOfBirth);
    this.dmService.createUser(this.entity, this.REQUEST_URL, '/save').subscribe(
      (res: HttpResponse<any>) => {
        if (res.body) {
          if (res.body.CODE === '00') {
            this.notificationService.showSuccess(res.body.MESSAGE, SUCCESS_LABEL);
          } else {
            this.notificationService.showError(res.body.MESSAGE, ERROR_LABEL);
          }
        }
      },
      () => {
        this.notificationService.showError(ERROR_MESSAGE, ERROR_LABEL);
      }
    );
  }
  updateEntity(): void {
    this.entity.dateOfBirth = this.convertDateToDouble(this.entity.dateOfBirth);
    this.dmService.postOption(this.entity, this.REQUEST_URL, '/update').subscribe(
      (res: HttpResponse<any>) => {
        if (res.body) {
          if (res.body.CODE === '00') {
            this.getUserInfo();
            this.reloadService.setReloadFlag(true);
            this.loadDetails();
            this.notificationService.showSuccess(res.body.MESSAGE, SUCCESS_LABEL);
          } else {
            this.notificationService.showError(res.body.MESSAGE, ERROR_LABEL);
          }
        }
      },
      () => {
        this.notificationService.showError(ERROR_MESSAGE, ERROR_LABEL);
      }
    );
  }

  dismiss(): void {
    this.activeModal.dismiss();
  }

  loadDetails(): void {
    this.dmService.getOption({}, this.REQUEST_URL, '/details/' + this.inputId).subscribe((response: HttpResponse<any>) => {
      if (response.body) {
        if (response.body.CODE === '00') {
          this.entity = response.body.RESULT;
          this.entity.dateOfBirth = this.formatDateOfBirth(this.entity.dateOfBirth);
        }
      }
    });
  }
  getUserInfo(): void {
    this.dmService.getOption({}, this.REQUEST_URL, '/info').subscribe((response: HttpResponse<any>) => {
      if (response.body) {
        this.localStorage.store('user', response.body.RESULT);
      }
    });
  }
  formatDateOfBirth(dateOfBirth: number): string {
    // Đảm bảo rằng dateOfBirth không phải null hoặc không xác định trước khi chuyển đổi
    if (dateOfBirth != null && dateOfBirth !== undefined) {
      const date = new Date(dateOfBirth);
      const year = date.getFullYear();
      const month = ('0' + (date.getMonth() + 1)).slice(-2);
      const day = ('0' + date.getDate()).slice(-2);
      return `${year}-${month}-${day}`;
    }
    return '';
  }
  convertDateToDouble(dateString: string): number {
    const date = new Date(dateString); // Tạo đối tượng Date từ chuỗi ngày tháng
    return date.getTime(); // Trả về số miliseconds kể từ thời điểm 00:00:00 UTC ngày 1/1/1970
  }
}
