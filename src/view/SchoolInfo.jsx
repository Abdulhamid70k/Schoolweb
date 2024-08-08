import React from 'react';
import Doc1 from "../assets/Docs/Affiliation-Letter.pdf";
import Doc2 from "../assets/Docs/Building-Safety-Certificate.pdf";
import Doc3 from "../assets/Docs/Trust-Registration.pdf";
import Doc4 from "../assets/Docs/Fire-NOC.pdf";
import Doc5 from "../assets/Docs/List-of-School-Management-Committee.pdf";
import Doc6 from "../assets/Docs/Water-and-Health-Certificate.pdf";
import Doc7 from "../assets/Docs/Self-certificate-for-upgradation.pdf";
import Doc8 from "../assets/Docs/Recommendation-certificate-under-RTE.pdf";
import Doc9 from "../assets/Docs/NOC-State-Govt.pdf";
import Doc10 from "../assets/Docs/Mandatory-Disclosure-Details-SARAS-4.0.pdf";

const documents = [
  { title: "Affiliation Letter", file: Doc1 },
  { title: "Building Safety Certificate", file: Doc2 },
  { title: "Trust Registration", file: Doc3 },
  { title: "Fire NOC", file: Doc4 },
  { title: "List of School Management Committee", file: Doc5 },
  { title: "Water and Health Certificate", file: Doc6 },
  { title: "Self certificate for upgradation", file: Doc7 },
  { title: "Recommendation certificate under RTE", file: Doc8 },
  { title: "NOC State Govt", file: Doc9 },
  { title: "Mandatory Disclosure Details SARAS 4.0", file: Doc10 },
];

const SchoolInfo = () => {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px' }}>
      {documents.map((doc, index) => (
        <div key={index} style={{ border: '1px solid #ddd', padding: '10px', width: '300px' }}>
          <h3>{doc.title}</h3>
          <embed src={doc.file} width="280" height="400" type="application/pdf" />
        </div>
      ))}
    </div>
  );
}

export default SchoolInfo;
