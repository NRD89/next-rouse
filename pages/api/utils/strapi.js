import fetch from "node-fetch"
const apiURL = process.env.API_URL
// process.env.GATSBY_API_URL ||

export const strapiFetchUser = async ({ token }) => {
  return await fetch(`${apiURL}/users/me`, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  }).then((res) => res.json())
}

// export const strapiFetchUser = async ({ token }) => {
//   return await fetch(`${apiURL}/graphql`, {
//     method: "POST",
//     headers: {
//       Authorization: `Bearer ${token}`,
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({
//       query: `
//         query UserClasses {
//           userClasses {
//             email
//             username
//             subTier
//             classes {
//               id
//               title
//             }
//           }
//         }
//       `,
//     }),
//   })
//     .then(res => res.json())
//     .catch(err => console.error(JSON.stringify(err, null, 2)))
