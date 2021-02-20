const Fetch = require("node-fetch"), crypto = require("crypto");

/**
 * Return A Fake Change My Mind
 * @param {object} options Check Docs For Options.
 * @returns {Data}
 */

async function ChangeMyMind(options = {}) {
    if (!options.Message) throw new Error(`Send A Message!`);
    if (options.Message.length > 100) throw new Error(`Message Max: 100`);

    const Data = {
        embed: {
            color: options.Color || "RANDOM",
            image: { url: encodeURI(`https://vacefron.nl/api/changemymind?text=${options.Message}`) },
            timestamp: new Date()
        }
    };

    if (options.ResultOnly && options.ResultOnly === true) return {
        Result: encodeURI(`https://vacefron.nl/api/changemymind?text=${options.Message}`)
    };

    return Data;
};

/**
 * Chat With You
 * @param {object} options Check Docs For Options.
 * @returns {Data}
 */

async function Chat(options = {}) {
    if (!options.Message) throw new Error(`Send A Message!`);
    if (options.Message.length > 1900) throw new Error(`Message Max: 1900`);

    const res = await Fetch(encodeURI(`https://api.affiliateplus.xyz/api/chatbot?message=${options.Message}`)), json = await res.json();

    if (!json.message) throw new Error(`Something Went Wrong, Try Again Later!`);

    let Data = {
        embed: {
            color: options.Color || "RANDOM",
            description: json.message,
            timestamp: new Date()
        }
    };

    if (options.ResultOnly && options.ResultOnly === true) return {
        Result: json.message
    };

    return Data;
};

/**
 * Return A Fake Clyde Message
 * @param {object} options Check Docs For Options.
 * @returns {Data}
 */

async function Clyde(options = {}) {
    if (!options.Message) throw new Error(`Send A Message!`);
    if (options.Message.length > 1500) throw new Error(`Message Max: 1500`);

    const res = await Fetch(`https://nekobot.xyz/api/imagegen?type=clyde&text=${encodeURIComponent(options.Message)}`), json = await res.json();

    if (!json.message) throw new Error(`Something Went Wrong, Try Again Later!`);

    const Data = {
        embed: {
            color: options.Color || "RANDOM",
            image: { url: json.message },
            timestamp: new Date()
        }
    };

    if (options.ResultOnly && options.ResultOnly === true) return {
        Result: json.message
    };

    return Data;
};

/**
 * Return Discord.js Docs Of Your String
 * @param {object} options Check Docs For Options.
 * @returns {Data}
 */

async function DiscordJSDocs(options = {}) {
    if (!options.String) throw new Error(`Send A Message!`);
    if (options.String.length > 100) throw new Error(`String Max: 100`);

    const res = await Fetch(`https://djsdocs.sorta.moe/v2/embed?src=stable&q=${encodeURIComponent(options.String)}`), json = await res.json();

    if (!json) throw new Error(`No Result Found!`);
    json.color = options.Color || "RANDOM";

    const Data = { embed: json };

    if (options.ResultOnly && options.ResultOnly === true) return {
        Result: json
    };

    return Data
};


/**
 * Return A Gay Image
 * @param {object} options Check Docs For Options.
 * @returns {Data}
 */

async function Gay(options = {}) {
    if (!options.Image) throw new Error(`No Image (Format: PNG)`);

    const Image = encodeURI(options.Image);

    const Data = {
        embed: {
            color: options.Color || "RANDOM",
            image: { url: `https://some-random-api.ml/canvas/gay?avatar=${Image}` },
            timestamp: new Date()
        }
    };

    if (options.ResultOnly && options.ResultOnly === true) return {
        Result: `https://some-random-api.ml/canvas/gay?avatar=${Image}`
    };

    return Data;
};

/**
 * Return A Random Advice
 * @param {object} options Check Docs For Options.
 * @returns {Data}
 */

async function GetAdvice(options = {}) {
    const res = await Fetch("https://api.adviceslip.com/advice"), { slip } = await res.json();

    if (!slip.advice) throw new Error(`Something Went Wrong, Try Again Later!`);

    const Data = {
        embed: {
            color: options.Color || "RANDOM",
            description: slip.advice,
            timestamp: new Date()
        }
    };

    if (options.ResultOnly && options.ResultOnly === true) return {
        Result: slip.advice
    };

    return Data;
};

/**
 * Return A Random Animal Image (If Not Selected)
 * @param {object} options Check Docs For Options.
 * @returns {Data}
 */

async function GetAnimalImage(options = {}) {
    let Animals = ["dog", "cat", "duck", "bird", "panda", "wolf", "fox", "seal", "llama", "alpaca", "camel", "lizard"], res, json, Data;

    if (!options.Animal) {
        Animals = Animals[Math.floor(Math.random() * Animals.length)];
        res = await Fetch(`https://apis.duncte123.me/animal/${Animals.toLowerCase()}`, {
            headers: {
                "user-agent": "Mozilla/4.0 (compatible; MSIE 6.0; Windows 98; PalmSource/hspr-H102; Blazer/4.0) 16;320x320"
            }
        }), json = await res.json();

        if (!json.data.file) throw new Error(`Something Went Wrong, Try Again Later!`);

        Data = {
            embed: {
                color: options.Color || "RANDOM",
                image: { url: json.data.file },
                timestamp: new Date()
            }
        };

        if (options.ResultOnly && options.ResultOnly === true) return {
            Result: json.data.file
        };

        return Data;
    } else {
        if (!Animals.find(Ani => Ani === options.Animal.toLowerCase())) throw new Error(`Invalid Animal Provided - ${Animals.map(Ani => Ani.charAt(0).toUpperCase() + Ani.slice(1)).join(", ")}`);
        res = await Fetch(`https://apis.duncte123.me/animal/${options.Animal.toLowerCase()}`, {
            headers: {
                "user-agent": "Mozilla/4.0 (compatible; MSIE 6.0; Windows 98; PalmSource/hspr-H102; Blazer/4.0) 16;320x320"
            }
        }), json = await res.json();

        if (!json.data.file) throw new Error(`Something Went Wrong, Try Again Later!`);

        Data = {
            embed: {
                color: options.Color || "RANDOM",
                image: { url: json.data.file },
                timestamp: new Date()
            }
        };

        if (options.ResultOnly && options.ResultOnly === true) return {
            Result: json.data.file
        };

        return Data;
    };
};

/**
 * Return A Random Anime Related Image (If No Option Provided)
 * @param {object} options Check Docs For Options.
 * @returns {Data}
 */

async function GetAnimeImage(options = {}) {
    let Animes = ["neko", "nekogif", "holo", "cuddle", "foxgirl", "waifu", "smug", "baka", "slap", "poke", "feed", "pat", "hug", "kemonomimi", "kiss", "tickle"], res, json, Data;

    if (!options.Anime) {
        Animes = Animes[Math.floor(Math.random() * Animes.length)], res = await Fetch(`https://apis.duncte123.me/animal/${Animals.toLowerCase()}`), json = await res.json();

        if (!json.url) throw new Error(`Something Went Wrong, Try Again Later!`);

        Data = {
            embed: {
                color: options.Color || "RANDOM",
                image: { url: json.url },
                timestamp: new Date()
            }
        };

        if (options.ResultOnly && options.ResultOnly === true) return {
            Result: json.url
        };

        return Data;
    } else {
        Anime = options.Anime.toLowerCase();
        if (!Animes.find(Ani => Ani === Anime)) throw new Error(`Invalid Anime Provided - ${Animes.map(Ani => Ani.charAt(0).toUpperCase() + Ani.slice(1)).join(", ")}`);
        res = await Fetch(Anime == "foxgirl" ? "https://nekos.life/api/v2/img/fox_girl" : Anime == "nekogif" ? "https://nekos.life/api/v2/img/ngif" : `https://nekos.life/api/v2/img/${Anime}`);
        json = await res.json();

        if (!json.url) throw new Error(`Something Went Wrong, Try Again Later!`);

        Data = {
            embed: {
                color: options.Color || "RANDOM",
                image: { url: json.url },
                timestamp: new Date()
            }
        };

        if (options.ResultOnly && options.ResultOnly === true) return {
            Result: json.url
        };

        return Data;
    };
};

/**
 * Return A Random Fact
 * @param {object} options Check Docs For Options.
 * @returns {Data}
 */

async function GetFact(options = {}) {
    const res = await Fetch("https://nekos.life/api/v2/fact"), json = await res.json();

    if (!json.fact) throw new Error(`Something Went Wrong, Try Again Later!`);

    const Data = {
        embed: {
            color: options.Color || "RANDOM",
            description: json.fact,
            timestamp: new Date()
        }
    };

    if (options.ResultOnly && options.ResultOnly === true) return {
        Result: json.fact
    };

    return Data;
};

/**
 * Return A Random Joke
 * @param {object} options Check Docs For Options.
 * @returns {Data}
 */

async function GetJoke(options = {}) {
    const res = await Fetch("http://official-joke-api.appspot.com/random_joke"), json = await res.json();

    if (!json.setup || !json.punchline) throw new Error(`Something Went Wrong, Try Again Later!`);

    const Data = {
        embed: {
            color: options.Color || "RANDOM",
            title: json.setup,
            description: json.punchline,
            timestamp: new Date()
        }
    };

    if (options.ResultOnly && options.ResultOnly === true) return {
        Result: {
            Setup: json.setup,
            PunchLine: json.punchline
        }
    };

    return Data;
};

/**
 * Return A Random Meme
 * @param {object} options Check Docs For Options.
 * @returns {Data}
 */

async function GetMeme(options = {}) {
    const Reds = [
        "memes",
        "me_irl",
        "dankmemes",
        "comedyheaven",
        "Animemes"
    ];

    const Rads = Reds[Math.floor(Math.random() * Reds.length)], res = await Fetch(`https://www.reddit.com/r/${Rads}/random/.json`), json = await res.json();

    if (!json[0]) throw new Error("Something Went Wrong, Try Again Later!");

    const data = json[0].data.children[0].data;

    const Data = {
        embed: {
            color: options.Color || "RANDOM",
            url: `https://reddit.com${data.permalink}`,
            title: data.title,
            image: { url: data.url },
            footer: { text: `${data.ups || 0} 👍 | ${data.num_comments || 0} 💬` },
            timestamp: new Date()
        }
    };

    if (options.ResultOnly && options.ResultOnly === true) return {
        Result: {
            Url: `https://reddit.com${data.permalink}`,
            Title: data.title,
            Image: data.url,
            Upvote: data.ups,
            Comment: data.num_comments
        }
    };

    return Data;
};

/**
 * Return A Random Why
 * @param {object} options Check Docs For Options.
 * @returns {Data}
 */



/**
 * Return A Triggered Gif
 * @param {object} options Check Docs For Options.
 * @returns {Data}
 */

async function Triggered(options = {}) {
    if (!options.Image) throw new Error(`No Image (Format: png)`);

    const Image = encodeURI(options.Image);

    const Data = {
        embed: {
            color: options.Color || "RANDOM",
            image: { url: `https://some-random-api.ml/canvas/triggered?avatar=${Image}` },
            timestamp: new Date()
        }
    };

    if (options.ResultOnly && options.ResultOnly === true) return {
        Result: `https://some-random-api.ml/canvas/triggered?avatar=${Image}`
    };

    return Data;
};

/**
 * Return A Fake Trump Tweet
 * @param {object} options Check Docs For Options.
 * @returns {Data}
 */

async function TrumpTweet(options = {}) {
    if (!options.Tweet) throw new Error(`No Tweet`);

    const Tweet = encodeURIComponent(options.Tweet), res = await Fetch(`https://nekobot.xyz/api/imagegen?type=trumptweet&text=${Tweet}`), json = await res.json();

    if (!json.message) throw new Error(`Something Went Wrong, Try Again Later!`);

    const Data = {
        embed: {
            color: options.Color || "RANDOM",
            image: { url: json.message },
            timestamp: new Date()
        }
    };

    if (options.ResultOnly && options.ResultOnly === true) return {
        Result: json.message
    };

    return Data;
};

/**
 * Return A Fake Tweet
 * @param {object} options Check Docs For Options.
 * @returns {Data}
 */

async function Tweet(options = {}) {
    if (!options.Name || !options.Tweet) throw new Error(`No Name (You Will See Image If Account Is Real), Tweet`);

    const Name = encodeURI(options.Name), Tweet = encodeURI(options.Tweet), res = await Fetch(`https://nekobot.xyz/api/imagegen?type=tweet&username=${Name}&text=${Tweet}`), json = await res.json();

    if (!json.message) throw new Error(`Something Went Wrong, Try Again Later!`);

    const Data = {
        embed: {
            color: options.Color || "RANDOM",
            image: { url: json.message },
            timestamp: new Date()
        }
    };

    if (options.ResultOnly && options.ResultOnly === true) return {
        Result: json.message
    };

    return Data;
};

/**
 * Return A Wasted Image
 * @param {object} options Check Docs For Options.
 * @returns {Data}
 */

async function Wasted(options = {}) {
    if (!options.Image) throw new Error(`No Image (Format: png)`);

    const Image = encodeURI(options.Image);

    const Data = {
        embed: {
            color: options.Color || "RANDOM",
            image: { url: `https://some-random-api.ml/canvas/wasted?avatar=${Image}` },
            timestamp: new Date()
        }
    };

    if (options.ResultOnly && options.ResultOnly === true) return {
        Result: `https://some-random-api.ml/canvas/wasted?avatar=${Image}`
    };

    return Data;
};

/**
 * Return A Who Would Win
 * @param {object} options Check Docs For Options.
 * @returns {Data}
 */

async function WhoWouldWin(options = {}) {
    if (!options.Image || !options.Image2) throw new Error(`No Image, Image2`);

    const Image = encodeURI(options.Image), Image2 = encodeURI(options.Image2);
    const res = await Fetch(`https://nekobot.xyz/api/imagegen?type=whowouldwin&user1=${Image}&user2=${Image2}`), json = await res.json();

    if (!json.message) throw new Error(`Something Went Wrong, Try Again Later!`);

    const Data = {
        embed: {
            color: options.Color || "RANDOM",
            image: { url: json.message },
            timestamp: new Date()
        }
    };

    if (options.ResultOnly && options.ResultOnly === true) return {
        Result: json.message
    };

    return Data;
};

/**
 * Return A Fake Youtube Comment With 2k Likes & White Theme
 * @param {object} options Check Docs For Options.
 * @returns {Data}
 */

async function YoutubeComment(options = {}) {
    if (!options.Name || !options.Image || !options.Comment) throw new Error(`Please Give All The Following Things:\nName, Image (Format: png), Comment`);

    const Name = encodeURIComponent(options.Name), Image = encodeURIComponent(options.Image), Comment = encodeURIComponent(options.Comment);

    const Data = {
        embed: {
            color: options.Color || "RANDOM",
            image: { url: `https://some-random-api.ml/canvas/youtube-comment?avatar=${Image}&username=${Name}&comment=${Comment}` },
            timestamp: new Date()
        }
    };

    if (options.ResultOnly && options.ResultOnly === true) return {
        Result: `https://some-random-api.ml/canvas/youtube-comment?avatar=${Image}&username=${Name}&comment=${Comment}`
    };

    return Data;
};

module.exports = {
 ChangeMyMind, Chat, Clyde, DiscordJSDocs, Gay, GetAdvice, GetAnimalImage, GetAnimeImage, GetFact, GetJoke, GetMeme, GetWhy, YoutubeComment, Triggered, WhoWouldWin, Tweet, TrumpTweet, Wasted
};
