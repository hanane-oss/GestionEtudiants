function ListeEtudiants() {

    const etudiants = [
        { id: 1, nom: "Alami", prenom: "Ahmed", age: 20 },
        { id: 2, nom: "Benali", prenom: "Sara", age: 21 },
        { id: 3, nom: "Idrissi", prenom: "Youssef", age: 19 },
        { id: 4, nom: "Amrani", prenom: "Salma", age: 22 },
        { id: 5, nom: "Tazi", prenom: "Omar", age: 20 }
    ];

    
    return (
        <div>
            <h1>Liste des étudiants</h1>
            <table border={1} cellPadding={10}>
            
                    <tr>
                        <th>ID</th>
                        <th>NOM</th>
                        <th>PRENOM</th>
                        <th>AGE</th>
                    </tr>
            {
                etudiants.map((etudiant) => (
                    <tr key={etudiant.id}>
                        <td>{etudiant.id}</td>
                        <td>{etudiant.nom}</td>
                        <td>{etudiant.prenom}</td>
                        <td>{etudiant.age}</td>
                        </tr>
                ))
            }

</table>
        </div>
    );
}


export default ListeEtudiants;