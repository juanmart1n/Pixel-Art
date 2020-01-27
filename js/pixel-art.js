var nombreColores = ['White', 'LightYellow',
  'LemonChiffon', 'LightGoldenrodYellow', 'PapayaWhip', 'Moccasin', 'PeachPuff', 'PaleGoldenrod', 'Bisque', 'NavajoWhite', 'Wheat', 'BurlyWood', 'Tan',
  'Khaki', 'Yellow', 'Gold', 'Orange', 'DarkOrange', 'OrangeRed', 'Tomato', 'Coral', 'DarkSalmon', 'LightSalmon', 'LightCoral', 'Salmon', 'PaleVioletRed',
  'Pink', 'LightPink', 'HotPink', 'DeepPink', 'MediumVioletRed', 'Crimson', 'Red', 'FireBrick', 'DarkRed', 'Maroon',
  'Brown', 'Sienna', 'SaddleBrown', 'IndianRed', 'RosyBrown',
  'SandyBrown', 'Goldenrod', 'DarkGoldenrod', 'Peru',
  'Chocolate', 'DarkKhaki', 'DarkSeaGreen', 'MediumAquaMarine',
  'MediumSeaGreen', 'SeaGreen', 'ForestGreen', 'Green', 'DarkGreen', 'OliveDrab', 'Olive', 'DarkOliveGreen', 'YellowGreen', 'LawnGreen',
  'Chartreuse', 'GreenYellow', 'Lime', 'SpringGreen', 'LimeGreen',
  'LightGreen', 'PaleGreen', 'PaleTurquoise',
  'AquaMarine', 'Cyan', 'Turquoise', 'MediumTurquoise', 'DarkTurquoise', 'DeepSkyBlue',
  'LightSeaGreen', 'CadetBlue', 'DarkCyan', 'Teal', 'Steelblue', 'LightSteelBlue', 'Honeydew', 'LightCyan',
  'PowderBlue', 'LightBlue', 'SkyBlue', 'LightSkyBlue',
  'DodgerBlue', 'CornflowerBlue', 'RoyalBlue', 'SlateBlue',
  'MediumSlateBlue', 'DarkSlateBlue', 'Indigo', 'Purple', 'DarkMagenta', 'Blue',
  'MediumBlue', 'DarkBlue', 'Navy', 'Thistle',
  'Plum', 'Violet', 'Orchid', 'DarkOrchid', 'Fuchsia', 'Magenta', 'MediumOrchid',
  'BlueViolet', 'DarkViolet', 'DarkOrchid',
  'MediumPurple', 'Lavender', 'Gainsboro', 'LightGray', 'Silver', 'DarkGray', 'Gray',
  'DimGray', 'LightSlateGray', 'DarkSlateGray', 'Black'
];

var paleta = document.getElementById('paleta');
var grillaPixeles = document.getElementById('grilla-pixeles');
var mouseClickeado = false;

function generarPaletaDeColores(){

  for (var i = 0; i<nombreColores.length; i++){
    var nuevoDiv = document.createElement('div');
    nuevoDiv.className = "color-paleta";
    nuevoDiv.style.background = nombreColores[i];
    paleta.appendChild(nuevoDiv);
  }

};

function generarGrillaDePixeles(){

  for (var i = 0; i<=1750; i++){
    var nuevoDiv = document.createElement('div');
    nuevoDiv.className = "pixel-grilla";
    grillaPixeles.appendChild(nuevoDiv);
  }

};

paleta.addEventListener('click', cambiarColorPaleta);

function cambiarColorPaleta(e) {
    document.getElementById('indicador-de-color').style.background = e.target.style.background;
};

grillaPixeles.addEventListener('click', cambiarColorDelPixelEnLaGrilla);

function cambiarColorDelPixelEnLaGrilla( e ) {
    e.target.style.background = document.getElementById('indicador-de-color').style.background;
};

var colorPersonalizado = document.getElementById('color-personalizado');

colorPersonalizado.addEventListener('change', 
  (function() {
    colorActual = colorPersonalizado.value;
    document.getElementById('indicador-de-color').style.background = colorActual;

  })
);

$('#grilla-pixeles').mousedown(indicarMouseClickDown);
$('#grilla-pixeles').mouseup(indicarMouseClickUp);

function indicarMouseClickDown(){
  mouseClickeado = true;
};

function indicarMouseClickUp(){
  mouseClickeado = false;
};

$("#grilla-pixeles").mouseover(modificarColorEnPixelesGilla);

function modificarColorEnPixelesGilla(e){
    if (mouseClickeado) {
      $(e.target).css('background-color', $('#indicador-de-color').css('background-color'))
    };
};

$('#borrar').click( function() {
  $('.pixel-grilla').animate( {"background-color":"white"}, 1500 )
});

$('.imgs').click( function(e) {
  switch($(e.target).attr('id')) {
    case "batman":
      cargarSuperheroe(batman);
      break;
    case "wonder":
      cargarSuperheroe(wonder);
      break;
    case "flash":
      cargarSuperheroe(flash);
      break;
    case "invisible":
      cargarSuperheroe(invisible);
      break;
  }
});

$('#guardar').click(
  guardarPixelArt
);

$(document).ready( function() {
  generarGrillaDePixeles();
  generarPaletaDeColores();
});