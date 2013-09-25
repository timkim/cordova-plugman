function getVesionObject(versionString){
    var majorReg = /\d+/,
    minorReg = /\d+\.\d+/,
    patchReg = /\d+\.\d+\.\d+/;
    
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

function getComparator(versionString){
    var compareReg = /^(<|>)=?/;
    var comparator;
    
    if(compareReg.test(versionString)){
        comparator = versionString.match(compareReg)[0];
    }else{
        comparator = '=';
    }
    return comparator; 
}

function compare(numOne, numTwo, comparator){
    switch (comparator){
        case '<':
            return (numOne < numTwo);
        break;
        
        case '<=':
            return (numOne <= numTwo);
        break;
        
        case '>':
            return (numOne > numTwo);
        break;
        
        case '>=':
            return (numOne >= numTwo);
        break;
        
        case '=':
            return (numOne == numTwo);
        break;
    }
}
    
function satisfy(versionOutput, versionSatisfy, comparator){
       
}

module.exports = function(versionOutput, versionSatisfy){
    var theVersionOutput = getVersionObject(versionOutput);
    var theVersionSatisfy = getVersionObject(versionSatisfy);
    var comparator = getComparator(versionSatisfy);
    
    return satisfy(theVersionOutput, theVersionSatisfy, comparator);
}


