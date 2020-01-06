notes = {
  0: {
    "note": "C",
    "octave": 0,
    "frequency": 16.35,
  },
  1: {
    "note": "C#/Db",
    "octave": 0,
    "frequency": 17.32
  },
  2: {
    "note": "D",
    "octave": 0,
    "frequency": 18.35
  }
}
console.log(notes)
$(document).ready(function () {

  $(".submit").click(function (event) {
    let num = $("input").first().val();
    console.log(num);
    console.log(notes[num]);
    console.log(notes[num].note)
    console.log(notes[num].octave)
    console.log(notes[num].frequency)
    
  });

});