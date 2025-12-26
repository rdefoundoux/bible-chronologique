# Manuel Biblique Chronologique - Application Web

Application web interactive pour explorer la Bible de manière chronologique.

## 🚀 Déploiement sur Streamlit Cloud (GRATUIT)

### Étape 1: Créer un compte GitHub
1. Allez sur https://github.com
2. Créez un compte gratuit si vous n'en avez pas

### Étape 2: Créer un nouveau repository
1. Cliquez sur "New repository"
2. Nom: `bible-chronologique`
3. Public ou Private (votre choix)
4. Cliquez "Create repository"

### Étape 3: Uploader les fichiers
1. Cliquez sur "uploading an existing file"
2. Glissez ces fichiers:
   - streamlit_app.py
   - requirements.txt
   - README.md
3. Cliquez "Commit changes"

### Étape 4: Déployer sur Streamlit Cloud
1. Allez sur https://share.streamlit.io
2. Connectez-vous avec votre compte GitHub
3. Cliquez "New app"
4. Sélectionnez:
   - Repository: bible-chronologique
   - Branch: main
   - Main file: streamlit_app.py
5. Cliquez "Deploy!"

⏱️ **Temps de déploiement: 2-3 minutes**

Votre app sera accessible via une URL publique gratuite!

## 📱 Utilisation

### Pages disponibles:
- **🏠 Accueil**: Vue d'ensemble et statistiques
- **📚 Livres Bibliques**: Tous les 66 livres avec recherche/filtres
- **⏳ Ligne de Temps**: Timeline chronologique interactive
- **📖 Événements Clés**: 19 événements majeurs de la Bible
- **✅ Progression**: Suivez votre progression de lecture

### Fonctionnalités:
✅ Recherche par nom de livre
✅ Filtrage par testament, période, genre
✅ Suivi de progression de lecture
✅ Interface bilingue (Français)
✅ Design responsive mobile

## 🛠️ Développement Local

```bash
pip install -r requirements.txt
streamlit run streamlit_app.py
```

L'app s'ouvrira automatiquement dans votre navigateur sur http://localhost:8501

## 📊 Données

- **66 livres bibliques** avec métadonnées complètes
- **19 événements majeurs** de la Création à la période apostolique
- **9 périodes historiques** de l'Ancien et Nouveau Testament
- Organisation **chronologique** (non par genre littéraire)

## 💡 Basé sur

Manuel Biblique Chronologique - Version illustrée
