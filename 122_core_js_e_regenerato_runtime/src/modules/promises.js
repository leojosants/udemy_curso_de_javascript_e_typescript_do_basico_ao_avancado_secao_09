/*-------------------- functions --------------------*/
function promise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Promise executada');
            resolve();
        }, 2000);
    });
}

export default async function execute() {
    await promise();
    console.log('Terminou')
}