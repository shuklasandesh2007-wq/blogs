import { Article } from '../types';

export const INITIAL_ARTICLES: Article[] = [
  {
    id: 'art-01',
    slug: 'quiet-renaissance-of-local-computing',
    title: 'The Quiet Renaissance of Local Computing',
    subtitle: 'Why sovereign devices and small personal models are dismantling the cloud rentier economy',
    excerpt: 'For fifteen years, the prevailing consensus dictated that personal hardware would diminish into inert glass terminals tethered to hyperscale server farms. Today, a quiet counter-revolution is reclaiming sovereign silicon.',
    category: 'Technology',
    author: {
      name: 'Elena Rostova',
      role: 'Founding Fellow at Institute for Durable Computing',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=240&q=80',
      bio: 'Elena writes on decentralized protocols, hardware longevity, and the socio-technical politics of data sovereignty.'
    },
    publishedAt: 'October 18, 2026',
    readTime: '8 min read',
    coverImage: '/src/assets/images/article_local_computing_1792550307532.jpg',
    imageCaption: 'Fig. 1 — Milled aluminum low-power sovereign node running quantized inference entirely off-grid.',
    featured: false,
    spotlight: true,
    claps: 342,
    tags: ['Edge Silicon', 'Privacy', 'Offline-First', 'Architecture'],
    keyTakeaways: [
      'Edge accelerators now perform multi-modal inference on under 15 watts of continuous power.',
      'Offline-first protocol architectures remove vendor lock-in and systemic cloud downtime vulnerabilities.',
      'Sovereign computing restores user ownership over personal memory, notes, and intellectual output.'
    ],
    sections: [
      {
        heading: 'The Fallacy of the Inert Glass Terminal',
        paragraphs: [
          'In the mid-2010s, enterprise product roadmaps were unanimous: the personal computer was destined to become an empty pane of glass. Processing would migrate permanently to centralized server arrays in Virginia and Dublin, while consumers paid monthly subscriptions for the privilege of streaming their own keystrokes back to themselves.',
          'Yet this centralized vision carried a structural vulnerability that few acknowledged at the time. When every document, voice memo, and family photograph is contingent upon a remote API connection and an ongoing credit card authorization, the concept of private property dissolves into a revocable tenancy agreement.'
        ],
        pullQuote: 'When your digital life is contingent upon a remote API authorization, ownership quietly dissolves into a revocable tenancy.'
      },
      {
        heading: 'The Thermodynamics of Local Inference',
        paragraphs: [
          'The turning point arrived not through philosophical protest, but through thermodynamic necessity and radical algorithmic compression. With the maturation of 3nm unified-memory architecture and aggressive 4-bit weight quantization, consumer workstations can execute 70-billion-parameter models directly on desk-bound silicon, drawing less energy than an incandescent reading lamp.',
          'Local execution eliminates round-trip latency, immune to undersea fiber cuts or corporate price re-tiering. More crucially, it reinstates an inviolable cryptographic boundary: telemetry that never leaves the motherboard cannot be harvested, subpoenaed without warrant, or fed into advertising profiling matrices.'
        ],
        callout: {
          title: 'The Sovereign Stack Metric',
          text: 'Modern edge systems can now index over 250,000 personal notes and vector documents locally in under 400 milliseconds, without transmitting a single byte over the public internet.'
        }
      },
      {
        heading: 'Reconstructing the Digital Commons',
        paragraphs: [
          'What emerges from this migration is not isolationism, but a resilient federation. Tools built on local-first CRDTs (Conflict-free Replicated Data Types) synchronize peer-to-peer over local wireless meshes when available, yet function with total fidelity when isolated atop a mountain pass.',
          'Software crafted for this new paradigm values permanence over vanity metrics. In an era dominated by transient cloud services that vanish with their parent startups, local computing offers an enduring digital sanctuary: tools that will still open your files thirty years from today.'
        ]
      }
    ],
    footnotes: [
      '1. Shannon, C. E. (1948). A Mathematical Theory of Communication. Bell System Technical Journal.',
      '2. Kleppmann, M. et al. (2019). Local-first software: You own your data, in spite of the cloud. ACM Onward!.',
      '3. Vinge, V. (2006). Rainbows End: Ubiquitous sensor networks and sovereign storage nodes.'
    ]
  },
  {
    id: 'art-02',
    slug: 'architecture-for-the-50-year-heatwave',
    title: 'Architecture for the 50-Year Heatwave',
    subtitle: 'How ancient subterranean cooling, thermal chimneys, and mass timber are transforming urban survival',
    excerpt: 'As mechanical air conditioning strains urban electric grids beyond breaking points, contemporary architects are rediscovering passive Mediterranean ventilation and porous mass timber to cool cities naturally.',
    category: 'Architecture',
    author: {
      name: 'Mateo De Luca',
      role: 'Principal, Studio Vernacular & Urban Climate Fellow',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=240&q=80',
      bio: 'Mateo designs zero-energy residential infrastructure across Southern Europe and North Africa, combining computational airflow modeling with vernacular masonry.'
    },
    publishedAt: 'October 16, 2026',
    readTime: '11 min read',
    coverImage: '/src/assets/images/article_climate_architecture_1792550306007.jpg',
    imageCaption: 'Fig. 2 — Six-story mass timber residential co-operative in Valencia utilizing terracotta solar chimneys and internal thermal cisterns.',
    featured: false,
    spotlight: true,
    claps: 519,
    tags: ['Passive Cooling', 'Mass Timber', 'Vernacular', 'Urban Design'],
    keyTakeaways: [
      'Solar chimneys generate continuous negative pressure, exhausting hot interior air without mechanical fans.',
      'Cross-laminated timber (CLT) provides thermal phase-shift damping superior to uninsulated concrete.',
      'Urban microclimates can drop up to 6°C through coordinated deep-soil courtyards and porous basalt paving.'
    ],
    sections: [
      {
        heading: 'The Deadly Paradox of the Air Conditioner',
        paragraphs: [
          'Mechanical air conditioning is an energetic Ponzi scheme. In cooling an interior apartment by eight degrees Celsius, standard heat pumps reject hot exhaust directly into the narrow street canyons outside, elevating street-level ambient temperatures by up to four degrees during twilight hours. This exacerbates the urban heat island effect, forcing neighboring air conditioners to spin faster, until regional sub-stations fail.',
          'To break this spiraling thermal trap, architects must abandon the glass curtain wall and re-examine the physics of passive thermal mass.'
        ],
        pullQuote: 'Air conditioning does not destroy heat; it merely evicts it into the street to punish our neighbors.'
      },
      {
        heading: 'Solar Chimneys and Night-Purge Hydraulics',
        paragraphs: [
          'In traditional Persian and Andalusian construction, windcatchers (badgirs) and deep shaded patios harnessed buoyancy-driven ventilation. Today, high-resolution computational fluid dynamics (CFD) allow us to optimize these geometries to millimeter precision.',
          'By incorporating a vertical solar chimney with a dark glazed upper facade on the southern face, solar radiation heats the column of air at the rooftop. As this hot air expands and escapes through acoustic louvers, it draws cool air upward from subterranean earth tubes and planted shaded courtyards at street level.'
        ],
        callout: {
          title: 'Thermal Phase Shift Measured',
          text: 'A 240mm thick cross-laminated timber wall combined with wood-fiber insulation creates a thermal delay of 12.4 hours, delaying peak noon heat until midnight, when cool ambient air can purge the envelope.'
        }
      },
      {
        heading: 'The Tactile City of Earth and Timber',
        paragraphs: [
          'The aesthetic result is striking. Gone are the sterile, reflective glass towers that turn city streets into blinding convection ovens. In their stead arises an architecture of sculpted shadows, recessed terracotta screens, and porous lime plasters that absorb humidity during dawn and release it during dry afternoons.',
          'Cities built with these principles do not fight the sun; they calibrate its path, creating civic enclaves where human beings can assemble in dignity even under a Mediterranean zenith.'
        ]
      }
    ],
    footnotes: [
      '1. Fathy, H. (1986). Natural Energy and Vernacular Architecture. University of Chicago Press.',
      '2. Santamouris, M. (2020). Innovating to Counter Extreme Heat in Built Environments. Annual Review of Environment and Resources.'
    ]
  },
  {
    id: 'art-03',
    slug: 'the-lost-art-of-deep-reading',
    title: 'The Lost Art of Deep Reading in an Era of Fragmented Attention',
    subtitle: 'Why continuous linear immersion is not a luxury, but the fundamental cognitive scaffolding of original thought',
    excerpt: 'When screens turn every page into an interactive hyperlinked casino, the neurobiological apparatus required for sustained empathy, nuance, and synthesis begins to atrophy. How do we reclaim cognitive depth?',
    category: 'Culture',
    author: {
      name: 'Dr. Clara Lindqvist',
      role: 'Cognitive Neuroscientist & Essayist',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=240&q=80',
      bio: 'Clara investigates human attentional networks at Uppsala University and advocates for quiet, contemplation-first interface design.'
    },
    publishedAt: 'October 14, 2026',
    readTime: '9 min read',
    coverImage: '/src/assets/images/article_deep_reading_1792550307617.jpg',
    imageCaption: 'Fig. 3 — An afternoon inside the Duke Humfrey Library at Oxford. The physical book enforces a rhythmic solitude that screens systematically disrupt.',
    featured: false,
    spotlight: false,
    claps: 684,
    tags: ['Cognition', 'Attention', 'Neurobiology', 'Literary Craft'],
    keyTakeaways: [
      'Deep reading activates bilateral prefrontal networks associated with recursive analogical synthesis and deep empathy.',
      'Hyperlink-rich and notification-laden media increase cognitive load, forcing the brain into frantic triage mode rather than contemplation.',
      'Linear textual containment provides a fixed spatial landscape that cements long-term semantic memory retention.'
    ],
    sections: [
      {
        heading: 'The Architecture of Cognitive Submersion',
        paragraphs: [
          'Reading a complex book is not merely the passive absorption of information; it is a full-bodied neurological recreation of another consciousness. When a reader engages with an intricate argument across three hundred unhurried pages, the brain constantly forms secondary inferences, tests hypotheses against personal memories, and constructs an internal cathedral of empathy.',
          'By contrast, contemporary digital browsing triggers an ancient forage response. The visual cortex scans frantically for high-contrast stimuli, dopamine micro-rewards, and actionable triggers. We skim, we bookmark, we share without digesting—mistaking the collecting of bookmarks for the crystallization of wisdom.'
        ],
        pullQuote: 'We have traded the deep well of contemplative synthesis for the wide, ankle-deep puddle of infinite notifications.'
      },
      {
        heading: 'The Spatial Geography of the Printed Page',
        paragraphs: [
          'Neurobiologists have observed that human memory relies heavily on spatial mapping. When remembering a passage from a physical volume, we recall not just the words, but whether they resided on the top left of an open spread, the weight of the pages held in our left hand versus the right, and the texture of the linen cloth binding.',
          'A digital scroll strips away these tactile mileposts. Text unspools in a weightless, boundless continuum where everything feels equidistant from nothing. Without boundaries, the mind struggles to anchor sequence and consequence.'
        ]
      },
      {
        heading: 'Practicing Intentional Cognitive Sanctuary',
        paragraphs: [
          'To recover deep reading is to mount a peaceful defense against attentional colonization. It requires setting aside intentional blocks of time—an hour before dusk, a quiet Sunday dawn—with single-tasking devices or ink on physical paper.',
          'When we allow the mind to inhabit a single unfragmented voice for hours, we notice our inner monologues deepening. The frantic anxiety of the feed gives way to an enduring internal clarity.'
        ]
      }
    ],
    footnotes: [
      '1. Wolf, M. (2018). Reader, Come Home: The Reading Brain in a Digital World. HarperCollins.',
      '2. Carr, N. (2010). The Shallows: What the Internet Is Doing to Our Brains. W. W. Norton & Company.'
    ]
  },
  {
    id: 'art-04',
    slug: 'the-architecture-of-light-and-void',
    title: 'The Architecture of Light and Void',
    subtitle: 'A retrospective on physical sanctuaries, acoustic stillness, and the timeless necessity of civic libraries',
    excerpt: 'In an age where public space is progressively commercialized, the civic reading room remains our most radical democratic experiment: a sanctuary of light and silence open equally to all.',
    category: 'Architecture',
    author: {
      name: 'Julian Thorne',
      role: 'Architecture Critic & Editor-in-Chief',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=240&q=80',
      bio: 'Julian is an essayist focused on institutional design, public libraries, and the preservation of contemplative civic spaces.'
    },
    publishedAt: 'October 12, 2026',
    readTime: '12 min read',
    coverImage: '/src/assets/images/hero_editorial_journal_1792550307093.jpg',
    imageCaption: 'The Olympic Forest Reading Pavilion, designed with untreated Douglas fir louvers and honest board-formed concrete.',
    featured: true,
    spotlight: false,
    claps: 890,
    tags: ['Libraries', 'Civic Design', 'Acoustics', 'Public Goods'],
    keyTakeaways: [
      'Public libraries are the last non-commercial spaces in urban centers where citizens are welcomed without expectation of purchase.',
      'Acoustic reverberation control under 0.8 seconds creates an instinctive psychological transition into contemplative stillness.',
      'Honest material expression—unpainted timber, raw stone, diffused daylight—fosters enduring intergenerational stewardship.'
    ],
    sections: [
      {
        heading: 'The Non-Transaction Sanctuary',
        paragraphs: [
          'Step into any commercial district in London, Tokyo, or New York, and you will quickly discover that to pause is to be categorized as a loiterer unless you have paid for a beverage. The contemporary city has eliminated benches, enclosed plazas under private security guards, and transformed the public realm into a relentless sales corridor.',
          'Against this landscape stands the public library—perhaps the most radical institution human civilization ever devised. Within its doors, a university professor, an unsheltered veteran, a ten-year-old child, and a speculative poet sit at the same oak table under the same skylight. No ticket is inspected. No receipt is demanded.'
        ],
        pullQuote: 'The civic library remains our most radical monument to human parity: an unmetered sanctuary where nobody asks for your wallet before granting you refuge.'
      },
      {
        heading: 'Choreography of Daylight',
        paragraphs: [
          'Great library architects—from Alvar Aalto in Viipuri to Louis Kahn in Exeter—understood that light is not an accessory to be supplemented with fluorescents, but the primary structural material of contemplation. Kahn spoke of the "treasury of the shadows," designing deep concrete clerestories that scoop northern daylight down past book stacks without allowing direct solar glare to damage fragile bindings or fatigue a student’s eyes.',
          'When natural light shifts with the passage of an afternoon cloud, the room breathes. The reader feels bound to the physical planet even while roaming distant galaxies of the imagination.'
        ],
        callout: {
          title: 'The Viipuri Ceiling Geometry',
          text: 'Aalto arranged 57 conical roof skylights to ensure shadow-free, omnidirectional daylight at reading desks, irrespective of solar azimuth.'
        }
      },
      {
        heading: 'Quiet as a Shared Civic Asset',
        paragraphs: [
          'Silence in a public library is not an oppressive enforcement; it is a collective gift that strangers bestow upon one another. In walking softly, in closing a drawer with care, in speaking in whispers, patrons participate in a silent covenant of mutual respect.',
          'To build such spaces in our cities is an act of high political courage. It declares that our citizens are entitled to beauty, peace, and contemplation as their birthright, not an exclusive privilege reserved for private retreats.'
        ]
      }
    ],
    footnotes: [
      '1. Kahn, L. I. (1971). The Room, the Street, and the Human Agreement. AIA Gold Medal Address.',
      '2. Klinenberg, E. (2018). Palaces for the People: How Social Infrastructure Can Help Fight Inequality, Polarization, and the Decline of Civic Life. Crown.'
    ]
  },
  {
    id: 'art-05',
    slug: 'acoustic-ecology-of-high-density-megacities',
    title: 'Acoustic Ecology: Designing the Soundscapes of High-Density Megacities',
    subtitle: 'From porous basalt sound mirrors to falling water basins: how intentional acoustics heal auditory exhaustion',
    excerpt: 'Noise pollution is not an inevitable byproduct of urban vitality; it is a failure of architectural choreography. How acoustic topography and hydraulic buffers transform chaotic streets into restorative urban gardens.',
    category: 'Architecture',
    author: {
      name: 'Soraya Chen',
      role: 'Sonic Architect & Acoustic Ecologist',
      avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=240&q=80',
      bio: 'Soraya designs sonic installations, acoustic facades, and urban sound dampening parks across East Asia and Scandinavia.'
    },
    publishedAt: 'October 10, 2026',
    readTime: '10 min read',
    coverImage: '/src/assets/images/article_soundscape_urban_1792550308033.jpg',
    imageCaption: 'Fig. 5 — Acoustic arches and dark basalt reflection pools installed at the Kyoto Civic Esplanade to attenuate high-frequency transit rumble.',
    featured: false,
    spotlight: false,
    claps: 412,
    tags: ['Acoustics', 'Urbanism', 'Sensory Design', 'Public Health'],
    keyTakeaways: [
      'Chronic ambient noise above 65 dBA correlates directly with sustained elevated cortisol levels and cardiac disease.',
      'Porous basalt cladding with tuned internal resonant cavities dissipates low-frequency transit hum by up to 14 dB.',
      'White and pink noise generated by natural water cascades masks irritating intermittent vehicular spikes through acoustic psycho-acoustics.'
    ],
    sections: [
      {
        heading: 'The Unseen Toxicity of Auditory Clutter',
        paragraphs: [
          'We possess eyelids to shutter our eyes against blinding light, yet we have no ear-lids. Our auditory nerves remain perpetually attuned to our environment, evolutionarily primed to interpret screeching brakes, revving diesel motors, and siren wails as existential threats.',
          'Epidemiological studies across European capitals reveal that living near a multi-lane arterial road increases the risk of ischemic heart disease as substantially as passive smoking. Yet because sound is invisible, municipal authorities treat it as a trivial aesthetic inconvenience rather than an environmental toxin.'
        ],
        pullQuote: 'Our ears have no eyelids; they remain defenseless against the relentless acoustic assault of the combustion city.'
      },
      {
        heading: 'Diffractive Façades and Sonic Topography',
        paragraphs: [
          'Parallel glass and polished granite surfaces turn city boulevards into echo chambers where sound waves ricochet endlessly between opposing building walls. But if we replace flat facades with micro-perforated terracotta panels, undulating acoustic masonry, and recessed planted balconies, sound energy is trapped and converted into microscopic friction heat.',
          'At street level, the strategic deployment of basalt water basins introduces a continuous pink-noise spectrum. The pleasant, randomized splash of falling water engages the brain’s auditory attention, rendering distant vehicular sirens perceptually benign through energetic masking.'
        ]
      },
      {
        heading: 'The Sanctuary of Civic Reverie',
        paragraphs: [
          'When an acoustic courtyard is designed with rigor, the psychological shift upon entering is immediate and profound. Pedestrians involuntarily lower their voices, slow their pace, and exhale.',
          'A quiet city is not an empty city; it is a city where human speech, bird song, wind rustling through birch leaves, and footsteps on cobblestones can once again be heard.'
        ]
      }
    ],
    footnotes: [
      '1. Schafer, R. M. (1977). The Tuning of the World: Toward a Theory of Soundscape Design. Knopf.',
      '2. World Health Organization (2018). Environmental Noise Guidelines for the European Region.'
    ]
  },
  {
    id: 'art-06',
    slug: 'the-biophilia-fallacy-beyond-moss-walls',
    title: 'The Biophilia Fallacy: Beyond Fake Moss Walls',
    subtitle: 'Why gluing preserved lichen onto corporate drywall does not satisfy our evolutionary kinship with living ecosystems',
    excerpt: 'Corporate lobbies across Silicon Valley and Canary Wharf have adopted green walls as visual absolution. Real biophilic architecture demands living root systems, microbial diversity, and seasonal decay.',
    category: 'Ecology',
    author: {
      name: 'Dr. Henrik Vance',
      role: 'Director of Urban Ecology at ETH Zurich',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=240&q=80',
      bio: 'Henrik studies urban rhizosphere ecology, bio-integrated construction materials, and regenerative city forestry.'
    },
    publishedAt: 'October 08, 2026',
    readTime: '7 min read',
    coverImage: '/src/assets/images/article_climate_architecture_1792550306007.jpg',
    imageCaption: 'Fig. 6 — True integrated rhizosphere balconies with deep subsoil layers supporting diverse pollinator habitats in Zurich.',
    featured: false,
    spotlight: false,
    claps: 378,
    tags: ['Biophilia', 'Ecology', 'Biodiversity', 'Living Systems'],
    keyTakeaways: [
      'Preserved moss panels are taxidermy for architecture: dead organic material preserved with toxic glycerin and dyes.',
      'Authentic biophilia requires dynamic cycles: blossoming, seed dispersal, autumn browning, and winter dormancy.',
      'Continuous soil matrices across building podiums restore lost fungal mycorrhizal networks and urban insect flyways.'
    ],
    sections: [
      {
        heading: 'The Commodification of the Botanical',
        paragraphs: [
          'Walk into any newly minted corporate headquarters, and you will encounter the ubiquitous "moss wall." These are flat panels of preserved Scandinavian reindeer lichen, chemically stabilized in vats of industrial glycerin, tinted with artificial green pigments, and stapled to plywood.',
          'They do not breathe. They emit no oxygen, harbor no soil microbes, filter no particulate toxins, and provide zero sustenance for migratory birds. They are botanical taxidermy, designed solely for investor prospectus photographs.'
        ],
        pullQuote: 'Preserved moss walls are greenwashing incarnate: inert botanical taxidermy masquerading as ecological empathy.'
      },
      {
        heading: 'Embracing the Full Lifecycle of Nature',
        paragraphs: [
          'True biophilia, as conceived by Edward O. Wilson, is the innate evolutionary affinity human beings possess for living systems. Crucially, living systems are not permanently emerald-green, immaculate, and sterile. They bud in spring, shed pollen, turn auburn in autumn, and stand bare in winter frost.',
          'When buildings incorporate genuine deep-soil planter beds with native mycorrhizal fungi and drought-tolerant perennial grasses, building inhabitants witness the turning of planetary time. This cyclical presence grounds the human spirit in a way no artificial plant installation can replicate.'
        ]
      }
    ],
    footnotes: [
      '1. Wilson, E. O. (1984). Biophilia. Harvard University Press.',
      '2. Kellert, S. R. (2008). Biophilic Design: The Theory, Science and Practice of Bringing Buildings to Life. Wiley.'
    ]
  },
  {
    id: 'art-07',
    slug: 'typography-as-spatial-architecture',
    title: 'Typography as Spatial Architecture',
    subtitle: 'How proportional grids, baseline rhythms, and kerning metrics construct dignity on the digital screen',
    excerpt: 'Letters are not mere abstract symbols; they are structural enclosures for thought. Exploring the deep structural affinity between stone masonry, Renaissance book design, and digital screen legibility.',
    category: 'Architecture',
    author: {
      name: 'Julian Thorne',
      role: 'Architecture Critic & Editor-in-Chief',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=240&q=80',
      bio: 'Julian is an essayist focused on institutional design, public libraries, and the preservation of contemplative civic spaces.'
    },
    publishedAt: 'October 05, 2026',
    readTime: '8 min read',
    coverImage: '/src/assets/images/article_deep_reading_1792550307617.jpg',
    imageCaption: 'Fig. 7 — Comparison of proportional modular scales from Tschichold’s canonical book proportions to modern fluid responsive typography.',
    featured: false,
    spotlight: false,
    claps: 521,
    tags: ['Typography', 'Grid Systems', 'Book Design', 'Aesthetics'],
    keyTakeaways: [
      'Vertical baseline grids establish an underlying musical cadence that eases reading fatigue over extended reading sessions.',
      'The optical measure of 65 to 75 characters per line prevents saccadic overshoot and reading line re-scanning.',
      'Negative space (counterforms and margins) does not represent empty void; it is the structural mortar holding letterforms in place.'
    ],
    sections: [
      {
        heading: 'The Golden Canon of Page Geometry',
        paragraphs: [
          'In 1953, the typographer Jan Tschichold published his rigorous reconstruction of medieval and Renaissance book formats. He proved that master scribes and early printers did not guess their margins. They employed exact geometric constructions—dividing page height and width into reciprocal harmonic proportions such as 2:3:4:6.',
          'The generous outer and bottom margins were not decorative excesses; they accommodated the reader’s thumbs without obscuring text, while elevating the printed block toward the optical center where daylight fell richest.'
        ],
        pullQuote: 'Space is not the absence of type; it is the silent chamber in which type resonates.'
      },
      {
        heading: 'The Digital Degradation and Its Restoration',
        paragraphs: [
          'When typography first migrated to the web, much of this wisdom was discarded. Text was crammed into fluid width containers that stretched to 180 characters per line on widescreen monitors, producing unbearable eye strain as pupils leaped across vast digital deserts.',
          'Today’s finest editorial developers treat the browser viewport as an architectural hall. By employing strict modular type scales, locking line-heights to typographic baselines, and respecting optical counterforms, we can restore genuine dignity to the reading experience.'
        ]
      }
    ],
    footnotes: [
      '1. Tschichold, J. (1991). The Form of the Book: Essays on the Morality of Good Design. Hartley & Marks.',
      '2. Bringhurst, R. (1992). The Elements of Typographic Style. Hartley & Marks.'
    ]
  },
  {
    id: 'art-08',
    slug: 'crafting-heirlooms-in-software',
    title: 'Crafting Heirlooms in Software: The Case for the 20-Year Tool',
    subtitle: 'Why the addiction to ephemeral frameworks and breaking changes is bankrupting digital civilization',
    excerpt: 'Most modern web software will not compile five years from now. By designing with zero fragile dependencies, plaintext protocols, and stable interfaces, we can construct tools that outlive their makers.',
    category: 'Technology',
    author: {
      name: 'Elena Rostova',
      role: 'Founding Fellow at Institute for Durable Computing',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=240&q=80',
      bio: 'Elena writes on decentralized protocols, hardware longevity, and the socio-technical politics of data sovereignty.'
    },
    publishedAt: 'October 02, 2026',
    readTime: '9 min read',
    coverImage: '/src/assets/images/article_local_computing_1792550307532.jpg',
    imageCaption: 'Fig. 8 — Plaintext file structures and POSIX shell scripts running without modification on three generations of computing hardware.',
    featured: false,
    spotlight: false,
    claps: 615,
    tags: ['Software Craft', 'Longevity', 'Plain Text', 'Philosophy'],
    keyTakeaways: [
      'The median lifespan of a front-end npm dependency tree before unresolvable deprecation is under 38 months.',
      'Plaintext formats (Markdown, SQLite, JSON, CSV) remain readable across decades, immune to corporate platform shuttering.',
      'Software built as an heirloom emphasizes backwards compatibility, self-containment, and zero remote runtime calls.'
    ],
    sections: [
      {
        heading: 'The Planned Obsolescence of Modern Code',
        paragraphs: [
          'If a carpenter built a dining table that disintegrated into sawdust every three years because the tree species had updated its annual rings, nobody would hire them. Yet in modern software engineering, we routinely celebrate codebases that require weekly dependency churn simply to avoid deprecation warnings.',
          'A typical web application now pulls in over twelve hundred transitive packages—each a potential security liability, each an uninspected link in a fragile supply chain. The moment one maintainer abandons a sub-sub-dependency, the entire edifice grinds to a halt.'
        ],
        pullQuote: 'If a carpenter built a chair that required monthly firmware overhauls to remain seated, we would question their sanity.'
      },
      {
        heading: 'The Principles of Heirloom Software',
        paragraphs: [
          'Heirloom software is built on an inverse philosophy. It prizes boring, battle-tested primitives: standard SQL, POSIX file systems, and resilient plain text. Consider SQLite or TeX: both continue to execute code written thirty years ago with byte-for-byte fidelity.',
          'When we write tools that store their data in transparent formats that the user can inspect with basic terminal commands, we grant them unconditional freedom. They own their data today, tomorrow, and thirty years into an unknowable future.'
        ]
      }
    ],
    footnotes: [
      '1. Raymond, E. S. (2003). The Art of Unix Programming. Addison-Wesley.',
      '2. Knuth, D. E. (1984). The TeXbook. American Mathematical Society.'
    ]
  },
  {
    id: 'art-09',
    slug: 'the-preservation-of-ephemeral-web-archeology',
    title: 'The Preservation of Ephemeral Web Archeology',
    subtitle: 'Rescuing the amateur, idiosyncratic, and tender human artifacts of the early decentralized internet',
    excerpt: 'Before algorithmic feeds reduced personal expression to homogenized rectangles, the web was a chaotic digital bazaar of hand-coded HTML diaries, weird flash games, and earnest personal obsessions.',
    category: 'Culture',
    author: {
      name: 'Mateo De Luca',
      role: 'Principal, Studio Vernacular & Urban Climate Fellow',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=240&q=80',
      bio: 'Mateo designs zero-energy residential infrastructure across Southern Europe and North Africa, combining computational airflow modeling with vernacular masonry.'
    },
    publishedAt: 'September 28, 2026',
    readTime: '6 min read',
    coverImage: '/src/assets/images/hero_editorial_journal_1792550307093.jpg',
    imageCaption: 'Fig. 9 — Archival emulator workstation running reconstructed early 2000s hypermedia art collectives.',
    featured: false,
    spotlight: false,
    claps: 294,
    tags: ['Web Archeology', 'Digital History', 'Archivism', 'Net Art'],
    keyTakeaways: [
      'Over 60% of all websites registered between 1996 and 2005 are permanently unreachable due to link rot and server abandonment.',
      'Early web homepages operated as expressive vernacular architecture: eccentric, personal, and free of commercial incentives.',
      'Web archivists rely on decentralized torrent networks and browser emulators to resurrect lost digital subcultures.'
    ],
    sections: [
      {
        heading: 'The Great Link Rot of the 21st Century',
        paragraphs: [
          'We comfort ourselves with the illusion that the internet is an indelible archive where nothing is ever forgotten. In reality, the web is among the most ephemeral mediums in human history. The average lifespan of a URL before encountering a 404 error is less than one hundred days.',
          'Entire generations of poetry, amateur botanical research, community forum discussions, and idiosyncratic indie games have dissolved into 404 errors as domain names expired and servers were discarded into recycling bins.'
        ],
        pullQuote: 'The early web was not an audience funnel; it was a constellation of handcrafted digital living rooms.'
      },
      {
        heading: 'The Beauty of the Amateur Web',
        paragraphs: [
          'What we miss most about the early web is not its low-resolution graphics, but its radical lack of cynicism. People built personal websites not to cultivate personal brands or funnel visitors toward consulting services, but out of sheer, unabashed delight in their subjects.',
          'A retired clockmaker in Devon would spend seven months hand-coding nested tables to document every escapement mechanism used between 1720 and 1790. This was pure vernacular folk art. In preserving these pages, we preserve the uncommodified soul of the internet.'
        ]
      }
    ],
    footnotes: [
      '1. Zittrain, J. (2021). The Internet Is Rotting. The Atlantic.',
      '2. Lialina, O. & Espenschied, D. (2009). Digital Folklore. Merz & Solitude.'
    ]
  },
  {
    id: 'art-10',
    slug: 'the-ethos-of-public-squares-in-algorithmic-age',
    title: 'The Ethos of Public Squares in the Algorithmic Age',
    subtitle: 'Why physical civic forums, parks, and bandstands remain our greatest bulwark against political atomization',
    excerpt: 'When corporate recommendation algorithms profit from outrage and social fracture, the physical city square forces us into face-to-face contact with citizens whose beliefs we cannot mute with a keystroke.',
    category: 'Culture',
    author: {
      name: 'Dr. Clara Lindqvist',
      role: 'Cognitive Neuroscientist & Essayist',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=240&q=80',
      bio: 'Clara investigates human attentional networks at Uppsala University and advocates for quiet, contemplation-first interface design.'
    },
    publishedAt: 'September 24, 2026',
    readTime: '10 min read',
    coverImage: '/src/assets/images/article_soundscape_urban_1792550308033.jpg',
    imageCaption: 'Fig. 10 — Civic assembly amphitheater and pedestrian fountain steps in Bologna, Italy.',
    featured: false,
    spotlight: false,
    claps: 462,
    tags: ['Civic Life', 'Public Space', 'Democracy', 'Urbanism'],
    keyTakeaways: [
      'Physical encounters in common space generate somatic empathy that disarms algorithmic caricatures of ideological opponents.',
      'Third spaces that require no financial entry fee are the foundational substrate of democratic civic resilience.',
      'Urban design that prioritizes pedestrian permeability over automobile throughways revitalizes community safety and trust.'
    ],
    sections: [
      {
        heading: 'The Screen as an Ideological Funnel',
        paragraphs: [
          'Online feeds are engineered to present us with caricature: the most inflammatory, extreme, and unhinged statements of our perceived political antagonists. In doing so, they stimulate threat responses that lock users into addictive loops of defensive consumption.',
          'In this hyper-mediated mirror hall, we forget what ordinary human beings actually look like when they disagree: hesitant, polite, often uncertain, and burdened with the same daily anxieties about healthcare, rent, and family wellbeing.'
        ],
        pullQuote: 'You cannot algorithmically personalize a public park bench. In a park, you must share the shade with the stranger as they are.'
      },
      {
        heading: 'The Somatic Truth of Shared Geography',
        paragraphs: [
          'In a public square, you cannot block the elderly woman feeding pigeons, nor can you mute the brass quintet rehearsing in the bandstand. You must share space with them. You smell the roasted chestnuts, you hear the children laughing by the fountain, and you see the weary expression of the bus driver taking their break.',
          'This somatic immersion reminds us that we belong to a physical community of flesh and blood, not an ideological faction inside an advertising machine. To invest in public squares, shade trees, drinking fountains, and open public steps is the most urgent civic intervention of our century.'
        ]
      }
    ],
    footnotes: [
      '1. Jacobs, J. (1961). The Death and Life of Great American Cities. Random House.',
      '2. Habermas, J. (1989). The Structural Transformation of the Public Sphere. MIT Press.'
    ]
  }
];

export const INITIAL_COMMENTS: Record<string, import('../types').Comment[]> = {
  'art-01': [
    {
      id: 'c-1',
      author: 'Marcus Aurel',
      date: 'Oct 19, 2026',
      content: 'The point regarding thermodynamic limits of edge devices hits home. I have recently migrated my entire research library onto an off-grid M-series chip with SQLite and local vector embeddings. The absence of latency alone changes how thoughts form.',
      likes: 14
    },
    {
      id: 'c-2',
      author: 'Sarah Lin',
      date: 'Oct 19, 2026',
      content: 'Splendid essay. The framing of cloud services as "revocable tenancy" is the exact vocabulary we need in digital civil rights debates.',
      likes: 9
    }
  ],
  'art-04': [
    {
      id: 'c-3',
      author: 'Kaelen O’Connor',
      date: 'Oct 15, 2026',
      content: 'Having spent decades visiting libraries across Scandinavia, Aalto’s conical skylights in Viipuri represent pure poetry made concrete. Thank you for this tribute to civic silence.',
      likes: 22
    }
  ]
};
