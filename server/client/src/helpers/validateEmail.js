const regex= /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

export default (email) =>{

    const invalidEmailArray= email
        .split(',')
        .map(email=> email.trim())
        .filter(email => regex.test(email) === false)

    
    if(invalidEmailArray.length){
        if(invalidEmailArray.includes("")){
            return 'There is a comma at the end.'
        }
        return `These emails are invalid: ${invalidEmailArray}`;
    }
}