const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://mern_user:M7VzPvUiMtcBW096@cluster0.ssswidn.mongodb.net/')

const User = mongoose.model('User', {
    username: String,
    edad: Number
})

const crear = async () => {
    const user = new User({ username: 'chanchito triste', edad: 25 })
    const savedUser = await user.save()
    console.log(savedUser)
}

const buscarTodo = async () => {
    const users = await User.find();
    console.log(users)
}

const buscar = async () => {
    const user = await User.find({ username: 'chanchito' })
    console.log(user)
}

const buscarUno = async () => {
    const user = await User.findOne({ username: 'chanchito' });
    console.log(user)
}

const actualizar = async () => {
    const user = await User.findOne({ username: 'chanchito feliz' });
    user.username = "chanchito muy feliz"
    user.edad = 27;
    await user.save()
}

const eliminar = async () => {
    const user = await User.findOne({ username: 'chanchito triste' })
    console.log(user);
    if (user) {
        await user.deleteOne();
    }
}