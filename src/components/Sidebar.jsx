import React from "react";
import Button from "./Button"

import { faHouse, faCirclePlus, faUser, faGear } from '@fortawesome/free-solid-svg-icons'

export default function Sidebar({ loggedUser, changeLoggedUser }) {
  return (
    <div id="side-menu">
      <ul>
        <Button description="Home" url="/" icon={faHouse} />
        <Button description="Nuovo post" url="/" icon={faCirclePlus} />
        <Button description={loggedUser} url={loggedUser} icon={faUser} />
        <Button description="Impostazioni" url="/" icon={faGear} />
        <form id="change-user" onSubmit={e => {
          e.preventDefault()
          changeLoggedUser(e.target.newUserId.value)
          e.target.newUserId.value = ''
        }}>
        <input className="comment-input" type="text" name="newUserId" placeholder="Cambia utente" />
        </form>

      </ul>
    </div>
  )
}