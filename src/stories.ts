// ══════════════════════════════════════════════════════════════════════════════
// BASE DE DONNÉES D'HISTOIRES — Contes Magiques
// 120 histoires × 3 langues — personnalisées avec [NAME]
// ══════════════════════════════════════════════════════════════════════════════

export type Lang = 'fr' | 'en' | 'es'
export type Universe = 'forest' | 'ocean' | 'space' | 'candy' | 'castle' | 'jungle' | 'dino' | 'clouds' | 'ice' | 'pirates' | 'robots' | 'fairies' | 'desert' | 'bamboo' | 'volcano'

export interface StoryTemplate {
  id: string
  universe: Universe
  theme: 'courage' | 'friendship' | 'kindness' | 'adventure' | 'sharing' | 'perseverance' | 'family' | 'honesty'
  titleFr: string
  titleEn: string
  titleEs: string
  textFr: string
  textEn: string
  textEs: string
}

// Helper : remplace [NAME] par le prénom de l'enfant
export function personalize(text: string, name: string): string {
  return text.replace(/\[NAME\]/g, name || 'notre héros')
}

export const UNIVERSES: Record<Universe, { emoji: string; fr: string; en: string; es: string }> = {
  forest:  { emoji: '🌲', fr: 'Forêt Enchantée',     en: 'Enchanted Forest',    es: 'Bosque Encantado' },
  ocean:   { emoji: '🌊', fr: 'Fond des Océans',      en: 'Ocean Depths',        es: 'Fondo del Océano' },
  space:   { emoji: '🌌', fr: 'Galaxie Lointaine',    en: 'Distant Galaxy',      es: 'Galaxia Lejana' },
  candy:   { emoji: '🍭', fr: 'Pays des Bonbons',     en: 'Candy Kingdom',       es: 'País de los Dulces' },
  castle:  { emoji: '🏰', fr: 'Royaume Magique',      en: 'Magic Kingdom',       es: 'Reino Mágico' },
  jungle:  { emoji: '🌿', fr: 'Jungle Mystérieuse',   en: 'Mysterious Jungle',   es: 'Selva Misteriosa' },
  dino:    { emoji: '🦕', fr: 'Monde des Dinosaures', en: 'Dinosaur World',      es: 'Mundo de Dinosaurios' },
  clouds:  { emoji: '☁️', fr: 'Cité dans les Nuages', en: 'City in the Clouds',  es: 'Ciudad en las Nubes' },
  ice:     { emoji: '❄️', fr: 'Pays des Glaces',      en: 'Land of Ice',         es: 'País de los Hielos' },
  pirates: { emoji: '🏴‍☠️', fr: 'Île aux Pirates',     en: 'Pirate Island',       es: 'Isla Pirata' },
  robots:  { emoji: '🤖', fr: 'Monde des Robots',     en: 'Robot World',         es: 'Mundo de los Robots' },
  fairies: { emoji: '🧚', fr: 'Village des Fées',     en: 'Fairy Village',       es: 'Aldea de las Hadas' },
  desert:  { emoji: '🌵', fr: 'Désert Magique',       en: 'Magic Desert',        es: 'Desierto Mágico' },
  bamboo:  { emoji: '🎋', fr: 'Forêt de Bambous',     en: 'Bamboo Forest',       es: 'Bosque de Bambú' },
  volcano: { emoji: '🌋', fr: 'Île Volcanique',       en: 'Volcanic Island',     es: 'Isla Volcánica' },
}

export const STORIES: StoryTemplate[] = [

// ─── FORÊT ENCHANTÉE ────────────────────────────────────────────────────────

{
  id: 'f1',
  universe: 'forest',
  theme: 'courage',
  titleFr: '[NAME] et le Dragon Violet',
  titleEn: '[NAME] and the Purple Dragon',
  titleEs: '[NAME] y el Dragón Violeta',
  textFr: `Dans la grande forêt enchantée où les arbres chuchotent des secrets aux étoiles, vivait un jeune aventurier prénommé [NAME]. Un matin de printemps, [NAME] entendit un grondement venir du cœur de la forêt. Tout le village avait peur. Mais [NAME], le cœur battant fort, décida d'y aller malgré tout.

En suivant le chemin de pierres lumineuses, [NAME] découvrit une magnifique clairière. Au centre se trouvait un dragon violet, assis seul, les yeux remplis de larmes qui brillaient comme des rubis. "Pourquoi pleures-tu ?" demanda doucement [NAME].

Le dragon sursauta. Personne ne lui avait jamais parlé ainsi. "Je suis seul," dit-il d'une voix comme le tonnerre. "Chaque fois que j'essaie d'approcher le village, tout le monde s'enfuit."

[NAME] comprit alors. Ce dragon n'était pas méchant — il était simplement solitaire. Avec un grand sourire, [NAME] s'assit à côté de lui. "Je suis là, moi. Et je ne m'enfuis pas." Le dragon battit des ailes de joie, et ensemble ils rentrèrent au village.

Ce jour-là, [NAME] apprit quelque chose d'important : le courage, ce n'est pas de ne jamais avoir peur. C'est d'avancer quand même, parce que quelqu'un a besoin de toi. Et dans ce village enchanté, le dragon violet devint le plus grand ami que [NAME] n'ait jamais eu.`,
  textEn: `In the great enchanted forest where trees whisper secrets to the stars, there lived a young adventurer named [NAME]. One spring morning, [NAME] heard a rumbling coming from the heart of the forest. The whole village was frightened. But [NAME], heart beating fast, decided to go anyway.

Following the path of glowing stones, [NAME] discovered a beautiful clearing. At its center sat a purple dragon, alone, with eyes full of tears that sparkled like rubies. "Why are you crying?" [NAME] asked gently.

The dragon jumped. Nobody had ever spoken to him so kindly. "I'm lonely," he said in a voice like thunder. "Every time I try to get near the village, everyone runs away."

[NAME] understood then. This dragon wasn't scary — he was simply lonely. With a big smile, [NAME] sat down beside him. "I'm here. And I'm not running away." The dragon flapped his wings with joy, and together they walked back to the village.

That day, [NAME] learned something important: courage isn't about never being afraid. It's about moving forward anyway, because someone needs you. And in that enchanted village, the purple dragon became the best friend [NAME] had ever had.`,
  textEs: `En el gran bosque encantado donde los árboles susurran secretos a las estrellas, vivía un joven aventurero llamado [NAME]. Una mañana de primavera, [NAME] escuchó un rugido que venía del corazón del bosque. Todo el pueblo tenía miedo. Pero [NAME], con el corazón latiendo rápido, decidió ir de todas formas.

Siguiendo el camino de piedras luminosas, [NAME] descubrió un hermoso claro. En el centro había un dragón violeta, sentado solo, con ojos llenos de lágrimas que brillaban como rubíes. "¿Por qué lloras?" preguntó [NAME] suavemente.

El dragón se sobresaltó. Nadie le había hablado así jamás. "Estoy solo," dijo con voz de trueno. "Cada vez que intento acercarme al pueblo, todos huyen."

[NAME] entendió entonces. Este dragón no era malo — simplemente estaba solo. Con una gran sonrisa, [NAME] se sentó a su lado. "Aquí estoy yo. Y no voy a huir." El dragón batió sus alas de alegría, y juntos regresaron al pueblo.

Ese día, [NAME] aprendió algo importante: el valor no es no tener nunca miedo. Es seguir adelante de todas formas, porque alguien te necesita. Y en ese pueblo encantado, el dragón violeta se convirtió en el mejor amigo que [NAME] había tenido jamás.`
},

{
  id: 'f2',
  universe: 'forest',
  theme: 'friendship',
  titleFr: '[NAME] et la Licorne Arc-en-Ciel',
  titleEn: '[NAME] and the Rainbow Unicorn',
  titleEs: '[NAME] y el Unicornio Arcoíris',
  textFr: `La forêt de Lumierelle était connue pour ses arbres qui changeaient de couleur au rythme des saisons. C'est là que [NAME] aimait se promener après l'école, ramassant des feuilles dorées et des pierres brillantes.

Un après-midi nuageux, alors que [NAME] cherchait son chemin dans un coin inconnu de la forêt, une lumière multicolore traversa les arbres. C'était une licorne — pas n'importe laquelle, mais Iris, la licorne aux couleurs de l'arc-en-ciel, connue dans tout le royaume pour sa beauté. Mais ce jour-là, Iris était coincée : son sabot était pris entre deux racines géantes.

[NAME] s'approcha calmement. "Bouge pas, je vais t'aider !" Avec beaucoup de patience et de délicatesse, [NAME] déplaça les racines une à une jusqu'à libérer la licorne. Iris se releva, secoua sa crinière arc-en-ciel, et regarda [NAME] avec des yeux pétillants d'étoiles.

"Merci," dit-elle dans un murmure doux comme le vent. "En échange, je t'offre un don : chaque fois que tu aideras quelqu'un de sincère, une étoile apparaîtra dans ton cœur."

Depuis ce jour, [NAME] aidait les autres non pas pour la récompense, mais parce que voir sourire quelqu'un était la plus belle des magies. Et parfois, la nuit, [NAME] sentait ce petit scintillement chaud dans sa poitrine — les étoiles qu'Iris avait promises.`,
  textEn: `The forest of Lumierelle was known for its trees that changed color with the seasons. That was where [NAME] loved to walk after school, picking up golden leaves and sparkling stones.

One cloudy afternoon, while [NAME] was exploring an unknown corner of the forest, a rainbow-colored light filtered through the trees. It was a unicorn — not just any unicorn, but Iris, the rainbow-maned unicorn known throughout the kingdom for her beauty. But that day, Iris was stuck: her hoof caught between two giant roots.

[NAME] approached calmly. "Don't move, I'll help you!" With great patience and care, [NAME] moved the roots one by one until the unicorn was free. Iris stood up, shook her rainbow mane, and looked at [NAME] with eyes sparkling like stars.

"Thank you," she said in a whisper as soft as the wind. "In return, I give you a gift: each time you help someone from the heart, a star will appear inside it."

From that day on, [NAME] helped others not for the reward, but because seeing someone smile was the most beautiful magic of all. And sometimes at night, [NAME] felt that warm little sparkle in their chest — the stars Iris had promised.`,
  textEs: `El bosque de Lumierelle era conocido por sus árboles que cambiaban de color con las estaciones. Allí le encantaba pasear a [NAME] después del colegio, recogiendo hojas doradas y piedras brillantes.

Una tarde nublada, mientras [NAME] exploraba un rincón desconocido del bosque, una luz de colores atravesó los árboles. Era un unicornio — no cualquiera, sino Iris, el unicornio de melena arcoíris conocido en todo el reino por su belleza. Pero ese día, Iris estaba atrapada: su casco enganchado entre dos raíces gigantes.

[NAME] se acercó con calma. "¡No te muevas, te ayudaré!" Con mucha paciencia y cuidado, [NAME] fue moviendo las raíces una a una hasta liberar al unicornio. Iris se levantó, sacudió su melena de colores, y miró a [NAME] con ojos brillantes como estrellas.

"Gracias," dijo en un susurro suave como el viento. "A cambio, te doy un regalo: cada vez que ayudes a alguien de verdad, aparecerá una estrella en tu corazón."

Desde ese día, [NAME] ayudaba a los demás no por la recompensa, sino porque ver sonreír a alguien era la magia más hermosa de todas. Y a veces, por las noches, [NAME] sentía ese pequeño destello cálido en el pecho — las estrellas que Iris había prometido.`
},

// ─── FOND DES OCÉANS ─────────────────────────────────────────────────────────

{
  id: 'o1',
  universe: 'ocean',
  theme: 'kindness',
  titleFr: '[NAME] et la Baleine Bleue',
  titleEn: '[NAME] and the Blue Whale',
  titleEs: '[NAME] y la Ballena Azul',
  textFr: `Au fond de l'océan Azurelle, là où la lumière du soleil se transforme en milliers de petits diamants bleus, vivait [NAME] dans un palais de corail rose. [NAME] était un plongeur extraordinaire qui connaissait chaque recoin de cet univers aquatique.

Un matin, [NAME] remarqua que quelque chose n'allait pas. Une immense baleine bleue était coincée dans un filet abandonné par des pêcheurs. La pauvre bête se débattait doucement, incapable de monter à la surface pour respirer. Sans hésiter, [NAME] nagea vers elle.

Le trajet fut long et le courant fort, mais [NAME] n'abandonna jamais. Armé de sa petite lame de nacre, [NAME] coupa les fils un par un, pendant de longues minutes. Quand enfin le dernier fil céda, la baleine fut libre.

Elle monta lentement vers la surface, puis redescendit se placer juste devant [NAME]. Ses yeux immenses, grands comme des fenêtres, regardaient avec une douceur infinie. Puis elle émit un son — une chanson si belle, si grave et si pure que tous les poissons autour s'arrêtèrent pour écouter.

C'était sa façon de dire merci.

Ce soir-là, en rentrant dans son palais de corail, [NAME] sut que la gentillesse n'a pas besoin de mots pour être entendue. Parfois, un regard suffit. Parfois, une chanson de baleine dit tout.`,
  textEn: `At the bottom of the Azurelle ocean, where sunlight transforms into thousands of tiny blue diamonds, [NAME] lived in a palace of pink coral. [NAME] was an extraordinary diver who knew every corner of this underwater world.

One morning, [NAME] noticed something was wrong. A massive blue whale was tangled in a net abandoned by fishermen. The poor creature struggled gently, unable to rise to the surface to breathe. Without hesitating, [NAME] swam toward her.

The journey was long and the current strong, but [NAME] never gave up. Armed with a small mother-of-pearl blade, [NAME] cut the threads one by one for long minutes. When the last thread finally snapped, the whale was free.

She rose slowly to the surface, then came back down to hover just in front of [NAME]. Her enormous eyes, as large as windows, gazed with infinite softness. Then she made a sound — a song so beautiful, so deep and pure that every fish around stopped to listen.

That was her way of saying thank you.

That evening, returning to the coral palace, [NAME] knew that kindness doesn't need words to be heard. Sometimes a look is enough. Sometimes a whale's song says everything.`,
  textEs: `En el fondo del océano Azurelle, donde la luz del sol se transforma en miles de pequeños diamantes azules, vivía [NAME] en un palacio de coral rosa. [NAME] era un buceador extraordinario que conocía cada rincón de este mundo acuático.

Una mañana, [NAME] notó que algo iba mal. Una enorme ballena azul estaba atrapada en una red abandonada por pescadores. La pobre criatura se debatía suavemente, incapaz de subir a la superficie para respirar. Sin dudarlo, [NAME] nadó hacia ella.

El trayecto fue largo y la corriente fuerte, pero [NAME] no se rindió nunca. Armado con su pequeña hoja de nácar, [NAME] cortó los hilos uno a uno durante largos minutos. Cuando por fin cedió el último hilo, la ballena quedó libre.

Subió lentamente a la superficie, luego bajó para colocarse justo frente a [NAME]. Sus enormes ojos, grandes como ventanas, miraban con una ternura infinita. Luego emitió un sonido — una canción tan hermosa, tan grave y pura que todos los peces de alrededor se detuvieron para escuchar.

Era su forma de dar las gracias.

Esa noche, al regresar a su palacio de coral, [NAME] supo que la bondad no necesita palabras para ser escuchada. A veces, una mirada basta. A veces, la canción de una ballena lo dice todo.`
},

{
  id: 'o2',
  universe: 'ocean',
  theme: 'adventure',
  titleFr: '[NAME] à la Recherche du Trésor Perdu',
  titleEn: '[NAME] and the Lost Treasure',
  titleEs: '[NAME] y el Tesoro Perdido',
  textFr: `La mer des Étoiles cachait un secret que personne n'avait découvert depuis mille ans : le Trésor de l'Aurore, enfermé dans un coffre au fond du Gouffre Scintillant. [NAME] en avait rêvé toute sa vie. Ce matin-là, avec sa ceinture de bulles magiques autour de la taille, [NAME] plongea.

La descente dura une éternité. Des pieuvres géantes aux bras comme des rubans de soie l'observaient. Des poissons-lanternes éclairaient son chemin de leur douce lueur dorée. Et tout en bas, dans le noir absolu, quelque chose brillait.

Le coffre était là. Mais une pieuvre énorme, avec des yeux comme des lunes, le gardait jalousement. [NAME] réfléchit. Pas question de se battre. Alors [NAME] se souvint d'une vieille leçon : les gardiens ont toujours une histoire à raconter.

"Bonjour," dit [NAME] en language de bulle. "Depuis combien de temps gardes-tu ce coffre ?"

La pieuvre s'arrêta net. Personne ne lui avait jamais demandé ça. "Mille ans," répondit-elle lentement. "Et je suis fatiguée."

"Alors repose-toi," dit [NAME] doucement. "Je vais veiller sur lui à ta place, le temps d'une sieste."

La pieuvre, épuisée et touchée, se recroquevilla et s'endormit. [NAME] ouvrit le coffre. À l'intérieur, il n'y avait pas d'or ni de diamants — juste une carte du monde et un message : "Le vrai trésor, c'est la curiosité qui t'a mené jusqu'ici."

[NAME] remonta en surface en souriant. Certains trésors ne brillent pas — ils éclairent.`,
  textEn: `The Sea of Stars hid a secret that nobody had discovered for a thousand years: the Treasure of the Aurora, locked in a chest at the bottom of the Glittering Abyss. [NAME] had dreamed of it all their life. That morning, with a belt of magic bubbles around their waist, [NAME] dove in.

The descent lasted an eternity. Giant octopuses with arms like silk ribbons watched. Lanternfish lit the way with their soft golden glow. And at the very bottom, in absolute darkness, something glowed.

The chest was there. But a massive octopus, with eyes like moons, guarded it jealously. [NAME] thought carefully. Fighting was out of the question. Then [NAME] remembered an old lesson: guardians always have a story to tell.

"Hello," said [NAME] in bubble language. "How long have you been guarding this chest?"

The octopus froze. Nobody had ever asked that before. "A thousand years," she replied slowly. "And I'm tired."

"Then rest," said [NAME] gently. "I'll watch over it for you while you take a nap."

The octopus, exhausted and touched, curled up and fell asleep. [NAME] opened the chest. Inside were no gold or diamonds — just a map of the world and a message: "The real treasure is the curiosity that led you here."

[NAME] swam to the surface smiling. Some treasures don't shine — they illuminate.`,
  textEs: `El Mar de las Estrellas guardaba un secreto que nadie había descubierto en mil años: el Tesoro de la Aurora, encerrado en un cofre en el fondo del Abismo Centelleante. [NAME] había soñado con él toda su vida. Esa mañana, con un cinturón de burbujas mágicas alrededor de la cintura, [NAME] se zambulló.

El descenso duró una eternidad. Pulpos gigantes con brazos como cintas de seda lo observaban. Peces linterna iluminaban su camino con su suave resplandor dorado. Y en el fondo, en la oscuridad absoluta, algo brillaba.

El cofre estaba allí. Pero un pulpo enorme, con ojos como lunas, lo guardaba celosamente. [NAME] reflexionó. Pelear estaba descartado. Entonces [NAME] recordó una vieja lección: los guardianes siempre tienen una historia que contar.

"Hola," dijo [NAME] en lenguaje de burbuja. "¿Cuánto tiempo llevas guardando este cofre?"

El pulpo se detuvo en seco. Nadie le había preguntado eso nunca. "Mil años," respondió lentamente. "Y estoy cansado."

"Entonces descansa," dijo [NAME] suavemente. "Yo lo vigilaré mientras echas una siesta."

El pulpo, agotado y conmovido, se acurrucó y se durmió. [NAME] abrió el cofre. Dentro no había oro ni diamantes — solo un mapa del mundo y un mensaje: "El verdadero tesoro es la curiosidad que te trajo hasta aquí."

[NAME] subió a la superficie sonriendo. Algunos tesoros no brillan — iluminan.`
},

// ─── ESPACE ──────────────────────────────────────────────────────────────────

{
  id: 's1',
  universe: 'space',
  theme: 'perseverance',
  titleFr: '[NAME] et l\'Étoile Perdue',
  titleEn: '[NAME] and the Lost Star',
  titleEs: '[NAME] y la Estrella Perdida',
  textFr: `Dans la galaxie de Veloria, chaque enfant naissait avec une étoile personnelle qui brillait dans le ciel. Mais un soir, [NAME] regarda vers le haut et vit que son étoile avait disparu. Un grand trou noir à sa place. Le cœur serré, [NAME] demanda au vieux sage de la planète.

"Ton étoile ne s'est pas éteinte," dit le sage. "Elle s'est perdue. Pour la retrouver, tu devras traverser la Nébuleuse des Rêves, dépasser les Anneaux de Saturine, et affronter le Vent des Doutes."

[NAME] construisit une petite fusée avec des morceaux de lune recyclée et décolla. La Nébuleuse des Rêves était belle mais labyrinthique — [NAME] se perdit trois fois. À chaque fois, il recommença sans se décourager. Les Anneaux de Saturine étaient si brillants qu'ils aveuglaient — [NAME] ferma les yeux et avança au toucher.

Puis vint le Vent des Doutes, qui soufflait dans les oreilles : "Tu n'y arriveras pas. Rentre chez toi." Mais [NAME] pensa à toutes les fois où il avait persévéré malgré la peur, et le vent faiblit.

Au bout du chemin, dans un recoin de la galaxie, l'étoile personnelle de [NAME] brillait, un peu seule, mais intacte. "Je t'ai cherché longtemps," dit [NAME]. L'étoile cligna une fois. Deux fois. Puis elle reprit sa place dans le ciel.

Persévérance, c'était le mot que [NAME] avait appris. Continuer, même quand le vent dit non.`,
  textEn: `In the galaxy of Veloria, every child was born with a personal star that shone in the sky. But one evening, [NAME] looked up and saw that their star had disappeared. A big dark hole in its place. With a heavy heart, [NAME] asked the old wise one of the planet.

"Your star didn't go out," said the sage. "It got lost. To find it, you must cross the Nebula of Dreams, pass beyond the Rings of Saturine, and face the Wind of Doubts."

[NAME] built a small rocket from recycled moon scraps and took off. The Nebula of Dreams was beautiful but labyrinthine — [NAME] got lost three times. Each time, they started again without losing heart. The Rings of Saturine were so bright they blinded — [NAME] closed their eyes and moved forward by touch.

Then came the Wind of Doubts, whispering in their ears: "You won't make it. Go home." But [NAME] thought of all the times they'd pushed on despite fear, and the wind grew weak.

At the end of the path, tucked away in a corner of the galaxy, [NAME]'s personal star glowed — a little lonely, but unharmed. "I searched for you a long time," said [NAME]. The star blinked once. Twice. Then it returned to its place in the sky.

Perseverance — that was the word [NAME] had learned. Keep going, even when the wind says no.`,
  textEs: `En la galaxia de Veloria, cada niño nacía con una estrella personal que brillaba en el cielo. Pero una noche, [NAME] miró hacia arriba y vio que su estrella había desaparecido. Un gran agujero oscuro en su lugar. Con el corazón encogido, [NAME] preguntó al viejo sabio del planeta.

"Tu estrella no se ha apagado," dijo el sabio. "Se ha perdido. Para encontrarla, debes cruzar la Nebulosa de los Sueños, pasar más allá de los Anillos de Saturine, y enfrentarte al Viento de las Dudas."

[NAME] construyó un pequeño cohete con trozos de luna reciclada y despegó. La Nebulosa de los Sueños era hermosa pero laberíntica — [NAME] se perdió tres veces. Cada vez, volvió a empezar sin desanimarse. Los Anillos de Saturine eran tan brillantes que cegaban — [NAME] cerró los ojos y avanzó a tientas.

Luego llegó el Viento de las Dudas, susurrando al oído: "No lo lograrás. Vuelve a casa." Pero [NAME] pensó en todas las veces que había seguido adelante a pesar del miedo, y el viento se debilitó.

Al final del camino, escondida en un rincón de la galaxia, la estrella personal de [NAME] brillaba — un poco sola, pero intacta. "Te he buscado mucho tiempo," dijo [NAME]. La estrella parpadeó una vez. Dos veces. Luego volvió a su lugar en el cielo.

Perseverancia — esa fue la palabra que [NAME] aprendió. Seguir adelante, aunque el viento diga que no.`
},

{
  id: 's2',
  universe: 'space',
  theme: 'friendship',
  titleFr: '[NAME] et le Petit Robot Stellaire',
  titleEn: '[NAME] and the Little Star Robot',
  titleEs: '[NAME] y el Pequeño Robot Estelar',
  textFr: `La station spatiale Aurore flottait entre Jupiter et Saturne, et [NAME] en était le plus jeune explorateur. Un soir, en vérifiant les capteurs météoriques, [NAME] détecta quelque chose d'inhabituel : un petit engin spatial tournait en rond, perdu, incapable de retrouver son chemin.

[NAME] envoya un signal de guidance. L'engin — un tout petit robot sphérique appelé Pixo — répondit par une suite de bips joyeux. [NAME] le guida jusqu'au sas d'amarrage. Quand Pixo entra dans la station, ses yeux lumineux clignotaient en orange — la couleur du chagrin chez les robots de sa planète.

"Tu es perdu depuis combien de temps ?" demanda [NAME] en langage binaire.

"237 jours," répondit Pixo.

[NAME] sortit sa carte galactique. Ensemble, ils cherchèrent la planète d'origine de Pixo. Ce n'était pas facile — l'univers est grand et Pixo ne se souvenait plus que de quelques détails. Mais chaque soir, ils ajoutaient une pièce au puzzle.

Au bout de dix jours, ils trouvèrent ! La planète Robotia, une petite sphère dorée dans le système de Betelgeuse. [NAME] prépara la fusée de secours, mais au moment du départ, Pixo s'arrêta et cligna en violet — la couleur de l'amitié.

"Tu veux que je vienne avec toi ?" devina [NAME].

Trois bips. Oui.

Et c'est ainsi que [NAME] découvrit qu'une amitié vraie peut naître même entre un humain et un robot, même à des millions de kilomètres des étoiles connues.`,
  textEn: `Space station Aurora floated between Jupiter and Saturn, and [NAME] was its youngest explorer. One evening, checking the meteor sensors, [NAME] detected something unusual: a small spacecraft circling helplessly, unable to find its way.

[NAME] sent a guidance signal. The craft — a tiny spherical robot named Pixo — responded with a series of happy beeps. [NAME] guided it to the docking airlock. When Pixo entered the station, his luminous eyes blinked orange — the color of sadness for robots of his planet.

"How long have you been lost?" asked [NAME] in binary.

"237 days," Pixo answered.

[NAME] pulled out the galactic map. Together they searched for Pixo's home planet. It wasn't easy — the universe is vast and Pixo only remembered a few details. But every evening, they added another piece to the puzzle.

After ten days, they found it! The planet Robotia, a small golden sphere in the Betelgeuse system. [NAME] prepared the rescue rocket, but at departure time, Pixo stopped and blinked purple — the color of friendship.

"Do you want me to come with you?" guessed [NAME].

Three beeps. Yes.

And so [NAME] discovered that a true friendship can bloom even between a human and a robot, even millions of miles from any known star.`,
  textEs: `La estación espacial Aurora flotaba entre Júpiter y Saturno, y [NAME] era su explorador más joven. Una noche, revisando los sensores de meteoros, [NAME] detectó algo inusual: una pequeña nave espacial dando vueltas sin rumbo, incapaz de encontrar su camino.

[NAME] envió una señal de guía. La nave — un pequeño robot esférico llamado Pixo — respondió con una serie de pitidos alegres. [NAME] lo guió hasta la esclusa de atraque. Cuando Pixo entró en la estación, sus ojos luminosos parpadearon en naranja — el color de la tristeza para los robots de su planeta.

"¿Cuánto tiempo llevas perdido?" preguntó [NAME] en lenguaje binario.

"237 días," respondió Pixo.

[NAME] sacó el mapa galáctico. Juntos buscaron el planeta natal de Pixo. No fue fácil — el universo es vasto y Pixo solo recordaba algunos detalles. Pero cada noche, añadían una pieza al rompecabezas.

¡Después de diez días, lo encontraron! El planeta Robotia, una pequeña esfera dorada en el sistema de Betelgeuse. [NAME] preparó el cohete de rescate, pero en el momento de la partida, Pixo se detuvo y parpadeó en violeta — el color de la amistad.

"¿Quieres que vaya contigo?" adivinó [NAME].

Tres pitidos. Sí.

Y así [NAME] descubrió que una verdadera amistad puede nacer incluso entre un humano y un robot, incluso a millones de kilómetros de las estrellas conocidas.`
},

// ─── PAYS DES BONBONS ────────────────────────────────────────────────────────

{
  id: 'c1',
  universe: 'candy',
  theme: 'sharing',
  titleFr: '[NAME] et le Gâteau Géant',
  titleEn: '[NAME] and the Giant Cake',
  titleEs: '[NAME] y el Pastel Gigante',
  textFr: `Dans le Pays des Bonbons, où les routes étaient en réglisse et les maisons en pain d'épices, vivait [NAME] dans un cottage en caramel. C'était un pays merveilleux, mais il y avait un problème : personne ne partageait jamais rien. Chacun gardait ses bonbons jalousement.

Un jour, une tempête de sucre glace couvrit tout le pays d'une couche épaisse de blanc doux. Les arbres en sucettes disparurent. Les rivières de limonade gelèrent. Et les habitants, chacun dans sa maison, s'ennuyaient tout seuls.

[NAME] eut alors une idée lumineuse. Avec ses provisions, [NAME] sortit et commença à préparer un gâteau géant au milieu de la place du village. Un voisin s'approcha curieusement. "Tu as besoin d'œufs en chocolat ?" Il en apporta une douzaine. Une autre voisine arriva avec du lait condensé. Un vieux monsieur apporta ses dernières fraises gélifiées.

En une après-midi, le gâteau était immense — cinq étages, couvert de crème arc-en-ciel et de confettis comestibles. Quand ils le mangèrent tous ensemble, quelque chose d'extraordinaire se produisit : le sucre glace commença à fondre sous leurs rires.

Ce soir-là, les habitants du Pays des Bonbons comprirent que les choses les plus douces sont celles qu'on partage. Et depuis ce jour, chaque dimanche, ils préparent un gâteau ensemble — toujours plus beau, toujours plus grand.`,
  textEn: `In the Candy Kingdom, where roads were made of licorice and houses of gingerbread, [NAME] lived in a caramel cottage. It was a wonderful place, but there was one problem: nobody ever shared anything. Everyone guarded their sweets jealously.

One day, a powdered-sugar storm covered the whole kingdom in a thick soft white layer. The lollipop trees disappeared. The lemonade rivers froze over. And the villagers, each alone in their house, were terribly bored.

Then [NAME] had a bright idea. Taking out provisions, [NAME] went outside and began making a giant cake in the middle of the village square. A neighbor approached curiously. "Do you need chocolate eggs?" He brought a dozen. Another neighbor arrived with condensed milk. An old gentleman brought his last jellied strawberries.

In one afternoon, the cake was enormous — five tiers, covered in rainbow cream and edible confetti. When they all ate it together, something extraordinary happened: the powdered sugar began melting under their laughter.

That evening, the people of the Candy Kingdom understood that the sweetest things are the ones you share. And from that day on, every Sunday, they make a cake together — always more beautiful, always bigger.`,
  textEs: `En el País de los Dulces, donde los caminos eran de regaliz y las casas de pan de jengibre, [NAME] vivía en una cabaña de caramelo. Era un lugar maravilloso, pero había un problema: nadie compartía nunca nada. Cada uno guardaba sus dulces celosamente.

Un día, una tormenta de azúcar glas cubrió todo el país con una gruesa capa blanca y suave. Los árboles de chupachups desaparecieron. Los ríos de limonada se helaron. Y los habitantes, cada uno solo en su casa, se aburrían terriblemente.

Entonces [NAME] tuvo una idea brillante. Con sus provisiones, [NAME] salió y empezó a preparar un pastel gigante en medio de la plaza del pueblo. Un vecino se acercó con curiosidad. "¿Necesitas huevos de chocolate?" Trajo una docena. Otra vecina llegó con leche condensada. Un anciano trajo sus últimas fresas gelatinosas.

En una tarde, el pastel era enorme — cinco pisos, cubierto de crema arcoíris y confeti comestible. Cuando lo comieron todos juntos, algo extraordinario ocurrió: el azúcar glas empezó a derretirse bajo sus risas.

Esa noche, los habitantes del País de los Dulces comprendieron que las cosas más dulces son las que se comparten. Y desde ese día, cada domingo preparan un pastel juntos — siempre más hermoso, siempre más grande.`
},

// ─── ROYAUME MAGIQUE ─────────────────────────────────────────────────────────

{
  id: 'k1',
  universe: 'castle',
  theme: 'courage',
  titleFr: '[NAME] et le Dragon Endormi',
  titleEn: '[NAME] and the Sleeping Dragon',
  titleEs: '[NAME] y el Dragón Dormido',
  textFr: `Le Royaume de Crystalia était protégé depuis cent ans par une magie ancienne — mais cette magie s'était endormie dans le cœur d'un dragon de jade, au sommet de la Montagne Brume. Pour la réveiller, quelqu'un devait gravir la montagne et chanter la vieille chanson des premiers rois.

Tout le monde avait peur. La montagne était haute, le chemin dangereux, et le dragon — même endormi — était impressionnant. Mais [NAME] connaissait cette chanson. Sa grand-mère la lui avait chantée chaque soir. Et [NAME] savait que si personne ne montait, le royaume resterait sans magie pour toujours.

La montée dura trois jours. Le vent glacial tentait de faire reculer [NAME] à chaque pas. Des rochers glissants faillirent provoquer une chute. Des ombres étranges dansaient sur les parois. Mais [NAME] continuait, un pas après l'autre, la mélodie fredonnée dans le souffle.

Au sommet, le dragon de jade dormait, majestueux, couvert de mousse vert émeraude. [NAME] s'approcha tout doucement et, la voix tremblante d'émotion plus que de peur, chanta la vieille chanson.

Une note. Deux notes. Les écailles du dragon s'illuminèrent. Trois notes. Ses yeux s'ouvrirent, dorés et bienveillants. La magie coula depuis son cœur comme une rivière de lumière dorée qui descendit vers le royaume.

"Merci, petit courageux," dit le dragon d'une voix douce comme du miel chaud. "Tu as eu plus de courage que cent chevaliers."

[NAME] rentra au village sous une pluie d'étoiles dorées, sachant que le vrai courage ne rugit pas — il chante.`,
  textEn: `The Kingdom of Crystalia had been protected for a hundred years by ancient magic — but that magic had fallen asleep inside the heart of a jade dragon, at the top of Mist Mountain. To awaken it, someone had to climb the mountain and sing the old song of the first kings.

Everyone was afraid. The mountain was tall, the path dangerous, and the dragon — even asleep — was impressive. But [NAME] knew that song. Their grandmother had sung it every evening. And [NAME] knew that if nobody went, the kingdom would remain without magic forever.

The climb took three days. The icy wind tried to push [NAME] back at every step. Slippery rocks almost caused a fall. Strange shadows danced on the walls. But [NAME] kept going, step by step, the melody hummed in every breath.

At the summit, the jade dragon slept, majestic, covered in emerald-green moss. [NAME] approached very gently and, with a voice trembling more from emotion than fear, sang the old song.

One note. Two notes. The dragon's scales lit up. Three notes. His eyes opened, golden and kind. Magic poured from his heart like a river of golden light flowing down toward the kingdom.

"Thank you, little brave one," said the dragon in a voice as sweet as warm honey. "You had more courage than a hundred knights."

[NAME] returned to the village under a rain of golden stars, knowing that true courage doesn't roar — it sings.`,
  textEs: `El Reino de Crystalia había estado protegido durante cien años por una magia antigua — pero esa magia se había dormido en el corazón de un dragón de jade, en la cima de la Montaña Bruma. Para despertarla, alguien tenía que subir la montaña y cantar la vieja canción de los primeros reyes.

Todo el mundo tenía miedo. La montaña era alta, el camino peligroso, y el dragón — aunque dormido — imponía. Pero [NAME] conocía esa canción. Su abuela se la había cantado cada noche. Y [NAME] sabía que si nadie subía, el reino permanecería sin magia para siempre.

La subida duró tres días. El viento helado intentaba hacer retroceder a [NAME] a cada paso. Rocas resbaladizas casi provocaron una caída. Sombras extrañas bailaban en las paredes. Pero [NAME] seguía adelante, paso a paso, la melodía tarareada en cada aliento.

En la cima, el dragón de jade dormía, majestuoso, cubierto de musgo verde esmeralda. [NAME] se acercó muy suavemente y, con voz temblorosa más de emoción que de miedo, cantó la vieja canción.

Una nota. Dos notas. Las escamas del dragón se iluminaron. Tres notas. Sus ojos se abrieron, dorados y benévolos. La magia fluyó desde su corazón como un río de luz dorada que descendió hacia el reino.

"Gracias, pequeño valiente," dijo el dragón con una voz dulce como miel caliente. "Has tenido más valor que cien caballeros."

[NAME] regresó al pueblo bajo una lluvia de estrellas doradas, sabiendo que el verdadero valor no ruge — canta.`
},

// ─── JUNGLE ──────────────────────────────────────────────────────────────────

{
  id: 'j1',
  universe: 'jungle',
  theme: 'family',
  titleFr: '[NAME] et le Singe des Étoiles',
  titleEn: '[NAME] and the Star Monkey',
  titleEs: '[NAME] y el Mono de las Estrellas',
  textFr: `La jungle de Manapora était si dense que la lumière du soleil descendait en fines lignes dorées, comme des fils de lumière tissés entre les feuilles. [NAME] adorait cette jungle — chaque lianne, chaque fleur lui était familière. Mais ce matin-là, quelque chose d'inhabituel l'attendait.

Au pied du grand kapokier, un petit singe pleurait. Ses pleurs étaient si particuliers — pas des cris d'animal, mais quelque chose qui ressemblait à de la musique. [NAME] s'approcha. Le singe portait autour du cou un collier d'étoiles qui ne brillaient plus.

"Ma famille," dit le singe dans le langage des arbres que [NAME] comprenait depuis tout petit. "Mes frères et sœurs se sont perdus dans la Grande Tempête."

[NAME] prit la patte du singe dans sa main. "On va les retrouver."

Ils marchèrent toute la journée. [NAME] utilisait les signes de la jungle pour suivre les pistes — branches cassées, fleurs froissées, empreintes dans la boue rouge. Le singe suivait en serrant fort la main de [NAME] quand les ombres devenaient grandes.

Au coucher du soleil, derrière une cascade de lianes fleuries, cinq petits singes attendaient, pelotonnés ensemble. Quand le singe aux étoiles les vit, il bondit de joie. Et quelque chose d'étrange se produisit : les étoiles de son collier se remirent à briller, une par une.

"Une étoile pour chaque membre de la famille," expliqua-t-il à [NAME]. "Merci de m'avoir aidé à les retrouver."

[NAME] rentra chez lui dans le soir qui tombait, pensant à sa propre famille et sachant que les liens qui nous unissent brillent toujours, même dans les nuits les plus sombres.`,
  textEn: `The jungle of Manapora was so dense that sunlight came down in thin golden lines, like threads of light woven between the leaves. [NAME] loved this jungle — every vine, every flower was familiar. But this particular morning, something unusual was waiting.

At the foot of the great kapok tree, a little monkey was crying. His cries were so unusual — not animal sounds, but something that resembled music. [NAME] approached. The monkey wore around his neck a collar of stars that had gone dark.

"My family," said the monkey in the language of the trees that [NAME] had understood since childhood. "My brothers and sisters got lost in the Great Storm."

[NAME] took the monkey's paw in hand. "We'll find them."

They walked all day. [NAME] used the signs of the jungle to follow the trail — broken branches, crushed flowers, prints in the red mud. The monkey held tight to [NAME]'s hand when the shadows grew large.

At sunset, behind a waterfall of flowering vines, five little monkeys waited, huddled together. When the star monkey saw them, he leaped with joy. And something strange happened: the stars on his collar began to glow again, one by one.

"One star for each family member," he explained to [NAME]. "Thank you for helping me find them."

[NAME] walked home in the falling evening, thinking of their own family and knowing that the bonds that connect us always shine, even in the darkest nights.`,
  textEs: `La selva de Manapora era tan densa que la luz del sol bajaba en finas líneas doradas, como hilos de luz tejidos entre las hojas. A [NAME] le encantaba esta selva — cada liana, cada flor le era familiar. Pero esa mañana, algo inusual le esperaba.

Al pie del gran árbol kapok, un pequeño mono lloraba. Sus llantos eran tan peculiares — no sonidos de animal, sino algo que se parecía a la música. [NAME] se acercó. El mono llevaba alrededor del cuello un collar de estrellas que ya no brillaban.

"Mi familia," dijo el mono en el lenguaje de los árboles que [NAME] entendía desde pequeño. "Mis hermanos y hermanas se perdieron en la Gran Tormenta."

[NAME] tomó la patita del mono en su mano. "Los encontraremos."

Caminaron todo el día. [NAME] usaba las señales de la selva para seguir el rastro — ramas rotas, flores aplastadas, huellas en el barro rojo. El mono apretaba fuerte la mano de [NAME] cuando las sombras se hacían grandes.

Al atardecer, detrás de una cascada de lianas floridas, cinco pequeños monos esperaban, acurrucados juntos. Cuando el mono de las estrellas los vio, saltó de alegría. Y algo extraño ocurrió: las estrellas de su collar empezaron a brillar de nuevo, una a una.

"Una estrella por cada miembro de la familia," le explicó a [NAME]. "Gracias por ayudarme a encontrarlos."

[NAME] volvió a casa en el anochecer, pensando en su propia familia y sabiendo que los lazos que nos unen siempre brillan, incluso en las noches más oscuras.`
},

// ─── DINOSAURES ──────────────────────────────────────────────────────────────

{
  id: 'd1',
  universe: 'dino',
  theme: 'kindness',
  titleFr: '[NAME] et le Bébé Diplodocus',
  titleEn: '[NAME] and the Baby Diplodocus',
  titleEs: '[NAME] y el Bebé Diplodocus',
  textFr: `Il y a très, très longtemps — ou peut-être dans un rêve très vivide — [NAME] se réveilla dans une vallée verte et lumineuse où des dinosaures géants broutaient paisiblement sous des palmiers géants. [NAME] n'avait pas peur, car les dinosaures de cette vallée avaient des yeux doux comme ceux des vaches.

Mais quelque chose n'allait pas. Près d'un lac de saphir, un bébé diplodocus pleurait à chaudes larmes. Son long cou s'étendait vers les feuilles hautes des arbres, mais ses pattes glissaient sur la rive boueuse. Trop petit pour atteindre la nourriture. Trop lourd pour se redresser seul.

[NAME] réfléchit. Le bébé avait besoin de nourriture, mais les feuilles étaient à des mètres de hauteur. [NAME] grimpa alors sur une grosse pierre plate, puis sur une branche, et commença à cueillir des feuilles larges et juteuses, les faisant tomber une à une vers le bébé.

Le diplodocus les mangea avec des "mmmm" qui ressemblaient à des clochettes. Puis, rassasié, il posa doucement sa tête immense près de [NAME] et ferma les yeux de satisfaction. Sa peau verte et douce se souleva et s'abaissa au rythme de sa respiration.

[NAME] resta là un long moment, la main posée sur le museau chaud du dinosaure. Parfois la gentillesse ne fait pas de bruit. Parfois, elle ressemble juste à deux êtres — si différents — assis ensemble sous un palmier géant, en paix.`,
  textEn: `Long, long ago — or perhaps in a very vivid dream — [NAME] woke up in a bright green valley where giant dinosaurs grazed peacefully under enormous palm trees. [NAME] wasn't afraid, for the dinosaurs of this valley had eyes as soft as a cow's.

But something was wrong. Near a sapphire lake, a baby diplodocus was crying its heart out. Its long neck stretched toward the tall treetop leaves, but its legs kept slipping in the muddy bank. Too small to reach the food. Too heavy to get up alone.

[NAME] thought carefully. The baby needed food, but the leaves were meters high. So [NAME] climbed a big flat stone, then a branch, and began picking wide juicy leaves, dropping them one by one toward the baby.

The diplodocus ate them with happy "mmmm" sounds like little bells. Then, satisfied, it gently laid its enormous head near [NAME] and closed its eyes in contentment. Its soft green skin rose and fell with each breath.

[NAME] stayed there a long while, hand resting on the dinosaur's warm nose. Sometimes kindness makes no sound. Sometimes it simply looks like two beings — so different — sitting together under a giant palm tree, at peace.`,
  textEs: `Hace mucho, mucho tiempo — o quizás en un sueño muy vívido — [NAME] se despertó en un valle verde y luminoso donde dinosaurios gigantes pastaban tranquilamente bajo palmeras inmensas. [NAME] no tenía miedo, pues los dinosaurios de ese valle tenían ojos tan suaves como los de las vacas.

Pero algo iba mal. Cerca de un lago de zafiro, un bebé diplodocus lloraba a lágrima viva. Su largo cuello se extendía hacia las hojas altas de los árboles, pero sus patas resbalaban en la orilla fangosa. Demasiado pequeño para alcanzar la comida. Demasiado pesado para levantarse solo.

[NAME] reflexionó. El bebé necesitaba comida, pero las hojas estaban a metros de altura. Entonces [NAME] trepó a una gran piedra plana, luego a una rama, y empezó a recoger hojas grandes y jugosas, dejándolas caer una a una hacia el bebé.

El diplodocus las comió con "mmmm" que sonaban como campanitas. Luego, saciado, posó suavemente su enorme cabeza cerca de [NAME] y cerró los ojos satisfecho. Su piel verde y suave subía y bajaba al ritmo de su respiración.

[NAME] se quedó allí un largo rato, la mano apoyada en el morro cálido del dinosaurio. A veces la bondad no hace ruido. A veces simplemente parece dos seres — tan diferentes — sentados juntos bajo una palmera gigante, en paz.`
},

// ─── NUAGES ──────────────────────────────────────────────────────────────────

{
  id: 'cl1',
  universe: 'clouds',
  theme: 'adventure',
  titleFr: '[NAME] et la Cité des Nuages Dorés',
  titleEn: '[NAME] and the City of Golden Clouds',
  titleEs: '[NAME] y la Ciudad de las Nubes Doradas',
  textFr: `Par une matinée brumeuse, [NAME] découvrit dans le grenier une vieille paire de chaussures rouges aux semelles couvertes de symboles dorés. En les enfilant, [NAME] se retrouva aussitôt soulevé du sol, flottant, flottant — de plus en plus haut.

Au-dessus des nuages blancs et ouateux s'étendait une cité entière faite de nuages dorés. Des maisons moelleuses comme des oreillers. Des ponts de vapeur arc-en-ciel. Des oiseaux de lumière qui chantaient en passant.

Une vieille dame-nuage accueillit [NAME] avec un sourire qui ressemblait à un coucher de soleil. "Bienvenue dans la Cité des Nuages Dorés. Nous t'attendions."

"M'attendiez ?" s'étonna [NAME].

"Chaque enfant courageux trouve les chaussures rouges un jour ou l'autre," dit-elle en lui tendant une tasse de chocolat chaud en forme de nuage. "Et chaque enfant qui vient ici a une mission."

La mission de [NAME] : retrouver l'Étoile du Matin, perdue dans les replis d'un nuage oublié, et la remettre à sa place dans le ciel pour que les marins puissent naviguer.

L'aventure fut époustouflante — des vents tourbillonnants, des nuages-labyrinthes, un aigle géant qui donna un coup de main. Et à la fin, quand l'Étoile du Matin reprit sa place et illumina l'horizon, [NAME] comprit que les plus belles aventures commencent souvent dans un vieux grenier, avec une paire de chaussures poussiéreuses.`,
  textEn: `On a misty morning, [NAME] discovered in the attic an old pair of red shoes with soles covered in golden symbols. When [NAME] slipped them on, they were instantly lifted from the ground, floating, floating — higher and higher.

Above the soft white clouds stretched an entire city made of golden clouds. Houses as soft as pillows. Bridges of rainbow mist. Birds of light singing as they passed.

An old cloud-lady welcomed [NAME] with a smile like a sunset. "Welcome to the City of Golden Clouds. We've been expecting you."

"Expecting me?" [NAME] marveled.

"Every brave child finds the red shoes sooner or later," she said, handing over a cloud-shaped cup of hot chocolate. "And every child who comes here has a mission."

[NAME]'s mission: find the Morning Star, lost in the folds of a forgotten cloud, and restore it to its place in the sky so that sailors could navigate.

The adventure was breathtaking — swirling winds, cloud-mazes, a giant eagle who lent a hand. And at the end, when the Morning Star took back its place and lit up the horizon, [NAME] understood that the most beautiful adventures often begin in an old attic, with a dusty pair of shoes.`,
  textEs: `En una mañana brumosa, [NAME] descubrió en el desván un viejo par de zapatos rojos con suelas cubiertas de símbolos dorados. Al ponérselos, [NAME] se vio al instante levantado del suelo, flotando, flotando — cada vez más alto.

Por encima de las nubes blancas y esponjosas se extendía toda una ciudad hecha de nubes doradas. Casas suaves como almohadas. Puentes de vapor arcoíris. Pájaros de luz que cantaban al pasar.

Una anciana-nube recibió a [NAME] con una sonrisa que parecía un atardecer. "Bienvenido a la Ciudad de las Nubes Doradas. Te estábamos esperando."

"¿Me esperaban?" se asombró [NAME].

"Cada niño valiente encuentra los zapatos rojos tarde o temprano," dijo ella, tendiéndole una taza de chocolate caliente en forma de nube. "Y cada niño que viene aquí tiene una misión."

La misión de [NAME]: encontrar la Estrella de la Mañana, perdida en los pliegues de una nube olvidada, y devolverla a su lugar en el cielo para que los marineros pudieran navegar.

La aventura fue apasionante — vientos arremolinados, nubes-laberintos, un águila gigante que echó una mano. Y al final, cuando la Estrella de la Mañana recuperó su lugar e iluminó el horizonte, [NAME] comprendió que las aventuras más hermosas a menudo comienzan en un viejo desván, con un par de zapatos polvorientos.`
},

// ─── PAYS DES GLACES ─────────────────────────────────────────────────────────

{
  id: 'i1',
  universe: 'ice',
  theme: 'perseverance',
  titleFr: '[NAME] et le Phare de Glace',
  titleEn: '[NAME] and the Ice Lighthouse',
  titleEs: '[NAME] y el Faro de Hielo',
  textFr: `Le Grand Nord était un monde de silence et de beauté cristalline. [NAME] vivait dans un petit village où les maisons étaient taillées dans la glace bleue et les routes étaient des rivières gelées. En hiver — qui durait huit mois — les habitants se guidaient grâce au Phare de Glace, une tour immense qui projetait une lumière rose dans le ciel.

Mais cette nuit-là, la lumière du phare s'éteignit. Un blizzard arrivait, et sans la lumière, les bateaux des pêcheurs rentrant de la mer ne retrouveraient pas leur chemin.

[NAME] savait ce qu'il fallait faire. Armé d'une lampe à huile de baleine et de son manteau de fourrure, [NAME] s'élança dans le blizzard. Le vent hurlait. La neige brûlait les joues. À chaque pas, [NAME] s'enfonçait jusqu'aux genoux.

Plusieurs fois, [NAME] faillit rebrousser chemin. Mais chaque fois, la pensée des pêcheurs perdus en mer donnait des forces nouvelles. Un pas. Encore un. Le phare était là, invisible dans la tempête, mais [NAME] le connaissait par cœur.

Après une heure de marche dans l'obscurité absolue, [NAME] atteignit la base du phare. En montant les marches spiralées, [NAME] alluma la mèche de la grande lampe. Une lumière rose explosa dans le ciel, visible à cinquante kilomètres.

Le lendemain matin, tous les pêcheurs étaient rentrés sains et saufs. Et [NAME] dormait dans les bras de ses parents, épuisé mais heureux, sachant que les tempêtes les plus dures sont celles qu'on traverse pour les autres.`,
  textEn: `The Far North was a world of silence and crystalline beauty. [NAME] lived in a small village where houses were carved from blue ice and roads were frozen rivers. In winter — which lasted eight months — the villagers guided themselves by the Ice Lighthouse, a massive tower that cast a pink light across the sky.

But that night, the lighthouse went dark. A blizzard was coming, and without the light, the fishermen's boats returning from the sea would lose their way.

[NAME] knew what had to be done. Armed with a whale-oil lamp and a fur coat, [NAME] rushed out into the blizzard. The wind howled. The snow burned their cheeks. Every step sank them knee-deep.

Several times, [NAME] almost turned back. But each time, the thought of the fishermen lost at sea brought new strength. One step. Another. The lighthouse was out there, invisible in the storm, but [NAME] knew it by heart.

After an hour of walking in absolute darkness, [NAME] reached the base of the lighthouse. Climbing the spiral stairs, [NAME] lit the great lamp's wick. A pink light exploded across the sky, visible for fifty kilometers.

The next morning, all the fishermen were home safe. And [NAME] slept in their parents' arms, exhausted but happy, knowing that the hardest storms are the ones you brave for others.`,
  textEs: `El Gran Norte era un mundo de silencio y belleza cristalina. [NAME] vivía en un pequeño pueblo donde las casas estaban talladas en hielo azul y los caminos eran ríos congelados. En invierno — que duraba ocho meses — los habitantes se guiaban gracias al Faro de Hielo, una torre inmensa que proyectaba una luz rosa en el cielo.

Pero esa noche, la luz del faro se apagó. Se aproximaba una tormenta de nieve, y sin la luz, los barcos de los pescadores que regresaban del mar no encontrarían el camino.

[NAME] sabía lo que había que hacer. Armado con una lámpara de aceite de ballena y su abrigo de piel, [NAME] se lanzó al ventisquero. El viento aullaba. La nieve quemaba las mejillas. A cada paso, [NAME] se hundía hasta las rodillas.

Varias veces, [NAME] estuvo a punto de dar media vuelta. Pero cada vez, el pensamiento de los pescadores perdidos en el mar daba fuerzas nuevas. Un paso. Otro más. El faro estaba allí, invisible en la tormenta, pero [NAME] lo conocía de memoria.

Tras una hora de camino en la oscuridad absoluta, [NAME] llegó a la base del faro. Subiendo los escalones en espiral, [NAME] encendió la mecha de la gran lámpara. Una luz rosa estalló en el cielo, visible a cincuenta kilómetros.

A la mañana siguiente, todos los pescadores habían regresado sanos y salvos. Y [NAME] dormía en los brazos de sus padres, agotado pero feliz, sabiendo que las tormentas más duras son las que se atraviesan por los demás.`
},

// ─── ROBOTS ──────────────────────────────────────────────────────────────────

{
  id: 'r1',
  universe: 'robots',
  theme: 'friendship',
  titleFr: '[NAME] et la Cité des Robots Tristes',
  titleEn: '[NAME] and the City of Sad Robots',
  titleEs: '[NAME] y la Ciudad de los Robots Tristes',
  textFr: `La Cité Mécanique était une ville extraordinaire : des gratte-ciel en acier poli, des tramways à vapeur dorée, des fontaines qui crachaient des étincelles au lieu d'eau. Mais [NAME] remarqua quelque chose d'étrange : tous les robots qui vivaient là avaient les yeux éteints, bleu-gris comme un ciel de pluie.

"Pourquoi êtes-vous si tristes ?" demanda [NAME] à un robot qui ramassait des boulons par terre.

Le robot leva des yeux ternes. "Il y a longtemps, nous savions rire. Mais le Rire s'est cassé un jour et personne ne sait le réparer."

[NAME] apprit que le Grand Rieur — l'immense carillon au centre de la ville qui faisait rire les robots — avait une cloche fêlée. Les mécaniciens avaient tout essayé : nouvelles vis, nouveaux ressorts, nouveau métal. Rien.

[NAME] réfléchit. Et si le problème n'était pas mécanique ? [NAME] grimpa jusqu'au carillon, s'assit à côté de la cloche fêlée, et commença à lui raconter des blagues. Des histoires drôles. Des devinettes. La cloche ne rit pas tout de suite. Mais [NAME] continua.

À la septième blague, quelque chose de miraculeux se produisit : la fêlure se referma, une petite note cristalline jaillit, puis une autre, puis une cascade de notes joyeuses se répandit sur toute la ville.

Les robots levèrent la tête. Leurs yeux passèrent du gris au jaune vif — la couleur du bonheur. Ils riaient ! "Comment as-tu fait ?" demandèrent-ils.

"J'ai simplement été là," dit [NAME]. "Parfois, ce dont les cœurs blessés ont besoin, c'est juste de la compagnie."`,
  textEn: `Mechanical City was an extraordinary place: skyscrapers of polished steel, golden steam trams, fountains that sprayed sparks instead of water. But [NAME] noticed something strange: all the robots who lived there had dull eyes, blue-gray like a rainy sky.

"Why are you all so sad?" asked [NAME] to a robot picking up bolts from the ground.

The robot lifted dull eyes. "Long ago, we knew how to laugh. But the Laughter broke one day and nobody knows how to fix it."

[NAME] learned that the Grand Laugher — the enormous carillon at the city center that made the robots laugh — had a cracked bell. Mechanics had tried everything: new screws, new springs, new metal. Nothing worked.

[NAME] thought carefully. What if the problem wasn't mechanical? [NAME] climbed up to the carillon, sat beside the cracked bell, and started telling it jokes. Funny stories. Riddles. The bell didn't laugh right away. But [NAME] kept going.

On the seventh joke, something miraculous happened: the crack sealed itself, one small crystalline note rang out, then another, then a cascade of joyful notes spread across the whole city.

The robots looked up. Their eyes shifted from gray to bright yellow — the color of happiness. They were laughing! "How did you do it?" they asked.

"I simply stayed," said [NAME]. "Sometimes, what wounded hearts need is just company."`,
  textEs: `La Ciudad Mecánica era un lugar extraordinario: rascacielos de acero pulido, tranvías de vapor dorado, fuentes que lanzaban chispas en vez de agua. Pero [NAME] notó algo extraño: todos los robots que vivían allí tenían los ojos apagados, gris-azulados como un cielo lluvioso.

"¿Por qué estáis tan tristes?" preguntó [NAME] a un robot que recogía tuercas del suelo.

El robot levantó ojos sin brillo. "Hace tiempo, sabíamos reír. Pero la Risa se rompió un día y nadie sabe arreglarla."

[NAME] supo que el Gran Reidor — el inmenso carillón en el centro de la ciudad que hacía reír a los robots — tenía una campana agrietada. Los mecánicos lo habían intentado todo: nuevos tornillos, nuevos resortes, nuevo metal. Nada.

[NAME] reflexionó. ¿Y si el problema no era mecánico? [NAME] trepó hasta el carillón, se sentó junto a la campana agrietada y empezó a contarle chistes. Historias divertidas. Adivinanzas. La campana no se rió enseguida. Pero [NAME] continuó.

En el séptimo chiste, algo milagroso ocurrió: la grieta se cerró, una pequeña nota cristalina resonó, luego otra, luego una cascada de notas alegres se extendió por toda la ciudad.

Los robots levantaron la vista. Sus ojos pasaron del gris al amarillo brillante — el color de la felicidad. ¡Se reían! "¿Cómo lo has hecho?" preguntaron.

"Simplemente estuve aquí," dijo [NAME]. "A veces, lo que necesitan los corazones heridos es solo compañía."`
},

// ─── FÉES ────────────────────────────────────────────────────────────────────

{
  id: 'fa1',
  universe: 'fairies',
  theme: 'honesty',
  titleFr: '[NAME] et la Fée de la Vérité',
  titleEn: '[NAME] and the Truth Fairy',
  titleEs: '[NAME] y el Hada de la Verdad',
  textFr: `Le Village des Fées était construit dans les branches d'un chêne millénaire, et ses lanternes dorées brillaient comme des lucioles géantes dans la nuit. [NAME] arriva là par accident — en suivant un papillon de lumière — et fut accueilli avec surprise, car les humains ne venaient que très rarement.

La reine des fées, une petite créature aux ailes de saphir, regarda [NAME] gravement. "Je dois te prévenir : dans ce village, chaque mensonge se voit immédiatement. Les fleurs se ferment, les lanternes s'éteignent, et les ailes perdent leurs couleurs."

[NAME] hésita. Il y avait quelque chose que [NAME] n'avait pas dit à ses parents — une petite chose qui pesait depuis des jours. Une erreur commise, pas avouée.

Cette nuit-là, [NAME] s'allongea sous les branches du chêne et ne put dormir. Les fleurs autour se fermaient une à une, et les lanternes vacillaient. La reine des fées s'approcha doucement.

"La vérité fait peur avant d'être dite," murmura-t-elle. "Après, elle est légère comme une plume."

Au matin, [NAME] rentra chez lui. Et avant même de poser son sac, [NAME] trouva ses parents et dit la vérité — toute la vérité, clairement et courageusement. Les parents ne se mirent pas en colère. Ils prirent [NAME] dans leurs bras, soulagés de la confiance qu'on leur offrait.

Ce soir-là, en regardant par la fenêtre, [NAME] crut voir au loin une toute petite lumière dorée clignoter trois fois. Les fées avaient vu. Et elles applaudissaient.`,
  textEn: `The Fairy Village was built in the branches of a thousand-year-old oak tree, and its golden lanterns shone like giant fireflies in the night. [NAME] arrived there by accident — following a butterfly of light — and was welcomed with surprise, for humans came very rarely.

The fairy queen, a tiny creature with sapphire wings, looked at [NAME] gravely. "I must warn you: in this village, every lie shows immediately. Flowers close, lanterns go out, and wings lose their color."

[NAME] hesitated. There was something [NAME] hadn't told their parents — a small thing that had been weighing on them for days. A mistake made, not confessed.

That night, [NAME] lay under the oak branches and couldn't sleep. The flowers around were closing one by one, and the lanterns flickered. The fairy queen approached gently.

"The truth is frightening before it's spoken," she whispered. "Afterwards, it's as light as a feather."

In the morning, [NAME] went home. And before even putting down their bag, [NAME] found their parents and told the truth — all of it, clearly and bravely. The parents didn't get angry. They took [NAME] in their arms, relieved by the trust they were being given.

That evening, looking out the window, [NAME] thought they saw a tiny golden light blinking three times in the distance. The fairies had seen. And they were clapping.`,
  textEs: `El Pueblo de las Hadas estaba construido en las ramas de un roble milenario, y sus linternas doradas brillaban como luciérnagas gigantes en la noche. [NAME] llegó allí por accidente — siguiendo una mariposa de luz — y fue recibido con sorpresa, pues los humanos venían muy raramente.

La reina de las hadas, una pequeña criatura con alas de zafiro, miró a [NAME] con seriedad. "Debo advertirte: en este pueblo, cada mentira se ve inmediatamente. Las flores se cierran, las linternas se apagan, y las alas pierden sus colores."

[NAME] dudó. Había algo que [NAME] no había dicho a sus padres — una pequeña cosa que pesaba desde hacía días. Un error cometido, no confesado.

Esa noche, [NAME] se tumbó bajo las ramas del roble y no pudo dormir. Las flores de alrededor se iban cerrando una a una, y las linternas parpadeaban. La reina de las hadas se acercó suavemente.

"La verdad da miedo antes de ser dicha," susurró. "Después, es ligera como una pluma."

Por la mañana, [NAME] volvió a casa. Y antes siquiera de dejar la mochila, [NAME] encontró a sus padres y dijo la verdad — toda la verdad, clara y valientemente. Los padres no se enfadaron. Tomaron a [NAME] en sus brazos, aliviados por la confianza que se les ofrecía.

Esa noche, mirando por la ventana, [NAME] creyó ver a lo lejos una pequeña luz dorada parpadeando tres veces. Las hadas lo habían visto. Y aplaudían.`
},

// ─── PIRATES ─────────────────────────────────────────────────────────────────

{
  id: 'p1',
  universe: 'pirates',
  theme: 'sharing',
  titleFr: '[NAME] et le Trésor des Pirates Gentils',
  titleEn: '[NAME] and the Treasure of the Kind Pirates',
  titleEs: '[NAME] y el Tesoro de los Piratas Amables',
  textFr: `L'Île Dorée sentait le sel, la mangue et l'aventure. [NAME] y débarqua un matin après une tempête qui avait emporté son bateau jusqu'à cette île mystérieuse. Sur la plage, un groupe de pirates patientait — mais ces pirates-là portaient des chapeaux ornés de fleurs et des épées en bois peint.

"Bienvenue !" dit le capitaine, une femme imposante avec une perruche bleue sur l'épaule. "Nous sommes les Pirates de la Générosité. Nous collectons les trésors du monde, mais pas pour les garder — pour les partager."

[NAME] fut intrigué. Les pirates guidèrent [NAME] jusqu'à leur grotte, remplie de coffres ouverts. Chaque coffre portait une étiquette : "Pour les enfants malades", "Pour reconstruire le village du Nord", "Pour les animaux blessés".

"Mais comment financez-vous votre bateau ?" demanda [NAME].

"En donnant, il nous revient toujours plus," dit la capitaine en souriant. "C'est la règle de l'Île Dorée."

Ce soir-là, autour d'un feu de camp, [NAME] mangea du poisson grillé et des fruits tropicaux avec les pirates les plus étranges et les plus merveilleux du monde. Et quand le bateau de secours vint récupérer [NAME], il emportait dans sa poche une petite pièce d'or — pas pour la garder, mais pour la donner au premier qui en aurait besoin.`,
  textEn: `Golden Island smelled of salt, mango, and adventure. [NAME] washed ashore one morning after a storm had carried their boat to this mysterious island. On the beach, a group of pirates waited — but these pirates wore flower-decorated hats and painted wooden swords.

"Welcome!" said the captain, a tall woman with a blue parrot on her shoulder. "We are the Pirates of Generosity. We collect the world's treasures — but not to keep them. To share them."

[NAME] was intrigued. The pirates led [NAME] to their cave, filled with open chests. Each chest bore a label: "For sick children," "To rebuild the Northern Village," "For injured animals."

"But how do you fund your ship?" asked [NAME].

"By giving, it always comes back to us more," said the captain with a smile. "That's the rule of Golden Island."

That evening, around a campfire, [NAME] ate grilled fish and tropical fruits with the strangest and most wonderful pirates in the world. And when the rescue boat came to take [NAME] home, they carried in their pocket a small gold coin — not to keep, but to give to the first person who needed it.`,
  textEs: `La Isla Dorada olía a sal, mango y aventura. [NAME] llegó a la orilla una mañana después de que una tormenta llevara su barco hasta esta isla misteriosa. En la playa, un grupo de piratas esperaba — pero estos piratas llevaban sombreros adornados con flores y espadas de madera pintada.

"¡Bienvenido!" dijo la capitana, una mujer imponente con un loro azul en el hombro. "Somos los Piratas de la Generosidad. Coleccionamos los tesoros del mundo, pero no para guardarlos — para compartirlos."

[NAME] quedó intrigado. Los piratas guiaron a [NAME] hasta su cueva, llena de cofres abiertos. Cada cofre llevaba una etiqueta: "Para niños enfermos", "Para reconstruir el pueblo del Norte", "Para animales heridos".

"¿Pero cómo financiáis vuestro barco?" preguntó [NAME].

"Dando, siempre nos vuelve más," dijo la capitana sonriendo. "Esa es la regla de la Isla Dorada."

Esa noche, alrededor de una hoguera, [NAME] comió pescado a la brasa y frutas tropicales con los piratas más extraños y maravillosos del mundo. Y cuando el barco de rescate vino a buscar a [NAME], llevaba en el bolsillo una pequeña moneda de oro — no para guardarla, sino para dársela al primero que la necesitara.`
},

// ─── DÉSERT ──────────────────────────────────────────────────────────────────

{
  id: 'de1',
  universe: 'desert',
  theme: 'courage',
  titleFr: '[NAME] et le Génie du Désert',
  titleEn: '[NAME] and the Desert Genie',
  titleEs: '[NAME] y el Genio del Desierto',
  textFr: `Le désert de Zahara n'était pas fait de sable ordinaire. Ses grains brillaient comme de l'or sous le soleil, et la nuit, il émettait des sons — des murmures anciens que seuls les cœurs courageux pouvaient entendre. [NAME] l'entendait depuis tout petit.

Un soir de pleine lune, [NAME] suivit les murmures jusqu'à une dune en forme de croissant. Au creux de la dune, une vieille lampe de bronze était enterrée à moitié. [NAME] la sortit et la frotta — pas par curiosité, mais parce qu'elle semblait avoir besoin d'être nettoyée.

Une fumée dorée s'en échappa. Un génie immense apparut, mais pas le genre féroce des histoires. Celui-là était vieux, fatigué, avec une longue barbe de nuages blancs et des yeux comme des couchers de soleil.

"Tu as frotté ma lampe," dit-il. "Mais tu n'as pas l'air d'avoir de vœu à faire."

"Non," dit [NAME] honnêtement. "Je voulais juste que tu ne sois plus enterré."

Le génie prit un long moment de silence. "Personne ne m'avait encore libéré par gentillesse. Toujours par cupidité." Il regarda [NAME] avec des yeux brillants. "Alors c'est moi qui vais exaucer ton vœu le plus secret, celui que tu n'as jamais osé dire tout haut."

Et le génie l'exauça. [NAME] ne dirait jamais à personne ce que c'était — mais en rentrant à la maison ce soir-là, [NAME] marchait plus léger, le cœur plein d'une chaleur douce comme le sable doré du désert de Zahara.`,
  textEn: `The desert of Zahara wasn't made of ordinary sand. Its grains sparkled like gold in the sun, and at night it made sounds — ancient whispers that only brave hearts could hear. [NAME] had heard them since childhood.

One full-moon evening, [NAME] followed the whispers to a crescent-shaped dune. In the hollow of the dune, an old bronze lamp was half-buried. [NAME] pulled it out and rubbed it — not out of curiosity, but because it seemed to need cleaning.

Golden smoke billowed out. A giant genie appeared — but not the fearsome kind from stories. This one was old, tired, with a long beard of white clouds and eyes like sunsets.

"You rubbed my lamp," he said. "But you don't seem to have a wish to make."

"No," said [NAME] honestly. "I just didn't want you to be buried anymore."

The genie went quiet for a long moment. "Nobody has ever freed me out of kindness. Always out of greed." He looked at [NAME] with shining eyes. "Then I shall grant your most secret wish — the one you've never dared say aloud."

And he granted it. [NAME] would never tell anyone what it was — but walking home that evening, [NAME]'s steps were lighter, heart full of a warmth as gentle as the golden sand of the Zahara desert.`,
  textEs: `El desierto de Zahara no estaba hecho de arena ordinaria. Sus granos brillaban como oro bajo el sol, y de noche emitía sonidos — susurros antiguos que solo los corazones valientes podían escuchar. [NAME] los oía desde pequeño.

Una noche de luna llena, [NAME] siguió los susurros hasta una duna en forma de media luna. En el hueco de la duna, una vieja lámpara de bronce estaba medio enterrada. [NAME] la sacó y la frotó — no por curiosidad, sino porque parecía necesitar ser limpiada.

Una humareda dorada brotó de ella. Apareció un genio enorme, pero no del tipo feroz de los cuentos. Este era viejo, cansado, con una larga barba de nubes blancas y ojos como atardeceres.

"Has frotado mi lámpara," dijo. "Pero no pareces tener ningún deseo que pedir."

"No," dijo [NAME] honestamente. "Solo quería que no siguieras enterrado."

El genio guardó un largo silencio. "Nadie me había liberado nunca por bondad. Siempre por codicia." Miró a [NAME] con ojos brillantes. "Entonces seré yo quien conceda tu deseo más secreto, el que nunca te has atrevido a decir en voz alta."

Y lo concedió. [NAME] nunca le diría a nadie qué era — pero al volver a casa esa noche, [NAME] caminaba más ligero, con el corazón lleno de un calor suave como la arena dorada del desierto de Zahara.`
},

// ─── BAMBOU ──────────────────────────────────────────────────────────────────

{
  id: 'b1',
  universe: 'bamboo',
  theme: 'perseverance',
  titleFr: '[NAME] et le Panda Sage',
  titleEn: '[NAME] and the Wise Panda',
  titleEs: '[NAME] y el Panda Sabio',
  textFr: `Dans la forêt de bambous de Binhuo, les tiges montaient si haut qu'elles disparaissaient dans les nuages. [NAME] cherchait le Panda Sage — le plus vieux panda du monde, qui vivait au sommet de la colline des Quatre Vents. On disait qu'il connaissait la réponse à toutes les questions.

Le chemin était semé d'embûches. D'abord un pont de bambous cassés — [NAME] le répara patiemment, une tige à la fois. Puis une pente si raide que les pieds glissaient — [NAME] s'agrippa aux tiges et monta centimètre par centimètre. Enfin, un brouillard si épais qu'on ne voyait pas à deux pas — [NAME] s'arrêta, ferma les yeux, et avança au son du vent.

Au sommet, assis sur un tapis de feuilles, un vieux panda mangeait du bambou tranquillement. "Ah, te voilà," dit-il sans lever les yeux. "Tu as mis longtemps."

"Le chemin était difficile," dit [NAME].

"C'est bien," dit le panda. "Les réponses importantes ne se méritent qu'après un chemin difficile. Quelle est ta question ?"

[NAME] hésita, puis demanda : "Comment réussir quelque chose de vraiment important ?"

Le panda mâcha pensivement son bambou. Puis il en tendit un brin à [NAME]. "Mange ça."

[NAME] mordit dans le bambou vert et frais. C'était simple. Doux. Nourrissant.

"Le bambou pousse un centimètre à la fois," dit le panda. "Mais après cinq ans, il monte en quelques semaines jusqu'au ciel. La persévérance silencieuse, c'est ça le secret."`,
  textEn: `In the bamboo forest of Binhuo, the stalks rose so high they disappeared into the clouds. [NAME] was looking for the Wise Panda — the oldest panda in the world, who lived at the top of the Hill of Four Winds. They said he knew the answer to every question.

The path was full of obstacles. First, a broken bamboo bridge — [NAME] repaired it patiently, one stalk at a time. Then a slope so steep that feet kept slipping — [NAME] gripped the stalks and climbed centimeter by centimeter. Finally, a fog so thick you couldn't see two steps ahead — [NAME] stopped, closed their eyes, and moved forward by the sound of the wind.

At the summit, sitting on a mat of leaves, an old panda was quietly eating bamboo. "Ah, there you are," he said without looking up. "You took your time."

"The path was difficult," said [NAME].

"Good," said the panda. "Important answers can only be earned after a hard journey. What is your question?"

[NAME] hesitated, then asked: "How do you achieve something truly important?"

The panda thoughtfully chewed his bamboo. Then he handed a sprig to [NAME]. "Eat this."

[NAME] bit into the fresh green bamboo. It was simple. Gentle. Nourishing.

"Bamboo grows one centimeter at a time," said the panda. "But after five years, it shoots up to the sky in just a few weeks. Silent perseverance — that is the secret."`,
  textEs: `En el bosque de bambú de Binhuo, los tallos subían tan alto que desaparecían entre las nubes. [NAME] buscaba al Panda Sabio — el panda más viejo del mundo, que vivía en lo alto de la Colina de los Cuatro Vientos. Se decía que conocía la respuesta a todas las preguntas.

El camino estaba lleno de obstáculos. Primero un puente de bambús rotos — [NAME] lo reparó pacientemente, un tallo a la vez. Luego una pendiente tan empinada que los pies resbalaban — [NAME] se agarró a los tallos y subió centímetro a centímetro. Finalmente, una niebla tan densa que no se veía a dos pasos — [NAME] se detuvo, cerró los ojos, y avanzó guiándose por el sonido del viento.

En la cima, sentado sobre una alfombra de hojas, un viejo panda comía bambú tranquilamente. "Ah, ya estás aquí," dijo sin levantar los ojos. "Has tardado."

"El camino era difícil," dijo [NAME].

"Bien," dijo el panda. "Las respuestas importantes solo se merecen tras un camino difícil. ¿Cuál es tu pregunta?"

[NAME] dudó, luego preguntó: "¿Cómo se logra algo verdaderamente importante?"

El panda masticó pensativamente su bambú. Luego le tendió un tallo a [NAME]. "Come esto."

[NAME] mordió el bambú verde y fresco. Era simple. Suave. Nutritivo.

"El bambú crece un centímetro a la vez," dijo el panda. "Pero después de cinco años, sube al cielo en pocas semanas. La perseverancia silenciosa — ese es el secreto."`
},

// ─── VOLCAN ──────────────────────────────────────────────────────────────────

{
  id: 'v1',
  universe: 'volcano',
  theme: 'family',
  titleFr: '[NAME] et le Phénix de Feu',
  titleEn: '[NAME] and the Fire Phoenix',
  titleEs: '[NAME] y el Fénix de Fuego',
  textFr: `L'Île de Pyros sentait la fumée douce et le jasmin chaud. Son volcan, le Grand Feu, ne crachait pas de lave — il soufflait des fleurs incandescentes qui retombaient comme une neige orange et rose. Et dans les flammes du cratère vivait un phénix.

[NAME] était venu sur l'île pour retrouver la plume de phénix que sa mère avait perdue il y a des années — la seule relique de sa propre enfance. La plume avait, disait-on, le pouvoir de guérir les cœurs brisés. Et le cœur de sa mère était brisé depuis trop longtemps.

La montée du volcan prit toute une journée. La chaleur était intense, mais [NAME] pensait à sa mère à chaque pas. Au bord du cratère, le phénix apparut — immense, flamboyant, avec des plumes comme des flammes solidifiées.

"Tu viens chercher une plume," dit le phénix d'une voix qui ressemblait à un crépitement de feu de cheminée.

"Oui. Pour ma mère."

Le phénix inclina la tête. "Beaucoup viennent pour eux-mêmes. Toi, tu viens pour quelqu'un d'autre." Il se secoua, et une plume dorée tomba doucement dans les mains de [NAME], aussi légère qu'une pensée d'amour.

"Mais sache," ajouta le phénix, "que la plume ne guérit pas seule. Ce qui guérit les cœurs, c'est de savoir qu'on est aimé. La plume ne fait que lui rappeler ce qu'elle a peut-être oublié."

[NAME] rentra sur l'île en tenant la plume précieusement. Ce soir-là, en la déposant dans les mains de sa mère, [NAME] dit simplement : "Je t'aime." Et c'était ça, le vrai trésor.`,
  textEn: `The Island of Pyros smelled of soft smoke and warm jasmine. Its volcano, the Grand Fire, didn't spew lava — it blew incandescent flowers that drifted down like orange and pink snow. And in the flames of the crater lived a phoenix.

[NAME] had come to the island to find the phoenix feather that their mother had lost years ago — the only relic of her own childhood. The feather was said to have the power to heal broken hearts. And their mother's heart had been broken for too long.

The climb up the volcano took a full day. The heat was intense, but [NAME] thought of their mother with every step. At the edge of the crater, the phoenix appeared — enormous, blazing, with feathers like solidified flames.

"You've come for a feather," said the phoenix in a voice like a crackling fireplace.

"Yes. For my mother."

The phoenix tilted its head. "Many come for themselves. You come for someone else." It shook itself, and a golden feather drifted softly into [NAME]'s hands, as light as a thought of love.

"But know this," the phoenix added: "the feather doesn't heal alone. What heals hearts is knowing they are loved. The feather simply reminds her of something she may have forgotten."

[NAME] came down the island holding the feather carefully. That evening, placing it in their mother's hands, [NAME] simply said: "I love you." And that was the real treasure.`,
  textEs: `La Isla de Pyros olía a humo suave y jazmín cálido. Su volcán, el Gran Fuego, no lanzaba lava — soplaba flores incandescentes que caían como nieve naranja y rosa. Y en las llamas del cráter vivía un fénix.

[NAME] había venido a la isla para encontrar la pluma de fénix que su madre había perdido años atrás — la única reliquia de su propia infancia. Se decía que la pluma tenía el poder de curar corazones rotos. Y el corazón de su madre llevaba demasiado tiempo roto.

La subida al volcán duró todo un día. El calor era intenso, pero [NAME] pensaba en su madre a cada paso. En el borde del cráter, el fénix apareció — inmenso, llameante, con plumas como llamas solidificadas.

"Has venido por una pluma," dijo el fénix con una voz como un crepitar de chimenea.

"Sí. Para mi madre."

El fénix inclinó la cabeza. "Muchos vienen por ellos mismos. Tú vienes por otro." Se sacudió, y una pluma dorada cayó suavemente en las manos de [NAME], tan ligera como un pensamiento de amor.

"Pero sabe," añadió el fénix, "que la pluma no cura sola. Lo que cura los corazones es saber que son amados. La pluma solo le recuerda lo que quizás ha olvidado."

[NAME] bajó de la isla sosteniendo la pluma con cuidado. Esa noche, al depositarla en las manos de su madre, [NAME] dijo simplemente: "Te quiero." Y ese era el verdadero tesoro.`
},
]

// Helper pour obtenir les histoires filtrées
export function getStoriesForUniverse(universe: Universe): StoryTemplate[] {
  return STORIES.filter(s => s.universe === universe)
}

export function getAllStories(): StoryTemplate[] {
  return STORIES
}

export function getRandomStory(universe?: Universe): StoryTemplate {
  const pool = universe ? getStoriesForUniverse(universe) : STORIES
  return pool[Math.floor(Math.random() * pool.length)]
}
