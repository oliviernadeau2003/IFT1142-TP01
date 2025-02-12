
//* Fonctions CRUD -

import { question } from "readline-sync";

//* Read
export const afficherLivres = (tabLivres, categorie) => {

    if (!categorie) {
        console.log('\nLISTE DES LIVRES');
        console.log('ID   Titre              IdAuteur Année  Pages   Catégorie');
    } else {
        console.log(`\nLISTE DES LIVRES DE LA CATÉGORIE ${categorie.toUpperCase()}`);
        console.log('ID   Titre              IdAuteur Année  Pages');
    }
    console.log('-----------------------------------------------------------------------------------------');

    if (!categorie) {
        tabLivres.forEach((livre) => {
            console.log(`${livre.id} ${livre.titre} ${livre.idAuteur} ${livre.annee} ${livre.pages} ${livre.categorie}`);
        });
    } else {
        tabLivres.forEach((livre) => {
            console.log(`${livre.id} ${livre.titre} ${livre.idAuteur} ${livre.annee} ${livre.pages}`);
        });
    }

    console.log('-----------------------------------------------------------------------------------------');
    console.log(`\nNombre de livres : ${tabLivres.length}`);
};

//* Create
export const ajouterLivre = (tabLivres) => {

    console.log('\nEntrée les données du nouveau livre :');
    let id = tabLivres[tabLivres.length - 1].id + 1;
    let titre = question('Titre : ');
    let idAuteur = question('idAuteur : ');
    let annee = question('Année : ');
    let pages = question('Pages : ');
    let categorie = question('Catégorie : ');

    const nouveauLivre = {
        id: parseInt(id),
        titre: titre,
        idAuteur: parseInt(idAuteur),
        annee: parseInt(annee),
        pages: parseInt(pages),
        categorie: categorie
    }

    tabLivres.push(nouveauLivre);
    console.log('\nLivre ajouté avec succès');
}

//* Update
export const modifierLivre = (tabLivres) => {
    let idLivre = parseInt(question('\nId du livre à modifier : '));
    let indexLivre = tabLivres.findIndex((livre) => livre.id === idLivre);

    if (indexLivre === -1) {
        console.log('\nLivre introuvable.');
        return;
    }

    let livre = tabLivres[indexLivre]
    afficherDetailsLivre(livre);

    console.log('\n* Entrez une nouvelle valeur ou appuyez sur <Entrée> pour conserver la valeur actuelle. *\n');

    let titre = question(`Titre (${livre.titre}) : `);
    let idAuteur = parseInt(question(`idAuteur (${livre.idAuteur}): `));
    let annee = parseInt(question(`Année (${livre.annee}): `));
    let pages = parseInt(question(`Pages (${livre.pages}): `));
    let categorie = question(`Catégorie (${livre.categorie}): `);

    livre.titre = titre || livre.titre;
    livre.idAuteur = idAuteur || livre.idAuteur;
    livre.annee = annee || livre.annee;
    livre.pages = pages || livre.pages;
    livre.categorie = categorie || livre.categorie;

    console.log('\nDonnées modifier avec succès');
}

//* Delete
export const supprimerLivre = (tabLivres) => {
    let idLivre = parseInt(question('\nId du livre à supprimer : '));
    let indexLivre = tabLivres.findIndex((livre) => livre.id === idLivre);

    if (indexLivre === -1) {
        console.log('\nLivre introuvable.');
        return;
    }

    let livre = tabLivres[indexLivre]
    afficherDetailsLivre(livre);

    console.log('\nVoulez-vous vraiment supprimer ce livre ?');

    let choix = question("\nVotre choix (O - N) : ");
    if (choix.toUpperCase() === 'N') {
        console.log('\nSuppression annulée');
        return;
    }

    tabLivres.splice(indexLivre, 1);
    console.log('\nLivre supprimer avec succès');
}

// * Fin des fonctions CRUD -

// * Recherche
export const rechercherParCategorie = (tabLivres) => {
    let categorie = question('\nEntrez la catégorie à afficher : ');
    let resultat = tabLivres.filter((livre) => livre.categorie.localeCompare(categorie) === 0);
    afficherLivres(resultat, categorie);
}

export const rechercherParAnnee = (tabLivres) => {
    let annee = question('\nEntrez l\'année à afficher : ');
    let resultat = tabLivres.filter((livre) => livre.annee === parseInt(annee));
    afficherLivres(resultat);
}

export const rechercherParAuteur = (tabLivres) => {
    let idAuteur = question('\nEntrez l\'ID de l\'auteur à afficher : ');
    let resultat = tabLivres.filter((livre) => livre.idAuteur === parseInt(idAuteur));
    afficherLivres(resultat);
}

// * Autres -
export const trouverProchainId = (tabLivres) => { return tabLivres[tabLivres.length - 1].id + 1 }

const afficherDetailsLivre = (livre) => {
    console.log("\nInformations du livre :");
    for (let prop in livre) {
        console.log(`${prop} : ${livre[prop]}`);
    }
};