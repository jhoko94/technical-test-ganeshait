import { Card, CardBody } from "@material-tailwind/react";
import React from "react";

const About = () => {
  return (
    <div className="md:h-[calc(100vh-5rem)] mx-auto p-4 bg-gradient-to-r from-purple-500 to-pink-500">
      <Card className="md:w-[30vw] m-auto">
        <CardBody>
          <div className="p-4">
            <div className="text-center">
              <svg
                className="w-32 h-32 mx-auto rounded-full"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path d="M96 128a128 128 0 1 0 256 0A128 128 0 1 0 96 128zm94.5 200.2l18.6 31L175.8 483.1l-36-146.9c-2-8.1-9.8-13.4-17.9-11.3C51.9 342.4 0 405.8 0 481.3c0 17 13.8 30.7 30.7 30.7H162.5c0 0 0 0 .1 0H168 280h5.5c0 0 0 0 .1 0H417.3c17 0 30.7-13.8 30.7-30.7c0-75.5-51.9-138.9-121.9-156.4c-8.1-2-15.9 3.3-17.9 11.3l-36 146.9L238.9 359.2l18.6-31c6.4-10.7-1.3-24.2-13.7-24.2H224 204.3c-12.4 0-20.1 13.6-13.7 24.2z" />
              </svg>
              <h2 className="text-xl font-bold mt-2 text-black">
                Joko Priyono
              </h2>
            </div>
            <div className="mt-4">
              <div className="flex justify-between">
                <span className="font-semibold">Jenis Kelamin:</span>
                <span>Laki-laki</span>
              </div>
              <div className="flex justify-between mt-2">
                <span className="font-semibold">No. HP:</span>
                <span>+62 8533 3271 526</span>
              </div>
              <div className="flex justify-between mt-2">
                <span className="font-semibold">Email:</span>
                <span>jhoko94@gmail.com</span>
              </div>
              <div className="flex justify-between mt-2">
                <span className="font-semibold">Alamat:</span>
                <span>Perumahan Seroja Home Residence 2 , Soreang</span>
              </div>
              <div className="flex justify-between mt-2">
                <span className="font-semibold">Pekerjaan:</span>
                <span>Frontend Developer</span>
              </div>
              <div className="flex justify-between mt-2">
                <span className="font-semibold">Tempat/Tanggal Lahir:</span>
                <span>Pontianak, 28 Oktober 1994</span>
              </div>
              <div className="flex justify-between mt-2">
                <span className="font-semibold">Pendidikan Terakhir:</span>
                <span>S1 Teknik Informatika</span>
              </div>
            </div>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default About;
