var ViewModel = function () {
	var self = this;
	this.wordList = ["the","of","to","and","a","in","is","it","you","that","he","was","for","on","are","with","as", "his","they","be","at","one","have","this","from","or","had","by","hot","word","but","what","some","we","can","out","other","were","all","there","when","up","use","your","how","said","an","each","she","which","do","their","time","if","will","way","about","many","then","them","write","would","like","so","these","her","long","make","thing","see","him","two","has","look","more","day","could","go","come","did","number","sound","no","most","people","my","over","know","water","than","call","first","who","may","down","side","been","now","find","any","new","work","part","take","get","place","made","live","where","after","back","little","only","round","man","year","came","show","every","good","me","give","our","under","name","very","through","just","form","sentence","great","think","say","help","low","line","differ","turn","cause","much","mean","before","move","right","boy","old","too","same","tell","does","set","three","want","air","well","also","play","small","end","put","home","read","hand","port","large","spell","add","even","land","here","must","big","high","such","follow","act","why","ask","men","change","went","light","kind","off","need","house","picture","try","us","again","animal","point","mother","world","near","build","self","earth","father","head","stand","own","page","should","country","found","answer","school","grow","study","still","learn","plant","cover","food","sun","four","between","state","keep","eye","never","last","let","thought","city","tree","cross","farm","hard","start","might","story","saw","far","sea","draw","left","late","run","while","press","close","night","real","life","few","north","open","seem","together","next","white","children","begin","got","walk","example","ease","paper","group","always","music","those","both","mark","often","letter","until","mile","river","car","feet","care","second","book","carry","took","science","eat","room","friend","began","idea","fish","mountain","stop","once","base","hear","horse","cut","sure","watch","color","face","wood","main","enough","plain","girl","usual","young","ready","above","ever","red","list","though","feel","talk","bird","soon","body","dog","family","direct","pose","leave","song","measure","door","product","black","short","numeral","class","wind","question","happen","complete","ship","area","half","rock","order","fire","south","problem","piece","told","knew","pass","since","top","whole","king","space","heard","best","hour","better","true","during","hundred","five","remember","step","early","hold","west","ground","interest","reach","fast","verb","sing","listen","six","table","travel","less","morning","ten","simple","several","vowel","toward","war","lay","against","pattern","slow","center","love","person","money","serve","appear","road","map","rain","rule","govern","pull","cold","notice","voice","unit","power","town","fine","certain","fly","fall","lead","cry","dark","machine","note","wait","plan","figure","star","box","noun","field","rest","correct","able","pound","done","beauty","drive","stood","contain","front","teach","week","final","gave","green","oh","quick","develop","ocean","warm","free","minute","strong","special","mind","behind","clear","tail","produce","fact","street","inch","multiply","nothing","course","stay","wheel","full","force","blue","object","decide","surface","deep","moon","island","foot","system","busy","test","record","boat","common","gold","possible","plane","stead","dry","wonder","laugh","thousand","ago","ran","check","game","shape","equate","hot","miss","brought","heat","snow","tire","bring","yes","distant","fill","east","paint","language","among","grand","ball","yet","wave","drop","heart","am","present","heavy","dance","engine","position","arm","wide","sail","material","size","vary","settle","speak","weight","general","ice","matter","circle","pair","include","divide","syllable","felt","perhaps","pick","sudden","count","square","reason","length","represent","art","subject","region","energy","hunt","probable","bed","brother","egg","ride","cell","believe","fraction","forest","sit","race","window","store","summer","train","sleep","prove","lone","leg","exercise","wall","catch","mount","wish","sky","board","joy","winter","sat","written","wild","instrument","kept","glass","grass","cow","job","edge","sign","visit","past","soft","fun","bright","gas","weather","month","million","bear","finish","happy","hope","flower","clothe","strange","gone","jump","baby","eight","village","meet","root","buy","raise","solve","metal","whether","push","seven","paragraph","third","shall","held","hair","describe","cook","floor","either","result","burn","hill","safe","cat","century","consider","type","law","bit","coast","copy","phrase","silent","tall","sand","soil","roll","temperature","finger","industry","value","fight","lie","beat","excite","natural","view","sense","ear","else","quite","broke","case","middle","kill","son","lake","moment","scale","loud","spring","observe","child","straight","consonant","nation","dictionary","milk","speed","method","organ","pay","age","section","dress","cloud","surprise","quiet","stone","tiny","climb","cool","design","poor","lot","experiment","bottom","key","iron","single","stick","flat","twenty","skin","smile","crease","hole","trade","melody","trip","office","receive","row","mouth","exact","symbol","die","least","trouble","shout","except","wrote","seed","tone","join","suggest","clean","break","lady","yard","rise","bad","blow","oil","blood","touch","grew","cent","mix","team","wire","cost","lost","brown","wear","garden","equal","sent","choose","fell","fit","flow","fair","bank","collect","save","control","decimal","gentle","woman","captain","practice","separate","difficult","doctor","please","protect","noon","whose","locate","ring","character","insect","caught","period","indicate","radio","spoke","atom","human","history","effect","electric","expect","crop","modern","element","hit","student","corner","party","supply","bone","rail","imagine","provide","agree","thus","capital","chair","danger","fruit","rich","thick","soldier","process","operate","guess","necessary","sharp","wing","create","neighbor","wash","bat","rather","crowd","corn","compare","poem","string","bell","depend","meat","rub","tube","famous","dollar","stream","fear","sight","thin","triangle","planet","hurry","chief","colony","clock","mine","tie","enter","major","fresh","search","send","yellow","gun","allow","print","dead","spot","desert","suit","current","lift","rose","continue","block","chart","hat","sell","success","company","subtract","event","particular","deal","swim","term","opposite","wife","shoe","shoulder","spread","arrange","camp","invent","cotton","born","determine","quart","nine","truck","noise","level","chance","gather","shop","stretch","throw","shine","property","column","molecule","select","wrong","gray","repeat","require","broad","prepare","salt","nose","plural","anger","claim","continent","oxygen","sugar","death","pretty","skill","women","season","solution","magnet","silver","thank","branch","match","suffix","especially","fig","afraid","huge","sister","steel","discuss","forward","similar","guide","experience","score","apple","bought","led","pitch","coat","mass","card","band","rope","slip","win","dream","evening","condition","feed","tool","total","basic","smell","valley","nor","double","seat","arrive","master","track","parent","shore","division","sheet","substance","favor","connect","post","spend","chord","fat","glad","original","share","station","dad","bread","charge","proper","bar","offer","segment","slave","duck","instant","market","degree","populate","chick","dear","enemy","reply","drink","occur","support","speech","nature","range","steam","motion","path","liquid","log","meant","quotient","teeth","shell","neck"];
	this.wordsDoneOnCurrentLine = 0
	this.errorWords = 0
	this.correctWords = 0
	this.currentWordCI = true;
	this.started = false;
	this.countdownInterval;
	this.time = ko.observable(60);
	this.line1 = ko.observableArray();
	this.line2 = ko.observableArray();
	this.currentInput = ko.observable();
	this.generate_line = function() {
		var wordArray = []
		for (var i = 0; i < 10; i++) {
			var randomItem = this.wordList[Math.floor(Math.random()*this.wordList.length)];
			wordArray.push(randomItem)
		}
		return wordArray
	}
	this.line1(this.generate_line());
	this.line2(this.generate_line());

	this.highlight_word = function(){
		if (!self.started) {
			jQuery(".line1 span").eq(self.wordsDoneOnCurrentLine).addClass("text-info");
		}
		else {
			jQuery(".line1 span").eq(self.wordsDoneOnCurrentLine - 1).removeClass("text-info");
			jQuery(".line1 span").eq(self.wordsDoneOnCurrentLine).addClass("text-info");
		}
		
	}
	this.countdown = function() {
		self.time(self.time() - 1);
		if (self.time() === 0) {
			jQuery(".line1 span").removeClass("text-info text-success text-danger");
			self.currentInput('');
			jQuery("input").attr("disabled", "disabled");
			clearInterval(self.countdownInterval);
			var $html = $('<div class="row" id="result"><div class="card col-7 "><div class="card-body"><h5 class="card-title">Score</h5><div class="card-text">WPM: ' + self.correctWords + '<br/>Errors: ' + self.errorWords + '</div></div></div></div>');
			jQuery("#main").append($html);
		}
	}
	this.currentInput.subscribe(function(newValue) {
		if(!self.started)
        {
            self.countdownInterval = setInterval(self.countdown, 1000);
            self.started = true;
        }
		var currentWord = self.line1()[self.wordsDoneOnCurrentLine];
		if (newValue.slice(-1) == ' ') {
			if (currentWord === newValue.slice(0, -1)) {
				jQuery(".line1 span").eq(self.wordsDoneOnCurrentLine).addClass("text-success");
				self.correctWords += 1;
			}
			else {
				jQuery(".line1 span").eq(self.wordsDoneOnCurrentLine).addClass("text-danger");
				self.errorWords += 1;
			}
			self.wordsDoneOnCurrentLine += 1;
			if (self.wordsDoneOnCurrentLine === 10) {
				jQuery(".line1 span").removeClass("text-info text-success text-danger");
				self.line1(self.line2());
				self.line2(self.generate_line());
				self.wordsDoneOnCurrentLine = 0;
			}
			self.highlight_word();
			self.currentWordCI = true
			self.currentInput('');
		}
		else {
			if (currentWord.indexOf(newValue) === -1) {
				jQuery(".line1 span").eq(self.wordsDoneOnCurrentLine).addClass("text-danger");
				self.currentWordCI = false;
			}
			else {
				if (self.currentWordCI === false) {
					jQuery(".line1 span").eq(self.wordsDoneOnCurrentLine).removeClass("text-danger");
					self.currentWordCI = true;
				}
			}
		}
	});
	this.restart = function() {
		self.currentInput('');
		jQuery("input").val('');
		jQuery(".line1 span").removeClass("text-info text-success text-danger");
		jQuery("#result").remove();
		self.line1(self.generate_line());
		self.line2(self.generate_line());
		self.wordsDoneOnCurrentLine = 0
		self.errorWords = 0
		self.correctWords = 0
		self.currentWordCI = true;
		self.started = false;
		clearInterval(self.countdownInterval);
		self.countdownInterval;
		self.time(60);
		jQuery("input").removeAttr("disabled");
		jQuery(".added").remove();
		self.highlight_word();
	}
} 
var viewmodel = new ViewModel();
ko.applyBindings(viewmodel);
viewmodel.highlight_word();