import { Component, OnInit, Input } from "@angular/core";
import { Persons } from "../../models/person.interface";

@Component({
  selector: "person-count",
  templateUrl: "./person-count.component.html",
  styleUrls: ["./person-count.component.css"]
})
export class PersonCountComponent implements OnInit {
  @Input()
  items: Persons[];
  constructor() {}

  ngOnInit() {}

  checkedPersons(): number {
    if (!this.items) return;
    return this.items.filter((person: Persons) => person.checked).length;
  }
}
