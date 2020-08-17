import { Component, OnInit } from '@angular/core';
import { Note } from './note';
import { NotesService } from './notes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  errMessage: string;
  note: Note = new Note();
  noteList: Array<Note>;

  constructor(private notesService: NotesService) { }

  ngOnInit() {
    this.notesService.getNotes().subscribe(
      data => { this.noteList = data; },
      error => {
        this.errMessage = error.message;
      });
  }

  addNote() {
    if (!this.note.text || !this.note.title) {
      this.errMessage = 'Title and Text both are required fields';
      return this.errMessage;
    }
    else {
      this.notesService.addNote(this.note).subscribe(
        response => {
          this.noteList.push(this.note);
        }, error => {
          this.errMessage = error.message;
        });
    }

  }
}
