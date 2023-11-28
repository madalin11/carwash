import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";

@Component({
  selector: 'app-notification-message',
  templateUrl: './notification-message.component.html',
  styleUrls: ['./notification-message.component.css']
})
export class NotificationMessageComponent implements OnInit {
  timer = 5;
  interval : any;
  constructor(@Inject(MAT_DIALOG_DATA) public data: { message: string }, private dialogRef: MatDialogRef<NotificationMessageComponent>){}

  ngOnInit() {
    this.interval = setInterval(() => {
      if(this.timer === 1) {
        clearInterval(this.interval);
        this.dialogRef.close();
      }
      this.timer -= 1;
    }, 1000);
  }
}
