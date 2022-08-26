var background = new Image();
var message = new Image() ;

background.src="anh/nenchinh.png";
message.src="anh/message.png";

function displayMessage () {
    context.drawImage(background,0,0);
    context.drawImage(message,250,450);
}