import { useState } from "react";

const C = [
  {
    id:1,title:"La Belgique",emoji:"🇧🇪",color:"#C0392B",
    idea:"La Belgique est un État jeune (1830), né d'une construction politique — pas d'une identité naturelle. Son histoire est une territorialisation progressive de la question linguistique.",
    sections:[
      {title:"Avant 1830 : pas de Belgique",pts:["Pendant +1800 ans, aucune entité « belge » n'existe","Dominations successives : bourguignonne → espagnole → autrichienne → française (1795-1814) → néerlandaise (1815-1830)","1830 : création d'un État unitaire francophone — une invention politique"]},
      {title:"Diversité linguistique dès 1830",pts:["Recensement 1846 : flamand 57% · français 42% · allemand 1%","La langue dominante n'est PAS le français, mais c'est la seule langue officielle","Un État unilingue pour une population multilingue → tensions"]},
      {title:"Le mouvement flamand (XIXe)",pts:["Réaction contre un État unilingue francophone","Cours en français même à Louvain et Gand","Progrès très lent (~40 ans) — 1res lois linguistiques années 1870","1898 : Loi d'égalité → néerlandais reconnu officiellement"]},
      {title:"Territorialisation au XXe siècle",pts:["Lois 1920-30 : néerlandais dans l'enseignement","Pas de bilinguisme national → principe de territorialité","Bruxelles : historiquement flamande, se francise → sentiment de perte de territoire","1961 : fin des questions linguistiques aux recensements","1962 : fixation DÉFINITIVE de la frontière linguistique"]},
      {title:"Retournement économique",pts:["XIXe : Wallonie = 2e région au monde dans la révolution industrielle","PIB wallon >> PIB flamand pendant un siècle","Années 1960+ : PIB flamand dépasse le PIB wallon"]}
    ],
    timeline:[
      {d:"Avant 1830",e:"Aucune entité Belgique",h:0},{d:"1830",e:"Indépendance — État unitaire FR",h:1},{d:"1839",e:"Pays-Bas reconnaissent les frontières",h:0},
      {d:"1846",e:"1er recensement : 57% NL, 42% FR",h:0},{d:"~1870",e:"Premières lois linguistiques",h:0},{d:"1898",e:"Loi d'égalité (NL reconnu)",h:1},
      {d:"1920-30",e:"NL dans l'enseignement",h:0},{d:"1961",e:"Fin questions linguistiques",h:0},{d:"1962",e:"Frontière linguistique fixée",h:1},{d:"1960s+",e:"PIB flamand > PIB wallon",h:0}
    ],
    lexique:[
      {t:"Clichage",d:"Fixation définitive et irréversible de la frontière linguistique (1962)"},
      {t:"Facilités linguistiques",d:"Droit d'obtenir des docs admin dans l'autre langue, dans certaines communes frontalières"},
      {t:"Territorialisation",d:"La langue officielle dépend du territoire, pas du choix individuel"},
      {t:"État unitaire",d:"État avec un seul centre de décision (≠ fédéral). Belgique jusqu'en 1970"},
      {t:"Suffrage censitaire",d:"Droit de vote réservé aux plus riches (en fonction de l'impôt payé)"}
    ]
  },
  {
    id:2,title:"Les Clivages",emoji:"⚡",color:"#2471A3",
    idea:"La société belge est structurée par 4 clivages fondamentaux issus de deux révolutions. Ces clivages expliquent la naissance des partis, des institutions et du fédéralisme centrifuge.",
    sections:[
      {title:"Deux révolutions fondatrices",pts:["Révolution NATIONALE → État-nation centralisé autour du FR, tensions identitaires","Révolution INDUSTRIELLE → classe ouvrière, nouveaux rapports sociaux"]},
      {title:"Leuven Vlaams (1968)",pts:["Étudiants flamands exigent une université exclusivement NL","Scission : KU Leuven (Flandre) + UCL → Louvain-la-Neuve (Wallonie)","Illustre l'ampleur du conflit linguistique"]},
      {title:"Fédéralisme centrifuge",pts:["Pouvoir se disperse du centre → entités fédérées (≠ centripète)","2 types d'entités : Communautés (langue/culture) + Régions (territoire)","Compétences EXCLUSIVES — pas de hiérarchie fédéral/entités","Art. 4 Constitution : 4 régions linguistiques"]}
    ],
    clivages:[
      {n:"Centre / Périphérie",a:"communautaire",o:"Pouvoir central FR vs régions NL",c:"Fédéralisme belge",col:"#C0392B"},
      {n:"Église / État",a:"philosophico-religieux",o:"État laïque vs rôle social de l'Église",c:"Pacte scolaire, piliers",col:"#7D3C98"},
      {n:"Possédants / Travailleurs",a:"socio-économique",o:"Capital vs classe ouvrière",c:"Syndicats, sécu sociale",col:"#D4AC0D"},
      {n:"Industrie / Agriculture",a:"urbain/rural",o:"Productivisme vs anti-productivisme",c:"Partis écologistes",col:"#1E8449"}
    ],
    reformes:[
      {y:"1970",n:"1re",c:"3 communautés culturelles · Lois spéciales (LSRI) · Groupes linguistiques (art. 43) · Parité ministérielle (art. 99) · Sonnette d'alarme (art. 54)"},
      {y:"1980",n:"2e",c:"Matières personnalisables (santé) · Région flamande + wallonne (pas BXL) · Conflit d'intérêt"},
      {y:"1988-89",n:"3e",c:"Enseignement → communautés · Transports → régions · Création RBC · Loi spéciale de financement"},
      {y:"1993-94",n:"4e",c:"Art. 1er : « État fédéral » · Élections régionales directes · Art. 35 compétences résiduaires (jamais appliqué)"},
      {y:"2001",n:"5e",c:"Autonomie fiscale accrue · Refinancement · Pouvoir régional sur communes + bourgmestres"},
      {y:"2011-14",n:"6e",c:"Réforme du Sénat · Scission BHV · Allocations familiales → communautés"}
    ],
    mecanismes:[
      {n:"Lois spéciales (LSRI)",d:"Majorité des ⅔ + majorité dans chaque groupe linguistique"},
      {n:"Sonnette d'alarme (art. 54)",d:"¾ d'un groupe linguistique peut suspendre un projet de loi"},
      {n:"Parité ministérielle (art. 99)",d:"Autant de ministres FR que NL. PM = « asexué »"},
      {n:"Conflit d'intérêt",d:"Une entité fédérée peut bloquer temporairement un texte"},
      {n:"Révision Constitution (art. 195)",d:"Déclaration → dissolution → élections → majorité ⅔ (pas de majorité linguistique)"}
    ],
    lexique:[
      {t:"Clivage",d:"Division profonde et durable dans la société, créant des groupes/partis opposés"},
      {t:"Fédéralisme centrifuge",d:"Le pouvoir se disperse du centre vers les entités (≠ centripète)"},
      {t:"LSRI",d:"Loi Spéciale de Réformes Institutionnelles — double majorité qualifiée"},
      {t:"Compétences exclusives",d:"Quand une matière est attribuée à un niveau, les autres ne peuvent plus intervenir"},
      {t:"Art. 35",d:"Prévoit que le résiduel va aux entités fédérées — jamais appliqué"},
      {t:"Neutralité axiologique",d:"Weber : distinguer ses valeurs personnelles de l'analyse scientifique"}
    ]
  },
  {
    id:3,title:"Les Partis",emoji:"🏛️",color:"#7D3C98",
    idea:"La Belgique est une particratie. Les partis naissent des clivages, chaque famille s'est scindée linguistiquement, et ils structurent l'ensemble du système institutionnel.",
    sections:[
      {title:"Avant les partis : l'unionisme",pts:["Élite de notables, suffrage censitaire < 1%","Deux courants : catholiques + libéraux, alliés à l'indépendance","« L'union fait la force » = alliance catholiques-libéraux"]},
      {title:"Formation d'un clivage → 4 étapes",pts:["① Déséquilibre profond","② Auto-organisation","③ Création d'un parti","④ Organisations périphériques (piliers)"]},
      {title:"Gauche / Droite (Bobbio, 1994)",pts:["Critère fondamental = l'ÉGALITÉ","Gauche : réduire les inégalités par l'action collective","Droite : accepte davantage les inégalités (mérite, ordre naturel)"]},
      {title:"Les guerres scolaires",pts:["1842 : 1re loi — renforce l'Église","1870 : 2e loi (libéraux) — école publique, fin financement écoles catho","1884 : 3e loi (catho) — compromis, deux réseaux coexistent","1950-51 : Question royale → 2e guerre scolaire","1958 : PACTE SCOLAIRE → fin du conflit Église/État"]},
      {title:"Types de partis",pts:["Parti de cadres : notables, organisation souple, peu de membres","Parti de masse : base populaire large, suffrage universel, discipline interne"]}
    ],
    familles:[
      {name:"Libérale",col:"#2E86C1",emoji:"🔵",evts:[{y:"1846",e:"Congrès libéral → 1er parti moderne"},{y:"1961",e:"→ PVV/PLP (droite éco)"},{y:"1971",e:"Scission linguistique"},{y:"2002",e:"MR (francophone)"},{y:"2007",e:"Open VLD"},{y:"2026",e:"→ Anders"}]},
      {name:"Catholique",col:"#E67E22",emoji:"🟠",evts:[{y:"1864-84",e:"Organisation du courant"},{y:"1890",e:"Boerenbond"},{y:"1921",e:"Système des Standen"},{y:"1945",e:"→ PSC/CVP"},{y:"1968",e:"Scission PSC / CVP"},{y:"2001",e:"CVP → CD&V"},{y:"2022",e:"CDH → Les Engagés"}]},
      {name:"Socialiste",col:"#E74C3C",emoji:"🔴",evts:[{y:"1885",e:"POB"},{y:"1894",e:"Charte de Quaregnon"},{y:"1945",e:"→ PSB"},{y:"1978",e:"Scission PS / SP"},{y:"2021",e:"SP.a → Vooruit"}]},
      {name:"Gauche radicale",col:"#1C2833",emoji:"⚫",evts:[{y:"1921",e:"Parti communiste"},{y:"1945",e:"3e parti (Résistance)"},{y:"1979",e:"AMADA → PTB"}]},
      {name:"Mouv. flamand",col:"#D4AC0D",emoji:"🟡",evts:[{y:"1862",e:"Meetingpartij"},{y:"1930s",e:"VNV (collaboration)"},{y:"1954",e:"Volksunie"},{y:"2001",e:"→ N-VA"},{y:"1978",e:"Vlaams Blok → VB (2004)"}]},
      {name:"Mouv. wallon/BXL",col:"#1E8449",emoji:"🟢",evts:[{y:"1897",e:"Ligue Wallonne"},{y:"1912",e:"Lettre Destrée"},{y:"1964",e:"FDF"},{y:"1968",e:"Rassemblement Wallon"},{y:"2015",e:"FDF → DéFI"}]}
    ],
    vote:[
      {p:"1831-1893",s:"Suffrage censitaire — seuls les plus riches (<1%)"},{p:"1893",s:"Suffrage universel masculin plural (max 3 voix)"},{p:"1918",s:"Suffrage universel masculin pur (Coup de Loppem)"},{p:"1948",s:"Suffrage universel incluant les femmes"}
    ],
    lexique:[
      {t:"Particratie",d:"Système où les partis dominent toutes les décisions institutionnelles"},
      {t:"Unionisme",d:"Alliance catholiques-libéraux gouvernant ensemble (élite de notables)"},
      {t:"Standen",d:"Organisation du parti catholique en piliers sociaux"},
      {t:"Cordon sanitaire",d:"Accord de ne JAMAIS former de coalition avec l'extrême droite"},
      {t:"Charte de Quaregnon",d:"Texte fondateur socialiste (1894) : les richesses viennent du travail"},
      {t:"Question royale",d:"Crise 1950-51 sur le retour de Léopold III — divisée Nord/Sud"},
      {t:"Pacte scolaire (1958)",d:"Compromis : liberté d'enseignement + financement garanti"},
      {t:"Coup de Loppem (1918)",d:"Accord hors Parlement instaurant le suffrage universel masculin"}
    ]
  },
  {
    id:4,title:"Consociationalisme",emoji:"🤝",color:"#6C3483",
    idea:"Dans une société divisée, les grandes décisions sont négociées entre élites de partis (cartel d'élites), contournant la logique majoritaire pour protéger les minorités.",
    sections:[
      {title:"Piliers (verzuiling)",pts:["Société segmentée du berceau à la tombe","Pilier socialiste : POB/PS, FGTB, mutuelles socialistes, Soralia","Pilier catholique : PSC/CVP, CSC, mutuelles chrétiennes, Boerenbond, scouts","Pilier libéral : moins organisé, syndicat libéral plus faible","Délitement progressif mais dépendance au sentier","Asymétrie : le mouvement ouvrier particulièrement fort"]},
      {title:"Cartel d'élites (Lijphart, 1969)",pts:["Démocratie consociative = société fragmentée rendue stable par un partage du pouvoir","Décisions négociées à huis clos entre présidents de partis","Contournement de la majorité simple pour protéger les minorités"]},
      {title:"Pourquoi les élites coopèrent",pts:["Menaces/pressions extérieures (« L'union fait la force »)","Multiplicité des sous-cultures oblige au compromis","Petite taille de l'État → relative simplicité des processus"]},
      {title:"Sécurité sociale (arrêtés 28 déc. 1944)",pts:["7 branches : soins, chômage (ONEM), vacances, alloc. familiales, pensions…","Cotisations obligatoires : patronales + personnelles","Régime salariés ≠ indépendants (pensions historiquement plus faibles)","Concertation sociale paritaire à 3 niveaux → CCT"]},
      {title:"Limites du concept",pts:["Stabilité fragile (longues formations gouvernementales)","Trop centré sur les partis (ignore syndicats)","Tautologie : la coopération maintient la fragmentation"]}
    ],
    pactes:[
      {y:"1830-39",n:"Unionisme",d:"Alliance catholiques-libéraux pour stabiliser le nouvel État"},
      {y:"1918",n:"Coup de Loppem",d:"Suffrage universel masculin négocié hors Parlement"},
      {y:"1944",n:"Pacte social",d:"Fonde la sécurité sociale (patronat + syndicats)"},
      {y:"1958",n:"Pacte scolaire",d:"Fin du conflit Église/État sur l'enseignement"},
      {y:"1972",n:"Pacte culturel",d:"Protection des minorités culturelles"},
      {y:"1970+",n:"Réformes de l'État",d:"Accords globaux entre présidents de partis"}
    ],
    lexique:[
      {t:"Consociationalisme",d:"Société divisée stabilisée par partage du pouvoir entre élites"},
      {t:"Cartel d'élites",d:"Dirigeants de partis qui négocient les décisions majeures entre eux"},
      {t:"Pilier (zuil)",d:"Réseau d'organisations liées par une idéologie (parti, syndicat, mutuelle…)"},
      {t:"Dépendance au sentier",d:"Les choix passés structurent les trajectoires actuelles"},
      {t:"CCT",d:"Convention Collective de Travail"},
      {t:"Groupe des 10",d:"5 représentants patronaux + 5 syndicaux négociant les AIP"}
    ]
  },
  {
    id:5,title:"Gouv. & Parlements",emoji:"⚖️",color:"#1A5276",
    idea:"Démocratie constitutionnelle avec séparation des pouvoirs. Le Parlement contrôle le gouvernement, mais on observe une exécutivisation croissante. Le consensus prime dans la coalition.",
    sections:[
      {title:"Démocratie constitutionnelle",pts:["Art. 33 : « Tous les pouvoirs émanent de la Nation »","Séparation des pouvoirs : législatif, exécutif, judiciaire","État de droit : le pouvoir respecte les règles juridiques"]},
      {title:"Hiérarchie des normes",pts:["Constitution > Lois spéciales > Lois ordinaires","Décrets = Ordonnances (RBC) = Lois → même valeur juridique","Adoption : vote Parlement → promulgation (Roi) → Moniteur belge","Ex : Baudouin refuse de signer la loi avortement → impossibilité de régner"]},
      {title:"Contrôle parlementaire",pts:["Vote de confiance : le Parlement investit le gouvernement","Motion de méfiance constructive : doit proposer une alternative","Questions écrites/orales, interpellations, résolutions, commissions d'enquête"]},
      {title:"Bicaméralisme",pts:["Chambre (150 membres) : pouvoir central, budget, confiance","Sénat réformé 2014 : 50 sénateurs entités + 10 cooptés","Sénat = chambre de réflexion, rôle très limité"]},
      {title:"Coalitions et consensus",pts:["Aucune majorité absolue depuis 1950","Accord de gouvernement = « bible » de la coalition","Consensus au gouvernement : pas de votes, accord de tous (coutume constitutionnelle)","Cycle budgétaire : accord « à l'aveugle » → conclaves → lois-programmes"]}
    ],
    parlements:[
      {n:"Parlement flamand",m:"124",d:"118 Flandre + 6 BXL-NL. Fusion Communauté/Région (art. 137). Les 6 BXL ne votent que sur matières communautaires."},
      {n:"Parl. Communauté FR",m:"94",d:"75 wallons + 19 BXL-FR. Députés ayant prêté serment en allemand exclus des votes communautaires FR."},
      {n:"Parlement wallon",m:"75",d:"Élus directement. Certains siègent aussi au Parl. Communauté FR."},
      {n:"Parlement BXL-Capitale",m:"89",d:"2 groupes linguistiques (FR + NL). Élus directement."},
      {n:"Parl. Communauté DE",m:"25",d:"Élus directement. Seul parlement communautaire élu au suffrage direct."}
    ],
    lexique:[
      {t:"Exécutivisation",d:"Le gouvernement prend de plus en plus d'importance vs le Parlement"},
      {t:"Promulgation",d:"Signature officielle d'une loi par le Roi et les ministres"},
      {t:"Motion de méfiance constructive",d:"Retrait de confiance avec obligation de proposer un remplaçant"},
      {t:"Ordonnance",d:"Norme législative de la RBC (= décret)"},
      {t:"Coutume constitutionnelle",d:"Règle non écrite mais respectée par tradition"},
      {t:"Conclave budgétaire",d:"Réunion politique fixant les grandes lignes du budget"}
    ]
  },
  {
    id:6,title:"Système Électoral",emoji:"🗳️",color:"#B7950B",
    idea:"Le droit de vote s'est élargi progressivement. La Belgique utilise un scrutin proportionnel (méthode D'Hondt) qui structure le multipartisme. Le mode de scrutin est technique ET politique.",
    sections:[
      {title:"Représentation",pts:["Représentation juridique : délégation à des élus compétents","Représentation mimétique : le parlement comme miroir de la société","En pratique les deux se mélangent"]},
      {title:"Scrutin majoritaire vs proportionnel",pts:["Majoritaire uninominal : 1 siège/circonscription → bipartisme (loi de Duverger)","Proportionnel : sièges selon % de voix → multipartisme","BE 1831-1899 : majoritaire à 2 tours, puis proportionnelle → sauvetage du parti libéral"]},
      {title:"Méthode D'Hondt",pts:["Diviser les voix de chaque parti par 1, 2, 3… → attribuer les sièges aux plus grands quotients","Art. 167 Code électoral — le dernier quotient = diviseur électoral","Variante Imperiali : diviseurs 1; 1,5; 2; 2,5… → avantage les grandes listes","Utilisée aussi pour répartir postes et budgets entre partis"]},
      {title:"Limites de la proportionnelle",pts:["Seuil électoral 5% : en dessous = aucun siège","Seuil naturel : dans les petites circonscriptions, parfois 15%+ nécessaire","La proportionnelle intégrale n'existe nulle part"]},
      {title:"Case de tête et gerrymandering",pts:["Case de tête = accepter l'ordre de la liste (favorise les têtes)","Gerrymandering : redécoupage stratégique des circonscriptions","Bourgmestre wallon = candidat avec le + de voix de préférence sur la liste de la majorité"]}
    ],
    droitVote:[
      {y:"1831",e:"Suffrage censitaire — ~1% de la population",h:1},
      {y:"1893",e:"Suffrage universel masculin MAIS vote plural (max 3 voix) + obligation de vote",h:1},
      {y:"1919/21",e:"Suffrage universel pur et simple (1 homme = 1 voix)",h:1},
      {y:"1948",e:"Droit de vote des femmes",h:1},
      {y:"1981",e:"Vote à 18 ans (au lieu de 21)",h:0},
      {y:"1999-04",e:"Vote des étrangers (UE puis hors UE) aux communales",h:0},
      {y:"2022",e:"Vote à 16 ans (élections européennes)",h:0}
    ],
    lexique:[
      {t:"Suffrage censitaire",d:"Vote réservé à ceux qui paient un minimum d'impôts"},
      {t:"Vote plural",d:"Certains citoyens ont plus d'une voix (max 3) selon leur statut"},
      {t:"Méthode D'Hondt",d:"Diviser les voix par 1, 2, 3… et attribuer les sièges aux plus grands quotients"},
      {t:"Seuil électoral",d:"Minimum de 5% des voix requis pour obtenir des sièges"},
      {t:"Gerrymandering",d:"Redécoupage stratégique des circonscriptions"},
      {t:"Loi de Duverger",d:"Le scrutin majoritaire à un tour tend au bipartisme"}
    ]
  },
  {
    id:7,title:"Innov. Démocratiques",emoji:"💡",color:"#117864",
    idea:"Face à la crise de légitimité de la démocratie représentative, la Belgique est pionnière avec des panels citoyens et commissions délibératives, notamment en Communauté germanophone.",
    sections:[
      {title:"Crise de la démocratie représentative ?",pts:["① Abstention en hausse (sauf BE grâce à l'obligation)","② Déclin de l'adhésion aux partis depuis les années 1980","③ Déclin de la confiance envers la démocratie","④ Insatisfaction vis-à-vis des institutions","⑤ Succès des formations populistes/anti-systèmes"]},
      {title:"Qui doit décider ?",pts:["Représentants élus → démocratie représentative","Citoyens → démocratie directe","Experts → expertocratie","Combinaison → solution mixte (souvent la plus soutenue)","Tension : démocratie participative vs furtive (Hibbing & Theiss-Morse)"]},
      {title:"Triangle de la démocratie",pts:["Équilibre : représentation + participation + délibération","Échelle d'Arnstein : non-participation → symbolique → effective"]},
      {title:"G1000 (2011)",pts:["Réaction aux 541 jours sans gouvernement","704 citoyens tirés au sort à Bruxelles","Thèmes : sécu sociale, redistribution, immigration"]},
      {title:"Dialogue citoyen permanent (Comm. DE, 2019)",pts:["Conseil citoyen (24 tirés au sort) : choisit les sujets","Assemblées citoyennes (25-50 tirés au sort dès 16 ans) : délibèrent","Secrétariat permanent : soutien logistique","Le Parlement DOIT discuter et motiver tout refus"]},
      {title:"Commissions délibératives mixtes",pts:["Mixtes : députés + citoyens tirés au sort","PRB/CCC : 45 citoyens + 15 parlementaires","ACCF : 36 citoyens + 12 parlementaires","Obligation de suivi ou justification du refus"]},
      {title:"Obstacle constitutionnel",pts:["Art. 33 fonde la démocratie représentative","Conseil d'État : faut modifier la Constitution pour la démocratie directe","Art. 39bis (2014) : consultations populaires régionales possibles (sauf finances)"]}
    ],
    lexique:[
      {t:"Mini-public",d:"Groupe de citoyens tirés au sort délibérant sur un sujet politique"},
      {t:"Démocratie délibérative",d:"Forme fondée sur la discussion collective entre citoyens"},
      {t:"Démocratie furtive",d:"Les citoyens préfèrent un système efficace plutôt que participatif"},
      {t:"Échelle d'Arnstein",d:"Classification des niveaux de participation : manipulation → contrôle citoyen"},
      {t:"G1000",d:"Sommet citoyen de 2011 (704 Belges tirés au sort)"}
    ]
  },
  {
    id:8,title:"Système Administratif",emoji:"⚙️",color:"#943126",
    idea:"L'administration prépare, objective et applique les décisions — pas un simple exécutant. Le NPM a introduit des logiques de marché, mais les cabinets ministériels restent très puissants.",
    sections:[
      {title:"Administrations : pas un bloc",pts:["Principe d'exclusivité : administrations à chaque niveau","Les entités définissent, le local applique","Ex : carte d'identité (fédéral → commune), déchets (commune → décrets régionaux)"]},
      {title:"Structures administratives",pts:["Structure unique (ex : FWB) : hiérarchie verticale, validations longues","Structures éclatées (ex : SPF fédéraux) : plus de flexibilité","12 SPF + 2 SPP au niveau fédéral"]},
      {title:"Mise en œuvre et continuité",pts:["Politique publique JAMAIS linéaire — réinterprétation à chaque niveau","Serial Loyalist (C. Hood) : loyaux au service, pas au parti","Continuité même sans gouvernement de plein exercice"]},
      {title:"Tutelle",pts:["Contrôle hiérarchique : peut annuler, suspendre ou réformer un acte","Ex : Région wallonne prend tutelle de communes en difficulté","Tutelle directe (ministre) vs indirecte (structures intermédiaires)"]},
      {title:"Mission ≠ Opérateur",pts:["Mission (transport, enseignement) assurée par divers opérateurs","Admin publiques, sociétés publiques (TEC), organismes d'intérêt public, ou privé","Parastataux (fédéral), pararégionaux (régions), paracommunautaires (communautés)"]},
      {title:"Fonctionnaires",pts:["Statut : nomination → garantie d'emploi, stabilité","Contractuels : contrat classique, moins de protection","Mandataires : fonctions à durée déterminée","Tendance : augmentation des contractuels"]},
      {title:"New Public Management (NPM)",pts:["Contexte années 80 : néolibéralisme (Reagan, Thatcher)","Principes : désagrégation, concurrence, culture évaluative, contrats de gestion","Responsabilisation des hauts fonctionnaires, réduction des coûts"]},
      {title:"Menaces",pts:["« Starve the beast » : réduire les moyens pour justifier le privé","Privatisation / libéralisation","Non-remplacement des retraités","Inégalités de ressources entre administrations"]}
    ],
    lexique:[
      {t:"SPF",d:"Service Public Fédéral — structure administrative fédérale"},
      {t:"Serial Loyalist",d:"Fonctionnaire loyal au service indépendamment du parti (C. Hood)"},
      {t:"NPM",d:"New Public Management — logiques de marché appliquées au secteur public"},
      {t:"Starve the beast",d:"Réduire les moyens publics pour justifier le recours au privé"},
      {t:"Street-level bureaucrat",d:"Fonctionnaire de terrain avec marge de manœuvre dans l'application"},
      {t:"Tutelle",d:"Contrôle d'une autorité supérieure sur les actes d'une autorité administrative"}
    ]
  },
  {
    id:9,title:"Enjeux Contemporains",emoji:"🌍",color:"#1F618D",
    idea:"Dépilarisation, post-vérité, polarisation, montée de la justice constitutionnelle et influences extérieures. Les partis sont « juridiquement évanescents » mais omniprésents.",
    sections:[
      {title:"(Dé)pilarisation",pts:["Les piliers perdent de l'influence → on peut passer d'un réseau à l'autre","Perte de prévisibilité du comportement électoral","Existences atomisées : le narratif personnel prime","Mais dépendance au sentier : les structures subsistent"]},
      {title:"Communication politique",pts:["Catch all : partis attrape-tout","Renversement : on construit les politiques sur ce qui est « vendeur »","Vulgarisation → simplisme → raccourcis et demi-vérités","Quantification algorithmique des publications"]},
      {title:"Post-vérité et polarisation",pts:["Émotions et croyances > faits","Mondes cloisonnés par algorithmes (« opinion de la vicinalité »)","Stratégie du choc : proposer l'extrême pour faire passer l'intermédiaire","Positions nuancées inaudibles, logique binaire"]},
      {title:"Justice constitutionnelle et administrative",pts:["Cour constitutionnelle (ex Cour d'arbitrage, 1989) : contrôle art. 10-11 (égalité)","Rend des arrêts sur les normes législatives uniquement","Conseil d'État (1946) : contentieux (annule décisions admin) + législation (avis ex ante)","« République des juges » : pouvoir interprétatif croissant"]},
      {title:"Influence extérieure et création de partis",pts:["Belgique : actions surtout symboliques (résolutions), dilution via l'UE","Le mot « parti » n'apparaît JAMAIS dans la Constitution","Partis « juridiquement évanescents » : quasi pas d'obstacles à la création","Loi du 4 juillet 1989 : financement et dépenses électorales"]}
    ],
    justice:[
      {n:"Cour constitutionnelle",items:["Ex « Cour d'arbitrage » (loi 6 jan. 1989)","Arbitre les conflits de compétences entre entités","Contrôle les normes LÉGISLATIVES (lois/décrets) vs art. 10-11","Rend des ARRÊTS (pas des avis)","Citoyens peuvent l'invoquer via méthode combinatoire"]},
      {n:"Conseil d'État",items:["Créé par loi du 23 déc. 1946","Section contentieux : annule les décisions ADMINISTRATIVES illégales","Section législation : avis ex ante sur les projets de loi (non contraignant)","Intervient APRÈS une décision (contentieux) ou AVANT (législation)"]}
    ],
    lexique:[
      {t:"Post-vérité",d:"Contexte où les émotions comptent plus que les faits"},
      {t:"Catch all",d:"Parti attrape-tout visant le plus large électorat"},
      {t:"Stratégie du choc",d:"Proposer l'extrême pour faire accepter l'intermédiaire"},
      {t:"Cour constitutionnelle",d:"Contrôle la conformité des lois à la Constitution"},
      {t:"Conseil d'État",d:"Contrôle les décisions administratives et donne des avis"},
      {t:"Fenêtre d'Overton",d:"Gamme d'idées acceptables, déplaçable par des propositions extrêmes"}
    ]
  },
  {
    id:10,title:"Particratie & Cabinets",emoji:"👔",color:"#6E2C00",
    idea:"Les partis dominent tout. Le Kern prend les décisions clés. Les cabinets ministériels sont des bureaucraties parallèles résistantes aux réformes. La démocratie est un processus, jamais un état figé.",
    sections:[
      {title:"Particratie (De Winter)",pts:["Système dominé par les partis à TOUS les niveaux","Concept des années 70 (littérature italienne)","Qui dirige ? Le PM, le gouvernement, ou les présidents de partis ?","En BE : les présidents de partis → rôle déterminant depuis les années 70"]},
      {title:"Le Kern Cabinet",pts:["PM + vice-PM (représentant les partis de la coalition)","Prend les décisions AVANT le Conseil des ministres","Le Conseil (20+ membres) entérine souvent sans modifier","Centralisation au profit des partis, au détriment du collégial"]},
      {title:"Accords de gouvernement",pts:["Documents très détaillés : politiques, autorisations, calendrier","Ministres = marge de manœuvre limitée → appliquent l'accord","Le gouvernement devient en partie un organe d'exécution"]},
      {title:"Politisation des nominations",pts:["Historiquement : postes attribués selon l'appartenance politique","Marche blanche (1996) → réformes : examens, CSJ","Plus objectivé mais politisation pas totalement disparue"]},
      {title:"Cabinets ministériels (Brans)",pts:["Institution ancienne (XIXe) — spécifique BE/FR/IT","Modèle belge : structure importante, hiérarchisée, politisée","≠ modèle wilsonien (séparation politique/admin) ou Westminster","Forte osmose cabinets/administration : carrières hybrides","« Dark princes » : influence réelle mais peu visible"]},
      {title:"Risques pour la démocratie",pts:["Nominations basées sur loyauté > compétence","Népotisme/réseautage, opacité","Tension : efficacité (stabilité) vs qualité démocratique","Réformes GRECO : code de conduite, déclarations d'intérêts"]},
      {title:"Démocratie comme processus (Petra Meier)",pts:["Jamais un état fixe → toujours en construction","Analyse par « adjectifs » : libérale, représentative, délibérative","Chaque forme relie valeurs à institutions concrètes","Enjeux : quotas, alternance sur listes, diversité au-delà du genre"]}
    ],
    lexique:[
      {t:"Particratie",d:"Système politique dominé par les partis à tous les niveaux"},
      {t:"Kern",d:"Cabinet restreint (PM + vice-PM) prenant les décisions clés"},
      {t:"Dark princes",d:"Conseillers de cabinets : influents mais invisibles"},
      {t:"Décabinetisation",d:"Tentatives (échouées) de réduire le pouvoir des cabinets"},
      {t:"Blame shifting",d:"Renvoi de responsabilité entre ministre et conseillers"},
      {t:"CSJ",d:"Conseil Supérieur de la Justice — objectiver les nominations post-marche blanche"}
    ]
  },
  {
    id:11,title:"L'Extrême Droite",emoji:"⚠️",color:"#7B241C",
    idea:"Dominée par le Vlaams Belang en Flandre. Malgré son poids électoral, le cordon sanitaire l'a longtemps tenue hors du pouvoir. Marginale en Wallonie pour 5 raisons structurelles.",
    sections:[
      {title:"Définition : concept parapluie",pts:["Idéologie en 3 dimensions : monde actuel → monde idéal → programme d'action","Inégalitarisme : hiérarchise les groupes","Nationalisme exclusif : identité homogène, exclusion","Radicalisme : moyens remettant en cause l'État de droit","⚠ Extrême droite ≠ populisme (discours, pas idéologie)"]},
      {title:"4 causes du développement",pts:["Contexte de crises : économique, migratoire, sécuritaire","Protestation : perte de confiance dans les institutions","Stratégie : fake news + dédiabolisation","Rôle des partis traditionnels : reprennent le vocabulaire d'ED"]},
      {title:"Cas belge : le Vlaams Belang",pts:["Continuité Vlaams Blok → VB (condamnation racisme 2004)","2e parti de Flandre, au coude-à-coude avec la N-VA","Dépasse le million de voix en 2024","Ninove 2024 : majorité absolue → cordon impossible","Brecht, Izegem, Ramsdonk : accès au pouvoir via alliances"]},
      {title:"Au-delà des partis : la métapolitique",pts:["Gagner la « bataille culturelle » avant les élections","Schild & Vrienden (Van Langenhove) : idées identitaires chez les jeunes","Influence via groupes, réseaux, événements hors partis"]}
    ],
    phases:[
      {p:"1945 → 50s",e:"Marginalité, incapacité à se redéployer (ex : parti néo-nazi dissous en Allemagne)"},
      {p:"50s → 70s",e:"Restructuration éphémère (ex : Poujade en France 1956, Le Pen)"},
      {p:"70s → 90s",e:"Ancrage durable : FN en France, Vlaams Blok en BE. Dédiabolisation progressive"},
      {p:"Fin 90s → ajd",e:"Volonté d'accéder au pouvoir : FPÖ (Autriche), Orbán (Hongrie), Meloni (Italie)"}
    ],
    facteurs:[
      {n:"① Divisions internes",d:"Dizaines de scissions — conflits interpersonnels, pas idéologiques"},
      {n:"② Pas de leader charismatique",d:"Aucune figure capable de rassembler"},
      {n:"③ Société civile mobilisée",d:"Décryptage, mouvements antifascistes (ex : « Chez nous » bloqué)"},
      {n:"④ Cordon sanitaire médiatique",d:"Pas de temps de parole libre en direct (Pacte culturel + décret RTBF)"},
      {n:"⑤ Faiblesse du sentiment national",d:"Identité belge/wallonne floue → dur de mobiliser un nationalisme"}
    ],
    lexique:[
      {t:"Cordon sanitaire",d:"Accord de ne jamais former de coalition avec l'extrême droite"},
      {t:"Cordon sanitaire médiatique",d:"Exclusion de l'ED des plateaux en direct (BE FR)"},
      {t:"Dédiabolisation",d:"Stratégie pour paraître moins extrême et gagner en légitimité"},
      {t:"Métapolitique",d:"Influence culturelle en amont des élections"},
      {t:"Populisme",d:"Discours opposant « le peuple » aux « élites » — pas une idéologie"},
      {t:"Grand remplacement",d:"Théorie conspirationniste sur le remplacement de la population européenne"}
    ]
  }
];

const Pill = ({children,bg,color:c}) => <span style={{display:"inline-block",padding:"2px 9px",borderRadius:16,fontSize:10,fontWeight:700,background:bg,color:c,letterSpacing:.4,textTransform:"uppercase"}}>{children}</span>;

export default function App(){
  const[ci,setCi]=useState(0);
  const[tab,setTab]=useState("s");
  const[op,setOp]=useState({});
  const ch=C[ci];
  const tgl=k=>setOp(p=>({...p,[k]:p[k]===undefined?false:!p[k]}));

  const tabs=[{k:"s",l:"📖 Synthèse"},{k:"l",l:"🧠 Lexique"}];
  if(ch.timeline||ch.droitVote||ch.pactes||ch.phases) tabs.splice(1,0,{k:"t",l:"⏳ Chrono"});
  if(ch.clivages) tabs.splice(1,0,{k:"c",l:"⚔️ Clivages"});
  if(ch.reformes) tabs.splice(tabs.length-1,0,{k:"r",l:"🏗️ Réformes"});
  if(ch.mecanismes) tabs.splice(tabs.length-1,0,{k:"m",l:"🔐 Mécanismes"});
  if(ch.familles) tabs.splice(tabs.length-1,0,{k:"f",l:"🗳️ Familles"});
  if(ch.parlements) tabs.splice(tabs.length-1,0,{k:"p",l:"🏛️ Parlements"});
  if(ch.justice) tabs.splice(tabs.length-1,0,{k:"j",l:"⚖️ Justice"});
  if(ch.facteurs) tabs.splice(tabs.length-1,0,{k:"w",l:"🇧🇪 Wallonie"});

  const TL=ch.timeline||ch.droitVote||ch.pactes||ch.phases||[];
  const tlData=ch.timeline?ch.timeline.map(x=>({y:x.d,e:x.e,h:x.h})):
    ch.droitVote?ch.droitVote.map(x=>({y:x.y,e:x.e,h:x.h})):
    ch.pactes?ch.pactes.map(x=>({y:x.y,e:`${x.n} — ${x.d}`,h:1})):
    ch.phases?ch.phases.map(x=>({y:x.p,e:x.e,h:1})):[];

  return(
    <div style={{minHeight:"100vh",background:"#FAFAF8",color:"#1a1a1a",fontFamily:"'Georgia','Times New Roman',serif"}}>
      {/* Header */}
      <div style={{background:"#fff",borderBottom:"2px solid #e8e4df",padding:"18px 16px 12px",textAlign:"center"}}>
        <div style={{fontSize:10,letterSpacing:3,color:"#999",textTransform:"uppercase"}}>UCLouvain · Bac 3 ECGE</div>
        <h1 style={{fontSize:19,fontWeight:800,margin:"3px 0 0",color:"#1a1a1a",fontFamily:"system-ui,sans-serif"}}>Système Politique & Administratif Belge</h1>
        <div style={{fontSize:11,color:"#bbb",marginTop:2}}>Fiches de Révision Complètes · 11 Chapitres</div>
      </div>

      {/* Chapter selector */}
      <div style={{display:"flex",gap:5,padding:"12px 10px 4px",overflowX:"auto"}}>
        {C.map((c,i)=>(
          <button key={c.id} onClick={()=>{setCi(i);setTab("s");setOp({})}} style={{
            flex:"0 0 auto",padding:"7px 10px",borderRadius:9,
            border:ci===i?`2px solid ${c.color}`:"2px solid #e8e4df",
            background:ci===i?c.color+"10":"#fff",color:ci===i?c.color:"#999",
            cursor:"pointer",fontSize:10,fontWeight:700,fontFamily:"system-ui,sans-serif",whiteSpace:"nowrap"
          }}><span style={{fontSize:14}}>{c.emoji}</span> {c.id}</button>
        ))}
      </div>

      {/* Chapter header */}
      <div style={{margin:"8px 12px",padding:"16px 16px",borderRadius:14,background:"#fff",border:`2px solid ${ch.color}20`,position:"relative",overflow:"hidden"}}>
        <div style={{position:"absolute",top:-20,right:-10,fontSize:70,opacity:.05}}>{ch.emoji}</div>
        <Pill bg={ch.color+"15"} color={ch.color}>Chapitre {ch.id}</Pill>
        <h2 style={{fontSize:18,fontWeight:800,margin:"6px 0 8px",color:ch.color,fontFamily:"system-ui,sans-serif"}}>{ch.title}</h2>
        <div style={{fontSize:12.5,lineHeight:1.55,color:"#444",background:"#FAFAF8",borderRadius:8,padding:"10px 12px",borderLeft:`3px solid ${ch.color}`}}>🎯 {ch.idea}</div>
      </div>

      {/* Tabs */}
      <div style={{display:"flex",gap:5,padding:"2px 12px 8px",flexWrap:"wrap"}}>
        {tabs.map(t=>(
          <button key={t.k} onClick={()=>setTab(t.k)} style={{
            padding:"6px 13px",borderRadius:18,border:"none",fontSize:11,fontWeight:600,cursor:"pointer",
            fontFamily:"system-ui,sans-serif",background:tab===t.k?ch.color:"#e8e4df",color:tab===t.k?"#fff":"#666"
          }}>{t.l}</button>
        ))}
      </div>

      {/* Content */}
      <div style={{padding:"0 12px 50px"}}>

        {/* Synthèse */}
        {tab==="s"&&ch.sections.map((sec,i)=>{
          const isO=op[i]!==false;
          return(<div key={i} style={{background:"#fff",borderRadius:11,border:"1px solid #e8e4df",marginBottom:7,overflow:"hidden"}}>
            <button onClick={()=>tgl(i)} style={{width:"100%",padding:"11px 12px",background:"none",border:"none",display:"flex",alignItems:"center",gap:8,cursor:"pointer",color:"#1a1a1a",textAlign:"left"}}>
              <span style={{width:24,height:24,borderRadius:6,background:ch.color+"12",color:ch.color,display:"flex",alignItems:"center",justifyContent:"center",fontSize:11,fontWeight:800,flexShrink:0,fontFamily:"system-ui,sans-serif"}}>{i+1}</span>
              <span style={{fontSize:12.5,fontWeight:700,flex:1,fontFamily:"system-ui,sans-serif"}}>{sec.title}</span>
              <span style={{fontSize:15,color:"#ccc",transform:isO?"rotate(90deg)":"rotate(0)",transition:".15s"}}>›</span>
            </button>
            {isO&&<div style={{padding:"0 12px 10px 44px"}}>
              {sec.pts.map((p,j)=><div key={j} style={{fontSize:12.5,lineHeight:1.55,color:"#444",padding:"3px 0",borderBottom:j<sec.pts.length-1?"1px solid #f5f3f0":"none",display:"flex",gap:7}}>
                <span style={{color:ch.color,flexShrink:0,fontWeight:700}}>▸</span><span>{p}</span>
              </div>)}
            </div>}
          </div>);
        })}

        {/* Timeline */}
        {tab==="t"&&tlData.length>0&&<div style={{position:"relative",paddingLeft:20}}>
          <div style={{position:"absolute",left:5,top:6,bottom:6,width:2,background:`linear-gradient(to bottom,${ch.color},${ch.color}30)`}}/>
          {tlData.map((it,i)=><div key={i} style={{display:"flex",gap:12,padding:"8px 0",position:"relative"}}>
            <div style={{position:"absolute",left:-18,top:12,width:10,height:10,borderRadius:"50%",background:it.h?ch.color:"#fff",border:`2px solid ${it.h?ch.color:"#ccc"}`,boxShadow:it.h?`0 0 8px ${ch.color}40`:"none"}}/>
            <div style={{background:it.h?ch.color+"08":"#fff",border:`1px solid ${it.h?ch.color+"30":"#e8e4df"}`,borderRadius:9,padding:"9px 12px",flex:1}}>
              <div style={{fontSize:10,fontWeight:800,color:ch.color,letterSpacing:.4}}>{it.y}</div>
              <div style={{fontSize:12.5,color:"#444",marginTop:2}}>{it.e}</div>
            </div>
          </div>)}
        </div>}

        {/* Clivages */}
        {tab==="c"&&ch.clivages&&ch.clivages.map((cl,i)=><div key={i} style={{background:"#fff",borderRadius:11,border:`1px solid ${cl.col}25`,padding:14,marginBottom:7,borderLeft:`4px solid ${cl.col}`}}>
          <div style={{display:"flex",alignItems:"center",gap:7,marginBottom:6}}>
            <span style={{fontSize:14,fontWeight:800,color:cl.col,fontFamily:"system-ui,sans-serif"}}>{cl.n}</span>
            <Pill bg={cl.col+"12"} color={cl.col}>{cl.a}</Pill>
          </div>
          <div style={{fontSize:12.5,color:"#555",marginBottom:5}}><b style={{color:"#333"}}>Opposition :</b> {cl.o}</div>
          <div style={{fontSize:11.5,color:cl.col,background:cl.col+"10",padding:"5px 10px",borderRadius:7,display:"inline-block",fontWeight:600}}>→ {cl.c}</div>
        </div>)}

        {/* Réformes */}
        {tab==="r"&&ch.reformes&&ch.reformes.map((r,i)=><div key={i} style={{background:"#fff",borderRadius:11,border:"1px solid #e8e4df",padding:14,marginBottom:7}}>
          <div style={{display:"flex",alignItems:"baseline",gap:8,marginBottom:6}}>
            <span style={{fontSize:20,fontWeight:900,color:ch.color,fontFamily:"system-ui,sans-serif"}}>{r.y}</span>
            <Pill bg={ch.color+"12"} color={ch.color}>{r.n} réforme</Pill>
          </div>
          <div style={{fontSize:12.5,color:"#444",lineHeight:1.55}}>
            {r.c.split(" · ").map((it,j)=><div key={j} style={{display:"flex",gap:7,padding:"2px 0"}}><span style={{color:ch.color}}>▸</span><span>{it}</span></div>)}
          </div>
        </div>)}

        {/* Mécanismes */}
        {tab==="m"&&ch.mecanismes&&ch.mecanismes.map((m,i)=><div key={i} style={{background:"#fff",borderRadius:11,border:"1px solid #e8e4df",padding:"12px 14px",marginBottom:6}}>
          <div style={{fontSize:13,fontWeight:700,color:"#D4AC0D",fontFamily:"system-ui,sans-serif",marginBottom:4}}>🔐 {m.n}</div>
          <div style={{fontSize:12.5,color:"#555",lineHeight:1.5}}>{m.d}</div>
        </div>)}

        {/* Familles */}
        {tab==="f"&&ch.familles&&ch.familles.map((f,i)=>{
          const isO=op[`f${i}`]!==false;
          return(<div key={i} style={{background:"#fff",borderRadius:11,border:`1px solid ${f.col}25`,marginBottom:7,overflow:"hidden"}}>
            <button onClick={()=>setOp(p=>({...p,[`f${i}`]:!p[`f${i}`]}))} style={{width:"100%",padding:"12px 14px",background:"none",border:"none",display:"flex",alignItems:"center",gap:8,cursor:"pointer",color:"#1a1a1a"}}>
              <span style={{fontSize:17}}>{f.emoji}</span>
              <span style={{fontSize:13,fontWeight:700,color:f.col,flex:1,textAlign:"left",fontFamily:"system-ui,sans-serif"}}>{f.name}</span>
              <span style={{fontSize:15,color:"#ccc",transform:isO?"rotate(90deg)":"rotate(0)",transition:".15s"}}>›</span>
            </button>
            {isO&&<div style={{padding:"0 14px 10px",position:"relative",marginLeft:26}}>
              <div style={{position:"absolute",left:3,top:0,bottom:10,width:2,background:f.col+"35"}}/>
              {f.evts.map((ev,j)=><div key={j} style={{display:"flex",gap:10,padding:"5px 0 5px 18px",position:"relative"}}>
                <div style={{position:"absolute",left:-2,top:10,width:7,height:7,borderRadius:"50%",background:f.col}}/>
                <span style={{fontSize:10,fontWeight:800,color:f.col,minWidth:50,flexShrink:0}}>{ev.y}</span>
                <span style={{fontSize:12.5,color:"#555"}}>{ev.e}</span>
              </div>)}
            </div>}
          </div>);
        })}

        {/* Parlements */}
        {tab==="p"&&ch.parlements&&ch.parlements.map((p,i)=><div key={i} style={{background:"#fff",borderRadius:11,border:"1px solid #e8e4df",padding:14,marginBottom:7}}>
          <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:5}}>
            <span style={{fontSize:14,fontWeight:800,color:ch.color,fontFamily:"system-ui,sans-serif"}}>{p.n}</span>
            <Pill bg={ch.color+"12"} color={ch.color}>{p.m} membres</Pill>
          </div>
          <div style={{fontSize:12.5,color:"#555",lineHeight:1.5}}>{p.d}</div>
        </div>)}

        {/* Justice */}
        {tab==="j"&&ch.justice&&ch.justice.map((j,i)=><div key={i} style={{background:"#fff",borderRadius:11,border:`1px solid ${ch.color}25`,padding:14,marginBottom:7,borderLeft:`4px solid ${ch.color}`}}>
          <div style={{fontSize:14,fontWeight:800,color:ch.color,fontFamily:"system-ui,sans-serif",marginBottom:8}}>{j.n}</div>
          {j.items.map((it,k)=><div key={k} style={{fontSize:12.5,color:"#444",padding:"3px 0",display:"flex",gap:7}}>
            <span style={{color:ch.color,fontWeight:700}}>▸</span><span>{it}</span>
          </div>)}
        </div>)}

        {/* Facteurs Wallonie */}
        {tab==="w"&&ch.facteurs&&<>
          <div style={{fontSize:13,fontWeight:700,color:ch.color,fontFamily:"system-ui,sans-serif",marginBottom:8}}>Pourquoi l'ED est marginale en Wallonie ?</div>
          {ch.facteurs.map((f,i)=><div key={i} style={{background:"#fff",borderRadius:11,border:"1px solid #e8e4df",padding:"12px 14px",marginBottom:6}}>
            <div style={{fontSize:13,fontWeight:700,color:ch.color,fontFamily:"system-ui,sans-serif"}}>{f.n}</div>
            <div style={{fontSize:12.5,color:"#555",marginTop:3,lineHeight:1.5}}>{f.d}</div>
          </div>)}
        </>}

        {/* Lexique */}
        {tab==="l"&&ch.lexique.map((it,i)=><div key={i} style={{background:"#fff",borderRadius:9,border:"1px solid #e8e4df",padding:"10px 12px",marginBottom:5}}>
          <span style={{fontSize:12.5,fontWeight:800,color:ch.color,fontFamily:"system-ui,sans-serif"}}>{it.t}</span>
          <div style={{fontSize:12.5,color:"#555",marginTop:2,lineHeight:1.45}}>{it.d}</div>
        </div>)}
      </div>
    </div>
  );
}
