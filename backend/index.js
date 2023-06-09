const app = require('./app')
const config = require('./utils/config')
const mongoose=require('mongoose')

mongoose.connect(config.MONGODB_URI)
.then(()=>{
    console.log('MongoDb is connected');
})
.catch(()=>{
    console.log('Failed connection for MongoDb');
})

app.listen(config.PORT,()=>{
    console.log(`Server running on port ${config.PORT}`);
})
