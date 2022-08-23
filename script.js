const ul = document.querySelector('ul')

function getApiGithub(){
    fetch('https://api.github.com/users/guilhermecneto/repos')
    .then(async res => {
    
        if(!res.ok){
            throw new Error(res.status)
        }

        var data  = await res.json()

        data.map(item => {
            let li = document.createElement('li')

            li.innerHTML = `
            <strong>${item.name.toUpperCase()}</strong><br>
            <span>URL: ${item.url}</span><br>
            <span>Data Criação:
                ${Intl.DateTimeFormat('pt-br')
                    .format(new Date(item.created_at))}
            </span>
            `

            ul.appendChild(li)
        })
    
    }).catch(e => console.log(e))

}

getApiGithub()