"use strict";(self.webpackChunkemerald_sys_pki_docs=self.webpackChunkemerald_sys_pki_docs||[]).push([[682],{5303:function(e,t,a){a.r(t);var s=a(7294),c=a(5414),n=a(5072),l=a(9275),r=a(3375);t.default=function(){return s.createElement("main",null,s.createElement(c.q,null,s.createElement("title",null,"EmeraldSys PKI Docs | OCSP")),s.createElement(n.Z,null),s.createElement(l.Z,null),s.createElement("div",{className:"docsContent"},s.createElement("span",{className:"titleBold"},"OCSP API"),s.createElement("p",{className:"spacing"}),s.createElement("p",{className:"contentLight"},"This section of the documentation covers the OCSP (Online Certificate Status Protocol) API."),s.createElement("p",{className:"contentCode"},"https://ocsp.pki.emeraldsys.xyz"),s.createElement("p",{className:"contentLight"},"You can download EmeraldSys intermediate certificates ",s.createElement("a",{href:"https://crt.pki.emeraldsys.xyz",style:{color:"#fff"}},"here"),"."),s.createElement("div",{id:"fetchCertStatusAuto",className:"docsContentSection"},s.createElement("span",{className:"subtitleBold"},"Fetching a Certificate's Status (Auto)"),s.createElement("p",{className:"spacing"}),s.createElement("p",{className:"contentCode"},"POST /"),s.createElement("p",{className:"spacing"}),s.createElement("p",{className:"contentLight"},"This endpoint allows you to fetch a certificate's status from the OCSP API, automatically setting the certificate to sign the response with. Content-Type header must be set to application/ocsp-request and the request body must be a valid binary encoded OCSP request."),s.createElement("p",{className:"spacing"}),s.createElement("div",{id:"openSslExampleAuto"},s.createElement("span",{className:"sectionSubtitleExtraBold"},"OpenSSL Example"),s.createElement("p",{className:"spacing"}),s.createElement("p",{className:"contentCode"},'openssl ocsp -issuer "<Intermediate issuer path>" -cert "<Certificate path>" -text -url http://ocsp.pki.emeraldsys.xyz'))),s.createElement("p",{className:"spacing"}),s.createElement("div",{id:"fetchCertStatusManual",className:"docsContentSection"},s.createElement("span",{className:"subtitleBold"},"Fetching a Certificate's Status (Manual)"),s.createElement("p",{className:"spacing"}),s.createElement("p",{className:"contentCode"},"POST /trustedid_code2022",s.createElement("br",null),"POST /trustedid_ov2022",s.createElement("br",null),"POST /trustedid_ts2022"),s.createElement("p",{className:"spacing"}),s.createElement("p",{className:"contentLight"},"This endpoint allows you to fetch a certificate's status from the OCSP API, manually setting the certificate to sign the response with. Content-Type header must be set to application/ocsp-request and the request body must be a valid binary encoded OCSP request."),s.createElement("p",{className:"spacing"}),s.createElement("div",{id:"openSslExampleManual"},s.createElement("span",{className:"sectionSubtitleExtraBold"},"OpenSSL Example"),s.createElement("p",{className:"spacing"}),s.createElement("p",{className:"contentCode"},'openssl ocsp -issuer "<Intermediate issuer path>" -cert "<Certificate path>" -text -url http://ocsp.pki.emeraldsys.xyz/trustedid_code2022',s.createElement("br",null),'openssl ocsp -issuer "<Intermediate issuer path>" -cert "<Certificate path>" -text -url http://ocsp.pki.emeraldsys.xyz/trustedid_ov2022',s.createElement("br",null),'openssl ocsp -issuer "<Intermediate issuer path>" -cert "<Certificate path>" -text -url http://ocsp.pki.emeraldsys.xyz/trustedid_ts2022')))),s.createElement(r.Z,null))}}}]);
//# sourceMappingURL=component---src-pages-ocsp-js-56ad00ffad7e6cc3a0fc.js.map