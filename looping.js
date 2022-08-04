const arr = ['mangga', 'apple']

const [idx1, idx2] = arr

const obj = { nama: 'asas', umur: 20 }

let element = ''
for (let index = 0; index < arr.length; index++) {
   //  element += `${arr[index] +} \n`
}

const obj5 = {
   name: false,
   skill: [
      {
         namaSkill: 'nyanyi',
         level: 'expert'
      }
   ]
}

const copyObj = { ...obj5 }

console.log(copyObj)
const { namaSkill } = obj5.skill[0]

const dataUser = [
   {
      id: 0,
      username: 'edo123',
      email: 'emailedo@gmial.com',
      profile: {
         image: 'image-edo.jpg',
         hoby: ['sepedaan', 'makan']
      }
   }
]

const ar = ['mannga', 'apple']

const { image: images } = dataUser[0].profile

// dataUser[0].profile.hoby[1]
