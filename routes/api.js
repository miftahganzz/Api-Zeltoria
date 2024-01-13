__path = process.cwd()

// module
var express = require('express');
var fetch = require('node-fetch');
var cheerio = require('cheerio');
var request = require('request');
var api = require("caliph-api");
var lolkilScraper = require('lolkil-scraper')
var router  = express.Router();
var fs = require('fs');
var { search } = require('scraper-jsc')
var { news } = require('scraper-jsc')
var { stalk } = require('scraper-jsc')
var { unsplash } = require('@xct007/frieren-scraper')
var { danbooru } = require('@xct007/frieren-scraper')
var { music } = require('@xct007/frieren-scraper')
var { komikuId } = require('@xct007/frieren-scraper')
var { otakudesu } = require('@xct007/frieren-scraper')
var { anoboy } = require('@xct007/frieren-scraper')
var { doujindesu } = require('@xct007/frieren-scraper')
var { 
ChatGpt, 
animedif, 
attp } = require('../lib/scrape');
// Lib
var { fetchJson, getBuffer } = require('../lib/myfunc');
// Settings
const author = "Zeltoria"

// Mess err
mess = {
    error: {
        status: false,
        message: 'Error, Service Unavaible',
        maintanied_by: 'Zeltoria'
    },
    noturl: {
    	status: false,
    	message: 'Error, Invalid Url',
    	maintanied_by: 'Zeltoria'
    },
    notquery: {
    	status: false,
    	code: 403,
    	message: 'Error, Invalid Query',
    	maintanied_by: 'Zeltoria'
    }
}
// Features
// ANIMEHHHHHHHHHHHHHHHHHHHH
router.get('/animanga/komikuid', async (req, res, next) => {
	var query = req.query.q
	if (!query) return res.json(mess.notquery)
	let data = await komikuId.search(query)
	res.json({
	status: true,
	author: `${author}`,
	result: data
	})
})
router.get('/animanga/komikuid-detail', async (req, res, next) => {
	var url = req.query.url
	if (!url) return res.json(mess.noturl)
	let data = await komikuId.search(url)
	res.json({
	status: true,
	author: `${author}`,
	result: data
	})
})
router.get('/animanga/komikuid-latest', async (req, res, next) => {
	let data = await komikuId.latest();
	res.json({
	status: true,
	author: `${author}`,
	result: data
	})
})
router.get('/animanga/otakudesu', async (req, res, next) => {
	var query = req.query.q
	if (!query) return res.json(mess.notquery)
	let data = await otakudesu.search(query)
	res.json({
	status: true,
	author: `${author}`,
	result: data
	})
})
router.get('/animanga/otakudesu-detail', async (req, res, next) => {
	var url = req.query.url
	if (!url) return res.json(mess.noturl)
	let data = await otakudesu.detail(url)
	res.json({
	status: true,
	author: `${author}`,
	result: data
	})
})
router.get('/animanga/otakudesu-latest', async (req, res, next) => {
	let data = await otakudesu.latest();
	res.json({
	status: true,
	author: `${author}`,
	result: data
	})
})
router.get('/animanga/doujindesu', async (req, res, next) => {
	var query = req.query.q
	if (!query) return res.json(mess.notquery)
	let data = await doujindesu.search(query)
	res.json({
	status: true,
	author: `${author}`,
	result: data
	})
})
router.get('/animanga/doujindesu-detail', async (req, res, next) => {
	var url = req.query.url
	if (!url) return res.json(mess.noturl)
	let data = await doujindesu.detail(url)
	res.json({
	status: true,
	author: `${author}`,
	result: data
	})
})
router.get('/animanga/doujindesu-latest', async (req, res, next) => {
	let data = await doujindesu.latest();
	res.json({
	status: true,
	author: `${author}`,
	result: data
	})
})
router.get('/animanga/anoboy', async (req, res, next) => {
	var query = req.query.q
	if (!query) return res.json(mess.notquery)
	let data = await anoboy.search(query)
	res.json({
	status: true,
	author: `${author}`,
	result: data
	})
})
router.get('/animanga/anoboy-detail', async (req, res, next) => {
	var url = req.query.url
	if (!url) return res.json(mess.noturl)
	let data = await anoboy.detail(url)
	res.json({
	status: true,
	author: `${author}`,
	result: data
	})
})
router.get('/animanga/anoboy-latest', async (req, res, next) => {
	let data = await anoboy.latest();
	res.json({
	status: true,
	author: `${author}`,
	result: data
	})
})
//-----------------------------------------------------------------

// Downloader
router.get('/download/facebook', async (req, res, next) => {
	var url = req.query.url
	if (!url) return res.json(mess.noturl)
	let data = await fetchJson(`https://xorizn-downloads.vercel.app/api/downloads/facebook?url=${url}`)
	res.json({
	status: true,
	author: `${author}`,
	result: data.result
	})
})
router.get('/download/mediafire', async (req, res, next) => {
	var url = req.query.url
	if (!url) return res.json(mess.noturl)
	let data = await fetchJson(`https://xorizn-downloads.vercel.app/api/downloads/mediafire?url=${url}`)
	res.json({
	status: true,
	author: `${author}`,
	result: data.result
	})
})
router.get('/download/tiktok', async (req, res, next) => {
	var url = req.query.url
	if (!url) return res.json(mess.noturl)
	let data = await fetchJson(`https://xorizn-downloads.vercel.app/api/downloads/tiktok?url=${url}`)
	res.json({
	status: true,
	author: `${author}`,
	result: data.result
	})
})
router.get('/download/soundcloud', async (req, res, next) => {
	var url = req.query.url
	if (!url) return res.json(mess.noturl)
	let data = await fetchJson(`https://xorizn-downloads.vercel.app/api/downloads/soundcloud?url=${url}`)
	res.json({
	status: true,
	author: `${author}`,
	result: data.result
	})
})
router.get('/download/twitter', async (req, res, next) => {
	var url = req.query.url
	if (!url) return res.json(mess.noturl)
	let data = await fetchJson(`https://xorizn-downloads.vercel.app/api/downloads/twitter?url=${url}`)
	res.json({
	status: true,
	author: `${author}`,
	result: data.result
	})
})
router.get('/download/play', async (req, res, next) => {
	var query = req.query.q
	if (!query) return res.json(mess.notquery)
	let data = await api.downloader.yt.play(query)
	res.json({
	status: true,
	author: `${author}`,
	result: data.result
	})
})
router.get('/download/ytmp3', async (req, res, next) => {
	var url = req.query.url
	if (!url) return res.json(mess.noturl)
	let data = await api.downloader.yt.mp3(url)
	res.json({
	status: true,
	author: `${author}`,
	result: data.result
	})
})
router.get('/download/ytmp4', async (req, res, next) => {
	var url = req.query.url
	if (!url) return res.json(mess.noturl)
	let data = await api.downloader.yt.mp4(url)
	res.json({
	status: true,
	author: `${author}`,
	result: data.result
	})
})

//-----------------------------------------------------------------

// Search

router.get('/search/wallpaper', async (req, res, next) => {
	var query = req.query.q
	if (!query) return res.json(mess.notquery)
	let data = await lolkilScraper.image.wallpaperflare(query)
	res.json({
	status: true,
	author: `${author}`,
	result: data.result
	})
})
router.get('/search/pinterest', async (req, res, next) => {
	var query = req.query.q
	if (!query) return res.json(mess.notquery)
	let data = await api.search.pin(query)
	res.json({
	status: true,
	author: `${author}`,
	result: data
	})
})
router.get('/search/danbooru', async (req, res, next) => {
	var query = req.query.q
	if (!query) return res.json(mess.notquery)
	let data = await danbooru.search(query)
	res.json({
	status: true,
	author: `${author}`,
	result: data
	})
})
router.get('/search/unplash', async (req, res, next) => {
	var query = req.query.q
	if (!query) return res.json(mess.notquery)
	let data = await unsplash.search(query)
	res.json({
	status: true,
	author: `${author}`,
	result: data
	})
})
router.get('/search/music', async (req, res, next) => {
	var query = req.query.q
	if (!query) return res.json(mess.notquery)
	let data = await music.search(query)
	res.json({
	status: true,
	author: `${author}`,
	result: data
	})
})
router.get('/search/wikimedia', async (req, res, next) => {
	var query = req.query.q
	if (!query) return res.json(mess.notquery)
	let data = await search.WikiMedia(query)
	res.json({
	status: true,
	author: `${author}`,
	result: data.result
	})
})
router.get('/search/soundcloud', async (req, res, next) => {
	var query = req.query.q
	if (!query) return res.json(mess.notquery)
	let data = await search.SoundCloude(query)
	res.json({
	status: true,
	author: `${author}`,
	result: data.result
	})
})
router.get('/search/ringtone', async (req, res, next) => {
	var query = req.query.q
	if (!query) return res.json(mess.notquery)
	let data = await search.RingTone(query)
	res.json({
	status: true,
	author: `${author}`,
	result: data.result
	})
})
router.get('/search/playstore', async (req, res, next) => {
	var query = req.query.q
	if (!query) return res.json(mess.notquery)
	let data = await search.PlayStore(query)
	res.json({
	status: true,
	author: `${author}`,
	result: data.result
	})
})
router.get('/search/lirik', async (req, res, next) => {
	var query = req.query.q
	if (!query) return res.json(mess.notquery)
	let data = await search.Lirik(query)
	res.json({
	status: true,
	author: `${author}`,
	result: data.result
	})
})
router.get('/search/kodepos', async (req, res, next) => {
	var query = req.query.q
	if (!query) return res.json(mess.notquery)
	let data = await search.KodePos(query)
	res.json({
	status: true,
	author: `${author}`,
	result: data.result
	})
})
router.get('/search/bukalapak', async (req, res, next) => {
	var query = req.query.q
	if (!query) return res.json(mess.notquery)
	let data = await search.BukaLapak(query)
	res.json({
	status: true,
	author: `${author}`,
	result: data.result
	})
})
router.get('/search/acaranow', async (req, res, next) => {
	let data = await search.AcaraNow()
	res.json({
	status: true,
	author: `${author}`,
	result: data.result
	})
})
router.get('/search/sepakbola', async (req, res, next) => {
	let data = await fetchJson(`https://xorizn-search.vercel.app/api/tv/sepakbola`)
	res.json({
	status: true,
	author: `${author}`,
	result: data.result
	})
})
router.get('/search/jadwaltv', async (req, res, next) => {
  var query = req.query.q
	if (!query) return res.json(mess.notquery)
	let data = await search.JadwalTV(query);
	res.json({
	status: true,
	author: `${author}`,
	result: data.result
	})
})
router.get('/search/heroml', async (req, res, next) => {
	var query = req.query.q
	if (!query) return res.json(mess.notquery)
	let data = await search.Hero(query); 
	res.json({
	status: true,
	author: `${author}`,
	result: data.result
	})
})
//----------------------------------------------------------

// News
router.get('/news/gempa', async (req, res, next) => {
	let data = await news.Gempa();
	res.json({
	status: true,
	author: `${author}`,
	result: data.result
	})
})
router.get('/news/gempa2', async (req, res, next) => {
	let data = await news.Gempa2();
	res.json({
	status: true,
	author: `${author}`,
	result: data.result
	})
})
router.get('/news/kompas-global', async (req, res, next) => {
	let data = await news.KompasGlobal();
	res.json({
	status: true,
	author: `${author}`,
	result: data.result
	})
})
router.get('/news/kompas-news', async (req, res, next) => {
	let data = await news.KompasNews();
	res.json({
	status: true,
	author: `${author}`,
	result: data.result
	})
})
router.get('/news/kompas-populer', async (req, res, next) => {
	let data = await news.KompasTerpopuler();
	res.json({
	status: true,
	author: `${author}`,
	result: data.result
	})
})
router.get('/news/rumahkeadilan', async (req, res, next) => {
	let data = await news.RumahKeadilan();
	res.json({
	status: true,
	author: `${author}`,
	result: data.result
	})
})
router.get('/news/tixid', async (req, res, next) => {
	let data = await news.TixID();
	res.json({
	status: true,
	author: `${author}`,
	result: data.result
	})
})
//-----------------------------------------------------------------

// Maker
router.get('/stalk/instagram', async (req, res, next) => {
	var query = req.query.q
	if (!query) return res.json(mess.notquery)
	let data = await stalk.instagram('profile', `${query}`)
	res.json({
	status: true,
	author: `${author}`,
	result: data.result
	})
})
//-----------------------------------------------------------------

// Tools
router.get('/tools/ssweb', async (req, res, next) => {
    var url = req.query.url
    if (!url) return res.json(mess.noturl)
    var result = await getBuffer(`https://my-api.claraaaaaaa1909.repl.co/api/other/ssweb?url=${url}&apikey=Unlimited`)
        res.set('Content-Type', 'image/png');
        res.send(result);
    })
router.get('/tools/chatgpt', async (req, res, next) => {
	var query = req.query.q
	if (!query) return res.json(mess.notquery)
	let data = await ChatGpt(query)
	res.json({
	status: true,
	author: `${author}`,
	result: data
	})
})
router.get('/tools/animedif', async (req, res, next) => {
	var query = req.query.q
	if (!query) return res.json(mess.notquery)
	let data = await animedif(query)
        res.set('Content-Type', 'image/png');
        res.send(data);
    })
router.get('/tools/blur', async (req, res, next) => {
    var url = req.query.url
    if (!url) return res.json(mess.noturl)
    var result = await getBuffer(`https://vihangayt.me/maker/blur?url=${url}`)
        res.set('Content-Type', 'image/png');
        res.send(result);
    })
router.get('/tools/remini', async (req, res, next) => {
    var url = req.query.url
    if (!url) return res.json(mess.noturl)
    var result = await getBuffer(`https://vihangayt.me/tools/enhance?url=${url}`)
        res.set('Content-Type', 'image/png');
        res.send(result);
    })
router.get('/tools/translate', async (req, res, next) => {
	var query = req.query.q
  var lang = req.query.lang
	if (!query) return res.json(mess.notquery)
	if (!lang) return res.json('input lang')
	let data = await api.other.translate(query, lang)
	res.json({
	status: true,
	author: `${author}`,
	result: data.result
	})
})
router.get('/tools/gtts', async (req, res, next) => {
	var query = req.query.q
  var lang = req.query.lang
	if (!query) return res.json(mess.notquery)
	if (!lang) return res.json('input lang')
	let data = await lolkilScraper.convert.gtts(query, lang)
	res.json({
	status: true,
	author: `${author}`,
	result: data.result
	})
})
router.get('/tools/removebg', async (req, res, next) => {
    var url = req.query.url
    if (!url) return res.json(mess.noturl)
    var result = await getBuffer(`https://removebg.api.akuari.my.id/other/removebgg?gambar=${url}`)
        res.set('Content-Type', 'image/png');
        res.send(result);
    })
router.get('/tools/chara-genshin', async (req, res, next) => {
	var query = req.query.q
	if (!query) return res.json(mess.notquery)
	let data = await fetchJson(`https://genshin-db-api.vercel.app/api/characters?query=${query}&queryLanguages=English&resultLanguage=English`)
	res.json({
	status: true,
	author: `${author}`,
	result: data
	})
})
// Ramdom
router.get('/random/nekopoi', async (req, res, next) => {
	let data = await fetchJson(`https://xorizn-apis-v1.vercel.app/api/random/nekopoi`)
	res.json({
	status: true,
	author: `${author}`,
	result: data.result
	})
})
router.get('/random/quotes-anime', async (req, res, next) => {
	let data = await fetchJson(`https://xorizn-apis-v1.vercel.app/api/random/quotes-anime`)
	res.json({
	status: true,
	author: `${author}`,
	result: data.result
	})
})
router.get('/random/anime', async (req, res, next) => {
	let data = await fetchJson(`https://xorizn-apis-v1.vercel.app/api/random/waifu?type=sfw`)
	res.json({
	status: true,
	author: `${author}`,
	result: data.result
	})
})
router.get('/random/nsfw', async (req, res, next) => {
	let data = await fetchJson(`https://xorizn-apis-v1.vercel.app/api/random/waifu?type=nsfw`)
	res.json({
	status: true,
	author: `${author}`,
	result: data.result
	})
})
router.get('/random/hentai', async (req, res, next) => {
	let data = await fetchJson(`https://xorizn-apis-v1.vercel.app/api/random/hentai`)
	res.json({
	status: true,
	author: `${author}`,
	result: data.result
	})
})
router.get('/random/pornhub', async (req, res, next) => {
	let data = await lolkilScraper.pornhub.video()
	res.json({
	status: true,
	author: `${author}`,
	result: data.result
	})
})
router.get('/random/neko', async (req, res, next) => {
    const data = JSON.parse(fs.readFileSync(__path +'/database/anime/neko.json'));
    var result = data[Math.floor(Math.random() * data.length)];
    var requestSettings = {
        url: result,
        method: 'GET',
        encoding: null
    };
    request(requestSettings, function (error, response, body) {
        res.set('Content-Type', 'image/png');
        res.send(body);
    })
})
router.get('/random/cosplay', async (req, res, next) => {
    const data = JSON.parse(fs.readFileSync(__path +'/database/anime/cosplay.json'));
    var result = data[Math.floor(Math.random() * data.length)];
    var requestSettings = {
        url: result,
        method: 'GET',
        encoding: null
    };
    request(requestSettings, function (error, response, body) {
        res.set('Content-Type', 'image/png');
        res.send(body);
    })
})
router.get('/random/husbu', async (req, res, next) => {
    const data = JSON.parse(fs.readFileSync(__path +'/database/anime/husbu.json'));
    var result = data[Math.floor(Math.random() * data.length)];
    var requestSettings = {
        url: result,
        method: 'GET',
        encoding: null
    };
    request(requestSettings, function (error, response, body) {
        res.set('Content-Type', 'image/png');
        res.send(body);
    })
})
router.get('/random/icon', async (req, res, next) => {
    const data = JSON.parse(fs.readFileSync(__path +'/database/anime/icon.json'));
    var result = data[Math.floor(Math.random() * data.length)];
    var requestSettings = {
        url: result,
        method: 'GET',
        encoding: null
    };
    request(requestSettings, function (error, response, body) {
        res.set('Content-Type', 'image/png');
        res.send(body);
    })
})
router.get('/random/neko', async (req, res, next) => {
    const data = JSON.parse(fs.readFileSync(__path +'/database/anime/loli.json'));
    var result = data[Math.floor(Math.random() * data.length)];
    var requestSettings = {
        url: result,
        method: 'GET',
        encoding: null
    };
    request(requestSettings, function (error, response, body) {
        res.set('Content-Type', 'image/png');
        res.send(body);
    })
})
router.get('/random/waifu', async (req, res, next) => {
    const data = JSON.parse(fs.readFileSync(__path +'/database/anime/waifu.json'));
    var result = data[Math.floor(Math.random() * data.length)];
    var requestSettings = {
        url: result,
        method: 'GET',
        encoding: null
    };
    request(requestSettings, function (error, response, body) {
        res.set('Content-Type', 'image/png');
        res.send(body);
    })
})
//--------------------------------------------------------------------

// Game
router.get('/game/asahotak', async (req, res, next) => {
        var soal = JSON.parse(
            fs.readFileSync(__path + '/database//game/asahotak.json')
        )
        res.json({
              status: true,
	            author: `${author}`,
              ...soal[~~(Math.random() * soal.length)]
          })
})
router.get('/game/caklontong', async (req, res, next) => {
        var soal = JSON.parse(
            fs.readFileSync(__path + '/database/game/caklontong.json')
        )
        res.json({
              status: true,
	            author: `${author}`,
              ...soal[~~(Math.random() * soal.length)]
          })
})
router.get('/game/family100', async (req, res, next) => {
        var soal = JSON.parse(
            fs.readFileSync(__path + '/database/game/family100.json')
        )
        res.json({
              status: true,
	            author: `${author}`,
              ...soal[~~(Math.random() * soal.length)]
          })
})
router.get('/game/lengkapikalimat', async (req, res, next) => {
        var soal = JSON.parse(
            fs.readFileSync(__path + '/database/game/lengkapikalimat.json')
        )
        res.json({
              status: true,
	            author: `${author}`,
              ...soal[~~(Math.random() * soal.length)]
          })
})
router.get('/game/siapakahaku', async (req, res, next) => {
        var soal = JSON.parse(
            fs.readFileSync(__path + '/database/game/siapakahaku.json')
        )
        res.json({
              status: true,
	            author: `${author}`,
              ...soal[~~(Math.random() * soal.length)]
          })
})
router.get('/game/susunkata', async (req, res, next) => {
        var soal = JSON.parse(
            fs.readFileSync(__path + '/database/game/susunkata.json')
        )
        res.json({
              status: true,
	            author: `${author}`,
              ...soal[~~(Math.random() * soal.length)]
          })
})
router.get('/game/tebakchara', async (req, res, next) => {
        var soal = JSON.parse(
            fs.readFileSync(__path + '/database/game/tebakchara.json')
        )
        res.json({
              status: true,
	            author: `${author}`,
              ...soal[~~(Math.random() * soal.length)]
          })
})
router.get('/game/tebakgambar', async (req, res, next) => {
        var soal = JSON.parse(
            fs.readFileSync(__path + '/database/game/asahotak.json')
        )
        res.json({
              status: true,
	            author: `${author}`,
              ...soal[~~(Math.random() * soal.length)]
          })
})
router.get('/game/tebakgame', async (req, res, next) => {
        var soal = JSON.parse(
            fs.readFileSync(__path + '/database/game/tebakgame.json')
        )
        res.json({
              status: true,
	            author: `${author}`,
              ...soal[~~(Math.random() * soal.length)]
          })
})
//---------------------------------------------------------------------

//Maker
router.get("/maker/tolol", async (req, res, next) => {
    const query = req.query.q
    if (!query) return res.json(msg.notquery)
	  let hasil = await getBuffer(`https://tolol.ibnux.com/img.php?nama=${query}`)
		res.set({'Content-Type': 'image/png'})
	  res.send(hasil)
	})
router.get("/maker/attp", async (req, res, next) => {
    const query = req.query.q
    if (!query) return res.json(msg.notquery)
	  let hasil = await getBuffer(`https://api.erdwpe.com/api/maker/attp?text=${query}`)
		res.set({'Content-Type': 'image/gif'})
	  res.send(hasil)
	})
router.get("/maker/ttp", async (req, res, next) => {
    const query = req.query.q
    if (!query) return res.json(msg.notquery)
	  let hasil = await getBuffer(`https://huratera.sirv.com/PicsArt_08-01-10.00.42.png?profile=Example-Text&text.0.text=${encodeURIComponent(query)}&text.0.color=ffffff&text.0.background.color=0000ff&text.0.font.family=Changa%20One&&text.0.outline.color=0000`)
		res.set({'Content-Type': 'image/png'})
	  res.send(hasil)
	})
router.get("/maker/ttp2", async (req, res, next) => {
    const query = req.query.q
    if (!query) return res.json(msg.notquery)
	  let hasil = await getBuffer(`https://huratera.sirv.com/PicsArt_08-01-10.00.42.png?profile=Example-Text&text.0.text=${encodeURIComponent(query)}&text.0.opacity=93&text.0.outline.color=fff40a&text.0.outline.width=4&text.0.color=000000&text.0.font.family=Permanent%20Marker&text.0.background.color=ffffff`)
		res.set({'Content-Type': 'image/png'})
	  res.send(hasil)
	})
//-------------------------------------------------------------------

// Others
router.get('/others/kisahnabi', async (req, res, next) => {
	var query = req.query.q
	if (!query) return res.json(mess.notquery)
	let data = await fetchJson(`https://raw.githubusercontent.com/ZeroChanBot/Api-Freee/a9da6483809a1fbf164cdf1dfbfc6a17f2814577/data/kisahNabi/${query}.json`) 
	res.json({
	status: true,
	author: `${author}`,
	result: data
	})
})
router.get('/others/simi', async (req, res, next) => {
	var query = req.query.q
	if (!query) return res.json(mess.notquery)
	let data = await fetchJson(`https://my-api.claraaaaaaa1909.repl.co/api/other/simi?kata=${query}&apikey=Sange`)
	res.json({
	status: true,
	author: `${author}`,
	result: data.message
	})
})
module.exports = router