const { default: Moralis } = require("moralis/.")
const moralis = require("moralis/node")
const { chainId } = require("wagmi")
require("dotenv")
let chanId = process.env.chainId

const contractAddress = "0xB67E870c1FA2a8b9e4c450061A50E0963100E100"

const SERVER_URL = process.env.NEXT_PUBLIC_SERVER_URL
const APP_ID= process.env.NEXT_PUBLIC_APP_ID
const masterKey= process.env.MASTER_KEY




async function main() {
    await moralis.start({SERVER_URL, APP_ID, masterKey})
    console.log(`Working with contract address ${contractAddress}`)

    let contractCreatedOptions = {
        chainId: chainId,
        sync_historical: true,
        topic: "ContractCreated(address)",
        abi: {
            anonymous: false,
            input: [
              {
                indexed: true,
                internalType: "address",
                name: "creator",
                type: "address"
              }
            ],
            name: "ContractCreated",
            type: "event"
        },
        tableName:"ContractCreated"

    }

    const createdResponse = await moralis.Cloud.run("watchContractEvent", contractCreatedOptions, {
        useMasterKey: true,
    })

    if (createdResponse.success) {
        console.log("Success! Database Updated")
    } else {
        console.log("Something went wrong")
    }

}



main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error)
        process.exit(1)
    })