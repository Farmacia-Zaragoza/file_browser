console.log("working with json data");
var reloadJsonData = document.getElementById('reload-json-data');
var folderName = document.getElementById('folderName');
var filesName = document.getElementById('filesName');

window.onload = function(){
    var ourRequest = new XMLHttpRequest();
    ourRequest.open('GET', 'http://browser.vbrqx.com/dev/example.json');
    ourRequest.responseType = 'json';
    ourRequest.onload = function(e){
        var folderData = this.response;
        
        console.log(folderData.folders);
        console.log(folderData.files[0]);
        // init functions for getting folder name
        //----------------------------------------
        getFolderName(folderData.folders);
        getFilesName(folderData.files);
    };
    ourRequest.send();
};

// render only folder name function
//---------------------------------

function getFolderName(foldername){
    let name = "";
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
    };
    folderName.insertAdjacentHTML('afterbegin', name);
    // console.log(name);
};


// render only files name from json file
// --------------------------------------

function getFilesName(filesname){
    let nameOfFile = "";
    console.log(filesname);
    for(let i=0; i<filesname.length; i++){
        // console.log(filesname[i].name);
        nameOfFile+="<div class='divTableRow'>"+
                            "<div class='divTableCell'>"+
                                "<span>"+
                                    "<i class='fas fa-folder'></i>"+
                                    filesname[i].name+
                                "</span>"+
                            "</div>"+
                            "<div class='divTableCell'>"+
                                    filesname[i].type+
                            "</div>"+
                    "</div>";
    
        // 
    };

    filesName.insertAdjacentHTML('afterend', nameOfFile);
    console.log(nameOfFile);
}


