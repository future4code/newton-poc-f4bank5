import { readFile } from 'fs'

export const getAllAccounts = async () => {
    let textosJson: string = ""

    const promisefile = ((err: any, data: Buffer): void => {
        if (err) {
            console.error(err)
            return
        }
        textosJson += data.toString()
    })

    const promise: Promise<string> = new Promise((resolve, reject) => {
        readFile("bank.json", (err: any, data: Buffer) => {
            promisefile(err, data)
            resolve()
        })
    })

    await promise
    return textosJson
}

getAllAccounts()