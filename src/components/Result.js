import { useSelector } from "react-redux";

const Result = ()=>{

    const {total} = useSelector(state=>state);

    return(
        <div>
            <h1>Hasil Result :</h1>
            <h1>{total}</h1>
        </div>
    )

}

export default Result;

