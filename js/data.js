// ============================================================
// MANUEL BIBLIQUE CHRONOLOGIQUE - Données structurées
// Source: Manuel Biblique Chronologique (PDF)
// ============================================================

const BIBLE_DATA = {

  periodes: {
    "AT": [
      {
        id: "origines",
        nom: "Origines et Patriarches",
        testament: "AT",
        debut: -4000, fin: -1805,
        couleur: "#8B6F47",
        description: "De la création du monde aux patriarches Abraham, Isaac, Jacob et Joseph.",
        livres: ["genese", "job"]
      },
      {
        id: "egypte_exode",
        nom: "Séjour en Égypte, Exode et Désert",
        testament: "AT",
        debut: -1526, fin: -1406,
        couleur: "#C25E3C",
        description: "Libération d'Israël de l'esclavage en Égypte et traversée du désert.",
        livres: ["exode", "levitique", "nombres", "deuteronome"]
      },
      {
        id: "conquete_juges",
        nom: "Conquête et Période des Juges",
        testament: "AT",
        debut: -1406, fin: -1050,
        couleur: "#A4753F",
        description: "Entrée en terre promise sous Josué puis cycle des juges.",
        livres: ["josue", "juges", "ruth"]
      },
      {
        id: "monarchie_unie",
        nom: "Monarchie Unie (Saül, David, Salomon)",
        testament: "AT",
        debut: -1105, fin: -970,
        couleur: "#8E4F46",
        description: "Établissement du royaume d'Israël sous Saül, David puis Salomon.",
        livres: ["1samuel", "2samuel", "1chroniques", "psaumes", "proverbes", "cantique", "ecclesiaste"]
      },
      {
        id: "royaumes_divises",
        nom: "Royaumes Divisés (Israël et Juda)",
        testament: "AT",
        debut: -970, fin: -586,
        couleur: "#5C4033",
        description: "Division du royaume après Salomon, ministère des prophètes.",
        livres: ["1rois", "2rois", "2chroniques", "jonas", "amos", "osee", "michee", "esaie", "nahum", "sophonie", "habacuc", "jeremie", "lamentations", "abdias"]
      },
      {
        id: "exil",
        nom: "Exil à Babylone",
        testament: "AT",
        debut: -605, fin: -538,
        couleur: "#2F2A2A",
        description: "Déportation à Babylone, ministère d'Ézéchiel et Daniel.",
        livres: ["ezechiel", "daniel"]
      },
      {
        id: "retour_exil",
        nom: "Retour d'Exil et Période Perse",
        testament: "AT",
        debut: -538, fin: -400,
        couleur: "#6B4E71",
        description: "Reconstruction du temple et de Jérusalem.",
        livres: ["esdras", "nehemie", "esther", "aggee", "zacharie", "joel", "malachie"]
      }
    ],

    "INTER": [
      {
        id: "intertestamentaire",
        nom: "Période Intertestamentaire",
        testament: "INTER",
        debut: -430, fin: -5,
        couleur: "#444444",
        description: "Le « silence » entre les Écritures (≈ 400 ans). Période marquée par l'ascension et la chute d'empires (perse, séleucide, romain). L'espérance messianique reste vivante.",
        livres: []
      }
    ],

    "NT": [
      {
        id: "vie_jesus",
        nom: "Vie de Jésus",
        testament: "NT",
        debut: -6, fin: 33,
        couleur: "#1E5E7A",
        description: "Naissance, ministère, mort et résurrection de Jésus-Christ.",
        livres: ["matthieu", "marc", "luc", "jean"]
      },
      {
        id: "naissance_eglise",
        nom: "Naissance de l'Église",
        testament: "NT",
        debut: 30, fin: 49,
        couleur: "#2E7D7A",
        description: "De la Pentecôte aux premières années de l'Église.",
        livres: ["actes", "jacques"]
      },
      {
        id: "voyages_paul",
        nom: "Voyages Missionnaires de Paul",
        testament: "NT",
        debut: 46, fin: 62,
        couleur: "#4C7A47",
        description: "Expansion de l'Église à travers les voyages de Paul.",
        livres: ["galates", "1thessaloniciens", "2thessaloniciens", "1corinthiens", "2corinthiens", "romains", "colossiens", "ephesiens", "philemon", "philippiens"]
      },
      {
        id: "lettres_pastorales",
        nom: "Dernières Années des Apôtres",
        testament: "NT",
        debut: 60, fin: 80,
        couleur: "#7A6428",
        description: "Lettres pastorales et fin du ministère des apôtres.",
        livres: ["hebreux", "1pierre", "2pierre", "1timothee", "tite", "2timothee", "jude"]
      },
      {
        id: "johanniques",
        nom: "Écrits Johanniques et Apocalypse",
        testament: "NT",
        debut: 85, fin: 96,
        couleur: "#7A2828",
        description: "Lettres de Jean et révélation finale.",
        livres: ["1jean", "2jean", "3jean", "apocalypse"]
      }
    ]
  },

  livres: {
    // ========= ANCIEN TESTAMENT =========
    "genese": {
      nom: "Genèse",
      sens: "Commencement ou origine",
      auteur: "Moïse",
      periode: "≈ 4000–1805 av. J.-C.",
      redaction: "1446–1400 av. J.-C.",
      categorie: "Pentateuque",
      ordre: 1,
      periodeId: "origines",
      pdfPage: 11,
      theme: "Le thème central est la création, la chute de l'humanité, les promesses de Dieu et le début de l'histoire d'Israël à travers les patriarches.",
      sections: [
        {
          ref: "Gn 1-2",
          titre: "La Création",
          contenu: "En six jours, Dieu créa le monde, et au septième jour, il se reposa. La Bible commence par un récit étonnant de la création. À travers elle, nous comprenons que le but de Dieu pour l'humanité a toujours été d'avoir une relation avec elle.",
          verset: {ref: "Gn 1:27 (S21)", texte: "Dieu créa l'homme à son image, il le créa à l'image de Dieu, homme et femme il les créa."},
          saviezVous: "Les êtres humains étaient végétariens. Dans le récit de la création, Dieu donne à l'humanité uniquement des plantes et des fruits (Gn 1:29). Après le déluge, Dieu ajoute la viande (Gn 9:3)."
        },
        {
          ref: "Gn 3",
          titre: "La Chute",
          contenu: "Adam et Ève désobéissent à Dieu dans le jardin d'Éden, séduits par le serpent. Cette chute entraîne des conséquences pour toute l'humanité et la création.",
          verset: {ref: "Gn 3:15 (S21)", texte: "Je mettrai l'hostilité entre toi et la femme, entre ta descendance et sa descendance : celle-ci t'écrasera la tête, et tu lui blesseras le talon."},
          saviezVous: "La première prophétie concernant la venue du Messie. Ce verset annonce qu'un descendant de la femme (Jésus) vaincra le serpent."
        },
        {
          ref: "Gn 4-5",
          titre: "Les Descendants d'Adam",
          contenu: "Adam et Ève eurent deux fils : Caïn et Abel. Jaloux, Caïn tua Abel. La généalogie d'Adam à travers Seth souligne la continuité du péché humain tout en montrant la grâce divine."
        },
        {
          ref: "Gn 6-9",
          titre: "Le Déluge et le Pacte",
          contenu: "Face au mal sur la terre, Dieu juge l'humanité par un déluge mondial. Noé construit l'arche pour sa famille et les animaux. Après le déluge, Dieu établit une alliance avec Noé.",
          verset: {ref: "Gn 9:13 (S21)", texte: "J'ai placé mon arc dans la nuée ; il servira de signe d'alliance entre moi et la terre."},
          saviezVous: "L'arche de Noé faisait environ 150 mètres de long, 25 mètres de large et 15 mètres de haut."
        },
        {
          ref: "Gn 11",
          titre: "La Tour de Babel",
          contenu: "L'humanité, parlant une seule langue, décide de construire une tour atteignant le ciel. En réponse, Dieu brouille leur langue et les disperse sur toute la terre."
        },
        {
          ref: "Gn 12-25",
          titre: "L'Appel d'Abraham",
          contenu: "Dieu appelle Abraham à quitter son pays. Abraham obéit avec Sara, son neveu Lot et toute sa maison. Dieu lui promet une grande descendance et que toutes les nations seront bénies en lui. Sara enfante Isaac, et Abraham est mis à l'épreuve avec le sacrifice d'Isaac.",
          verset: {ref: "Gn 12:1-2 (S21)", texte: "Quitte ton pays, ta patrie et la maison de ton père, et va dans le pays que je te montrerai. Je ferai de toi une grande nation."}
        },
        {
          ref: "Gn 26-36",
          titre: "Isaac et Jacob",
          contenu: "Isaac, le fils d'Abraham, puis Jacob. Jacob trompe Ésaü pour la bénédiction, lutte avec un être céleste et reçoit le nom d'Israël. Il fonde une famille de douze fils — les douze tribus d'Israël."
        },
        {
          ref: "Gn 37-50",
          titre: "L'Histoire de Joseph",
          contenu: "Joseph est vendu comme esclave par ses frères. En Égypte, il interprète les rêves du pharaon et devient gouverneur. Pendant la famine, ses frères viennent en Égypte. Joseph se révèle, pardonne, et la famille s'installe en Égypte."
        }
      ]
    },

    "job": {
      nom: "Job",
      auteur: "Inconnu",
      periode: "2000–1800 av. J.-C.",
      redaction: "1400–600 av. J.-C.",
      categorie: "Poésie et Sagesse",
      nonHistorique: true,
      ordre: 18,
      periodeId: "origines",
      pdfPage: 14,
      theme: "Œuvre poétique abordant la souffrance, la justice et la nature de la relation entre l'humanité et Dieu.",
      sections: [
        {
          ref: "Job 1-2",
          titre: "Prologue dans le ciel",
          contenu: "Satan met en cause la justice de Job. Dieu permet à Satan d'éprouver Job, qui perd ses biens, ses enfants et sa santé."
        },
        {
          ref: "Job 3-31",
          titre: "Dialogues avec des amis",
          contenu: "Trois amis — Éliphaz, Bildad et Tsophar — viennent le réconforter. Leurs conseils deviennent des accusations. Job défend son innocence."
        },
        {
          ref: "Job 32-37",
          titre: "Le discours d'Élihu",
          contenu: "Un jeune homme nommé Élihu intervient et soutient la justice et la sagesse de Dieu, suggérant que la souffrance peut servir d'instruction."
        },
        {
          ref: "Job 38-41",
          titre: "La réponse de Dieu",
          contenu: "Dieu répond à Job du sein de la tempête avec une série de questions qui révèlent la petitesse de la compréhension humaine."
        },
        {
          ref: "Job 42",
          titre: "Épilogue",
          contenu: "Job répond avec humilité. Dieu restaure sa santé, ses richesses, sa famille avec des bénédictions encore plus grandes."
        }
      ]
    },

    "exode": {
      nom: "Exode",
      sens: "La sortie",
      auteur: "Moïse",
      periode: "1526–1446 av. J.-C.",
      redaction: "1440–1400 av. J.-C.",
      categorie: "Pentateuque",
      ordre: 2,
      periodeId: "egypte_exode",
      pdfPage: 15,
      theme: "Met en évidence la puissance, la sainteté et la fidélité de Dieu lorsqu'il accomplit ses promesses faites à Abraham, Isaac et Jacob.",
      sections: [
        {
          ref: "Ex 1-4",
          titre: "La naissance et l'appel de Moïse",
          contenu: "Le peuple hébreu subit l'oppression du pharaon. Moïse naît, est providentiellement épargné. Dieu appelle Moïse à travers un buisson ardent.",
          saviezVous: "Moïse n'a pas été placé directement dans le Nil, mais sur sa rive, parmi les roseaux (Ex 2:3)."
        },
        {
          ref: "Ex 5-15",
          titre: "La libération d'Israël",
          contenu: "Dieu envoie dix plaies sur l'Égypte : eau changée en sang, grenouilles, poux, mouches, peste, ulcères, grêle, sauterelles, ténèbres, mort des premiers-nés. La dernière plaie conduit à l'institution de la Pâque. Traversée de la mer Rouge.",
          saviezVous: "Chaque plaie était un jugement divin contre les dieux égyptiens (Hapi/Nil, Heket/grenouille, Geb/terre, Khepri/scarabée, Apis/taureau, Set-Typhon, Shu/atmosphère, Sérapis, Rê/soleil, Pharaon)."
        },
        {
          ref: "Ex 16-18",
          titre: "Dans le désert",
          contenu: "Dieu pourvoit la manne du ciel et l'eau du rocher. Israël fait face à diverses épreuves."
        },
        {
          ref: "Ex 19-34",
          titre: "Alliance au mont Sinaï",
          contenu: "Dieu remet à Moïse les dix commandements. Pendant que Moïse est sur le mont, le peuple fabrique un veau en or. Moïse intercède, l'alliance est renouvelée, le tabernacle est construit."
        }
      ]
    },

    "levitique": {
      nom: "Lévitique",
      sens: "Lié aux Lévites",
      auteur: "Moïse",
      periode: "1446–1445 av. J.-C.",
      redaction: "1445–1400 av. J.-C.",
      categorie: "Pentateuque",
      ordre: 3,
      periodeId: "egypte_exode",
      pdfPage: 18,
      theme: "Directives détaillées centrées sur la sainteté et l'adoration de Dieu.",
      sections: [
        {
          ref: "Lv 1-16",
          titre: "Sainteté en s'approchant du Dieu saint",
          contenu: "Offrandes et sacrifices : holocauste, offrande de céréales, offrande de communion, sacrifice pour le péché, sacrifice de culpabilité. Sacerdoce et consécration d'Aaron. Rituels de pureté. Jour des expiations.",
          saviezVous: "Le rituel du Jour des Expiations annonçait l'œuvre expiatoire de Christ — souverain sacrificateur parfait et offrande suprême pour le péché."
        },
        {
          ref: "Lv 17-27",
          titre: "Sainteté pour la communion avec le Dieu saint",
          contenu: "Instructions sur la séparation, fêtes sacrées et calendrier (Pâque, pains sans levain, prémices, Pentecôte, trompettes, expiations, tabernacles). Appel à la fidélité : obéissance = paix et abondance ; désobéissance = désastre et exil."
        }
      ]
    },

    "nombres": {
      nom: "Nombres",
      sens: "Du recensement du peuple",
      auteur: "Moïse",
      periode: "1445–1406 av. J.-C.",
      redaction: "≈ 1400 av. J.-C.",
      categorie: "Pentateuque",
      ordre: 4,
      periodeId: "egypte_exode",
      pdfPage: 20,
      theme: "Voyage d'Israël du mont Sinaï aux plaines de Moab. Fidélité de Dieu malgré la désobéissance du peuple.",
      sections: [
        {
          ref: "Nb 1-10:10",
          titre: "Se préparer à quitter le Sinaï",
          contenu: "Premier recensement, organisation autour du tabernacle. Vœu de naziréat. Bénédiction sacerdotale. Départ du Sinaï."
        },
        {
          ref: "Nb 10:11-36",
          titre: "Errance dans le désert",
          contenu: "Plaintes constantes, opposition de Miriam et Aaron, rapport décourageant des espions sur Canaan. La génération adulte est condamnée à errer 40 ans. Deuxième recensement, préparation à l'entrée en Canaan."
        }
      ]
    },

    "deuteronome": {
      nom: "Deutéronome",
      sens: "Deuxième loi",
      auteur: "Moïse",
      periode: "1406 av. J.-C.",
      redaction: "1406–1350 av. J.-C.",
      categorie: "Pentateuque",
      ordre: 5,
      periodeId: "egypte_exode",
      pdfPage: 21,
      theme: "Renouvellement de l'alliance entre Dieu et Israël avant l'entrée dans le pays promis.",
      sections: [
        {ref: "Dt 1-4:43", titre: "Premier discours de Moïse : regard rétrospectif", contenu: "Moïse rappelle les événements clés depuis la sortie d'Égypte."},
        {ref: "Dt 4:44-26", titre: "Deuxième discours de Moïse : la Loi", contenu: "Répétition des dix commandements, insistance sur l'exclusivité de l'adoration. Le Shema."},
        {ref: "Dt 27-29:1", titre: "Troisième discours : bénédictions et malédictions", contenu: "Les conséquences de l'obéissance et de la désobéissance."},
        {ref: "Dt 29:2-30", titre: "Quatrième discours : exigences de l'alliance", contenu: "Appel à choisir la vie en obéissant à Dieu."},
        {ref: "Dt 31-34", titre: "La transition du leadership", contenu: "Josué succède à Moïse. Mort de Moïse."}
      ]
    },

    "josue": {
      nom: "Josué",
      auteur: "Josué (probablement)",
      periode: "1406–1380 av. J.-C.",
      redaction: "1350–1200 av. J.-C.",
      categorie: "Livres historiques",
      ordre: 6,
      periodeId: "conquete_juges",
      pdfPage: 22,
      theme: "Conquête du pays promis sous la direction de Josué. Témoigne de la fidélité de Dieu envers Israël.",
      sections: [
        {ref: "Jos 1-5", titre: "Entrée dans le pays", contenu: "Préparation, traversée miraculeuse du Jourdain, circoncision, première Pâque dans le pays."},
        {ref: "Jos 6-12", titre: "Conquête du pays", contenu: "Chute de Jéricho (effondrement des murailles), conquête d'Aï, alliance avec les Gabaonites, victoires sur les rois du sud et du nord."},
        {ref: "Jos 13-22", titre: "Partage du pays", contenu: "Division du pays entre les douze tribus d'Israël."},
        {ref: "Jos 23-24", titre: "Obéissance et alliance", contenu: "Discours d'adieu de Josué appelant le peuple à la fidélité : « Moi et ma famille, nous servirons l'Éternel. »"}
      ]
    },

    "juges": {
      nom: "Juges",
      auteur: "Inconnu (tradition : Samuel)",
      periode: "1380–1050 av. J.-C.",
      redaction: "1050–1000 av. J.-C.",
      categorie: "Livres historiques",
      ordre: 7,
      periodeId: "conquete_juges",
      pdfPage: 24,
      theme: "Cycle répété de désobéissance, oppression, repentance et délivrance par des juges suscités par Dieu.",
      sections: [
        {ref: "Jg 1-3:6", titre: "La suite des conquêtes", contenu: "Conquête inachevée des tribus restantes."},
        {ref: "Jg 3:7-16", titre: "Le cycle des juges", contenu: "Othniel, Ehud, Débora et Barak, Gédéon, Jephthé, Samson... Cycle de péché, oppression, cri vers Dieu, délivrance."},
        {ref: "Jg 17-21", titre: "Corruption morale dans le pays", contenu: "« Chacun faisait ce qui lui semblait bon » : décadence morale et spirituelle généralisée."}
      ]
    },

    "ruth": {
      nom: "Ruth",
      auteur: "Inconnu",
      periode: "1150–1100 av. J.-C.",
      redaction: "1000–950 av. J.-C.",
      categorie: "Livres historiques",
      ordre: 8,
      periodeId: "conquete_juges",
      pdfPage: 25,
      theme: "Une histoire de fidélité, de rédemption et de providence divine pendant la période des juges.",
      sections: [
        {ref: "Rt 1", titre: "Tragédie et retour", contenu: "Noémi, veuve, retourne à Bethléem avec Ruth la Moabite, qui choisit de la suivre : « Ton peuple sera mon peuple. »"},
        {ref: "Rt 2", titre: "Ruth et Booz", contenu: "Ruth glane dans les champs de Booz, parent de la famille de Noémi."},
        {ref: "Rt 3", titre: "La demande de rachat", contenu: "Suivant les conseils de Noémi, Ruth fait appel au droit de rachat auprès de Booz.",
         saviezVous: "Le « rédempteur » (goël) était un proche parent qui pouvait racheter les biens ou épouser la veuve. Booz préfigure Christ, notre Rédempteur."},
        {ref: "Rt 4", titre: "Rachat et lignée", contenu: "Booz épouse Ruth. Leur fils Obed est le grand-père du roi David — Ruth, une Moabite, fait partie de la lignée messianique."}
      ]
    },

    "1samuel": {
      nom: "1 Samuel",
      auteur: "Samuel, Nathan, Gad",
      periode: "1105–1010 av. J.-C.",
      redaction: "950–900 av. J.-C.",
      categorie: "Livres historiques",
      ordre: 9,
      periodeId: "monarchie_unie",
      pdfPage: 26,
      theme: "Transition d'Israël de la période des juges à la monarchie. Vie de Samuel, règne de Saül, ascension de David.",
      sections: [
        {ref: "1S 1-7", titre: "Samuel : le dernier juge", contenu: "Naissance miraculeuse de Samuel, son appel par Dieu, son ministère prophétique."},
        {ref: "1S 8-15", titre: "Le règne de Saül", contenu: "Le peuple réclame un roi. Saül est oint, mais sa désobéissance entraîne son rejet par Dieu."},
        {ref: "1S 16-31", titre: "David et Saül", contenu: "David est oint en secret, vainc Goliath, devient l'ami de Jonathan. Saül, jaloux, le persécute. Mort de Saül à Guilboa."}
      ]
    },

    "2samuel": {
      nom: "2 Samuel",
      auteur: "Tradition : Nathan, Gad",
      periode: "1010–970 av. J.-C.",
      redaction: "950–900 av. J.-C.",
      categorie: "Livres historiques",
      ordre: 10,
      periodeId: "monarchie_unie",
      pdfPage: 28,
      theme: "Règne du roi David, ses victoires, ses chutes et son repentir.",
      sections: [
        {ref: "2S 1-10", titre: "Le règne établi de David", contenu: "David devient roi de Juda puis de tout Israël. Prend Jérusalem comme capitale. Alliance davidique."},
        {ref: "2S 11-12", titre: "David et Bath-Schéba", contenu: "Chute de David : adultère avec Bath-Schéba, meurtre d'Urie. Confrontation par Nathan, repentir profond."},
        {ref: "2S 13-24", titre: "Conséquences et fin du règne", contenu: "Troubles familiaux, révolte d'Absalom, fin du règne de David."}
      ]
    },

    "1chroniques": {
      nom: "1 Chroniques",
      auteur: "Esdras (tradition)",
      periode: "1010–970 av. J.-C.",
      redaction: "450–400 av. J.-C.",
      categorie: "Livres historiques",
      nonHistorique: true,
      ordre: 13,
      periodeId: "monarchie_unie",
      pdfPage: 30,
      theme: "Récit du règne de David d'un point de vue sacerdotal, mettant l'accent sur le culte et le temple.",
      sections: [
        {ref: "1Ch 1-9", titre: "Généalogies", contenu: "Généalogies d'Adam à David et au-delà."},
        {ref: "1Ch 10-29", titre: "Règne de David", contenu: "Couronnement, conquêtes, préparation pour la construction du temple."}
      ]
    },

    "psaumes": {
      nom: "Psaumes",
      auteur: "David (principalement), Asaph, fils de Coré, Salomon, Moïse...",
      periode: "≈ 1050 à 430 av. J.-C.",
      redaction: "1000–400 av. J.-C.",
      categorie: "Poésie et Sagesse",
      nonHistorique: true,
      ordre: 19,
      periodeId: "monarchie_unie",
      pdfPage: 31,
      theme: "Recueil de 150 poèmes et cantiques hébreux pour la louange, la prière, la lamentation et la méditation.",
      sections: [
        {ref: "Ps 1-41", titre: "Livre I", contenu: "Principalement des psaumes de David."},
        {ref: "Ps 42-72", titre: "Livre II", contenu: "Psaumes des fils de Coré et de David."},
        {ref: "Ps 73-89", titre: "Livre III", contenu: "Psaumes d'Asaph."},
        {ref: "Ps 90-106", titre: "Livre IV", contenu: "Psaumes royaux et de louange."},
        {ref: "Ps 107-150", titre: "Livre V", contenu: "Cantiques des degrés et grande louange finale."}
      ]
    },

    "proverbes": {
      nom: "Proverbes",
      auteur: "Salomon (principalement)",
      periode: "970–700 av. J.-C.",
      redaction: "950–700 av. J.-C.",
      categorie: "Poésie et Sagesse",
      nonHistorique: true,
      ordre: 20,
      periodeId: "monarchie_unie",
      pdfPage: 33,
      theme: "Principes et observations pratiques pour vivre avec sagesse selon la perspective de Dieu.",
      sections: [
        {ref: "Pr 1-9", titre: "Éloge de la sagesse", contenu: "« La crainte de l'Éternel est le commencement de la connaissance. »"},
        {ref: "Pr 10-31", titre: "Proverbes de Salomon", contenu: "Sentences variées sur le travail, la parole, l'amitié, la justice. Conclusion sur la femme vaillante."}
      ]
    },

    "cantique": {
      nom: "Cantique des cantiques",
      sens: "Le cantique le plus excellent",
      auteur: "Salomon",
      periode: "970–930 av. J.-C.",
      redaction: "950–700 av. J.-C.",
      categorie: "Poésie et Sagesse",
      nonHistorique: true,
      ordre: 22,
      periodeId: "monarchie_unie",
      pdfPage: 34,
      theme: "Poème d'amour célébrant l'amour conjugal, vu aussi comme allégorie de l'amour de Dieu pour son peuple.",
      sections: [
        {ref: "Ct 1-8", titre: "L'amour entre l'époux et l'épouse", contenu: "Dialogue poétique entre les amoureux, célébrant la beauté de l'amour."}
      ]
    },

    "ecclesiaste": {
      nom: "Ecclésiaste",
      auteur: "Salomon (tradition)",
      periode: "950 av. J.-C.",
      redaction: "950–400 av. J.-C.",
      categorie: "Poésie et Sagesse",
      nonHistorique: true,
      ordre: 21,
      periodeId: "monarchie_unie",
      pdfPage: 35,
      theme: "Réflexion mélancolique sur la nature de la vie : « Vanité des vanités, tout est vanité. »",
      sections: [
        {ref: "Ec 1-12", titre: "La vie sous le soleil", contenu: "L'auteur explore le sens de la vie et conclut : « Crains Dieu et observe ses commandements. C'est là ce que doit faire tout homme. »"}
      ]
    },

    "1rois": {
      nom: "1 Rois",
      auteur: "Inconnu (tradition : Jérémie)",
      periode: "970–850 av. J.-C.",
      redaction: "560–540 av. J.-C.",
      categorie: "Livres historiques",
      ordre: 11,
      periodeId: "royaumes_divises",
      pdfPage: 36,
      theme: "Règne de Salomon et division du royaume.",
      sections: [
        {ref: "1R 1-11", titre: "Règne de Salomon", contenu: "Sagesse de Salomon, construction du temple, apogée du royaume, puis chute dans l'idolâtrie."},
        {ref: "1R 12-22", titre: "Division du royaume", contenu: "Schisme sous Roboam et Jéroboam. Ministère d'Élie face à Achab et Jézabel."}
      ]
    },

    "2rois": {
      nom: "2 Rois",
      auteur: "Inconnu (tradition : Jérémie)",
      periode: "850–560 av. J.-C.",
      redaction: "560–540 av. J.-C.",
      categorie: "Livres historiques",
      ordre: 12,
      periodeId: "royaumes_divises",
      pdfPage: 38,
      theme: "Déclin des royaumes d'Israël et de Juda menant à l'exil.",
      sections: [
        {ref: "2R 1-17", titre: "Chute du royaume du Nord", contenu: "Ministère d'Élisée. Chute de Samarie en 722 av. J.-C. par les Assyriens."},
        {ref: "2R 18-25", titre: "Chute du royaume du Sud", contenu: "Réformes d'Ézéchias et Josias. Chute de Jérusalem en 586 av. J.-C. par Babylone."}
      ]
    },

    "2chroniques": {
      nom: "2 Chroniques",
      auteur: "Esdras (tradition)",
      periode: "970–538 av. J.-C.",
      redaction: "450–400 av. J.-C.",
      categorie: "Livres historiques",
      nonHistorique: true,
      ordre: 14,
      periodeId: "royaumes_divises",
      pdfPage: 39,
      theme: "Histoire de Juda du règne de Salomon jusqu'à l'exil, vue d'un point de vue sacerdotal.",
      sections: [
        {ref: "2Ch 1-9", titre: "Règne de Salomon", contenu: "Construction du temple, sagesse, prospérité."},
        {ref: "2Ch 10-36", titre: "Rois de Juda", contenu: "Successeurs de Salomon jusqu'à la déportation à Babylone."}
      ]
    },

    "jonas": {
      nom: "Jonas",
      auteur: "Jonas (probablement)",
      periode: "780–760 av. J.-C.",
      redaction: "760–700 av. J.-C.",
      categorie: "Prophètes mineurs",
      ordre: 32,
      periodeId: "royaumes_divises",
      pdfPage: 40,
      theme: "Souveraineté de Dieu et sa capacité à faire grâce, même aux nations païennes.",
      sections: [
        {ref: "Jon 1-2", titre: "Fuite et délivrance", contenu: "Jonas fuit l'appel de Dieu, est englouti par un grand poisson, prie et est délivré."},
        {ref: "Jon 3-4", titre: "Mission à Ninive", contenu: "Jonas prêche, Ninive se repent. Jonas se met en colère contre la miséricorde de Dieu."}
      ]
    },

    "amos": {
      nom: "Amos",
      auteur: "Amos",
      periode: "760–750 av. J.-C.",
      redaction: "760–750 av. J.-C.",
      categorie: "Prophètes mineurs",
      nonHistorique: true,
      ordre: 30,
      periodeId: "royaumes_divises",
      pdfPage: 41,
      theme: "Justice sociale et jugement contre l'injustice et l'idolâtrie d'Israël.",
      sections: [
        {ref: "Am 1-6", titre: "Oracles de jugement", contenu: "Jugement sur les nations puis sur Israël pour leurs péchés."},
        {ref: "Am 7-9", titre: "Visions et restauration", contenu: "Cinq visions du jugement, suivies d'une promesse de restauration."}
      ]
    },

    "osee": {
      nom: "Osée",
      auteur: "Osée",
      periode: "755–715 av. J.-C.",
      redaction: "755–715 av. J.-C.",
      categorie: "Prophètes mineurs",
      nonHistorique: true,
      ordre: 28,
      periodeId: "royaumes_divises",
      pdfPage: 42,
      theme: "L'amour fidèle de Dieu malgré l'infidélité d'Israël, illustré par le mariage d'Osée avec Gomer.",
      sections: [
        {ref: "Os 1-3", titre: "Le mariage symbolique", contenu: "Osée épouse Gomer, prostituée. Symbole de la relation entre Dieu et Israël."},
        {ref: "Os 4-14", titre: "Oracles d'infidélité et de retour", contenu: "Dénonciation des péchés d'Israël et appel à la repentance."}
      ]
    },

    "michee": {
      nom: "Michée",
      auteur: "Michée",
      periode: "735–700 av. J.-C.",
      redaction: "735–700 av. J.-C.",
      categorie: "Prophètes mineurs",
      nonHistorique: true,
      ordre: 33,
      periodeId: "royaumes_divises",
      pdfPage: 43,
      theme: "Dieu dénonce l'injustice et appelle à la repentance. Annonce du Messie né à Bethléem.",
      sections: [
        {ref: "Mi 1-3", titre: "Jugement", contenu: "Jugement contre Samarie et Jérusalem pour leur idolâtrie et leur injustice."},
        {ref: "Mi 4-5", titre: "Espérance messianique", contenu: "« Et toi, Bethléhem Éphrata... de toi sortira pour moi celui qui dominera sur Israël. »"},
        {ref: "Mi 6-7", titre: "Appel à la justice", contenu: "« Qu'exige l'Éternel de toi ? Que tu pratiques la justice, que tu aimes la bonté et que tu marches humblement avec ton Dieu. »"}
      ]
    },

    "esaie": {
      nom: "Ésaïe",
      auteur: "Ésaïe",
      periode: "740–680 av. J.-C.",
      redaction: "700–540 av. J.-C.",
      categorie: "Prophètes majeurs",
      nonHistorique: true,
      ordre: 23,
      periodeId: "royaumes_divises",
      pdfPage: 44,
      theme: "Espérance messianique : condamnation de l'infidélité et annonce du Salut.",
      sections: [
        {ref: "És 1-39", titre: "Jugement et espérance", contenu: "Jugement contre Juda, les nations. Visions messianiques : « Un enfant nous est né, un fils nous est donné. »"},
        {ref: "És 40-55", titre: "Livre de la consolation", contenu: "Promesses de restauration. Le Serviteur souffrant (És 53), figure du Messie."},
        {ref: "És 56-66", titre: "Nouveaux cieux et nouvelle terre", contenu: "Promesse d'une restauration finale et glorieuse."}
      ]
    },

    "nahum": {
      nom: "Nahum",
      auteur: "Nahum",
      periode: "663–612 av. J.-C.",
      redaction: "650–620 av. J.-C.",
      categorie: "Prophètes mineurs",
      nonHistorique: true,
      ordre: 34,
      periodeId: "royaumes_divises",
      pdfPage: 46,
      theme: "Souveraineté de Dieu dépassant toute nation. Jugement contre Ninive.",
      sections: [
        {ref: "Na 1-3", titre: "La chute de Ninive", contenu: "Prophétie de la destruction de Ninive, capitale de l'Assyrie."}
      ]
    },

    "sophonie": {
      nom: "Sophonie",
      auteur: "Sophonie",
      periode: "640–620 av. J.-C.",
      redaction: "630–620 av. J.-C.",
      categorie: "Prophètes mineurs",
      nonHistorique: true,
      ordre: 36,
      periodeId: "royaumes_divises",
      pdfPage: 47,
      theme: "Jour de l'Éternel : jugement à cause de l'idolâtrie, de l'injustice et du péché, puis restauration.",
      sections: [
        {ref: "Sp 1-3", titre: "Le jour de l'Éternel", contenu: "Jugement universel suivi d'une promesse de salut pour un reste fidèle."}
      ]
    },

    "habacuc": {
      nom: "Habacuc",
      auteur: "Habacuc",
      periode: "620–600 av. J.-C.",
      redaction: "620–600 av. J.-C.",
      categorie: "Prophètes mineurs",
      nonHistorique: true,
      ordre: 35,
      periodeId: "royaumes_divises",
      pdfPage: 48,
      theme: "Foi du juste, confiance en Dieu malgré l'injustice apparente : « Le juste vivra par sa foi. »",
      sections: [
        {ref: "Ha 1-2", titre: "Dialogue avec Dieu", contenu: "Habacuc questionne Dieu sur le mal. Dieu répond."},
        {ref: "Ha 3", titre: "Prière de foi", contenu: "Confiance en Dieu malgré les épreuves."}
      ]
    },

    "jeremie": {
      nom: "Jérémie",
      auteur: "Jérémie",
      periode: "627–580 av. J.-C.",
      redaction: "627–580 av. J.-C.",
      categorie: "Prophètes majeurs",
      nonHistorique: true,
      ordre: 24,
      periodeId: "royaumes_divises",
      pdfPage: 49,
      theme: "Prophète des larmes annonçant le jugement imminent de Juda et la nouvelle alliance.",
      sections: [
        {ref: "Jr 1-25", titre: "Appels à la repentance", contenu: "Avertissements à Juda, annonce de la captivité babylonienne."},
        {ref: "Jr 26-45", titre: "Souffrances de Jérémie", contenu: "Persécution du prophète, prophéties de restauration et nouvelle alliance."},
        {ref: "Jr 46-52", titre: "Oracles contre les nations", contenu: "Chute de Jérusalem et déportation."}
      ]
    },

    "lamentations": {
      nom: "Lamentations",
      auteur: "Jérémie (tradition)",
      periode: "586 av. J.-C.",
      redaction: "586–580 av. J.-C.",
      categorie: "Poésie et Sagesse",
      nonHistorique: true,
      ordre: 25,
      periodeId: "royaumes_divises",
      pdfPage: 51,
      theme: "Lamentations sur la destruction de Jérusalem et la justice des jugements de Dieu.",
      sections: [
        {ref: "Lm 1-5", titre: "Cinq lamentations", contenu: "Poèmes funèbres sur la chute de Jérusalem. Au cœur du livre : « Les bontés de l'Éternel ne sont pas épuisées, ses compassions ne sont pas à leur terme. »"}
      ]
    },

    "abdias": {
      nom: "Abdias",
      auteur: "Abdias",
      periode: "586–553 av. J.-C.",
      redaction: "585–550 av. J.-C.",
      categorie: "Prophètes mineurs",
      nonHistorique: true,
      ordre: 31,
      periodeId: "royaumes_divises",
      pdfPage: 52,
      theme: "Jugement contre Édom pour son attitude hostile envers Juda, restauration finale d'Israël.",
      sections: [
        {ref: "Ab 1", titre: "Oracle contre Édom", contenu: "Le plus court livre de l'AT. Jugement contre Édom et promesse de salut pour Sion."}
      ]
    },

    "ezechiel": {
      nom: "Ézéchiel",
      auteur: "Ézéchiel",
      periode: "593–571 av. J.-C.",
      redaction: "571–560 av. J.-C.",
      categorie: "Prophètes majeurs",
      nonHistorique: true,
      ordre: 26,
      periodeId: "exil",
      pdfPage: 53,
      theme: "Présence constante de Dieu auprès de son peuple, même en exil. Visions extraordinaires.",
      sections: [
        {ref: "Éz 1-24", titre: "Jugement sur Juda", contenu: "Visions glorieuses de Dieu. Annonce du jugement sur Jérusalem."},
        {ref: "Éz 25-32", titre: "Oracles contre les nations", contenu: "Jugement contre les nations voisines."},
        {ref: "Éz 33-48", titre: "Espérance et restauration", contenu: "Vision des os secs ressuscités. Nouveau temple et nouvelle Jérusalem."}
      ]
    },

    "daniel": {
      nom: "Daniel",
      auteur: "Daniel",
      periode: "605–536 av. J.-C.",
      redaction: "540–530 av. J.-C.",
      categorie: "Prophètes majeurs",
      nonHistorique: true,
      ordre: 27,
      periodeId: "exil",
      pdfPage: 55,
      theme: "Souveraineté de Dieu sur les empires humains. Récits de fidélité en terre étrangère et visions apocalyptiques.",
      sections: [
        {ref: "Dn 1-6", titre: "Récits historiques", contenu: "Daniel et ses amis à Babylone. Songe de Nabuchodonosor, fournaise ardente, écriture sur le mur, fosse aux lions."},
        {ref: "Dn 7-12", titre: "Visions apocalyptiques", contenu: "Quatre bêtes, le Fils de l'homme, les 70 semaines : prophéties sur l'avenir des nations et la venue du Messie."}
      ]
    },

    "esdras": {
      nom: "Esdras",
      auteur: "Esdras",
      periode: "538–457 av. J.-C.",
      redaction: "450–400 av. J.-C.",
      categorie: "Livres historiques",
      ordre: 15,
      periodeId: "retour_exil",
      pdfPage: 57,
      theme: "Retour des exilés et reconstruction du temple.",
      sections: [
        {ref: "Esd 1-6", titre: "Reconstruction du temple", contenu: "Décret de Cyrus, retour sous Zorobabel, achèvement du second temple."},
        {ref: "Esd 7-10", titre: "Réformes d'Esdras", contenu: "Retour d'Esdras, restauration de la loi, séparation des mariages mixtes."}
      ]
    },

    "nehemie": {
      nom: "Néhémie",
      auteur: "Néhémie",
      periode: "445–430 av. J.-C.",
      redaction: "430–400 av. J.-C.",
      categorie: "Livres historiques",
      ordre: 16,
      periodeId: "retour_exil",
      pdfPage: 58,
      theme: "Reconstruction des murailles de Jérusalem et restauration spirituelle.",
      sections: [
        {ref: "Né 1-7", titre: "Reconstruction des murailles", contenu: "Néhémie, échanson du roi, demande à reconstruire les murailles. Travail malgré opposition."},
        {ref: "Né 8-13", titre: "Restauration spirituelle", contenu: "Lecture de la Loi, confession nationale, réformes."}
      ]
    },

    "esther": {
      nom: "Esther",
      auteur: "Inconnu",
      periode: "483–473 av. J.-C.",
      redaction: "460–430 av. J.-C.",
      categorie: "Livres historiques",
      ordre: 17,
      periodeId: "retour_exil",
      pdfPage: 59,
      theme: "Providence de Dieu sauvant son peuple à travers une jeune femme juive devenue reine de Perse.",
      sections: [
        {ref: "Est 1-5", titre: "Esther devient reine", contenu: "Esther est choisie comme reine. Mardochée découvre un complot. Haman cherche à exterminer les Juifs."},
        {ref: "Est 6-10", titre: "Délivrance et fête de Pourim", contenu: "« Si je dois périr, je périrai ! » Esther sauve son peuple. Institution de la fête de Pourim."}
      ]
    },

    "aggee": {
      nom: "Aggée",
      auteur: "Aggée",
      periode: "520 av. J.-C.",
      redaction: "520 av. J.-C.",
      categorie: "Prophètes mineurs",
      nonHistorique: true,
      ordre: 37,
      periodeId: "retour_exil",
      pdfPage: 60,
      theme: "Appel à reconstruire le temple. Donner priorité à Dieu.",
      sections: [
        {ref: "Ag 1-2", titre: "Reconstruisez le temple", contenu: "« Considérez attentivement vos voies ! » Aggée motive le peuple à reprendre la reconstruction."}
      ]
    },

    "zacharie": {
      nom: "Zacharie",
      auteur: "Zacharie",
      periode: "520–518 av. J.-C.",
      redaction: "518–480 av. J.-C.",
      categorie: "Prophètes mineurs",
      nonHistorique: true,
      ordre: 38,
      periodeId: "retour_exil",
      pdfPage: 61,
      theme: "Reconstruction du temple et du peuple après l'exil. Visions messianiques.",
      sections: [
        {ref: "Za 1-8", titre: "Huit visions nocturnes", contenu: "Visions encourageant la reconstruction."},
        {ref: "Za 9-14", titre: "Oracles messianiques", contenu: "« Voici ton roi vient à toi, juste et victorieux, humble et monté sur un âne. »"}
      ]
    },

    "joel": {
      nom: "Joël",
      auteur: "Joël",
      periode: "500–400 av. J.-C.",
      redaction: "500–400 av. J.-C.",
      categorie: "Prophètes mineurs",
      nonHistorique: true,
      ordre: 29,
      periodeId: "retour_exil",
      pdfPage: 63,
      theme: "Le jour de l'Éternel et l'effusion du Saint-Esprit.",
      sections: [
        {ref: "Jl 1-3", titre: "Invasion de sauterelles et jour de l'Éternel", contenu: "« Je répandrai mon Esprit sur toute chair » — citation reprise à la Pentecôte par Pierre."}
      ]
    },

    "malachie": {
      nom: "Malachie",
      auteur: "Malachie",
      periode: "460–430 av. J.-C.",
      redaction: "460–430 av. J.-C.",
      categorie: "Prophètes mineurs",
      nonHistorique: true,
      ordre: 39,
      periodeId: "retour_exil",
      pdfPage: 64,
      theme: "Le dernier livre de l'AT. Réprimande le peuple sur la fidélité et annonce le précurseur du Messie.",
      sections: [
        {ref: "Ml 1-2", titre: "Reproches au peuple et aux prêtres", contenu: "Dénonciation de la corruption sacerdotale et de l'infidélité du peuple."},
        {ref: "Ml 3:1-6", titre: "Le messager promis", contenu: "« Voici, j'enverrai mon messager ; il préparera le chemin devant moi. »"},
        {ref: "Ml 3:7-12", titre: "Réprimande sur la dîme", contenu: "« Apportez à la maison du trésor toutes les dîmes... mettez-moi de cette manière à l'épreuve. »"},
        {ref: "Ml 3:13-18; 4", titre: "Promesses et avertissements", contenu: "Le « Jour du Seigneur » à venir, accompli par Jean-Baptiste, précurseur de Jésus."}
      ]
    },

    // ========= NOUVEAU TESTAMENT =========
    "matthieu": {
      nom: "Matthieu",
      auteur: "Matthieu (Lévi)",
      periode: "≈ 6 av. J.-C. – 33 ap. J.-C.",
      redaction: "60–70 ap. J.-C.",
      categorie: "Évangile",
      ordre: 40,
      periodeId: "vie_jesus",
      pdfPage: 69,
      theme: "Démontre que Jésus est le Messie promis. Utilise fréquemment des références à l'Ancien Testament.",
      contexte: "Destiné principalement aux Juifs, familiarisés avec les prophéties de l'AT.",
      sections: [
        {ref: "Mt 1-2", titre: "La venue du Messie", contenu: "Généalogie de Jésus depuis Abraham et David. Naissance à Bethléem, visite des mages, fuite en Égypte.",
         verset: {ref: "Mt 1:23 (S21)", texte: "La vierge sera enceinte, elle mettra au monde un fils et on l'appellera Emmanuel, ce qui signifie 'Dieu avec nous'."}},
        {ref: "Mt 3-4:11", titre: "La révélation du Messie", contenu: "Ministère de Jean-Baptiste, baptême de Jésus, tentation dans le désert."},
        {ref: "Mt 4:12-7", titre: "La proclamation du Messie", contenu: "Début du ministère public en Galilée. Sermon sur la montagne : Béatitudes, prière, amour du prochain."},
        {ref: "Mt 8-20", titre: "Miracles et enseignements", contenu: "Nombreux miracles, paraboles du Royaume, transfiguration, enseignements sur le pardon et l'humilité."},
        {ref: "Mt 21-28", titre: "La passion du Messie", contenu: "Entrée triomphale, conflit avec les chefs religieux, dernière Cène, trahison, procès, crucifixion, résurrection.",
         verset: {ref: "Mt 28:5-6 (S21)", texte: "N'ayez pas peur, car je sais que vous cherchez Jésus, celui qui a été crucifié. Il n'est pas ici, car il est ressuscité, comme il l'avait dit."}}
      ]
    },

    "marc": {
      nom: "Marc",
      auteur: "Marc",
      periode: "≈ 27–33 ap. J.-C.",
      redaction: "55–65 ap. J.-C.",
      categorie: "Évangile",
      ordre: 41,
      periodeId: "vie_jesus",
      pdfPage: 71,
      theme: "Annonce du ministère et de la mission de Jésus-Christ, Fils de Dieu. Accent sur les actions plus que sur les discours.",
      contexte: "Probablement le plus ancien des évangiles, basé sur les témoignages de Pierre. S'adresse aux Romains et non-Juifs.",
      sections: [
        {ref: "Mc 1-4", titre: "Préparation et début du ministère", contenu: "Pas de récits de naissance. Baptême, tentation, proclamation du royaume, appel des disciples, miracles."},
        {ref: "Mc 5-10", titre: "Enseignements et miracles", contenu: "Jésus enseigne par paraboles, accomplit des miracles, forme ses disciples."},
        {ref: "Mc 11-16", titre: "Passion, mort et résurrection", contenu: "Récit concis de la Passion mettant en avant le reniement de Pierre et l'humanité de Jésus."}
      ]
    },

    "luc": {
      nom: "Luc",
      auteur: "Luc",
      periode: "≈ 6 av. J.-C. – 33 ap. J.-C.",
      redaction: "60–70 ap. J.-C.",
      categorie: "Évangile",
      ordre: 42,
      periodeId: "vie_jesus",
      pdfPage: 72,
      theme: "Miséricorde de Dieu et salut offert à tous. Compassion de Jésus pour les marginalisés.",
      contexte: "Adressé à un public large, juifs et non-juifs. Souligne le message universel.",
      sections: [
        {ref: "Lc 1:1-4", titre: "Dédicace à Théophile", contenu: "Luc explique son désir d'offrir un récit ordonné et fiable."},
        {ref: "Lc 1:5-2:52", titre: "L'enfance de Jésus", contenu: "Récits uniques : annonciation, naissance, visite des bergers, présentation au temple, Jésus à 12 ans au temple."},
        {ref: "Lc 3-9", titre: "Ministère en Galilée", contenu: "Paraboles du Bon Samaritain, Fils prodigue. Histoire de Zachée, guérison des dix lépreux."},
        {ref: "Lc 10-19", titre: "En route vers Jérusalem", contenu: "Longue section sur le voyage vers Jérusalem. Compassion pour les pauvres, pécheurs, femmes."},
        {ref: "Lc 20-24", titre: "Passion, mort et résurrection", contenu: "Trahison, procès, crucifixion. Paroles sur la croix, rencontre sur le chemin d'Emmaüs, ascension."}
      ]
    },

    "jean": {
      nom: "Jean",
      auteur: "Jean, « le disciple que Jésus aimait »",
      periode: "≈ 27–33 ap. J.-C.",
      redaction: "80–90 ap. J.-C.",
      categorie: "Évangile",
      ordre: 43,
      periodeId: "vie_jesus",
      pdfPage: 73,
      theme: "Jésus comme Verbe divin, Fils de Dieu, le « Je suis », Messie et Sauveur du monde. La foi en Jésus comme chemin vers la vie éternelle.",
      contexte: "Écrit pour des compatriotes juifs afin qu'ils confessent Jésus comme Christ.",
      sections: [
        {ref: "Jn 1:1-18", titre: "Introduction", contenu: "Jésus présenté comme le « Verbe » (Logos) qui était avec Dieu et qui était Dieu dès le commencement."},
        {ref: "Jn 1:19-51", titre: "Préparation du ministère", contenu: "Témoignage de Jean-Baptiste désignant Jésus comme « l'Agneau de Dieu ». Appel des premiers disciples."},
        {ref: "Jn 2-4", titre: "Ministère public", contenu: "Signes et miracles. Conversation avec Nicodème (nouvelle naissance), avec la Samaritaine au puits.",
         verset: {ref: "Jn 2:11 (S21)", texte: "Tel fut, à Cana en Galilée, le premier des signes miraculeux que fit Jésus. Il manifesta sa gloire et ses disciples crurent en lui."}},
        {ref: "Jn 5-12", titre: "L'opposition", contenu: "Affrontements avec les responsables religieux. Déclarations « Je suis » : pain de vie, résurrection, chemin, vérité, vie."},
        {ref: "Jn 13-21", titre: "Derniers actes et paroles", contenu: "Dernière Cène, lavement des pieds, longue discours d'adieu, prière sacerdotale. Passion, résurrection, restauration de Pierre.",
         verset: {ref: "Jn 20:31 (S21)", texte: "Mais ceux-ci ont été décrits afin que vous croyiez que Jésus est le Messie, le Fils de Dieu, et qu'en croyant vous ayez la vie en son nom."},
         saviezVous: "Laver les pieds d'autrui était une tâche réservée aux esclaves. Les gens portaient des sandales sur des chemins poussiéreux."}
      ]
    },

    "actes": {
      nom: "Actes des apôtres",
      auteur: "Luc",
      periode: "≈ 30–62 ap. J.-C.",
      redaction: "62–70 ap. J.-C.",
      categorie: "Histoire",
      ordre: 44,
      periodeId: "naissance_eglise",
      pdfPage: 75,
      theme: "Histoire de l'Église primitive, de l'ascension de Jésus au ministère de Paul à Rome. Œuvre du Saint-Esprit.",
      contexte: "Suite directe de l'Évangile de Luc. Expansion du christianisme de Jérusalem au monde connu.",
      sections: [
        {ref: "Ac 1", titre: "Introduction", contenu: "40 jours avec les disciples ressuscité, ascension, choix de Matthias."},
        {ref: "Ac 2-7", titre: "Église à Jérusalem", contenu: "Pentecôte, prédication de Pierre, communauté primitive, persécution, martyre d'Étienne."},
        {ref: "Ac 8-12", titre: "Expansion en Judée et Samarie", contenu: "Philippe en Samarie, conversion de Paul, Pierre et Corneille (premiers païens)."},
        {ref: "Ac 13-21", titre: "Voyages missionnaires de Paul", contenu: "Trois voyages missionnaires de Paul à travers l'Asie Mineure, la Grèce, la Macédoine."},
        {ref: "Ac 22-28", titre: "Paul à Rome", contenu: "Arrestation à Jérusalem, procès, voyage à Rome où Paul prêche librement."}
      ]
    },

    "jacques": {
      nom: "Jacques",
      auteur: "Jacques, frère de Jésus",
      periode: "≈ 45–49 ap. J.-C.",
      redaction: "45–49 ap. J.-C.",
      categorie: "Lettres générales",
      nonHistorique: true,
      ordre: 59,
      periodeId: "naissance_eglise",
      pdfPage: 78,
      theme: "Foi pratique : la vraie foi se manifeste par des œuvres. Une des premières lettres du NT.",
      sections: [
        {ref: "Jc 1-5", titre: "Foi et œuvres", contenu: "« La foi sans les œuvres est morte. » Pratique de la sagesse, contrôle de la langue, prière efficace."}
      ]
    },

    "galates": {
      nom: "Galates",
      auteur: "Paul",
      periode: "≈ 48–50 ap. J.-C.",
      redaction: "48–50 ap. J.-C.",
      categorie: "Épîtres pauliniennes",
      nonHistorique: true,
      ordre: 48,
      periodeId: "voyages_paul",
      pdfPage: 79,
      theme: "Justification par la foi seule, non par les œuvres de la loi. Liberté chrétienne.",
      sections: [
        {ref: "Ga 1-2", titre: "Défense de l'évangile", contenu: "Paul défend son apostolat et la pureté de l'évangile contre les judaïsants."},
        {ref: "Ga 3-4", titre: "Justification par la foi", contenu: "« Le juste vivra par la foi. » L'alliance avec Abraham et la promesse."},
        {ref: "Ga 5-6", titre: "Vivre par l'Esprit", contenu: "Le fruit de l'Esprit, opposé aux œuvres de la chair."}
      ]
    },

    "1thessaloniciens": {
      nom: "1 Thessaloniciens",
      auteur: "Paul",
      periode: "≈ 50–51 ap. J.-C.",
      redaction: "50–51 ap. J.-C.",
      categorie: "Épîtres pauliniennes",
      nonHistorique: true,
      ordre: 52,
      periodeId: "voyages_paul",
      pdfPage: 80,
      theme: "Encouragement à la persévérance, espérance du retour de Christ.",
      sections: [
        {ref: "1Th 1-5", titre: "Vie chrétienne et retour de Christ", contenu: "Action de grâces, vie sainte, enseignement sur l'enlèvement des croyants et le jour du Seigneur."}
      ]
    },

    "2thessaloniciens": {
      nom: "2 Thessaloniciens",
      auteur: "Paul",
      periode: "≈ 51–52 ap. J.-C.",
      redaction: "51–52 ap. J.-C.",
      categorie: "Épîtres pauliniennes",
      nonHistorique: true,
      ordre: 53,
      periodeId: "voyages_paul",
      pdfPage: 81,
      theme: "Correction des malentendus sur le retour de Christ. Persévérance dans le travail.",
      sections: [
        {ref: "2Th 1-3", titre: "Le jour du Seigneur", contenu: "L'homme d'iniquité doit apparaître avant le retour. Appel au travail : « Si quelqu'un ne veut pas travailler, qu'il ne mange pas non plus. »"}
      ]
    },

    "1corinthiens": {
      nom: "1 Corinthiens",
      auteur: "Paul",
      periode: "≈ 54–55 ap. J.-C.",
      redaction: "54–55 ap. J.-C.",
      categorie: "Épîtres pauliniennes",
      nonHistorique: true,
      ordre: 46,
      periodeId: "voyages_paul",
      pdfPage: 82,
      theme: "Correction des divisions et désordres dans l'église de Corinthe.",
      sections: [
        {ref: "1Co 1-6", titre: "Divisions et morale", contenu: "Sagesse de Dieu vs sagesse humaine. Discipline dans l'Église."},
        {ref: "1Co 7-14", titre: "Questions pratiques", contenu: "Mariage, idoles, sainte Cène, dons spirituels. Hymne à l'amour (ch. 13)."},
        {ref: "1Co 15-16", titre: "La résurrection", contenu: "« Si Christ n'est pas ressuscité, votre foi est vaine. »"}
      ]
    },

    "2corinthiens": {
      nom: "2 Corinthiens",
      auteur: "Paul",
      periode: "≈ 55–56 ap. J.-C.",
      redaction: "55–56 ap. J.-C.",
      categorie: "Épîtres pauliniennes",
      nonHistorique: true,
      ordre: 47,
      periodeId: "voyages_paul",
      pdfPage: 84,
      theme: "Défense du ministère de Paul. Souffrance et consolation, faiblesse et puissance.",
      sections: [
        {ref: "2Co 1-7", titre: "Ministère apostolique", contenu: "« Trésor dans des vases d'argile. » Souffrances pour le service de Christ."},
        {ref: "2Co 8-9", titre: "La collecte", contenu: "Encouragement à la générosité : « Dieu aime celui qui donne avec joie. »"},
        {ref: "2Co 10-13", titre: "Défense de l'apostolat", contenu: "Paul défend son autorité face aux « super-apôtres »."}
      ]
    },

    "romains": {
      nom: "Romains",
      auteur: "Paul",
      periode: "≈ 56–57 ap. J.-C.",
      redaction: "56–57 ap. J.-C.",
      categorie: "Épîtres pauliniennes",
      nonHistorique: true,
      ordre: 45,
      periodeId: "voyages_paul",
      pdfPage: 86,
      theme: "Exposé systématique de l'évangile : justice de Dieu par la foi.",
      sections: [
        {ref: "Rm 1-3", titre: "Tous coupables devant Dieu", contenu: "Universalité du péché : « Tous ont péché et sont privés de la gloire de Dieu. »"},
        {ref: "Rm 4-8", titre: "Justification par la foi", contenu: "Exemple d'Abraham. Vie en Christ. « Aucune condamnation pour ceux qui sont en Jésus-Christ. »"},
        {ref: "Rm 9-11", titre: "Israël et l'évangile", contenu: "Plan de Dieu pour Israël et les nations."},
        {ref: "Rm 12-16", titre: "Vie chrétienne pratique", contenu: "« Offrez vos corps comme un sacrifice vivant. » Amour, soumission aux autorités, salutations."}
      ]
    },

    "colossiens": {
      nom: "Colossiens",
      auteur: "Paul",
      periode: "≈ 60–62 ap. J.-C.",
      redaction: "60–62 ap. J.-C.",
      categorie: "Épîtres pauliniennes",
      nonHistorique: true,
      ordre: 51,
      periodeId: "voyages_paul",
      pdfPage: 88,
      theme: "Suprématie et suffisance de Christ. Réfute l'hérésie syncrétiste.",
      sections: [
        {ref: "Col 1-2", titre: "Christ, image du Dieu invisible", contenu: "« Toutes choses ont été créées par lui et pour lui. » Plénitude de la divinité en Christ."},
        {ref: "Col 3-4", titre: "Vie nouvelle en Christ", contenu: "Mortifier le vieil homme, revêtir l'homme nouveau. Relations familiales."}
      ]
    },

    "ephesiens": {
      nom: "Éphésiens",
      auteur: "Paul",
      periode: "≈ 60–62 ap. J.-C.",
      redaction: "60–62 ap. J.-C.",
      categorie: "Épîtres pauliniennes",
      nonHistorique: true,
      ordre: 49,
      periodeId: "voyages_paul",
      pdfPage: 89,
      theme: "L'Église, corps de Christ. Unité des Juifs et des païens en Christ.",
      sections: [
        {ref: "Ép 1-3", titre: "Bénédictions spirituelles", contenu: "Élection, rédemption, mystère de l'Église. « Vous êtes sauvés par grâce, par le moyen de la foi. »"},
        {ref: "Ép 4-6", titre: "Marcher dignement", contenu: "Unité de l'Église, vie nouvelle, relations chrétiennes, armure de Dieu."}
      ]
    },

    "philemon": {
      nom: "Philémon",
      auteur: "Paul",
      periode: "≈ 60–62 ap. J.-C.",
      redaction: "60–62 ap. J.-C.",
      categorie: "Épîtres pauliniennes",
      nonHistorique: true,
      ordre: 57,
      periodeId: "voyages_paul",
      pdfPage: 91,
      theme: "Lettre personnelle plaidant pour Onésime, esclave fugitif devenu chrétien. Modèle de pardon et de fraternité.",
      sections: [
        {ref: "Phm 1", titre: "Plaidoyer pour Onésime", contenu: "Paul demande à Philémon de recevoir Onésime « non plus comme un esclave, mais comme un frère bien-aimé »."}
      ]
    },

    "philippiens": {
      nom: "Philippiens",
      auteur: "Paul",
      periode: "≈ 60–62 ap. J.-C.",
      redaction: "60–62 ap. J.-C.",
      categorie: "Épîtres pauliniennes",
      nonHistorique: true,
      ordre: 50,
      periodeId: "voyages_paul",
      pdfPage: 92,
      theme: "Joie en Christ même dans les circonstances difficiles. Lettre écrite depuis la prison.",
      sections: [
        {ref: "Ph 1-4", titre: "Joie, humilité, recherche de Christ", contenu: "Hymne à l'humilité de Christ (ch. 2). « Je puis tout par celui qui me fortifie. » « Réjouissez-vous toujours dans le Seigneur. »"}
      ]
    },

    "hebreux": {
      nom: "Hébreux",
      auteur: "Inconnu",
      periode: "≈ 60–70 ap. J.-C.",
      redaction: "60–70 ap. J.-C.",
      categorie: "Lettres générales",
      nonHistorique: true,
      ordre: 58,
      periodeId: "lettres_pastorales",
      pdfPage: 94,
      theme: "Supériorité de Christ sur les anges, Moïse, le sacerdoce lévitique. Nouvelle alliance.",
      sections: [
        {ref: "Hé 1-7", titre: "Christ supérieur", contenu: "Christ supérieur aux anges, à Moïse, à Aaron. Sacrificateur selon l'ordre de Melchisédek."},
        {ref: "Hé 8-10", titre: "Nouvelle alliance", contenu: "Le sacrifice unique et parfait de Christ."},
        {ref: "Hé 11-13", titre: "La foi", contenu: "Galerie des héros de la foi (ch. 11). Appel à la persévérance."}
      ]
    },

    "1pierre": {
      nom: "1 Pierre",
      auteur: "Pierre",
      periode: "≈ 62–64 ap. J.-C.",
      redaction: "62–64 ap. J.-C.",
      categorie: "Lettres générales",
      nonHistorique: true,
      ordre: 60,
      periodeId: "lettres_pastorales",
      pdfPage: 96,
      theme: "Encouragement aux chrétiens persécutés. Espérance vivante par la résurrection.",
      sections: [
        {ref: "1P 1-5", titre: "Espérance et souffrance", contenu: "Le chrétien comme « pierre vivante », sacerdoce royal. Persévérance dans l'épreuve."}
      ]
    },

    "2pierre": {
      nom: "2 Pierre",
      auteur: "Pierre",
      periode: "≈ 64–67 ap. J.-C.",
      redaction: "64–67 ap. J.-C.",
      categorie: "Lettres générales",
      nonHistorique: true,
      ordre: 61,
      periodeId: "lettres_pastorales",
      pdfPage: 97,
      theme: "Mise en garde contre les faux docteurs. Certitude du retour de Christ.",
      sections: [
        {ref: "2P 1-3", titre: "Connaissance et vigilance", contenu: "Grandir dans la grâce. Jour du Seigneur viendra comme un voleur."}
      ]
    },

    "1timothee": {
      nom: "1 Timothée",
      auteur: "Paul",
      periode: "≈ 63–65 ap. J.-C.",
      redaction: "63–65 ap. J.-C.",
      categorie: "Épîtres pastorales",
      nonHistorique: true,
      ordre: 54,
      periodeId: "lettres_pastorales",
      pdfPage: 98,
      theme: "Instructions à Timothée pour diriger l'Église d'Éphèse.",
      sections: [
        {ref: "1Tm 1-6", titre: "Conduite de l'Église", contenu: "Faux docteurs, ordre dans le culte, qualifications des anciens et diacres, conduite chrétienne."}
      ]
    },

    "tite": {
      nom: "Tite",
      auteur: "Paul",
      periode: "≈ 63–65 ap. J.-C.",
      redaction: "63–65 ap. J.-C.",
      categorie: "Épîtres pastorales",
      nonHistorique: true,
      ordre: 56,
      periodeId: "lettres_pastorales",
      pdfPage: 99,
      theme: "Instructions à Tite pour organiser l'Église en Crète.",
      sections: [
        {ref: "Tt 1-3", titre: "Bonnes œuvres et saine doctrine", contenu: "Qualifications des anciens, vivre en accord avec l'évangile."}
      ]
    },

    "2timothee": {
      nom: "2 Timothée",
      auteur: "Paul",
      periode: "≈ 66–67 ap. J.-C.",
      redaction: "66–67 ap. J.-C.",
      categorie: "Épîtres pastorales",
      nonHistorique: true,
      ordre: 55,
      periodeId: "lettres_pastorales",
      pdfPage: 100,
      theme: "Dernière lettre de Paul. Exhortation finale à Timothée à persévérer.",
      sections: [
        {ref: "2Tm 1-4", titre: "Persévère", contenu: "« J'ai combattu le bon combat, j'ai achevé la course, j'ai gardé la foi. » Toute l'Écriture est inspirée."}
      ]
    },

    "jude": {
      nom: "Jude",
      auteur: "Jude, frère de Jacques",
      periode: "≈ 65–80 ap. J.-C.",
      redaction: "65–80 ap. J.-C.",
      categorie: "Lettres générales",
      nonHistorique: true,
      ordre: 65,
      periodeId: "lettres_pastorales",
      pdfPage: 101,
      theme: "Mise en garde contre les faux docteurs et appel à combattre pour la foi.",
      sections: [
        {ref: "Jude 1", titre: "Combattre pour la foi", contenu: "Avertissements contre l'apostasie. Doxologie finale magnifique."}
      ]
    },

    "1jean": {
      nom: "1 Jean",
      auteur: "Jean",
      periode: "≈ 85–95 ap. J.-C.",
      redaction: "85–95 ap. J.-C.",
      categorie: "Lettres johanniques",
      nonHistorique: true,
      ordre: 62,
      periodeId: "johanniques",
      pdfPage: 102,
      theme: "Assurance du salut, amour fraternel, mise en garde contre les antichrists.",
      sections: [
        {ref: "1Jn 1-5", titre: "Communion avec Dieu", contenu: "« Dieu est amour. » Tests de la vraie foi : croyance correcte, obéissance, amour."}
      ]
    },

    "2jean": {
      nom: "2 Jean",
      auteur: "Jean",
      periode: "≈ 85–95 ap. J.-C.",
      redaction: "85–95 ap. J.-C.",
      categorie: "Lettres johanniques",
      nonHistorique: true,
      ordre: 63,
      periodeId: "johanniques",
      pdfPage: 103,
      theme: "Amour et vérité. Mise en garde contre les faux docteurs.",
      sections: [
        {ref: "2Jn 1", titre: "Marcher dans la vérité", contenu: "Brève lettre encourageant à demeurer dans l'enseignement de Christ."}
      ]
    },

    "3jean": {
      nom: "3 Jean",
      auteur: "Jean",
      periode: "≈ 85–95 ap. J.-C.",
      redaction: "85–95 ap. J.-C.",
      categorie: "Lettres johanniques",
      nonHistorique: true,
      ordre: 64,
      periodeId: "johanniques",
      pdfPage: 104,
      theme: "Lettre personnelle à Gaïus louant son hospitalité, condamnant Diotrèphe.",
      sections: [
        {ref: "3Jn 1", titre: "Hospitalité et vérité", contenu: "Encouragement pour les fidèles serviteurs et missionnaires."}
      ]
    },

    "apocalypse": {
      nom: "Apocalypse",
      auteur: "Jean",
      periode: "≈ 95 ap. J.-C.",
      redaction: "95–96 ap. J.-C.",
      categorie: "Prophétique",
      nonHistorique: true,
      ordre: 66,
      periodeId: "johanniques",
      pdfPage: 105,
      theme: "Révélation des choses dernières : visions du Christ glorifié, du jugement et de la nouvelle création.",
      sections: [
        {ref: "Ap 1-3", titre: "Vision de Christ et lettres aux 7 églises", contenu: "Vision du Fils de l'homme glorifié. Messages aux églises d'Asie."},
        {ref: "Ap 4-11", titre: "Trône céleste et jugements", contenu: "Trône de Dieu, sept sceaux, sept trompettes."},
        {ref: "Ap 12-20", titre: "Combat spirituel et fin", contenu: "Femme et dragon, bête et faux prophète, sept coupes, chute de Babylone, retour de Christ, jugement final."},
        {ref: "Ap 21-22", titre: "Nouvelle création", contenu: "Nouveaux cieux et nouvelle terre. Nouvelle Jérusalem. « Voici, je viens bientôt. »",
         verset: {ref: "Ap 22:20 (S21)", texte: "Amen ! Viens, Seigneur Jésus !"}}
      ]
    }
  },

  // ========== TIMELINE D'ÉVÉNEMENTS ==========
  timeline: [
    {annee: -4000, titre: "La Création", description: "Dieu crée le monde en six jours", periodeId: "origines", type: "evenement"},
    {annee: -3000, titre: "Adam et Ève, Caïn et Abel, Noé", description: "Premières générations humaines", periodeId: "origines", type: "evenement"},
    {annee: -2500, titre: "Le Déluge", description: "Dieu juge le monde par un déluge mondial", periodeId: "origines", type: "evenement"},
    {annee: -2200, titre: "La tour de Babel", description: "Confusion des langues", periodeId: "origines", type: "evenement"},
    {annee: -2000, titre: "Abraham", description: "Appel d'Abraham (≈ 2000–1900 av. J.-C.)", periodeId: "origines", type: "personnage"},
    {annee: -1900, titre: "Isaac", description: "Fils de la promesse (≈ 1900–1800 av. J.-C.)", periodeId: "origines", type: "personnage"},
    {annee: -1850, titre: "Jacob (Israël)", description: "Père des douze tribus (≈ 1850–1750 av. J.-C.)", periodeId: "origines", type: "personnage"},
    {annee: -1750, titre: "Joseph", description: "De prisonnier à gouverneur d'Égypte (≈ 1750–1650 av. J.-C.)", periodeId: "origines", type: "personnage"},
    {annee: -1700, titre: "Migration en Égypte", description: "Jacob et ses fils migrent en Égypte", periodeId: "origines", type: "evenement"},
    {annee: -1700, titre: "Esclavage en Égypte", description: "Les Israélites réduits en esclavage (1700–1300 av. J.-C.)", periodeId: "egypte_exode", type: "evenement"},
    {annee: -1525, titre: "Naissance de Moïse", description: "Le futur libérateur d'Israël", periodeId: "egypte_exode", type: "personnage"},
    {annee: -1445, titre: "Exode d'Égypte", description: "Sortie d'Égypte sous Moïse", periodeId: "egypte_exode", type: "evenement_majeur"},
    {annee: -1445, titre: "Traversée du désert", description: "40 ans dans le désert (1445–1405 av. J.-C.)", periodeId: "egypte_exode", type: "evenement"},
    {annee: -1405, titre: "Conquête de Canaan", description: "Sous la conduite de Josué (1405–1375 av. J.-C.)", periodeId: "conquete_juges", type: "evenement"},
    {annee: -1350, titre: "Période des Juges", description: "Cycle de désobéissance et délivrance (1350–1050 av. J.-C.)", periodeId: "conquete_juges", type: "evenement"},
    {annee: -1050, titre: "Règne de Saül", description: "Premier roi d'Israël (1050–1010 av. J.-C.)", periodeId: "monarchie_unie", type: "personnage"},
    {annee: -1010, titre: "Règne de David", description: "Roi selon le cœur de Dieu (1010–970 av. J.-C.)", periodeId: "monarchie_unie", type: "personnage"},
    {annee: -970, titre: "Règne de Salomon", description: "Construction du temple (970–930 av. J.-C.)", periodeId: "monarchie_unie", type: "personnage"},
    {annee: -930, titre: "Schisme du royaume", description: "Division en royaume du Nord (Israël) et du Sud (Juda)", periodeId: "royaumes_divises", type: "evenement_majeur"},
    {annee: -875, titre: "Prophète Élie", description: "875–848 av. J.-C.", periodeId: "royaumes_divises", type: "personnage"},
    {annee: -848, titre: "Prophète Élisée", description: "848–797 av. J.-C.", periodeId: "royaumes_divises", type: "personnage"},
    {annee: -785, titre: "Prophète Jonas", description: "785–755 av. J.-C.", periodeId: "royaumes_divises", type: "personnage"},
    {annee: -765, titre: "Prophète Amos", description: "765–755 av. J.-C.", periodeId: "royaumes_divises", type: "personnage"},
    {annee: -750, titre: "Prophète Osée", description: "≈ 750 av. J.-C.", periodeId: "royaumes_divises", type: "personnage"},
    {annee: -750, titre: "Prophète Michée", description: "750–690 av. J.-C.", periodeId: "royaumes_divises", type: "personnage"},
    {annee: -722, titre: "Chute de Samarie", description: "Fin du royaume du Nord par l'Assyrie", periodeId: "royaumes_divises", type: "evenement_majeur"},
    {annee: -700, titre: "Prophète Ésaïe", description: "700–690 av. J.-C.", periodeId: "royaumes_divises", type: "personnage"},
    {annee: -660, titre: "Prophète Nahum", description: "660–620 av. J.-C.", periodeId: "royaumes_divises", type: "personnage"},
    {annee: -640, titre: "Prophète Sophonie", description: "640–625 av. J.-C.", periodeId: "royaumes_divises", type: "personnage"},
    {annee: -626, titre: "Prophète Jérémie", description: "626–586 av. J.-C.", periodeId: "royaumes_divises", type: "personnage"},
    {annee: -605, titre: "Prophète Daniel", description: "Déporté à Babylone (605–536 av. J.-C.)", periodeId: "exil", type: "personnage"},
    {annee: -593, titre: "Prophète Ézéchiel", description: "593–571 av. J.-C.", periodeId: "exil", type: "personnage"},
    {annee: -586, titre: "Chute de Jérusalem", description: "Destruction du temple par Babylone", periodeId: "royaumes_divises", type: "evenement_majeur"},
    {annee: -539, titre: "Début de la domination perse", description: "Cyrus, roi de Perse", periodeId: "retour_exil", type: "evenement"},
    {annee: -538, titre: "Décret de Cyrus", description: "Retour des Juifs autorisé", periodeId: "retour_exil", type: "evenement_majeur"},
    {annee: -520, titre: "Reconstruction du temple", description: "Prophète Aggée et Zacharie", periodeId: "retour_exil", type: "evenement"},
    {annee: -445, titre: "Reconstruction des murailles", description: "Néhémie reconstruit Jérusalem (445–443 av. J.-C.)", periodeId: "retour_exil", type: "evenement"},
    {annee: -440, titre: "Prophète Malachie", description: "440–420 av. J.-C. — Fin de l'AT", periodeId: "retour_exil", type: "personnage"},
    {annee: -400, titre: "Période intertestamentaire", description: "≈ 430–5 av. J.-C. — Le « silence »", periodeId: "intertestamentaire", type: "periode"},
    {annee: -5, titre: "Naissance de Jésus", description: "Vers 6–4 av. J.-C. à Bethléem", periodeId: "vie_jesus", type: "evenement_majeur"},
    {annee: 26, titre: "Baptême de Jésus", description: "Début du ministère public", periodeId: "vie_jesus", type: "evenement"},
    {annee: 30, titre: "Mort et résurrection de Jésus", description: "Crucifixion et résurrection à Jérusalem", periodeId: "vie_jesus", type: "evenement_majeur"},
    {annee: 30, titre: "Jour de la Pentecôte", description: "Descente du Saint-Esprit", periodeId: "naissance_eglise", type: "evenement_majeur"},
    {annee: 35, titre: "Conversion de Paul", description: "Vers 35–37 ap. J.-C.", periodeId: "naissance_eglise", type: "evenement"},
    {annee: 40, titre: "Début du ministère de Paul", description: "Vers 40–41 ap. J.-C.", periodeId: "voyages_paul", type: "personnage"},
    {annee: 46, titre: "1er voyage missionnaire de Paul", description: "Vers 46–48 ap. J.-C.", periodeId: "voyages_paul", type: "evenement"},
    {annee: 50, titre: "2e voyage missionnaire de Paul", description: "Vers 50–52 ap. J.-C.", periodeId: "voyages_paul", type: "evenement"},
    {annee: 53, titre: "3e voyage missionnaire de Paul", description: "Vers 53–57 ap. J.-C.", periodeId: "voyages_paul", type: "evenement"},
    {annee: 58, titre: "Emprisonnements de Paul", description: "Jérusalem (58), Césarée (58–60)", periodeId: "lettres_pastorales", type: "evenement"},
    {annee: 61, titre: "Paul prisonnier à Rome", description: "61–63 ap. J.-C.", periodeId: "lettres_pastorales", type: "evenement"},
    {annee: 64, titre: "Lettre de Pierre", description: "64–67 ap. J.-C.", periodeId: "lettres_pastorales", type: "evenement"},
    {annee: 66, titre: "Deuxième emprisonnement de Paul", description: "À Rome", periodeId: "lettres_pastorales", type: "evenement"},
    {annee: 67, titre: "Mort de Paul à Rome", description: "Martyre de l'apôtre", periodeId: "lettres_pastorales", type: "evenement_majeur"},
    {annee: 70, titre: "Destruction de Jérusalem", description: "Et du Temple par les Romains", periodeId: "lettres_pastorales", type: "evenement_majeur"},
    {annee: 90, titre: "Lettres de Jean", description: "Vers 90–95 ap. J.-C.", periodeId: "johanniques", type: "evenement"},
    {annee: 95, titre: "Apocalypse", description: "Vers 95–96 ap. J.-C.", periodeId: "johanniques", type: "evenement"},
    {annee: 98, titre: "Mort de Jean", description: "Vers 98–100 ap. J.-C. — Fin de l'ère apostolique", periodeId: "johanniques", type: "evenement_majeur"}
  ],

  // Le saviez-vous (extraits remarquables)
  saviezVous: [
    {sujet: "Création - Végétarisme", texte: "Avant le déluge, les humains étaient végétariens. Dieu n'autorise la viande qu'après (Gn 9:3)."},
    {sujet: "L'arche de Noé", texte: "L'arche faisait environ 150m de long, 25m de large et 15m de haut."},
    {sujet: "Moïse", texte: "Moïse n'a pas été placé dans le Nil, mais sur sa rive parmi les roseaux (Ex 2:3)."},
    {sujet: "Les dix plaies", texte: "Chaque plaie était un jugement contre un dieu égyptien spécifique."},
    {sujet: "Jour des Expiations", texte: "Ce rituel annonçait l'œuvre expiatoire de Christ, souverain sacrificateur parfait."},
    {sujet: "Booz, rédempteur", texte: "Le « goël » rachetait les biens ou épousait la veuve. Booz préfigure Christ Rédempteur."},
    {sujet: "Lavement des pieds", texte: "Tâche réservée aux esclaves. Geste révolutionnaire de Jésus envers ses disciples."},
    {sujet: "Première prophétie messianique", texte: "Gn 3:15 — « Sa descendance écrasera ta tête » — annonce du Christ vainqueur du serpent."},
    {sujet: "Ruth et la lignée messianique", texte: "Ruth la Moabite est l'arrière-grand-mère du roi David, ancêtre de Jésus."},
    {sujet: "Daniel et les 70 semaines", texte: "Prophétie chronologique très précise sur la venue du Messie (Dn 9)."}
  ]
};

// Convertir en variable globale
if (typeof window !== 'undefined') window.BIBLE_DATA = BIBLE_DATA;
