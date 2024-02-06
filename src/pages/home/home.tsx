import { Button } from "@/components/ui/button";
import { socialMed } from "@/shared/constants";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";
import cvFile from "../../../public/files/CelozaUpdatedCV.pdf";
import "./home.scss";

const Homepage = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = cvFile;
    link.download = "CelozaUpdatedCV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });
  return (
    <div className="w-full  ">
      <div className="mx-10 min-h-screen flex flex-col md:grid md:grid-cols-[600px_1fr]  ">
        <div className="flex flex-col justify-center  gap-y-1  ">
          <h3 className="font-semibold text-3xl">
            Hello, It's Me <br />
            <span className="text-4xl">Mark Angelo Celoza</span>
          </h3>
          <h2 className="font-semibold text-3xl">
            And I'm a <span className="text-lime-500">Blank</span>
          </h2>
          <p>I'm a hard worker</p>
          <div className="flex gap-x-3">
            {socialMed.map((social, index) => {
              return (
                <Link to={social.path} key={index}>
                  <span className="text-3xl">{social.icons}</span>
                </Link>
              );
            })}
          </div>
          <Button className="max-w-fit" onClick={handleDownload}>
            Download Cv
          </Button>
        </div>
        <div className=" flex flex-col items-center ">
          <img
            ref={ref}
            src="/heroOnepiece.png"
            alt="heroImg"
            className={`imgAnimation w-[400px] ${inView && "animate"}`}
          />

          <h1>Mark</h1>

        </div>
      </div>
    </div>
  );
};

export default Homepage;
