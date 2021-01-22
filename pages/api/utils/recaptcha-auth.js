import fetch from "node-fetch"
// process.env.GATSBY_API_URL ||

export const recaptchaAuth = async ({ honeyPot }) => {
  // const human = await validateHuman(token)
  if (honeyPot === true) {
    return "Please, you're not fooling us, bot."
  } else {
    return "Success"
  }

  // async function validateHuman(token) {
  //   const secret = process.env.RECAPTCHA_SECRET_KEY
  //   const response = await fetch(
  //     `https://www.google.com/recaptcha/api/siteverify?secret=${secret}&response=${token}`,
  //     {
  //       method: "POST",
  //     }
  //   )
  //   const data = await response.json()
  //   return data.success
  // }
}
