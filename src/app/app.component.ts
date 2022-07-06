import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  visibleDivId = null;

  ngOnInit() {
var backDiv = document.getElementById("Menu1");
backDiv.style.display = "none";
  }

 toggleVisibility(divId) {
  if(this.visibleDivId === divId) {
    //visibleDivId = null;
  } else {
    this.visibleDivId = divId;
  }
  this.hideNonVisibleDivs();
}
 hideNonVisibleDivs() {
  var divs = ["Menu1", "Menu2", "Menu3", "Menu4"];
  var i, divId, div;
  for(i = 0; i < divs.length; i++) {
    divId = divs[i];
    div = document.getElementById(divId);
    if(this.visibleDivId === divId) {
      div.style.display = "block";
    } else {
      div.style.display = "none";
    }
  }
}
}
