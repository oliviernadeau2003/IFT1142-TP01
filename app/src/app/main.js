// Olivier Nadeau - IFT1142 Hiver 2025
// App.js - 3 Février

// TODO:
// - Revoir affichage *

import { afficherLivres, ajouterLivre, modifierLivre } from './modules/services.js';
import { tabLivres as livres } from '../app/modules/data/livres.js';
import { question } from 'readline-sync';

const menu = () => {
    let choix;
    do {
        console.log('\n\n     GESTION DES LIVRES');
        console.log('   1. Lister tous les livres');
        console.log('   2. Ajouter un livre');
        console.log('   3. Modifier un livre');
        console.log('   4. Supprimer un livre');
        console.log('   5. Rechercher des livres');
        console.log('   6. Quitter');

        choix = parseInt(question('Entrez votre choix [1-6] : '));
    } while (choix < 1 || choix > 6);
    return choix;
};

const sousMenu = () => {
    let choix;
    do {
        console.log('\n     RECHERCHER DES LIVRES');
        console.log('   1. Catégorie');
        console.log('   2. Année');
        console.log('   3. Auteur');
        console.log('   4. Quitter');

        choix = parseInt(question('Entrez votre choix [1-4] : '));
    } while (choix < 1 || choix > 4);
    return choix;
}

function main() {
    let choix;
    let souschoix;
    do {
        choix = menu();
        switch (choix) {
            case 1: // Lister tous les livres
                afficherLivres(livres);
                break;
            case 2: // Ajouter un livre
                ajouterLivre(livres);
                break;
            case 3: // Modifier un livre
                modifierLivre(livres);
                break;
            case 4: // Supprimer un livre
                break;
            case 5: // Rechercher un livre
                do souschoix = sousMenu();
                while (souschoix !== 4);
                break;
            case 6: // Quitter
                console.log('Au revoir !');
                break;

            default:    // Choix non compris
                console.log('Choix incorrect. Réassayer');
                break;
        }
    } while (choix != 6);
}

main();