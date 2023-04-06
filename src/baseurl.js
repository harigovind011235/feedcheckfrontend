const mode = "dev"
// const mode = "staging"

// http://localhost:3000/adduser
// http://192.168.1.86:4000


const baseValues = {
    baseProtocal:{
        dev:"http://",
        staging:"http://"
    },
    baseHost:{
        dev:"localhost:4000/",
        staging:"192.168.1.86:4000/"

    }
}

const baseprotocal = baseValues.baseProtocal[mode];
const basehost = baseValues.baseHost[mode]

export const baseUrl=baseprotocal+basehost
