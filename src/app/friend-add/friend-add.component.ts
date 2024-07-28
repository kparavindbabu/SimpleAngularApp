import { Component, EventEmitter, input, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { last } from 'rxjs';

@Component({
  selector: 'app-friend-add',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './friend-add.component.html',
  styleUrl: './friend-add.component.scss'
})
export class FriendAddComponent {

  firstName: string = '';

  lastName: string = '';

  @Output()
  addFriendEvent = new EventEmitter<{ firstName: string, lastName: string }>();

  @Output()
  clearAllEvent: EventEmitter<any> = new EventEmitter();

  addFriend(firstName: string, lastName: string) {
    this.addFriendEvent.emit({ firstName: firstName, lastName: lastName });
    this.clearForm();
  }


  clearAll() {
    this.clearAllEvent.emit();
    this.clearForm();
  }

  clearForm() {
    this.firstName = '';
    this.lastName = '';
  }
}
