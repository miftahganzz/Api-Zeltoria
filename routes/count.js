const express = require('express')
const app = express()
const PORT = process.env.PORT || 7002 || 5000 || 3000
const mongoose = require('mongoose')

mongoose.connect("mongodb://localhost:27017/visitCounterDB", {
	useNewUrlParser: true
});
const visitorSchema = new mongoose.Schema({
	name: String,
	count: Number
})
const Visitor = mongoose.model("Visitor",visitorSchema)
app.get('/', async function(req,res){
	let visitors = await Visitor.findOne({name: 'zxorkta-count-api'})
	if(visitors == null) {
		const beginCount = new Visitor({
			name : 'zxorkta-count-api',
			count : 1
		})
		beginCount.save()
		res.send(`<h2>Counter: `+1+'</h2>')
		console.log("First visitor arrived")
	}
	else{
		visitors.count += 1;
		visitors.save()
		res.send(`<h2>Counter: `+visitors.count+'</h2>')
		console.log("visitor arrived: ",visitors.count)
	}
})
app.listen(PORT, () => {
    console.log("Server running on " + PORT)
})
})