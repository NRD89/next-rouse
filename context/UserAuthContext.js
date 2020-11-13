import React, { createContext, useState, useEffect } from "react"
import Cookie from "js-cookie"
import { Router, useRouter } from "next/router"
const apiURL = process.env.GATSBY_API_URL || "http://localhost:1337"

const defaultValues = {
  user: {},
  loggedIn: false,
  registerUser: () => {},
  login: () => {},
  logout: () => {},
  requestPasswordReset: () => {},
  resetPassword: () => {},
  sendSubmission: () => {},
  redirectToManage: () => {},
}

export const AuthContext = createContext(defaultValues)

// Check if there is a browser
const isntBrowser = typeof window === "undefined"

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(defaultValues.user)
  const [loggedIn, setLoggedIn] = useState(defaultValues.loggedIn)
  const isAuthenticated = loggedIn && Object.keys(user).length
  const router = useRouter()

  // grab token value from cookie
  const token = Cookie.get("token")

  useEffect(() => {
    if (isntBrowser) {
      return
    }

    // grab token value from cookie
    // const token = Cookie.get("token")

    if (token) {
      // Authenticate token through Strapi and place user object in defaultValues.user
      fetch(`/api/get-customer`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ token }),
      }).then(async (res) => {
        // if res comes back not valid, token is not valid
        // delete the token and log the user out on client
        if (res.statusCode) {
          Cookie.remove("token")
          setUser(defaultValues.user)
          return null
        }
        const data = await res.json()
        console.log(data)
        setUser(data)
        setLoggedIn(true)
      })
    }
  }, [])

  //register a new user
  const registerUser = async (username, email, password) => {
    //prevent function from being ran on the server
    if (isntBrowser) {
      return
    }

    const info = {
      username: username,
      email: email,
      password: password,
    }

    const response = await fetch("/api/create-customer", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(info),
    })
      .then((res) => res.json())
      .catch((err) => console.error(JSON.stringify(err, null, 2)))

    console.log("response =>", response)

    return response
  }

  const login = async (identifier, password) => {
    //prevent function from being ran on the server
    if (isntBrowser) {
      return
    }

    const creds = {
      identifier,
      password,
    }

    const response = await fetch("/.netlify/functions/login-customer", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(creds),
    })
      .then((res) => res.json())
      .catch((err) => console.error(JSON.stringify(err, null, 2)))

    console.log("response =>", response)

    return response
  }

  const logout = () => {
    //remove token and user cookie
    Cookie.remove("token")
    delete window.__user
    // sync logout between multiple windows
    window.localStorage.setItem("logout", Date.now())
    //redirect to the home page
    router.push("/")
    setLoggedIn(defaultValues.loggedIn)
  }

  const requestPasswordReset = async (email) => {
    if (isntBrowser) {
      return
    }

    const response = await fetch("/.netlify/functions/request-password-reset", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    })
      .then((res) => res.json())
      .catch((err) => console.error(JSON.stringify(err, null, 2)))

    console.log("response =>", response)

    return response
  }

  const resetPassword = async (email) => {
    if (isntBrowser) {
      return
    }

    const response = await fetch("/.netlify/functions/reset-password", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    })
      .then((res) => res.json())
      .catch((err) => console.error(JSON.stringify(err, null, 2)))

    console.log("response =>", response)

    return response
  }

  const sendSubmission = async (name, email) => {
    if (isntBrowser) {
      return
    }

    const response = await fetch("/api/digital-membership-form-submission", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email }),
    })
      .then((res) => res.json())
      .catch((err) => console.error(JSON.stringify(err, null, 2)))

    console.log("response =>", response)

    return response
  }

  const redirectToManage = async () => {
    const response = await fetch("/.netlify/functions/sub-manage-link", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ token }),
    })
      .then((res) => res.json())
      .then((link) => {
        window.location.href = link
      })
      .catch((err) => console.error(JSON.stringify(err, null, 2)))

    console.log("response =>", response)

    return response

    // Based on https://github.com/jlengstorf/jamstack-subscriptions/blob/master/src/index.html
  }

  return (
    <AuthContext.Provider
      value={{
        ...defaultValues,
        user,
        setUser,
        isAuthenticated,
        registerUser,
        login,
        logout,
        setLoggedIn,
        requestPasswordReset,
        resetPassword,
        sendSubmission,
        redirectToManage,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
