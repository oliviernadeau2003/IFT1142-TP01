
//* Fonctions CRUD -

//* Read
export const afficherLivres = (tabLivres) => {

    console.log('\nLISTE DES LIVRES');
    console.log('ID   Titre              IdAuteur Année  Pages   Catégorie');
    console.log('-----------------------------------------------------------------------------------------');

    tabLivres.forEach((livre) => {
        console.log(`${livre.id} ${livre.titre} ${livre.idAuteur} ${livre.annee} ${livre.pages} ${livre.categorie}`);
    });

    console.log('-----------------------------------------------------------------------------------------');
    console.log(`\nNombre de livres : ${tabLivres.length}`);

};

//* Create
export const ajouterLivre = (tabLivres) => { }

//* Update
export const modifierLivre = (tabLivres) => { }

//* Delete
export const supprimerLivre = (tabLivres) => { }

// * Autres -
// export const trouverProchainId = (tabLivres) => { return tabLivres[tabLivres.length - 1].id + 1 }