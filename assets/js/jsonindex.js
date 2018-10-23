console.log("working with json data");
var reloadJsonData = document.getElementById('reload-json-data');
// var folderName = document.getElementById('folderName');

window.onload = function(){
    var ourRequest = new XMLHttpRequest();
    ourRequest.open('GET', 'http://browser.vbrqx.com/dev/example.json');
    ourRequest.responseType = 'json';
    ourRequest.onload = function(e){
        var folderData = this.response;
        
        console.log(folderData.folders);
        getFolderName(folderData.folders);
    };
    ourRequest.send();
};

// render only folder name function
//---------------------------------

function getFolderName(foldername){
    var name = "";
    for(let i=0; i<=foldername.length; i++){
        name+= "<li>" + 
                    "<a href='#'>"+ 
                        "<span>"+ 
                            "<i class='fas fa-folder'>"+"</i>" +
                        "</span>"+
                        "<p>" +
                            foldername[0] + 
                        "</p>" + 
                    "</a>" + 
                "</li>";
    }
    folderName.insertAdjacentHTML('afterbegin', name);
    console.log(name);
}

