define(['pipAPI', 'https://stefanoand.github.io/exp1/codice2.js'], function(APIConstructor, stiatExtension){
	
	var API = new APIConstructor();
		  return stiatExtension({
		  category : { 
		    name : 'Femminismo', //Will appear in the data.
		    title : {
		      media : {word : 'Femminismo'}, //Name of the category presented in the task.
		      css : {color:'#31b404','font-size':'2em'}, //Style of the category title.
		      height : 7 //Used to position the "Or" in the combined block.
		    }, 
		    media : [ //Stimuli content as PIP's media objects
    		    	{image : 'paritadigenere.jpg'}, 
    			{image : 'paritadigenere.jpg'}, 
    			{image : 'paritadigenere.jpg'}, 
    			{image : 'paritadigenere.jpg'}, 
    			{image : 'paritadigenere.jpg'}, 
    			{image : 'paritadigenere.jpg'}
		    ], 
		    //Stimulus css (style)
		    css : {color:'#31b404','font-size':'3em'}
		  },	

  		attribute1 : 
			{
			name : 'Spiacevole', //Attribute label
			title : {
				media : {word : 'Negativo'}, //Name of the category presented in the task.
				css : {color:'#31b404','font-size':'2em'}, //Style of the category title.
				height : 7 //Used to position the "Or" in the combined block.
			}, 
			media : [ //Stimuli
				{word: 'Odio'},
				{word: 'Antipatia'},
				{word: 'Rabbia'},
				{word: 'Disastro'},
				{word: 'Schifo'},
				{word: 'Omicidio'}
			], 
			//Can change color and size of the targets here.
			css : {color:'#31b404','font-size':'3em'}
			},
		attribute2 : 
			{
			name : 'Piacevole', //Attribute label
			title : {
				media : {word : 'Positivo'}, //Name of the category presented in the task.
				css : {color:'#31b404','font-size':'2em'}, //Style of the category title.
				height : 7 //Used to position the "Or" in the combined block.
			}, 
			media : [ //Stimuli
				{word: 'Allegria'},
				{word: 'Amore'},
				{word: 'Felicita'},
				{word: 'Simpatia'},
				{word: 'Pace'},
				{word: 'Paradiso'}
			], 
			//Can change color and size of the targets here.
			css : {color:'#31b404','font-size':'3em'}
			},

  base_url : {//Where are your images at?
    image : 'https://stefanoand.github.io/exp1/img/'
  }}
  );
  });
