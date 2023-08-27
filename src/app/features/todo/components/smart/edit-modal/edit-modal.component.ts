import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Todo } from 'src/app/shared/models/todo.Interface';

@Component({
  selector: 'app-edit-modal',
  templateUrl: './edit-modal.component.html',
  styleUrls: ['./edit-modal.component.css']
})
export class EditModalComponent implements OnInit{
  @Input() todo!: Todo | null
  @Output() clearModalEvent = new EventEmitter()
  @Output() submitDataEvent = new EventEmitter<{_id?: string; title: string; description: string, mode: 'CREATE' | 'EDIT'}>()
  title = ''
  description = ''

ngOnInit(): void {
    this.title = this.todo?.title || '';
    this.description = this.todo?.description || '';
}

  closeModal(){
    this.clearModalEvent.emit();
  }

  onSubmit(){
    const mode = this.todo ? 'EDIT': 'CREATE';
    this.submitDataEvent.emit({_id: this.todo?._id, title: this.title, description: this.description, mode})
  }
}
