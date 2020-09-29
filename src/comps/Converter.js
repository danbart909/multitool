import React, { Component } from 'react'

export default class Converter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      km: 0,
      mile: 0,
      meter: 0,
      yard: 0,
      foot: 0,
      inch: 0,
      cm: 0,
      nautical: 0,
      length: 0,
      gram: 0,
      ounce: 0,
      pound: 0,
      kg: 0,
      weight: 0,
      mph: 0,
      kph: 0,
      knot: 0,
      mach: 0,
      speed: 0,
      fahrenheit: 0,
      celsius: 0,
      kelvin: 0
    }
  }

/////////////////////////////////////////////////////

  kmChange(e) {
    let km = Number(e.target.value)
    this.setState({
      km: (km),
      mile: (km*0.62137),
      meter: (km*1000),
      yard: (km*1093.6),
      foot: (km*3280.8),
      inch: (km*39370),
      cm: (km*100000),
      nautical: (km*0.53995680),
      length: (km)
    })
  }

  kmUp() {
    let oldKm = this.state.km
    let km = ++oldKm
    this.setState({
      km: (km),
      mile: (km*0.62137),
      meter: (km*1000),
      yard: (km*1093.6),
      foot: (km*3280.8),
      inch: (km*39370),
      cm: (km*100000),
      nautical: (km*0.53995680),
      length: (km)
    })
  }

  kmDown() {
    let oldKm = this.state.km
    let km = --oldKm
    this.setState({
      km: (km),
      mile: (km*0.62137),
      meter: (km*1000),
      yard: (km*1093.6),
      foot: (km*3280.8),
      inch: (km*39370),
      cm: (km*100000),
      nautical: (km*0.53995680),
      length: (km)
    })
  }

/////////////////////////////////////////////////////

  mileChange(e) {
    let mile = Number(e.target.value)
    this.setState({
      km: (mile/0.62137),
      mile: (mile),
      meter: (mile/0.00062137),
      yard: (mile*1760),
      foot: (mile*5280),
      inch: (mile*63360),
      cm: (mile/0.0000062137),
      nautical: (mile*0.86897624),
      length: (mile)
    })
  }

  mileUp() {
    let oldMile = this.state.mile
    let mile = ++oldMile
    this.setState({
      km: (mile/0.62137),
      mile: (mile),
      meter: (mile/0.00062137),
      yard: (mile*1760),
      foot: (mile*5280),
      inch: (mile*63360),
      cm: (mile/0.0000062137),
      nautical: (mile*0.86897624),
      length: (mile)
    })
  }

  mileDown() {
    let oldMile = this.state.mile
    let mile = --oldMile
    this.setState({
      km: (mile/0.62137),
      mile: (mile),
      meter: (mile/0.00062137),
      yard: (mile*1760),
      foot: (mile*5280),
      inch: (mile*63360),
      cm: (mile/0.0000062137),
      nautical: (mile*0.86897624),
      length: (mile)
    })
  }

/////////////////////////////////////////////////////

  nauticalChange(e) {
    let nautical = Number(e.target.value)
    this.setState({
      km: (nautical*1.852),
      mile: (nautical*1.1507794),
      meter: (nautical*1852),
      yard: (nautical*2025.3718),
      foot: (nautical*6076.1155),
      inch: (nautical*72913.386),
      cm: (nautical*185200),
      nautical: (nautical),
      length: (nautical)
    })
  }

  nauticalUp() {
    let oldNautical = this.state.nautical
    let nautical = ++oldNautical
    this.setState({
      km: (nautical*1.852),
      mile: (nautical*1.1507794),
      meter: (nautical*1852),
      yard: (nautical*2025.3718),
      foot: (nautical*6076.1155),
      inch: (nautical*72913.386),
      cm: (nautical*185200),
      nautical: (nautical),
      length: (nautical)
    })
  }

  nauticalDown() {
    let oldNautical = this.state.nautical
    let nautical = --oldNautical
    this.setState({
      km: (nautical*1.852),
      mile: (nautical*1.1507794),
      meter: (nautical*1852),
      yard: (nautical*2025.3718),
      foot: (nautical*6076.1155),
      inch: (nautical*72913.386),
      cm: (nautical*185200),
      nautical: (nautical),
      length: (nautical)
    })
  }

/////////////////////////////////////////////////////

  meterChange(e) {
    let meter = Number(e.target.value)
    this.setState({
      km: (meter/1000),
      mile: (meter*0.00062137),
      meter: (meter),
      yard: (meter*1.0936),
      foot: (meter*3.2808),
      inch: (meter*39.370),
      cm: (meter/0.01),
      nautical: (meter*0.00053995680),
      length: (meter)
    })
  }

  meterUp() {
    let oldMeter = this.state.meter
    let meter = ++oldMeter
    this.setState({
      km: (meter/1000),
      mile: (meter*0.00062137),
      meter: (meter),
      yard: (meter*1.0936),
      foot: (meter*3.2808),
      inch: (meter*39.370),
      cm: (meter/0.01),
      nautical: (meter*0.00053995680),
      length: (meter)
    })
  }

  meterDown() {
    let oldMeter = this.state.meter
    let meter = --oldMeter
    this.setState({
      km: (meter/1000),
      mile: (meter*0.00062137),
      meter: (meter),
      yard: (meter*1.0936),
      foot: (meter*3.2808),
      inch: (meter*39.370),
      cm: (meter/0.01),
      nautical: (meter*0.00053995680),
      length: (meter)
    })
  }
  
/////////////////////////////////////////////////////

  yardChange(e) {
    let yard = Number(e.target.value)
    this.setState({
      km: (yard/1093.6),
      mile: (yard*0.00056818),
      meter: (yard/1.0936),
      yard: (yard),
      foot: (yard*3),
      inch: (yard*360),
      cm: (yard/0.010936),
      nautical: (yard*0.000493737),
      length: (yard)
    })
  }

  yardUp() {
    let oldYard = this.state.yard
    let yard = ++oldYard
    this.setState({
      km: (yard/1093.6),
      mile: (yard*0.00056818),
      meter: (yard/1.0936),
      yard: (yard),
      foot: (yard*3),
      inch: (yard*360),
      cm: (yard/0.010936),
      nautical: (yard*0.000493737),
      length: (yard)
    })
  }

  yardDown() {
    let oldYard = this.state.yard
    let yard = --oldYard
    this.setState({
      km: (yard/1093.6),
      mile: (yard*0.00056818),
      meter: (yard/1.0936),
      yard: (yard),
      foot: (yard*3),
      inch: (yard*360),
      cm: (yard/0.010936),
      nautical: (yard*0.000493737),
      length: (yard)
    })
  }

/////////////////////////////////////////////////////

  footChange(e) {
    let foot = Number(e.target.value)
    this.setState({
      km: (foot/3280.8),
      mile: (foot*0.00018939),
      meter: (foot/3.2808),
      yard: (foot*0.33333),
      foot: (foot),
      inch: (foot*12),
      cm: (foot/0.032808),
      nautical: (foot*0.000164579),
      length: (foot)
    })
  }

  footUp() {
    let oldFoot = this.state.foot
    let foot = ++oldFoot
    this.setState({
      km: (foot/3280.8),
      mile: (foot*0.00018939),
      meter: (foot/3.2808),
      yard: (foot*0.33333),
      foot: (foot),
      inch: (foot*12),
      cm: (foot/0.032808),
      nautical: (foot*0.000164579),
      length: (foot)
    })
  }

  footDown() {
    let oldFoot = this.state.foot
    let foot = --oldFoot
    this.setState({
      km: (foot/3280.8),
      mile: (foot*0.00018939),
      meter: (foot/3.2808),
      yard: (foot*0.33333),
      foot: (foot),
      inch: (foot*12),
      cm: (foot/0.032808),
      nautical: (foot*0.000164579),
      length: (foot)
    })
  }

/////////////////////////////////////////////////////

  inchChange(e) {
    let inch = Number(e.target.value)
    this.setState({
      km: (inch/39370),
      mile: (inch*0.000015783),
      meter: (inch/39.370),
      yard: (inch*0.027778),
      foot: (inch*0.083333),
      inch: (inch),
      cm: (inch/0.39370),
      nautical: (inch*0.000013715),
      length: (inch)
    })
  }

  inchUp() {
    let oldInch = this.state.inch
    let inch = ++oldInch
    this.setState({
      km: (inch/39370),
      mile: (inch*0.000015783),
      meter: (inch/39.370),
      yard: (inch*0.027778),
      foot: (inch*0.083333),
      inch: (inch),
      cm: (inch/0.39370),
      nautical: (inch*0.000013715),
      length: (inch)
    })
  }

  inchDown() {
    let oldInch = this.state.inch
    let inch = --oldInch
    this.setState({
      km: (inch/39370),
      mile: (inch*0.000015783),
      meter: (inch/39.370),
      yard: (inch*0.027778),
      foot: (inch*0.083333),
      inch: (inch),
      cm: (inch/0.39370),
      nautical: (inch*0.000013715),
      length: (inch)
    })
  }

/////////////////////////////////////////////////////

  cmChange(e) {
    let cm = Number(e.target.value)
    this.setState({
      km: (cm/100000),
      mile: (cm*0.0000062137),
      meter: (cm/100),
      yard: (cm*0.010936),
      foot: (cm*0.032808),
      inch: (cm*0.39370),
      cm: (cm),
      nautical: (cm*0.000053996),
      length: (cm)
    })
  }

  cmUp() {
    let oldCm = this.state.cm
    let cm = ++oldCm
    this.setState({
      km: (cm/100000),
      mile: (cm*0.0000062137),
      meter: (cm/100),
      yard: (cm*0.010936),
      foot: (cm*0.032808),
      inch: (cm*0.39370),
      cm: (cm),
      nautical: (cm*0.000053996),
      length: (cm)
    })
  }

  cmDown() {
    let oldCm = this.state.cm
    let cm = --oldCm
    this.setState({
      km: (cm/100000),
      mile: (cm*0.0000062137),
      meter: (cm/100),
      yard: (cm*0.010936),
      foot: (cm*0.032808),
      inch: (cm*0.39370),
      cm: (cm),
      nautical: (cm*0.000053996),
      length: (cm)
    })
  }

/////////////////////////////////////////////////////

  gramChange(e) {
    let gram = Number(e.target.value)
    this.setState({
      gram: (gram),
      ounce: (gram*0.035274),
      pound: (gram*0.0022046),
      kg: (gram/1000),
      weight: (gram)
    })
  }

  gramUp() {
    let oldGram = this.state.gram
    let gram = ++oldGram
    this.setState({
      gram: (gram),
      ounce: (gram*0.035274),
      pound: (gram*0.0022046),
      kg: (gram/1000),
      weight: (gram)
    })
  }

  gramDown() {
    let oldGram = this.state.gram
    let gram = --oldGram
    this.setState({
      gram: (gram),
      ounce: (gram*0.035274),
      pound: (gram*0.0022046),
      kg: (gram/1000),
      weight: (gram)
    })
  }

/////////////////////////////////////////////////////

  ounceChange(e) {
    let ounce = Number(e.target.value)
    this.setState({
      gram: (ounce/0.035274),
      ounce: (ounce),
      pound: (ounce*0.0625),
      kg: (ounce/35.274),
      weight: (ounce)
    })
  }

  ounceUp() {
    let oldOunce = this.state.ounce
    let ounce = ++oldOunce
    this.setState({
      gram: (ounce/0.035274),
      ounce: (ounce),
      pound: (ounce*0.0625),
      kg: (ounce/35.274),
      weight: (ounce)
    })
  }

  ounceDown() {
    let oldOunce = this.state.ounce
    let ounce = --oldOunce
    this.setState({
      gram: (ounce/0.035274),
      ounce: (ounce),
      pound: (ounce*0.0625),
      kg: (ounce/35.274),
      weight: (ounce)
    })
  }

/////////////////////////////////////////////////////

  poundChange(e) {
    let pound = Number(e.target.value)
    this.setState({
      gram: (pound/0.0022046),
      ounce: (pound*16),
      pound: (pound),
      kg: (pound/2.2046),
      weight: (pound)
    })
  }

  poundUp() {
    let oldPound = this.state.pound
    let pound = ++oldPound
    this.setState({
      gram: (pound/0.0022046),
      ounce: (pound*16),
      pound: (pound),
      kg: (pound/2.2046),
      weight: (pound)
    })
  }

  poundDown() {
    let oldPound = this.state.pound
    let pound = --oldPound
    this.setState({
      gram: (pound/0.0022046),
      ounce: (pound*16),
      pound: (pound),
      kg: (pound/2.2046),
      weight: (pound)
    })
  }

/////////////////////////////////////////////////////

  kgChange(e) {
    let kg = Number(e.target.value)
    this.setState({
      gram: (kg*1000),
      ounce: (kg*35.274),
      pound: (kg*2.2046),
      kg: (kg),
      weight: (kg)
    })
  }

  kgUp() {
    let oldKg = this.state.kg
    let kg = ++oldKg
    this.setState({
      gram: (kg*1000),
      ounce: (kg*35.274),
      pound: (kg*2.2046),
      kg: (kg),
      weight: (kg)
    })
  }

  kgDown() {
    let oldKg = this.state.kg
    let kg = --oldKg
    this.setState({
      gram: (kg*1000),
      ounce: (kg*35.274),
      pound: (kg*2.2046),
      kg: (kg),
      weight: (kg)
    })
  }

/////////////////////////////////////////////////////

  mphChange(e) {
    let mph = Number(e.target.value)
    this.setState({
      mph: mph,
      kph: (mph*1.609344),
      knot: (mph/1.150779),
      mach: (mph/761.207),
      speed: mph
    })
  }

  mphUp() {
    let oldMph = this.state.mph
    let mph = ++oldMph
    this.setState({
      mph: mph,
      kph: (mph*1.609344),
      knot: (mph/1.150779),
      mach: (mph/761.207),
      speed: mph
    })
  }

  mphDown() {
    let oldMph = this.state.mph
    let mph = --oldMph
    this.setState({
      mph: mph,
      kph: (mph*1.609344),
      knot: (mph/1.150779),
      mach: (mph/761.207),
      speed: mph
    })
  }

/////////////////////////////////////////////////////

  kphChange(e) {
    let kph = Number(e.target.value)
    this.setState({
      mph: (kph/1.609344),
      kph: kph,
      knot: (kph/1.852),
      mach: (kph/1225.044),
      speed: kph
    })
  }

  kphUp() {
    let oldKph = this.state.kph
    let kph = ++oldKph
    this.setState({
      mph: (kph/1.609344),
      kph: kph,
      knot: (kph/1.852),
      mach: (kph/1225.044),
      speed: kph
    })
  }

  kphDown() {
    let oldKph = this.state.kph
    let kph = --oldKph
    this.setState({
      mph: (kph/1.609344),
      kph: kph,
      knot: (kph/1.852),
      mach: (kph/1225.044),
      speed: kph
    })
  }
  
/////////////////////////////////////////////////////

  knotChange(e) {
    let knot = Number(e.target.value)
    this.setState({
      mph: (knot*1.150779),
      kph: (knot*1.852),
      knot: knot,
      mach: (knot/661.4708),
      speed: knot
    })
  }

  knotUp() {
    let oldKnot = this.state.knot
    let knot = ++oldKnot
    this.setState({
      mph: (knot*1.150779),
      kph: (knot*1.852),
      knot: knot,
      mach: (knot/661.4708),
      speed: knot
    })
  }

  knotDown() {
    let oldKnot = this.state.knot
    let knot = --oldKnot
    this.setState({
      mph: (knot*1.150779),
      kph: (knot*1.852),
      knot: knot,
      mach: (knot/661.4708),
      speed: knot
    })
  }

/////////////////////////////////////////////////////

  machChange(e) {
    let mach = Number(e.target.value)
    this.setState({
      mph: (mach*761.207),
      kph: (mach*1225.044),
      knot: (mach*661.4708),
      mach: mach,
      speed: mach
    })
  }

  machUp() {
    let oldMach = this.state.mach
    let mach = ++oldMach
    this.setState({
      mph: (mach*761.207),
      kph: (mach*1225.044),
      knot: (mach*661.4708),
      mach: mach,
      speed: mach
    })
  }

  machDown() {
    let oldMach = this.state.mach
    let mach = --oldMach
    this.setState({
      mph: (mach*761.207),
      kph: (mach*1225.044),
      knot: (mach*661.4708),
      mach: mach,
      speed: mach
    })
  }

/////////////////////////////////////////////////////

  fahrenheitChange(e) {
    let fahrenheit = Number(e.target.value)
    this.setState({
      fahrenheit: fahrenheit,
      celsius: (fahrenheit-32)/1.8,
      kelvin: ((fahrenheit-32)/1.8)+273.15
    })
  }
  
  fahrenheitUp() {
    let oldFahrenheit = this.state.fahrenheit
    let fahrenheit = ++oldFahrenheit
    this.setState({
      fahrenheit: fahrenheit,
      celsius: (fahrenheit-32)/1.8,
      kelvin: ((fahrenheit-32)/1.8)+273.15
    })
  }

  fahrenheitDown() {
    let oldFahrenheit = this.state.fahrenheit
    let fahrenheit = --oldFahrenheit
    this.setState({
      fahrenheit: fahrenheit,
      celsius: (fahrenheit-32)/1.8,
      kelvin: ((fahrenheit-32)/1.8)+273.15
    })
  }

/////////////////////////////////////////////////////

  celsiusChange(e) {
    let celsius = Number(e.target.value)
    this.setState({
      fahrenheit: (celsius*1.8)+32,
      celsius: celsius,
      kelvin: celsius+273.15
    })
  }

  celsiusUp() {
    let oldCelsius = this.state.celsius
    let celsius = ++oldCelsius
    this.setState({
      fahrenheit: (celsius*1.8)+32,
      celsius: celsius,
      kelvin: celsius+273.15
    })
  }

  celsiusDown() {
    let oldCelsius = this.state.celsius
    let celsius = --oldCelsius
    this.setState({
      fahrenheit: (celsius*1.8)+32,
      celsius: celsius,
      kelvin: celsius+273.15
    })
  }

/////////////////////////////////////////////////////

  kelvinChange = (e) => {
    let kelvin = Number(e.target.value)
    this.setState({
      fahrenheit: (((kelvin-273.15)*1.8)+32),
      celsius: (kelvin-273.15),
      kelvin: kelvin
    })
  }

  kelvinUp = () => {
    let oldKelvin = this.state.kelvin
    let kelvin = ++oldKelvin
    this.setState({
      fahrenheit: (((kelvin-273.15)*1.8)+32),
      celsius: (kelvin-273.15),
      kelvin: kelvin
    })
  }

  kelvinDown = () => {
    let oldKelvin = this.state.kelvin
    let kelvin = --oldKelvin
    this.setState({
      fahrenheit: (((kelvin-273.15)*1.8)+32),
      celsius: (kelvin-273.15),
      kelvin: kelvin
    })
  }

/////////////////////////////////////////////////////

  render() {
    return (
      <div id='converter-container'>

        <div id='length-container'>

          <form id='length-form'>

            <div id='cm'>
              <div id='cm-label'>
                <span>cm</span>
              </div>
              <div id='cm-input'>
                <input
                  type='number'
                  name='speed'
                  id='input-cm'
                  onChange={(e) => {this.cmChange(e)}}
                  value={this.state.cm}
                />
              </div>
              <div id='cm-arrows'>
                <i className="fas fa-arrow-circle-up" onClick={() => {this.cmUp()}}></i>
                <i className="fas fa-arrow-circle-down" onClick={() => {this.cmDown()}}></i>
              </div>
            </div>

            <div id='inch'>
              <div id='inch-label'>
                <span>inch</span>
              </div>
              <div id='inch-input'>
                <input
                  type='number'
                  name='speed'
                  id='input-inch'
                  onChange={(e) => {this.inchChange(e)}}
                  value={this.state.inch}
                />
              </div>
              <div id='inch-arrows'>
                <i className="fas fa-arrow-circle-up" onClick={() => {this.inchUp()}}></i>
                <i className="fas fa-arrow-circle-down" onClick={() => {this.inchDown()}}></i>
              </div>
            </div>

            <div id='foot'>
              <div id='foot-label'>
                <span>foot</span>
              </div>
              <div id='foot-input'>
                <input
                  type='number'
                  name='speed'
                  id='input-foot'
                  onChange={(e) => {this.footChange(e)}}
                  value={this.state.foot}
                />
              </div>
              <div id='foot-arrows'>
                <i className="fas fa-arrow-circle-up" onClick={() => {this.footUp()}}></i>
                <i className="fas fa-arrow-circle-down" onClick={() => {this.footDown()}}></i>
              </div>
            </div>

            <div id='yard'>
              <div id='yard-label'>
                <span>yard</span>
              </div>
              <div id='yard-input'>
                <input
                  type='number'
                  name='speed'
                  id='input-yard'
                  onChange={(e) => {this.yardChange(e)}}
                  value={this.state.yard}
                />
              </div>
              <div id='yard-arrows'>
                <i className="fas fa-arrow-circle-up" onClick={() => {this.yardUp()}}></i>
                <i className="fas fa-arrow-circle-down" onClick={() => {this.yardDown()}}></i>
              </div>
            </div>

            <div id='meter'>
              <div id='meter-label'>
                <span>meter</span>
              </div>
              <div id='meter-input'>
                <input
                  type='number'
                  name='speed'
                  id='input-meter'
                  onChange={(e) => {this.meterChange(e)}}
                  value={this.state.meter}
                />
              </div>
              <div id='meter-arrows'>
                <i className="fas fa-arrow-circle-up" onClick={() => {this.meterUp()}}></i>
                <i className="fas fa-arrow-circle-down" onClick={() => {this.meterDown()}}></i>
              </div>
            </div>

            <div id='km'>
              <div id='km-label'>
                <span>km</span>
              </div>
              <div id='km-input'>
                <input
                  type='number'
                  name='speed'
                  id='input-km'
                  onChange={(e) => {this.kmChange(e)}}
                  value={this.state.km}
                />
              </div>
              <div id='km-arrows'>
                <i className="fas fa-arrow-circle-up" onClick={() => {this.kmUp()}}></i>
                <i className="fas fa-arrow-circle-down" onClick={() => {this.kmDown()}}></i>
              </div>
            </div>

            <div id='mile'>
              <div id='mile-label'>
                <span>mile</span>
              </div>
              <div id='mile-input'>
                <input
                  type='number'
                  name='speed'
                  id='input-mile'
                  onChange={(e) => {this.mileChange(e)}}
                  value={this.state.mile}
                />
              </div>
              <div id='mile-arrows'>
                <i className="fas fa-arrow-circle-up" onClick={() => {this.mileUp()}}></i>
                <i className="fas fa-arrow-circle-down" onClick={() => {this.mileDown()}}></i>
              </div>
            </div>

            <div id='nautical'>
              <div id='nautical-label'>
                <span>nautical mile</span>
              </div>
              <div id='nautical-input'>
                <input
                  type='number'
                  name='speed'
                  id='input-nautical'
                  onChange={(e) => {this.nauticalChange(e)}}
                  value={this.state.nautical}
                />
              </div>
              <div id='nautical-arrows'>
                <i className="fas fa-arrow-circle-up" onClick={() => {this.nauticalUp()}}></i>
                <i className="fas fa-arrow-circle-down" onClick={() => {this.nauticalDown()}}></i>
              </div>
            </div>

          </form>

        </div>

        <div id='weight-container'>

          <form id='weight-form'>

            <div id='gram'>
              <div id='gram-label'>
                <span>gram</span>
              </div>
              <div id='gram-input'>
                <input
                  type='number'
                  name='speed'
                  id='input-gram'
                  onChange={(e) => {this.gramChange(e)}}
                  value={this.state.gram}
                />
              </div>
              <div id='gram-arrows'>
                <i className="fas fa-arrow-circle-up" onClick={() => {this.gramUp()}}></i>
                <i className="fas fa-arrow-circle-down" onClick={() => {this.gramDown()}}></i>
              </div>
            </div>

            <div id='ounce'>
              <div id='ounce-label'>
                <span>ounce</span>
              </div>
              <div id='ounce-input'>
                <input
                  type='number'
                  name='speed'
                  id='input-ounce'
                  onChange={(e) => {this.ounceChange(e)}}
                  value={this.state.ounce}
                />
              </div>
              <div id='ounce-arrows'>
                <i className="fas fa-arrow-circle-up" onClick={() => {this.ounceUp()}}></i>
                <i className="fas fa-arrow-circle-down" onClick={() => {this.ounceDown()}}></i>
              </div>
            </div>

            <div id='pound'>
              <div id='pound-label'>
                <span>pound</span>
              </div>
              <div id='pound-input'>
                <input
                  type='number'
                  name='speed'
                  id='input-pound'
                  onChange={(e) => {this.poundChange(e)}}
                  value={this.state.pound}
                />
              </div>
              <div id='pound-arrows'>
                <i className="fas fa-arrow-circle-up" onClick={() => {this.poundUp()}}></i>
                <i className="fas fa-arrow-circle-down" onClick={() => {this.poundDown()}}></i>
              </div>
            </div>

            <div id='kg'>
              <div id='kg-label'>
                <span>kg</span>
              </div>
              <div id='kg-input'>
                <input
                  type='number'
                  name='speed'
                  id='input-kg'
                  onChange={(e) => {this.kgChange(e)}}
                  value={this.state.kg}
                />
              </div>
              <div id='kg-arrows'>
                <i className="fas fa-arrow-circle-up" onClick={() => {this.kgUp()}}></i>
                <i className="fas fa-arrow-circle-down" onClick={() => {this.kgDown()}}></i>
              </div>
            </div>

          </form>

        </div>

        <div id='speed-container'>

          <form id='speed-form'>

            <div id='mph'>
              <div id='mph-label'>
                <span>mph</span>
              </div>
              <div id='mph-input'>
                <input
                  type='number'
                  name='speed'
                  id='input-mph'
                  onChange={(e) => {this.mphChange(e)}}
                  value={this.state.mph}
                />
              </div>
              <div id='mph-arrows'>
                <i className="fas fa-arrow-circle-up" onClick={() => {this.mphUp()}}></i>
                <i className="fas fa-arrow-circle-down" onClick={() => {this.mphDown()}}></i>
              </div>
            </div>

            <div id='kph'>
              <div id='kph-label'>
                <span>kph</span>
              </div>
              <div id='kph-input'>
                <input
                  type='number'
                  name='speed'
                  id='input-kph'
                  onChange={(e) => {this.kphChange(e)}}
                  value={this.state.kph}
                />
              </div>
              <div id='kph-arrows'>
                <i className="fas fa-arrow-circle-up" onClick={() => {this.kphUp()}}></i>
                <i className="fas fa-arrow-circle-down" onClick={() => {this.kphDown()}}></i>
              </div>
            </div>

            <div id='knot'>
              <div id='knot-label'>
                <span>knot</span>
              </div>
              <div id='knot-input'>
                <input
                  type='number'
                  name='speed'
                  id='input-knot'
                  onChange={(e) => {this.knotChange(e)}}
                  value={this.state.knot}
                />
              </div>
              <div id='knot-arrows'>
                <i className="fas fa-arrow-circle-up" onClick={() => {this.knotUp()}}></i>
                <i className="fas fa-arrow-circle-down" onClick={() => {this.knotDown()}}></i>
              </div>
            </div>

            <div id='mach'>
              <div id='mach-label'>
                <span>mach</span>
              </div>
              <div id='mach-input'>
                <input
                  type='number'
                  name='speed'
                  id='input-mach'
                  onChange={(e) => {this.machChange(e)}}
                  value={this.state.mach}
                />
              </div>
              <div id='mach-arrows'>
                <i className="fas fa-arrow-circle-up" onClick={() => {this.machUp()}}></i>
                <i className="fas fa-arrow-circle-down" onClick={() => {this.machDown()}}></i>
              </div>
            </div>

          </form>

        </div>

        <div id='temp-container'>

          <form id='temp-form'>

            <div id='fahrenheit'>
              <div id='fahrenheit-label'>
                <span>fahrenheit</span>
              </div>
              <div id='fahrenheit-input'>
                <input
                  type='number'
                  name='temp'
                  id='input-fahrenheit'
                  onChange={(e) => {this.fahrenheitChange(e)}}
                  value={this.state.fahrenheit}
                />
              </div>
              <div id='fahrenheit-arrows'>
                <i className="fas fa-arrow-circle-up" onClick={() => {this.fahrenheitUp()}}></i>
                <i className="fas fa-arrow-circle-down" onClick={() => {this.fahrenheitDown()}}></i>
              </div>
            </div>


            <div id='celsius'>
              <div id='celsius-label'>
                <span>celsius</span>
              </div>
              <div id='celsius-input'>
                <input
                  type='number'
                  name='temp'
                  id='input-celsius'
                  onChange={(e) => {this.celsiusChange(e)}}
                  value={this.state.celsius}
                />
              </div>
              <div id='celsius-arrows'>
                <i className="fas fa-arrow-circle-up" onClick={() => {this.celsiusUp()}}></i>
                <i className="fas fa-arrow-circle-down" onClick={() => {this.celsiusDown()}}></i>
              </div>
            </div>


            <div id='kelvin'>
              <div id='kelvin-label'>
                <span>kelvin</span>
              </div>
              <div id='kelvin-input'>
                <input
                  type='number'
                  name='temp'
                  id='input-kelvin'
                  onChange={(e) => {this.kelvinChange(e)}}
                  value={this.state.kelvin}
                />
              </div>
              <div id='kelvin-arrows'>
                <i className="fas fa-arrow-circle-up" onClick={() => {this.kelvinUp()}}></i>
                <i className="fas fa-arrow-circle-down" onClick={() => {this.kelvinDown()}}></i>
              </div>
            </div>

          </form>

        </div>
        {/* <button onClick={() => {(console.log(this.state))}}>state</button>
        <button onClick={() => {(console.log(this.props))}}>props</button> */}
      </div>
    )
  }
}













// <div id='0'>
//               <div id='0-label'>
//                 <span>0</span>
//               </div>
//               <div id='0-input'>
//                 <input
//                   type='number'
//                   name='speed'
//                   id='input-0'
//                   onChange={(e) => {this.0Change(e)}}
//                   value={this.state.0}
//                 />
//               </div>
//               <div id='0-arrows'>
//                 <i className="fas fa-arrow-circle-up" onClick={() => {this.0Up()}}></i>
//                 <i className="fas fa-arrow-circle-down" onClick={() => {this.0Down()}}></i>
//               </div>
//             </div>