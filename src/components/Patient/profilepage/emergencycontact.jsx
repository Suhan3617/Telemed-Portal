import React from 'react'

const Emergencycontact = ({ contact }) => {
  return (
    <div className="bg-white shadow-md rounded-xl p-6">
      <h3 className="font-semibold text-lg text-blue-600 mb-4">Emergency Contact</h3>
      <p className="text-gray-700"><strong>Name:</strong> {contact.name}</p>
      <p className="text-gray-700"><strong>Relation:</strong> {contact.relation}</p>
      <p className="text-gray-700"><strong>Phone:</strong> {contact.phone}</p>
    </div>
  );
}

export default Emergencycontact;
