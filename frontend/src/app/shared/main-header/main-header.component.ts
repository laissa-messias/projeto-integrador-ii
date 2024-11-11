import { Component } from '@angular/core';
import { FontSizeService } from '../../services/font-size.service';

@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrl: './main-header.component.scss'
})
export class MainHeaderComponent {
  constructor(public fontSizeService: FontSizeService) {}
}