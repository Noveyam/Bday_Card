import React from "react";

function Main() {
    return (
        <main>
            <figure id="wallpaper">
                <img src="./images/Pokemon Wallpaper.jpeg" alt="banner states Pokemon, with clouds, rainbow, and 4 pokemon monsters"></img>
            </figure>
            <section className="info-grid">
                <section className="info-1">
                    <h2>SATURDAY</h2>
                    <h3>6/17</h3>
                    <h3>12-5pm</h3>
                </section>
                <section className="info-2">
                    <h1>YOU'RE INVITED TO BRAYDEN'S BDAY PARTY</h1>
                </section>
                <section className="info-3">
                    <h2>GIFT IDEAS</h2>
                    <ul>
                        <li>POKEMON CARDS</li>
                        <li>FORTNITE</li>
                        <li>ROBLOX</li>
                    </ul>
                </section>
            </section>
        </main>
    )
}

export default Main;