# Gestion de Bibliothèque

Ce projet est une application de gestion de bibliothèque développée avec React, TypeScript et Tailwind CSS. Il permet de gérer une collection de livres, d'emprunter et de retourner des livres, ainsi que d'ajouter, modifier et supprimer des livres.

## Fonctionnalités

- **Afficher la collection de livres** : Voir tous les livres disponibles dans la bibliothèque.
- **Emprunter un livre** : Marquer un livre comme emprunté et définir une date limite de retour.
- **Retourner un livre** : Marquer un livre comme retourné et le rendre disponible à nouveau.
- **Ajouter un livre** : Ajouter un nouveau livre à la collection.
- **Modifier un livre** : Mettre à jour les informations d'un livre existant.
- **Supprimer un livre** : Retirer un livre de la collection.

## Installation

1. Clonez le dépôt :
    ```sh
    git clone <URL_DU_DEPOT>
    cd project-bolt-sb1-pfmp8a
    ```

2. Installez les dépendances :
    ```sh
    npm install
    ```

3. Démarrez le serveur de développement :
    ```sh
    npm run dev
    ```

## Structure du Projet

- **src/domain/entities** : Contient les entités du domaine, comme `Book`.
- **src/domain/repositories** : Contient les interfaces des dépôts, comme `BookRepository`.
- **src/domain/usecases** : Contient les cas d'utilisation, comme `BorrowBookUseCase`, `ReturnBookUseCase`, etc.
- **src/infrastructure/repositories** : Contient les implémentations des dépôts, comme `InMemoryBookRepository`.
- **src/presentation/components** : Contient les composants React, comme `BookCard`, `BookList`, `BookForm`.
- **src** : Contient le point d'entrée principal de l'application (`App.tsx`) et les configurations.

## Utilisation

### Emprunter un Livre

Pour emprunter un livre, cliquez sur le bouton "Emprunter" sur la carte du livre. Si le livre est disponible, il sera marqué comme emprunté avec une date limite de retour de 14 jours.

### Retourner un Livre

Pour retourner un livre, cliquez sur le bouton "Retourner" sur la carte du livre. Si le livre est actuellement emprunté, il sera marqué comme disponible à nouveau.

### Ajouter un Livre

Pour ajouter un nouveau livre, cliquez sur le bouton "Ajouter un Livre" en haut de la page. Remplissez le formulaire et soumettez-le.

### Modifier un Livre

Pour modifier un livre existant, cliquez sur le bouton "Modifier" sur la carte du livre. Mettez à jour les informations dans le formulaire et soumettez-le.

### Supprimer un Livre

Pour supprimer un livre, cliquez sur le bouton "Supprimer" sur la carte du livre. Confirmez la suppression dans la boîte de dialogue.

## Configuration

### ESLint

Le projet utilise ESLint pour le linting. La configuration se trouve dans `eslint.config.js`.

### TypeScript

Les configurations TypeScript se trouvent dans `tsconfig.json`, `tsconfig.app.json` et `tsconfig.node.json`.

### Tailwind CSS

Le projet utilise Tailwind CSS pour le style. La configuration se trouve dans `tailwind.config.js`.

## Déploiement

Pour construire le projet pour la production, exécutez :
```sh
npm run build
```

Pour prévisualiser la build de production, exécutez :
```sh
npm run preview
```

## Licence

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails.
