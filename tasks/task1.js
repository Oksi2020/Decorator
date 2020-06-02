const BeachParty = () => {
    let max = 3;

  function Human( name ){
    this.name = name;
    this.currentTemperature = 0;
    this.maxTemperature = 50;

    this.minTemperature = 0;
    console.log( this, `new Human ${this.name} arrived!`);
  }

  Human.prototype.ChangeTemperature = function( changeValue ){
    console.log(
      'current', this.currentTemperature + changeValue,
      'min', this.minTemperature,
      'max', this.maxTemperature
    );

    this.currentTemperature += changeValue;
    if( this.currentTemperature < this.minTemperature ){
      console.error(`Temperature is to low: ${this.currentTemperature}. ${this.name} died :(`);
    } else if(this.currentTemperature > this.maxTemperature) {
        console.error(`${this.name} fried in the sun :(`);
    } else if(this.currentTemperature > 30) {
        let coolerIndex = Math.floor(Math.random() * max);
        console.log(`The temperature is too high (${this.currentTemperature}). ${this.name} will take ${this.coolers[coolerIndex].name} to cool`)
        this.coolSomeone(this.coolers[coolerIndex]);
        console.log(`${this.name} current temperature is ${this.currentTemperature}`);
    }
  };

  function CoolerHuman( Human ) {
      this.name = Human.name;
      this.currentTemperature = 0;
      this.minTemperature = 0;
      this.coolers = [          
      { name: 'ice cream', temperatureCoolRate: -5 },
      { name: 'juce', temperatureCoolRate: -10 },
      { name: 'water', temperatureCoolRate: -20},];
      this.currentTemperature = Human.currentTemperature;
      this.maxTemperature = Human.maxTemperature - this.coolers.reduce(
          (currentResistance, cooler) => {
              return currentResistance + cooler.temperatureCoolRate;
          }, 0
      );
    console.log(`new Human ${this.name} arrived! He can survive in temperature ${this.maxTemperature}`, this);

    this.coolSomeone = function( cooler ){
        return this.currentTemperature += cooler.temperatureCoolRate;
    }
    this.addCooler = function( nameCool, temperatureRate ){
      console.log(temperatureRate);
        if(nameCool!==undefined && temperatureRate!== undefined) {
            this.coolers.push({name: `${nameCool}`, temperatureCoolRate: temperatureRate});
            max++;
        } else {
          console.error('You must write two arguments!')
        }
    }
  }
  CoolerHuman.prototype = Object.create( Human.prototype );

  let Morgan = new CoolerHuman( new Human('Morgan'));
      // Morgan.ChangeTemperature(-5);
      Morgan.ChangeTemperature(36);
      Morgan.ChangeTemperature(16);   
      Morgan.addCooler('milk', -5);
};

export default BeachParty;