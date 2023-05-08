const IMAGES = [
  {
    url: 'https://images.unsplash.com/photo-1528712306091-ed0763094c98?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80', alt: 'image by Kevin McCutcheon'
  },
  {
    url: 'https://images.unsplash.com/photo-1551218808-94e220e084d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80', alt: 'image by Jonathan Borba'
  },
  {
    url: 'https://images.unsplash.com/photo-1549590143-d5855148a9d5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80',
    alt: 'image by Mae Mu'
  },
  {
    url: 'https://images.unsplash.com/photo-1504387828636-abeb50778c0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
    alt: 'image by Taylor Kiser'
  },
  {
    url: 'https://images.unsplash.com/photo-1540420828642-fca2c5c18abe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=982&q=80',
    alt: 'image by Nadine Primeau'
  },
  {
    url: 'https://images.unsplash.com/photo-1482049016688-2d3e1b311543?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1010&q=80',
    alt: 'image by Joseph Gonzalez'
  },
  {
    url: 'https://images.unsplash.com/photo-1606787364406-a3cdf06c6d0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
    alt: 'image by Jimmy Dean'
  },
  {
    url: 'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80',
    alt: 'image by Mariana Medvedeva'
  }
]

export function getRandomImage () {
  return IMAGES[Math.floor(Math.random() * IMAGES.length)]
}
