import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title: string = "Hello";
  name: string = "Honza";
  nameNg: string = "NgHonza";
  nameTwoWay: string = "TwoWayHonza";

  handleChange(event: any) {
    this.name = event.target.value;
  }

  handleChange2(value: string) {
    this.nameNg = value;
  }

  handleClick(value: string) {
    console.log(value);
  }
}
