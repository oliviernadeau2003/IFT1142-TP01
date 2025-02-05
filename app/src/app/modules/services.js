
//* Fonctions CRUD -

import { question } from "readline-sync";

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
export const ajouterLivre = (tabLivres) => {

    console.log('Entrée les données du nouveau livre :');
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
    console.log('Livre ajouté avec succès');
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
    detailsLivre(livre);

    console.log('\n* Entrez une nouvelle valeur ou appuyez sur <Entrée> pour conserver la valeur actuelle. *\n');

    let titre = question(`Titre (${livre.titre}) : `);
    let idAuteur = parseInt(question(`idAuteur (${livre.idAuteur}): `));
    let annee = parseInt(question(`Année (${livre.annee}): `));
    let pages = parseInt(question(`Pages (${livre.pages}): `));
    let categorie = question(`Catégorie (${livre.categorie}): `);
}

//* Delete
export const supprimerLivre = (tabLivres) => { }

// * Autres -
// export const trouverProchainId = (tabLivres) => { return tabLivres[tabLivres.length - 1].id + 1 }

const detailsLivre = (livre) => {
    console.log("\nInformations du livre :");
    for (let prop in livre) {
        console.log(`${prop} : ${livre[prop]}`);
    }
};