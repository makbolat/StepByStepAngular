import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'grid-ui',
  templateUrl: './CustomerApp.Grid.html',
})
export class GridComponent {
  // all the logic the code behind for grid

  // for the column names
  gridColumns: Array<any> = new Array<Object>();

  // grid data
  gridData: Array<any> = new Array<Object>();

  @Input('grid-columns')
  set setGridColumns(_gridColumns: Array<Object>) {
    this.gridColumns = _gridColumns;
  }

  @Input('grid-data')
  set setGridCData(_gridData: Array<Object>) {
    this.gridData = _gridData;
  }

  @Output('grid-selected')
  eventEmitter: EventEmitter<Object> = new EventEmitter<Object>();

  SelectGrid(_selected: Object) {
    // emit out a event will send a signal to the UI under which this component running
    this.eventEmitter.emit(_selected);
  }
}
