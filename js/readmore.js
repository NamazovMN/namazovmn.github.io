function getItem(itemId){
    return document.getElementById(itemId)
}

function getElements(projectName){
    return {
        moreButton: getItem(projectName + "-more-btn"),
        lessButton: getItem(projectName + "-less-btn"),
        moreInfo: getItem(projectName + "-more-info" ),
        lessInfo: getItem(projectName + "-less-info")
    }

}

function callRead(projectName) {
    let elements = getElements(projectName)
    elements.moreButton.onclick = function() {
        elements.lessInfo.style.display = "none";
        elements.moreInfo.style.display = "flex";
    }
    
    
    elements.lessButton.onclick = function() {
        elements.lessInfo.style.display = "flex";
        elements.moreInfo.style.display = "none";
    }   
}

callRead('lid')
callRead('ner')
callRead('bio')
callRead('about')