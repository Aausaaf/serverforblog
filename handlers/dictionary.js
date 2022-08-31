const { default: axios } = require("axios")

const { Dictionary } = require("../Database/dictionary")


const getdata = async(req,res) => {

  try {

    let data = await Dictionary.find()

        res.status(200).send(data)

  } catch (err) {

    res.status(500).json(err)

  }
}

const postdata = async(req,res) => {

    let {text} = req.body
    
    const t = {

        headers :{
           
            app_id :"4c3ca3e6",
            app_key :"17bbc5487b3e228a8ade54441f5c1ae7"
        }
    }
   
   axios.get(`https://od-api.oxforddictionaries.com/api/v2/entries/en-us/${text}`,t).then((ress)=>{
      
        if(ress.data)
        {
             
             uploaddata(ress.data)
           
        }
        
    }).catch((err)=>{

        console.log(err)

        res.send(err)
    })

const uploaddata = async(data) => {

    console.log(data)
    
   let datas = {

      name:data.word,
      etymologies:data.results[0].lexicalEntries[0].entries[0].etymologies[0],
      shortDefinitions:data.results[0].lexicalEntries[0].entries[0].senses[0].shortDefinitions[0],
      definitions:data.results[0].lexicalEntries[0].entries[0].senses[0].definitions[0],
      phrases:data.results[0].lexicalEntries[0].phrases,
      text:(data.results[0].lexicalEntries[0].lexicalCategory.text)?data.results[0].lexicalEntries[0].lexicalCategory.text:" "

    }


    const newword = await Dictionary.create(datas)

    res.status(200).send({message:"new word has Successfully added",word:newword})
}

  


   }  
   
 
 




module.exports = {

    getdata,
    postdata
    
}