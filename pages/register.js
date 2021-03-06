import Email from "../components/molekul/Register/Email";
import Password from "../components/molekul/Register/Password";
import Days from "../components/molekul/Register/Days";
import Hour from "../components/molekul/Register/Hour";
import Name from "../components/molekul/Register/Name";
import Fade from "react-reveal/Fade";
import { useState, useEffect } from "react";
import Header from "../components/molekul/Register/Header";
import Stepper from "../components/atom/Stepper";
import Meta from "../components/atom/Stepper/Meta";
import MainContent from "../components/atom/Stepper/MainContent";
import Controller from "../components/atom/Stepper/Controller";
import Button from "../components/atom/Button";

export default function Register() {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    hour: "",
    days: [],
  });

  const onChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  const steps = {
    name: {
      title: "Nama",
      description: "Masukkan nama kamu agar kami mengenalimu",
      content: <Name onChange={onChange} value={data} />,
    },
    email: {
      title: "Email",
      description: "Masukan email kamu yang valid ya",
      content: <Email onChange={onChange} value={data} />,
    },
    password: {
      title: "Password",
      description: "Masukan password anda agar akun anda aman",
      content: <Password onChange={onChange} value={data} />,
    },
  };

  return (
    <div className="h-screen">
      <Header />
      <Stepper steps={steps}>
        {(nextStep, prevStep, CurrentStep, steps) => (
          <>
            <Meta data={steps} current={CurrentStep} />
            <MainContent data={steps} current={CurrentStep} />
            {CurrentStep === "name" && (
              <Controller>
                {data.name !== "" && (
                  <Fade>
                    <Button isPrimary hasShadow hasRounded onClick={nextStep}>
                      Lanjut
                    </Button>
                  </Fade>
                )}
                <Button
                  isSecondary
                  hasShadow
                  hasRounded
                  type="link"
                  href="landing-page"
                  className="mt-5"
                >
                  Cancel
                </Button>
              </Controller>
            )}
            {CurrentStep === "email" && (
              <Controller>
                {data.email !== "" && (
                  <Fade>
                    <Button isPrimary hasShadow hasRounded onClick={nextStep}>
                      Lanjut
                    </Button>
                  </Fade>
                )}
                <Button
                  isSecondary
                  hasShadow
                  hasRounded
                  onClick={prevStep}
                  className="mt-5"
                >
                  Back
                </Button>
              </Controller>
            )}
            {CurrentStep === "password" && (
              <Controller>
                {data.email !== "" && (
                  <Fade>
                    <Button isPrimary hasShadow hasRounded onClick={nextStep}>
                      Lanjut
                    </Button>
                  </Fade>
                )}
                <Button
                  isSecondary
                  hasShadow
                  hasRounded
                  onClick={prevStep}
                  className="mt-5"
                >
                  Back
                </Button>
              </Controller>
            )}
          </>
        )}
      </Stepper>
    </div>
  );
}
