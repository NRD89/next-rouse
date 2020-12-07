import AWS from "aws-sdk"

const handler = async (req, res) => {
  // load CloudFront key pair from environment variables
  // Important: when storing your CloudFront private key as an environment variable string,
  // you'll need to replace all line breaks with \n, like this:
  // CF_PRIVATE_KEY="-----BEGIN RSA PRIVATE KEY-----\nMIIE...1Ar\nwLW...2eL\nFOu...k2E\n-----END RSA PRIVATE KEY-----"
  const cloudfrontAccessKeyId = process.env.CF_ACCESS_KEY_ID
  const cloudFrontPrivateKey = process.env.CF_PRIVATE_KEY
  const signer = new AWS.CloudFront.Signer(
    cloudfrontAccessKeyId,
    cloudFrontPrivateKey
  )

  // 2 days as milliseconds to use for link expiration
  const fiveSecs = 900000

  // sign a CloudFront URL that expires 2 days from now
  const signedUrl = signer.getSignedUrl({
    url:
      "https://d2xfu2vry9hcjt.cloudfront.net/streams/404771467467585529678292.m3u8",
    expires: Math.floor((Date.now() + fiveSecs) / 1000), // Unix UTC timestamp for now + 2 days
  })
  console.log("CF signed URL =>", signedUrl)

  res.status(200)
  res.json(JSON.stringify(signedUrl))
  // signedUrl is now a signed CloudFront URL:
  // https://248hf0w8hs.cloudfront.net/secret-image.jpg?Expires=1531165045&Key-Pair-Id=HDIWEUY39S87XHCJDJUQODJ20AL&Signature=0SGI2...K2JHID__
}

export default handler
