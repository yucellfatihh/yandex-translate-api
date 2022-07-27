eventListeners();

function eventListeners() {
    document.getElementById("translate-form").addEventListener("submit",translateWord);
    //Change
    document.getElementById("language").onchange=function () {
        //Arayüz işlemleri
        ui.changeUI();
        
    }
};
const ui=new UI();
const translate=new Translate(document.getElementById("word").value,document.getElementById("language").value);
function translateWord(e){
    
    this.changeParameters(document.getElementById("word").value,document.getElementById("language").value);
    translate.translateWord(function (err,response) {
        if(err){
            console.log(err);
        }else{
            //response
            ui.displayTranslate(response)
        }
    });
    e.preventDefault();
}