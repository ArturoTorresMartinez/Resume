var quotes = [
	'\"Success is nothing more than a few simple disciplines, practiced every day.\"  \r -Jim Rohn',
    '\"Learn how to be happy with what you have while you pursue all that you want.\"  \r -Jim Rohn',
    '\"Successful people have libraries. The rest have big screen TVs.\"  \r -Jim Rohn',
    '\"If you\'re going through hell, keep going.\"  \r -Winston Churchill',
    '\"Don\'t wish it were easier; wish you were better.\"  \r -Jim Rohn',
    '\"Stop chasing the money and start chasing the passion.\"  \r -Tony Hsieh',
    '\"Success is walking from failure to failure with no loss of enthusiasm.\"  \r -Winston Churchill',
    '\"If you really want to do something, you\'ll find a way. If you don\'t, you\'ll find an excuse.\"  \r -Jim Rohn',
    '\"The secret of success is to do the common thing uncommonly well.\"  \r -John D. Rockefeller Jr.',
    '\"Don\’t let yesterday take up too much of today.\"  \r -Will Rogers',
    '\"Whether You Think You Can Or Think You Can\’t, You\’re Right.\"  \r -Henry Ford'
]

	// Generate Quote

	function newQuote(){
		var ramdomNumber = Math.floor(Math.random() * (quotes.length));
		document.getElementById('quoteDisplay').innerHTML = quotes[ramdomNumber];
	}

	