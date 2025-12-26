import streamlit as st
import json
import pandas as pd
from datetime import datetime

# Page configuration
st.set_page_config(
    page_title="Manuel Biblique Chronologique",
    page_icon="📖",
    layout="wide",
    initial_sidebar_state="expanded"
)

# Custom CSS
st.markdown("""
<style>
    .main-header {
        font-size: 2.5rem;
        color: #1E3A8A;
        text-align: center;
        margin-bottom: 1rem;
        font-weight: bold;
    }
    .sub-header {
        font-size: 1.2rem;
        color: #475569;
        text-align: center;
        margin-bottom: 2rem;
    }
    .era-card {
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        padding: 1.5rem;
        border-radius: 10px;
        color: white;
        margin-bottom: 1rem;
    }
    .book-card {
        background: #F8FAFC;
        padding: 1rem;
        border-left: 4px solid #3B82F6;
        border-radius: 5px;
        margin-bottom: 0.5rem;
    }
    .event-card {
        background: #FEF3C7;
        padding: 1rem;
        border-left: 4px solid #F59E0B;
        border-radius: 5px;
        margin-bottom: 0.5rem;
    }
    .metric-card {
        background: #DBEAFE;
        padding: 1rem;
        border-radius: 8px;
        text-align: center;
    }
</style>
""", unsafe_allow_html=True)

# Load data
@st.cache_data
def load_data():
    books_data = {
        "Old Testament": [
            {"book": "Genèse", "author": "Moïse", "events_period": "≈4000-1805 av. J.-C.", "writing_date": "1446-1400 av. J.-C.", "genre": "Historique", "era": "Origines et Patriarches", "page": 11},
            {"book": "Job", "author": "Inconnu", "events_period": "2000-1800 av. J.-C.", "writing_date": "1400-600 av. J.-C.", "genre": "Poésie et Sagesse", "era": "Origines et Patriarches", "page": 14},
            {"book": "Exode", "author": "Moïse", "events_period": "1526-1446 av. J.-C.", "writing_date": "1440-1400 av. J.-C.", "genre": "Historique", "era": "Séjour en Égypte, Exode et Désert", "page": 15},
            {"book": "Lévitique", "author": "Moïse", "events_period": "1446-1445 av. J.-C.", "writing_date": "1445-1400 av. J.-C.", "genre": "Loi", "era": "Séjour en Égypte, Exode et Désert", "page": 18},
            {"book": "Nombres", "author": "Moïse", "events_period": "1445-1406 av. J.-C.", "writing_date": "≈1400 av. J.-C.", "genre": "Historique", "era": "Séjour en Égypte, Exode et Désert", "page": 20},
            {"book": "Deutéronome", "author": "Moïse", "events_period": "1406 av. J.-C.", "writing_date": "1406-1350 av. J.-C.", "genre": "Loi", "era": "Séjour en Égypte, Exode et Désert", "page": 21},
            {"book": "Josué", "author": "Josué", "events_period": "1406-1380 av. J.-C.", "writing_date": "1350-1200 av. J.-C.", "genre": "Historique", "era": "Conquête et Période des Juges", "page": 22},
            {"book": "Juges", "author": "Inconnu", "events_period": "1380-1050 av. J.-C.", "writing_date": "1050-1000 av. J.-C.", "genre": "Historique", "era": "Conquête et Période des Juges", "page": 24},
            {"book": "Ruth", "author": "Inconnu", "events_period": "1150-1100 av. J.-C.", "writing_date": "1000-950 av. J.-C.", "genre": "Historique", "era": "Conquête et Période des Juges", "page": 25},
            {"book": "1 Samuel", "author": "Samuel", "events_period": "1105-1010 av. J.-C.", "writing_date": "950-900 av. J.-C.", "genre": "Historique", "era": "Monarchie Unie", "page": 26},
            {"book": "2 Samuel", "author": "Samuel", "events_period": "1010-970 av. J.-C.", "writing_date": "950-900 av. J.-C.", "genre": "Historique", "era": "Monarchie Unie", "page": 28},
            {"book": "1 Chroniques", "author": "Inconnu", "events_period": "1010-970 av. J.-C.", "writing_date": "450-400 av. J.-C.", "genre": "Non-historique", "era": "Monarchie Unie", "page": 30},
            {"book": "Psaumes", "author": "Divers", "events_period": "≈1050-430 av. J.-C.", "writing_date": "1000-400 av. J.-C.", "genre": "Poésie et Sagesse", "era": "Monarchie Unie", "page": 31},
            {"book": "Proverbes", "author": "Salomon", "events_period": "970-700 av. J.-C.", "writing_date": "950-700 av. J.-C.", "genre": "Poésie et Sagesse", "era": "Monarchie Unie", "page": 33},
            {"book": "Cantique des cantiques", "author": "Salomon", "events_period": "970-930 av. J.-C.", "writing_date": "950-700 av. J.-C.", "genre": "Poésie et Sagesse", "era": "Monarchie Unie", "page": 34},
            {"book": "Ecclésiaste", "author": "Salomon", "events_period": "950 av. J.-C.", "writing_date": "950-400 av. J.-C.", "genre": "Poésie et Sagesse", "era": "Monarchie Unie", "page": 35},
            {"book": "1 Rois", "author": "Inconnu", "events_period": "970-850 av. J.-C.", "writing_date": "560-540 av. J.-C.", "genre": "Historique", "era": "Royaumes Divisés", "page": 36},
            {"book": "2 Rois", "author": "Inconnu", "events_period": "850-560 av. J.-C.", "writing_date": "560-540 av. J.-C.", "genre": "Historique", "era": "Royaumes Divisés", "page": 38},
            {"book": "2 Chroniques", "author": "Inconnu", "events_period": "970-538 av. J.-C.", "writing_date": "450-400 av. J.-C.", "genre": "Non-historique", "era": "Royaumes Divisés", "page": 39},
            {"book": "Jonas", "author": "Jonas", "events_period": "780-760 av. J.-C.", "writing_date": "760-700 av. J.-C.", "genre": "Prophétique", "era": "Royaumes Divisés", "page": 40},
            {"book": "Amos", "author": "Amos", "events_period": "760-750 av. J.-C.", "writing_date": "760-750 av. J.-C.", "genre": "Prophétique", "era": "Royaumes Divisés", "page": 41},
            {"book": "Osée", "author": "Osée", "events_period": "755-715 av. J.-C.", "writing_date": "755-715 av. J.-C.", "genre": "Prophétique", "era": "Royaumes Divisés", "page": 42},
            {"book": "Michée", "author": "Michée", "events_period": "735-700 av. J.-C.", "writing_date": "735-700 av. J.-C.", "genre": "Prophétique", "era": "Royaumes Divisés", "page": 43},
            {"book": "Ésaïe", "author": "Ésaïe", "events_period": "740-680 av. J.-C.", "writing_date": "700-540 av. J.-C.", "genre": "Prophétique", "era": "Royaumes Divisés", "page": 44},
            {"book": "Nahum", "author": "Nahum", "events_period": "663-612 av. J.-C.", "writing_date": "650-620 av. J.-C.", "genre": "Prophétique", "era": "Royaumes Divisés", "page": 46},
            {"book": "Sophonie", "author": "Sophonie", "events_period": "640-620 av. J.-C.", "writing_date": "630-620 av. J.-C.", "genre": "Prophétique", "era": "Royaumes Divisés", "page": 47},
            {"book": "Habacuc", "author": "Habacuc", "events_period": "620-600 av. J.-C.", "writing_date": "620-600 av. J.-C.", "genre": "Prophétique", "era": "Royaumes Divisés", "page": 48},
            {"book": "Jérémie", "author": "Jérémie", "events_period": "627-580 av. J.-C.", "writing_date": "627-580 av. J.-C.", "genre": "Prophétique", "era": "Royaumes Divisés", "page": 49},
            {"book": "Lamentations", "author": "Jérémie", "events_period": "586 av. J.-C.", "writing_date": "586-580 av. J.-C.", "genre": "Poésie et Sagesse", "era": "Royaumes Divisés", "page": 51},
            {"book": "Abdias", "author": "Abdias", "events_period": "586-553 av. J.-C.", "writing_date": "585-550 av. J.-C.", "genre": "Prophétique", "era": "Royaumes Divisés", "page": 52},
            {"book": "Ézéchiel", "author": "Ézéchiel", "events_period": "593-571 av. J.-C.", "writing_date": "571-560 av. J.-C.", "genre": "Prophétique", "era": "Exil à Babylone", "page": 53},
            {"book": "Daniel", "author": "Daniel", "events_period": "605-536 av. J.-C.", "writing_date": "540-530 av. J.-C.", "genre": "Prophétique", "era": "Exil à Babylone", "page": 55},
            {"book": "Esdras", "author": "Esdras", "events_period": "538-457 av. J.-C.", "writing_date": "450-400 av. J.-C.", "genre": "Historique", "era": "Retour d\'Exil", "page": 57},
            {"book": "Néhémie", "author": "Néhémie", "events_period": "445-430 av. J.-C.", "writing_date": "430-400 av. J.-C.", "genre": "Historique", "era": "Retour d\'Exil", "page": 58},
            {"book": "Esther", "author": "Inconnu", "events_period": "483-473 av. J.-C.", "writing_date": "460-430 av. J.-C.", "genre": "Historique", "era": "Retour d\'Exil", "page": 59},
            {"book": "Aggée", "author": "Aggée", "events_period": "520 av. J.-C.", "writing_date": "520 av. J.-C.", "genre": "Prophétique", "era": "Retour d\'Exil", "page": 60},
            {"book": "Zacharie", "author": "Zacharie", "events_period": "520-518 av. J.-C.", "writing_date": "518-480 av. J.-C.", "genre": "Prophétique", "era": "Retour d\'Exil", "page": 61},
            {"book": "Joël", "author": "Joël", "events_period": "500-400 av. J.-C.", "writing_date": "500-400 av. J.-C.", "genre": "Prophétique", "era": "Retour d\'Exil", "page": 63},
            {"book": "Malachie", "author": "Malachie", "events_period": "460-430 av. J.-C.", "writing_date": "460-430 av. J.-C.", "genre": "Prophétique", "era": "Retour d\'Exil", "page": 64},
        ],
        "New Testament": [
            {"book": "Matthieu", "author": "Matthieu", "events_period": "6 av. J.-C.-30 apr. J.-C.", "writing_date": "50-70 apr. J.-C.", "genre": "Évangile", "era": "Vie de Jésus", "page": 65},
            {"book": "Marc", "author": "Marc", "events_period": "26-30 apr. J.-C.", "writing_date": "55-65 apr. J.-C.", "genre": "Évangile", "era": "Vie de Jésus", "page": 66},
            {"book": "Luc", "author": "Luc", "events_period": "6 av. J.-C.-30 apr. J.-C.", "writing_date": "60-62 apr. J.-C.", "genre": "Évangile", "era": "Vie de Jésus", "page": 67},
            {"book": "Jean", "author": "Jean", "events_period": "26-30 apr. J.-C.", "writing_date": "85-95 apr. J.-C.", "genre": "Évangile", "era": "Vie de Jésus", "page": 68},
            {"book": "Actes", "author": "Luc", "events_period": "30-62 apr. J.-C.", "writing_date": "62-63 apr. J.-C.", "genre": "Historique", "era": "Période des Apôtres", "page": 69},
            {"book": "Romains", "author": "Paul", "events_period": "57 apr. J.-C.", "writing_date": "57 apr. J.-C.", "genre": "Épître", "era": "Période des Apôtres", "page": 70},
            {"book": "1 Corinthiens", "author": "Paul", "events_period": "55 apr. J.-C.", "writing_date": "55 apr. J.-C.", "genre": "Épître", "era": "Période des Apôtres", "page": 71},
            {"book": "2 Corinthiens", "author": "Paul", "events_period": "56 apr. J.-C.", "writing_date": "56 apr. J.-C.", "genre": "Épître", "era": "Période des Apôtres", "page": 72},
            {"book": "Galates", "author": "Paul", "events_period": "49 apr. J.-C.", "writing_date": "49 apr. J.-C.", "genre": "Épître", "era": "Période des Apôtres", "page": 73},
            {"book": "Éphésiens", "author": "Paul", "events_period": "60-62 apr. J.-C.", "writing_date": "60-62 apr. J.-C.", "genre": "Épître", "era": "Période des Apôtres", "page": 74},
            {"book": "Philippiens", "author": "Paul", "events_period": "61 apr. J.-C.", "writing_date": "61 apr. J.-C.", "genre": "Épître", "era": "Période des Apôtres", "page": 75},
            {"book": "Colossiens", "author": "Paul", "events_period": "60-62 apr. J.-C.", "writing_date": "60-62 apr. J.-C.", "genre": "Épître", "era": "Période des Apôtres", "page": 76},
            {"book": "1 Thessaloniciens", "author": "Paul", "events_period": "51 apr. J.-C.", "writing_date": "51 apr. J.-C.", "genre": "Épître", "era": "Période des Apôtres", "page": 77},
            {"book": "2 Thessaloniciens", "author": "Paul", "events_period": "51-52 apr. J.-C.", "writing_date": "51-52 apr. J.-C.", "genre": "Épître", "era": "Période des Apôtres", "page": 78},
            {"book": "1 Timothée", "author": "Paul", "events_period": "63-65 apr. J.-C.", "writing_date": "63-65 apr. J.-C.", "genre": "Épître", "era": "Période des Apôtres", "page": 79},
            {"book": "2 Timothée", "author": "Paul", "events_period": "66-67 apr. J.-C.", "writing_date": "66-67 apr. J.-C.", "genre": "Épître", "era": "Période des Apôtres", "page": 80},
            {"book": "Tite", "author": "Paul", "events_period": "63-65 apr. J.-C.", "writing_date": "63-65 apr. J.-C.", "genre": "Épître", "era": "Période des Apôtres", "page": 81},
            {"book": "Philémon", "author": "Paul", "events_period": "60-62 apr. J.-C.", "writing_date": "60-62 apr. J.-C.", "genre": "Épître", "era": "Période des Apôtres", "page": 82},
            {"book": "Hébreux", "author": "Inconnu", "events_period": "60-69 apr. J.-C.", "writing_date": "60-69 apr. J.-C.", "genre": "Épître", "era": "Période des Apôtres", "page": 83},
            {"book": "Jacques", "author": "Jacques", "events_period": "45-49 apr. J.-C.", "writing_date": "45-49 apr. J.-C.", "genre": "Épître", "era": "Période des Apôtres", "page": 84},
            {"book": "1 Pierre", "author": "Pierre", "events_period": "63-64 apr. J.-C.", "writing_date": "63-64 apr. J.-C.", "genre": "Épître", "era": "Période des Apôtres", "page": 85},
            {"book": "2 Pierre", "author": "Pierre", "events_period": "65-67 apr. J.-C.", "writing_date": "65-67 apr. J.-C.", "genre": "Épître", "era": "Période des Apôtres", "page": 86},
            {"book": "1 Jean", "author": "Jean", "events_period": "90-95 apr. J.-C.", "writing_date": "90-95 apr. J.-C.", "genre": "Épître", "era": "Période des Apôtres", "page": 87},
            {"book": "2 Jean", "author": "Jean", "events_period": "90-95 apr. J.-C.", "writing_date": "90-95 apr. J.-C.", "genre": "Épître", "era": "Période des Apôtres", "page": 88},
            {"book": "3 Jean", "author": "Jean", "events_period": "90-95 apr. J.-C.", "writing_date": "90-95 apr. J.-C.", "genre": "Épître", "era": "Période des Apôtres", "page": 89},
            {"book": "Jude", "author": "Jude", "events_period": "65-80 apr. J.-C.", "writing_date": "65-80 apr. J.-C.", "genre": "Épître", "era": "Période des Apôtres", "page": 90},
            {"book": "Apocalypse", "author": "Jean", "events_period": "95-96 apr. J.-C.", "writing_date": "95-96 apr. J.-C.", "genre": "Prophétique", "era": "Période des Apôtres", "page": 91},
        ]
    }

    events_data = [
        {"event": "La Création", "year": "≈4000 av. J.-C.", "description": "Dieu créa le monde en six jours", "book": "Genèse 1-2"},
        {"event": "La Chute", "year": "≈4000 av. J.-C.", "description": "Adam et Ève désobéissent à Dieu", "book": "Genèse 3"},
        {"event": "Le Déluge", "year": "≈2500 av. J.-C.", "description": "Dieu juge l\'humanité par un déluge mondial", "book": "Genèse 6-9"},
        {"event": "La Tour de Babel", "year": "≈2400 av. J.-C.", "description": "Dieu brouille les langues de l\'humanité", "book": "Genèse 11"},
        {"event": "L\'Appel d\'Abraham", "year": "≈2000 av. J.-C.", "description": "Dieu appelle Abraham et promet une grande nation", "book": "Genèse 12"},
        {"event": "L\'Exode d\'Égypte", "year": "≈1445 av. J.-C.", "description": "Moïse conduit Israël hors de l\'esclavage", "book": "Exode 12-15"},
        {"event": "Les Dix Commandements", "year": "≈1445 av. J.-C.", "description": "Dieu donne la loi au Mont Sinaï", "book": "Exode 19-20"},
        {"event": "Entrée en Canaan", "year": "≈1405 av. J.-C.", "description": "Josué conduit Israël dans la Terre Promise", "book": "Josué 1-5"},
        {"event": "Règne de David", "year": "1010-970 av. J.-C.", "description": "David établit Jérusalem comme capitale", "book": "2 Samuel"},
        {"event": "Construction du Temple", "year": "≈960 av. J.-C.", "description": "Salomon construit le Temple de Jérusalem", "book": "1 Rois 6"},
        {"event": "Division du Royaume", "year": "930 av. J.-C.", "description": "Israël se divise en deux royaumes", "book": "1 Rois 12"},
        {"event": "Chute de Samarie", "year": "722 av. J.-C.", "description": "Le royaume du Nord tombe aux Assyriens", "book": "2 Rois 17"},
        {"event": "Chute de Jérusalem", "year": "586 av. J.-C.", "description": "Babylone détruit Jérusalem et le Temple", "book": "2 Rois 25"},
        {"event": "Retour d\'Exil", "year": "538 av. J.-C.", "description": "Cyrus permet aux Juifs de retourner", "book": "Esdras 1"},
        {"event": "Naissance de Jésus", "year": "≈6-4 av. J.-C.", "description": "Le Messie naît à Bethléhem", "book": "Matthieu 1-2, Luc 2"},
        {"event": "Mort et Résurrection de Jésus", "year": "30 apr. J.-C.", "description": "Jésus meurt pour les péchés et ressuscite", "book": "Matthieu 27-28"},
        {"event": "Pentecôte", "year": "30 apr. J.-C.", "description": "Le Saint-Esprit descend sur les disciples", "book": "Actes 2"},
        {"event": "Conversion de Paul", "year": "≈35 apr. J.-C.", "description": "Saul devient Paul sur le chemin de Damas", "book": "Actes 9"},
        {"event": "Destruction du Temple", "year": "70 apr. J.-C.", "description": "Rome détruit le Second Temple", "book": "Historique"},
    ]

    return books_data, events_data

books_data, events_data = load_data()

# Initialize session state for reading progress
if "reading_progress" not in st.session_state:
    st.session_state.reading_progress = set()

# Sidebar Navigation
st.sidebar.title("📖 Navigation")
page = st.sidebar.radio("", ["🏠 Accueil", "📚 Livres Bibliques", "⏳ Ligne de Temps", "📖 Événements Clés", "✅ Progression"])

# Main Header
st.markdown('<div class="main-header">📖 Manuel Biblique Chronologique</div>', unsafe_allow_html=True)
st.markdown('<div class="sub-header">Comprendre la grande histoire de la Bible</div>', unsafe_allow_html=True)

# HOME PAGE
if page == "🏠 Accueil":
    st.markdown("---")

    col1, col2, col3 = st.columns(3)
    with col1:
        st.markdown('<div class="metric-card"><h2>66</h2><p>Livres Bibliques</p></div>', unsafe_allow_html=True)
    with col2:
        st.markdown('<div class="metric-card"><h2>19</h2><p>Événements Majeurs</p></div>', unsafe_allow_html=True)
    with col3:
        total_books = len(books_data["Old Testament"]) + len(books_data["New Testament"])
        progress_pct = int((len(st.session_state.reading_progress) / total_books) * 100)
        st.markdown(f'<div class="metric-card"><h2>{progress_pct}%</h2><p>Progression</p></div>', unsafe_allow_html=True)

    st.markdown("---")

    st.markdown("### 🎯 À propos de cette application")
    st.write("""
    Cette application numérise le **Manuel Biblique Chronologique** pour vous aider à comprendre 
    la Bible comme une GRANDE HISTOIRE, organisée chronologiquement plutôt que par genre littéraire.

    **Caractéristiques:**
    - 📖 Tous les 66 livres de la Bible avec métadonnées complètes
    - ⏳ Ligne de temps interactive de la Création à l'ère apostolique
    - 🔍 Recherche et filtrage par période, auteur, genre
    - ✅ Suivi de progression de lecture
    - 📊 Événements clés et personnages bibliques
    """)

    st.markdown("---")
    st.markdown("### 📖 Périodes Bibliques")

    eras = {
        "Ancien Testament": [
            "Origines et Patriarches",
            "Séjour en Égypte, Exode et Désert",
            "Conquête et Période des Juges",
            "Monarchie Unie",
            "Royaumes Divisés",
            "Exil à Babylone",
            "Retour d\'Exil"
        ],
        "Nouveau Testament": [
            "Vie de Jésus",
            "Période des Apôtres"
        ]
    }

    for testament, periods in eras.items():
        with st.expander(f"**{testament}** ({len(periods)} périodes)", expanded=False):
            for era in periods:
                all_books = books_data["Old Testament"] if testament == "Ancien Testament" else books_data["New Testament"]
                era_books = [b["book"] for b in all_books if b["era"] == era]
                st.write(f"• **{era}** — {len(era_books)} livres")

# BOOKS PAGE
elif page == "📚 Livres Bibliques":
    st.markdown("### 📚 Tous les Livres de la Bible")

    # Filters
    col1, col2, col3 = st.columns(3)

    with col1:
        testament_filter = st.selectbox("Testament", ["Tous", "Ancien Testament", "Nouveau Testament"])

    with col2:
        all_eras = set()
        for testament_books in books_data.values():
            for book in testament_books:
                all_eras.add(book["era"])
        era_filter = st.selectbox("Période", ["Toutes"] + sorted(list(all_eras)))

    with col3:
        all_genres = set()
        for testament_books in books_data.values():
            for book in testament_books:
                all_genres.add(book["genre"])
        genre_filter = st.selectbox("Genre", ["Tous"] + sorted(list(all_genres)))

    # Search
    search_term = st.text_input("🔍 Rechercher un livre", "")

    # Combine all books
    all_books = []
    if testament_filter in ["Tous", "Ancien Testament"]:
        for book in books_data["Old Testament"]:
            book_copy = book.copy()
            book_copy["testament"] = "Ancien Testament"
            all_books.append(book_copy)
    if testament_filter in ["Tous", "Nouveau Testament"]:
        for book in books_data["New Testament"]:
            book_copy = book.copy()
            book_copy["testament"] = "Nouveau Testament"
            all_books.append(book_copy)

    # Apply filters
    filtered_books = all_books
    if era_filter != "Toutes":
        filtered_books = [b for b in filtered_books if b["era"] == era_filter]
    if genre_filter != "Tous":
        filtered_books = [b for b in filtered_books if b["genre"] == genre_filter]
    if search_term:
        filtered_books = [b for b in filtered_books if search_term.lower() in b["book"].lower()]

    st.markdown(f"**{len(filtered_books)} livres trouvés**")
    st.markdown("---")

    # Display books
    for book in filtered_books:
        with st.container():
            st.markdown(f"""
            <div class="book-card">
                <h3>📖 {book["book"]}</h3>
                <p><strong>Auteur:</strong> {book["author"]} | <strong>Genre:</strong> {book["genre"]}</p>
                <p><strong>Période des événements:</strong> {book["events_period"]}</p>
                <p><strong>Date d\'écriture:</strong> {book["writing_date"]}</p>
                <p><strong>Ère:</strong> {book["era"]} ({book["testament"]})</p>
                <p><strong>Page du manuel:</strong> {book["page"]}</p>
            </div>
            """, unsafe_allow_html=True)

            col1, col2 = st.columns([1, 4])
            with col1:
                book_id = f"{book[\'testament\']}-{book[\'book\']}"
                if book_id in st.session_state.reading_progress:
                    if st.button("✅ Lu", key=f"read_{book_id}"):
                        st.session_state.reading_progress.remove(book_id)
                        st.rerun()
                else:
                    if st.button("📖 Marquer comme lu", key=f"unread_{book_id}"):
                        st.session_state.reading_progress.add(book_id)
                        st.rerun()

# TIMELINE PAGE
elif page == "⏳ Ligne de Temps":
    st.markdown("### ⏳ Ligne de Temps Biblique")
    st.write("Explorez l\'histoire biblique de la Création à la période apostolique")

    timeline_events = [
        {"year": -4000, "event": "La Création", "description": "Dieu créa le monde en six jours"},
        {"year": -2500, "event": "Le Déluge", "description": "Noé et l\'arche"},
        {"year": -2000, "event": "Abraham", "description": "L\'appel d\'Abraham"},
        {"year": -1445, "event": "L\'Exode", "description": "Moïse libère Israël d\'Égypte"},
        {"year": -1405, "event": "Conquête de Canaan", "description": "Josué entre en Terre Promise"},
        {"year": -1050, "event": "Premier Roi", "description": "Saül devient roi"},
        {"year": -1010, "event": "Roi David", "description": "David règne sur Israël"},
        {"year": -970, "event": "Roi Salomon", "description": "Construction du Temple"},
        {"year": -930, "event": "Royaume Divisé", "description": "Israël se divise en deux"},
        {"year": -722, "event": "Chute du Nord", "description": "Samarie tombe"},
        {"year": -586, "event": "Chute de Jérusalem", "description": "Exil à Babylone"},
        {"year": -538, "event": "Retour d\'Exil", "description": "Cyrus libère les Juifs"},
        {"year": -5, "event": "Naissance de Jésus", "description": "Le Messie naît"},
        {"year": 30, "event": "Crucifixion & Résurrection", "description": "Jésus meurt et ressuscite"},
        {"year": 30, "event": "Pentecôte", "description": "Naissance de l\'Église"},
        {"year": 35, "event": "Paul", "description": "Conversion de Paul"},
        {"year": 70, "event": "Destruction du Temple", "description": "Rome détruit Jérusalem"},
    ]

    # Create timeline visualization
    df_timeline = pd.DataFrame(timeline_events)

    st.markdown("---")
    for event in timeline_events:
        year_display = f"{abs(event[\'year\'])} av. J.-C." if event["year"] < 0 else f"{event[\'year\']} apr. J.-C."
        st.markdown(f"""
        <div class="event-card">
            <h4>📅 {year_display}: {event["event"]}</h4>
            <p>{event["description"]}</p>
        </div>
        """, unsafe_allow_html=True)

# EVENTS PAGE
elif page == "📖 Événements Clés":
    st.markdown("### 📖 Événements Clés de la Bible")

    for event in events_data:
        st.markdown(f"""
        <div class="event-card">
            <h3>🔥 {event["event"]}</h3>
            <p><strong>📅 Date:</strong> {event["year"]}</p>
            <p><strong>📖 Référence:</strong> {event["book"]}</p>
            <p>{event["description"]}</p>
        </div>
        """, unsafe_allow_html=True)

# PROGRESS PAGE
elif page == "✅ Progression":
    st.markdown("### ✅ Votre Progression de Lecture")

    total_books = len(books_data["Old Testament"]) + len(books_data["New Testament"])
    books_read = len(st.session_state.reading_progress)
    progress_pct = (books_read / total_books) * 100

    st.progress(progress_pct / 100)
    st.markdown(f"**{books_read} / {total_books} livres lus ({progress_pct:.1f}%)**")

    st.markdown("---")

    if books_read > 0:
        st.markdown("### 📚 Livres Lus")
        for book_id in st.session_state.reading_progress:
            testament, book_name = book_id.split("-", 1)
            st.markdown(f"✅ **{book_name}** ({testament})")
    else:
        st.info("Vous n\'avez pas encore marqué de livres comme lus. Commencez votre parcours dans l\'onglet \'Livres Bibliques\'!")

    st.markdown("---")

    if st.button("🔄 Réinitialiser la progression"):
        st.session_state.reading_progress = set()
        st.success("Progression réinitialisée!")
        st.rerun()

# Footer
st.markdown("---")
st.markdown("""
<div style="text-align: center; color: #64748B; padding: 2rem;">
    <p>📖 Manuel Biblique Chronologique Digital • Créé avec ❤️ et Streamlit</p>
    <p>"Que le Manuel Chronologique de la Bible soit une bénédiction dans ta vie!"</p>
</div>
""", unsafe_allow_html=True)
