import { Component, Input } from '@angular/core';
import { FriendModel } from '../app.contracts';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-friend-list',
  standalone: true,
  imports: [NgFor],
  templateUrl: './friend-list.component.html',
  styleUrl: './friend-list.component.scss'
})
export class FriendListComponent {

  @Input()
  friends: FriendModel[] = []
}
