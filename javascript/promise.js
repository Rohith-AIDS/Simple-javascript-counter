const users=fetch('https://jsonplaceolder.typicode.com/users')
           .then((response)=>console.log(response.json()))
           .then((data)=>
           {
            data.map((iterator)=>
            {
                console.log('${iterator.id}: ${iterator.name}')
            })
           })
           .catch((error)=>console.log('Invalid URL'))
