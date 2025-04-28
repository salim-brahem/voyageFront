import { Component, OnInit } from '@angular/core';
import { MaterialModule } from '../../material.module';
import { TablerIconsModule } from 'angular-tabler-icons';
import { ProfessionService } from 'src/app/services/profession.service';
import { CommonModule } from '@angular/common';
import { ProfessionStats } from 'src/app/models/ProfessionStats.model';

@Component({
  selector: 'app-earning-reports',
  standalone: true,
  imports: [CommonModule, MaterialModule, TablerIconsModule], // ✅ Ajoutez CommonModule ici
  templateUrl: './earning-reports.component.html',
})
export class AppEarningReportsComponent implements OnInit {
  stats: ProfessionStats[] = [];

  constructor(private professionService: ProfessionService) {}

  ngOnInit(): void {
    // Utilisation du service pour obtenir les statistiques des professions
    this.professionService.getStats().subscribe({
      next: (data: ProfessionStats[]) => {
        // Assurez-vous que les données sont déjà dans le bon format
        this.stats = data;
      },
      error: (err) => console.error('Erreur lors du chargement des statistiques :', err),
    });
  }
}
