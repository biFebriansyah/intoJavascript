function CheckPassword(password) {
   const secret = 'abcd12345'

   if (secret != password) {
      console.log('Password salah')
      return
   } else {
      console.log('Password benar')
   }

   console.log('Anda berhasil login')
}

CheckPassword('abcd123')

function penjumlahan(...parms) {
   console.log(Array.isArray(parms))
   let result = 0

   for (const i of parms) {
      result = i + result
   }

   return result
}

console.log(penjumlahan(5, 4, 7, 8))

const bioData = {
   firstName: 'ebi',
   lastName: 'febriansyah',
   showFullName: function () {
      console.log(this.firstName + this.lastName)
   },
   setFullName: function (fName, lName) {
      this.firstName = fName
      this.lastName = lName
   }
}

bioData.setFullName('ebi', 'ebi')
bioData.showFullName()

const namaSaya = 'ebiebi'
const buahan = ['aple', 'mangga']

function sayHelo(name, callbackFn) {
   let data = `Hallo ${name}`

   //  query database = 2000s
   callbackFn(data)
}

function showData(data) {
   console.log(data)
}

function calbackMap(value, index) {
   console.log(value)
   console.log(index)
}

const arr = ['anda', 'andi', 'edo', 'edi', 'ebi']

function serachAndSort(kata, arr = []) {
   const result = []

   arr.forEach((v) => {
      if (v.includes(kata)) {
         result.push(v)
      }
   })

   console.log(result)
}

serachAndSort('di', arr)
