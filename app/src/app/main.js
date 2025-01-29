// Olivier Nadeau - IFT1142 Hiver 2025
// App.js - 29 Janvier

// TODO:
// - Revoir affichage 
import * as gestionnaire from './modules/gestions_livre.js';
import { question } from 'readline-sync';

const menu = () => {
    let choix;
    do {
        console.log('\n     GESTION DES LIVRES');
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
    do {
        choix = menu();
        switch (choix) {
            case 1: // Lister tous les livres
                break;
            case 2: // Ajouter un livre
                break;
            case 3: // Modifier un livre
                break;
            case 4: // Supprimer un livre
                break;
            case 5: // Rechercher un livre
                sousMenu();
                break;

            default:    // Choix non compris
                console.log('Choix incorrect. Réassayer');
                break;
        }
    } while (choix != 6)
    console.log('Au revoir !');
}

main();