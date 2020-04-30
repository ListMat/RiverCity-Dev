import React, { useEffect, useState } from "react";

import "./styles.css";

import logo from "../../assets/logo.svg";

export default function Login({ history }) {
  const [username, setUsername] = useState("");
  const [techs, setTechs] = useState("");

  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;

        setLatitude(latitude);
        setLongitude(longitude);
      },
      (err) => {
        console.log(err);
      },
      {
        timeout: 30000,
      }
    );
  }, []);

  async function hendleAddDev(e) {
    e.preventDefault();
    // 00:23:05

    console.log(username);
    history.push("/main");
  }

  return (
    <div id="wrapper-body">
      <div className="login-container">
        <aside>
          <section className="form">
            <img src={logo} alt="RiverCityDev" />
            <form onSubmit={hendleAddDev}>
              <div className="input-block">
                <label htmlFor="username">Usuário do Github</label>
                <input
                  name="username"
                  id="username"
                  required
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="input-block">
                <label placeholder="Tecnologias" htmlFor="techs">
                  Tecnologias
                </label>
                <input
                  name="techs"
                  id="techs"
                  value={techs}
                  oncahnge={(e) => setTechs(e.target.value)}
                />
              </div>
              <div className="input-group">
                <div className="input-block">
                  <label htmlFor="latitude">Latitude</label>
                  <input
                    type="number"
                    name="latitude"
                    id="latitude"
                    required
                    value={latitude}
                    onChange={(e) => setLatitude(e.target.value)}
                  />
                </div>

                <div className="input-block">
                  <label htmlFor="longitude">Longitude</label>
                  <input
                    type="number"
                    name="longitude"
                    id="longitude"
                    required
                    value={longitude}
                    onChange={(e) => setLongitude(e.target.value)}
                  />
                </div>
              </div>
              <button type="submit">Entrar</button>
            </form>
          </section>
        </aside>
      </div>
    </div>
  );
}
