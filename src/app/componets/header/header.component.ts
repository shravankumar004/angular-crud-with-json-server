import { Component, OnInit } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title:string="TODO List";
  showAddTask!: boolean;
  subscription!: Subscription;

  constructor( private UiService:UiService) {
    this.subscription = this.UiService.onToggle().subscribe((value) => (this.showAddTask = value));
  }

  ngOnInit(): void {
  }
  
  toggleAddTask(){
    this.UiService.toggleAddTask();
  }
  
}
