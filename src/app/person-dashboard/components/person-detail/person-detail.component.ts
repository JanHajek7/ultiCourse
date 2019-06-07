import {
  Component,
  OnChanges,
  Input,
  Output,
  OnInit,
  EventEmitter
} from "@angular/core";
import { Persons } from "../../models/person.interface";

@Component({
  selector: "person-detail",
  templateUrl: "./person-detail.component.html",
  styleUrls: ["./person-detail.component.css"]
})
export class PersonDetailComponent implements OnChanges, OnInit {
  @Input()
  detail: Persons;

  @Output()
  edit: EventEmitter<any> = new EventEmitter();

  @Output()
  remove: EventEmitter<any> = new EventEmitter();
  editing: boolean = false;

  constructor() {}

  ngOnChanges(changes) {
    if (changes.detail) {
      this.detail = Object.assign({}, changes.detail.currentValue);
    }
    console.log("ngOnChanges");
  }
  ngOnInit() {
    console.log("ngOnInit");
  }

  onNameChange(value: string) {
    this.detail.name = value;
  }

  toggleEdit() {
    if (this.editing) {
      this.edit.emit(this.detail);
    }
    this.editing = !this.editing;
  }

  onRemove() {
    this.remove.emit(this.detail);
  }
}
