// hooks/useAuth.js
import useSWR from "swr"
import Cookie from "js-cookie"
// const apiURL = "http://localhost:1337"

const token = Cookie.get("token")

const fetcher = (url) =>
  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ token }),
  })
    .then(async (response) => await response.json())
    .catch((err) => {
      throw err
    })

export default function useAuth() {
  const { data, error, mutate } = useSWR(
    token ? "/api/get-customer" : null,
    fetcher
  )
  const loading = data === undefined

  return {
    data,
    loading,
    error,
    mutate,
  }
}
