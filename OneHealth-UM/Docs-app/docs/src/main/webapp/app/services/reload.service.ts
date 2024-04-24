import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReloadService {
  private reloadFlag = new BehaviorSubject<boolean>(false);

  setReloadFlag(value: boolean): void {
    this.reloadFlag.next(value);
  }

  getReloadFlag(): any {
    return this.reloadFlag.asObservable();
  }
}
