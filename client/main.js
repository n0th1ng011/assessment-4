const complimentBtn = document.getElementById("complimentButton")
const fortuneBtn = document.getElementById('fortuneButton')
const philBtn = document.getElementById('philButton')
const quoteBtn = document.getElementById('quoteButton')
const dogBtn = document.getElementById('dogButton')
const danceBtn = document.getElementById('danceButton')

const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};
const getFortune = () => {
    axios.get("http://localhost:4000/api/fortunes/")
        .then(res => {
            const data = res.data;
            alert(data)
        });
};
const getPhilosophy = () => {
    axios.get("http://localhost:4000/api/philosophy")
        .then(res => {
            const data = res.data;
            alert(data)
        })
};
const getQuote = () => {
    axios.get("http://localhost:4000/api/quotes")
        .then(res => {
            const data = res.data;
            alert(data)
        })
};
const getDog = () => {
    axios.get("http://localhost:4000/api/dogs")
        .then(res => {
            const data = res.data
            alert(data)
        })
};
const getDown = () => {
    axios.get("http://localhost/api/dances")
}

complimentBtn.addEventListener('click', getCompliment)
fortuneBtn.addEventListener('click', getFortune)
philBtn.addEventListener('click', getPhilosophy)
quoteBtn.addEventListener('click', getQuote)
dogBtn.addEventListener('click', getDog)
danceBtn.addEventListener('click', getDown)