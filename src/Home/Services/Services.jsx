import { useEffect, useState } from "react";
import Service from "./Service/Service";


const Services = () => {
    const [services, setServices] = useState([]);
    const [dataLength, setDataLength] = useState([9]);

    useEffect(() =>{
        fetch('services.json')
        .then(res => res.json())
        .then(data => setServices(data))
    }, [])

    return (
        <div className="mb-10">
        <h1 className="text-5xl font-bold pb-5">Our services</h1>
        <div className="grid grid-cols-3 gap-8">
            {
                services.slice(0, dataLength).map(service => <Service serve={service} key={service.id}></Service>)
            }
        </div>
        <div className={dataLength === services.length && 'hidden'}>
            <button
            onClick={() => setDataLength(services.length)}
            className="btn btn-primary m-5">Show All</button>
        </div>
        </div>
    );
};

export default Services;