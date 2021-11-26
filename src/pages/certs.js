import * as React from "react"
import "../styles/index.css"
import { Helmet } from "react-helmet"
import Header from "../components/Header.js"
import Sidebar from "../components/Sidebar.js"
import Footer from "../components/Footer.js"

const RootCertsPage = () => {
    return (
        <main>
            <Helmet>
                <title>EmeraldSys PKI Docs | Certificates</title>
            </Helmet>
            <Header />
            <Sidebar />
            <div className="docsContent">
                <span className="titleBold">Certificates</span>
                <p className="spacing" />
                <p className="contentLight">This section of the documentation covers our root certificates and intermediate certificates.</p>
                <table className="roots">
                   <tbody>
                       <tr>
                           <td className="label" nowrap="nowrap">
                               <span>EmeraldSys TrustedID Root Authority 2022</span>
                               <p className="spacing" />
                               <span><a href="https://crt.pki.emeraldsys.xyz/trusted_id_root_2022.crt" style={{ color: "#fff", textDecoration: "none" }}>Download CRT</a></span>
                           </td>
                           <td className="details" nowrap="nowrap">
                               <span>Certificate Type: Root</span>
                               <p className="spacing" />
                               <span>Valid until: 06/Oct/2037</span>
                               <p className="spacing" />
                               <span>Serial #: <span className="contentHex">41:F0:9C:02:F6:8E:ED:FF</span></span>
                               <p className="spacing" />
                               <span>SHA1 Fingerprint: <span className="contentHex">9A:BD:BC:5D:8E:B4:DE:22:3C:BE:3B:16:E0:6B:75:AD:76:B4:07:06</span></span>
                               <p className="spacing" />
                               <span>SHA256 Fingerprint: <span className="contentHex">20:E6:FE:B2:2B:53:97:DD:D1:31:58:7B:E1:86:95:04:19:BC:FC:A9:60:73:BA:1D:02:98:0A:40:1C:F7:4B:9F</span></span>
                           </td>
                       </tr>
                       <tr>
                           <td className="label" nowrap="nowrap">
                               <span>EmeraldSys TrustedID Secure Server OV CA2</span>
                               <p className="spacing" />
                               <span><a href="https://crt.pki.emeraldsys.xyz/trustedid_ov2022.crt" style={{ color: "#fff", textDecoration: "none" }}>Download CRT</a></span>
                           </td>
                           <td className="details" nowrap="nowrap">
                               <span>Certificate Type: Intermediate</span>
                               <p className="spacing" />
                               <span>Issuer: EmeraldSys TrustedID Root Authority 2022</span>
                               <p className="spacing" />
                               <span>Valid until: 07/Oct/2030</span>
                               <p className="spacing" />
                               <span>Serial #: <span className="contentHex">58:7A:BC:44:36:87:F1:9E</span></span>
                               <p className="spacing" />
                               <span>SHA1 Fingerprint: <span className="contentHex">9A:6A:EF:1D:E0:4C:AA:5D:3F:D8:C7:9A:D0:93:D8:63:30:EF:3D:7A</span></span>
                               <p className="spacing" />
                               <span>SHA256 Fingerprint: <span className="contentHex">96:55:20:93:CF:9F:51:FE:A0:0C:ED:D7:65:F9:CA:FA:E8:6D:A2:99:34:9B:FA:A8:E7:61:95:29:4B:20:28:8E</span></span>
                           </td>
                       </tr>
                       <tr>
                           <td className="label" nowrap="nowrap">
                               <span>EmeraldSys TrustedID Secure Server EV CA</span>
                               <p className="spacing" />
                               <span><a href="https://crt.pki.emeraldsys.xyz/trustedid_ev2022.crt" style={{ color: "#fff", textDecoration: "none" }}>Download CRT</a></span>
                           </td>
                           <td className="details" nowrap="nowrap">
                               <span>Certificate Type: Intermediate</span>
                               <p className="spacing" />
                               <span>Issuer: EmeraldSys TrustedID Root Authority 2022</span>
                               <p className="spacing" />
                               <span>Valid until: 13/Nov/2029</span>
                               <p className="spacing" />
                               <span>Serial #: <span className="contentHex">1C:59:B4:3B:71:6B:D6:DB</span></span>
                               <p className="spacing" />
                               <span>SHA1 Fingerprint: <span className="contentHex">BE:31:8A:F2:15:34:FA:35:CB:CD:EB:89:3C:B4:3E:E5:85:38:67:B0</span></span>
                               <p className="spacing" />
                               <span>SHA256 Fingerprint: <span className="contentHex">20:BB:44:A4:C5:F0:22:EB:21:4D:70:F4:9D:DB:D1:9E:39:BA:ED:8E:6B:22:1E:5A:86:00:07:B7:A7:19:64:0C</span></span>
                           </td>
                       </tr>
                       <tr>
                           <td className="label" nowrap="nowrap">
                               <span>EmeraldSys TrustedID Code Signing CA - SHA2</span>
                               <p className="spacing" />
                               <span><a href="https://crt.pki.emeraldsys.xyz/trustedid_code2022.crt" style={{ color: "#fff", textDecoration: "none" }}>Download CRT</a></span>
                           </td>
                           <td className="details" nowrap="nowrap">
                               <span>Certificate Type: Intermediate</span>
                               <p className="spacing" />
                               <span>Issuer: EmeraldSys TrustedID Root Authority 2022</span>
                               <p className="spacing" />
                               <span>Valid until: 06/Oct/2030</span>
                               <p className="spacing" />
                               <span>Serial #: <span className="contentHex">60:2F:78:63:4C:8B:6C:8D</span></span>
                               <p className="spacing" />
                               <span>SHA1 Fingerprint: <span className="contentHex">0D:FD:C0:01:CA:F1:AD:84:37:96:E7:CF:74:01:E8:BF:7F:4B:2C:39</span></span>
                               <p className="spacing" />
                               <span>SHA256 Fingerprint: <span className="contentHex">C7:C5:A3:28:10:3B:F7:EC:83:55:7F:B7:72:AE:0E:F3:CC:A4:61:58:EC:48:A1:73:D0:6F:A6:26:53:E5:76:FE</span></span>
                           </td>
                       </tr>
                       <tr>
                           <td className="label" nowrap="nowrap">
                               <span>EmeraldSys TrustedID Timestamping CA2</span>
                               <p className="spacing" />
                               <span><a href="https://crt.pki.emeraldsys.xyz/trustedid_ts2022.crt" style={{ color: "#fff", textDecoration: "none" }}>Download CRT</a></span>
                           </td>
                           <td className="details" nowrap="nowrap">
                               <span>Certificate Type: Intermediate</span>
                               <p className="spacing" />
                               <span>Issuer: EmeraldSys TrustedID Root Authority 2022</span>
                               <p className="spacing" />
                               <span>Valid until: 06/Oct/2030</span>
                               <p className="spacing" />
                               <span>Serial #: <span className="contentHex">53:93:BB:CD:26:F9:F0:D9</span></span>
                               <p className="spacing" />
                               <span>SHA1 Fingerprint: <span className="contentHex">5C:11:EB:3B:F3:67:BE:22:EE:DF:EB:DA:7F:11:47:6E:41:B6:DD:BC</span></span>
                               <p className="spacing" />
                               <span>SHA256 Fingerprint: <span className="contentHex">5C:8C:22:38:2D:16:FA:2D:4A:7E:D0:DF:2F:4D:8B:D8:30:F7:9B:EA:8E:47:90:EF:63:C5:6C:47:0F:B0:3A:7A</span></span>
                           </td>
                       </tr>
                   </tbody>
                </table>
            </div>
            <Footer />
        </main>
    );
};

export default RootCertsPage