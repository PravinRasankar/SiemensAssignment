import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  listA: any = ['Ironman', 'Superman', 'Batman', 'Thor', 'Captain America', 'Spiderman', 'Wonder Woman', 'Black Widow', 'Hulk', 'Doctor Strange'];
  listB: any = [];
  message: string | undefined;
  showAlert = false;
  deleteButton = false;
  addItemSection = false;
  selectList(item: any) {
    let list: any = document.querySelector('#' + item);
    list.classList.toggle('selected');
  }
  moveToB() {
    if (document.querySelectorAll('.listAsection .selected').length === 0) {
      this.message = "Please select a list from list A";
      this.showAlert = true;
    }
    document.querySelectorAll('.listAsection .selected').forEach(item => {
      this.listB.push(item.innerHTML);
      item.className = '';
      this.listA.splice(this.listA.findIndex((v: string) => v === item.innerHTML), 1);
    })
  }
  moveToA() {
    if (document.querySelectorAll('.listBsection .selected').length === 0) {
      this.message = "Please select a list from list B";
      this.showAlert = true;
    }
    document.querySelectorAll('.listBsection .selected').forEach(item => {
      this.listA.push(item.innerHTML);
      item.className = '';
      this.listB.splice(this.listB.findIndex((v: string) => v === item.innerHTML), 1);
    })
  }
  addItem() {
    this.addItemSection = true;
  }
  addToList() {
    let inputVal: any = document.querySelector('#heroName');
    let selectVal: any = document.querySelector('#listSelection');
    if (inputVal.value && inputVal.value != '' && selectVal.value && selectVal.value != '-1') {
      if (selectVal.value == 'listA') {
        this.listA.push(inputVal.value);
        this.addItemSection = false;
      }
      else if (selectVal.value == 'listB') {
        this.listB.push(inputVal.value);
        this.addItemSection = false;
      }
      else {
        this.listA.push(inputVal.value);
        this.listB.push(inputVal.value);
        this.addItemSection = false;
      }
    }
    else {
      this.showAlert = true;
      this.message = "Fill Both the details."
    }

  }
  deleteAlert() {
    if (document.querySelectorAll('.listAsection .selected').length === 0 && document.querySelectorAll('.listBsection .selected').length === 0) {
      this.message = "Please select a list from list A or B";
      this.showAlert = true;
    } else {
      this.message = "Are you sure you want to delete seletced list"
      this.showAlert = true;
      this.deleteButton = true;
    }

  }
  deleteFromList() {

    document.querySelectorAll('.listAsection .selected').forEach(item => {
      item.className = '';
      this.listA.splice(this.listA.findIndex((v: string) => v === item.innerHTML), 1);
    })
    document.querySelectorAll('.listBsection .selected').forEach(item => {
      item.className = '';
      this.listB.splice(this.listB.findIndex((v: string) => v === item.innerHTML), 1);
    })

    this.message = ""
    this.showAlert = false;
    this.deleteButton = false;
  }
  close(action: any) {
    if (action == "add") {
      this.addItemSection = false;
    } else {
      this.message = ""
      this.showAlert = false;
      this.deleteButton = false;
    }


  }
}
