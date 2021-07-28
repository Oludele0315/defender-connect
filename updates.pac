// PAC file to include in overall PAC file for your environment, or to use specifically to download Windows/Defender updates through Defender Connect
function FindProxyForURL(url, host) {
    // Your proxy server name and port
    var proxyserver = '192.168.0.55:3128';
    //
    //  Here's a list of hosts to connect via the PROXY server
    //
    var proxylist = new Array(
        "*.windowsupdate.com",
        "*.update.microsoft.com",
        "*.delivery.mp.microsoft.com",
        "*.definitionupdates.microsoft.com",
    );
    // Return our proxy name for matched domains/hosts
    for(var i=0; i<proxylist.length; i++) {
        var value = proxylist[i];
        if ( localHostOrDomainIs(host, value) ) {
            return "PROXY "+proxyserver;
        }
    }
    return "DIRECT";
}
