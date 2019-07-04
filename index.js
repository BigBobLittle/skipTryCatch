
/**
 * utitlity fxn to skip tryCatch in async await routes
 */

 const skipTryCatch = fn => (req,res,next) => {
     return Promise.resolve(fn(req,res,next)).catch(next);
 }





 /**
 * @name asyncMiddleWare
 * @description helper function that wraps our express routes to handle rejected promises. lets prevent try catch
 * @param {*} fn
 */
// const asyncMiddleWare = fn => (req, res, next) => {
//     return Promise.resolve(fn(req, res, next)).catch(next);
//   };
  
//   const skipTryCatch = fn =>
//     function asyncUtilWrap(...args) {
//       const fnReturn = fn(...args);
//       const next = args[args.length - 1];
//       return Promise.resolve(fnReturn).catch(next);
//     };


module.exports = {skipTryCatch};