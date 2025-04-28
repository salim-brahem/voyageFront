import { Component, ViewChild, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { RouterModule } from '@angular/router';
import { ChartComponent } from 'ng-apexcharts';
import { EmployeService } from 'src/app/services/Employe.service';

@Component({
    selector: 'app-total-employes',
    templateUrl: './total-employes.component.html',
    imports: [
        // autres modules
        MatCardModule,
        MatIconModule,
        MatMenuModule,
        MatButtonModule,
        RouterModule
      ],
})
export class AppTotalemployesComponent implements OnInit {
    @ViewChild('chart') chart: ChartComponent = Object.create(null);
    public totalfollowersChart!: Partial<any>;
    totalEmployes: number = 0;

    constructor(private employeService: EmployeService) {
        this.totalfollowersChart = {
            // ton graphique existant ici, inchangé
        };
    }

    ngOnInit(): void {
        this.loadEmployeCount();
    }

    loadEmployeCount(): void {
        this.employeService.getEmployeCount().subscribe({
            next: (count) => {
                this.totalEmployes = count;
            },
            error: (err) => {
                console.error('Erreur lors du chargement du total des employés', err);
            },
        });
    }
}
