import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../services/chat.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-list-usuarios',
  templateUrl: './list-usuarios.component.html',
  styleUrls: ['./list-usuarios.component.css']
})
export class ListUsuariosComponent implements OnInit {
  usuariosActivosObs?: Observable  <any>;

  constructor(
    public ChatService: ChatService
  ) { }

  ngOnInit(){
    this.usuariosActivosObs = this.ChatService.getUsuariosActivos();

    this.ChatService.emitirUsuariosActivos();

  }

}
