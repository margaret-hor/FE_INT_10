//========================
//*      task 1
//========================

const car = {
  manufacturer: "Toyota",
  model: "Camry",
  year: 2023,
  averageSpeed: 65,

  displayInfo: function () {
    console.log(`Car information:
    Manufacturer: ${this.manufacturer}
    Model: ${this.model}
    Year: ${this.year}
    Average Speed: ${this.averageSpeed} km/h`);
  },

  calculateTravelTime: function (distance) {
    if (this.averageSpeed <= 0) {
      return "Average speed must be greater than 0";
    } else {
      const drivingTime = distance / this.averageSpeed;
      let numOfBreaks = Math.floor(drivingTime / 4);

      if (drivingTime % 4 === 0 && drivingTime > 0) {
        numOfBreaks--;
      }

      return drivingTime + numOfBreaks;
    }
  }
};

//========================
//*      task 2
//========================

const time = {
  hours: 3,
  minutes: 25,
  seconds: 50,

  displayTime: function() {
    console.log(`Time: ${this.hours}:${this.minutes}:${this.seconds}`);
  },

  normalizeTime: function() {
    if (this.seconds >= 60) {
      this.minutes += Math.floor(this.seconds / 60);
      this.seconds = this.seconds % 60;
    } 

    if (this.minutes >= 60) {
      this.hours += Math.floor(this.minutes / 60);
      this.minutes = this.minutes % 60;
    }

    if (this.hours >= 24) {
      this.hours = this.hours % 24;
    }
  },

  addSeconds: function(sec) {
    this.seconds += sec;
    this.normalizeTime();
  },

  addMinutes: function(min) {
    this.minutes += min;
    this.normalizeTime();
  },

  addHours: function(hours) {
    this.hours += hours;
    this.normalizeTime();
  }
};