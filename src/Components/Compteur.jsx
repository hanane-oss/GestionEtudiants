import { useState } from 'react';

function Compteur() {
    const [compteur, setCompteur] = useState(0);

    return (
        <div>
            <h2>Compteur : {compteur}</h2>

            <button onClick={() => setCompteur(compteur + 1)}>
               +1
            </button>

            <button onClick={() => setCompteur(compteur - 1)}>
                -1
            </button>

            <button onClick={() => setCompteur(0)}>
                0
            </button>
        </div>
    );
}

export default Compteur;