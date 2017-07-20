// async function requestGet(url) {
//     let parsedData = false;
//
//     await http.get(url, function (res) {
//         const {statusCode} = res;
//         const contentType = res.headers['content-type'];
//
//         let error;
//         if (statusCode !== 200) {
//             error = new Error('Request Failed.\n' +
//                 `Status Code: ${statusCode}`);
//         } else if (!/^application\/json/.test(contentType)) {
//             error = new Error('Invalid content-type.\n' +
//                 `Expected application/json but received ${contentType}`);
//         }
//         if (error) {
//             console.error(error.message);
//             // consume response data to free up memory
//             res.resume();
//             return;
//         }
//
//         res.setEncoding('utf8');
//         let rawData = '';
//         res.on('data', function (chunk) {
//             rawData += chunk;
//         });
//         res.on('end', function () {
//             try {
//                 parsedData = JSON.parse(rawData);
//             } catch (e) {
//                 console.error(e.message);
//             }
//         });
//     }).on('error', function (e) {
//         console.error(`Got error: ${e.message}`);
//     });
//
//     return parsedData;
// }
