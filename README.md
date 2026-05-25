# Manuel Biblique Chronologique

Application web interactive du **Manuel Biblique Chronologique** : exploration des 66 livres de la Bible dans l'ordre des événements, avec chronologie interactive, périodes, anecdotes "Le saviez-vous?" et accès aux 106 pages originales du manuel.

## ✨ Fonctionnalités

- **Accueil** avec statistiques et cartes des 13 périodes
- **Chronologie** verticale interactive (de la Création à l'Apocalypse)
- **Périodes** : 12 grandes époques bibliques + intertestamentaire
- **Livres** : 66 livres avec filtres par catégorie, drawer détaillé
- **Pages du manuel** : galerie des 106 pages originales + lightbox
- **Le saviez-vous ?** : 18 anecdotes remarquables
- **Recherche globale** insensible aux accents
- **Mode clair/sombre** persistant
- Responsive mobile

## 🏗️ Stack

- HTML/CSS/JS vanilla (aucune dépendance)
- 100% statique — déployable n'importe où

## 🚀 Lancer localement

```bash
python3 -m http.server 8765
# Puis ouvrir http://127.0.0.1:8765
```

## 🌐 Déploiement sur DigitalOcean (Apache, sous-chemin /bible)

### 1. Pousser le code sur GitHub

```bash
# Depuis la machine locale
cd /Users/rdefoundoux/Documents/bible
git add -A
git commit -m "Initial commit: Manuel Biblique Chronologique"
git remote add origin git@github.com:rdefoundoux/bible-chronologique.git
git branch -M main
git push -u origin main
```

### 2. Sur le droplet

```bash
ssh root@159.203.34.191

# Cloner dans /var/www/html/bible
cd /var/www/html
git clone https://github.com/rdefoundoux/bible-chronologique.git bible
chown -R www-data:www-data bible
```

### 3. (Si nécessaire) Désactiver le rewriting WordPress sur /bible

Si l'app ne s'affiche pas correctement (WP intercepte les URLs), ajouter ce `.htaccess` dans `/var/www/html/bible/` :

```apache
# /var/www/html/bible/.htaccess
RewriteEngine Off
DirectoryIndex index.html
```

(Ce fichier est déjà inclus dans ce repo.)

### 4. Accès

L'app est accessible immédiatement : **http://159.203.34.191/bible/**

### 5. Mises à jour

```bash
ssh root@159.203.34.191
cd /var/www/html/bible
git pull
```

## 📁 Structure

```
bible/
├── index.html              # Page principale
├── css/styles.css          # Design biblique moderne
├── js/data.js              # Données structurées (livres, périodes, timeline)
├── js/app.js               # Logique de l'app
├── assets/
│   ├── pages/              # 106 pages haute résolution (JPEG)
│   └── thumbs/             # 106 miniatures
├── .htaccess               # Config Apache (désactive WP rewrite sur /bible)
└── README.md
```

## 📜 Source

Manuel Biblique Chronologique (PDF). Versets : Bible Segond 21 (S21).
