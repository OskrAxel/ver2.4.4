import { Routes, Route } from "react-router-dom";
import ListUser from "./Pages/Admin/Crud";
import Dashboard from "./Pages/Admin/dashboard";
import ListUserAdm from "./Pages/Admin/Crud-Adm";
import ListUserPat from "./Pages/Admin/Crud-Pat";
import Informe from "./Pages/Admin/informe";
import Informe2 from "./Pages/Admin/informe2";
import CardPdf from "./Pages/Admin/inf3";
import Protected from "./utils/Protected";
import LoginBec from "./utils/loginBec";
import LoginPer from "./utils/loginPer";
import LoginAdm from "./utils/loginAdm";
import Registro from "./Pages/Bec/Index";
import Horarios from "./Pages/Bec/Horarios";
import Sales from "./Pages/Sales";
import Clients from "./Pages/Clients";
import NavbarBec from "./components/NavbarBec";
import NavbarAdm from "./components/NavbarAdm";
import NavbarPer from "./components/NavbarPer";
import NavbarLogin from "./components/NavbarLogin";
import RegComp from "./Pages/Bec/RegComp";
import ListBe from "./Pages/Per/Bec";
import ListPat from "./Pages/Per/Pat";
import Evalua from "./Pages/Per/Evalua";
import CargaDoc from "./Pages/Per/CargaDoc";
import Analisis from "./Pages/Per/Analisis";
import Pdf2 from "./Pages/Per/pdfconv";
import Pdfman from "./Pages/Per/pdfman";
import Ini from "./Pages/Per/Index";
import RegPer from "./Pages/Per/RegPer";

function AppAdm() {
  return (
    <div className="flex">
      <div className="content w-100">
        <Routes>
          <Route path="/" element={<NavbarLogin />}>
            <Route exact path="/" element={<LoginBec />} />
            <Route path="/LoginAdm" element={<LoginAdm />} />
            <Route path="/LoginPer" element={<LoginPer />} />
          </Route>
          {/* //// */}
          <Route path="/" element={<NavbarAdm />}>
            {/* //Administrador */}
            <Route
              path="/dashboard"
              element={<Protected Component={Dashboard} />}
            />
            <Route
              path="/usuarios"
              element={<Protected Component={ListUser} />}
            />
            <Route
              path="/personal"
              element={<Protected Component={ListUserAdm} />}
            />
            <Route
              path="/patrocinador"
              element={<Protected Component={ListUserPat} />}
            />
            <Route
              path="/informe"
              element={<Protected Component={Informe} />}
            />
            <Route
              path="/informe2"
              element={<Protected Component={Informe2} />}
            />
            <Route path="/pdf" element={<Protected Component={CardPdf} />} />
          </Route>
          {/* //// */}
          <Route path="/" element={<NavbarBec />}>
            {/* //Becario */}
            <Route
              path="/inicio"
              element={<Protected Component={Registro} />}
            />
            <Route
              path="/regcomp"
              element={<Protected Component={RegComp} />}
            />
            <Route
              path="/horarios"
              element={<Protected Component={Horarios} />}
            />
            <Route path="/sales" element={<Protected Component={Sales} />} />
            <Route
              path="/clients"
              element={<Protected Component={Clients} />}
            />
          </Route>
          {/* //// */}
          <Route path="/" element={<NavbarPer />}>
            {/* //Personal */}
            <Route path="/ini" element={<Protected Component={Ini} />} />
            <Route path="/regper" element={<Protected Component={RegPer} />} />
            <Route
              path="/becarios"
              element={<Protected Component={ListBe} />}
            />
            <Route path="/patro" element={<Protected Component={ListPat} />} />
            <Route path="/evaluar" element={<Protected Component={Evalua} />} />
            <Route
              path="/cargar"
              element={<Protected Component={CargaDoc} />}
            />
            <Route
              path="/analisis"
              element={<Protected Component={Analisis} />}
            />
            <Route path="/pdf2" element={<Protected Component={Pdf2} />} />
            <Route path="/pdfman" element={<Protected Component={Pdfman} />} />
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default AppAdm;
