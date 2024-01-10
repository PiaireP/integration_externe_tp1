export type LegumesSeasonCategory = 'printemps' | 'hiver' | 'ete' | 'automne';

export interface Legume {
    id: number,
    name: string,
    color: string,
    season: LegumesSeasonCategory
}