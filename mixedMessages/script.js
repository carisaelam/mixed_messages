//List of random song topics
const topics = ['love and heartbreak', 'the beauty of nature', 'facing challenges', 'new romance', 'self-discovery', 'social change', 'childhood memories', 'adventure', 'friendship', 'time and aging']; 

//Function to select a random song topic
const randomTopic = topics[Math.floor(Math.random() * topics.length)];

//List of random song tempi
const tempo = ['slow', 'medium slow', 'medium fast', 'fast', 'very fast'];

//Function to select a random song tempo
const randomTempo = tempo[Math.floor(Math.random() * tempo.length)];


//List of random song keys
const key = ['Am', 'C', 'D', 'Eb', 'Bb', 'Em', 'G', 'Dm'];

//Function to select a random song key
const randomKey = key[Math.floor(Math.random() * key.length)];



console.log('Your song should be about ' + randomTopic + '.');
console.log('It should have a ' + randomTempo + ' tempo.');
console.log('It should be in the key of ' + randomKey + '.');
