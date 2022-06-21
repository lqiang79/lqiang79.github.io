function FindProxyForURL(url, host) {
    var privateIP = /^(0|10|127|192\.168|172\.1[6789]|172\.2[0-9]|172\.3[01]|169\.254|192\.88\.99)\.[0-9.]+$/;
    var identIP;
    var lhost = host.toLowerCase();
    host = lhost;

    if (isPlainHostName(host) || privateIP.test(host))
        return "DIRECT";

    if (typeof identIP == "undefined") {
        identIP = dnsResolve("ident.kuehne-nagel.com");
    }

    reip = /^\d+\.\d+\.\d+\.\d+$/g;
    if (reip.test(host)) {
        if (isInNet(host, "57.66.73.0", "255.255.255.0") ||
            isInNet(host, "185.117.252.0", "255.255.254.0") ||
            isInNet(host, "185.117.254.128", "255.255.255.128") ||
            isInNet(host, "185.117.255.0", "255.255.255.0") ||
            isInNet(host, "62.112.24.0", "255.255.252.0") ||
            isInNet(host, "57.68.52.0", "255.255.255.0") ||
            isInNet(host, "57.73.7.192", "255.255.255.192") ||
            isInNet(host, "57.66.105.0", "255.255.255.128") ||
            isInNet(host, "216.72.247.0", "255.255.255.0") ||
            isInNet(host, "216.72.250.80", "255.255.255.248") ||
            isInNet(host, "57.217.16.0", "255.255.254.0") ||
            isInNet(host, "57.217.18.0", "255.255.255.0") ||
            isInNet(host, "57.217.19.240", "255.255.255.240") ||
            isInNet(host, "57.68.55.200", "255.255.255.255") ||
            isInNet(host, "57.66.70.248", "255.255.255.255") ||
            isInNet(host, "57.66.70.249", "255.255.255.255") ||
            isInNet(host, "57.73.7.152", "255.255.255.255") ||
            isInNet(host, "57.66.73.92", "255.255.255.255") ||
            isInNet(host, "62.112.28.0", "255.255.255.0") ||
            isInNet(host, "17.34.177.35", "255.255.255.255")
        ) {
            return "DIRECT";
        }
    }

    if (dnsDomainIs(host, ".kuehne-nagel.com") ||
        dnsDomainIs(host, ".kn-portal.com") ||
        dnsDomainIs(host, ".amazonaws.com")) {
        var hostip = dnsResolve(host);
        if (isInNet(hostip, "127.0.0.1", "255.0.0.0") ||
            isInNet(hostip, "10.0.0.0", "255.0.0.0") ||
            isInNet(hostip, "172.16.0.0", "255.240.0.0") ||
            isInNet(hostip, "192.168.0.0", "255.255.0.0") ||
            isInNet(hostip, "185.117.252.0", "255.255.252.0") ||
            isInNet(hostip, "62.112.24.0", "255.255.252.0") ||
            isInNet(hostip, "57.66.73.0", "255.255.255.0") ||
            isInNet(hostip, "57.68.52.0", "255.255.255.0") ||
            isInNet(hostip, "57.73.7.192", "255.255.255.192") ||
            isInNet(hostip, "57.66.105.0", "255.255.255.128") ||
            isInNet(hostip, "216.72.247.0", "255.255.255.0") ||
            isInNet(hostip, "216.72.250.80", "255.255.255.248") ||
            isInNet(hostip, "57.217.16.0", "255.255.254.0") ||
            isInNet(hostip, "57.217.18.0", "255.255.255.0") ||
            isInNet(hostip, "57.217.19.240", "255.255.255.240") ||
            isInNet(hostip, "57.68.55.200", "255.255.255.255") ||
            isInNet(hostip, "57.73.7.152", "255.255.255.255") ||
            isInNet(hostip, "57.66.73.92", "255.255.255.255") ||
            isInNet(hostip, "100.64.0.0", "255.255.0.0") ||
            isInNet(hostip, "17.34.177.35", "255.255.255.255") ||
            isInNet(hostip, "62.112.28.0", "255.255.255.0") ||
            isInNet(hostip, "200.44.2.0", "255.255.255.0")
        )
            return "DIRECT";
    }

    if (dnsDomainIs(host, ".int.kn") ||
        dnsDomainIs(host, ".local") ||
        dnsDomainIs(host, ".us.int.kn") ||
        dnsDomainIs(host, "secureapi.retransfreight.com") ||
        dnsDomainIs(host, "pac.zscaler.net") ||
        dnsDomainIs(host, "apm.knags.net") ||
        dnsDomainIs(host, "oob-a.knags.net") ||
        dnsDomainIs(host, "oob-n.knags.net") ||
        dnsDomainIs(host, "mykn.community") ||
        dnsDomainIs(host, ".kn-logistics.com") ||
        dnsDomainIs(host, ".kn-portal.com") ||
        dnsDomainIs(host, "myapps.mars") ||
        dnsDomainIs(host, "lsp.toplogis.com") ||
        dnsDomainIs(host, "c1688.toplogis.com") ||
        dnsDomainIs(host, "ams.iesltd.com") ||
        dnsDomainIs(host, "demo.iesltd.com") ||
        dnsDomainIs(host, "ccs-fw.net") ||
        dnsDomainIs(host, "mysecure-gateway.orange-business.com") ||
        dnsDomainIs(host, "cerbere.airbus.com") ||
        dnsDomainIs(host, "gate-fr.airbus.com") ||
        dnsDomainIs(host, "tpc.internal.ericsson.com") ||
        dnsDomainIs(host, "partnerlogin.emea.ericsson.se") ||
        dnsDomainIs(host, "wqmt.bs.sw.ericsson.se") ||
        dnsDomainIs(host, "webopen2.bs.sw.ericsson.se") ||
        dnsDomainIs(host, "ericoll.internal.ericsson.com") ||
        dnsDomainIs(host, "pwdreset-asl.akquinet.de") ||
        dnsDomainIs(host, ".corp.apple.com") ||
        dnsDomainIs(host, "wdg1.apple.com") ||
        dnsDomainIs(host, "wdg2.apple.com") ||
        dnsDomainIs(host, "directfreight.com.au") ||
        dnsDomainIs(host, "glex.com.my") ||
        dnsDomainIs(host, "info.gols.fr") ||
        dnsDomainIs(host, "xcgw.egger.com") ||
        dnsDomainIs(host, "lastword.argos360.com") ||
        dnsDomainIs(host, "rma.bell.ca") ||
        dnsDomainIs(host, ".bellmobility.ca") ||
        dnsDomainIs(host, "oneview.bell.ca") ||
        dnsDomainIs(host, "oneview.virginmobile.ca") ||
        dnsDomainIs(host, "mjbatreports.com") ||
        dnsDomainIs(host, "bis.doc.gov") ||
        dnsDomainIs(host, "smartanalysis.com") ||
        dnsDomainIs(host, "nespath.nespresso.com") ||
        dnsDomainIs(host, "apps.casa.eads.net") ||
        dnsDomainIs(host, "gwc.tnt.com") ||
        dnsDomainIs(host, "standardchartered.ebank-services.com") ||
        dnsDomainIs(host, "itpmis.ptp.com.my") ||
        dnsDomainIs(host, "navis.ptp.com.my") ||
        dnsDomainIs(host, ".opensys.com.au") ||
        dnsDomainIs(host, "ireport.sec.gov.ph") ||
        dnsDomainIs(host, "marketplace.travelport.com") ||
        dnsDomainIs(host, "webmail.wp.corpshared.net") ||
        dnsDomainIs(host, "*.teconline.com.br") ||
        dnsDomainIs(host, "ftp02.tsmc.com") ||
        dnsDomainIs(host, "hq-web03.ita.doc.gov") ||
        dnsDomainIs(host, "extranetpep4.pemex.com") ||
        dnsDomainIs(host, "ts-amcs.ericsson.se") ||
        dnsDomainIs(host, "147.117.21.44") ||
        dnsDomainIs(host, "ts-emea.ericsson.se") ||
        dnsDomainIs(host, "153.88.124.21") ||
        dnsDomainIs(host, "www.cmforwarding.com") ||
        dnsDomainIs(host, "siscomex.desenvolvimento.gov.br") ||
        dnsDomainIs(host, ".advancedextractionsystems.com") ||
        dnsDomainIs(host, "teconline.com.br") ||
        dnsDomainIs(host, "m.cfi-lax.com") ||
        dnsDomainIs(host, "www.oocl.com") ||
        dnsDomainIs(host, "ite-prod-cdn-end.azureedge.net") ||
        shExpMatch(host, "*.sperrefish.com") ||
        shExpMatch(host, "*.ibpmail.com*") ||
        shExpMatch(host, "packages.dmd.metaservices.microsoft.com*") ||
        shExpMatch(host, "*.int.kn:8085") ||
        shExpMatch(host, "*.extranetpep4.pemex.com*") ||
        shExpMatch(host, "www.grimshaw-trucking.com") ||
        shExpMatch(host, " *.cmforwarding.com") ||
        shExpMatch(host, "*.embanet.com") ||
        shExpMatch(host, "*.application.wktransportservices.com") ||
        shExpMatch(host, "*.ecargo.csclxm.com:8080") ||
        shExpMatch(host, "*.iawh.cargokorea.com:8080") ||
        shExpMatch(host, "*.cas-dhl.ex.servisco.com.pl:3711") ||
        shExpMatch(host, "*.villa.zebra") ||
        shExpMatch(host, "*.hays-bnl.com") ||
        shExpMatch(host, "*my.timocom.com") ||
        shExpMatch(host, "*vtl.de") ||
        shExpMatch(host, "*select.dhl.com") ||
        shExpMatch(host, "*www-s1p.3pkey.com") ||
        shExpMatch(host, "*world-register.org") ||
        shExpMatch(host, "*alpo.dbh.de") ||
        shExpMatch(host, "*nepro.mylogsupply.com") ||
        shExpMatch(host, "*nepretest.mylogsupply.com") ||
        shExpMatch(host, "gerssl.zim.com") ||
        shExpMatch(host, "ftps.lbelusa.com") ||
        shExpMatch(host, "62.219.95.10*") ||
        shExpMatch(host, "citi-cyber.co.il") ||
        shExpMatch(host, "212.199.46.218*") ||
        shExpMatch(host, "212.199.46.219*") ||
        shExpMatch(host, "164.9.104.198*") ||
        shExpMatch(host, "81.128.176.11*") ||
        shExpMatch(host, "81.128.176.33*") ||
        shExpMatch(host, "*turktrust.com.tr*") ||
        shExpMatch(host, "41.160.4.49*") ||
        shExpMatch(host, "www.isl2-ware.com") ||
        shExpMatch(host, "*tact-online.org") ||
        shExpMatch(host, "www2.tact-online.org") ||
        shExpMatch(host, "165.198.232.80*") ||
        shExpMatch(host, "165.198.232.81*") ||
        shExpMatch(host, "ftp.lcbo.com") ||
        shExpMatch(host, "www.tivian4kuehne-nagel.com") ||
        shExpMatch(host, "*sdc.oocl.com") ||
        shExpMatch(host, "meet.beiersdorf.com") ||
        shExpMatch(host, "webconf02.beiersdorf.com") ||
        shExpMatch(host, "av02.beiersdorf.com") ||
        shExpMatch(host, "sip.beiersdorf.com") ||
        shExpMatch(host, "lync*ws.beiersdorf.com") ||
        shExpMatch(host, "217.111.75.85") ||
        shExpMatch(host, "211.193.193.169") ||
        shExpMatch(host, "axess-fr.airbus.corp") ||
        shExpMatch(host, "195.6.25.35") ||
        shExpMatch(host, "ebisa.bisa.com") ||
        shExpMatch(host, "saigsa-conscripto.ath.cx") ||
        shExpMatch(host, "csahouston.com") ||
        shExpMatch(host, "hq-web03.ita.doc.gov") ||
        shExpMatch(host, ".smc3.com") ||
        shExpMatch(host, ".bis.doc.gov") ||
        shExpMatch(host, "local.ccis.se") ||
        shExpMatch(host, "115.238.173.82") ||
        shExpMatch(host, "153.88.139.101") ||
        shExpMatch(host, "153.88.245.250") ||
        shExpMatch(host, "203.115.193.116") ||
        shExpMatch(host, "203.115.193.121") ||
        shExpMatch(host, "203.189.18.111") ||
        shExpMatch(host, "203.115.193.122") ||
        shExpMatch(host, "53.71.109.131") ||
        shExpMatch(host, "53.31.69.190") ||
        dnsDomainIs(host, "e.corpintra.net") ||
        shExpMatch(host, "portal.tca.aero") ||
        dnsDomainIs(host, "hiproscm.hhi.co.kr") ||
        dnsDomainIs(host, "apcs3.changiairport.com") ||
        shExpMatch(host, "53.31.68.10") ||
        dnsDomainIs(host, "ctp.app.corpintra.net") ||
        shExpMatch(host, "voip-ssp.kuehne-nagel.omniacloud.nl") ||
        shExpMatch(host, "ssp.kuehne-nagel.omniacloud.nl") ||
        dnsDomainIs(host, "cnsonline.net") ||
        dnsDomainIs(host, "wcp.app.corpintra.net") ||
        dnsDomainIs(host, "kanview.prolinx.uk") ||
        dnsDomainIs(host, "ezycargo.com") ||
        dnsDomainIs(host, ".glshk.com") ||
        dnsDomainIs(host, "euidp-acc.aholddelhaize.com") ||
        dnsDomainIs(host, "euidp.aholddelhaize.com") ||
        dnsDomainIs(host, "outsystems-logistics.ah.nl") ||
        dnsDomainIs(host, "outsystems-logistics-acc.ah.nl") ||
        dnsDomainIs(host, "external.qps.cnhind.com") ||
        dnsDomainIs(host, "internal.qps.cnhind.com") ||
        dnsDomainIs(host, "cms.qps.cnhind.com") ||
        dnsDomainIs(host, "adfs.core.cnhind.com") ||
        dnsDomainIs(host, "jira.cnhind.com") ||
        dnsDomainIs(host, "awsbuxnvaw0001.jnj.com") ||
        dnsDomainIs(host, "awsbuxnvaw0002.jnj.com") ||
        dnsDomainIs(host, "confluence.wnad.net") ||
        dnsDomainIs(host, "lanetix.auth0.com") ||		
        dnsDomainIs(host, "jira.wnad.net")
    )
        return "DIRECT";

    var hostip = dnsResolve(host);
    if (isInNet(hostip, "127.0.0.1", "255.0.0.0") ||
        isInNet(hostip, "10.0.0.0", "255.0.0.0") ||
        isInNet(hostip, "172.16.0.0", "255.240.0.0") ||
        isInNet(hostip, "192.168.0.0", "255.255.0.0") ||
        isInNet(hostip, "185.117.252.0", "255.255.252.0") ||
        isInNet(hostip, "62.112.24.0", "255.255.252.0") ||
        isInNet(hostip, "57.66.73.0", "255.255.255.0") ||
        isInNet(hostip, "57.68.52.0", "255.255.255.0") ||
        isInNet(hostip, "57.73.7.192", "255.255.255.192") ||
        isInNet(hostip, "57.66.105.0", "255.255.255.128") ||
        isInNet(hostip, "216.72.247.0", "255.255.255.0") ||
        isInNet(hostip, "216.72.250.80", "255.255.255.248") ||
        isInNet(hostip, "57.217.16.0", "255.255.254.0") ||
        isInNet(hostip, "57.217.18.0", "255.255.255.0") ||
        isInNet(hostip, "57.217.19.240", "255.255.255.240") ||
        isInNet(hostip, "57.68.55.200", "255.255.255.255") ||
        isInNet(hostip, "57.73.7.152", "255.255.255.255") ||
        isInNet(hostip, "57.66.73.92", "255.255.255.255") ||
        isInNet(hostip, "100.64.0.0", "255.255.0.0") ||
        isInNet(hostip, "17.34.177.35", "255.255.255.255") ||
        isInNet(host, "62.112.28.0", "255.255.255.0") ||
        isInNet(hostip, "200.44.2.0", "255.255.255.0")
    )
        return "DIRECT";

    if (url.substring(0, 22) == "ftp://gdo.tesi-tc1.net")
        return "DIRECT";

    if (dnsDomainIs(host, "asyw.customs.gov.jo") ||
        shExpMatch(host, "87.246.78.169") ||
        shExpMatch(host, "193.188.65.149") ||
        shExpMatch(host, "194.165.138.243") ||
        dnsDomainIs(host, ".transnet.net") ||
        dnsDomainIs(host, ".transnet-tpt.net") ||
        dnsDomainIs(host, ".faw.at") ||
        dnsDomainIs(host, "svlogistik.com") ||
        dnsDomainIs(host, ".winfleet.lu") ||
        dnsDomainIs(host, ".doc.gov") ||
        dnsDomainIs(host, "bronn.qvalitas.ee") ||
        dnsDomainIs(host, "allergan.okta.com") ||
        dnsDomainIs(host, "anywhere.diageo.com") ||
        dnsDomainIs(host, ".metaservices.microsoft.com") ||
        shExpMatch(host, "tpegw001.shipmentchain.com") ||
        shExpMatch(host, "dams.akquinet.de") ||
        shExpMatch(host, "kun-dams.akquinet.de") ||
        shExpMatch(host, "guatemala.colpalapp.com") ||
        shExpMatch(host, "access1.upm-kymmene.com") ||
        shExpMatch(host, "ne4.upm.com") ||
        shExpMatch(host, "ap4.upm.com") ||
        shExpMatch(host, "na4.upm.com") ||
        shExpMatch(host, "sa4.upm.com") ||
        shExpMatch(host, "sftn.upm.com") ||
        shExpMatch(host, "sftp.who.org") ||
        shExpMatch(host, "sftp.who.int") ||
        shExpMatch(host, "www.standard.no") ||
        shExpMatch(host, "www.qrcargo.com") ||
        dnsDomainIs(host, "pa.ubpo.ru") ||
        shExpMatch(host, "www.bis.doc.gov") ||
        shExpMatch(host, "git.ortec-hosting.com") ||
        dnsDomainIs(host, "orglabsolutions.com") ||
        shExpMatch(host, "flexible-computing-advanced.orange-business.ru") ||
        dnsDomainIs(host, "rj-cargo.com") ||
        dnsDomainIs(host, "cv.ee") ||
        dnsDomainIs(host, "kunservice.akquinet.de") ||
        dnsDomainIs(host, "umweltbundesamt.de") ||
        dnsDomainIs(host, "kipis.lt") ||
        dnsDomainIs(host, "104.24.17.42") ||
        dnsDomainIs(host, "212.252.63.110") ||
        dnsDomainIs(host, "212.252.63.110") ||
        dnsDomainIs(host, "license1.logo.com.tr") ||
        dnsDomainIs(host, "license2.logo.com.tr") ||
        dnsDomainIs(host, "iqos.com") ||
        dnsDomainIs(host, "webcargonet.com") ||
        (isInNet(myIpAddress(), "10.32.0.0", "255.224.0.0") && dnsDomainIs(host, "eu2-cloud.acronis.com")) ||
        (isInNet(myIpAddress(), "10.32.0.0", "255.224.0.0") && dnsDomainIs(host, "cloud.acronis.com")) ||
        dnsDomainIs(host, "rstudio.kn.logindex.com") ||
        dnsDomainIs(host, "213.128.133.101") ||
        shExpMatch(host, "ctx-emea-ext.littleover.net") ||
        dnsDomainIs(host, "destin8.co.uk") ||
        dnsDomainIs(host, "mojporscheleasing.si") ||
        dnsDomainIs(host, "sncpp.coop.co.uk") ||
        dnsDomainIs(host, "upm.com") ||
        dnsDomainIs(host, "gestion.dynamicview.fr") ||
        shExpMatch(host, "elc.nike.com") ||
        dnsDomainIs(host, "inst-001f0502.servers.dedipower.net") ||
        dnsDomainIs(host, "www.elogiflux.com") ||
        dnsDomainIs(host, "www.station-chargeur.com") ||
        dnsDomainIs(host, "extranet.hamburg-messe.de") ||
        dnsDomainIs(host, "cloud.rotra.eu") ||
        dnsDomainIs(host, "www.cargosmart.com") ||
        dnsDomainIs(host, "apportal.nokia.com") ||
        shExpMatch(host, "*.mykds.com") ||
        shExpMatch(host, "*.jdadelivers.com") ||
        shExpMatch(host, "*.gov.hr") ||
        shExpMatch(host, "*.zalando.net") ||
        shExpMatch(host, "elcweb.nike.com") ||
        shExpMatch(host, "kn.softmachine.es") ||
        shExpMatch(host, "hdl.stute-it.de") ||
        shExpMatch(host, "formio.stute-it.de") ||
        shExpMatch(host, "opa-test.stute-it.de") ||
        shExpMatch(host, "opa.stute-it.de") ||
        dnsDomainIs(host, "oma.stute-it.de") ||
        dnsDomainIs(host, "lagertv.stute-it.de") ||
        shExpMatch(host, ".pmiapps.biz") ||
        shExpMatch(host, ".openrequestkn.cz") ||
        dnsDomainIs(host, ".alohaaircargo.com") ||
        dnsDomainIs(host, ".cigna.com") ||
        dnsDomainIs(host, ".ta-retirement.com") ||
        shExpMatch(host, "*.cloud.detego.com") ||
        dnsDomainIs(host, "knadbidmanagement.kahootz.com") ||
        dnsDomainIs(host, "view.pagetiger.com") ||
        dnsDomainIs(host, "swan.forego.hu") ||
        dnsDomainIs(host, "bp.ebiz.kcmkt.com") ||
        dnsDomainIs(host, "hub.webcargonet.com") ||
        dnsDomainIs(host, "integration-pre.test-freightos.com") ||
        dnsDomainIs(host, "b2btst.infineon.com") ||
        dnsDomainIs(host, "kuehne-nagel.timewize.nl") ||
        dnsDomainIs(host, "sicasonline.net") ||
        dnsDomainIs(host, ".sicasonline.net") ||
        dnsDomainIs(host, "nespath.nespresso.com") ||
        dnsDomainIs(host, "alpha.cloud.onventis.com") ||
        dnsDomainIs(host, ".microlise.com") ||
        dnsDomainIs(host, ".pullmanfleetservices.co.uk") ||
        dnsDomainIs(host, "pullmanfleetservices.co.uk") ||
        dnsDomainIs(host, "webservice.timocom.com") ||
        dnsDomainIs(host, "ws-test.timocom.com") ||
        dnsDomainIs(host, "fastretailing.service-now.com") ||
        dnsDomainIs(host, "p544275.webspaceconfig.de") ||
        dnsDomainIs(host, "aws-edx.bg-bcons.com") ||
        dnsDomainIs(host, ".nacora.com") ||
        dnsDomainIs(host, "il.iqos.com") ||
        dnsDomainIs(host, "gpm-kn4pl-live.portrix-ls.de") ||
        dnsDomainIs(host, "cwms.huawei.com") ||
        dnsDomainIs(host, "emhartglass.okta.com") ||
        dnsDomainIs(host, ".potbelly.com") ||
        dnsDomainIs(host, ".emcs.ws.hmrc.gov.uk") ||
        dnsDomainIs(host, "monitoring01.antemeta.net")
    )
        return "PROXY vzen.proxy.int.kn:80";

    if (isInNet(myIpAddress(), "10.86.0.0", "255.255.0.0") &&
        (dnsDomainIs(host, ".oocl.com") ||
            dnsDomainIs(host, ".cargosmart.ai") ||
            dnsDomainIs(host, ".hmm21.com") ||
            dnsDomainIs(host, ".cma-cgm.com") ||
            dnsDomainIs(host, ".walkme.com") ||
            dnsDomainIs(host, ".tslines.com") ||
            dnsDomainIs(host, ".hapag-lloyd.com") ||
            dnsDomainIs(host, ".ecuworldwide.com") ||
            dnsDomainIs(host, ".eculine.net") ||
            dnsDomainIs(host, ".polyfill.io") ||
            dnsDomainIs(host, ".globelink-group.com") ||
            dnsDomainIs(host, ".rawgit.com") ||
            dnsDomainIs(host, ".gslltd.com.hk") ||
            dnsDomainIs(host, ".pier2pier.com") ||
            dnsDomainIs(host, ".cookielaw.org") ||
            dnsDomainIs(host, ".pilship.com") ||
            dnsDomainIs(host, ".marinetraffic.com") ||
            dnsDomainIs(host, ".edgesuite.net") ||
            dnsDomainIs(host, ".zendesk.com") ||
            dnsDomainIs(host, ".abukai.com") ||
            dnsDomainIs(host, ".logindex.com") ||
            dnsDomainIs(host, ".frontify.com") ||
            dnsDomainIs(host, ".knnapshop.com") ||
            dnsDomainIs(host, ".wetransfer.com") ||
            dnsDomainIs(host, ".brightedge.com") ||
            dnsDomainIs(host, ".sendible.com") ||
            dnsDomainIs(host, ".scmp.com") ||
            dnsDomainIs(host, ".lloydsloadinglist.com") ||
            dnsDomainIs(host, ".supplychain247.com") ||
            dnsDomainIs(host, ".box.com") ||
            dnsDomainIs(host, ".nacora-e-insurance.com") ||
            dnsDomainIs(host, ".retarus.com") ||
            dnsDomainIs(host, ".landmarkeconnect.com") ||
            dnsDomainIs(host, ".next.co.uk") ||
            dnsDomainIs(host, ".oceanwidebridge.com") ||
            dnsDomainIs(host, ".jquery.com") ||
            dnsDomainIs(host, ".fontawesome.com") ||
            dnsDomainIs(host, ".eshipasia.com") ||
            dnsDomainIs(host, ".leanix.net") ||
            dnsDomainIs(host, ".navexglobal.com") ||
            dnsDomainIs(host, ".talmundo.com") ||
            dnsDomainIs(host, ".datasphere.ch") ||
            dnsDomainIs(host, ".zdassets.com") ||
            dnsDomainIs(host, ".coupahost.com") ||
            dnsDomainIs(host, ".gov.tw") ||
            dnsDomainIs(host, ".etrucknow.com") ||
            dnsDomainIs(host, "eu-central-1.amazonaws.com") ||
            dnsDomainIs(host, ".kornferry.eu") ||
            dnsDomainIs(host, ".csair.com") ||
            dnsDomainIs(host, ".zendesk.com") ||
            dnsDomainIs(host, ".csair.com") ||
            dnsDomainIs(host, ".samsungglp.com") ||
            dnsDomainIs(host, "www.anl.com.au") ||
            dnsDomainIs(host, "turkishcargo.com.tr") ||
            dnsDomainIs(host, "thy.com") ||
            dnsDomainIs(host, ".aig.com") ||
            dnsDomainIs(host, ".zim.com") ||
            dnsDomainIs(host, ".one-line.com") ||
            dnsDomainIs(host, ".transporeon.com")
        ))
        return "PROXY 10.200.0.34:80; PROXY zscaler.proxy.int.kn:80";

    if (dnsDomainIs(host, "www.ashdodport.co.il") ||
        dnsDomainIs(host, ".mil7.co.il") ||
        shExpMatch(host, "*.gov.il") ||
        dnsDomainIs(host, "igate.207.co.il") || dnsDomainIs(host, ".igate.207.co.il") ||
        dnsDomainIs(host, "207portal.co.il") || dnsDomainIs(host, ".207portal.co.il") ||
        dnsDomainIs(host, "smorotd.web.app") || dnsDomainIs(host, "smorotm.web.app") ||
        dnsDomainIs(host, ".smorotd.web.app") || dnsDomainIs(host, "export.ppis.co.il")
    )
        return "PROXY 94.188.248.71:80";

    if ((isInNet(identIP, "100.64.0.0", "255.255.0.0") || identIP == "185.117.252.7" || identIP == "62.112.28.129" || identIP == "57.68.52.42") &&
        (dnsDomainIs(host, ".ultipro.com")))
        return "DIRECT";

    if (isInNet(hostip, "100.64.0.0", "255.255.0.0")) {
        return "DIRECT";
    }

    return "PROXY 127.0.0.1:9000";
}
