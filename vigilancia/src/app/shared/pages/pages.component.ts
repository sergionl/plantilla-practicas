import { Component, OnInit } from '@angular/core';
import { BnNgIdleService } from 'bn-ng-idle';
@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent implements OnInit {

  constructor(private bnIdle: BnNgIdleService) { }

  ngOnInit(): void {
    this.bnIdle.startWatching(60).subscribe((isTimedOut: boolean) => {
      if (isTimedOut) {
        console.log('session expired');
      }
    });
  }

}
