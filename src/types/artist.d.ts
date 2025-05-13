import type { Painting } from '@/types/painting'

export interface Artist {
  id: number
  profileSrc : string
  name: string
  birthDate: Date
  deathDate: Date
  biography : string
  rank: 'The Legend'
  Paintings :Painting[]
}
