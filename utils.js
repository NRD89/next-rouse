const baseUrl = "https://backend.rouse.yoga"
async function fetchQuery(path, params = null) {
  let url
  if (params !== null) {
    url = `${baseUrl}/${path}?_where[Slug]=${params}`
  } else {
    url = `${baseUrl}/${path}`
  }
  console.log("url =>", url)
  const response = await fetch(`${url}`)
  const data = await response.json()
  console.log("fetch query =>", data)
  return data
}
export { baseUrl, fetchQuery }
