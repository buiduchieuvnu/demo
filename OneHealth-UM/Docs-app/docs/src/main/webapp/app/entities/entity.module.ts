import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DreportSharedModule } from 'app/shared/shared.module';
import { NgxPrintModule } from 'ngx-print';

@NgModule({
  imports: [
    DreportSharedModule,
    NgxPrintModule,
    RouterModule.forChild([
      /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
    ])
  ]
})
export class DreportEntityModule {}
