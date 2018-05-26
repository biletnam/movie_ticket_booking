import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  seatRows: Array<any>;
  layout: Array<any> = [];
  seatReservations: Array<any> = [];
  enableCheckBox: Boolean = false;
  reservation = { seats: [], name: null, numberOfSeats: null };
  constructor() {
    this.seatRows = ['row', 'A', 'B', 'C', 'D', 'E', '', 'F', 'G', 'H', 'I', 'J'];

    this.seatRows.forEach(value => {
      const seatNumbers = [
        { seatNo: 1, selected: false, reserved: false },
        { seatNo: 2, selected: false, reserved: false },
        { seatNo: 3, selected: false, reserved: false },
        { seatNo: 4, selected: false, reserved: false },
        { seatNo: null, selected: false, reserved: false },
        { seatNo: 5, selected: false, reserved: false },
        { seatNo: 6, selected: false, reserved: false },
        { seatNo: 7, selected: false, reserved: false },
        { seatNo: 8, selected: false, reserved: false },
        { seatNo: 9, selected: false, reserved: false },
        { seatNo: 10, selected: false, reserved: false },
        { seatNo: 11, selected: false, reserved: false },
        { seatNo: 12, selected: false, reserved: false }
      ];
      this.layout.push({key: value, value: seatNumbers});
    });
  }

  public selectSeats(row, column) {
    if (column.selected) {
      this.reservation.seats.push({seatRow: row, seatColumn: column.seatNo});
      console.log(this.reservation);
    } else {
      const tempObj = {seatRow: row, seatColumn: column.seatNo};
      this.reservation.seats = this.reservation.seats.filter(value => (
        (value.seatRow !== tempObj.seatRow) && (value.seatColumn !== tempObj.seatColumn)));
      console.log(this.reservation);
    }
  }
  public reserveSeats() {
    this.reservation.seats.forEach(seat => {
      let test = this.layout.filter(value => value.key === seat.seatRow)[0].value.filter(column => column.selected).map(item => {
        item.reserved = true;
      });
      console.log(this.layout);
    });
    this.seatReservations.push(this.reservation);
    this.resetReservation();
  }

  public resetReservation() {
    this.reservation = { seats: [], name: null, numberOfSeats: null };
  }

}
