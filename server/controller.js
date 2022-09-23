module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },
    getFortune:  (req, res) => {
        const fortunes = ["Today is a gift, that is why we call it the present", "Let it be", "A plesent surprise is waiting or you", "All your hard work will soon pay off", "An in of time is an inch of gold"];
      
        let randomIndex = Math.floor(Math.random() * fortunes.length);
        let randomFortunes = fortunes[randomIndex];
      
        res.status(200).send(randomFortunes);
    },
    getPhilosophy: (req, res) => {
        const philosophy = ["It is what it is", "I think, therefor I am", "People don't have ideas, Ideas have people"];
      
        let randomIndex = Math.floor(Math.random() * philosophy.length);
        let randomPhilosphy = philosophy[randomIndex];
      
        res.status(200).send(randomPhilosphy);
    },
    getQuote: (req, res) => {
        const quotes = ["We haven't done anything yet!", "Where's all the rum?", "You think the darkness is your ally"];
      
        let randomIndex = Math.floor(Math.random() * quotes.length);
        let randomQuotes = quotes[randomIndex];
      
        res.status(200).send(randomQuotes);
    },
    getDog: (req, res) => {
        const dogs = ["Babu", "Bigingi", "Lulu", "Josh"];
      
        let randomIndex = Math.floor(Math.random() * dogs.length);
        let randomDogs = dogs[randomIndex];
      
        res.status(200).send(randomDogs);
    },
    getDown: (req, res) => {
        const dances = ["Floss", "Salsa", "Tap", "Interpretive"];
      
        let randomIndex = Math.floor(Math.random() * dances.length);
        let randomDances = dances[randomIndex];
      
        res.status(200).send(randomDances);
    }

}