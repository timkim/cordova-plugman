function getVesionObject(versionString){
    var majorReg = /\d+/;
    var minorReg = /\d+\.\d+/;
    var patchReg = /\d+\.\d+\.\d+/;
    
    var major=null,
    minor=null,
    patch= null;
    
    if(majorReg.test(versionString)){
        major = parseInt(versionString.match(majorReg)[0]);
    }
    
    if(minorReg.test(versionString)){
        minor = parseInt(versionString.match(minorReg)[0].split('.')[1]);
    }
    
    if(patchReg.test(versionString)){
        patch = parseInt(versionString.match(patchReg)[0].split('.')[2]);
    }
    return {
        major: major,
        minor: minor,
        patch: patch
    }
}

function getComparator(){

}