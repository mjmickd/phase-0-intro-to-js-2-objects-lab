const employee=Object()
function updateEmployeeWithKeyAndValue(object,key,value){
delete object[key]
return Object.assign({},object,{[key]:value})
}

function destructivelyUpdateEmployeeWithKeyAndValue(object, key, value){
    object[key]=value
    return object
}

function deleteFromEmployeeByKey(object, key){
    let newObj = Object.assign({},object)
    delete newObj [key]
    return newObj
}

function destructivelyDeleteFromEmployeeByKey(object,key){
    delete object [key];
    return object
}