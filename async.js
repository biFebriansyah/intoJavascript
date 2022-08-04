const users = {
   username: 'ebieib',
   email: 'ebiebi@fazz.com',
   passwod: 'abcd12345'
}

function exampleONe() {
   console.log('prosess 1')
   console.log('prosess 2')
   console.log('prosess 3')
}

function exampletwo() {
   console.log('prosess 1')
   //  query db
   setTimeout(() => {
      console.log('prosess 2')
   }, 1000)
   console.log('prosess 3')
}

const getPassword = (cb) => {
   setTimeout(() => {
      cb(users.passwod)
   }, 3000)
}

const getUsename = (cb) => {
   setTimeout(() => {
      cb(users.username)
   }, 1000)
}

const getEmail = (cb) => {
   setTimeout(() => {
      cb(users.email)
   }, 1000)
}

function Login(passwd, username) {
   getPassword((pass) => {
      getUsename((usr) => {
         getEmail((eml) => {
            if (username != usr) {
               console.log('username salah')
               return
            }

            if (passwd != pass) {
               console.log('password salah')
               return
            }

            console.log('anda login')
         })
      })
   })
}

const getPasswordPromise = () => {
   return new Promise((resolve, reject) => {
      setTimeout(() => {
         resolve(users.passwod)
      }, 3000)
   })
}

const getUsernamePromise = () => {
   return new Promise((resolve, reject) => {
      let err = true
      if (err) {
         reject(new Error('terjadi error'))
      }

      setTimeout(() => {
         resolve(users.username)
      }, 3000)
   })
}

getPasswordPromise()
   .then((data) => {
      console.log(data)
   }) // digunakan untuk mengakap resolve
   .catch((err) => {
      console.log('reject')
      console.log(err)
   }) // digunakan untuk mengambil reject

async function Logins(usename, password) {
   try {
      const passDb = await getPasswordPromise()
      const usrDb = await getUsernamePromise()
      console.log(passDb)
      console.log(usrDb)
   } catch (error) {
      console.log(error.message)
   }
}

Logins('ebieib', 'abcd12345')
