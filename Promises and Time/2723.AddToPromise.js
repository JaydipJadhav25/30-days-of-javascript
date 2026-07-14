/**
 * @param {Promise} promise1
 * @param {Promise} promise2
 * @return {Promise}
 */
var addTwoPromises = async function(promise1, promise2) {
    //get data from 1 promis
    const val1 = await promise1;
    const val2 = await promise2;
     
     return val1 + val2;

    //creatw new promiss nd result result
    return new Promise((resolve , rejecte)=>{
        resolve(val1 + val2);
    })
};

/**
 * addTwoPromises(Promise.resolve(2), Promise.resolve(2))
 *   .then(console.log); // 4
 */