import React from 'react'


//à remplacer
import "./NavBarVerti.css"
import "./all.min.css";

export default function NavBarVerti() {
    
//   -------------- N A V B A R  P O U R   P A T I E N T   S E U L M T   -------

  return (
    <>
      <div id="navVertical" class="navigation-Vertical">
        <ul>
          <li>
            <button>
              <span class="icon">
                <i class="fas fa-school sizeIcon"></i>
              </span>
              <p class="titre">ISPM Plateforme</p>
            </button>
          </li>

          <li>
            <form action="/user&patient">
              <button type="submit" id="Agenda">
                <span class="icon">
                  <i class="far fa-calendar-alt sizeIcon"></i>
                </span>
                <p class="titre">Calendrier Scolaire</p>
              </button>
            </form>
          </li>

          <li>
            <form action="/user&patient/dossier&medical">
              <button type="submit" id="Note">
                <span class="icon">
                  <i class="far fa-file-alt sizeIcon"></i>
                </span>
                <p class="titre">Notes</p>
              </button>
            </form>
          </li>

          <li>
            <form action="/admin/absence">
              <button type="submit" id="Absence">
                <span class="icon">
                  <i class="fas fa-hourglass-end sizeIcon"></i>
                </span>
                <p class="titre">Absence</p>
              </button>
            </form>
          </li>

          <li>
            <form action="/admin/deconnexion" method="post">
              <button id="Logout" type="submit">
                <span class="icon">
                  <i class="fas fa-sign-out-alt sizeIcon"></i>
                </span>
                <p class="titre">Se Deconnecter</p>
              </button>
            </form>
          </li>
        </ul>
      </div>
    </>
  );
}
