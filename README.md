
---

# Ynov Web Services Project

Ce projet est une API REST conçue avec Node.js et Express, utilisant MongoDB comme base de données et intégrant Swagger pour la documentation de l'API. Il permet de gérer des "masques" et des "entrées" en fournissant des opérations CRUD pour chaque entité.

## Technologies Utilisées

- **Node.js** : Environnement d'exécution JavaScript côté serveur.
- **Express** : Framework pour la création d'applications web et API.
- **MongoDB** : Base de données NoSQL orientée documents.
- **Mongoose** : Bibliothèque de modélisation d'objets MongoDB pour Node.js.
- **Swagger** : Outil de documentation d'APIs pour générer une documentation interactive.

## Structure du Projet

Le projet est structuré comme suit :

```
ynov_ws/
│
├── src/
│   ├── config/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── services/
│   └── index.ts
├── .gitignore
├── package.json
├── tsconfig.json (si TypeScript est utilisé)
└── README.md
```

## Installation

Pour configurer le projet localement, suivez ces étapes :

1. Clonez le dépôt Git :
   ```bash
   git clone https://github.com/Jeeazy971/ynov_ws.git
   ```

2. Naviguez dans le dossier du projet :
   ```bash
   cd ynov_ws
   ```

3. Installez les dépendances :
   ```bash
   npm install
   ```

## Démarrage du Projet

Pour démarrer le serveur :

```bash
npm start
```

Si vous développez et souhaitez que le serveur se recharge automatiquement à chaque modification de fichier, utilisez :

```bash
npm run dev
```

## Utilisation de Swagger UI

Une fois le serveur démarré, accédez à Swagger UI pour tester l'API et voir la documentation interactive :

```
http://localhost:3000/api-docs
```

Dans Swagger UI, vous pouvez :

- Voir la liste de tous les points de terminaison disponibles.
- Tester les opérations CRUD en envoyant des requêtes directement depuis l'interface.
- Voir les détails des requêtes et des réponses, y compris les exemples de corps de requête et les schémas de réponse.

## Fonctionnalités

- **CRUD Masques** : Permet de créer, lire, mettre à jour, et supprimer des masques.
- **CRUD Entrées** : Permet de créer, lire, mettre à jour, et supprimer des entrées associées à des masques.

---