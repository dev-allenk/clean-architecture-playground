import React from "react"
import useAuth from "../../application/useAuth"

export default function Header() {
  const { user, login, logout } = useAuth()

  const handleClick = () => {
    user ? logout() : login("a", "b")
  }
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <button onClick={() => handleClick()}>{user ? "logout" : "login"}</button>
    </div>
  )
}
