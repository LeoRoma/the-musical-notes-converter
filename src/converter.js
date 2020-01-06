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
    "frequency": 19.45
  },
  4: {
    "note": "E",
    "octave": 0,
    "frequency": 20.60
  },
  5: {
    "note": "F",
    "octave": 0,
    "frequency": 21.83
  },
  6: {
    "note": "F#/Gb",
    "octave": 0,
    "frequency": 23.12,
  },
  7: {
    "note": "G",
    "octave": 0,
    "frequency": 24.50
  },
  8: {
    "note": "G#/Ab",
    "octave": 0,
    "frequency": 25.96
  },
  9: {
    "note": "A",
    "octave": 0,
    "frequency": 27.50
  },
  10: {
    "note": "A#/Bb",
    "octave": 0,
    "frequency": 29.314
  },
  11: {
    "note": "B",
    "octave": 0,
    "frequency": 30.87
  },
  12: {
    "note": "C",
    "octave": 1,
    "frequency": 32.70,
  },
  13: {
    "note": "C#/Db",
    "octave": 1,
    "frequency": 34.65
  },
  14: {
    "note": "D",
    "octave": 1,
    "frequency": 36.71
  },
  15: {
    "note": "D#/Eb",
    "octave": 1,
    "frequency": 38.89
  },
  16: {
    "note": "E",
    "octave": 1,
    "frequency": 41.20
  },
  17: {
    "note": "F",
    "octave": 1,
    "frequency": 43.65
  },
  18: {
    "note": "F#/Gb",
    "octave": 1,
    "frequency": 46.25,
  },
  19: {
    "note": "G",
    "octave": 1,
    "frequency": 49.00
  },
  20: {
    "note": "G#/Ab",
    "octave": 1,
    "frequency": 51.91
  },
  21: {
    "note": "A",
    "octave": 1,
    "frequency": 55.00
  },
  22: {
    "note": "A#/Bb",
    "octave": 1,
    "frequency": 58.27
  },
  23: {
    "note": "B",
    "octave": 1,
    "frequency": 61.74
  }
}

numbers = {
  "C": {
    "number": 0,
    "octave": 0,
    "frequency": 16.35,
  },
  "C#": {
    "number": 1,
    "octave": 0,
    "frequency": 17.32
  },
  "Db": {
    "note": 1,
    "octave": 0,
    "frequency": 18.35
  },
  "D": {
    "number": 2,
    "octave": 0,
    "frequency": 19.45
  },
  "D#": {
    "number": 3,
    "octave": 0,
    "frequency": 20.60
  },
  "Eb": {
    "number": 3,
    "octave": 0,
    "frequency": 21.83
  },
  "E": {
    "number": 4,
    "octave": 0,
    "frequency": 23.12,
  },
  "F": {
    "number": 5,
    "octave": 0,
    "frequency": 24.50
  },
  "F#": {
    "number": 6,
    "octave": 0,
    "frequency": 25.96
  },
  "Gb": {
    "number": 6,
    "octave": 0,
    "frequency": 27.50
  },
  "G": {
    "number": 7,
    "octave": 0,
    "frequency": 29.314
  },
  "G#": {
    "number": 8,
    "octave": 0,
    "frequency": 30.87
  },
  "Ab": {
    "number": 8,
    "octave": 0,
    "frequency": 25.96
  },
  "A": {
    "number": 9,
    "octave": 0,
    "frequency": 27.50
  },
  "A#": {
    "number": 10,
    "octave": 0,
    "frequency": 29.314
  },
  "Bb": {
    "number": 10,
    "octave": 0,
    "frequency": 30.87
  },
  "B": {
    "number": 11,
    "octave": 0,
    "frequency": 30.87
  }
}

scale = ['C', 'C#/Db', 'D', 'D#/Eb', 'E', 'F', 'F#/Gb', 'G', 'G#/Ab', 'A', 'A#/Bb', 'B'];
scale.push(...scale)

$(document).ready(function () {

  var $resultNote = $('#result-note');
  var $resultNumber = $('#result-number');
  var $resultChordMaj = $('#result-chord-maj');
  var $resultChordMin = $('#result-chord-min');
  var $resultScaleMaj = $('#result-scale-maj');

  //it converts number to note
  $(".submit-number").click(function (event) {
    let num = $("#number").first().val();
    $resultNumber.append('<p>Your note is: ' + notes[num].note + '<br>' +
      'It octave is: ' + notes[num].octave + '<br>' +
      'The frequency is: ' + notes[num].frequency + 'Hz' + '</p>'
    );
  });

  //it converts note to number
  $(".submit-note").click(function (event) {
    let note = $("#note").first().val();
    console.log(numbers[note]);
    $resultNote.append('<p>Your number is: ' + numbers[note].number + '<p>'
    );
  });

  //it returns a maj chord
  $(".submit-chord-maj").click(function (event) {
    let chord = $("#chord-maj").first().val();
    console.log(scale.length)
    console.log(`${scale[scale.indexOf(chord)]} ${scale[scale.indexOf(chord) + 4]} ${scale[scale.indexOf(chord) + 7]}`)
    $resultChordMaj.append('<p>Your Maj chord is: ' + `${scale[scale.indexOf(chord)]} ${scale[scale.indexOf(chord) + 4]} ${scale[scale.indexOf(chord) + 7]}` + '<p>');
  });

  //it returns a min chord
  $(".submit-chord-min").click(function (event) {
    let chord = $("#chord-min").first().val();
    $resultChordMin.append('<p>Your min chord is: ' + `${scale[scale.indexOf(chord)]} ${scale[scale.indexOf(chord) + 3]} ${scale[scale.indexOf(chord) + 7]}` + '<p>');
  });

  // it returns a maj scale 
  $(".submit-scale-maj").click(function (event) {
    let chord = $("#scale-maj").first().val();
    $resultScaleMaj.append('<p>Your Maj scale is: ' + `${scale[scale.indexOf(chord)]} ${scale[scale.indexOf(chord) + 2]} ${scale[scale.indexOf(chord) + 4]} ${scale[scale.indexOf(chord) + 5]} ${scale[scale.indexOf(chord) + 7]} ${scale[scale.indexOf(chord) + 9]} ${scale[scale.indexOf(chord) + 11]}` + '<p>');
  });
});