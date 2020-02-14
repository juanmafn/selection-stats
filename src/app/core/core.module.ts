import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatsService } from './services/stats.service';

@NgModule({
    imports: [CommonModule],
    providers: [
        StatsService,
    ],
    declarations: []
})
export class CoreModule {}
