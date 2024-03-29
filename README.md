
# Documentation du Projet Node.js avec MongoDB et PostgreSQL

Ce projet illustre comment construire une application Node.js utilisant Express pour interagir avec MongoDB et PostgreSQL. Il couvre la configuration des bases de données, la création d'une API RESTful, et l'intégration de Swagger pour la documentation de l'API.

## Configuration de l'Environnement

Assurez-vous que Node.js est installé sur votre système. Vous aurez également besoin de MongoDB et PostgreSQL installés et en cours d'exécution, que ce soit localement ou via des services cloud.

### Dépendances

Exécutez la commande suivante pour installer les dépendances nécessaires :

```bash
npm install express mongoose pg swagger-ui-express yamljs
```

## Structure du Projet

```
projet/
│
├── db/
│   ├── mongodb/
│   │   ├── mongodbConnect.js
│   │   ├── mongodbModels.js
│   │   └── mongodbOperations.js
│   │
│   └── postgres/
│       ├── postgresConnect.js
│       ├── postgresModels.js
│       └── postgresOperations.js
│
├── routes/
│   ├── mongodbRoutes.js
│   └── postgresRoutes.js
│
├── controllers/
│   ├── mongodbController.js
│   └── postgresController.js
│
├── app.js
├── package.json
└── README.md
```

## Configuration de la Base de Données

### MongoDB

1. **Connexion à MongoDB** : Configurez `db/mongodb/mongodbConnect.js` avec vos paramètres de connexion MongoDB.
2. **Modèles MongoDB** : Définissez vos modèles de données dans `db/mongodb/mongodbModels.js`.

### PostgreSQL

1. **Connexion à PostgreSQL** : Configurez `db/postgres/postgresConnect.js` avec vos paramètres de connexion PostgreSQL.
2. **Modèles PostgreSQL** : Définissez vos tables et relations dans `db/postgres/postgresModels.js`.

## API Endpoints

Les endpoints suivants sont configurés pour MongoDB et PostgreSQL :

### MongoDB

- **Créer un Masque** : `POST /api/mongodb/masks`
- **Récupérer Tous les Masques** : `GET /api/mongodb/masks`
- **Récupérer un Masque par ID** : `GET /api/mongodb/masks/:id`
- **Mettre à Jour un Masque** : `PUT /api/mongodb/masks/:id`
- **Supprimer un Masque** : `DELETE /api/mongodb/masks/:id`

### PostgreSQL

- **Créer un Masque** : `POST /api/postgres/masks`
- **Récupérer Tous les Masques** : `GET /api/postgres/masks`
- **Récupérer un Masque par ID** : `GET /api/postgres/masks/:id`
- **Mettre à Jour un Masque** : `PUT /api/postgres/masks/:id`
- **Supprimer un Masque** : `DELETE /api/postgres/masks/:id`

## Swagger API Documentation

La documentation de l'API est disponible à `/api-docs` grâce à l'intégration de Swagger UI.

## Démarrage du Serveur

Pour démarrer le serveur, exécutez :

```bash
node app.js
```

Le serveur sera accessible sur `http://localhost:3000`, et la documentation Swagger UI sur `http://localhost:3000/api-docs`.

---

# ynov_ws
