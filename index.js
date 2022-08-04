let strings = 'null'
const intValue = 20
const boolValue = true

// key value pair
const objValue = {
   nama: 'ebieib',
   hoby: ['nonton', 'maingame']
}

const arrValue = ['sting', { nama: 'tufail', hoby: 'belajar' }]

const umur = 20

/**
 *  TODO >
 *  TODO <
 *  TODO >=
 *  TODO <=
 *  TODO ==
 *  TODO === // check with tipe data
 *  TODO !=
 *
 *
 */

const tipeData = []

if (tipeData) {
   console.log('nilai true')
} else {
   console.log('nilai false')
}

if (umur > 20) {
   console.log('anda sudah dewasa')
} else if (umur < 20 && umur > 10) {
   console.log('anda masih remaja')
} else {
   console.log('anda masih bocah')
}

switch (umur) {
   case 20:
      console.log('anda sudah dewasa')
      break
   case 19:
      console.log('anda sudah dewasa')
      break
   default:
      console.log('data tidak ada')
}

const kategoriUmur = umur >= 20 ? 'sudah dwasa' : 'belum dewasa'
