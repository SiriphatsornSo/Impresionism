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
  year: new Date('1875'),
  picScr: paintingA11,
  tecnique: 'oil painting , Impasto , En Plein Air , Loose Brushwork ,Dynamic Composition',
  location: 'National Gallery of Art, Washington D.C.',
  description: 'The painting depicts Monet\'s wife, Camille, and their son Jean. Camille is shown standing in a sunlit meadow, holding a parasol to shield herself from the sun. Her son, Jean, is depicted holding her hand. The composition captures a sense of movement and spontaneity, characteristic of Monet\'s impressionist style.'
},
{
  id: 2,
  name: 'Impression, Sunrise',
  artist: 'Claude Monet',
  year: new Date('1872'),
  picScr: paintingA12,
  tecnique: 'Oil on Canvas',
  location: 'Musée Marmottan Monet, Paris',
  description: 'The painting that gave Impressionism its name, depicting a sunrise over the port of Le Havre.'
},
{
  id: 3,
  name: "The Artist's Garden at Giverny",
  artist: 'Claude Monet',
  year: new Date('1900'),
  picScr: paintingA13,
  tecnique: 'Oil on Canvas',
  location: 'Musée d’Orsay, Paris',
  description: 'A beautiful depiction of Monet’s flower-filled garden in Giverny.'
}
]
