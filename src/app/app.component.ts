import { NgFor } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { FriendListComponent } from "./friend-list/friend-list.component";
import { FriendAddComponent } from "./friend-add/friend-add.component";
import { FriendModel } from './app.contracts';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, NgFor, FriendListComponent, FriendAddComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ThenuTest';

  friends = signal<FriendModel[]>([
    { id: 1, firstName: 'friend 1', lastName: 'lastName 1' },
    { id: 2, firstName: 'friend 2', lastName: 'lastName 2' },
    { id: 3, firstName: 'friend 3', lastName: 'lastName 3' },
    { id: 4, firstName: 'friend 4', lastName: 'lastName 4' },
  ])

  clearAll() {
    this.friends.update(existingFriends => []);
  }

  addFriend(event: any) {
    console.log(event);
    if (!event.firstName || !event.lastName)
      return;

    this.friends.update(existingFriends =>
      [...existingFriends, { id: ++existingFriends.length, firstName: event.firstName, lastName: event.lastName }]);

  }
}