/* eslint-disable no-process-env */
const AWS = require( 'aws-sdk' )

function upload( bucket, buffer, nomeArquivo ) {
  const s3 = new AWS.S3()

  const params = {
    'ACL': 'public-read',
    Body: buffer,
    Bucket: bucket,
    Key: nomeArquivo
  }

  function executor( resolve, reject ) {
    s3.upload( params, ( erro, data ) => {
      if ( erro ) {
        return reject( erro )
      }
    
      return resolve( data.Location )
    } )
  }

  return new Promise( executor )
}

module.exports = { upload }
