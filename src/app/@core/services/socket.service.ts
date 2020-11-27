import {Injectable} from '@angular/core';
import * as signalR from '@aspnet/signalr';
import {IHttpConnectionOptions} from '@aspnet/signalr';

// const options: IHttpConnectionOptions = {
//   accessTokenFactory: () => {
//     return 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJCVUlMREVSU09GVC9BTkRZWFVzZXIiLCJqdGkiOiI5NGM4MDM3Mi1lOTczLTRjY2ItODlmNy01Mjk0ZjVkZDNhYzAiLCJJbnRlcm5hbElkIjoiMTAwIiwiZXhwIjoxNTg4NDE3NjY1LCJpc3MiOiJCdWlsZGVyc29mdCIsImF1ZCI6IkFuZHlYIn0.8HuX4P1ppkIRnqMsRdhipXooL5qqEcLCubUiAOgGUBg';
//   }
// };

@Injectable({
  providedIn: 'root'
})
export class SocketService {
  // tslint:disable-next-line:variable-name
  public _homeData: any;
  // tslint:disable-next-line:variable-name
  public _storageData: any;
  // tslint:disable-next-line:variable-name
  public _productData: any;
  // tslint:disable-next-line:variable-name
  public _tenantData: any;

  private hubConnection: signalR.HubConnection;

  constructor() {
    this.hubConnection = new signalR.HubConnectionBuilder()
      .withUrl('https://dev-eu-andyx-buildersoft.azurewebsites.net/realtime/v1/dashboard')
      .build();

    this.hubConnection
      .start()
      .then(() => console.log('Connection started'))
      .catch(err => console.log('Error while starting connection: ' + err));
  }

  public getHomePageData = () => {
    this.hubConnection.on('SummaryReportReceived', (data) => {
      this._homeData = data;
      console.log(data);
    });
  }
}
