async function takeTime(){
    await new Promise((resolve)=>{
        setTimeout(resolve,3000)
    });
}
export default async function About(){
     await takeTime();
     throw new Error("This is manual Error");

    return (
        <>
        <h1>This is about page</h1>
        </>
    )
}