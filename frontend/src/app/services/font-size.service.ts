import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FontSizeService {
  private fontSize = 1;

  get currentFontSize(): string {
    return `${this.fontSize}em`;
  }

  increaseFontSize() {
    if (this.fontSize < 1.5) {
      this.fontSize += 0.1;
    }
  }

  decreaseFontSize() {
    if (this.fontSize > 0.8) {
      this.fontSize -= 0.1;
    }
  }
}
