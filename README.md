# Projet Ynov Web Services

## Prérequis

Avant de commencer, assurez-vous que vous avez installé les éléments suivants sur votre système :
- Node.js (version 14 ou supérieure)
- npm (généralement inclus avec Node.js)
- PostgreSQL (pour la base de données relationnelle)
- MongoDB (pour la base de données non relationnelle)

Vous pouvez vérifier les versions installées en exécutant les commandes suivantes dans votre terminal :
```bash
node --version
npm --version
psql --version
mongo --version
```

## Description

Ce projet implémente une API REST pour la gestion des informations relatives aux masques de protection. Il est construit avec Node.js et Express pour le serveur web, Sequelize comme ORM pour interagir avec PostgreSQL, et Mongoose pour MongoDB. L'API offre des fonctionnalités de création, lecture, mise à jour, et suppression (CRUD) des données sur les masques. Une documentation interactive réalisée avec Swagger UI est également incluse.

## Architecture du Projet

- `src/`: Dossier contenant le code source du projet.
    - `config/`: Configurations de la base de données et autres paramètres globaux.
    - `controllers/`: Contrôleurs pour gérer la logique entre les modèles de données et les vues.
    - `models/`: Définitions des modèles de données pour Sequelize (PostgreSQL) et Mongoose (MongoDB).
    - `routes/`: Définitions des routes pour l'API.
    - `services/`: Services pour encapsuler la logique métier.
    - `index.ts`: Point d'entrée principal de l'application.
- `swagger/`: Contient le fichier de configuration pour Swagger UI.

## Configuration du Projet

1. Clonez le dépôt :

    ```bash
    git clone https://github.com/Jeeazy971/ynov_ws.git
    ```

2. Installez les dépendances :

    ```bash
    cd ynov_ws
    npm install
    ```

3. Configurez les variables d'environnement en créant un fichier `.env` à la racine du projet avec le contenu suivant, adapté à votre configuration :

    ```plaintext
    # PostgreSQL
    DB_HOST=localhost
    DB_PORT=5432
    DB_DATABASE=your_database
    DB_USERNAME=your_username
    DB_PASSWORD=your_password
    DB_DIALECT=postgres

    # MongoDB
    MONGO_URI=your_mongodb_uri
    ```

4. Lancez le projet avec la commande suivante :

    ```bash
    npm run dev
    ```

## Tests avec Swagger UI

Après avoir lancé le serveur, accédez à la documentation interactive de l'API et testez les différentes routes via :

- En local :

    ```
    http://localhost:3000/api-docs
    ```

- En production :

    ```
    https://ynov-ws.onrender.com/api-docs/
    ```

Utilisez Swagger UI pour exécuter des requêtes contre l'API et visualiser les réponses en direct.

## Contributions

Pour contribuer à ce projet, veuillez suivre le processus standard pour les Pull Requests :

1. Forkez le dépôt.
2. Créez votre branche pour la nouvelle fonctionnalité (`git checkout -b feature/NomDeLaFonctionnalité`).
3. Committez vos changements (`git commit -am 'Ajout de la nouvelle fonctionnalité'`).
4. Poussez la branche (`git push origin feature/NomDeLaFonctionnalité`).
5. Créez une Pull Request.

## Licence

Ce projet est distribué sous la Licence MIT. Consultez le fichier `LICENSE` pour plus d'informations.
