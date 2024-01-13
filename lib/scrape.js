const fetch = require('node-fetch')
const cheerio = require('cheerio')
const axios = require('axios')
const FormData = require('form-data')
const request = require('request')


async function ChatGpt(you_qus) {
  let baseURL = "https://free-api.cveoy.top/";
  try {
    const response = await fetch(baseURL + "v3/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "origin": "https://ai1.chagpt.fun",
        "Referer": baseURL
      },
      body: JSON.stringify({
        prompt: you_qus
      })
    });
    
    const data = await response.text();
    return data; // Return the response data if needed
  } catch (error) {
    // Handle any errors here
    console.error(error);
  }
}
async function animedif(data) {
	const response = await fetch(
		"https://api-inference.huggingface.co/models/Ryzan/fantasy-diffusion-v1",
		{
			headers: { Authorization: "Bearer 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" },
			method: "POST",
			body: JSON.stringify(data),
		}
	)
	const result = await response.blob();
	let arrayBuffer = await result.arrayBuffer();
	const buffer = Buffer.from(arrayBuffer, 'base64')
	return buffer
}
async function attp(text) {
  return new Promise(async(resolve, reject) => {
  const getid = await axios.get('https://id.bloggif.com/text')
  const id = cheerio.load(getid.data)('#content > form').attr('action')
  const options = {
            method: "POST",
            url: `https://id.bloggif.com${id}`,
            headers: {
                "content-type": 'application/x-www-form-urlencoded',
                "user-agent": 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36'
            },
            formData: {
                target: 1,
                text: text,
                glitter_id: Math.floor(Math.random() * 2821),
                font_id: 'lucida_sans_demibold_roman',
                size: 50,
                bg_color: 'FFFFFF',
                transparent: 1,
                border_color: '000000',
                border_width: 2,
                shade_color: '000000',
                shade_width: 1,
                angle: 0,
                text_align: 'center'
            },
        };
        request(options, async function(error, response, body) {
          if (error) return new Error(error)
          const $ = cheerio.load(body)
          const url = $('#content > div:nth-child(10) > a').attr('href')
          resolve({status: 200, author: 'Rominaru Dev', result: 'https://id.bloggif.com' + url})
        })
    })
}
module.exports = {
ChatGpt,
animedif,
attp
}
