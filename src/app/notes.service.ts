import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Note } from './note';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class NotesService {
  private url = 'http://localhost:3000/notes';
  constructor(private http: HttpClient) {

  }
  getNotes(): Observable<Note[]> {
    return this.http.get<Note[]>(this.url);
  }

  addNote(note: Note): Observable<Note> {
    return this.http.post<Note>(this.url, note);
  }

}
