import type { Painting } from '@/types/painting'
import type { Artist } from '@/types/artist'
import { mockPaintings } from '@/data/painting'

//imgpath
import artist1 from '@/assets/img/artistPic/ClaudeMonet.jpg'
import artist2 from '@/assets/img/artistPic/EdouardManet.jpg'
import artist3 from '@/assets/img/artistPic/paul.jpg'
import artist4 from '@/assets/img/artistPic/Renoir.jpg'
import artist5 from '@/assets/img/artistPic/marryCassatt.jpg'
import artist6 from '@/assets/img/artistPic/vanGogh.jpg'

export const mockArtists: Artist[] = [
  {
    id: 1,
    profileSrc: artist1 ,
    name: 'Claude Monet',
    birthDate: new Date('1840-11-14'),
    deathDate: new Date('1926-12-05'),
    biography: 'Claude Monet was a pioneering artist whose innovative techniques and dedication to capturing the essence of nature made him one of the most significant figures in art history. His mastery of color, light, and brushwork, particularly evident in his impressionist works, continues to inspire artists and captivate audiences worldwide. Monet\'\s legacy as a visionary painter endures, leaving an indelible mark on the world of art and culture.',
    rank: 'The Legend',
    Paintings: [1,2,3]
  },
  {
    id: 2,
    profileSrc: artist2 ,
    name: 'Edouard Monet',
    birthDate: new Date('1832-01-23'),
    deathDate: new Date('1883-04-30'),
    biography: 'Édouard Monet was a French painter, closely related to Claude Monet.',
    rank: 'The Legend',
    Paintings: []
  },{
    id: 3,
    profileSrc: artist3 ,
    name: 'Paul Cézanne',
    birthDate: new Date('1839-01-19'),
    deathDate: new Date('1906-10-22'),
    biography: 'Paul Cézanne was a French Post-Impressionist painter.',
    rank: 'The Legend',
    Paintings: []
  },{
     id: 4,
    profileSrc: artist4,
    name: 'Pierre-Auguste Renoir',
    birthDate: new Date('1841-02-25'),
    deathDate: new Date('1919-12-03'),
    biography: 'Pierre-Auguste Renoir was a French artist, one of the leading painters in the development of the Impressionist style.',
    rank: 'The Legend',
    Paintings: []
  },{
    id: 5,
    profileSrc: artist5,
    name: 'Mary Cassatt',
    birthDate: new Date('1844-05-22'),
    deathDate: new Date('1926-06-14'),
    biography: 'Mary Cassatt was an American painter and printmaker, born in Pennsylvania.',
    rank: 'The Legend',
    Paintings: []
  },{
    id: 6,
    profileSrc: artist6 ,
    name: 'Vincent Willem van Gogh',
    birthDate: new Date('1853-03-30'),
    deathDate: new Date('1890-07-29'),
    biography: 'Vincent van Gogh was a Dutch Post-Impressionist painter, one of the most influential figures in the history of Western art.',
    rank: 'The Legend',
    Paintings: []
  }
]
