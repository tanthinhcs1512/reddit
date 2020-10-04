import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnInit,
  AfterViewInit,
  ChangeDetectorRef,
  AfterContentChecked,
} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-role-grant',
  templateUrl: './_grant-role.component.html',
})
export class GrantRoleComponent implements OnInit {
  isValidDetele: boolean = false;
  constructor(private cdref: ChangeDetectorRef) {}

  ngOnInit() {}

  settings = {
    columns: {
      id: {
        title: 'ID',
        addable: false,
      },
      username: {
        title: 'User Name',
      },
      email: {
        title: 'Email',
        addable: false,
      },
    },
    attr: {
      class: 'table table-bordered',
    },
  };

  data = [
    {
      id: 1,
      username: 'Bret',
      email: 'Sincere@april.biz',
    },
    {
      id: 2,
      username: 'Antonette',
      email: 'Shanna@melissa.tv',
    },
    {
      id: 2,
      username: 'Antonette',
      email: 'Shanna@melissa.tv',
    },
    {
      id: 2,
      username: 'Antonette',
      email: 'Shanna@melissa.tv',
    },
  ];

  onDelete(date: any) {
    console.log('Picked date: ', date);
    this.isValidDetele = true;
  }

  onResetReturnedValue(valueEmitted) {
    setTimeout(() => {
      this.isValidDetele = false;
    });
  }
}
