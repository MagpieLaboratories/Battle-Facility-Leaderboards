import { Facility } from "./types";

export const Generations = [
  "Generation2",
  "Generation3",
  "Generation4",
  "Generation5",
  "Generation6",
  "Generation7",
  "Generation8",
] as const;

export const GenerationLabels = ["Gen2", "Gen3", "Gen4", "Gen5", "Gen6", "Gen7", "Gen8"] as const;

export const BattleFormats = ["Singles", "Doubles", "Multis"] as const;

export const discordLink = "https://discord.gg/7AfpxXArWv" as const;

export const facilities: Facility[] = [
  {
    id: "g4bts",
    label: "Battle Tower",
    generation: "Generation4",
    format: "Singles",
    firestoreCollection: "battle_tower_singles",
    category: ["monotype", "Little Cup"],
  },
  {
    id: "g4btd",
    label: "Battle Tower",
    generation: "Generation4",
    format: "Doubles",
    firestoreCollection: "battle_tower_doubles",
    category: ["monotype", "Little Cup"],
  },
  {
    id: "g4btm",
    label: "Battle Tower",
    generation: "Generation4",
    format: "Multis",
    firestoreCollection: "battle_tower_multis",
    category: ["monotype", "Little Cup"],
  },
  {
    id: "g4btmai",
    label: "Battle Tower with AI",
    generation: "Generation4",
    format: "Multis",
    firestoreCollection: "battle_tower_ai_multis",
    category: ["monotype", "Little Cup"],
  },
  {
    id: "g4bfs50",
    label: "Battle Factory L50",
    generation: "Generation4",
    format: "Singles",
    firestoreCollection: "battle_factory_singles_50",
    category: ["never swap", "always swap"],
  },
  {
    id: "g4bfs100",
    label: "Battle Factory L100",
    generation: "Generation4",
    format: "Singles",
    firestoreCollection: "battle_factory_singles_100",
    category: ["never swap", "always swap"],
  },
  {
    id: "g4bfd50",
    label: "Battle Factory L50",
    generation: "Generation4",
    format: "Doubles",
    firestoreCollection: "battle_factory_doubles_50",
    category: ["never swap", "always swap"],
  },
  {
    id: "g4bfd100",
    label: "Battle Factory L100",
    generation: "Generation4",
    format: "Doubles",
    firestoreCollection: "battle_factory_doubles_100",
    category: ["never swap", "always swap"],
  },
  {
    id: "g4bfm50",
    label: "Battle Factory L50",
    generation: "Generation4",
    format: "Multis",
    firestoreCollection: "battle_factory_multis_50",
    category: ["never swap", "always swap"],
  },
  {
    id: "g4bfm100",
    label: "Battle Factory L100",
    generation: "Generation4",
    format: "Multis",
    firestoreCollection: "battle_factory_multis_100",
    category: ["never swap", "always swap"],
  },
  {
    id: "g4bcs",
    label: "Battle Castle",
    generation: "Generation4",
    format: "Singles",
    firestoreCollection: "battle_castle_singles",
    category: ["monotype", "Little Cup"],
  },
  {
    id: "g4bcd",
    label: "Battle Castle",
    generation: "Generation4",
    format: "Doubles",
    firestoreCollection: "battle_castle_doubles",
    category: ["monotype", "Little Cup"],
  },
  {
    id: "g4bcm",
    label: "Battle Castle",
    generation: "Generation4",
    format: "Multis",
    firestoreCollection: "battle_castle_multis",
    category: ["monotype", "Little Cup"],
  },
  {
    id: "g4bas",
    label: "Battle Arcade",
    generation: "Generation4",
    format: "Singles",
    firestoreCollection: "battle_arcade_singles",
    category: ["monotype", "Little Cup"],
  },
  {
    id: "g4bad",
    label: "Battle Arcade",
    generation: "Generation4",
    format: "Doubles",
    firestoreCollection: "battle_arcade_doubles",
    category: ["monotype", "Little Cup"],
  },
  {
    id: "g4bam",
    label: "Battle Arcade",
    generation: "Generation4",
    format: "Multis",
    firestoreCollection: "battle_arcade_multis",
    category: ["monotype", "Little Cup"],
  },
  {
    id: "g4bhs",
    label: "Battle Hall",
    generation: "Generation4",
    format: "Singles",
    firestoreCollection: "battle_hall_singles",
    category: ["monotype", "Little Cup"],
  },
  {
    id: "g4bhd",
    label: "Battle Hall",
    generation: "Generation4",
    format: "Doubles",
    firestoreCollection: "battle_hall_doubles",
    category: ["monotype", "Little Cup"],
  },
  {
    id: "g4bhm",
    label: "Battle Hall",
    generation: "Generation4",
    format: "Multis",
    firestoreCollection: "battle_hall_multis",
    category: ["monotype", "Little Cup"],
  },
    {
        id: "g2bts10",
        label: "Tower L10",
        generation: "Generation2",
        format: "Singles",
        firestoreCollection: "battle_tower_singles_L10",
        category: ["monotype", "Little Cup"],
    },
    {
        id: "g2bts20",
        label: "Tower L20",
        generation: "Generation2",
        format: "Singles",
        firestoreCollection: "battle_tower_singles_L20",
        category: ["monotype", "Little Cup"],
    },
    {
        id: "g2bts30",
        label: "Tower L30",
        generation: "Generation2",
        format: "Singles",
        firestoreCollection: "battle_tower_singles_L30",
        category: ["monotype", "Little Cup"],
    },
    {
        id: "g2bts40",
        label: "Tower L40",
        generation: "Generation2",
        format: "Singles",
        firestoreCollection: "battle_tower_singles_L40",
        category: ["monotype", "Little Cup"],
    },
    {
        id: "g2bts50",
        label: "Tower L50",
        generation: "Generation2",
        format: "Singles",
        firestoreCollection: "battle_tower_singles_L50",
        category: ["monotype", "Little Cup"],
    },
    {
        id: "g2bts60",
        label: "Tower L60",
        generation: "Generation2",
        format: "Singles",
        firestoreCollection: "battle_tower_singles_L60",
        category: ["monotype", "Little Cup"],
    },
    {
        id: "g2bts70",
        label: "Tower L70",
        generation: "Generation2",
        format: "Singles",
        firestoreCollection: "battle_tower_singles_L70",
        category: ["monotype", "Little Cup"],
    },
    {
        id: "g2bts80",
        label: "Tower L80",
        generation: "Generation2",
        format: "Singles",
        firestoreCollection: "battle_tower_singles_L80",
        category: ["monotype", "Little Cup"],
    },
    {
        id: "g2bts90",
        label: "Tower L90",
        generation: "Generation2",
        format: "Singles",
        firestoreCollection: "battle_tower_singles_L90",
        category: ["monotype", "Little Cup"],
    },
    {
        id: "g2bts100",
        label: "Tower L100",
        generation: "Generation2",
        format: "Singles",
        firestoreCollection: "battle_tower_singles_L100",
        category: ["monotype", "Little Cup"],
    },
    {
        id: "g3bts50",
        label: "Battle Tower L50",
        generation: "Generation3",
        format: "Singles",
        firestoreCollection: "battle_tower_singles_L50",
        category: ["monotype", "Little Cup"],
    },
    {
        id: "g3btd50",
        label: "Battle Tower L50",
        generation: "Generation3",
        format: "Doubles",
        firestoreCollection: "battle_tower_doubles_L50",
        category: ["monotype", "Little Cup"],
    },
    {
        id: "g3bts100",
        label: "Battle Tower L100",
        generation: "Generation3",
        format: "Singles",
        firestoreCollection: "battle_tower_singles_L100",
        category: ["monotype", "Little Cup"],
    },
    {
        id: "g3btd100",
        label: "Battle Tower L100",
        generation: "Generation3",
        format: "Doubles",
        firestoreCollection: "battle_tower_doubles_L100",
        category: ["monotype", "Little Cup"],
    },
    {
        id: "g3btm50",
        label: "Battle Tower L50",
        generation: "Generation3",
        format: "Multis",
        firestoreCollection: "battle_tower_multis_L50",
        category: ["monotype", "Little Cup"],
    },
    {
        id: "g3btm100",
        label: "Battle Tower L100",
        generation: "Generation3",
        format: "Multis",
        firestoreCollection: "battle_tower_multis_L100",
        category: ["monotype", "Little Cup"],
    },
    {
        id: "g3btsai50",
        label: "Battle Tower with AI L50",
        generation: "Generation3",
        format: "Multis",
        firestoreCollection: "battle_tower_ai_multis_L50",
        category: ["monotype", "Little Cup"],
    },
    {
        id: "g3btsai100",
        label: "Battle Tower with AI L100",
        generation: "Generation3",
        format: "Multis",
        firestoreCollection: "battle_tower_ai_multis_L100",
        category: ["monotype", "Little Cup"],
    },
    {
        id: "g3bds50",
        label: "Battle Dome L50",
        generation: "Generation3",
        format: "Singles",
        firestoreCollection: "battle_dome_singles_L50",
        category: ["monotype", "Little Cup"],
    },
    {
        id: "g3bdd50",
        label: "Battle Dome L50",
        generation: "Generation3",
        format: "Doubles",
        firestoreCollection: "battle_dome_doubles_L50",
        category: ["monotype", "Little Cup"],
    },
    {
        id: "g3bds100",
        label: "Battle Dome L100",
        generation: "Generation3",
        format: "Singles",
        firestoreCollection: "battle_dome_singles_L100",
        category: ["monotype", "Little Cup"],
    },
    {
        id: "g3bdd100",
        label: "Battle Dome L100",
        generation: "Generation3",
        format: "Doubles",
        firestoreCollection: "battle_dome_doubles_L100",
        category: ["monotype", "Little Cup"],
    },
    {
        id: "g3bfs50",
        label: "Battle Factory L50",
        generation: "Generation3",
        format: "Singles",
        firestoreCollection: "battle_factory_singles_L50",
        category: ["monotype", "Little Cup"],
    },
    {
        id: "g3bfd50",
        label: "Battle Factory L50",
        generation: "Generation3",
        format: "Doubles",
        firestoreCollection: "battle_factory_doubles_L50",
        category: ["monotype", "Little Cup"],
    },
    {
        id: "g3bfs100",
        label: "Battle Factory L100",
        generation: "Generation3",
        format: "Singles",
        firestoreCollection: "battle_factory_singles_L100",
        category: ["monotype", "Little Cup"],
    },
    {
        id: "g3bfd100",
        label: "Battle Factory L100",
        generation: "Generation3",
        format: "Doubles",
        firestoreCollection: "battle_factory_doubles_L100",
        category: ["monotype", "Little Cup"],
    },
    {
        id: "g3bpike50",
        label: "Battle Pike L50",
        generation: "Generation3",
        format: "Singles",
        firestoreCollection: "battle_pike_singles_L50",
        category: ["monotype", "Little Cup"],
    },
    {
        id: "g3bpike100",
        label: "Battle Pike L100",
        generation: "Generation3",
        format: "Singles",
        firestoreCollection: "battle_pike_singles_L100",
        category: ["monotype", "Little Cup"],
    },
    {
        id: "g3bpyr50",
        label: "Battle Pyramid L50",
        generation: "Generation3",
        format: "Singles",
        firestoreCollection: "battle_pyramid_singles_L50",
        category: ["monotype", "Little Cup"],
    },
    {
        id: "g3bpyr100",
        label: "Battle Pyramid L100",
        generation: "Generation3",
        format: "Singles",
        firestoreCollection: "battle_pyramid_singles_L100",
        category: ["monotype", "Little Cup"],
    },
    {
        id: "g3ba50",
        label: "Battle Arena L50",
        generation: "Generation3",
        format: "Singles",
        firestoreCollection: "battle_arena_singles_L50",
        category: ["monotype", "Little Cup"],
    },
    {
        id: "g3ba100",
        label: "Battle Arena L100",
        generation: "Generation3",
        format: "Singles",
        firestoreCollection: "battle_arena_singles_L100",
        category: ["monotype", "Little Cup"],
    },
    {
        id: "g3bpals50",
        label: "Battle Palace L50",
        generation: "Generation3",
        format: "Singles",
        firestoreCollection: "battle_palace_singles_L50",
        category: ["monotype", "Little Cup"],
    },
    {
        id: "g3bpald50",
        label: "Battle Palace L50",
        generation: "Generation3",
        format: "Doubles",
        firestoreCollection: "battle_palace_doubles_L50",
        category: ["monotype", "Little Cup"],
    },
    {
        id: "g3bpals100",
        label: "Battle Palace L100",
        generation: "Generation3",
        format: "Singles",
        firestoreCollection: "battle_palace_singles_L100",
        category: ["monotype", "Little Cup"],
    },
    {
        id: "g3bpald100",
        label: "Battle Palace L100",
        generation: "Generation3",
        format: "Doubles",
        firestoreCollection: "battle_palace_doubles_L100",
        category: ["monotype", "Little Cup"],
    },
    {
        id: "g5s",
        label: "Battle Subway",
        generation: "Generation5",
        format: "Singles",
        firestoreCollection: "battle_subway_singles",
        category: ["monotype", "Little Cup"],
    },
    {
        id: "g5d",
        label: "Battle Subway",
        generation: "Generation5",
        format: "Doubles",
        firestoreCollection: "battle_subway_doubles",
        category: ["monotype", "Little Cup"],
    },
    {
        id: "g5m",
        label: "Battle Subway",
        generation: "Generation5",
        format: "Multis",
        firestoreCollection: "battle_subway_multis",
        category: ["monotype", "Little Cup"],
    },
    {
        id: "g5sai",
        label: "Battle Subway with AI",
        generation: "Generation5",
        format: "Multis",
        firestoreCollection: "battle_subway_ai_multis",
        category: ["monotype", "Little Cup"],
    },
    {
        id: "g6s",
        label: "Battle Maison",
        generation: "Generation6",
        format: "Singles",
        firestoreCollection: "battle_maison_singles",
        category: ["monotype", "Little Cup"],
    },
    {
        id: "g6d",
        label: "Battle Maison",
        generation: "Generation6",
        format: "Doubles",
        firestoreCollection: "battle_maison_doubles",
        category: ["monotype", "Little Cup"],
    },
    {
        id: "g6m",
        label: "Battle Maison",
        generation: "Generation6",
        format: "Multis",
        firestoreCollection: "battle_maison_multis",
        category: ["monotype", "Little Cup"],
    },
    {
        id: "g6sai",
        label: "Battle Maison with AI",
        generation: "Generation6",
        format: "Multis",
        firestoreCollection: "battle_maison_ai_multis",
        category: ["monotype", "Little Cup"],
    },
    {
        id: "g6r",
        label: "Battle Maison Rotation",
        generation: "Generation6",
        format: "Doubles",
        firestoreCollection: "battle_maison_rotation",
        category: ["monotype", "Little Cup"],
    },
    {
        id: "g6t",
        label: "Battle Maison Triples",
        generation: "Generation6",
        format: "Doubles",
        firestoreCollection: "battle_maison_triples",
        category: ["monotype", "Little Cup"],
    },
    {
        id: "g7s",
        label: "Battle Tree",
        generation: "Generation7",
        format: "Singles",
        firestoreCollection: "battle_tree_singles",
        category: ["monotype", "Little Cup"],
    },
    {
        id: "g7d",
        label: "Battle Tree",
        generation: "Generation7",
        format: "Doubles",
        firestoreCollection: "battle_tree_doubles",
        category: ["monotype", "Little Cup"],
    },
    {
        id: "g7m",
    label: "Battle Tree",
    generation: "Generation7",
    format: "Multis",
    firestoreCollection: "battle_tree_multis",
    category: ["monotype", "Little Cup"],
    },
    {
        id: "g7sai",
        label: "Battle Tree with AI",
        generation: "Generation7",
        format: "Multis",
        firestoreCollection: "battle_tree_ai_multis",
        category: ["monotype", "Little Cup"],
    },
    {
        id: "g8s",
        label: "Battle Tower",
        generation: "Generation8",
        format: "Singles",
        firestoreCollection: "battle_tower_singles",
        category: ["classic", "no dynamax", "monotype", "Little Cup"],
    },
    {
        id: "g8d",
        label: "Battle Tower",
        generation: "Generation8",
        format: "Doubles",
        firestoreCollection: "battle_tower_doubles",
        category: ["classic", "no dynamax", "monotype", "Little Cup"],
    },
    {
        id: "g8rs",
        label: "Restricted Sparring",
        generation: "Generation8",
        format: "Singles",
        firestoreCollection: "restricted_sparring_singles",
        category: ["Little Cup"],
    }
];
