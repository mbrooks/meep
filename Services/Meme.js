const memes = [
  {
    tag: 'hi',
    words: ['hey', 'hi', 'hello'],
    images: [
      'https://s3.amazonaws.com/comedy-hackathon/images/hay.jpg',
      'https://s3.amazonaws.com/comedy-hackathon/images/hey-sexy.jpg',
    ],
  },
];

const wordMappings = {};
memes.forEach((meme) => {
  meme.words.forEach((word) => {
    wordMappings[word] = meme.tag;
  });
});

const MemeService = {
  findAll() {
    return memes;
  },

  findRandomImageByTag(tag) {
    const item = memes.find(meme => meme.tag === tag);
    return item.images[Math.floor(Math.random() * item.images.length)];
  },

  getMemeImageFromText(text) {
    const words = text.toLowerCase().replace(/[^0-9a-z]/gi, '').split(' ');
    const firstWord = words.find(word => wordMappings[word]);

    if (!firstWord) {
      return null;
    }

    const tag = wordMappings[firstWord];
    return this.findRandomImageByTag(tag);
  },
};

export default MemeService;
