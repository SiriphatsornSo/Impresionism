import type { Artist } from '@/types/artist'
import type {User} from '@/types/user'

export interface Painting {
  id : number
  name : string
  artist : string
  year : Date
  picScr : string
  tecnique? : string
  location? : string
  description :string
}
