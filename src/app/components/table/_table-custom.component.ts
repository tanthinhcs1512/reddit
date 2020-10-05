import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cpn-table',
  templateUrl: './_table-custom.component.html',
})
export class TableCustomComponent implements OnInit {
  //////////////DATA
  data_table: any;
  settings: any;
  temp: any;
  isValidDelete: boolean = false;

  _setting = {
    selectMode: 'multi',
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
  };

  constructor() {}

  ///////////////INPUT
  @Input('settings')
  set setting(settings: any) {
    this.settings = settings;
    this._setting['columns'] = this.settings['columns'];
    this._setting['attr'] = this.settings['attr'];
  }

  @Input('data_table')
  set data(data_table: any) {
    this.data_table = data_table;
  }

  @Input('isValidDelete')
  set validDelete(isValidDelete: any) {
    this.isValidDelete = isValidDelete;
    if (this.isValidDelete) {
      this.temp.confirm.resolve();
      this.resetReturnedValue.emit(event);
    }
  }

  ///////////////OUTPUT
  @Output() onDelete: EventEmitter<any> = new EventEmitter<any>();

  @Output() resetReturnedValue: EventEmitter<any> = new EventEmitter<any>();

  ngOnInit() {}

  /////////////METHOD
  onDeleteConfirm(event) {
    this.onDoDelete(event);
    this.temp = event;
  }

  onDoDelete(data: any) {
    this.onDelete.emit(data);
  }
}
