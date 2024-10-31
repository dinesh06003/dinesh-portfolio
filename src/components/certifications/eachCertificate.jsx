import React from "react";

const EachCertificate = ({ item }) => {
    return (
        <div className="certificate-elements" key={item.id}>
            <h3 className="certificate-title">{item.title}</h3>
            <a className="view-certifivate" href={item.link} target="__blank">view certificate</a>

        </div>
    )
}

export default EachCertificate;