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
  },
  3: {
    "note": "D#/Eb",
    "octave": 0,
    "frequency": 19.45,
  },
  4: {
    "note": "E",
    "octave": 0,
    "frequency": 20.60
  },
  2: {
    "note": "D",
    "octave": 0,
    "frequency": 18.35
  },
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
  },
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

$(document).ready(function () {

  var $result= $('#result');

  $(".submit").click(function (event) {
    let num = $("input").first().val();
    console.log(num);
    console.log(notes[num]);
    console.log(notes[num].note)
    console.log(notes[num].octave)
    console.log(notes[num].frequency)
    $result.append('<p>Your note is: ' + notes[num].note + '<br>' + 
                   'It octave is: ' + notes[num].octave + '<br>' +
                   'The frequency is: ' + notes[num].frequency + 'Hz' + '</p>');
  });

});