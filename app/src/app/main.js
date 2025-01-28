// Olivier Nadeau - IFT1142 Hiver 2025
// App.js - 11 Janvier

import { question } from 'readline-sync';
import { tabLivres as livres } from './modules/data/livres.js';

function main() {
    let choix;
    do {
        choix = menu();
        switch (choix) {
            case 1:
                break;
            case 2:
                break;
            case 3:
                break;
            case 4:
                break;
            case 5:
                break;

            default:
                console.log('Choix incorrect. Réassayer');
                break;
        }
    } while (choix != 6)
    console.log('Au revoir !');
}

const menu = () => {
    let choix;
    do {
        console.log('\n         GESTION DES LIVRES');
        console.log('   1. Lister tous les livres');
        console.log('   2. Ajouter un livre');
        console.log('   3. Modifier un livre');
        console.log('   4. Supprimer un livre');
        console.log('   5. Rechercher des livres');
        console.log('   6. Quitter');

        choix = parseInt(question('Entrez votre choix [1-6] : '));
    } while (choix < 0 || choix > 6);
    return choix;
}

main();