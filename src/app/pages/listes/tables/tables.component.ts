import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { Employe } from 'src/app/models/employe.model';
import { EmployeService } from 'src/app/services/Employe.service';

@Component({
  selector: 'app-tables',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatTableModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
  ],
  templateUrl: './tables.component.html',
})
export class AppTablesComponent implements OnInit {
  displayedColumns1: string[] = ['avatar', 'name', 'adresse', 'telephone', 'profession'];
  dataSource1: Employe[] = [];

  // Liste fixe de couleurs pastel douces
  private pastelColors = [
    'rgb(239, 177, 255)',   // Violet doux
    'rgb(165, 228, 255)',  // Bleu ciel
    'rgb(255, 179, 195)',  // Rose tendre
  ];

  // Map des professions vers leurs couleurs
  professionColorMap: { [professionName: string]: string } = {};
  colorIndex = 0;

  constructor(private employeService: EmployeService) {}

  ngOnInit(): void {
    this.getEmployes();
  }

  getEmployes(): void {
    this.employeService.getEmployes().subscribe({
      next: (data: Employe[]) => {
        this.dataSource1 = data;

        // À chaque profession unique, on associe une couleur
        data.forEach(emp => {
          const prof = emp.profession?.nom;
          if (prof && !this.professionColorMap[prof]) {
            this.professionColorMap[prof] = this.pastelColors[this.colorIndex % this.pastelColors.length];
            this.colorIndex++;
          }
        });
      },
      error: (err) => {
        console.error('Erreur lors de la récupération des employés', err);
      },
    });
  }

  getInitials(firstname: string, lastname: string): string {
    const firstInitial = firstname.charAt(0).toUpperCase();
    const lastInitial = lastname.charAt(0).toUpperCase();
    return `${firstInitial}${lastInitial}`;
  }

  getColorForProfession(professionName: string): string {
    return this.professionColorMap[professionName] || '#ccc'; // Couleur par défaut au cas où
  }
}
