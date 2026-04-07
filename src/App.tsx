import { useState, useRef, useEffect } from 'react'
import { Play, Pause, RotateCcw, Heart, ChevronLeft, Volume2, VolumeX, Home } from 'lucide-react'

// ─── TYPES ───────────────────────────────────────────────────────────────────
type Screen = 'home' | 'create' | 'story' | 'library'

interface Story {
  id: string
  title: string
  text: string
  hero: string
  world: string
  theme: string
  createdAt: string
  favorite: boolean
}

interface StoryTemplate {
  title: string
  text: string
  theme: string
}

// ─── CONSTANTS ───────────────────────────────────────────────────────────────
const HEROES = [
  { id: 'lion', emoji: '🦁', name: 'Léo le lion courageux' },
  { id: 'dragon', emoji: '🐉', name: 'Drago le dragon gentil' },
  { id: 'fairy', emoji: '🧚', name: 'Fée Lumière' },
  { id: 'robot', emoji: '🤖', name: 'Robo l\'aventurier' },
  { id: 'unicorn', emoji: '🦄', name: 'Licorne Arc-en-ciel' },
  { id: 'wizard', emoji: '🧙', name: 'Magicien Merlin' },
  { id: 'mermaid', emoji: '🧜', name: 'Sirène Perla' },
  { id: 'astronaut', emoji: '👨‍🚀', name: 'Astro l\'explorateur' },
  { id: 'knight', emoji: '🧝', name: 'Elfe forestier' },
  { id: 'dinosaur', emoji: '🦕', name: 'Dino le gentil' },
  { id: 'butterfly', emoji: '🦋', name: 'Papillon Magie' },
  { id: 'bear', emoji: '🐻', name: 'Nounours courageux' },
]

const WORLDS = [
  { id: 'forest', emoji: '🌲', name: 'Forêt enchantée' },
  { id: 'ocean', emoji: '🌊', name: 'Fond des océans' },
  { id: 'space', emoji: '🌌', name: 'Galaxie lointaine' },
  { id: 'candy', emoji: '🍭', name: 'Pays des bonbons' },
  { id: 'castle', emoji: '🏰', name: 'Royaume magique' },
  { id: 'volcano', emoji: '🌋', name: 'Île volcanique' },
  { id: 'cloud', emoji: '☁️', name: 'Cité dans les nuages' },
  { id: 'jungle', emoji: '🌿', name: 'Jungle mystérieuse' },
]

const THEMES = [
  { id: 'courage', emoji: '💪', name: 'Le courage' },
  { id: 'friendship', emoji: '🤝', name: 'L\'amitié' },
  { id: 'kindness', emoji: '💝', name: 'La gentillesse' },
  { id: 'adventure', emoji: '🗺️', name: 'L\'aventure' },
  { id: 'magic', emoji: '✨', name: 'La magie' },
  { id: 'sharing', emoji: '🎁', name: 'Le partage' },
  { id: 'perseverance', emoji: '🌟', name: 'La persévérance' },
  { id: 'family', emoji: '👨‍👩‍👦', name: 'La famille' },
]

const STORY_KEY = 'contes_magiques_stories_v1'
const CHILD_KEY = 'contes_magiques_child'

function loadStories(): Story[] {
  try { return JSON.parse(localStorage.getItem(STORY_KEY) || '[]') } catch { return [] }
}
function saveStories(s: Story[]) { localStorage.setItem(STORY_KEY, JSON.stringify(s)) }
function loadChildName(): string { return localStorage.getItem(CHILD_KEY) || '' }
function saveChildName(n: string) { localStorage.setItem(CHILD_KEY, n) }

// ─── STORY LIBRARY ────────────────────────────────────────────────────────────
const STORY_LIBRARY: StoryTemplate[] = [
  // ── COURAGE (10 histoires) ──────────────────────────────────────────────────
  {
    theme: 'courage',
    title: 'Le grand saut de {heroName}',
    text: `Dans {world}, vivait {heroName}, qui avait peur du grand pont de cristal suspendu au-dessus des nuages. Chaque matin, tous les habitants le traversaient en chantant, mais {heroName} restait toujours de ce côté-ci, les pattes tremblantes.\n\nUn jour, la petite {name} vint rendre visite à {heroName}. Elle tenait dans ses bras un chaton qui avait besoin de soins urgents, mais le guérisseur habitait de l'autre côté du pont. « Je t'accompagne », dit {heroName} d'une voix qu'il espérait ferme.\n\nEnsemble, ils s'avancèrent vers le pont. {heroName} ferma les yeux un instant, respira profondément, et posa un pied sur le cristal brillant. Puis un autre. Son cœur battait fort, très fort. Mais les encouragements doux de {name} résonnaient à ses oreilles comme une mélodie magique.\n\nArrivés au milieu, {heroName} osa ouvrir les yeux. La vue était à couper le souffle : des milliers d'étoiles brillaient tout autour d'eux, même en plein jour. « C'est magnifique ! » souffla-t-il, émerveillé.\n\nIls atteignirent l'autre rive, le chaton fut soigné, et {heroName} fit le chemin du retour la tête haute et le cœur léger. Ce soir-là, tous les habitants de {world} célébrèrent son courage.\n\n✨ Morale : Le vrai courage, ce n'est pas ne jamais avoir peur. C'est avancer malgré la peur, surtout quand on le fait pour quelqu'un qu'on aime.`
  },
  {
    theme: 'courage',
    title: '{heroName} et la grotte des ombres',
    text: `{world} était un endroit merveilleux, mais au fond de la grande forêt se trouvait la grotte des ombres. On disait qu'à l'intérieur vivaient des créatures terrifiantes. Personne n'osait s'en approcher.\n\nUn soir d'hiver, {name} tomba dans la grotte en courant après un cerf-volant. {heroName} entendit ses appels au secours. Tous les autres reculèrent, effrayés. Mais {heroName} ne pouvait pas abandonner son ami.\n\nIl alluma une petite torchère magique et entra dans la grotte. Son ombre dansait sur les murs de pierre. Des bruits étranges se faisaient entendre. Son estomac se serrait, mais ses pieds continuaient d'avancer.\n\nSoudain, il découvrit que les monstres terrifiants n'étaient que de petites chauve-souris qui avaient peur, elles aussi ! Elles s'étaient regroupées autour de {name} pour le tenir chaud.\n\n{heroName} prit doucement {name} par la main, remercia les chauve-souris de leur accueil inattendu, et les guida tous vers la sortie dans la lumière dorée du coucher de soleil.\n\n✨ Morale : Les choses que l'on redoute le plus sont souvent bien moins terribles qu'on ne l'imaginait. Le courage, c'est oser regarder ses peurs en face.`
  },
  {
    theme: 'courage',
    title: 'La voix de {heroName}',
    text: `Dans {world} se tenait chaque année un grand concours de chant. Tous les habitants adoraient chanter, sauf {heroName} qui avait une belle voix mais n'osait jamais la faire entendre. Il craignait que les autres se moquent de lui.\n\nCette année-là, le grand arbre de {world} était malade. Les sages avaient découvert qu'une seule chose pouvait le guérir : une chanson chantée avec tout son cœur, depuis le sommet de la colline. Mais quand les habitants apprenaient cela, la plupart reculaient, intimidés.\n\n{name}, le meilleur ami de {heroName}, le prit par l'épaule. « Tu as la plus belle voix de tout {world}. Tu le sais, et moi aussi. Chante pour l'arbre. Chante pour nous. »\n\n{heroName} monta la colline, les genoux tremblants. Il ferma les yeux, pensa à tout ce qu'il aimait, et commença à chanter. D'abord doucement, puis de plus en plus fort, sa voix s'envola comme un oiseau libre dans le ciel.\n\nL'arbre frémit, ses feuilles se remirent à briller d'or et de vert. Tous les habitants de {world} applaudirent en pleurant de joie.\n\n✨ Morale : Cacher ses talents par peur du jugement des autres, c'est priver le monde d'une chose précieuse. Avoir le courage de montrer qui l'on est vraiment est le plus beau des cadeaux.`
  },
  {
    theme: 'courage',
    title: '{heroName} défend le petit scarabée',
    text: `Dans {world}, un groupe de grands animaux se moquait d'un petit scarabée qui ne savait pas encore voler. {heroName} observait la scène de loin. Son cœur se serrait. Il savait qu'il devait intervenir, mais il avait peur de se retrouver seul contre tous.\n\nC'est alors qu'il pensa à {name}, qui lui disait toujours : « Une injustice que l'on voit et que l'on ne dit pas, c'est une injustice que l'on accepte. »\n\n{heroName} prit une grande inspiration et s'avança. D'une voix douce mais ferme, il dit : « Arrêtez. Ce n'est pas parce qu'il est petit qu'il mérite moins de respect. Nous avons tous commencé quelque part. »\n\nLe silence tomba sur {world}. Puis, un à un, les grands animaux baissèrent la tête, honteux. Le petit scarabée regarda {heroName} avec des yeux brillants de reconnaissance.\n\nDans les jours qui suivirent, {heroName} aida le scarabée à apprendre à voler. Et le jour où le petit insecte prit enfin son envol pour la première fois, toute la {world} était là pour applaudir.\n\n✨ Morale : Le vrai courage, c'est aussi de défendre ceux qui ne peuvent pas se défendre eux-mêmes, même quand c'est difficile.`
  },
  {
    theme: 'courage',
    title: 'La nuit de {heroName}',
    text: `{heroName} avait peur du noir. Chaque soir dans {world}, il laissait toutes les lumières allumées et se cachait sous ses couvertures. Ses amis ne le savaient pas, car il avait trop honte pour l'avouer.\n\nUn soir d'orage, toutes les lumières de {world} s'éteignirent. Un énorme craquement retentit : un arbre était tombé sur la maison de {name} ! Personne ne pouvait voir pour aider... sauf si quelqu'un avait le courage d'avancer dans l'obscurité.\n\n{heroName} se leva, les jambes molles. Il sortit dans la nuit noire. À chaque pas, il se répétait : « {name} a besoin de moi. {name} a besoin de moi. » Et peu à peu, ses yeux s'habituèrent à l'obscurité. Il vit les étoiles. La lune. Des lucioles qui dansaient.\n\nIl guida les secours jusqu'à la maison de {name}. Tout le monde fut sauvé. Et {heroName} réalisa que la nuit était bien moins effrayante qu'il ne le croyait.\n\nIl avoua sa peur à ses amis. Ils l'écoutèrent avec tendresse, et certains lui confièrent leurs propres peurs secrètes.\n\n✨ Morale : Avouer sa peur est déjà un acte courageux. Et souvent, c'est dans l'obscurité que l'on découvre les plus belles lumières.`
  },
  {
    theme: 'courage',
    title: '{heroName} et le géant triste',
    text: `Tout le monde fuyait le géant de {world}. Il était immense, sa voix faisait trembler les rochers, et son regard pouvait faire frissonner n'importe qui. Les habitants contournaient son territoire par des chemins bien plus longs.\n\nMais {heroName} avait remarqué quelque chose d'étrange : le géant pleurait souvent, seul dans sa montagne. Des larmes grosses comme des pierres roulaient sur ses joues.\n\n{name} vit {heroName} s'approcher de la montagne. « N'y va pas ! C'est trop dangereux ! » cria-t-il. Mais {heroName} continua d'avancer.\n\n« Pourquoi pleures-tu ? » demanda {heroName} en levant les yeux vers le géant.\n\nLe géant s'arrêta de sangloter, stupéfait. Jamais personne ne lui avait posé cette question. « Parce que tout le monde a peur de moi, » dit-il d'une voix douce comme le tonnerre lointain. « Et je suis si seul. »\n\nDepuis ce jour, {heroName} rendit visite au géant chaque semaine. Bientôt, d'autres habitants suivirent. Le géant devint le protecteur bienveillant de {world}, et sa tristesse disparut.\n\n✨ Morale : Il faut du courage pour s'approcher de ce qui nous fait peur. Mais parfois, derrière une apparence effrayante se cache simplement quelqu'un qui a besoin d'amitié.`
  },
  {
    theme: 'courage',
    title: 'Le premier jour de {heroName}',
    text: `C'était le premier jour de {heroName} dans la grande école de {world}. Son ventre était tout noué. Et si les autres ne voulaient pas jouer avec lui ? Et s'il faisait des erreurs devant tout le monde ?\n\n{name}, qui habitait juste à côté, l'avait rassuré la veille : « Tu es formidable. Ils vont t'adorer. » Mais ce matin, ces mots semblaient bien loin.\n\nDevant la grande porte de l'école, {heroName} s'arrêta. Son cœur battait si fort qu'il pensait que tout le monde pouvait l'entendre. Puis il pensa à tout ce qu'il savait faire : il était fort, il était curieux, il avait plein d'histoires à raconter.\n\nIl poussa la porte. Et le premier regard qu'il croisa fut celui d'un petit élève assis seul dans un coin, l'air aussi perdu que lui. {heroName} alla s'asseoir à côté de lui.\n\n« C'est ton premier jour aussi ? » demanda {heroName}.\n« Oui, » répondit l'autre. « Je m'appelle Félix. »\n« Moi c'est {heroName}. Alors on est deux ! »\n\nEt ce jour-là, {heroName} rentra à la maison avec un nouveau meilleur ami.\n\n✨ Morale : Le courage de faire le premier pas vers quelqu'un peut changer deux vies à la fois.`
  },
  {
    theme: 'courage',
    title: '{heroName} dit la vérité',
    text: `Un jour dans {world}, {heroName} fit une erreur. En jouant, il cassa accidentellement le vase préféré de la vieille Chouette-Sagesse. Personne ne l'avait vu. Il aurait pu partir sans rien dire.\n\nMais en regardant le vase brisé, {heroName} pensa à {name}, qui lui disait toujours : « Une petite vérité vaut mieux qu'un grand mensonge. »\n\nLe soir, {heroName} alla frapper à la porte de la Chouette-Sagesse. Son estomac se tordait. « C'est moi qui ai cassé ton vase, » dit-il d'une voix tremblante. « C'était un accident, et je suis vraiment, vraiment désolé. »\n\nLa Chouette-Sagesse le regarda longuement. Puis elle sourit. « Merci pour ta sincérité, {heroName}. Ce vase était ancien, mais ce qu'il représentait était plus important que la porcelaine. Sais-tu ce que c'était ? La confiance. Et toi, ce soir, tu m'en as donné encore plus. »\n\nEnsemble, ils ramassèrent les morceaux et les assemblèrent en un nouveau vase, encore plus beau que l'original.\n\n✨ Morale : Il faut beaucoup de courage pour avouer ses erreurs. Mais la vérité, même difficile, construit des ponts que les mensonges ne peuvent jamais bâtir.`
  },
  {
    theme: 'courage',
    title: 'La grande tempête de {world}',
    text: `Une terrible tempête s'abattit sur {world}. Les vents hurlaient, les éclairs zébraient le ciel, et tous les habitants se terraient chez eux, apeurés. Personne ne voulait sortir.\n\nMais {heroName} savait que la vieille Mamie Lotus était seule dans sa maison au bord de la falaise. Elle était trop âgée pour résister seule à la tempête.\n\n{name} accourut vers {heroName}. « Tu ne peux pas sortir ! C'est trop dangereux ! »\n« Mamie Lotus a besoin d'aide. Je dois y aller, » répondit {heroName} simplement.\n\nContre vents et tonnerre, {heroName} avança pas à pas. Le vent tentait de le renverser. La pluie fouettait son visage. Mais il pensait à Mamie Lotus, seule et effrayée, et cela lui donnait des forces nouvelles.\n\nIl arriva à la maison, renforça les volets, fit chauffer une soupe, et resta avec Mamie Lotus jusqu'à ce que la tempête se calme. Quand le soleil réapparut sur {world}, elle lui prit la main.\n\n« Tu es l'âme la plus brave que j'aie jamais connue, » dit-elle.\n\n✨ Morale : Le courage n'est pas l'absence de peur. C'est choisir d'agir pour les autres malgré la tempête qui gronde en soi.`
  },
  {
    theme: 'courage',
    title: '{heroName} et la compétition',
    text: `La grande compétition de {world} approchait. Tous les habitants s'entraînaient dur. {heroName} aussi, mais il n'était pas le plus rapide, ni le plus fort, ni le plus habile. Plusieurs fois, il pensa à abandonner.\n\n{name} venait l'encourager chaque soir. « L'important n'est pas de gagner. L'important, c'est d'oser participer malgré la peur d'échouer. »\n\nLe jour J, {heroName} se retrouva face à des adversaires impressionnants. Son cœur battait à tout rompre. Mais il respira profondément, ferma les yeux une seconde, et se dit : « Je suis là. Je donne tout ce que j'ai. »\n\nIl ne finit pas en première place. Mais il alla jusqu'au bout, sans abandonner, sans se laisser dépasser par la peur. Et quand il franchit la ligne d'arrivée, tous les habitants de {world} se levèrent pour l'acclamer.\n\nCe soir-là, {heroName} reçut le Prix du Cœur Vaillant, le prix le plus précieux de la compétition. Et {name} était le plus fier de tous.\n\n✨ Morale : Participer malgré la peur, aller jusqu'au bout malgré la difficulté : voilà ce qu'est le vrai courage. La victoire la plus belle, c'est celle sur soi-même.`
  },

  // ── FRIENDSHIP (10 histoires) ───────────────────────────────────────────────
  {
    theme: 'friendship',
    title: '{heroName} et le nouvel arrivant',
    text: `Un matin dans {world}, un nouvel habitant arriva. Il s'appelait Pip et il venait d'un pays lointain. Il ne connaissait personne, ne savait pas où aller, et regardait tout autour de lui avec des yeux perdus.\n\nTous les habitants de {world} étaient occupés, pressés, plongés dans leurs habitudes. Personne ne s'arrêtait. Personne, sauf {heroName}.\n\n« Bienvenue ! » dit {heroName} avec un grand sourire. « Je m'appelle {heroName}. Et toi ? »\n\nPip, surpris, bredouilla son prénom. {heroName} lui fit faire le tour de {world}, lui montra les meilleurs endroits, lui présenta {name} et tous les autres amis. À midi, ils partagèrent un repas ensemble.\n\nEn quelques jours, Pip n'était plus le nouvel arrivant. Il était l'ami de tout le monde. Et il apporta avec lui des jeux, des histoires et des chansons de son pays lointain qui enchantèrent {world} entière.\n\n{heroName} réalisa quelque chose d'important : chaque nouvelle amitié enrichit le monde d'une couleur qu'il ne connaissait pas encore.\n\n✨ Morale : Accueillir un inconnu avec chaleur peut transformer une solitude en amitié pour la vie. Ne laissons jamais quelqu'un se sentir invisible.`
  },
  {
    theme: 'friendship',
    title: 'La querelle de {heroName} et Luna',
    text: `{heroName} et Luna étaient les meilleurs amis du monde dans {world}. Ils faisaient tout ensemble. Jusqu'au jour où ils se disputèrent pour une raison si petite que, quelques jours plus tard, aucun des deux ne s'en souvenait vraiment.\n\nMais la fierté, elle, s'en souvenait. Ils ne se parlèrent plus pendant une semaine entière. {world} semblait plus triste, plus terne sans leur rire partagé.\n\n{name}, qui les connaissait bien tous les deux, invita chacun à son tour à une promenade. Il les amena sans le dire au même endroit, au pied du Grand Chêne où {heroName} et Luna avaient gravé leur amitié dans l'écorce des années plus tôt.\n\nQuand ils se retrouvèrent face à face, le silence fut d'abord gêné. Puis {heroName} murmura : « Tu me manques. » Et Luna répondit : « Tu me manques aussi. »\n\nIls se réconcilièrent en riant de leur propre fierté. Ce soir-là, ils gravèrent une nouvelle inscription sur le Chêne : « Une amitié vraie survit aux tempêtes. »\n\n✨ Morale : Une amitié solide peut traverser les querelles. Il suffit parfois d'un mot sincère pour que tout s'illumine à nouveau.`
  },
  {
    theme: 'friendship',
    title: '{heroName} et l\'ami différent',
    text: `Dans {world}, tout le monde ressemblait un peu à tout le monde. Mais un jour arriva Zara, qui était très différente : elle parlait autrement, aimait des choses étranges, et ses habitudes surprenaient tout le monde.\n\nBeaucoup d'habitants la regardaient avec méfiance. Pas {heroName}. Il était curieux, et la curiosité est la porte de l'amitié.\n\n{heroName} alla vers Zara et lui posa mille questions. Zara, d'abord surprise, se mit à raconter. Elle venait d'un monde où les arbres chantaient la nuit, où la pluie était dorée, où les enfants comme {name} apprenaient à parler aux étoiles.\n\nPlus {heroName} écoutait, plus il s'émerveillait. Il invita Zara à partager ses coutumes avec les habitants de {world}. Peu à peu, tout le monde tomba sous le charme de cette amie venue d'ailleurs.\n\n{world} devint un endroit bien plus riche et coloré qu'avant. Et {heroName} comprit que la différence n'est pas une barrière. C'est un cadeau.\n\n✨ Morale : Les amis différents de nous sont souvent ceux qui nous apprennent le plus sur le monde et sur nous-mêmes.`
  },
  {
    theme: 'friendship',
    title: 'Le cadeau invisible de {heroName}',
    text: `L'anniversaire de {name} approchait dans {world}. Tous les amis préparaient des cadeaux magnifiques : des pierres précieuses, des fleurs enchantées, des jouets merveilleux. Mais {heroName}, cette année, n'avait pas d'argent pour acheter quoi que ce soit.\n\nIl fut triste pendant plusieurs jours, puis il réfléchit. Qu'est-ce que {name} aimait vraiment ? Il adorait les histoires. Il adorait rire. Et il adorait les moments partagés.\n\nAlors {heroName} passa trois jours à préparer quelque chose d'invisible mais d'inestimable : il apprit par cœur la plus belle histoire du monde, celle qu'il inventa lui-même, pleine d'aventures et de magie, avec {name} comme héros.\n\nLe soir de l'anniversaire, pendant que les autres offraient leurs présents brillants, {heroName} prit la main de {name} et lui raconta son histoire. Quand il finit, {name} avait les larmes aux yeux.\n\n« C'est le plus beau cadeau que j'aie jamais reçu, » dit-il. « Tu as mis du toi dedans. »\n\n✨ Morale : Le meilleur cadeau que l'on puisse offrir à un ami, c'est du temps, de l'attention, et un peu de son cœur.`
  },
  {
    theme: 'friendship',
    title: '{heroName} aime son ami triste',
    text: `Un matin, {heroName} remarqua que {name} était différent. Il ne riait plus, ne jouait plus, et restait souvent seul dans son coin dans {world}. Ses yeux regardaient dans le vide.\n\nBeaucoup d'amis ne savaient pas quoi dire et s'éloignaient, gênés. Mais {heroName} s'approcha doucement et s'assit à côté de {name} sans rien dire. Juste là, présent.\n\nAu bout d'un long moment, {name} murmura : « Ma grand-mère est très malade. J'ai peur de la perdre. »\n\n{heroName} ne dit pas « ça va aller ». Il dit : « Je suis là. » Et il resta. Ils regardèrent ensemble le coucher de soleil sur {world}, en silence.\n\nLes jours suivants, {heroName} passa tous les matins voir {name}. Il lui apportait de petites choses qui le faisaient sourire : une fleur, une plume colorée, une blague nulle. Et peu à peu, le sourire de {name} revint.\n\n« Tu m'as sauvé, » dit {name} un soir. {heroName} secoua la tête : « Non. J'étais juste là. »\n\n✨ Morale : Parfois, la meilleure chose que l'on puisse faire pour un ami qui souffre, c'est simplement d'être présent, sans fuir, sans chercher les mots parfaits.`
  },
  {
    theme: 'friendship',
    title: 'Le secret de {heroName} et {name}',
    text: `{heroName} et {name} avaient un secret dans {world} : une cabane cachée derrière la grande cascade, que personne d'autre ne connaissait. C'était leur endroit magique, leur refuge, le lieu de toutes leurs confidences.\n\nUn jour, {heroName} voulut y amener d'autres amis. {name} hésite. « C'est notre endroit spécial. Si on le partage, il ne sera plus aussi magique. »\n\nMais la nouvelle amie Stella était seule, sans endroit à elle, sans personne à qui parler. {heroName} voyait sa tristesse et ne pouvait pas l'ignorer.\n\nTous les trois, ils allèrent à la cabane. Stella en resta bouche bée. Et là, quelque chose d'étrange se produisit : la cabane sembla s'agrandir. Elle était plus chaleureuse, plus lumineuse, plus vivante que jamais.\n\n« Je comprends maintenant, » dit {name} en souriant. « Partager un endroit magique ne le rend pas moins magique. Ça le rend encore plus magique. »\n\n✨ Morale : L'amitié n'est pas un gâteau qui se coupe en moins grands morceaux quand on l'offre. Plus on partage l'amitié, plus elle grandit.`
  },
  {
    theme: 'friendship',
    title: '{heroName} tient sa promesse',
    text: `{heroName} avait promis à {name} d'être là pour son grand spectacle dans {world}. Mais le jour J, {heroName} reçut une invitation pour une fête extraordinaire de l'autre côté de {world}. Tous ses autres amis y allaient.\n\nSon cœur hésita. La fête serait tellement amusante... Mais {name} l'attendait. {name} comptait sur lui. Cette pensée fut plus forte que tout.\n\n{heroName} envoya un message à ses autres amis pour s'excuser et arriva au spectacle de {name}. Quand {name} le vit dans le public, son visage s'illumina d'un sourire immense.\n\nLe spectacle fut magnifique. {name} chanta comme jamais il ne l'avait fait. Après, il dit à {heroName} : « J'ai vu ton visage dans le public et ça m'a donné des ailes. »\n\nPlus tard, {heroName} apprit que la fête n'avait pas été si extraordinaire que ça. Mais le sourire de {name} sur scène, lui, était inoubliable.\n\n✨ Morale : Tenir ses promesses, c'est montrer à nos amis qu'ils comptent plus que les distractions du moment. C'est cela, la vraie fidélité.`
  },
  {
    theme: 'friendship',
    title: 'Quand {heroName} rencontra son meilleur ennemi',
    text: `Dans {world}, {heroName} et Grizou se disputaient tout le temps. Qui était le plus rapide ? Qui connaissait le meilleur chemin ? Qui avait raison sur tout ? Ils se chamaillaient si souvent que tous les habitants souriaient en les voyant ensemble.\n\n{name} observait la scène depuis longtemps. Un jour, il dit à {heroName} : « Tu sais ce qui est drôle ? Tu ne te disputes comme ça qu'avec les gens qui t'intéressent vraiment. »\n\n{heroName} y pensa toute la nuit. C'était vrai. Il ne connaissait pas les défauts des autres aussi bien que ceux de Grizou. Il ne passait pas autant de temps avec personne d'autre.\n\nLe lendemain, au lieu de se disputer, {heroName} dit à Grizou : « J'ai besoin de toi pour résoudre une énigme. Tu es le seul assez malin. » Grizou, surpris, accepta.\n\nEnsemble, ils résolurent l'énigme. Puis ils rirent. Puis ils construisirent quelque chose ensemble. Et ils réalisèrent qu'ils étaient, en fait, les meilleurs amis du monde.\n\n✨ Morale : Parfois, nos plus grands adversaires sont ceux qui pourraient devenir nos plus grands amis. Il suffit d'essayer de voir l'autre avec de nouveaux yeux.`
  },
  {
    theme: 'friendship',
    title: 'L\'amitié de {heroName} voyage loin',
    text: `{heroName} et {name} étaient inséparables dans {world}. Mais un soir d'automne, {name} annonça quelque chose de triste : sa famille devait partir vivre dans un pays très lointain.\n\nLes derniers jours ensemble furent doux et mélancoliques. Ils firent tous leurs endroits favoris, partagèrent leurs meilleurs souvenirs, rirent une dernière fois sous leur arbre.\n\nLe matin du départ, {name} glissa quelque chose dans la poche de {heroName} : un petit caillou brillant qu'ils avaient trouvé ensemble au bord de la rivière. « Quand tu le regardes, pense à moi, » dit {name}.\n\n{heroName} pleurait mais souriait aussi. « L'amitié ne connaît pas les distances, » dit-il. « Tu seras toujours mon ami, même de l'autre bout du monde. »\n\nIls s'écrivirent des lettres chaque semaine. Parfois même, ils se retrouvaient en rêve dans leur {world} imaginaire. Et l'amitié resta entière, vivante, précieuse comme le caillou brillant.\n\n✨ Morale : Une vraie amitié ne se termine pas avec la distance. Elle voyage dans les lettres, dans les souvenirs, et dans le cœur de ceux qui se sont vraiment aimés.`
  },
  {
    theme: 'friendship',
    title: '{heroName} et le banquet de l\'amitié',
    text: `Un grand banquet allait avoir lieu dans {world}. Chacun devait apporter un plat. {heroName} voulait cuisiner quelque chose de spectaculaire pour épater tout le monde. Il cuisina pendant des heures un gâteau merveilleux.\n\nMais en chemin vers la fête, il glissa et le gâteau tomba. Il arriva les mains vides, la tête basse, certain que personne ne voudrait de lui sans son offrande.\n\n{name} le vit arriver et courut à sa rencontre. « Qu'est-ce qui s'est passé ? »\n{heroName} raconta. {name} éclata de rire, non pas pour se moquer, mais de soulagement. « On pensait que tu avais décidé de ne pas venir ! C'est TOI qu'on voulait, pas le gâteau ! »\n\nTous les amis réservèrent une place d'honneur à {heroName}. Ils partagèrent leurs plats avec lui, et le banquet fut le plus joyeux de tous. Pas à cause des gâteaux, mais à cause de la joie d'être ensemble.\n\n✨ Morale : Nos amis ne nous aiment pas pour ce que nous apportons. Ils nous aiment pour ce que nous sommes. Ta présence est toujours le plus beau des cadeaux.`
  },

  // ── KINDNESS (10 histoires) ─────────────────────────────────────────────────
  {
    theme: 'kindness',
    title: 'La fleur de {heroName}',
    text: `Dans {world}, {heroName} avait un jardin magnifique. Au centre poussait la plus belle fleur jamais vue : ses pétales changeaient de couleur selon les heures de la journée, et son parfum pouvait guérir les petits chagrins.\n\nUn matin, {heroName} vit {name} assis sous un arbre, la mine sombre. Il venait de perdre quelque chose qui lui tenait à cœur. Sans hésiter, {heroName} cueillit sa plus belle fleur et la lui offrit.\n\nLes habitants de {world} furent étonnés. « Tu as donné ta fleur la plus précieuse ! Tu n'en as plus qu'une seule maintenant. »\n\n{heroName} sourit. « Ma fleur sera plus belle dans les mains de quelqu'un qui en a besoin que dans mon jardin où je peux en prendre soin tous les jours. »\n\nLe lendemain matin, {heroName} découvrit quelque chose d'incroyable dans son jardin : là où il avait cueilli sa fleur, deux nouvelles fleurs avaient poussé, encore plus belles.\n\nLes habitants de {world} comprirent alors le secret du jardin : il grandissait à chaque geste de gentillesse.\n\n✨ Morale : La gentillesse est la seule chose qui, plus on en donne, plus on en reçoit. Un geste doux fait toujours pousser de nouvelles fleurs.`
  },
  {
    theme: 'kindness',
    title: '{heroName} et la vieille tortue',
    text: `Tout le monde dans {world} était toujours très pressé. On courait ici, on volait là, on sautait partout. Sauf la vieille tortue Mélodie, qui avançait si lentement que personne n'attendait jamais.\n\nUn jour de grand marché, la vieille Mélodie tentait de traverser la place bondée, mais la foule allait trop vite. Personne ne la voyait. Personne ne ralentissait.\n\n{heroName} la remarqua. Il s'arrêta, s'approcha doucement, et lui dit : « Puis-je vous accompagner, Mélodie ? »\n\nLa vieille tortue leva sur lui des yeux brillants d'émotion. Ensemble, ils traversèrent la place. {heroName} marchait à son rythme. Et {name}, qui les regardait passer, remarqua quelque chose d'étrange : en ralentissant ainsi, {heroName} semblait voir des choses que les autres rataient en courant. Un papillon rare. Une fleur cachée. Un arc-en-ciel miniature dans une flaque.\n\nMélodie lui raconta alors des histoires vieilles de cent ans. Des trésors que personne d'autre ne connaissait.\n\n✨ Morale : La gentillesse, c'est aussi savoir ralentir pour marcher au rythme des autres. Et souvent, c'est en faisant cela qu'on découvre les plus grandes richesses.`
  },
  {
    theme: 'kindness',
    title: 'Les mots doux de {heroName}',
    text: `{heroName} avait découvert quelque chose de magique dans {world} : les mots gentils avaient un pouvoir extraordinaire. Quand il disait « Tu as fait du beau travail » à quelqu'un, cette personne semblait grandir d'un centimètre. Quand il disait « Je suis content que tu sois là », des étoiles apparaissaient dans les yeux de l'autre.\n\nAlors {heroName} décida de mener une expérience. Pendant une semaine entière, il allait dire au moins une chose gentille et sincère à chaque habitant de {world}.\n\nIl dit à la boulangère que son pain était le meilleur du monde. Il dit au vieux pêcheur que sa sagesse lui manquerait. Il dit à {name} qu'il était l'ami le plus fidèle qu'il ait jamais eu.\n\nÀ la fin de la semaine, {world} était méconnaissable. Les fleurs avaient fleuri plus tôt. Les gens souriaient davantage. Et le bonheur, comme une flamme passée de bougie en bougie, avait tout illuminé.\n\n✨ Morale : Les mots gentils et sincères sont des cadeaux qui ne coûtent rien mais valent tout. Distribue-les sans compter.`
  },
  {
    theme: 'kindness',
    title: '{heroName} nourrit les oiseaux',
    text: `L'hiver était très rude dans {world} cette année-là. La neige recouvrait tout, et les petits oiseaux ne trouvaient plus rien à manger. Ils se perchaient sur les branches, les plumes ébouriffées, le ventre creux.\n\n{heroName} les vit depuis sa fenêtre. Il n'était pas riche, mais il avait des graines. Il sortit dans le froid mordant et éparpilla ses réserves pour les oiseaux.\n\n{name} l'observa depuis sa maison. « Tu n'as plus rien pour toi maintenant, » dit-il avec inquiétude.\n« Ils ont plus besoin que moi, » répondit simplement {heroName}.\n\nCe que {heroName} ne savait pas, c'est que les oiseaux de {world} se souvenaient des bienfaits. Au printemps, ils revinrent par centaines. Ils apportèrent avec eux des graines précieuses de contrées lointaines, et les semèrent dans le jardin de {heroName}.\n\nEn été, son jardin était le plus riche et le plus coloré de toute {world}. La gentillesse avait tout planté.\n\n✨ Morale : Quand on donne sans attendre de recevoir, la nature trouve toujours sa façon de nous rendre au centuple ce qu'on a offert.`
  },
  {
    theme: 'kindness',
    title: 'La gentillesse inattendue de {heroName}',
    text: `{heroName} traversait {world} d'un pas pressé. Il avait mille choses à faire. Sur son chemin, il vit un petit escargot qui essayait de traverser la route avant que la pluie arrive, mais il allait si lentement.\n\nD'abord, {heroName} continua. Puis il s'arrêta. Il regarda en arrière. Il pensa à {name} qui lui disait : « Les petites choses comptent autant que les grandes. » Il revint sur ses pas.\n\nDoucement, il prit l'escargot dans ses mains et le déposa de l'autre côté. L'escargot leva ses petites antennes et sembla le regarder avec gratitude.\n\nCe soir-là, {heroName} raconta l'histoire à {name}. « J'ai perdu deux minutes, dit-il en souriant, et j'ai gagné quelque chose que je ne saurais pas expliquer. »\n\n{name} hocha la tête. « Tu as gagné la certitude d'être quelqu'un de bien. Ça vaut bien deux minutes. »\n\n✨ Morale : Les gestes de gentillesse les plus simples sont souvent ceux qui font le plus de bien. Même deux minutes offertes à un escargot peuvent illuminer une journée entière.`
  },
  {
    theme: 'kindness',
    title: '{heroName} construit un abri',
    text: `Une famille de lapins avait perdu sa maison dans {world} à cause d'une grande inondation. Ils se retrouvèrent sous la pluie, sans abri, sans rien. Ils ne demandaient rien à personne, trop fiers pour tendre la patte.\n\n{heroName} les vit le matin en allant chercher de l'eau. Il s'arrêta. Réfléchit. Puis alla frapper à la porte de {name}.\n\n« J'ai besoin d'aide pour construire quelque chose, » dit-il.\n\nEnsemble, ils allèrent chercher du bois, des branches, des feuilles larges. Ils travaillèrent toute la journée sans relâche. D'autres habitants de {world} les virent et vinrent prêter main-forte. Avant le soir, une jolie petite maison se dressait sous les arbres.\n\nQuand ils amenèrent la famille de lapins jusqu'à l'abri, la maman lapin ne dit rien. Elle serra {heroName} dans ses bras si longtemps que tout le monde avait les yeux brillants.\n\n✨ Morale : La gentillesse n'attend pas d'être demandée. Elle voit le besoin et agit. Et un geste de bonté en appelle toujours d'autres.`
  },
  {
    theme: 'kindness',
    title: 'Le sourire de {heroName}',
    text: `{heroName} avait remarqué que Casimir, le gardien de {world}, ne souriait jamais. Casimir travaillait dur, gardait la cité en sécurité, mais personne ne le remarquait vraiment. Personne ne lui disait merci.\n\n{heroName} décida de faire quelque chose. Chaque matin, en passant devant Casimir, il s'arrêtait et lui disait simplement : « Bonjour Casimir ! Merci pour tout ce que tu fais pour nous. »\n\nLe premier jour, Casimir le regarda avec méfiance. Le deuxième jour, il haussa les épaules. Le troisième jour, un très léger sourire apparut au coin de ses lèvres.\n\n{name} observa le changement. « Qu'est-ce que tu lui as dit ? » demanda-t-il à {heroName}.\n« Rien de spécial. Je l'ai juste vu. »\n\nAu bout d'une semaine, Casimir souriait franchement. Il était plus attentionné, plus doux avec tout le monde. {world} entière bénéficiait d'un seul geste de gentillesse quotidien.\n\n✨ Morale : Voir les gens vraiment, reconnaître leur travail et leur dire merci : c'est l'une des formes les plus puissantes de gentillesse.`
  },
  {
    theme: 'kindness',
    title: '{heroName} partage son repas',
    text: `Le jour de la grande fête de {world}, {heroName} avait préparé le plus délicieux des festins. Il était impatient de le déguster seul dans son coin tranquille, comme il aimait parfois le faire.\n\nMais en chemin, il croisa une famille de souris qui regardait les festivités de loin, l'air affamé. Elles n'avaient rien à manger et n'osaient pas s'approcher de la fête.\n\n{heroName} regarda son festin. Il regarda les souris. Il pensa à {name} qui lui avait dit un jour : « La nourriture partagée a toujours meilleur goût. »\n\n« Venez avec moi ! » dit {heroName} aux souris. Il les installa à la meilleure place et disposa son festin devant elles. « On mange ensemble ! »\n\nLes souris, d'abord stupéfaites, se mirent à rire et à chanter. Elles avaient apporté avec elles de petites musiques de leur pays. La fête devint la plus belle de toute l'histoire de {world}.\n\n{heroName} rentra chez lui le cœur si plein qu'il n'avait même plus faim.\n\n✨ Morale : Partager son repas, c'est aussi partager sa joie. Et la joie partagée est la seule chose qui double quand on la coupe en morceaux.`
  },
  {
    theme: 'kindness',
    title: '{heroName} et la lettre secrète',
    text: `{heroName} avait un secret dans {world} : chaque semaine, il glissait sous la porte de quelqu'un une petite lettre anonyme. Pas pour demander quelque chose. Juste pour dire une chose gentille et vraie.\n\nÀ la boulangère : « Ton pain fait chanter le matin. »\nAu vieux pêcheur : « Ta patience m'inspire chaque jour. »\nÀ {name} : « Avoir un ami comme toi est le plus grand trésor de ma vie. »\n\nPersonne ne savait qui écrivait ces lettres. Mais {world} avait changé. Les gens marchaient différemment, comme portés par quelque chose de léger. Ils cherchaient le mystérieux auteur, mais ne le trouvaient jamais.\n\nUn jour, {name} montra à {heroName} la lettre qu'il avait reçue. « Quelqu'un m'a écrit ça. Je ne sais pas qui. Mais depuis que je l'ai lue, je me sens... différent. Plus fort. »\n\n{heroName} sourit sans rien dire. Ce soir-là, il écrivit une nouvelle lettre.\n\n✨ Morale : La gentillesse anonyme est la plus pure de toutes. Elle prouve qu'on ne donne pas pour recevoir de la reconnaissance, mais simplement parce que c'est bon de donner.`
  },
  {
    theme: 'kindness',
    title: 'La douceur de {heroName}',
    text: `Dans {world}, il y avait un petit herisson nommé Pic qui blessait tout le monde sans le vouloir à cause de ses piquants. Alors personne ne s'approchait de lui, et Pic grandissait dans une solitude triste.\n\n{heroName} le vit un jour assis seul, et se demanda : est-ce que Pic est méchant, ou est-ce qu'il a juste besoin qu'on apprenne à l'approcher différemment ?\n\nIl trouva un vieux gant dans sa poche et l'enfila. Puis il s'approcha de Pic et lui tendit la main avec douceur.\n\nPic, surpris, tendit sa petite patte hésitante. Ils se serrèrent la main. Et {heroName} dit : « Tu n'as pas à t'excuser pour ce que tu es. Moi, j'apprends juste à te connaître autrement. »\n\n{name} observa la scène et comprit. Bientôt, d'autres habitants de {world} trouvèrent leurs propres façons d'approcher Pic. Et Pic, entouré d'amitié, sembla même avoir moins de piquants qu'avant.\n\n✨ Morale : La gentillesse, c'est aussi faire l'effort de comprendre les autres tels qu'ils sont, et de trouver la bonne façon de s'en approcher avec douceur.`
  },

  // ── ADVENTURE (10 histoires) ────────────────────────────────────────────────
  {
    theme: 'adventure',
    title: '{heroName} et la carte mystérieuse',
    text: `Un matin dans {world}, {heroName} trouva une vieille carte roulée dans un tube de bambou. Elle représentait des chemins inconnus, des symboles étranges, et au centre, une étoile dorée avec les mots : « Ce qui est caché attend celui qui ose chercher. »\n\n{name} examina la carte avec lui. « C'est peut-être un piège, » dit-il prudemment. Mais ses yeux brillaient autant que ceux de {heroName}.\n\nIls partirent à l'aube. La carte les guida à travers des bois touffus, au-dessus de collines couvertes de brume, jusqu'à une grotte tapissée de cristaux lumineux. À l'intérieur, ils trouvèrent l'étoile dorée de la carte, suspendue dans l'air, qui tournait lentement.\n\nElle ne leur donna pas de trésor d'or ni de pouvoir magique. Quand {heroName} la toucha, elle projetait des images : toutes les aventures qu'ils avaient vécues jusqu'ici, et celles qui les attendaient encore.\n\n« Le vrai trésor, c'est le chemin lui-même, » réalisa {heroName}.\n\nEt ils rentrèrent à {world} avec des histoires plein la tête et des étoiles dans les yeux.\n\n✨ Morale : L'aventure n'est pas toujours une destination. C'est le chemin parcouru, les découvertes faites, et les liens créés en chemin.`
  },
  {
    theme: 'adventure',
    title: 'Le voyage de {heroName} vers l\'inconnu',
    text: `{heroName} avait toujours vécu dans {world}. Il connaissait chaque pierre, chaque arbre, chaque visage. Un soir, il regarda l'horizon et se demanda : qu'y a-t-il de l'autre côté ?\n\n{name} lui dit : « Tu risques de te perdre. Tu risques de trouver des choses que tu n'attends pas. »\n« C'est exactement pour ça que j'y vais, » répondit {heroName}.\n\nIl emporta juste une gourde, une couverture, et son courage. Le premier jour, il traversa une forêt de champignons géants qui chantaient. Le deuxième, il nagea dans une rivière d'eau argentée qui murmurait des secrets. Le troisième, il atteignit une montagne de verre au sommet de laquelle vivait un aigle sage.\n\n« Que cherches-tu ? » demanda l'aigle.\n« Je ne sais pas encore. Mais je voulais voir ce qui existait au-delà de ce que je connaissais. »\n\nL'aigle sourit. « Alors tu as déjà trouvé ce que tu cherchais : la liberté de ne pas tout savoir d'avance. »\n\n✨ Morale : Partir à l'aventure sans savoir où l'on va, c'est la façon la plus courageuse et la plus belle de découvrir le monde.`
  },
  {
    theme: 'adventure',
    title: '{heroName} et le bateau de papier',
    text: `{heroName} fabriqua un bateau de papier et le déposa sur le ruisseau de {world}. Par jeu, il glissa un petit message à l'intérieur : « Bonjour ! Je suis {heroName}. Qui es-tu ? »\n\nDes semaines passèrent. Puis un matin, une lettre arriva. Quelqu'un avait trouvé le bateau de papier très loin de {world} et répondait : « Je m'appelle Mira. Je vis au bord d'une mer bleue. Dis-moi ton aventure et je te raconterai la mienne. »\n\nUne correspondance commença. {heroName} et {name} lisaient ensemble les lettres de Mira, pleines de descriptions de vagues, de mouettes et de trésors échoués. Et ils répondaient avec leurs propres aventures dans {world}.\n\nUn an plus tard, {heroName} décida de naviguer jusqu'à Mira. Ce fut le voyage le plus long et le plus riche de sa vie. Et quand ils se rencontrèrent enfin, Mira et lui rirent comme s'ils se connaissaient depuis toujours.\n\nParce que c'était vrai. Un bateau de papier avait tout commencé.\n\n✨ Morale : Une petite action, comme envoyer un message dans un bateau de papier, peut lancer l'aventure de toute une vie.`
  },
  {
    theme: 'adventure',
    title: '{heroName} sauve {world}',
    text: `Une grande ombre planait sur {world}. Un vortex étrange aspirait lentement les couleurs du monde : le ciel devenait gris, les fleurs perdaient leurs teintes, et les rires devenaient silencieux.\n\nLes sages cherchaient une explication. {heroName} décida d'agir sans attendre. Il rassembla son matériel d'explorateur et prit {name} avec lui.\n\nIls suivirent l'ombre jusqu'à sa source : un vieux puits abandonné au fond duquel se terrait une créature qui avait avalé toutes les couleurs du monde parce qu'elle ne les avait jamais vues et voulait les garder pour elle seule.\n\n{heroName} s'approcha du puits et parla doucement à la créature. Il lui décrivit ce qu'était un coucher de soleil, une prairie de fleurs, un arc-en-ciel après la pluie. La créature pleura. Elle ne savait pas qu'en gardant les couleurs pour elle, elle les empêchait d'exister vraiment.\n\nElle les libéra toutes. Et {world} explosa de couleurs plus vives que jamais.\n\n✨ Morale : La beauté du monde n'appartient à personne. Elle est faite pour être partagée. Celle qu'on garde jalousement disparaît, celle qu'on offre grandit.`
  },
  {
    theme: 'adventure',
    title: 'L\'expédition de {heroName}',
    text: `{heroName} organisa la Grande Expédition de {world}. Il fallait atteindre le Pic des Étoiles avant le lever du soleil pour voir le spectacle unique qui n'avait lieu qu'une fois par an : la danse des comètes.\n\nIl invita {name} et quelques amis courageux. Ils partirent à minuit, équipés de lanternes et de provisions. Le chemin était escarpé, parfois glissant, parfois effrayant. Une fois, ils faillirent se perdre dans le brouillard.\n\nMais {heroName} gardait le cap, encourageait les autres, choisissait les meilleurs chemins. Il ne dit jamais « c'est trop difficile ». Il dit toujours « on continue, ensemble. »\n\nQuand ils atteignirent le sommet, le spectacle les attendait. Des dizaines de comètes traversaient le ciel comme des rivières de lumière. Tous restèrent silencieux, les yeux écarquillés, les joues mouillées de larmes d'émerveillement.\n\n{name} prit la main de {heroName}. « Merci de nous avoir emmenés jusqu'ici. »\n\n✨ Morale : Les plus belles choses de la vie se méritent. Ce sont souvent les chemins les plus difficiles qui mènent aux spectacles les plus extraordinaires.`
  },
  {
    theme: 'adventure',
    title: '{heroName} et le dragon endormi',
    text: `Au cœur de {world} dormait un immense dragon. Il dormait depuis cent ans, et tout le monde avait peur de le réveiller. Les habitants marchaient sur la pointe des pieds, ne chantaient plus, ne riaient plus fort.\n\n{heroName} ne supportait plus ce silence. Avec {name}, il s'approcha du dragon. De près, il ne semblait pas si terrible. Il ressemblait plutôt à quelqu'un de très fatigué.\n\n{heroName} remarqua quelque chose : les écailles du dragon étaient couvertes de ronces. Cela devait être douloureux, même en dormant. Doucement, il se mit à enlever les ronces une par une.\n\nLe dragon ouvrit un œil. Puis l'autre. Il regarda {heroName}, qui ne bougea pas, ne fuit pas. « Qui es-tu ? » gronda le dragon.\n« Un habitant de {world}. Tu avais des ronces. J'ai pensé que ça t'aiderait. »\n\nLe dragon se redressa lentement. « Voilà cent ans que personne ne m'avait fait quelque chose de gentil. » Et il devint le protecteur bien-aimé de {world}.\n\n✨ Morale : Parfois, l'aventure la plus courageuse est d'approcher ce que tout le monde fuit, avec un geste de bonté au lieu de peur.`
  },
  {
    theme: 'adventure',
    title: 'La chasse au trésor de {heroName}',
    text: `Pour l'anniversaire de {name}, {heroName} organisa une chasse au trésor extraordinaire dans {world}. Il cacha des indices dans les endroits les plus magiques et les plus secrets qu'il connaissait.\n\nLe premier indice conduisit {name} à la cascade arc-en-ciel. Le deuxième, à l'arbre creux où vivaient les libellules dorées. Le troisième, au bord du lac des reflets, où l'eau montrait non pas ce qui était, mais ce qui pourrait être.\n\nÀ chaque étape, {name} trouvait non seulement un indice mais aussi un petit cadeau : une plume de phénix, un cristal de lumière, une graine magique. Et à chaque étape, {heroName} l'attendait pour lui raconter l'histoire de cet endroit.\n\nQuand {name} arriva enfin au trésor final, il trouva une boîte dorée. À l'intérieur : un miroir minuscule. En y regardant, il vit son propre visage entouré de tout ce qu'il aimait.\n\n« Le vrai trésor, c'est toi, » dit {heroName} en souriant.\n\n✨ Morale : La plus belle aventure est celle qui nous fait découvrir la richesse de ce que nous avons déjà et de ce que nous sommes.`
  },
  {
    theme: 'adventure',
    title: '{heroName} et le portail magique',
    text: `Derrière la vieille bibliothèque de {world}, cachée par des lianes épaisses, se trouvait une porte que personne n'avait jamais osé franchir. On disait qu'elle menait dans un autre monde. On disait aussi qu'on ne revenait jamais.\n\n{heroName} et {name} se retrouvèrent un soir face à cette porte. Elle brillait d'une lumière douce et dorée. Au lieu d'avoir peur, {heroName} ressentit quelque chose d'autre : une curiosité irrésistible.\n\nIl poussa la porte. Ils entrèrent. De l'autre côté se trouvait un monde à l'envers : les arbres poussaient vers le bas, les nuages étaient sous leurs pieds, et les étoiles étaient partout, même le midi.\n\nLes habitants de ce monde envers étaient étonnés de les voir. Ils n'avaient jamais reçu de visiteurs. {heroName} et {name} passèrent un après-midi extraordinaire à échanger des histoires, des jeux, et des découvertes.\n\nIls revinrent à {world} le soir, la tête pleine de merveilles. Et la porte ? Elle était toujours là pour la prochaine aventure.\n\n✨ Morale : Derrière les portes que tout le monde évite se cachent souvent les plus grandes merveilles. Oser entrer, c'est le premier pas de toute aventure.`
  },
  {
    theme: 'adventure',
    title: '{heroName} explore le fond du lac',
    text: `Au milieu de {world} se trouvait un lac si profond que personne n'en avait jamais vu le fond. Depuis toujours, les histoires racontaient qu'un monstre y dormait. Mais {heroName} pensait que c'étaient juste des histoires.\n\nAvec {name} comme vigie sur la rive, {heroName} plongea. L'eau était fraîche et claire. Il nagea de plus en plus profond. La lumière du soleil se transformait en rayons bleus et verts d'une beauté à couper le souffle.\n\nTout au fond, il ne trouva pas de monstre. Il trouva une forêt de coraux lumineux, des poissons de toutes les couleurs, et au centre, une ancienne bibliothèque engloutie depuis des siècles, ses livres toujours intacts grâce à une magie inconnue.\n\n{heroName} remonta à la surface, les bras chargés d'un livre extraordinaire. Il le lu à voix haute à {name} pendant tout le soir. C'était l'histoire de {world} depuis le tout début.\n\n✨ Morale : La curiosité est le premier outil de l'explorateur. Ceux qui osent plonger dans l'inconnu découvrent des trésors que les timides n'imagineront jamais.`
  },
  {
    theme: 'adventure',
    title: 'L\'île de {heroName}',
    text: `Un matin, {heroName} vit depuis les hauteurs de {world} une île qui n'était pas là la veille. Elle avait surgi de la mer pendant la nuit, verte et mystérieuse, entourée de brume dorée.\n\n{name} l'avertit : « Elle n'était pas là hier. C'est peut-être dangereux. »\n« Ou bien c'est la chance de notre vie, » répondit {heroName}.\n\nIls construisirent un radeau avec des troncs de bambou et ramèrent jusqu'à l'île. En la découvrant, ils trouvèrent un endroit absolument unique : chaque plante, chaque créature, chaque pierre était différente de tout ce qu'ils connaissaient.\n\nAu centre de l'île poussait un arbre immense dont les fruits changeaient de saveur selon l'humeur de celui qui les cueillait. Ils goûtèrent : {heroName} sentit la joie de ses souvenirs d'enfance. {name} sentit l'odeur de la maison de sa grand-mère.\n\nLe lendemain matin, l'île avait disparu. Mais elle avait laissé dans leurs cœurs quelque chose de précieux : la certitude que le monde contenait encore des merveilles inimaginables.\n\n✨ Morale : Le monde est bien plus grand et plus merveilleux que ce que l'on voit chaque jour. L'aventure est là, partout, pour ceux qui ont des yeux qui savent chercher.`
  },

  // ── MAGIC (10 histoires) ────────────────────────────────────────────────────
  {
    theme: 'magic',
    title: 'La baguette perdue de {heroName}',
    text: `{heroName} possédait une baguette magique qui pouvait exaucer trois vœux par jour dans {world}. Un matin, elle avait disparu ! {heroName} chercha partout, de plus en plus paniqué.\n\n{name}, qui passait par là, l'aida à réfléchir. « Qu'est-ce que tu as fait hier soir ? »\n\nEn reconstituant sa journée, {heroName} se souvint : il avait prêté sa baguette à la vieille Chouette pour qu'elle répare son nid cassé. Et il avait oublié de la récupérer.\n\nMais en arrivant chez la Chouette, il trouva non pas une baguette, mais tout un quartier transformé. La Chouette avait utilisé la magie pour réparer le nid de tous ses voisins, guérir les fleurs malades, et créer un beau jardin communautaire.\n\n« Ta baguette a fait plus de bien cette nuit que moi en une semaine, » dit {heroName} en riant.\n« C'est parce que je savais ce dont les autres avaient besoin, » dit la Chouette en rendant la baguette.\n\n{heroName} comprit que la vraie magie n'était pas dans la baguette mais dans l'intention de celui qui l'utilisait.\n\n✨ Morale : Les outils magiques ne valent que par la bonté de cœur de celui qui les utilise. La vraie magie vient de l'intérieur.`
  },
  {
    theme: 'magic',
    title: '{heroName} apprend un sort',
    text: `Dans {world}, il existait un sort secret que personne ne connaissait. On disait qu'il pouvait changer le monde. {heroName} rêvait de l'apprendre.\n\nIl chercha dans tous les livres de la bibliothèque enchantée. Il interrogea les anciens, les sages, les arbres eux-mêmes. Rien. Puis {name} lui suggéra d'aller voir la vieille Lune qui dormait le jour dans une grotte de cristal.\n\nLa vieille Lune ouvrit un œil quand {heroName} s'approcha. « Tu cherches le sort secret ? » dit-elle d'une voix comme du velours.\n« Oui. Quel est-il ? »\n« C'est le sort le plus simple du monde, et pourtant le plus rare. Ce sont juste trois mots. »\n\nElle se pencha et lui souffla à l'oreille : « Je t'aime vraiment. »\n\n{heroName} réfléchit. Puis il rentra à {world} et dit ces trois mots à {name}, à ses parents, à ses amis. Et il vit quelque chose d'extraordinaire : chacun semblait littéralement s'illuminer de l'intérieur.\n\n« Le sort fonctionne ! » s'écria-t-il.\n\n✨ Morale : Le sort le plus puissant du monde, c'est l'amour exprimé sincèrement. Il transforme les gens et illumine les cœurs plus que n'importe quelle magie.`
  },
  {
    theme: 'magic',
    title: 'La forêt enchantée de {heroName}',
    text: `Dans {world}, les arbres parlaient. Mais seulement à ceux qui savaient écouter. {heroName} était l'un des rares à entendre leurs voix, douces comme le vent dans les feuilles.\n\nUn jour, les arbres lui dirent que quelque chose de triste allait arriver : la source magique qui les nourrissait tous allait se tarir dans trois jours. Et sans elle, tous les êtres de {world} allaient souffrir.\n\n{heroName} réunit {name} et tous les amis qu'il put trouver. Ils travaillèrent jour et nuit, creusant un nouveau canal pour relier la source à un lac souterrain que les arbres avaient révélé à {heroName}.\n\nLe troisième jour, alors que la source s'apprêtait à disparaître, l'eau du lac souterrain jaillit dans le nouveau canal, plus fraîche et plus claire que jamais. {world} était sauvée.\n\nLes arbres chantèrent de joie. Leurs voix se mêlèrent en une mélodie que tous les habitants de {world} entendirent cette fois-là, même ceux qui ne savaient pas écouter.\n\n✨ Morale : La magie du monde naturel nous parle constamment. Ceux qui prennent le temps d'écouter reçoivent des dons extraordinaires.`
  },
  {
    theme: 'magic',
    title: '{heroName} et la lanterne des rêves',
    text: `{heroName} trouva dans un vieux grenier de {world} une lanterne dorée qui, une fois allumée, projetait sur les murs les rêves de celui qui la tenait.\n\nIl l'apporta à {name} le soir de son anniversaire. Ils l'allumèrent ensemble dans la nuit. Sur les murs de la chambre, des images merveilleuses apparurent : des montagnes de nuages, des océans de lumière, des chevaux ailés dans des cieux de velours.\n\n« Ce sont mes rêves ? » chuchota {name}, émerveillé.\n« Les tiens et les miens mélangés, » dit {heroName}. « Regarde, là c'est la même aventure que l'on a rêvée tous les deux. »\n\nIls passèrent la nuit à explorer leurs rêves mélangés, à inventer des histoires pour chaque image, à rire et à s'émerveiller. Quand le matin arriva, la lanterne s'éteignit doucement.\n\nMais les rêves, eux, restèrent dans leurs têtes. Et certains d'entre eux devinrent réalité dans les mois qui suivirent.\n\n✨ Morale : Les rêves partagés ont plus de chances de devenir réels que les rêves gardés pour soi. Raconte tes rêves, et ils prendront vie.`
  },
  {
    theme: 'magic',
    title: 'La potion de {heroName}',
    text: `{heroName} était alchimiste à {world}. Il mélangait des herbes, des étoiles tombées, et des gouttes de rosée pour créer des potions merveilleuses. Mais ce jour-là, il essayait de créer la potion du bonheur parfait.\n\nIl essaya cent recettes. Cent fois, la potion rata. {name}, qui l'observait, lui demanda : « À quoi ressemble le bonheur parfait pour toi ? »\n{heroName} réfléchit. « À quoi ? » Il pensa à ses souvenirs les plus heureux. Ils avaient tous quelque chose en commun.\n\n« Le bonheur parfait, pour moi, c'est... être entouré des gens que j'aime, en train de faire quelque chose ensemble. »\n\n{name} sourit. « Alors tu n'as pas besoin de potion. »\n\n{heroName} regarda autour de lui : {name} était là. L'atelier sentait bon les herbes. Une musique douce venait du dehors. Il réalisa qu'il était déjà parfaitement heureux, depuis le début, sans le savoir.\n\nIl mit la potion de côté. Et invita {name} à prendre le thé.\n\n✨ Morale : Le bonheur n'est pas quelque chose que l'on crée. C'est quelque chose que l'on reconnaît quand on sait où regarder.`
  },
  {
    theme: 'magic',
    title: '{heroName} et les étoiles',
    text: `Chaque nuit dans {world}, {heroName} montait sur le toit de sa maison pour compter les étoiles. Il pensait qu'une star portait le nom de chaque habitant de {world}. Une nuit, il remarqua que l'étoile de {name} scintillait moins fort que d'habitude.\n\nInquiet, il décida de découvrir pourquoi. Les sages des nuages lui apprirent que les étoiles s'éteignaient quand leurs habitants perdaient confiance en eux-mêmes.\n\n{heroName} alla trouver {name} le lendemain. « Est-ce que tu vas bien ? » {name} baissa les yeux. « Je rate tout en ce moment. Je ne suis bon à rien. »\n\nAlors {heroName} passa toute la journée à rappeler à {name} tout ce qu'il savait faire, toutes les fois où il avait réussi, tous les moments où il avait rendu les autres heureux.\n\nCe soir-là, {heroName} remonta sur son toit. L'étoile de {name} brillait de nouveau, plus fort que toutes les autres.\n\n✨ Morale : Quand quelqu'un que l'on aime perd sa lumière, c'est notre rôle de l'aider à s'en souvenir. Chacun d'entre nous a une étoile qui lui appartient.`
  },
  {
    theme: 'magic',
    title: 'Le livre magique de {heroName}',
    text: `{heroName} reçut un livre magique pour son anniversaire dans {world}. Mais ce livre était vide. Pas une seule page écrite. Déçu, il allait le refermer quand {name} lui dit : « Regarde mieux. »\n\n{heroName} regarda. Et il vit, en très petites lettres sur la première page : « Ce livre s'écrit au fur et à mesure que tu vis. »\n\nIl ne comprit pas tout de suite. Puis, ce soir-là, après une journée remplie d'aventures et de moments précieux, il rouvrit le livre. Les pages étaient couvertes d'une écriture dorée, racontant exactement ce qu'il avait vécu.\n\nChaque jour, de nouvelles pages apparaissaient. Des pages d'amitié, de courage, de magie. Des pages avec {name}, des pages de soleil et de pluie et d'étoiles.\n\n« Ma vie est une histoire magique, » réalisa {heroName}. « Et je suis à la fois l'auteur et le héros. »\n\nDepuis ce jour, il vivait chaque journée comme s'il écrivait la plus belle page possible.\n\n✨ Morale : Ta vie est le livre le plus magique qui soit. Et chaque jour tu en écris une nouvelle page. Fais en sorte qu'elle soit belle.`
  },
  {
    theme: 'magic',
    title: '{heroName} et la fée des saisons',
    text: `Dans {world}, les saisons ne venaient pas seules. Elles étaient appelées par une fée minuscule qui vivait dans un bosquet secret. Et cette année, la fée était trop épuisée pour apporter le printemps.\n\n{heroName} apprit la nouvelle par les oiseaux migrateurs. Il décida d'aller aider la fée. {name} voulut venir aussi.\n\nLe voyage jusqu'au bosquet fut long et difficile. Quand ils arrivèrent, la fée était endormie, entourée de fleurs fanées. {heroName} et {name} nettoyèrent doucement le bosquet, apportèrent de l'eau fraîche, et fredonnèrent une berceuse à rebours pour réveiller la fée.\n\nLa fée ouvrit les yeux. Elle était si petite qu'elle tenait dans la paume de {heroName}. « Merci, » dit-elle d'une voix comme une clochette. « Je n'avais plus la force. » Elle se redressa, agita ses ailes, et {world} entière explosa de fleurs et de lumière printanière.\n\n✨ Morale : Parfois, la magie du monde a besoin de notre aide pour fonctionner. Prendre soin de la nature, c'est prendre soin de la magie elle-même.`
  },
  {
    theme: 'magic',
    title: 'Le souhait de {heroName}',
    text: `Une comète traversa le ciel de {world} et tous les habitants savent que cela signifie une chose : celui qui la voit en premier peut faire un vœu. Et {heroName} fut le premier à la voir.\n\nIl ferma les yeux et réfléchit. Il pouvait souhaiter tout ce qu'il voulait. La richesse ? Le pouvoir ? Être invincible ? Toutes ces idées traversèrent son esprit.\n\nMais quand il pensa à {name} qui avait été malade récemment, à la vieille Chouette qui avait du mal à marcher, aux enfants de {world} qui n'avaient pas beaucoup de jouets...\n\nIl fit son vœu.\n\nLe lendemain, rien ne semblait avoir changé pour {heroName}. Mais la maladie de {name} avait disparu. Les jambes de la vieille Chouette étaient légères comme avant. Et une pluie de jouets colorés était tombée sur {world} pendant la nuit.\n\nPersonne ne sut jamais quel était le vœu. Sauf {heroName}.\n\n✨ Morale : Quand on a la chance de pouvoir changer une chose, la plus belle décision est souvent de choisir de rendre heureux ceux que l'on aime.`
  },
  {
    theme: 'magic',
    title: '{heroName} et le miroir enchanté',
    text: `Dans {world} se trouvait un miroir enchanté qui montrait non pas votre reflet, mais votre côté le plus précieux. {heroName} s'y arrêta un matin, curieux.\n\nDans le miroir, il vit... {name} lui souriant. Il vit ses amis riant avec lui. Il vit les moments où il avait aidé quelqu'un, les fois où il avait été courageux, les instants de pure joie partagée.\n\n« Pourquoi est-ce que je ne me vois pas moi ? » demanda-t-il au miroir.\n\nLe miroir répondit d'une voix douce comme une brise : « Parce que ton côté le plus précieux, c'est l'amour que tu donnes et ce que tu provoques chez les autres. Tu es dans chacun de ces sourires. »\n\n{heroName} resta longtemps devant le miroir. Puis il alla trouver {name} et lui raconta. {name} rit. « J'aurais dû te dire ça bien avant. »\n\nDepuis ce jour, {heroName} se regarda différemment. Et le monde semblait plus beau.\n\n✨ Morale : Notre plus grande beauté n'est pas ce que reflète un miroir ordinaire. C'est ce que nous éveillons dans le cœur des autres.`
  },

  // ── SHARING (10 histoires) ──────────────────────────────────────────────────
  {
    theme: 'sharing',
    title: 'Le gâteau de {heroName}',
    text: `{heroName} avait reçu le plus beau gâteau du monde pour son anniversaire dans {world}. Il était immense, à la fraise et au chocolat, recouvert de petites étoiles en sucre qui brillaient vraiment.\n\n{heroName} voulait le garder pour lui seul. Après tout, c'était son anniversaire. Il s'enferma chez lui avec son gâteau et commença à le manger, seul.\n\nMais après quelques bouchées, quelque chose d'étrange se produisit : le gâteau n'avait plus très bon goût. Il était sucré, mais il manquait quelque chose d'essentiel.\n\n{heroName} ouvrit sa porte. Au dehors, {name} et d'autres amis se promenaient en attendant qu'on les invite. Il les appela. Ils arrivèrent en riant, et le gâteau fut partagé en grandes parts.\n\nCette fois, chaque bouchée était délicieuse, comme si le sucre avait été multiplié par la joie d'être ensemble. À la fin, le gâteau était fini, mais le bonheur, lui, remplissait toute la maison.\n\n✨ Morale : Les bonnes choses partagées ont toujours meilleur goût. La vraie saveur du bonheur vient de la compagnie de ceux qu'on aime.`
  },
  {
    theme: 'sharing',
    title: '{heroName} et les jouets oubliés',
    text: `Dans le grenier de {heroName} s'empilaient des jouets qu'il n'utilisait plus depuis longtemps. Des cubes de construction, des poupées, des petites voitures, tous couverts de poussière et d'oubli.\n\nUn jour, {name} lui parla d'une famille qui venait d'arriver à {world} et n'avait rien. Leurs enfants regardaient les autres jouer avec des yeux tristes.\n\n{heroName} monta dans son grenier. Il regarda tous ces jouets endormis. Il pensa aux sourires que ces cubes, ces poupées et ces voitures pourraient provoquer s'ils étaient dans des mains qui les aimaient vraiment.\n\nIl fit plusieurs voyages. Il apporta tout à la famille. Quand les enfants virent les jouets, leurs yeux s'illuminèrent comme des étoiles. Ils se mirent à jouer et à rire aussitôt.\n\nEn rentrant les mains vides, {heroName} se sentait étrangement plus riche qu'avant. Comme si en donnant ce dont il n'avait plus besoin, il avait reçu quelque chose d'invisible mais de précieux.\n\n✨ Morale : Les choses que nous n'utilisons plus et gardons sans raison pourraient changer la vie de quelqu'un. Partager, c'est donner une seconde vie aux objets et une première joie à quelqu'un.`
  },
  {
    theme: 'sharing',
    title: 'La récolte de {heroName}',
    text: `C'était une année exceptionnelle dans {world}. Le jardin de {heroName} avait produit plus de fruits que jamais : des pommes rouges, des poires dorées, des fraises parfumées à perte de vue.\n\nD'autres habitants n'avaient pas eu cette chance. Leurs jardins avaient souffert de la sécheresse. {name} passa devant le jardin de {heroName} et soupira en pensant à ses propres étagères vides.\n\n{heroName} le vit. Sans hésiter, il lui tendit un grand panier plein de fruits. « Prends pour toi et pour ceux qui en ont besoin. »\n{name} hésita : « Mais c'est ta récolte... »\n« Mon jardin a produit pour deux. Il serait injuste de ne pas partager. »\n\n{name} fit le tour de {world} avec le panier. Personne ne manqua de fruits cet automne-là. Et quand le printemps revint, les voisins aidèrent {heroName} à planter encore plus de graines que l'année précédente.\n\n✨ Morale : Ce que la nature nous offre en abondance est fait pour être partagé. La générosité est la plus belle façon de remercier ses chances.`
  },
  {
    theme: 'sharing',
    title: '{heroName} et le livre unique',
    text: `Il n'existait qu'un seul exemplaire du Livre des Merveilles dans tout {world}. Et {heroName} l'avait trouvé. Il était fascinant, rempli d'histoires, de cartes et d'illustrations magiques.\n\n{heroName} le lisait chaque soir, seul dans sa chambre. Il en était si jaloux qu'il ne le laissait même pas sur son étagère mais le cachait sous son matelas.\n\nPuis un jour, {name} lui parla d'un enfant de {world} qui ne savait pas encore lire et rêvait qu'on lui fasse la lecture. {heroName} pensa au livre caché.\n\nLe soir, il emmena le livre chez cet enfant. Il le prit sur ses genoux et lui lut le premier chapitre à voix haute. Les yeux de l'enfant brillaient. À chaque page, il posait des questions merveilleuses qui donnaient au livre une nouvelle dimension.\n\n{heroName} réalisa que lire seul, c'est bien. Lire avec quelqu'un, c'est deux fois mieux. Faire découvrir un livre à quelqu'un qui ne connaissait pas, c'est trois fois mieux encore.\n\n✨ Morale : Les histoires sont faites pour être partagées. Un livre lu ensemble vaut dix fois un livre lu seul.`
  },
  {
    theme: 'sharing',
    title: 'La table de {heroName}',
    text: `{heroName} avait une grande table dans sa maison de {world}, bien trop grande pour lui seul. Il y mangeait ses repas assis tout au bout, seul, et la table semblait lui reprocher son inutilité.\n\nUn soir d'hiver, il regarda la table vide et prit une décision. Il invita {name}. Et {name} invita sa famille. Et sa famille amena leurs voisins. Et les voisins vinrent avec des plats de chez eux.\n\nCe soir-là, la grande table était pleine pour la première fois. Chacun avait apporté quelque chose : un ragoût, une tarte, du pain chaud, une bouteille de jus de fruits des bois. Le repas était délicieux non pas parce que la nourriture était exceptionnelle, mais parce que la table était vivante.\n\n{heroName} regarda ses convives rire et parler et s'écouter. Il comprit enfin à quoi servait sa grande table.\n\nDepuis, chaque vendredi, il organisa le Grand Repas de {world}. Tout le monde était invité.\n\n✨ Morale : Ce que nous possédons prend tout son sens quand on le partage avec les autres. Un espace partagé devient toujours un espace vivant.`
  },
  {
    theme: 'sharing',
    title: '{heroName} et la pluie de bonbons',
    text: `Dans {world}, il y avait une pluie extraordinaire une fois par an : la pluie de bonbons. Chaque habitant en attrapait autant qu'il pouvait. Certains utilisaient des paniers, d'autres des sacs immenses.\n\n{heroName} avait préparé le plus grand panier de tous. Il en attrapa des centaines, de toutes les couleurs et saveurs. {name} regardait avec un sourire, lui qui avait oublié son panier.\n\n{heroName} observa les habitants s'éloigner rapidement pour garder leurs bonbons. Il regarda son panier immense, puis il regarda {name} les mains vides.\n\nIl en prit une grande poignée et la tendit à {name}. Puis il alla en offrir à l'enfant qui n'avait pas couru assez vite, à la vieille dame qui ne pouvait pas se baisser, au bébé qui regardait le ciel sans comprendre.\n\nQuand il rentra chez lui, son panier était à moitié plein. Mais il était à moitié plein de bonheur, de gratitude des autres, et de la mémoire de tous ces sourires.\n\n✨ Morale : Les douceurs de la vie ont bien meilleur goût quand on les partage. Garde pour toi ce dont tu as besoin, et offre le reste avec joie.`
  },
  {
    theme: 'sharing',
    title: 'Le talent de {heroName}',
    text: `{heroName} avait un talent extraordinaire dans {world} : il savait dessiner avec une précision et une beauté qui laissaient tout le monde bouche bée. Ses dessins semblaient presque vivants.\n\nMais {heroName} gardait ses dessins pour lui. Il les cachait dans des tiroirs, craignant que les autres les critiquent ou les jalousent.\n\n{name} découvrit un carton rempli de ces dessins cachés. Il en resta ébahi. « Pourquoi tu n'as jamais montré ça à personne ? C'est extraordinaire ! »\n\n{heroName} haussa les épaules, gêné. Mais {name} insista pour organiser une exposition dans la grande salle de {world}. Malgré sa peur, {heroName} accepta.\n\nLe soir du vernissage, les habitants restèrent des heures devant les dessins. Certains pleuraient. D'autres éclataient de rire. Certains décidèrent de commencer à dessiner eux-mêmes.\n\n{heroName} comprit que son talent n'était pas à lui. Il appartenait à tous ceux qu'il pouvait toucher.\n\n✨ Morale : Garder un talent pour soi, c'est éteindre une lumière que d'autres auraient besoin de voir. Partager ce que l'on sait faire, c'est multiplier la beauté du monde.`
  },
  {
    theme: 'sharing',
    title: '{heroName} et le dernier morceau',
    text: `Il ne restait qu'un seul morceau de tarte aux fraises sur la table de {world}. {heroName} et {name} le regardaient tous les deux. Chacun le voulait. La tarte aux fraises de la vieille Chouette était légendaire.\n\nUn silence s'installa. Puis {heroName} dit : « Tu le veux. »\nEt {name} dit en même temps : « Tu le veux. »\n\nIls rirent tous les deux. Puis {heroName} prit le morceau, le coupa exactement en deux, et tendit la moitié à {name}.\n\nLa moitié d'une tarte légendaire était-elle aussi bonne que le morceau entier ? En fait, oui. Même meilleure. Parce que la voir disparaître sur le visage de {name} avec un sourire de pur bonheur rendait chaque bouchée plus savoureuse.\n\nLa vieille Chouette, qui avait observé la scène, leur apporta deux nouvelles tranches. « J'avais caché une deuxième tarte pour voir ce que vous feriez, » dit-elle avec un sourire malicieux.\n\n✨ Morale : Quand on partage ce que l'on a, même le peu devient abondance. Et la générosité revient toujours sous une forme ou une autre.`
  },
  {
    theme: 'sharing',
    title: 'La chanson de {heroName}',
    text: `{heroName} avait composé la plus belle chanson de {world}. Il y avait mis toute son âme : des mots qui faisaient rire, d'autres qui faisaient pleurer doucement, et une mélodie qu'on ne pouvait s'empêcher de fredonner.\n\nMais il avait peur de la chanter devant les autres. Et si elle ne leur plaisait pas ? Et si on riait de lui ?\n\n{name} l'entendit la fredonner tout seul un soir. « C'est magnifique. Il faut la partager. »\n« Et si ça ne plaît pas ? »\n« Et si ça change la journée de quelqu'un ? »\n\nCette question fit réfléchir {heroName}. Le lendemain, au marché de {world}, il prit une grande inspiration et commença à chanter. D'abord doucement, puis de plus en plus fort.\n\nUn par un, les habitants s'arrêtèrent. Des vieux se mirent à sourire en pensant à des souvenirs lointains. Des enfants commencèrent à danser. Et {name} entonna le refrain avec lui.\n\nÀ la fin, des applaudissements éclatèrent. La chanson de {heroName} devint l'hymne de {world}.\n\n✨ Morale : Partager ce que l'on crée avec amour, c'est offrir un bout de son âme au monde. Et le monde en a toujours besoin.`
  },
  {
    theme: 'sharing',
    title: '{heroName} et l\'abri des voyageurs',
    text: `{heroName} avait une maison spacieuse dans {world}, avec une grande chambre d'ami qui ne servait jamais. Il la gardait parfaite et bien rangée, juste au cas où, mais personne ne venait jamais y dormir.\n\nUn soir de tempête, il entendit frapper à sa porte. C'était une famille de voyageurs épuisés, trempés jusqu'aux os, sans endroit où dormir. Ils s'excusaient presque d'avoir frappé.\n\n{heroName} ouvrit la porte en grand. « La chambre d'ami vous attend. » Il leur prépara du thé chaud, des couvertures, un repas. {name} l'aida à tout installer.\n\nLa famille resta trois jours, le temps que la tempête passe. Ils racontèrent leurs aventures, leurs pays lointains, et apprirent à {heroName} des recettes extraordinaires et des chansons inconnues.\n\nQuand ils repartirent, la chambre d'ami semblait plus vivante qu'avant. {heroName} comprit que cet espace n'avait jamais été juste « au cas où ». Il attendait d'être utile.\n\n✨ Morale : Ce que nous possédons peut devenir le refuge de quelqu'un dans le besoin. Ouvrir notre espace et notre cœur est la forme la plus belle de partage.`
  },

  // ── PERSEVERANCE (10 histoires) ─────────────────────────────────────────────
  {
    theme: 'perseverance',
    title: '{heroName} apprend à voler',
    text: `{heroName} voulait apprendre à voler dans {world}. Il regarda les oiseaux, étudia le vent, construisit des ailes de papier et courut de la grande colline en criant « Allez ! »\n\nIl tomba. Puis se releva. Puis retomba.\n\n{name} le regardait avec inquiétude. « Tu t'es fait mal. Peut-être que ce n'est pas fait pour toi. »\n{heroName} essuya la poussière de ses genoux. « Peut-être. Ou peut-être que je n'ai pas encore trouvé la bonne façon. »\n\nIl essaya des ailes de plumes. Trop lourdes. Des ailes de soie. Trop fragiles. Des ailes de roseau. Mieux, mais pas encore.\n\nAprès des semaines d'essais, {heroName} construisit ses ailes définitives : des plumes légères, une armature de bambou, et un petit moteur de vent magique trouvé dans un livre oublié. Il courut de la colline. Et cette fois, il s'envola.\n\nLa vue depuis les airs était exactement aussi belle qu'il l'avait imaginée. {name} en bas criait de joie, les bras levés.\n\n✨ Morale : Chaque échec est une leçon, pas une fin. Ceux qui persistent trouvent toujours, un jour, leur façon de voler.`
  },
  {
    theme: 'perseverance',
    title: 'Le jardin de {heroName}',
    text: `{heroName} décida de créer le plus beau jardin de {world}. Il planta des graines en automne avec amour et espoir. L'hiver arriva, tout disparut sous la neige. Rien ne pousserait jamais, semblait-il.\n\nAu printemps, {heroName} retourna la terre, replanta, arrosa. Une tempête détruisit tout. Il recommença. L'été fut trop sec. Quelques plantes survivaient à peine.\n\n{name} lui dit avec douceur : « Tu as travaillé si dur. Peut-être que ce terrain n'est pas bon pour un jardin. »\n\nMais {heroName} avait vu quelque chose que les autres n'avaient pas vu : une toute petite fleur, dans un coin, qui avait tenu bon malgré tout. Elle était minuscule et magnifique.\n\nIl en prit soin particulièrement. Il apprit ce dont ce sol avait besoin, ce que ces graines aimaient vraiment. L'automne suivant, le jardin de {heroName} était le plus beau de toute {world}.\n\nLes habitants venaient de loin pour le voir. Et au centre, la petite fleur entêtée de la première année trônait, fière.\n\n✨ Morale : Les plus beaux jardins sont ceux qui ont survécu aux tempêtes. La persévérance transforme la terre la plus ingrate en paradis.`
  },
  {
    theme: 'perseverance',
    title: '{heroName} et le puzzle impossible',
    text: `On avait offert à {heroName} le Puzzle des Mille Étoiles, le plus difficile de tout {world}. Il avait mille pièces toutes semblables, et la boîte ne montrait pas le dessin final.\n\n{heroName} commença avec enthousiasme. Mais après une heure, il n'avait assemblé que cinq pièces. C'était décourageant. Il pensa plusieurs fois à tout ranger.\n\n{name} venait le voir chaque jour et lui apportait du chocolat chaud. Il s'asseyait à côté de lui et parfois ajoutait une pièce. Il ne disait jamais « abandonne ». Il disait « encore une. »\n\nJour après jour, le puzzle prenait forme. Des constellations commençaient à apparaître. Une carte du ciel étoilé se dessinait. Et {heroName} se prit à ne plus vouloir s'arrêter.\n\nLe dernier jour, quand il posa la dernière pièce, {world} entière était debout derrière lui. Le puzzle était une carte du futur de {world}, avec chaque habitant représenté par une étoile.\n\n✨ Morale : Les choses difficiles valent toujours la peine d'être terminées. Et souvent, la récompense est bien plus belle qu'on ne l'espérait au départ.`
  },
  {
    theme: 'perseverance',
    title: '{heroName} apprend la musique',
    text: `{heroName} voulait jouer de la flûte enchantée de {world}. Il commença ses leçons avec la vieille Chouette-Musique. Les premières notes qu'il produisit étaient si fausses que les fleurs se bouchèrent les oreilles et que les oiseaux s'envolèrent.\n\n{name} l'encouragea : « Tout le monde commence quelque part. »\n\nMais les semaines passaient et {heroName} n'avait pas l'air de progresser. Il rentrait chaque soir découragé. Une nuit, il plongea dans les pleurs et faillit ranger la flûte pour toujours.\n\nPuis il pensa : « Et si je jouais juste une note parfaite par jour ? Juste une. » Le lendemain, il travailla une seule note pendant une heure. Elle était pure et belle. Le lendemain, deux notes. Puis trois.\n\nAprès trois mois, il put jouer sa première mélodie complète. Les fleurs ne se bouchèrent pas les oreilles. Les oiseaux revinrent. {name} pleura de bonheur.\n\nAu grand concert de {world}, la flûte de {heroName} fit danser tous les habitants sous les étoiles.\n\n✨ Morale : On ne devient pas musicien en une nuit. Mais chaque note jouée avec patience est un pas vers la mélodie que l'on rêve de jouer.`
  },
  {
    theme: 'perseverance',
    title: 'La tour de {heroName}',
    text: `{heroName} voulait construire la plus haute tour de {world} pour voir jusqu'à l'horizon de tous les côtés. Il commença à empiler des pierres, une à une.\n\nLa première tour s'effondra après dix pierres. La deuxième après vingt. Les habitants passaient en souriant. Certains disaient gentiment que c'était peut-être impossible. {name} restait là, sans douter.\n\n{heroName} étudia comment les oiseaux construisaient leurs nids : ils entremêlaient les matériaux. Il essaya. Sa troisième tour tint mieux, mais pas assez. Il chercha encore, apprit la technique des castors, et celle des fourmis qui bâtissaient des colonnes.\n\nEn combinant tout ce qu'il avait appris, il construisit sa quatrième tour. Elle était belle, solide, et montait haut vers le ciel.\n\nAu sommet, {heroName} vit l'horizon à perte de vue. Il vit tout {world} d'un seul regard. Et il vit que chaque tour effondrée avait laissé dans le sol des fondations pour la prochaine.\n\n✨ Morale : Chaque échec laisse une fondation pour la prochaine tentative. Ceux qui persistent ne construisent pas seulement une tour — ils construisent leur propre sagesse.`
  },
  {
    theme: 'perseverance',
    title: '{heroName} et la montagne',
    text: `Au fond de {world} se dressait une montagne que personne n'avait jamais escaladée. Elle était trop haute, trop raide, trop imprévisible. Mais {heroName} voulait voir ce qu'il y avait au sommet.\n\nIl partît tôt un matin avec {name}. La montée fut difficile dès le début. À mi-chemin, une tempête les força à s'abriter sous un rocher pendant des heures. {name} voulut rebrousser chemin. {heroName} regarda en bas, puis en haut. « On a fait autant de chemin que ce qu'il reste. »\n\nIls continuèrent. Leurs muscles brûlaient. Leurs pieds souffraient. Mais à chaque arrêt, la vue devenait plus belle, et cela leur donnait la force de continuer.\n\nAu sommet, la vue était au-delà de tout ce qu'ils avaient imaginé. Le monde s'étendait à perte de vue, minuscule et magnifique. Une mer de nuages à leurs pieds. Le soleil qui embrasait tout.\n\nIls restèrent là longtemps, sans parler. Certaines choses n'ont pas besoin de mots.\n\n✨ Morale : Ce que l'on gagne au sommet d'un effort difficile vaut toujours l'ascension. N'abandonne jamais quand tu es déjà à mi-chemin.`
  },
  {
    theme: 'perseverance',
    title: '{heroName} et l\'école difficile',
    text: `À l'école de {world}, {heroName} trouvait les mathématiques très difficiles. Tous les autres semblaient comprendre si vite, et lui restait souvent derrière, gêné de lever la main.\n\nIl faillit décider qu'il n'était « pas fait pour les maths ». Mais {name} lui dit : « Personne n'est pas fait pour apprendre. Certains ont juste besoin de plus de temps. »\n\n{heroName} resta après les cours pour demander de l'aide. Il pratiqua le soir, même quand il était fatigué. Il fit des erreurs et recommença. Peu à peu, les chiffres commencèrent à lui parler autrement.\n\nUn jour, pendant une épreuve difficile, {heroName} résolut un problème que personne d'autre n'avait pu résoudre. L'enseignant lui demanda d'expliquer sa méthode. Et {heroName} réalisa qu'en prenant plus de temps, il avait compris plus profondément.\n\n« Tu ne sais pas lentement, dit l'enseignant. Tu sais solidement. C'est bien mieux. »\n\n✨ Morale : Apprendre à son propre rythme n'est pas une faiblesse. Ceux qui prennent le temps de comprendre vraiment construisent des connaissances que rien ne peut détruire.`
  },
  {
    theme: 'perseverance',
    title: 'La graine de {heroName}',
    text: `{heroName} planta une graine dans un pot sur sa fenêtre de {world}. Il l'arrosa chaque matin avec soin. Une semaine passa. Rien. Deux semaines. Toujours rien. Ses amis lui dirent que la graine était peut-être morte.\n\nMais {heroName} continuait d'arroser. Il parlait à la graine, lui racontait les nouvelles de {world}, lui chantait des berceuses. {name} se moquait doucement : « Tu parles à de la terre. »\n\n« Non, dit {heroName}. Je parle à quelque chose qui existe déjà, mais qui prend son temps. »\n\nLe vingt-et-unième jour, une toute petite pointe verte perça la terre. {heroName} faillit crier de joie. Il continua d'en prendre soin avec la même constance.\n\nDeux mois plus tard, sur sa fenêtre s'épanouissait la plante la plus rare de {world}, ses fleurs bleues comme le ciel nocturne. Elle ne poussait que pour ceux qui ne l'avaient pas abandonnée.\n\n✨ Morale : Les choses les plus précieuses prennent du temps. La constance et la patience sont les plus belles des vertus pour ceux qui cultivent leur jardin ou leurs rêves.`
  },
  {
    theme: 'perseverance',
    title: '{heroName} et le tableau',
    text: `{heroName} voulait peindre un tableau pour décorer la grande salle de {world}. Il commença plein d'enthousiasme, mais son premier tableau ne lui plaisait pas. Il le couvrit de blanc et recommença.\n\nLe deuxième ne lui plaisait pas non plus. Ni le troisième. À chaque fois, il voyait dans sa tête ce qu'il voulait créer, mais ses mains n'arrivaient pas à le produire.\n\n{name} lui dit : « Tu as recouvert dix tableaux. Sur chacun d'eux, tu as progressé. Je les aurais gardés. »\n\nCette idée fit réfléchir {heroName}. À partir de ce moment, au lieu de couvrir ses essais, il les gardait de côté. Il put ainsi voir sa propre progression, voir comment chaque tentative était meilleure que la précédente.\n\nLe onzième tableau fut celui qu'il avait toujours voulu peindre. Il le suspendit dans la grande salle. Mais autour, il accrocha aussi les dix premiers. Pour montrer que le chemin fait partie du chef-d'œuvre.\n\n✨ Morale : Le chemin vers la réussite est fait de toutes les tentatives qui l'ont précédée. Ne renie pas tes essais — ils font partie de ta création.`
  },
  {
    theme: 'perseverance',
    title: 'Le rêve de {heroName}',
    text: `Depuis toujours, {heroName} rêvait d'ouvrir la plus belle boulangerie de {world}. Mais il ne savait pas cuire le pain. Sa première miche était un rocher. Sa première tarte ressemblait à une montagne de cendres.\n\nSes voisins goûtaient poliment et grimacaient. {name}, lui, disait toujours : « C'est meilleur qu'hier. »\n\n{heroName} continua d'apprendre, d'essayer, d'échouer et de recommencer. Il demanda conseil à tous les boulangers qu'il connaissait. Il lut tous les livres de cuisine de la bibliothèque enchantée. Il expérimenta de nouvelles recettes chaque nuit.\n\nCinq ans après la première miche de pierre, {heroName} ouvrit sa boulangerie. La queue s'étirait jusqu'au bout de la rue dès le premier matin. Le pain sentait le bonheur, les croissants fondaient dans la bouche, et les tartes faisaient pleurer de joie.\n\n« Quel est ton secret ? » demanda un client. {heroName} sourit. « Cinq ans d'échecs. Ils sont dans chaque bouchée. »\n\n✨ Morale : Les rêves ne se réalisent pas d'un coup de baguette. Ils se construisent brioche après brioche, avec de la patience, de la passion et beaucoup de persévérance.`
  },

  // ── FAMILY (10 histoires) ───────────────────────────────────────────────────
  {
    theme: 'family',
    title: 'La recette de grand-mère de {heroName}',
    text: `La grand-mère de {heroName} était la meilleure cuisinière de {world}. Mais elle vieillissait et ses mains tremblaient parfois. {heroName} avait peur qu'elle parte un jour et emporte avec elle ses recettes secrètes.\n\nAlors il décida de tout apprendre. Chaque dimanche, il s'installait à côté d'elle dans la cuisine et regardait ses gestes avec attention. Il posait des questions. Il prenait des notes.\n\n{name} venait parfois, et ensemble ils apprenaient. Grand-mère racontait en cuisinant : « Cette recette de soupe, je la tiens de ma propre grand-mère. Et elle de la sienne. Vous serez le maillon suivant de cette chaîne. »\n\nCe jour-là, {heroName} comprit que les recettes n'étaient pas juste des listes d'ingrédients. Elles étaient des fils qui reliaient les générations, des histoires comestibles, des baisers que les ancêtres envoyaient à leurs descendants à travers les saveurs.\n\nQuand la grand-mère ferma les yeux pour toujours, {heroName} cuisina sa soupe pour toute la famille. Et dans chaque bol, il y avait quelque chose d'indestructible : l'amour transmis de génération en génération.\n\n✨ Morale : La famille se transmet à travers les gestes, les histoires et les recettes. Apprenons de nos anciens, car ils nous confient le plus précieux des héritages.`
  },
  {
    theme: 'family',
    title: '{heroName} et le bébé qui pleure',
    text: `Dans la famille de {heroName}, un bébé venait d'arriver dans {world}. Il était minuscule, bruyant, et demandait toute l'attention des parents. {heroName} se sentait parfois oublié dans un coin.\n\nIl en parla à {name}, qui était l'aîné de cinq frères et sœurs. {name} rit doucement. « Je connais ce sentiment. Mais regarde le bébé vraiment. »\n\n{heroName} le regarda vraiment. Le bébé était si petit, si fragile, si confiant. Il avait besoin de tout. Et {heroName} pouvait lui donner des choses que ses parents ne pouvaient pas : des grimaces qui faisaient rire, des histoires murmurées avant le sommeil, une main douce qui serrait la sienne.\n\nPeu à peu, {heroName} devenait le grand protecteur du bébé. Et le bébé, le premier admirateur de {heroName}. Quand il prononça ses premiers mots, le deuxième fut le nom de {heroName}.\n\nLes parents remarquèrent. « Tu es son héros, » dit sa maman avec des larmes dans les yeux.\n\n✨ Morale : L'arrivée d'un nouveau membre dans la famille ne diminue pas l'amour — il le multiplie. Être grand frère ou grande sœur, c'est un rôle extraordinaire.`
  },
  {
    theme: 'family',
    title: 'Le voyage de {heroName} avec son papa',
    text: `Un matin dans {world}, le papa de {heroName} lui proposa quelque chose d'inattendu : « Et si on partait en voyage, juste tous les deux ? » {heroName} n'avait jamais eu son papa rien que pour lui. Il dit oui si vite qu'il trébucha sur sa propre joie.\n\nIls partirent pour trois jours dans une région de {world} que {heroName} ne connaissait pas. Dans les montagnes de cristal. Son papa lui raconta des histoires de son propre enfance, de son propre papa, de ses peurs et ses rêves de petit garçon.\n\n{heroName} réalisa quelque chose d'étrange : son père avait été un enfant, lui aussi. Il avait eu les mêmes questions, les mêmes frayeurs, les mêmes émotions. Ce n'était pas seulement son papa. C'était quelqu'un comme lui.\n\n{name} lui avait demandé avant le départ ce qu'il espérait de ce voyage. {heroName} avait répondu « des aventures ». En revenant, il répondit à {name} : « J'ai découvert mon père. »\n\n✨ Morale : Nos parents ont été des enfants avant nous. Prendre le temps de les connaître vraiment est l'une des plus belles aventures que l'on puisse vivre.`
  },
  {
    theme: 'family',
    title: '{heroName} et sa mamie',
    text: `La mamie de {heroName} vivait dans une petite maison en fleurs à l'autre bout de {world}. {heroName} allait la voir chaque samedi matin, et c'était son moment préféré de la semaine.\n\nMamie avait des mains ridées qui sentaient la lavande, une voix douce comme du miel, et des histoires à n'en plus finir. Parfois, elle répétait les mêmes. {heroName} faisait semblant de ne pas s'en souvenir pour la laisser raconter.\n\nUn jour, {name} lui demanda pourquoi il allait toujours chez sa mamie plutôt que de jouer avec ses amis le samedi matin.\n\n{heroName} réfléchit. « Parce que quand je suis avec elle, j'ai l'impression que le temps s'arrête. Et parce qu'un jour, elle ne sera plus là pour me raconter ses histoires. Alors je les garde toutes dans ma tête. »\n\nIl rentra chez lui et écrivit dans un carnet toutes les histoires de sa mamie. Un livre pour ne jamais oublier. Un livre pour le transmettre un jour.\n\n✨ Morale : Les grands-parents sont des trésors vivants dont chaque histoire est un fil d'or. Prenons le temps de les écouter avant que leurs voix se taisent.`
  },
  {
    theme: 'family',
    title: 'La dispute de {heroName} et sa sœur',
    text: `{heroName} et sa petite sœur Lila se disputaient souvent dans {world}. Ce jour-là, c'était pour un crayon violet. {heroName} disait que c'était le sien. Lila disait le contraire.\n\nLa dispute s'envenima. Des mots durs furent échangés. Lila pleura. {heroName} claqua la porte de sa chambre, furieux mais déjà un peu regrettatif.\n\n{name}, qui était là pour jouer, dit doucement à {heroName} : « Tu sais que dans dix ans, tu ne te souviendras plus de ce crayon. Mais tu te souviendras peut-être d'avoir fait pleurer ta sœur. »\n\nCes mots frappèrent {heroName} en plein cœur. Il sortit de sa chambre. Lila était assise dans le couloir, les yeux rouges. Sans dire un mot, {heroName} alla chercher sa boîte de crayons et la posa devant elle. « Choisis. Tu peux prendre ce que tu veux. »\n\nLila choisit le violet. Et lui tendit à son tour le crayon doré qu'il aimait aussi. Ils se regardèrent et éclatèrent de rire en même temps.\n\n✨ Morale : Les disputes entre frères et sœurs sont normales. Ce qui compte, c'est de savoir revenir l'un vers l'autre avec un cœur plus grand que son orgueil.`
  },
  {
    theme: 'family',
    title: '{heroName} aide à la maison',
    text: `Dans la maison de {heroName} à {world}, les parents rentraient toujours fatigués le soir. {heroName} les voyait s'affairer encore à la cuisine, aux lessives, aux rangements, pendant que lui jouait tranquillement.\n\nUn soir, {name} lui dit : « Tu sais ce qui serait extraordinaire ? Rentrer chez toi et trouver le dîner prêt par quelqu'un d'autre. » {heroName} pensa à ses parents.\n\nLe lendemain, {heroName} rentra de l'école et, au lieu d'aller jouer, il mit la table, éplucha les légumes comme sa maman lui avait montré une fois, et fit chauffer la soupe. Il balaya le sol et plia le linge propre.\n\nQuand ses parents rentrèrent, ils s'arrêtèrent sur le seuil, stupéfaits. Sa maman eut les larmes aux yeux. Son papa prit {heroName} dans ses bras sans rien dire pendant un long moment.\n\nCe soir-là, le dîner fut le plus doux de tous les dîners. Non pas à cause de la soupe, mais à cause du geste qui l'avait précédée.\n\n✨ Morale : Aider sa famille sans qu'on nous le demande, c'est montrer à ceux qu'on aime qu'on les voit vraiment et qu'on veut leur vie plus légère.`
  },
  {
    theme: 'family',
    title: 'La photo de famille de {heroName}',
    text: `{heroName} retrouva dans un vieux tiroir de {world} une photo jaunie de sa famille, prise bien avant sa naissance. Il reconnut ses grands-parents jeunes, ses parents enfants, et des visages qu'il ne connaissait pas.\n\nIl alla montrer la photo à sa maman. Elle s'assit, prit la photo avec douceur, et commença à raconter. Chaque visage avait une histoire. Chaque sourire cachait une vie entière.\n\nIl y avait l'arrière-grand-père qui avait traversé la mer pour venir vivre dans {world}. La tante qui avait planté le vieux chêne du jardin. Le petit garçon, au fond, qui était devenu le grand-père de {name}.\n\n{heroName} écouta pendant des heures. Puis il demanda : « Et moi ? Est-ce que je ferai partie de ces histoires un jour ? »\n\nSa maman lui prit la main. « Tu en fais déjà partie. Tu en es le chapitre le plus précieux. »\n\nCe soir-là, {heroName} fit prendre une nouvelle photo de toute la famille. Pour que dans cinquante ans, quelqu'un la retrouve et écoute son histoire.\n\n✨ Morale : Nous sommes le fruit de toutes celles et ceux qui nous ont précédés. Connaître notre histoire familiale, c'est connaître les racines qui nous rendent forts.`
  },
  {
    theme: 'family',
    title: '{heroName} et la nuit de famille',
    text: `Dans {world}, les familles avaient une tradition magnifique : une fois par mois, toutes les lumières s'éteignaient et chaque foyer passait La Nuit de Famille. Pas d'écrans, pas de distractions. Juste la famille et des bougies.\n\n{heroName} adorait ces nuits. Sa famille jouait à des jeux de cartes, racontait des histoires à la bougie, et son papa faisait parfois des ombres chinoises sur le mur qui faisaient rire tout le monde.\n\nUn mois, {name} était invité. Il n'avait jamais connu cette tradition chez lui. Il regardait la famille de {heroName} avec des yeux écarquillés, comme quelqu'un qui découvre quelque chose d'extraordinaire.\n\n« Pourquoi vous faites ça ? » demanda {name}.\n« Pour se souvenir que la famille, c'est la chose la plus précieuse qu'on ait, » dit le papa de {heroName}.\n\nEn rentrant, {name} proposa à sa propre famille de créer la même tradition. Et chaque mois, dans deux maisons de {world}, les bougies s'allumaient et les cœurs s'ouvraient.\n\n✨ Morale : Les traditions familiales sont des îles de bonheur dans l'agitation du monde. Créons-en, maintenons-les, et passons-les à ceux qui viendront après nous.`
  },
  {
    theme: 'family',
    title: 'La lettre de {heroName} à sa famille',
    text: `Un jour, {heroName} dut partir seul pour la première fois, loin de sa famille dans {world}. C'était un voyage d'école qui durait une semaine entière. Au moment de monter dans le bateau, il sentit sa gorge se serrer.\n\n{name} l'accompagna au port. « Tu vas leur manquer. Mais tu vas aussi leur revenir avec des histoires. »\n\nChaque soir pendant le voyage, {heroName} écrivit une lettre à sa famille. Il décrivait tout : les couleurs du coucher de soleil sur la mer, les nouvelles amis, les repas étranges, les rires et les petites peurs. Il mettait dans chaque lettre un peu de ce qu'il voyait : une fleur séchée, un caillou poli, un dessin.\n\nQuand il rentra, sa famille l'attendait sur le quai. Ils avaient gardé chaque lettre et les avaient lues à voix haute chaque soir. Sa petite sœur avait fait un album avec toutes les trouvailles qu'il avait envoyées.\n\n« Tu n'es jamais vraiment parti, » dit sa maman. « Tu étais dans chaque lettre. »\n\n✨ Morale : L'amour familial traverse toutes les distances. Une lettre, un dessin, un appel : tenir le fil de l'amour demande peu d'effort et garde tout intact.`
  },
  {
    theme: 'family',
    title: '{heroName} et le secret de famille',
    text: `Dans la famille de {heroName}, il y avait un secret. Pas un mauvais secret. Un secret magnifique : chaque membre de la famille avait un mot secret, connu d'eux seuls, qui signifiait « Je t'aime et je suis là ». Le leur était « colibri ».\n\n{heroName} avait appris ce mot en cadeau de sa grand-mère, qui l'avait reçu de la sienne. Quand les choses allaient mal, quand il était triste ou effrayé, il suffisait qu'un membre de la famille murmure « colibri » pour que tout s'allège.\n\nIl raconta ce secret à {name} un soir. {name} trouva ça si beau qu'il rentra chez lui et proposa à sa propre famille d'inventer leur mot secret.\n\nIls choisirent « lumignon ».\n\nDepuis ce jour, dans deux familles de {world}, des mots magiques se murmuraient dans les moments difficiles. Et ces mots, comme des fils invisibles, tissaient des liens plus forts que n'importe quelle corde.\n\n✨ Morale : Les rituels et les secrets partagés au sein d'une famille créent des liens invisibles mais incassables. Ces petits mystères d'amour nous portent toute notre vie.`
  },
]

// ─── STORY GENERATOR ─────────────────────────────────────────────────────────
function generateStory(
  heroId: string,
  worldId: string,
  themeId: string,
  childName: string
): { title: string; text: string } {
  const hero = HEROES.find(h => h.id === heroId)
  const world = WORLDS.find(w => w.id === worldId)

  const heroName = hero?.name ?? 'Notre héros'
  const worldName = world?.name ?? 'un monde magique'

  // Filtrer les histoires par thème
  const byTheme = STORY_LIBRARY.filter(s => s.theme === themeId)
  const pool = byTheme.length > 0 ? byTheme : STORY_LIBRARY

  // Sélectionner une histoire de façon pseudo-aléatoire mais déterministe par combinaison
  const idx = (heroId.charCodeAt(0) + worldId.charCodeAt(0) + themeId.charCodeAt(0)) % pool.length
  const template = pool[idx]

  function fill(str: string): string {
    // L'enfant ({name} dans les templates) est le personnage principal
    // Le héros choisi ({heroName}) est son compagnon magique
    return str
      .replace(/\{heroName\}/g, childName || 'notre héros')
      .replace(/\{world\}/g, worldName)
      .replace(/\{name\}/g, heroName)
  }

  return {
    title: fill(template.title),
    text: fill(template.text),
  }
}

// ─── CONFETTI ─────────────────────────────────────────────────────────────────
function ConfettiPop() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-50">
      {[...Array(18)].map((_, i) => (
        <div key={i}
          className="absolute"
          style={{
            left: `${(i * 13 + 5) % 100}%`,
            top: `-20px`,
            fontSize: `${14 + (i % 4) * 4}px`,
            animation: `fall ${1.5 + (i % 3) * 0.5}s ease-in forwards`,
            animationDelay: `${(i * 0.08)}s`,
          }}>
          {['🌟', '✨', '⭐', '🎉', '🌈', '💫'][i % 6]}
        </div>
      ))}
    </div>
  )
}

// Format story text with paragraph breaks
function formatStory(text: string) {
  return text.split('\n').filter(p => p.trim()).map((p, i) => (
    <p key={i} style={{ marginBottom: '1rem' }}>{p}</p>
  ))
}

// ─── STAR BACKGROUND ─────────────────────────────────────────────────────────
function Stars() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
      {[...Array(20)].map((_, i) => (
        <div key={i}
          className="absolute text-yellow-300 opacity-40"
          style={{
            left: `${(i * 17 + 7) % 100}%`,
            top: `${(i * 23 + 11) % 100}%`,
            fontSize: `${10 + (i % 4) * 5}px`,
            animation: `bounce-star ${2 + (i % 3)}s ease-in-out infinite`,
            animationDelay: `${(i * 0.3) % 2}s`,
          }}>
          ⭐
        </div>
      ))}
    </div>
  )
}

// ─── HOME SCREEN ─────────────────────────────────────────────────────────────
function HomeScreen({ onNavigate, childName, onSetChildName }: {
  onNavigate: (s: Screen) => void
  childName: string
  onSetChildName: (n: string) => void
}) {
  const [editingName, setEditingName] = useState(!childName)
  const [nameInput, setNameInput] = useState(childName)
  const stories = loadStories()

  function saveName() {
    if (nameInput.trim()) {
      onSetChildName(nameInput.trim())
      setEditingName(false)
    }
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-between px-5 py-8 relative" style={{ background: 'linear-gradient(180deg, #fdf4ff 0%, #f0e6ff 100%)' }}>
      <Stars />
      <div className="relative z-10 w-full max-w-sm flex flex-col items-center">
        {/* Logo */}
        <div className="text-7xl float mb-2">📖</div>
        <h1 className="text-3xl font-black text-center mb-1" style={{ color: '#6d28d9', textShadow: '0 2px 8px rgba(109,40,217,0.15)' }}>
          Contes Magiques
        </h1>
        <p className="text-center text-sm mb-6" style={{ color: '#9333ea' }}>✨ Des histoires rien que pour toi ✨</p>

        {/* Nom de l'enfant */}
        {editingName ? (
          <div className="w-full mb-6 slide-up">
            <p className="text-center text-sm font-bold mb-2" style={{ color: '#7c3aed' }}>Quel est ton prénom ?</p>
            <input
              autoFocus
              value={nameInput}
              onChange={e => setNameInput(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && saveName()}
              placeholder="Ton prénom..."
              className="w-full px-4 py-3 rounded-2xl text-center text-lg font-bold outline-none"
              style={{ background: 'white', border: '3px solid #c084fc', color: '#6d28d9' }}
            />
            <button onClick={saveName} disabled={!nameInput.trim()}
              className="w-full mt-2 py-3 rounded-2xl text-white font-black text-lg transition-all active:scale-95 disabled:opacity-40"
              style={{ background: 'linear-gradient(135deg, #7c3aed, #ec4899)' }}>
              C'est parti ! 🚀
            </button>
          </div>
        ) : (
          <div className="mb-6 text-center">
            <button onClick={() => setEditingName(true)} className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl text-sm font-bold" style={{ background: 'white', color: '#7c3aed', border: '2px solid #e9d5ff' }}>
              👋 Bonjour <span style={{ color: '#ec4899' }}>{childName}</span> !
            </button>
          </div>
        )}

        {/* Boutons principaux */}
        <div className="w-full space-y-3">
          <button onClick={() => onNavigate('create')}
            className="w-full py-4 rounded-3xl text-white font-black text-xl transition-all hover:scale-105 active:scale-95 shadow-lg"
            style={{ background: 'linear-gradient(135deg, #7c3aed, #ec4899)', boxShadow: '0 6px 20px rgba(124,58,237,0.4)' }}>
            <span className="mr-2">✨</span> Nouvelle histoire <span className="ml-2">✨</span>
          </button>

          {stories.length > 0 && (
            <button onClick={() => onNavigate('library')}
              className="w-full py-4 rounded-3xl font-black text-xl transition-all hover:scale-105 active:scale-95 shadow"
              style={{ background: 'white', color: '#7c3aed', border: '3px solid #e9d5ff' }}>
              <span className="mr-2">📚</span> Mes histoires ({stories.length})
            </button>
          )}
        </div>

        {/* Décorations */}
        <div className="flex gap-4 mt-8 text-3xl">
          {['🌟', '🦋', '🌈', '⭐', '🌙'].map((e, i) => (
            <span key={i} style={{ animation: `bounce-star ${1.5 + i * 0.3}s ease-in-out infinite`, animationDelay: `${i * 0.2}s` }}>{e}</span>
          ))}
        </div>
      </div>
    </div>
  )
}

// ─── CREATE SCREEN ────────────────────────────────────────────────────────────
function CreateScreen({ onBack, onStory, childName }: {
  onBack: () => void
  onStory: (story: Story) => void
  childName: string
}) {
  const [step, setStep] = useState<'hero' | 'world' | 'theme' | 'generate'>('hero')
  const [selectedHero, setSelectedHero] = useState<typeof HEROES[0] | null>(null)
  const [selectedWorld, setSelectedWorld] = useState<typeof WORLDS[0] | null>(null)
  const [selectedTheme, setSelectedTheme] = useState<typeof THEMES[0] | null>(null)
  const [loading, setLoading] = useState(false)
  const [showConfetti, setShowConfetti] = useState(false)

  function generate(theme: typeof THEMES[0]) {
    if (!selectedHero || !selectedWorld) return
    setStep('generate')
    setLoading(true)

    // Court délai artificiel pour l'effet magique
    setTimeout(() => {
      const { title, text } = generateStory(
        selectedHero.id,
        selectedWorld.id,
        theme.id,
        childName
      )

      const story: Story = {
        id: crypto.randomUUID(),
        title,
        text,
        hero: selectedHero.id,
        world: selectedWorld.id,
        theme: theme.id,
        createdAt: new Date().toISOString(),
        favorite: false,
      }

      const existing = loadStories()
      saveStories([story, ...existing])
      setLoading(false)
      setShowConfetti(true)
      setTimeout(() => {
        setShowConfetti(false)
        onStory(story)
      }, 700)
    }, 500)
  }

  const steps = [
    { id: 'hero', label: 'Héros', emoji: '⭐' },
    { id: 'world', label: 'Monde', emoji: '🌍' },
    { id: 'theme', label: 'Valeur', emoji: '💫' },
  ]

  return (
    <div className="min-h-screen flex flex-col" style={{ background: 'linear-gradient(180deg, #fdf4ff 0%, #f0e6ff 100%)' }}>
      {showConfetti && <ConfettiPop />}
      <Stars />
      {/* Header */}
      <div className="flex items-center gap-3 px-4 py-4 relative z-10">
        <button onClick={onBack} className="p-2 rounded-xl" style={{ background: 'white', color: '#7c3aed', border: '2px solid #e9d5ff' }}>
          <ChevronLeft size={20} />
        </button>
        <h2 className="text-xl font-black" style={{ color: '#6d28d9' }}>Créer une histoire</h2>
      </div>

      {/* Progress steps */}
      {step !== 'generate' && (
        <div className="flex items-center justify-center gap-2 px-4 pb-4 relative z-10">
          {steps.map((s, i) => (
            <div key={s.id} className="flex items-center gap-2">
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold transition-all"
                  style={step === s.id
                    ? { background: 'linear-gradient(135deg, #7c3aed, #ec4899)', color: 'white' }
                    : (step === 'world' && i === 0) || (step === 'theme' && i <= 1)
                      ? { background: '#a855f7', color: 'white' }
                      : { background: 'white', color: '#c084fc', border: '2px solid #e9d5ff' }
                  }>
                  {s.emoji}
                </div>
                <span className="text-xs font-bold mt-0.5" style={{ color: step === s.id ? '#7c3aed' : '#c084fc' }}>{s.label}</span>
              </div>
              {i < steps.length - 1 && <div className="w-8 h-0.5 mb-4" style={{ background: '#e9d5ff' }} />}
            </div>
          ))}
        </div>
      )}

      <div className="flex-1 px-4 pb-6 relative z-10 overflow-y-auto">
        {/* HERO SELECTION */}
        {step === 'hero' && (
          <div className="slide-up">
            <h3 className="text-center text-lg font-black mb-4" style={{ color: '#7c3aed' }}>Choisis ton héros ! ✨</h3>
            <div className="grid grid-cols-3 gap-3">
              {HEROES.map(hero => (
                <button key={hero.id} onClick={() => { setSelectedHero(hero); setStep('world') }}
                  className="flex flex-col items-center p-3 rounded-2xl transition-all active:scale-95"
                  style={{ background: 'white', border: '3px solid', borderColor: selectedHero?.id === hero.id ? '#7c3aed' : '#f3e8ff', boxShadow: selectedHero?.id === hero.id ? '0 4px 12px rgba(124,58,237,0.3)' : 'none' }}>
                  <span className="text-3xl mb-1">{hero.emoji}</span>
                  <span className="text-xs font-bold text-center leading-tight" style={{ color: '#6d28d9' }}>{hero.name.split(' ').slice(0, 2).join(' ')}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* WORLD SELECTION */}
        {step === 'world' && (
          <div className="slide-up">
            <div className="text-center mb-2">
              <span className="text-3xl">{selectedHero?.emoji}</span>
              <span className="font-black text-sm ml-2" style={{ color: '#7c3aed' }}>{selectedHero?.name}</span>
            </div>
            <h3 className="text-center text-lg font-black mb-4" style={{ color: '#7c3aed' }}>Dans quel monde ? 🌍</h3>
            <div className="grid grid-cols-2 gap-3">
              {WORLDS.map(world => (
                <button key={world.id} onClick={() => { setSelectedWorld(world); setStep('theme') }}
                  className="flex items-center gap-3 p-4 rounded-2xl transition-all active:scale-95"
                  style={{ background: 'white', border: '3px solid #f3e8ff' }}>
                  <span className="text-3xl">{world.emoji}</span>
                  <span className="font-bold text-sm" style={{ color: '#6d28d9' }}>{world.name}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* THEME SELECTION */}
        {step === 'theme' && (
          <div className="slide-up">
            <div className="flex items-center justify-center gap-2 mb-2">
              <span className="text-2xl">{selectedHero?.emoji}</span>
              <span className="text-lg">→</span>
              <span className="text-2xl">{selectedWorld?.emoji}</span>
            </div>
            <h3 className="text-center text-lg font-black mb-4" style={{ color: '#7c3aed' }}>Quelle valeur ? 💫</h3>
            <div className="grid grid-cols-2 gap-3">
              {THEMES.map(theme => (
                <button key={theme.id}
                  onClick={() => { setSelectedTheme(theme); generate(theme) }}
                  className="flex items-center gap-3 p-4 rounded-2xl transition-all active:scale-95"
                  style={{ background: 'white', border: '3px solid #f3e8ff' }}>
                  <span className="text-3xl">{theme.emoji}</span>
                  <span className="font-bold text-sm" style={{ color: '#6d28d9' }}>{theme.name}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* GENERATING */}
        {step === 'generate' && loading && (
          <div className="flex flex-col items-center justify-center py-16 fade-in">
            <div className="text-6xl float mb-6">🪄</div>
            <div className="flex gap-1 mb-4">
              <span className="typing-dot" />
              <span className="typing-dot" />
              <span className="typing-dot" />
            </div>
            <p className="text-center font-bold text-base" style={{ color: '#7c3aed' }}>✨ La magie prépare ton histoire...</p>
            <div className="flex gap-3 mt-6 text-2xl">
              {[selectedHero?.emoji, '✨', selectedWorld?.emoji, '✨', selectedTheme?.emoji].map((e, i) => (
                <span key={i} style={{ animation: `bounce-star ${1.2 + i * 0.2}s ease-in-out infinite`, animationDelay: `${i * 0.15}s` }}>{e}</span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

// ─── STORY SCREEN ─────────────────────────────────────────────────────────────
function StoryScreen({ story, onBack, onHome }: {
  story: Story
  onBack: () => void
  onHome: () => void
}) {
  const [speaking, setSpeaking] = useState(false)
  const [soundEnabled, setSoundEnabled] = useState(true)
  const [favorite, setFavorite] = useState(story.favorite)
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null)

  const hero = HEROES.find(h => h.id === story.hero)
  const world = WORLDS.find(w => w.id === story.world)
  const theme = THEMES.find(t => t.id === story.theme)

  useEffect(() => {
    return () => { window.speechSynthesis.cancel() }
  }, [])

  function pickBestFrenchVoice(voices: SpeechSynthesisVoice[]): SpeechSynthesisVoice | null {
    // Priorité : voix féminines naturelles françaises
    return (
      voices.find(v => v.name === 'Amélie') ||
      voices.find(v => v.name === 'Marie') ||
      voices.find(v => v.name === 'Audrey') ||
      voices.find(v => v.name.includes('Amélie')) ||
      voices.find(v => v.lang === 'fr-FR' && v.name.toLowerCase().includes('fem')) ||
      voices.find(v => v.lang === 'fr-FR' && (v.name.includes('Google') || v.name.includes('Microsoft'))) ||
      voices.find(v => v.lang === 'fr-FR' && !v.name.toLowerCase().includes('thomas')) ||
      voices.find(v => v.lang === 'fr-FR') ||
      voices.find(v => v.lang.startsWith('fr')) ||
      null
    )
  }

  function speakText(text: string) {
    const cleaned = text
      .replace(/✨\s*/g, '')
      .replace(/Morale\s*:/g, 'Et voici la morale de cette belle histoire :')
      .replace(/\n\n/g, '... ')
    const utterance = new SpeechSynthesisUtterance(cleaned)
    utterance.lang = 'fr-FR'
    utterance.rate = 0.80   // Rythme doux de conteuse
    utterance.pitch = 1.10  // Voix chaleureuse et féminine
    utterance.volume = 1.0
    const voices = window.speechSynthesis.getVoices()
    const best = pickBestFrenchVoice(voices)
    if (best) utterance.voice = best
    utterance.onend = () => setSpeaking(false)
    utterance.onerror = () => setSpeaking(false)
    utteranceRef.current = utterance
    window.speechSynthesis.speak(utterance)
    setSpeaking(true)
  }

  function toggleNarration() {
    if (!soundEnabled) return
    if (speaking) {
      window.speechSynthesis.cancel()
      setSpeaking(false)
    } else {
      const fullText = story.title + '... ' + story.text
      const voices = window.speechSynthesis.getVoices()
      if (voices.length > 0) {
        speakText(fullText)
      } else {
        // Les voix ne sont pas encore chargées — attendre l'événement
        window.speechSynthesis.onvoiceschanged = () => {
          window.speechSynthesis.onvoiceschanged = null
          speakText(fullText)
        }
        // Forcer le chargement sur certains navigateurs
        window.speechSynthesis.getVoices()
      }
    }
  }

  function toggleFavorite() {
    const newFav = !favorite
    setFavorite(newFav)
    const stories = loadStories()
    saveStories(stories.map(s => s.id === story.id ? { ...s, favorite: newFav } : s))
  }

  function restart() {
    window.speechSynthesis.cancel()
    setSpeaking(false)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen pb-28" style={{ background: 'linear-gradient(180deg, #fdf4ff 0%, #fae8ff 100%)' }}>
      {/* Header */}
      <div className="sticky top-0 z-40 flex items-center justify-between px-4 py-3"
        style={{ background: 'rgba(253,244,255,0.95)', backdropFilter: 'blur(12px)', borderBottom: '2px solid #f3e8ff' }}>
        <button onClick={onBack} className="p-2 rounded-xl" style={{ background: 'white', color: '#7c3aed', border: '2px solid #e9d5ff' }}>
          <ChevronLeft size={20} />
        </button>
        <div className="flex gap-2">
          <button onClick={toggleFavorite} className="p-2 rounded-xl transition-all" style={{ background: 'white', border: '2px solid #e9d5ff' }}>
            <Heart size={18} fill={favorite ? '#ec4899' : 'none'} color={favorite ? '#ec4899' : '#c084fc'} />
          </button>
          <button onClick={() => setSoundEnabled(!soundEnabled)} className="p-2 rounded-xl" style={{ background: 'white', border: '2px solid #e9d5ff' }}>
            {soundEnabled ? <Volume2 size={18} color="#7c3aed" /> : <VolumeX size={18} color="#c084fc" />}
          </button>
          <button onClick={onHome} className="p-2 rounded-xl" style={{ background: 'white', border: '2px solid #e9d5ff' }}>
            <Home size={18} color="#7c3aed" />
          </button>
        </div>
      </div>

      <div className="px-5 pt-6 max-w-lg mx-auto">
        {/* Badges */}
        <div className="flex gap-2 flex-wrap mb-4">
          {[hero, world, theme].filter(Boolean).map((item, i) => (
            item && (
              <span key={i} className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm font-bold"
                style={{ background: '#f3e8ff', color: '#7c3aed', border: '2px solid #e9d5ff' }}>
                {(item as typeof hero)?.emoji} {(item as typeof hero)?.name}
              </span>
            )
          ))}
        </div>

        {/* Title */}
        <h1 className="text-2xl font-black mb-6 leading-tight page-turn" style={{ color: '#4c1d95' }}>
          {story.title}
        </h1>

        {/* Story text */}
        <div className="story-text fade-in rounded-3xl p-5 mb-6" style={{ background: 'white', border: '2px solid #f3e8ff', boxShadow: '0 4px 20px rgba(167,139,250,0.1)' }}>
          {formatStory(story.text)}
        </div>

        {/* End decoration */}
        <div className="text-center text-3xl mb-8">
          {['🌟', '✨', '⭐', '✨', '🌟'].map((e, i) => (
            <span key={i} style={{ animationDelay: `${i * 0.2}s` }} className="bounce-delay-1">{e}</span>
          ))}
        </div>
      </div>

      {/* Bottom narration bar */}
      <div className="fixed bottom-0 left-0 right-0 z-40 px-4 pb-6 pt-3"
        style={{ background: 'rgba(253,244,255,0.97)', backdropFilter: 'blur(16px)', borderTop: '2px solid #f3e8ff' }}>
        <div className="max-w-lg mx-auto flex gap-3">
          <button onClick={restart} className="p-3 rounded-2xl" style={{ background: 'white', border: '2px solid #e9d5ff', color: '#7c3aed' }}>
            <RotateCcw size={18} />
          </button>
          <button
            onClick={toggleNarration}
            disabled={!soundEnabled}
            className="flex-1 py-3 rounded-2xl text-white font-black text-base transition-all active:scale-95 flex items-center justify-center gap-2 disabled:opacity-40"
            style={{ background: speaking ? 'linear-gradient(135deg, #ec4899, #f43f5e)' : 'linear-gradient(135deg, #7c3aed, #a855f7)', boxShadow: '0 4px 15px rgba(124,58,237,0.35)' }}>
            {speaking ? <><Pause size={18} /> Pause</> : <><Play size={18} /> Écouter l'histoire</>}
          </button>
        </div>
      </div>
    </div>
  )
}

// ─── LIBRARY SCREEN ───────────────────────────────────────────────────────────
function LibraryScreen({ onBack, onStory }: {
  onBack: () => void
  onStory: (s: Story) => void
}) {
  const [stories, setStories] = useState<Story[]>(loadStories())
  const [filter, setFilter] = useState<'all' | 'favorites'>('all')

  function deleteStory(id: string) {
    const updated = stories.filter(s => s.id !== id)
    saveStories(updated)
    setStories(updated)
  }

  function toggleFavorite(id: string) {
    const updated = stories.map(s => s.id === id ? { ...s, favorite: !s.favorite } : s)
    saveStories(updated)
    setStories(updated)
  }

  const filtered = filter === 'favorites' ? stories.filter(s => s.favorite) : stories

  return (
    <div className="min-h-screen" style={{ background: 'linear-gradient(180deg, #fdf4ff 0%, #f0e6ff 100%)' }}>
      <Stars />
      <div className="flex items-center gap-3 px-4 py-4 relative z-10">
        <button onClick={onBack} className="p-2 rounded-xl" style={{ background: 'white', color: '#7c3aed', border: '2px solid #e9d5ff' }}>
          <ChevronLeft size={20} />
        </button>
        <h2 className="text-xl font-black" style={{ color: '#6d28d9' }}>📚 Mes histoires</h2>
      </div>

      {/* Filter */}
      <div className="flex gap-2 px-4 pb-4 relative z-10">
        {(['all', 'favorites'] as const).map(f => (
          <button key={f} onClick={() => setFilter(f)}
            className="px-4 py-2 rounded-2xl text-sm font-bold transition-all"
            style={filter === f
              ? { background: 'linear-gradient(135deg, #7c3aed, #ec4899)', color: 'white' }
              : { background: 'white', color: '#7c3aed', border: '2px solid #e9d5ff' }}>
            {f === 'all' ? '📖 Toutes' : '❤️ Favorites'}
          </button>
        ))}
      </div>

      <div className="px-4 pb-8 relative z-10 space-y-3">
        {filtered.length === 0 && (
          <div className="text-center py-12">
            <div className="text-5xl mb-3">📭</div>
            <p className="font-bold" style={{ color: '#7c3aed' }}>
              {filter === 'favorites' ? 'Pas encore de favoris !' : 'Pas encore d\'histoires !'}
            </p>
          </div>
        )}
        {filtered.map(story => {
          const hero = HEROES.find(h => h.id === story.hero)
          const world = WORLDS.find(w => w.id === story.world)
          return (
            <div key={story.id} className="rounded-3xl p-4 slide-up"
              style={{ background: 'white', border: '2px solid #f3e8ff', boxShadow: '0 2px 12px rgba(167,139,250,0.1)' }}>
              <div className="flex items-start justify-between gap-2">
                <button onClick={() => onStory(story)} className="flex-1 text-left">
                  <div className="flex gap-2 mb-1">
                    <span>{hero?.emoji}</span>
                    <span>{world?.emoji}</span>
                  </div>
                  <p className="font-black text-sm leading-tight mb-1" style={{ color: '#4c1d95' }}>{story.title}</p>
                  <p className="text-xs" style={{ color: '#9333ea' }}>
                    {new Date(story.createdAt).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long' })}
                  </p>
                </button>
                <div className="flex flex-col gap-1">
                  <button onClick={() => toggleFavorite(story.id)} className="p-2 rounded-xl" style={{ background: '#fdf4ff' }}>
                    <Heart size={16} fill={story.favorite ? '#ec4899' : 'none'} color={story.favorite ? '#ec4899' : '#c084fc'} />
                  </button>
                  <button onClick={() => deleteStory(story.id)} className="p-2 rounded-xl" style={{ background: '#fff1f2' }}>
                    <span style={{ fontSize: 14 }}>🗑️</span>
                  </button>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

// ─── APP ──────────────────────────────────────────────────────────────────────
export default function App() {
  const [screen, setScreen] = useState<Screen>('home')
  const [currentStory, setCurrentStory] = useState<Story | null>(null)
  const [childName, setChildName] = useState(loadChildName())

  function setName(n: string) {
    setChildName(n)
    saveChildName(n)
  }

  if (screen === 'story' && currentStory) {
    return <StoryScreen story={currentStory} onBack={() => setScreen('library')} onHome={() => setScreen('home')} />
  }
  if (screen === 'create') {
    return <CreateScreen onBack={() => setScreen('home')} childName={childName}
      onStory={s => { setCurrentStory(s); setScreen('story') }} />
  }
  if (screen === 'library') {
    return <LibraryScreen onBack={() => setScreen('home')}
      onStory={s => { setCurrentStory(s); setScreen('story') }} />
  }
  return (
    <HomeScreen onNavigate={setScreen} childName={childName} onSetChildName={setName} />
  )
}
