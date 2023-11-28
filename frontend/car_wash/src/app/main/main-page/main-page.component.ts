import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from "../../root-store/state";

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  constructor(private store: Store<AppState>) {
  }

  ngOnInit() {

  }
}
