import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  items: any = [];
  chosenItem: any;

  constructor() { }

  ngOnInit(): void {
    this.items = [
      {title: "Item 1", subtitle: "Esse item é incrível", date: '21/11/01', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi maximus erat quis leo consequat congue.'},
      {title: "Item 2", subtitle: "Esse item é maravilhoso", date: '21/11/01', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi maximus erat quis leo consequat congue.'},
      {title: "Item 3", subtitle: "Esse item é magnífico", date: '21/11/01', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi maximus erat quis leo consequat congue.'},
      {title: "Item 4", subtitle: "Esse item é incrível", date: '21/11/01', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi maximus erat quis leo consequat congue.'},
      {title: "Item 5", subtitle: "Esse item é maravilhoso", date: '21/11/01', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi maximus erat quis leo consequat congue.'},
      {title: "Item 6", subtitle: "Esse item é magnífico", date: '21/11/01', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi maximus erat quis leo consequat congue.'},

    ]
  }

  chooseItem(item: any) {
    this.chosenItem = item;
  }

  removeChosenItem() {
    this.chosenItem =  null ;
  }

}
