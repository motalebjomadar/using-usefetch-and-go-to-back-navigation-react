import { Link } from "react-router-dom";


const Service = ({serve}) => {
    const {id, description, service, warranty} = serve;
    return (
        <div className="font-bold border border-indigo-500 rounded text-xl p-5">
            <h1>Id : {id}</h1>
            <h2>Service : {service}</h2>
            <h2>Warranty : {warranty}</h2>
        </div>
    );
};

export default Service;