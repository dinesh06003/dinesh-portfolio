import React, { useState } from "react";
import CertificatesData from "./certificatesData";
import EachCertificate from "./eachCertificate";
import './certifications.css';

const Certification = () => {
    const [certificates, setCertificates] = useState(CertificatesData);

    return (
        <section className="certification">
            <div className="certification-heading">
                <h2>Certifications</h2>
            </div>
            <div className="certification-container">
                {certificates.map((item) => {
                    return <EachCertificate item={item} key={item.id} />
                })}

            </div>
        </section>
    )
}
export default Certification;