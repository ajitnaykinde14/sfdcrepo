import { LightningElement, track } from 'lwc';

export default class ZodiacSignMessanger extends LightningElement {

  userName
  userBirthDate
  @track userProfile = {}
  displayResult =false

  zodiacTraits = [
    {sign: "Aries",emoji: "♈",from: "3-21",to: "4-19",traits: "You are thinker"},
    {sign: "Taurus",emoji: "♉",from: "4-20",to: "5-20",traits: "you are disciplined"},
    {sign: "Gemini",emoji: "♊",from: "5-21",to: "6-20",traits: "You are good at running"},
    {sign: "Cancer",emoji: "♋",from: "6-21",to: "7-22",traits: "You will be facing issues"},
    {sign: "Leo",emoji: "♌",from: "7-23",to: "8-22",traits: "You are not reach destination on time today"},
    {sign: "Virgo",emoji: "♍",from: "8-23",to: "9-22",traits: "Less ambitious"},
    {sign: "Libra",emoji: "♎",from: "9-23",to: "10-22",traits: "You will be successful"},
    {sign: "Scorpio",emoji: "♏",from: "10-23",to: "11-21",traits: "Be careful today"},
    {sign: "Sagittarius",emoji: "♐",from: "11-22",to: "12-21",traits: "Look to your health"},
    {sign: "Capricorn",emoji: "♑",from: "12-22",to: "1-19",traits: "Stay away from water today"},
    {sign: "Aquarius",emoji: "♒",from: "1-20",to: "2-18",traits: "Keep red clothes with you today"},
    {sign: "Pisces",emoji: "♓",from: "2-19",to: "3-20",traits: "Avoid travelling today"}
  ];

  handleNameChange(event) {
    this.userName = event.target.value
  }

  handleateChange(event) {
    this.userBirthDate = event.target.value
  }

  handleHit() {
    let userDob = new Date(this.userBirthDate)
    // Extract month and day
    const userMonth = userDob.getMonth() + 1
    const userDate = userDob.getDate()
    this.userProfile = this.checkZodiacSign(userMonth, userDate);
  }

  checkZodiacSign(month, day) {
    console.log('Data received: ' + month + ' Day: ' + day)
    //iterate over all my zodiac signs in array, extract and compare for which one month,day condition is working as in it satisfies the condition
    for (let sign of this.zodiacTraits) {
      // extract from and to string from array
      console.log('Sign received: ' + JSON.stringify(sign))
      const [fromMonth, fromDay] = sign.from.split('-').map(Number)
      const [toMonth, toDay] = sign.to.split('-').map(Number)
      if ((month === fromMonth && day >= fromDay) || (month === toMonth && day <= toDay)) {
        this.displayResult = true
        return sign
      }
    }
  }
}