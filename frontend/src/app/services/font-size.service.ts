import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FontSizeService {
  private fontSizeMultiplier = 1;
  private renderer: Renderer2;
  private elementsOriginalFontSize = new Map<Element, number>();

  constructor(rendererFactory: RendererFactory2) {
    this.renderer = rendererFactory.createRenderer(null, null);
  }

  increaseFontSize(): void {
    if (this.fontSizeMultiplier < 1.5) {
      this.fontSizeMultiplier += 0.1;
      this.applyFontSize();
    }
  }

  decreaseFontSize(): void {
    if (this.fontSizeMultiplier > 0.7) { 
      this.fontSizeMultiplier -= 0.1;
      this.applyFontSize();
    }
  }

  private applyFontSize(): void {
    const elementsSelectors = ['p', 'span', 'a', 'button', 'input', 'textarea', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6'];
    
    elementsSelectors.forEach((selector) => {
      const elements = document.querySelectorAll(selector);
      
      elements.forEach((element) => {
        if (!this.elementsOriginalFontSize.has(element)) {
          const originalFontSize = window.getComputedStyle(element).fontSize;
          this.elementsOriginalFontSize.set(element, parseFloat(originalFontSize));
        }

        const baseFontSize = this.elementsOriginalFontSize.get(element) || 16;
        const newFontSize = baseFontSize * this.fontSizeMultiplier;

        this.renderer.setStyle(element, 'font-size', `${newFontSize}px`);
      });
    });
  }
}
