import { getMundoInvertidoDBSubscriptions, subscribeToMundoInvertidoDB } from './firebase/mundoInvertidoDB.js'

const txtName = document.getElementById('txtName')
const txtEmail = document.getElementById('txtEmail')
const txtLevel = document.getElementById('txtLevel')
const txtCharacter = document.getElementById('txtCharacter')

const btnSubscribe = document.getElementById('btnSubscribe')

btnSubscribe.addEventListener('click', async () => {
    const subscription = {
        name: txtName.value,
        email: txtEmail.value,
        level: txtLevel.value,
        character: txtCharacter.value
    }
    const subscriptionId = await subscribeToMundoInvertidoDB (subscription)
    console.log(`inscrito com sucesso: ${subscriptionId}`)

    txtName.value = ''
    txtEmail.value = ''
    txtLevel.value = ''
    txtCharacter.value = ''
})

async function loadData() {
    const subscriptions = await getMundoInvertidoDBSubscriptions()
    console.log(subscriptions)
}

loadData()