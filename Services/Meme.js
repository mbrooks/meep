const memes = [
  {
    tag: 'hi',
    words: ['hey', 'hi', 'hello', 'hola'],
    images: [
      'https://s3.amazonaws.com/comedy-hackathon/images/hay.jpg',
      'https://s3.amazonaws.com/comedy-hackathon/images/hey-sexy.jpg',
    ],
  },

  {
    tag: 'sup',
    words: ['whats', 'sup'],
    images: [
      'https://s3.amazonaws.com/comedy-hackathon/images/whats-up.jpg',
      'https://s3.amazonaws.com/comedy-hackathon/images/waddup-gangsta.jpg',
      'https://s3.amazonaws.com/comedy-hackathon/images/waddup-doe.JPG',
    ],
  },

  {
    tag: 'whoa',
    words: ['whoa', 'wow', 'woah'],
    images: [
      'https://s3.amazonaws.com/comedy-hackathon/images/cat-whoa.jpg',
      'https://s3.amazonaws.com/comedy-hackathon/images/meep.jpg',
    ],
  },

  {
    tag: 'what',
    words: ['what', 'huh'],
    images: [
      'https://s3.amazonaws.com/comedy-hackathon/images/what.jpg',
      'https://s3.amazonaws.com/comedy-hackathon/images/wait-what.jpg',
    ],
  },

  {
    tag: 'cool',
    words: ['cool', 'sweet', 'awesome', 'yay'],
    images: [
      'https://s3.amazonaws.com/comedy-hackathon/images/thats-whats-up.jpg',
      'https://s3.amazonaws.com/comedy-hackathon/images/much-rejoice.jpg',
    ],
  },

  {
    tag: 'haha',
    words: ['haha', 'lol'],
    images: [
      'https://s3.amazonaws.com/comedy-hackathon/images/yao-funny.jpg',
      'https://s3.amazonaws.com/comedy-hackathon/images/funny-austin.jpg',
    ],
  },

  {
    tag: 'lmao',
    words: ['lmfao', 'rofl', 'lmao'],
    images: [
      'https://s3.amazonaws.com/comedy-hackathon/images/gonna-pee.jpg',
    ],
  },

  {
    tag: 'okay',
    words: ['okay', 'ok'],
    images: [
      'https://s3.amazonaws.com/comedy-hackathon/images/alrighty-then.jpg',
    ],
  },

  {
    tag: 'k',
    words: ['k'],
    images: [
      'https://s3.amazonaws.com/comedy-hackathon/images/k-you.jpg',
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
    const words = text.toLowerCase().replace(/[^0-9a-z\s]/gi, '').split(' ');
    const firstWord = words.find(word => Object.keys(wordMappings).includes(word));

    if (!firstWord) {
      return null;
    }

    const tag = wordMappings[firstWord];
    return this.findRandomImageByTag(tag);
  },
};

export default MemeService;
