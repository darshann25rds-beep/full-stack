import http from 'node:http'
import { getdata } from './database/destinations.js'
import { sendjsonresponse } from './utils/sendjsonresponse.js'
import { getdatabypathparams } from './utils/getdatabypathparams.js'
import { getdatabyqueryparams } from './utils/getdatabyqueryparams.js'

const PORT = 8000

const server = http.createServer(async (req,res) => {
    const destinations = await getdata()

    const urlobj = new URL(req.url,`http://${req.headers.host}`)
    const queryobj = Object.fromEntries(urlobj.searchParams)

    if(urlobj.pathname === '/api' && req.method === 'GET' ){
        let filterdata = getdatabyqueryparams(destinations,queryobj)
        sendjsonresponse(res,200,filterdata)
    }

    else if(req.url.startsWith('/api/continent') && req.method === 'GET'){
        const continent = req.url.split('/').pop()
        const filterdata = getdatabypathparams(destinations,'continent',continent)
        sendjsonresponse(res,200,filterdata) 
    }

    else if(req.url.startsWith('/api/country') && req.method === 'GET'){
        const country = req.url.split('/').pop()
        const filterdata = getdatabypathparams(destinations,'country',country)
        sendjsonresponse(res,200,filterdata) 
    }
    else{
        res.setHeader('Content-Type','application/json')
        sendjsonresponse(res,404,({error: "not found",message:"The request route does not exist"}))
    }    
})

server.listen(PORT, () => console.log(`server running on port: ${PORT}`))