import { Component } from '@angular/core';
import { FplService } from './fpl-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FplApp';

  constructor(private service:FplService) {
    this.service.getGameweekData(5).then(response=>{
      console.log(response);
    });
    }
  }
