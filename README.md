# 🛍️ Next.js Checkout Page – Intégration Stripe

Bienvenue dans ce projet **Next.js**, conçu avec efficacité grâce à [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app). 🚀

## 🛒 Description du projet

Ce projet est une **one-page moderne et responsive**, développée dans le cadre d'un exercice technique. L'objectif était de concevoir une **page de checkout** fonctionnelle, basée sur un modèle prédéfini isnpirée des plus grandes plateformes d'e-commerce.

### 💳 Paiement sécurisé avec Stripe

L'intégration du système de paiement est gérée via [**Stripe**](https://stripe.com/fr), en **mode Sandbox**. Cela signifie que vous pouvez tester des transactions sans risque, sans aucun impact financier réel. Vous pouvez retrouver plus bas comment faire un test de paiement.

> **⚠️ AUCUN VRAI PAIEMENT NE SERA EFFECTUÉ !**

## 🚀 Installation et Lancement

### Prérequis
Avant toute installation, il est indispensable d'avoir installé :
- [Node.js](https://nodejs.org/) (version recommandée : LTS)
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)

### 📦 Installation du projet
1. **Cloner le dépôt**
   ```bash
   git clone https://github.com/Zouwi/checkout-page.git
   ```

2. **Se déplacer dans le dossier du projet**
    ```bash
    cd checkout-page
    ```

3. **installer les dépendances**
    ```bash
    npm install
    ```

ou

    ```bash
    yarn install
    ```

### ▶️ Lancer le projet en mode développement
    ```bash
    npm run dev
    ```

ou

    ```bash
    yarn dev
    ```

Le projet sera accessible sur [http://localhost:3000](http://localhost:3000)

### 🏗️ Build et exécution en production
1. **Générer le build**
    ```bash
    npm run build
    ```

2. **Lancer en mode production**
    ```bash
    npm start
    ```
## 💳 Tester le paiement avec Stripe en mode test

### Obtenir les clés API Stripe
1. Rendez-vous sur [Stripe](https://stripe.com/fr) puis créez un compte.
1. Déplacez vous dans [Stripe Dashboard](https://dashboard.stripe.com/test/apikeys).
2. Récupérez votre **clé secrète** (`SK_TEST`) et votre **clé publique** (`PK_TEST`).
3. Ajoutez ces clés à un fichier `.env.local` à la racine du projet.

    ```env
    NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_xxxx
    STRIPE_SECRET_KEY=sk_test_xxxx
    ```
### Tester le paiement
Stripe propose des cartes de test pour simuler des transactions.
- **Numéro de carte (Visa test)** : 4242 4242 4242 4242
- **Date d'expiration** : Une date future (ex: 12/34)
- **CVC/CVV** : Un nombre aléatoire (ex: 123)

Vous pouvez tester d'autres scénarios avec des cartes spécifiques disponibles dans la document officielle de Stripe : [Stripe Cards for Testing](https://docs.stripe.com/testing#international-cards).

