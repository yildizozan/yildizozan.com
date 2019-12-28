import React from "react";
import styles from "./App.module.css";

import backgroundImage from "./assets/background.jpg";
import logo_oz from "./assets/logo_oz.png";

function App() {
  return (
    <main className={styles.welcome} style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className={"container mt-5"}>
        <section className="row">
          <article className="col">
            <img src={logo_oz} height="117" width="174" alt={"amblem"} />
          </article>
          <article className="col">
            <div>
              <h1>Ozan Yıldız </h1>
            </div>
          </article>
        </section>
      </div>
    </main>
  );
}

export default App;
