function UI(){
    this.outputImage=document.getElementById("outputImage");
    this.outputLanguage=document.getElementById("outputLanguage");
    this.outputWord=document.getElementById("outputWord");
    this.languageList=document.getElementById("language");
};

UI.prototype.changeUI=function(){
    this.outputImage.src=`images/${this.languageList.value}.png`;
    newOutputLanguage=this.languageList.options[this.languageList.selectedIndex].textContent;
    this.outputLanguage.innerHTML=newOutputLanguage;
}
UI.prototype.displayTranslate=function(word){

    this.outputWord.textContent=word;
}