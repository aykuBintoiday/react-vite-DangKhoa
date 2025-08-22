export default function MyComponents() {
    // const aykuBin = "Bin ne 1"; // string
    // const aykuBin = 11; // number
    // const aykuBin = true; // boolean
    // const aykuBin = undefined; 
    // const aykuBin = null;
    // const aykuBin = [1, 2, 3];
    const aykuBin = {
        name: "Bin",
        age: 19
    }
    return (
        <>
            <div>Bin ne</div>
            <div>{JSON.stringify(aykuBin)}</div>
            <div>Ten la: {aykuBin.name}</div>
            <div>Tuoi la: {aykuBin.age}</div>
            <div>{console.log("Eric")}</div>
        </>
    );
}