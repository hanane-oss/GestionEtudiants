import Etudiant from './Components/Etudiant';
import ListeEtudiants from './Components/ListeEtudiants';
import Compteur from './Components/Compteur';
import FormulaireEtudiant from './Components/FormulaireEtudiant';
import GestionEtudiants from './Components/GestionEtudiants';


function App() {
    return (
        <div>
            <h2>Gestion des étudiants BTS DAI</h2>
            <h1>Gestion</h1>

           <h1>Gestion</h1>
<p>Projet React récupéré depuis GitHub</p>
            <Etudiant
                nom="Alami"
                prenom="Ahmed"
                age={20}
                filiere="DAI"
            />

            <Etudiant
                nom="Benali"
                prenom="Sara"
                age={21}
                filiere="DS"
            />

            <Etudiant
                nom="Idrissi"
                prenom="Youssef"
                age={19}
                filiere="DAI"
            />

            <ListeEtudiants />
            <Compteur />
            <FormulaireEtudiant />
            <GestionEtudiants />
        </div>
    );
}

export default App;