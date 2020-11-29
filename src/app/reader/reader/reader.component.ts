import { Component, OnInit } from '@angular/core';
import {SocketService} from '../../@core/services/socket.service';

@Component({
  selector: 'app-reader',
  templateUrl: './reader.component.html',
  styleUrls: ['./reader.component.scss']
})
export class ReaderComponent implements OnInit {

  constructor(public socketService: SocketService) { }

  ngOnInit(): void {
    this.socketService.summaryReportReceived();
  }

}
