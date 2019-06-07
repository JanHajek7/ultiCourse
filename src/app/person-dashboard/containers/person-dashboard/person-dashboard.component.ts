import { Component, OnInit } from "@angular/core";
import { Persons } from "../../models/person.interface";

@Component({
  selector: "person-dashboard",
  templateUrl: "./person-dashboard.component.html",
  styleUrls: ["./person-dashboard.component.css"]
})
export class PersonDashboardComponent implements OnInit {
  Persons: Persons[];
  constructor() {}
  ngOnInit() {
    this.Persons = [
      {
        id: 1,
        name: "Petr",
        surname: "NNN",
        checked: true,
        checkedInDate: 149074200000,
        children: null
      },
      {
        id: 2,
        name: "Kamil",
        surname: "NNN",
        checked: false,
        checkedInDate: null,
        children: [{ name: "Ted", age: 12 }, { name: "Chloe", age: 7 }]
      },
      {
        id: 3,
        name: "Tomáš",
        surname: "NNN",
        checked: true,
        checkedInDate: 149074200000,
        children: null
      },
      {
        id: 4,
        name: "Linda",
        surname: "NNN",
        checked: true,
        checkedInDate: null,
        children: [{ name: "Jessica", age: 1 }]
      }
    ];
  }

  handleEdit(event) {
    this.Persons = this.Persons.map((person: Persons) => {
      if (person.id == event.id) {
        person == Object.assign({}, person, event);
      }
      return person;
    });
  }
  handleRemove(event) {
    this.Persons = this.Persons.filter((person: Persons) => {
      return person.id !== event.id;
    });
  }
}
