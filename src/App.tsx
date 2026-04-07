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
  const [loadingMsg, setLoadingMsg] = useState('')

  const LOADING_MSGS = [
    '✨ Les fées préparent l\'histoire...',
    '📝 Le magicien écrit les mots...',
    '🌟 Les étoiles s\'alignent...',
    '🎨 La forêt s\'anime...',
    '🦋 Les personnages prennent vie...',
  ]

  async function generate() {
    if (!selectedHero || !selectedWorld || !selectedTheme) return
    setStep('generate')
    setLoading(true)
    let msgIdx = 0
    setLoadingMsg(LOADING_MSGS[0])
    const interval = setInterval(() => {
      msgIdx = (msgIdx + 1) % LOADING_MSGS.length
      setLoadingMsg(LOADING_MSGS[msgIdx])
    }, 2000)

    try {
      const apiKey = import.meta.env.VITE_ANTHROPIC_API_KEY
      if (!apiKey) throw new Error('Clé API manquante dans .env (VITE_ANTHROPIC_API_KEY)')

      const childRef = childName ? `Le héros s'appelle ${childName} dans cette histoire.` : ''
      const prompt = `Écris un conte pour enfant (5-8 ans) en français.
${childRef}
- Héros: ${selectedHero.name} ${selectedHero.emoji}
- Univers: ${selectedWorld.name} ${selectedWorld.emoji}
- Valeur/thème: ${selectedTheme.name} ${selectedTheme.emoji}

L'histoire doit:
- Faire 400-500 mots
- Avoir une structure claire: début aventureux, problème, solution, morale
- Être pleine de magie, de couleurs et d'émotions positives
- Se terminer sur une leçon de vie sur "${selectedTheme.name}"
- Utiliser un vocabulaire simple et des phrases courtes
- Avoir un titre accrocheur

Format: commence directement par le titre (une seule ligne), puis sépare les paragraphes par des sauts de ligne.`

      const res = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': apiKey,
          'anthropic-version': '2023-06-01',
          'anthropic-dangerous-direct-browser-access': 'true',
        },
        body: JSON.stringify({
          model: 'claude-haiku-4-5-20251001',
          max_tokens: 1200,
          messages: [{ role: 'user', content: prompt }],
        }),
      })

      if (!res.ok) throw new Error(`Erreur API: ${res.status}`)
      const data = await res.json()
      const raw: string = data.content?.[0]?.text ?? ''

      // Extraire titre et texte
      const lines = raw.split('\n').filter(l => l.trim())
      const title = lines[0].replace(/^#+\s*/, '').replace(/\*\*/g, '').trim()
      const text = lines.slice(1).join('\n').trim()

      const story: Story = {
        id: crypto.randomUUID(),
        title,
        text,
        hero: selectedHero.id,
        world: selectedWorld.id,
        theme: selectedTheme.id,
        createdAt: new Date().toISOString(),
        favorite: false,
      }

      const existing = loadStories()
      saveStories([story, ...existing])
      onStory(story)
    } catch (err) {
      alert(err instanceof Error ? err.message : 'Erreur inconnue')
      setStep('theme')
    } finally {
      clearInterval(interval)
      setLoading(false)
    }
  }

  const steps = [
    { id: 'hero', label: 'Héros', emoji: '⭐' },
    { id: 'world', label: 'Monde', emoji: '🌍' },
    { id: 'theme', label: 'Valeur', emoji: '💫' },
  ]

  return (
    <div className="min-h-screen flex flex-col" style={{ background: 'linear-gradient(180deg, #fdf4ff 0%, #f0e6ff 100%)' }}>
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
                    : steps.indexOf({ id: step, label: '', emoji: '' } as typeof steps[0]) > i || (step === 'world' && i === 0) || (step === 'theme' && i <= 1)
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
                  onClick={() => { setSelectedTheme(theme); generate() }}
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
            <p className="text-center font-bold text-base" style={{ color: '#7c3aed' }}>{loadingMsg}</p>
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

  function toggleNarration() {
    if (!soundEnabled) return
    if (speaking) {
      window.speechSynthesis.cancel()
      setSpeaking(false)
    } else {
      const text = story.title + '. ' + story.text
      const utterance = new SpeechSynthesisUtterance(text)
      utterance.lang = 'fr-FR'
      utterance.rate = 0.85
      utterance.pitch = 1.1
      // Try to use a nice voice
      const voices = window.speechSynthesis.getVoices()
      const frVoice = voices.find(v => v.lang.startsWith('fr') && v.name.toLowerCase().includes('female'))
        || voices.find(v => v.lang.startsWith('fr'))
      if (frVoice) utterance.voice = frVoice
      utterance.onend = () => setSpeaking(false)
      utterance.onerror = () => setSpeaking(false)
      utteranceRef.current = utterance
      window.speechSynthesis.speak(utterance)
      setSpeaking(true)
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
  return <HomeScreen onNavigate={setScreen} childName={childName} onSetChildName={setName} />
}
