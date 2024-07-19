import React from "react";

const programs = [
  {
    name: "Professional Certificate Program in Product Management",
    referrerBonus: "₹ 7,000",
    refereeBonus: "₹ 9,000",
  },
  {
    name: "PG Certificate Program in Strategic Product Management",
    referrerBonus: "₹ 9,000",
    refereeBonus: "₹ 11,000",
  },
  {
    name: "Executive Program in Data Driven Product Management",
    referrerBonus: "₹ 10,000",
    refereeBonus: "₹ 10,000",
  },
  {
    name: "Executive Program in Product Management and Digital Transformation",
    referrerBonus: "₹ 10,000",
    refereeBonus: "₹ 10,000",
  },
  {
    name: "Advanced Certification in Product Management",
    referrerBonus: "₹ 10,000",
    refereeBonus: "₹ 10,000",
  },
  {
    name: "Executive Program in Product Management and Project Management",
    referrerBonus: "₹ 10,000",
    refereeBonus: "₹ 10,000",
  },
];

const Programs = () => {
  return (
    <section className="py-8" id="benefits">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center">
          What Are The Referral Benefits?
        </h2>
        <div className="bg-white shadow overflow-y-scroll sm:rounded-lg">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Programs
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Referrer Bonus
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Referee Bonus
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {programs.map((program, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {program.name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {program.referrerBonus}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {program.refereeBonus}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Programs;
