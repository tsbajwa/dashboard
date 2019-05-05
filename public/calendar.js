// Days go from 0-6, with Sunday being 0;

class Calender {
  constructor(date, calendar) {
    this.currentDay = date.getDay();
    this.currentMonth = date.getMonth();
    this.currentYear = date.getFullYear();
    this.calendar = calendar;
    this.monthLabel = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    this.dayLabel = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    // Issue if month is
    this.daysInPrevMonth = this.getDaysInMonth(this.currentYear, this.currentMonth === 0 ? 11 : this.currentMonth - 1);
    this.daysInMonth = this.getDaysInMonth(this.currentYear, this.currentMonth);
  }

  init() {
    this.setTitle();
    this.renderDayLabels();
    this.renderCalendar();
    this.setEventListeners();
  }

  clearCalendar() {
    this.calendar.innerHTML = '';
  }

  toggleLeave() {

  }


  setTitle() {
    const title = document.getElementById("monthYearCurrent");
    title.innerHTML = this.monthLabel[this.currentMonth] + " " + this.currentYear;
  }

  renderDayLabels() {
    const calendarHead = document.getElementById("calendar-head");

    this.dayLabel.forEach(label => {
      let dayLabel = document.createElement("th");
      dayLabel.innerHTML = label;
      calendarHead.append(dayLabel);
    })
  }

  getDaysInMonth(year, month) {
    // 0 is last day of the previous month
    return new Date(year, month, 0).getDate();
  }


  setEventListeners() {
    const tableBody = document.getElementById("calendar-body");

    tableBody.onclick = function toggleLeave(e) {
      e.target.classList.toggle('leave');
      console.log('item was clicked')
      console.log(e.target);
    }
  }

  showNotification() {
    // create object
    // destroy object

  }

  createDayCell(text) {
    const dateCell = document.createElement("td");
    dateCell.innerHTML = text;
    return dateCell;
  }

  renderCalendar(month, year) {
    const calendarBody = document.getElementById("calendar-body");
    let currentMonthDaysRendered = 0;
    let nextMonthDay = 1;
    let prevMonthDay = this.daysInPrevMonth - this.currentDay;

    for (let currentRow = 0; currentRow < 5; currentRow++) {
      const row = document.createElement("tr");
      //Previous months days being rendered. Will only exist on first line
        for (let j = 0; j < 7; j++) {
          if (j < this.currentDay && currentRow === 0) {
            const dateCell = this.createDayCell(prevMonthDay);
            row.appendChild(dateCell);
            prevMonthDay++;
            // Current month dates being rendered;
          } else if (this.daysInMonth > currentMonthDaysRendered) {
            const dateCell = this.createDayCell(currentMonthDaysRendered + 1);
            row.appendChild(dateCell);
            currentMonthDaysRendered++;
            //Next months dates being rendered
          } else {
           const dateCell = this.createDayCell(nextMonthDay);
            row.appendChild(dateCell);
            nextMonthDay++;
          }
        }

        calendarBody.appendChild(row);
    }
  }
}

const leaveCalender = new Calender(new Date(), document.getElementById("calendar"))
leaveCalender.init();

// TODO: Make calendar more reusable iwth the get elements by id business
