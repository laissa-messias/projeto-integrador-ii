import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-upload-area',
  templateUrl: './upload-area.component.html',
  styleUrl: './upload-area.component.scss'
})
export class UploadAreaComponent {
  @Input() label: string = 'Anexar arquivo';
  @Output() onUpload = new EventEmitter<any>()

  isDragging = false;
  selectedFile: File | null = null;

  onDragOver(event: DragEvent) {
    event.preventDefault();
    this.isDragging = true;
  }

  onDragLeave(event: DragEvent) {
    event.preventDefault();
    this.isDragging = false;
  }

  onDrop(event: DragEvent) {
    event.preventDefault();
    this.isDragging = false;

    if (event.dataTransfer && event.dataTransfer.files.length) {
      this.selectedFile = event.dataTransfer.files[0];
      this.onUpload.emit(this.selectedFile);
    }
  }

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.selectedFile = input.files[0];
      this.onUpload.emit(this.selectedFile);
    }
  }
}
