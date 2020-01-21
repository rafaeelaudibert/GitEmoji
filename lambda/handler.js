const { getCategorizeGithubEmojiIds } = require('./fetch')
const S3 = require('./s3')
const { Buffer } = require('buffer')

module.exports.gitemoji = async (event, context) => {
  // Make sure we wait for it to finish
  context.callbackWaitsForEmptyEventLoop = false

  // Fetch data, and make it a Buffer
  const categorizedGithubEmojiIds = await getCategorizeGithubEmojiIds()
  const dataBuffer = Buffer.from(JSON.stringify(categorizedGithubEmojiIds))

  // Save it to S3
  const downloadUrl = await S3.upload('gitemoji', dataBuffer, 'gitemoji.json')
  console.log(`Available at ${downloadUrl}`)
}
