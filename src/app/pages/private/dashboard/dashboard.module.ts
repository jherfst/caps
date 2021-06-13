import { ClipboardModule } from '@angular/cdk/clipboard';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FooterModule } from '@app/components/footer/footer.module';
import { HeaderModule } from '@app/components/header/header.module';
import { DashboardPage } from './dashboard.page';

@NgModule({
  declarations: [DashboardPage],
  imports: [
    ClipboardModule,
    FormsModule,
    CommonModule, HeaderModule, FooterModule,
    RouterModule.forChild([
      {
        path: '',
        component: DashboardPage,
        data: {
          title: 'Capitalize',
          robots: 'all', // noindex, nofollow
        },
      },
    ]),
  ],
})
export class DashboardModule {}
