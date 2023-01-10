
window.onload = function(){

    let theme = document.querySelector("body")
    let chooseLightTheme = document.querySelector(".LightTheme")
    let chooseDarkTheme = document.querySelector(".DarkTheme")
    let chooseLargeFontSize = document.querySelector(".LargeFontSize")
    let chooseRegularFont = document.querySelector(".RegularFontSize")

    chooseLightTheme.onclick = function() {
        theme.style.backgroundColor = "white";
    }

    chooseDarkTheme.onclick = function(){
        theme.style.backgroundColor = "grey";
    }

    chooseLargeFontSize.onclick = function(){
        theme.style.fontSize = "36px"
    }

    chooseRegularFont.onclick = function(){
        theme.style.fontSize = "16px"
    }
    
}