let arr = [1,2,3,[4], [5,[6,7]], [8,[9,[10,11,12],13]],14,[15]];

/**
 * @returns an array after flattening
 * based on the parameters
 */
function funFlat(){
    let result = [];
    flatten(this);

    function flatten(arr){
        for(let i=0; i<arr.length; i++){
            /**
             * Check if the item is array
             * If yes, then recursively call the function
             * otherwise push that element to the result
             */
            const currentElement = arr[i];
            if(Array.isArray(currentElement)){
                flatten(currentElement);
            }
            else{
                result.push(currentElement);
            }
        }
    }

    return result;
}

Array.prototype.funFlat = funFlat;

let res = arr.funFlat();
console.log(res);



/**
 * Follow-up Tasks-
 * 1. Add Depth Parameter
 * 2. Return the same array instead of a new one
 */