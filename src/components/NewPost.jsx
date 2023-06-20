import React from "react";
import { useState } from "react";

export default function NewPost({ loggedUser }) {

    return (
        <div className="post">
            <h3>Carica un nuovo post</h3>
            <form method="post" action="http://localhost:3000/api/posts/newPost" >
                <input type="text" name="description" placeholder="Inserisci una descrizione..." />
                <input type="text" name="imgSrc" placeholder="Indica l'URL della tua foto..."/>
                <input type="submit" value="Carica" />
            </form>
        </div>
    )
}