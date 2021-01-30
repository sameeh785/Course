

export function signup(data) {

    fetch('/signup', {
        method: 'POST',
        headers: {

            'Content-Type': 'application/json'

        },

        body: JSON.stringify(data),
    }).then((resp) => {

        return resp.json().then((resp) => {

            console.log(resp);

        })

    })


}