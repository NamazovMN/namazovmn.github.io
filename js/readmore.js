function getItem(itemId){
    return document.getElementById(itemId)
}

function getElements(projectName){
    return {
        moreButton: getItem("read-more-" + projectName),
        lessButton: getItem("read-less-" + projectName),
        moreInfo: getItem("more-info-box-" +projectName ),
        lessInfo: getItem("less-info-box-" + projectName)
    }

}

function callRead(projectName) {
    let elements = getElements(projectName)
    console.log(elements)
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
