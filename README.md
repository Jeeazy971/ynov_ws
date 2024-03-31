# Projet Ynov Web Services

## Description

Ce projet implémente une API REST pour gérer des informations sur des masques de protection. Il utilise Node.js, Express pour le serveur web, Sequelize comme ORM pour PostgreSQL, et Mongoose pour MongoDB. L'API permet de créer, lire, mettre à jour, et supprimer des données sur les masques. Elle inclut également une documentation interactive avec Swagger UI.

## Architecture du Projet

-   `src/` : Contient le code source du projet.
    -   `config/` : Configuration de la base de données et autres configurations globales.
    -   `controllers/` : Logique de contrôle entre les modèles et les vues.
    -   `models/` : Modèles Sequelize pour PostgreSQL et modèles Mongoose pour MongoDB.
    -   `routes/` : Définition des routes de l'API.
    -   `services/` : Services pour encapsuler la logique métier.
    -   `index.ts` : Point d'entrée de l'application.
-   `swagger/` : Contient le fichier de configuration pour Swagger UI.

## Configuration du Projet

1. Clonez le dépôt :

    ```
    git clone https://github.com/Jeeazy971/ynov_ws.git
    ```

2. Installez les dépendances :

    ```
    cd ynov_ws
    npm install
    ```

3. Configurez les variables d'environnement :
   Créez un fichier `.env` à la racine du projet et ajustez les valeurs selon votre environnement.

    ```
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

4. Lancez le projet :
    ```
    npm run dev
    ```

## Tests avec Swagger UI

Une fois le serveur lancé, vous pouvez accéder à la documentation interactive de l'API et tester les différentes routes en naviguant vers :

```
http://localhost:3000/api-docs
```

Utilisez Swagger UI pour envoyer des requêtes à l'API et voir les réponses en temps réel.

Ou sur le lien suivant:

```
https://ynov-ws.onrender.com/api-docs/
```

## Contributions

Pour contribuer au projet, veuillez suivre le processus standard de Pull Request :

1. Forkez le dépôt.
2. Créez votre branche de fonctionnalité (`git checkout -b feature/AmazingFeature`).
3. Commitez vos changements (`git commit -m 'Add some AmazingFeature'`).
4. Poussez vers la branche (`git push origin feature/AmazingFeature`).
5. Ouvrez une Pull Request.

## Licence

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails.
