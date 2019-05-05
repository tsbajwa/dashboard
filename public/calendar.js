class Calender {
  constructor(date) {
    this.currentMonth = date.getMonth();
    this.currentYear = date.getFullYear();
    this.monthLabel = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec"
    ];
    this.dayLabel = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    this.prevMonth = this.prevMonth.bind(this);
    this.nextMonth = this.nextMonth.bind(this);
    this.toggleLeave = this.toggleLeave.bind(this);
  }

  init() {
    this.setTitle();
    this.renderCalendarButtons();
    this.renderDayLabels();
    this.renderCalendarBody();
    this.setEventListeners();
  }

  toggleLeave(e) {
    e.target.classList.toggle("leave");
    this.showNotification(e.target);
  }

  setTitle() {
    const title = document.getElementById("calendar-title");
    title.innerHTML =
      this.monthLabel[this.currentMonth] + " " + this.currentYear;
  }

  renderDayLabels() {
    const calendarHead = document.getElementById("calendar-head");

    this.dayLabel.forEach(label => {
      let dayLabel = document.createElement("th");
      dayLabel.innerHTML = label;
      calendarHead.append(dayLabel);
    });
  }

  getDaysInMonth(year, month) {
    // 0 is last day of the previous month
    return new Date(year, month + 1, 0).getDate();
  }

  setEventListeners() {
    const tableBody = document.getElementById("calendar-body");
    tableBody.onclick = this.toggleLeave;
  }

  showNotification(element) {
    const toast = document.getElementById("toast");
    const leaveActive = element.classList.contains("leave") ? true : false;
    toast.className = "show";
    toast.innerHTML = leaveActive
      ? "Applied for leave"
      : "Removed scheduled leave";
    setTimeout(function() {
      toast.className = toast.className.replace("show", "");
    }, 3000);
  }

  createDayCell(text) {
    const dateCell = document.createElement("td");
    dateCell.innerHTML = text;
    return dateCell;
  }

  updateCalendar() {
    this.setTitle();
    this.renderCalendarBody();
    this.setEventListeners();
  }

  prevMonth() {
    if (this.currentMonth === 0) {
      this.currentMonth = 11;
      this.currentYear -= 1;
    } else {
      this.currentMonth -= 1;
    }
    this.updateCalendar();
  }

  nextMonth() {
    if (this.currentMonth === 11) {
      this.currentMonth = 0;
      this.currentYear += 1;
    } else {
      this.currentMonth += 1;
    }
    this.updateCalendar();
  }

  renderCalendarButtons() {
    const button = document.getElementById("calendar-buttons");

    const spanNode = document.createElement("span");
    const prevButton = button.appendChild(spanNode);
    prevButton.innerHTML = "Previous";
    prevButton.onclick = this.prevMonth;

    const spanNode2 = document.createElement("span");
    const nextButton = button.appendChild(spanNode2);
    nextButton.innerHTML = "Next";
    nextButton.onclick = this.nextMonth;
  }

  renderCalendarBody() {
    const calendarBody = document.getElementById("calendar-body");
    const daysInPrevMonth = this.getDaysInMonth(
      this.currentYear,
      this.currentMonth === 0 ? 11 : this.currentMonth - 1
    );
    const daysInMonth = this.getDaysInMonth(
      this.currentYear,
      this.currentMonth
    );
    const currentDay = new Date(
      this.currentYear,
      this.currentMonth,
      1
    ).getDay();

    let currentMonthDaysRendered = 0;
    let nextMonthDay = 1;
    let prevMonthDay = daysInPrevMonth - currentDay + 1;

    // Reset Calender Body
    calendarBody.innerHTML = "";

    for (let currentRow = 0; currentRow < 6; currentRow++) {
      const row = document.createElement("tr");

      for (let j = 0; j < 7; j++) {
        if (j < currentDay && currentRow === 0) {
          const dateCell = this.createDayCell(prevMonthDay);
          row.appendChild(dateCell);
          prevMonthDay++;
        } else if (daysInMonth > currentMonthDaysRendered) {
          const dateCell = this.createDayCell(currentMonthDaysRendered + 1);
          dateCell.className = "current";
          row.appendChild(dateCell);
          currentMonthDaysRendered++;
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

const leaveCalender = new Calender(new Date());
leaveCalender.init();
