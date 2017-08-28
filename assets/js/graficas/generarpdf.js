

//add event listener to button
document.getElementById('generar_pdf').addEventListener("click", downloadPDF); 

//donwload pdf from original canvas
function downloadPDF() {
	var nombre_prospecto=$('#nombre_prospecto').val();

    var canvas = document.querySelector('#canvas');
	//creates image
	var canvasImg = canvas.toDataURL("image/png", 1.0);
  
	//creates PDF from img
	var doc = new jsPDF('portrait', 'mm', 'letter');
    doc.setFontSize(14);
	doc.text(25, 25, 'Nombre del Prospecto: ')
	doc.setFontSize(14);
	doc.text(100, 25, nombre_prospecto)
	doc.addImage(canvasImg, 'png', 17, 100, 180, 100);
    doc.save('Grafica.pdf');
}