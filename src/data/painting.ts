import type { Artist } from '@/types/artist'
import type { User } from '@/types/user'
import type { Painting } from '@/types/painting'
import { mockArtists } from '@/data/artists'

//import img
import paintingA11 from '@/assets/img/painting/paintingA11.jpg'
import paintingA12 from '@/assets/img/painting/paintingA12.jpg'
import paintingA13 from '@/assets/img/painting/paintingA13.jpg'


export const mockPaintings: Painting[] = [{
  id: 1,
  name: 'Woman with a Parasol',
  artist: 'Claude Monet',
  year: new Date(1875),
  picScr: paintingA11,
  tecnique: 'Oil on Canvas',
  location: 'National Gallery of Art, Washington D.C.',
  description: 'A breezy outdoor portrait of Monet’s wife and son in a sunlit field.'
},
{
  id: 2,
  name: 'Impression, Sunrise',
  artist: 'Claude Monet',
  year: new Date(1872),
  picScr: paintingA12,
  tecnique: 'Oil on Canvas',
  location: 'Musée Marmottan Monet, Paris',
  description: 'The painting that gave Impressionism its name, depicting a sunrise over the port of Le Havre.'
},
{
  id: 3,
  name: "The Artist's Garden at Giverny",
  artist: 'Claude Monet',
  year: new Date(1900),
  picScr: paintingA13,
  tecnique: 'Oil on Canvas',
  location: 'Musée d’Orsay, Paris',
  description: 'A beautiful depiction of Monet’s flower-filled garden in Giverny.'
}
]
