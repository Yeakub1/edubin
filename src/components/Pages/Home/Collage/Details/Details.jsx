import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Details = () => {
    const collage = useLoaderData();
    const {
      collegeName,
      collegeImage,
      admissionDates,
      events,
      researchHistory,
      researchWorks,
      teams,
      facilities,
      admissionProcess,
    } = collage;
    return (
      <div className="max-w-7xl px-5 mx-auto mt-16 ">
        <div className="grid md:grid-cols-2 gap-8 items-center justify-center mb-10">
          <div className="">
            <h1 className="text-3xl font-bold">{collegeName}</h1>
            <div className="mt-4">
              <p>
                <span className="font-bold">Admission:</span> Fall
                {admissionDates.fall}
              </p>
              <p className="md:ml-24">spring {admissionDates.spring}</p>
            </div>
            <div className="mt-4">
              <p className="flex items-center gap-2">
                <span className="font-bold">Events:</span>
                <p className="text-xl font-semibold">{events.eventName}</p>
              </p>
              <p className="md:ml-16">{events.date}</p>
              <p className="md:ml-16"> {events.location}</p>
            </div>
          </div>
          <div className="">
            <img className="h-72 w-full" src={collegeImage} alt="" />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 justify-center mb-10">
          <div className="">
            {/* researchHistory */}
            <h1 className="text-2xl font-bold mb-3">researchHistory</h1>
            <div>
              <div className="flex gap-2">
                <span className="font-bold">researcName:</span>
                <p className="text-xl font-semibold">
                  {researchHistory.researcOne}
                </p>
              </div>
              <div className="flex gap-4">
                <span className="font-bold">researcYear:</span>
                <p className="text-xl font-semibold">
                  {researchHistory.researcOneYear}
                </p>
              </div>
              <div className="flex gap-2">
                <span className="font-bold">researcName:</span>
                <p className="text-xl font-semibold">
                  {researchHistory.researcTwo}
                </p>
              </div>
              <div className="flex gap-4">
                <span className="font-bold">researcYear:</span>
                <p className="text-xl font-semibold">
                  {researchHistory.researcTwoyear}
                </p>
              </div>
            </div>
            {/* researchWorks */}
            <h1 className="text-2xl font-bold mb-3 mt-10">researchWorks</h1>
            <div className="flex gap-4">
              <span className="font-bold">title:</span>
              <p className="text-xl font-semibold">{researchWorks.title}</p>
            </div>
            <div className="flex gap-4">
              <span className="font-bold">authors:</span>
              <p className="text-xl font-semibold">{researchWorks.authors}</p>
            </div>
            <div className="flex gap-4">
              <span className="font-bold">publication:</span>
              <p className="text-xl font-semibold">
                {researchWorks.publication}
              </p>
            </div>
            <div className="flex gap-4">
              <span className="font-bold">publicationDate:</span>
              <p className="text-xl font-semibold">
                {researchWorks.publicationDate}
              </p>
            </div>
            {/* sports categories */}
            <h1 className="text-2xl font-bold mb-3 mt-7">sports categories</h1>
            <p className="text-lg font-semibold">{teams}</p>
            <p className="text-lg font-semibold">{facilities}</p>
          </div>
          <div className="">
            <h1 className="text-2xl text-center font-bold mb-3 mt-10">
              AdmissionProcess
            </h1>
            <div className="mt-8">
              <h1 className="text-xl font-bold">{admissionProcess.one}</h1>
              <h1 className="text-lg">{admissionProcess.descriptionOne}</h1>
            </div>
            <div className="mt-8">
              <h1 className="text-xl font-bold">{admissionProcess.two}</h1>
              <h1 className="text-lg">{admissionProcess.descriptionTwo}</h1>
            </div>
            <div className="mt-8">
              <h1 className="text-xl font-bold">{admissionProcess.three}</h1>
              <h1 className="text-lg">{admissionProcess.descriptionThree}</h1>
            </div>
            <div className="mt-8">
              <h1 className="text-xl font-bold">{admissionProcess.four}</h1>
              <h1 className="text-lg">{admissionProcess.descriptionFour}</h1>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Details;