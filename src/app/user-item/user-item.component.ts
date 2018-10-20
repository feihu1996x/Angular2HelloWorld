import {
  Component,
  OnInit,
  Input
} from '@angular/core';

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.css']
})
export class UserItemComponent implements OnInit {
  @Input() name: string;  // 引入name并声明为组件的一个新属性
  constructor() {
    // this.name = 'Angus'; // 当一个新的UserItemComponent组件被创建时，把name设置为'Angus'
  }

  ngOnInit() {
  }

}
