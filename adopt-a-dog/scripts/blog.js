const content =
[
	{
		headline: 'Traveling With Your Dog',
		body: 'Taking your dog along can make the family vacation more fun for everyone, if you plan carefully. Here are some trip tips to make traveling with your dog enjoyable.',
		image: 'images/wyatt-ryan-367017-unsplash.jpg',
		alt: 'description'
	},
	{
		headline: 'How to Walk Multiple Dogs',
		body: 'You juggle multiple dishes at meal times, pull double duty with training sessions, and more dogs always means more mischief. And while they enjoy romping around the backyard with each other, walking your dogs is still an important part of their daily exercise routine.',
		image: 'images/matt-nelson-259365-unsplash.jpg',
		alt: 'description'
	},
	{
		headline: 'Teach Your Dog to Fetch',
		body: 'For training fetch, the tools you will need are an appropriate amount of tasty treats, a clicker or a marker word, and plenty of fun toys. For teaching fetch, we are going to use what trainers call “shaping.” Shaping means allowing your dog to figure out how to perform a behavior with minimal help from you.',
		image: 'images/patrick-hendry-221863-unsplash.jpg',
		alt: 'description'
	}
];

let blogPosts = document.getElementsByClassName('adopt-intro');
for(let i=0; i<blogPosts.length ; i++){
	blogPosts[i].getElementsByTagName('h3')[0].innerHTML = content[i].headline;
	blogPosts[i].getElementsByTagName('img')[0].src = content[i].image;
	blogPosts[i].getElementsByTagName('img')[0].alt = content[i].alt;
	blogPosts[i].getElementsByTagName('div')[0].innerHTML = content[i].body;
}
